import dataclasses
import json
import pathlib
import re
import sys

from effect.examples import ExampleBuilder
from effect.naming import (
    error_class_name,
    error_union_name,
    operation_binding,
    operation_name,
    operation_prefix,
    status_tag,
    stream_name,
)
from effect.types import (
    RenderContext,
    interface_fields,
    literal_value,
    model_dependencies,
    schema_expr,
    struct_expr,
    ts_type,
    union_dependencies,
    union_expr,
    uses_date_time,
)
from generator.casing import to_camel_case, to_snake_case
from generator.emitter import EmitterBase, Prerelease
from generator.ir import (
    APIIR,
    APIVersion,
    ErrorResponse,
    Method,
    Model,
    ModelRef,
    NamedUnion,
    Service,
    TypeRef,
    UnionRef,
    UnionType,
)

EMITTER_DIRECTORY = pathlib.Path(__file__).parent

_REEXPORT_PATTERN = re.compile(r"^export (type )?\{[^}]*\} from ")

_IMPORT_PATTERN = re.compile(
    r"^import (type )?(?:\{(?P<names>[^}]*)\}|\* as (?P<namespace>\w+)) from (?P<source>\"[^\"]+\");$"
)


@dataclasses.dataclass(frozen=True)
class ErrorClass:
    name: str
    tag: str
    status_code: int
    body_type: str | None
    schema: str | None
    description: str | None


@dataclasses.dataclass(frozen=True)
class MethodView:
    name: str
    binding: str
    description: str | None
    deprecated: bool
    signature: str
    call_arguments: str
    return_type: str
    request: str
    errors: list[ErrorClass]
    error_union: str | None
    stream_name: str | None
    stream_item_type: str | None
    stream_arguments: str | None


