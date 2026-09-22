import { DateTime, Schema } from "effect";
import { describe, expect, it } from "vitest";

import { DateTimeInput, openEnum, openUnion } from "./schema";

describe("openEnum", () => {
  const Color = openEnum(Schema.Literals(["red", "green"]));

  it("decodes known and unknown values", () => {
    expect(Schema.decodeUnknownSync(Color)("red")).toBe("red");
    expect(Schema.decodeUnknownSync(Color)("purple")).toBe("purple");
  });

  it("rejects non-strings", () => {
    expect(() => Schema.decodeUnknownSync(Color)(1)).toThrow();
  });
});

describe("openUnion", () => {
  const Fixed = Schema.Struct({ type: Schema.Literal("fixed"), amount: Schema.Number });
  const Free = Schema.Struct({ type: Schema.Literal("free") });
  const Price = openUnion([Fixed, Free], "type", ["fixed", "free"]);

  it("decodes known variants", () => {
    expect(Schema.decodeUnknownSync(Price)({ type: "fixed", amount: 10 })).toEqual({
      type: "fixed",
      amount: 10,
    });
  });

  it("decodes unknown variants into UnknownVariant", () => {
    const raw = { type: "metered", unit: "tokens" };
    const decoded = Schema.decodeUnknownSync(Price)(raw);
    expect(decoded).toEqual({ type: "~unknown", raw });
    expect(Schema.encodeSync(Price)(decoded)).toEqual(raw);
  });

  it("still fails on malformed known variants", () => {
    expect(() => Schema.decodeUnknownSync(Price)({ type: "fixed" })).toThrow();
  });
});

describe("DateTimeInput", () => {
  it("encodes DateTime values and ISO strings", () => {
    const date = DateTime.makeUnsafe("2026-01-01T00:00:00Z");
    expect(Schema.encodeSync(DateTimeInput)(date)).toBe("2026-01-01T00:00:00.000Z");
    expect(Schema.encodeSync(DateTimeInput)("2026-01-01T00:00:00Z")).toBe("2026-01-01T00:00:00Z");
  });
});
