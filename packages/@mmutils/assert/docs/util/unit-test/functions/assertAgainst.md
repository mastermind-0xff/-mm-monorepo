[**@mmutils/assert-primitive**](../../../README.md)

***

[@mmutils/assert-primitive](../../../modules.md) / [util/unit-test](../README.md) / assertAgainst

# Function: assertAgainst()

> **assertAgainst**(`fn`, `sampleData`, `whatDoesNotThrow`, `errorMessagePrefix`, `debug`): `boolean`

Defined in: packages/@mmutils/assert/src/util/unit-test.ts:202

Check a given assert function against set of values.

## Parameters

### fn

(`v`, `e`?) => `undefined`

Function to test all values against.

### sampleData

\[\[`"boolean"`, \[`true`, `false`\]\], \[`"number"`, \[`1`, `0`, `-1`, `123`, `number`, `number`\]\], \[`"NaN"`, \[`number`\]\], \[`"string"`, \[`"abc"`, `""`, `"true"`, `"false"`, `"1"`, `"0"`, `"-1"`\]\], \[`"bigint"`, \[`-123n`, `1n`, `0n`, `-1n`, `123n`\]\], \[`"array"`, \[readonly \[`1`, `2`, `3`\], readonly \[\], readonly \[`1`\], readonly \[`0`\], readonly \[`"a"`\], readonly \[`""`\], readonly \[`"1"`\], readonly \[`"0"`\], readonly \[readonly \[`1`\], readonly \[`0`\]\], readonly \[`undefined`\], readonly \[readonly \[\]\]\]\], \[`"object"`, \[\{\}, \{ `key`: `"value"`; \}, \{ `key`: \{ `key`: `"value"`; \}; \}, \{ `0`: `"array like"`; `length`: `1`; \}, `Int8Array`\<`ArrayBuffer`\>, `IArguments`, `A`, \{ `a`: `string`; \}\]\]\]

Test data ordered by categories containing list of values.

### whatDoesNotThrow

readonly [`AllowedCategories`](../type-aliases/AllowedCategories.md)[]

For what categories from the sample data should the fn
not throw an error.

### errorMessagePrefix

`string`

### debug

[`DebugMode`](../type-aliases/DebugMode.md) = `'auto'`

Output message for every check.

## Returns

`boolean`

Returns true if fn does not throw for the selected categories and
throws for all other categories. Returns false otherwise.