class EffectEmitter(EmitterBase):
    def __init__(
        self, ir: APIIR, version: str, *, prerelease: Prerelease | None = None
    ) -> None:
        super().__init__(
            ir, version, EMITTER_DIRECTORY / "template", prerelease=prerelease
        )

    def emit(self, root_directory: pathlib.Path | str) -> None:
        """Emit the Effect SDK files to the specified root directory."""
        root_directory = self.ensure_directory(root_directory)
        src_dir = root_directory / "src"

        for static_file in (
            ".gitignore",
            "tsconfig.json",
            "oxfmt.config.ts",
            "pnpm-workspace.yaml",
            "justfile",
            "LICENSE",
            "src/PolarClient.ts",
            "src/PolarClient.test.ts",
            "src/Webhooks.ts",
            "src/internal/schema.ts",
            "src/internal/schema.test.ts",
            "src/internal/testing.ts",
        ):
            self.copy_file(
                self.templates_dir / static_file, root_directory / static_file
            )

        for rendered_file in ("README.md", "package.json", "tsdown.config.ts"):
            self.render_file(
                rendered_file, root_directory / rendered_file, self.get_context()
            )
        self._render_ts("src/index.ts", src_dir / "index.ts", self.get_context())

        for api in self.ir.versions:
            self._emit_version(api, src_dir / self.get_version_string(api))

    def get_context(self) -> dict:
        return {
            **super().get_context(),
            "latest_version": self.get_version_string(self.ir.versions[-1]),
        }

    def get_version_string(self, api: APIVersion) -> str:
        return api.version

    def format_version(self) -> str:
        if self.prerelease is None:
            return self.version
        return f"{self.version}-{self.prerelease}"

    def setup_environment(self) -> None:
        super().setup_environment()
        self.env.filters["snake"] = to_snake_case
        self.env.filters["camel"] = to_camel_case
        self.env.filters["json"] = json.dumps
        self.env.filters["jsdoc"] = _jsdoc

    def run_post_actions(self, root_directory: pathlib.Path | str) -> None:
        super().run_post_actions(root_directory)
        self.run_command("just install", cwd=root_directory)
        self.run_command("just lint-fix", cwd=root_directory)
        self.run_command("just typecheck", cwd=root_directory)
        self.run_command("just build", cwd=root_directory)
        self.run_command("just test", cwd=root_directory)

    def _emit_version(self, api: APIVersion, version_dir: pathlib.Path) -> None:
        context = self.get_version_context(api)
        models = _collect_models(api)
        ordered, recursive = _order_declarations(api, models)
        base_ctx = RenderContext(
            direction="output", models=models, recursive=frozenset(recursive)
        )

        self._render_ts(
            "src/version/models.ts",
            version_dir / "models.ts",
            {
                **context,
                "enums": api.enums,
                "declarations": [
                    _declaration(node, base_ctx, recursive) for node in ordered
                ],
            },
        )

        webhook_ctx = base_ctx.with_prefix("Models.")
        self._render_ts(
            "src/version/webhooks.ts",
            version_dir / "webhooks.ts",
            {
                **context,
                "webhooks": [
                    (model, struct_expr(model, webhook_ctx)) for model in api.webhooks
                ],
                "webhook_event_types": [
                    literal_value(value) for value in self._get_webhook_event_types(api)
                ],
            },
        )

        services = [
            (service, self._emit_service(service, [], api, models, version_dir))
            for service in api.services
        ]
        all_errors = [
            (method, method.errors)
            for _, service_methods in services
            for method in service_methods
            if method.errors
        ]
        self._render_ts(
            "src/version/errors.ts",
            version_dir / "errors.ts",
            {**context, "methods": all_errors},
        )
        self._render_ts(
            "src/version/services/index.ts",
            version_dir / "services" / "index.ts",
            {**context, "services": [service for service, _ in services]},
        )
        self._render_ts("src/version/Polar.ts", version_dir / "Polar.ts", context)
        self._render_ts("src/version/index.ts", version_dir / "index.ts", context)
        self._emit_tests(api, version_dir, models, recursive)

    def _emit_tests(
        self,
        api: APIVersion,
        version_dir: pathlib.Path,
        models: dict[str, Model],
        recursive: set[str],
    ) -> None:
        builder = ExampleBuilder(api, models)
        webhook_names = {model.name for model in api.webhooks}
        fixtures = {
            "models": {
                name: builder.model(model)
                for name, model in sorted(models.items())
                if name not in webhook_names and name not in recursive
            },
            "webhooks": {model.name: builder.model(model) for model in api.webhooks},
        }
        self._write_file(
            version_dir / "__fixtures__" / "examples.json",
            json.dumps(fixtures, indent=2, default=str) + "\n",
        )
        context = self.get_version_context(api)
        for test_file in ("models.test.ts", "webhooks.test.ts", "Polar.test.ts"):
            self._render_ts(
                f"src/version/{test_file}", version_dir / test_file, context
            )

    def _emit_service(
        self,
        service: Service,
        parent_path: list[str],
        api: APIVersion,
        models: dict[str, Model],
        output_dir: pathlib.Path,
    ) -> list[MethodView]:
        """Emit a service module and its sub-services. Returns every method view, recursively."""
        service_path = [*parent_path, service.name]
        depth = len(service_path)
        services_dir = output_dir / "services"
        for segment in parent_path:
            services_dir = services_dir / to_snake_case(segment)

        if service.services:
            file_path = services_dir / to_snake_case(service.name) / "index.ts"
            import_depth = depth + 1
        else:
            file_path = services_dir / f"{to_snake_case(service.name)}.ts"
            import_depth = depth

        views = [
            _method_view(method, service_path, api, models)
            for method in service.methods
        ]
        nested_views: list[MethodView] = []
        for sub_service in service.services:
            nested_views.extend(
                self._emit_service(sub_service, service_path, api, models, output_dir)
            )

        self._render_ts(
            "src/version/services/service.ts",
            file_path,
            {
                **self.get_version_context(api),
                "service": service,
                "methods": views,
                "uses_date_time": any(
                    uses_date_time(param.type)
                    for method in service.methods
                    for param in method.path_params + method.query_params
                ),
                "version_import": "../" * import_depth,
                "runtime_import": "../" * (import_depth + 1),
            },
        )
        return views + nested_views

    def _render_ts(self, source: str, destination: pathlib.Path, context: dict) -> None:
        content = self._render_template(source, **context)
        self._write_file(destination, _prune_imports(content))


