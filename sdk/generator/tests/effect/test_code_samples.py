import openapi_pydantic as op

from generator.code_samples import generate_code_samples_overlay
from generator.ir import generate_ir


def test_renders_code_samples(
    code_samples_spec: op.OpenAPI,
) -> None:
    api = generate_ir(code_samples_spec).versions[0]
    overlay = generate_code_samples_overlay(api, "1.2.3", ["effect"])
    samples = {
        action["target"]: action["update"]["x-codeSamples"][0]
        for action in overlay["actions"]
    }

    health = samples['$["paths"]["/health"]["get"]']
    assert health["lang"] == "effect"
    assert health["source"] == (
        'import { Effect } from "effect";\n'
        'import { FetchHttpClient } from "effect/unstable/http";\n'
        'import { Polar } from "@polar-sh/effect/2026-04";\n'
        "\n"
        "const program = Effect.gen(function* () {\n"
        "  const polar = yield* Polar;\n"
        "  yield* polar.health.get();\n"
        "});\n"
        "\n"
        "program.pipe(\n"
        '  Effect.provide(Polar.layer({ accessToken: "polar_oat_xxx" })),\n'
        "  Effect.provide(FetchHttpClient.layer),\n"
        "  Effect.runPromise,\n"
        ");\n"
    )

    pagination = samples['$["paths"]["/accounts/{account_id}/payment-methods"]["get"]'][
        "source"
    ]
    assert "import { Effect, Stream } from" in pagination
    assert "yield* polar.accounts.paymentMethods.listStream(" in pagination
    assert "Stream.runForEach" in pagination
    assert '"label": "primary"' in pagination

    widget = samples['$["paths"]["/widgets"]["post"]']["source"]
    assert "const response = yield* polar.widgets.create(" in widget
    assert '"note": "Limited edition"' in widget
