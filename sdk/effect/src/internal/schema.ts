import { Schema, SchemaTransformation } from "effect";

/**
 * Date-time accepted in requests, either as a `DateTime.Utc` or an ISO 8601 string. Encoded as an ISO 8601 string.
 */
export const DateTimeInput = Schema.Union([Schema.DateTimeUtcFromString, Schema.String]);

/**
 * Enum that also accepts values unknown to this SDK version, so new server values don't break decoding.
 */
export const openEnum = <const L extends ReadonlyArray<string>>(
  literals: Schema.Literals<L>,
): Schema.Codec<L[number] | (string & {}), string> =>
  Schema.Union([literals, Schema.String]) as unknown as Schema.Codec<
    L[number] | (string & {}),
    string
  >;

/**
 * Variant produced by an open union when the discriminator value is unknown to this SDK version.
 * The original payload is kept in `raw`.
 */
export type UnknownVariant<D extends string> = { readonly [K in D]: "~unknown" } & {
  readonly raw: { readonly [key: string]: unknown };
};

const unknownVariant = <D extends string>(discriminator: D, known: ReadonlyArray<string>) => {
  const knownValues = new Set(known);
  const Raw = Schema.Record(Schema.String, Schema.Unknown).check(
    Schema.makeFilter((input: { readonly [key: string]: unknown }) =>
      typeof input[discriminator] === "string" && !knownValues.has(input[discriminator])
        ? undefined
        : `Expected an unknown ${discriminator} value`,
    ),
  );
  const Target = Schema.Struct({
    [discriminator]: Schema.Literal("~unknown"),
    raw: Schema.Record(Schema.String, Schema.Unknown),
  } as { readonly [K in D]: Schema.Literal<"~unknown"> } & {
    readonly raw: Schema.$Record<Schema.String, Schema.Unknown>;
  });
  return Raw.pipe(
    Schema.decodeTo(
      Target,
      SchemaTransformation.transform({
        decode: (raw) => ({ [discriminator]: "~unknown", raw }) as any,
        encode: (variant: any) => variant.raw,
      }),
    ),
  );
};

/**
 * Discriminated union that decodes unknown variants into `UnknownVariant` instead of failing.
 */
export const openUnion = <const Members extends ReadonlyArray<Schema.Top>, const D extends string>(
  members: Members,
  discriminator: D,
  known: ReadonlyArray<string>,
): Schema.Codec<
  Members[number]["Type"] | UnknownVariant<D>,
  Members[number]["Encoded"] | { readonly [key: string]: unknown }
> =>
  Schema.Union([...members, unknownVariant(discriminator, known)]) as unknown as Schema.Codec<
    Members[number]["Type"] | UnknownVariant<D>,
    Members[number]["Encoded"] | { readonly [key: string]: unknown }
  >;