def _collect_models(api: APIVersion) -> dict[str, Model]:
    models: dict[str, Model] = {}
    for model in api.input_models + api.output_models + api.webhooks:
        models.setdefault(model.name, model)
    return models


@dataclasses.dataclass(frozen=True)
class _Node:
    kind: str
    name: str
    direction: str
    model: Model | None = None
    union: NamedUnion | None = None

    def dependencies(self) -> set[str]:
        if self.model is not None:
            return model_dependencies(self.model)
        if self.union is not None:
            return union_dependencies(self.union)
        return set()


def _order_declarations(
    api: APIVersion, models: dict[str, Model]
) -> tuple[list[_Node], set[str]]:
    """Order models and unions so that every declaration follows its dependencies.

    Returns the ordered nodes and the names of the models that are part of a reference cycle.
    """
    output_models = {model.name for model in api.output_models}
    output_unions = {union.name for union in api.output_unions}
    webhook_names = {model.name for model in api.webhooks}

    nodes: dict[str, _Node] = {}
    for name, model in models.items():
        if name in webhook_names:
            continue
        nodes[name] = _Node(
            "model", name, "output" if name in output_models else "input", model=model
        )
    for union in api.output_unions + api.input_unions:
        if union.name not in nodes:
            nodes[union.name] = _Node(
                "union",
                union.name,
                "output" if union.name in output_unions else "input",
                union=union,
            )

    edges = {
        name: sorted(
            dependency for dependency in node.dependencies() if dependency in nodes
        )
        for name, node in nodes.items()
    }

    components = _strongly_connected_components(sorted(nodes), edges)
    ordered: list[_Node] = []
    recursive: set[str] = set()
    for component in components:
        is_cycle = len(component) > 1 or component[0] in edges[component[0]]
        for name in component:
            node = nodes[name]
            if is_cycle:
                if node.kind != "model":
                    raise NotImplementedError(
                        f"Recursive union {name} is not supported by the Effect emitter."
                    )
                recursive.add(name)
            ordered.append(node)
    return ordered, recursive


def _strongly_connected_components(
    names: list[str], edges: dict[str, list[str]]
) -> list[list[str]]:
    """Tarjan's algorithm. Components are returned dependencies-first."""
    sys.setrecursionlimit(max(sys.getrecursionlimit(), 10_000))
    index: dict[str, int] = {}
    low: dict[str, int] = {}
    stack: list[str] = []
    on_stack: set[str] = set()
    components: list[list[str]] = []

    def visit(name: str) -> None:
        index[name] = low[name] = len(index)
        stack.append(name)
        on_stack.add(name)
        for dependency in edges[name]:
            if dependency not in index:
                visit(dependency)
                low[name] = min(low[name], low[dependency])
            elif dependency in on_stack:
                low[name] = min(low[name], index[dependency])
        if low[name] == index[name]:
            component: list[str] = []
            while True:
                member = stack.pop()
                on_stack.discard(member)
                component.append(member)
                if member == name:
                    break
            components.append(sorted(component))

    for name in names:
        if name not in index:
            visit(name)
    return components


