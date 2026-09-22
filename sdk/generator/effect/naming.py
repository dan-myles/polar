from generator.casing import to_camel_case, to_pascal_case

RESERVED_WORDS = frozenset(
    {
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "function",
        "if",
        "import",
        "in",
        "instanceof",
        "new",
        "null",
        "return",
        "super",
        "switch",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
    }
)

STATUS_NAMES = {
    400: "BadRequest",
    401: "Unauthorized",
    402: "PaymentRequired",
    403: "Forbidden",
    404: "NotFound",
    405: "MethodNotAllowed",
    409: "Conflict",
    410: "Gone",
    412: "PreconditionFailed",
    413: "PayloadTooLarge",
    422: "UnprocessableEntity",
    429: "TooManyRequests",
}


def operation_name(name: str) -> str:
    return to_camel_case(name)


def operation_binding(name: str) -> str:
    """Local identifier for an operation, safe even when the export name is a reserved word."""
    identifier = operation_name(name)
    return f"{identifier}_" if identifier in RESERVED_WORDS else identifier


def stream_name(name: str) -> str:
    return f"{operation_name(name)}Stream"


def operation_prefix(service_path: list[str], method_name: str) -> str:
    return "".join(service_path) + to_pascal_case(method_name)


def status_tag(status_code: int) -> str:
    return STATUS_NAMES.get(status_code, f"Status{status_code}")


def error_class_name(prefix: str, tag: str) -> str:
    base = tag[: -len("Error")] if tag.endswith("Error") and tag != "Error" else tag
    return f"{prefix}{base}Error"


def error_union_name(prefix: str) -> str:
    return f"{prefix}Errors"