def _declaration(node: _Node, base_ctx: RenderContext, recursive: set[str]) -> str:
    ctx = base_ctx.with_direction("output" if node.direction == "output" else "input")
    if node.model is not None:
        model = node.model
        docs = _jsdoc(model.description or model.name)
        if model.name in recursive:
            ctx = ctx.with_suspended(frozenset(recursive))
            return (
                f"{docs}\nexport interface {model.name} {{\n"
                f"{interface_fields(model, ctx, encoded=False)}\n}}\n"
                f"export interface {model.name}Encoded {{\n"
                f"{interface_fields(model, ctx, encoded=True)}\n}}\n"
                f"{docs}\nexport const {model.name}: Schema.Codec<{model.name}, "
                f"{model.name}Encoded> = {struct_expr(model, ctx)};"
            )
        return (
            f"{docs}\nexport class {model.name} extends Schema.Opaque<{model.name}>()("
            f"{struct_expr(model, ctx)}) {{}}"
        )

    union = node.union
    assert union is not None
    docs = _jsdoc(union.description or union.name)
    return (
        f"{docs}\nexport const {union.name} = "
        f"{union_expr(union.variants, union.discriminator, ctx)};\n"
        f"export type {union.name} = typeof {union.name}.Type;"
    )


def _resolve_union_variants(type_ref: TypeRef, api: APIVersion) -> list[TypeRef] | None:
    if isinstance(type_ref, UnionType):
        return type_ref.variants
    if isinstance(type_ref, UnionRef):
        for union in api.output_unions + api.input_unions:
            if union.name == type_ref.name:
                return union.variants
    return None


def _error_classes(
    method: Method, prefix: str, api: APIVersion, ctx: RenderContext
) -> list[ErrorClass]:
    classes: list[ErrorClass] = []
    for error in method.errors:
        classes.extend(_error_classes_for_response(error, prefix, api, ctx))
    return classes


def _error_classes_for_response(
    error: ErrorResponse, prefix: str, api: APIVersion, ctx: RenderContext
) -> list[ErrorClass]:
    if error.response_type == "none" or error.type is None:
        tag = status_tag(error.status_code)
        return [
            ErrorClass(
                error_class_name(prefix, tag),
                tag,
                error.status_code,
                None,
                None,
                error.description,
            )
        ]
    if error.response_type == "text":
        tag = status_tag(error.status_code)
        return [
            ErrorClass(
                error_class_name(prefix, tag),
                tag,
                error.status_code,
                "string",
                "Schema.String",
                error.description,
            )
        ]

    variants = _resolve_union_variants(error.type, api)
    if variants is not None and all(
        isinstance(variant, ModelRef) for variant in variants
    ):
        refs: list[TypeRef] = variants
    else:
        refs = [error.type]

    classes: list[ErrorClass] = []
    for ref in refs:
        if isinstance(ref, ModelRef) and ref.name not in ctx.models:
            tag = status_tag(error.status_code)
            classes.append(
                ErrorClass(
                    error_class_name(prefix, tag),
                    tag,
                    error.status_code,
                    "unknown",
                    "Schema.Unknown",
                    error.description,
                )
            )
            continue
        tag = (
            ref.name
            if isinstance(ref, (ModelRef, UnionRef))
            else status_tag(error.status_code)
        )
        classes.append(
            ErrorClass(
                error_class_name(prefix, tag),
                tag,
                error.status_code,
                ts_type(ref, ctx),
                schema_expr(ref, ctx),
                error.description,
            )
        )
    return classes


def _method_view(
    method: Method, service_path: list[str], api: APIVersion, models: dict[str, Model]
) -> MethodView:
    output_ctx = RenderContext(direction="output", models=models, prefix="Models.")
    input_ctx = output_ctx.with_direction("input")
    prefix = operation_prefix(service_path, method.name)

    parameters: list[str] = []
    arguments: list[str] = []
    for param in method.path_params:
        parameters.append(f"{param.parameter_name}: {ts_type(param.type, input_ctx)}")
        arguments.append(param.parameter_name)

    query_required = any(param.required for param in method.query_params)
    if method.query_params:
        fields = " ".join(
            f"readonly {_key(param.name)}{'' if param.required else '?'}: "
            f"{ts_type(param.type, input_ctx)};"
            for param in method.query_params
        )
        parameters.append(f"query{'' if query_required else '?'}: {{ {fields} }}")
        arguments.append("query")
    if method.body is not None:
        parameters.append(f"body: {ts_type(method.body, input_ctx)}")
        arguments.append("body")

    if method.response_type == "json" and method.response is not None:
        success_schema = schema_expr(method.response, output_ctx)
        success_type = ts_type(method.response, output_ctx)
    elif method.response_type == "text":
        success_schema, success_type = '"text"', "string"
    else:
        success_schema, success_type = '"none"', "void"

    errors = _error_classes(method, prefix, api, output_ctx)
    error_union = error_union_name(prefix) if errors else None

    spec = [f'method: "{method.http_method.value}"', f"path: {json.dumps(method.path)}"]
    if method.path_params:
        spec.append(
            "pathParams: { "
            + ", ".join(
                f"{_key(param.name)}: {param.parameter_name}"
                for param in method.path_params
            )
            + " }"
        )
    if method.query_params:
        spec.append("query")
    if method.body is not None:
        spec.append(f"body: [{schema_expr(method.body, input_ctx)}, body]")
    spec.append(f"success: {success_schema}")
    if errors:
        by_status: dict[int, list[ErrorClass]] = {}
        for error in errors:
            by_status.setdefault(error.status_code, []).append(error)
        spec.append(
            "errors: { "
            + ", ".join(
                f"{status}: ["
                + ", ".join(
                    f"[{error.schema or 'null'}, Errors.{error.name}]"
                    for error in group
                )
                + "]"
                for status, group in by_status.items()
            )
            + " }"
        )

    stream_arguments = None
    item_type = None
    if method.pagination is not None:
        item_type = ts_type(method.pagination.item_schema, output_ctx)
        page_arguments = [
            "{ ...query, page }" if argument == "query" else argument
            for argument in arguments
        ]
        if "query" not in arguments:
            page_arguments.append("{ page }")
        stream_arguments = ", ".join(page_arguments)

    return MethodView(
        name=operation_name(method.name),
        binding=operation_binding(method.name),
        description=method.description,
        deprecated=bool(method.deprecated),
        signature=", ".join(parameters),
        call_arguments=", ".join(arguments),
        return_type=success_type,
        request="{ " + ", ".join(spec) + " }",
        errors=errors,
        error_union=error_union,
        stream_name=stream_name(method.name) if method.pagination is not None else None,
        stream_item_type=item_type,
        stream_arguments=stream_arguments,
    )


def _key(name: str) -> str:
    return name if re.match(r"^[A-Za-z_$][A-Za-z0-9_$]*$", name) else json.dumps(name)


def _jsdoc(text: str | None, indent: int = 0) -> str:
    if not text:
        return ""
    pad = " " * indent
    lines = [line.replace("*/", "*\\/").rstrip() for line in text.strip().splitlines()]
    body = "\n".join(f"{pad} *{' ' + line if line else ''}" for line in lines)
    return f"{pad}/**\n{body}\n{pad} */"


def _prune_imports(content: str) -> str:
    """Drop unused named/namespace imports from generated TypeScript."""
    lines = content.splitlines()
    body = "\n".join(
        line
        for line in lines
        if not _IMPORT_PATTERN.match(line.strip())
        and not _REEXPORT_PATTERN.match(line.strip())
    )
    result: list[str] = []
    for line in lines:
        match = _IMPORT_PATTERN.match(line.strip())
        if match is None:
            result.append(line)
            continue
        type_only = match.group(1) or ""
        source = match.group("source")
        namespace = match.group("namespace")
        if namespace is not None:
            if re.search(rf"\b{re.escape(namespace)}\b", body):
                result.append(line)
            continue
        kept = []
        for specifier in (s.strip() for s in match.group("names").split(",")):
            if not specifier:
                continue
            local = specifier.split(" as ")[-1].removeprefix("type ").strip()
            if re.search(rf"\b{re.escape(local)}\b", body):
                kept.append(specifier)
        if kept:
            result.append(f"import {type_only}{{ {', '.join(kept)} }} from {source};")
    return "\n".join(result) + "\n"
