[**@mmutils/common**](../../../README.md)

***

[@mmutils/common](../../../modules.md) / [path/parsePath](../README.md) / ParsedPathData

# Type Alias: ParsedPathData

> **ParsedPathData**: `object`

Defined in: path/parsePath.ts:27

## Type declaration

### baseName

> **baseName**: `string`

Name portion of the last element. No extension in case of file.

---
**examples**
```typescript
console.log(parsePath('abc').baseName); // abc
console.log(parsePath('abc/').baseName); // abc
console.log(parsePath('abc.jpg').baseName); // abc
console.log(parsePath('abc.jpg/').baseName); // abc.jpg (type is 'dir')

### basePath

> **basePath**: `string`

Path string from the parent to the first branch or empty string.

### extension

> **extension**: `string`

Extension in case of file or empty string.

---
**examples**
```typescript
console.log(parsePath('abc').extension); //
console.log(parsePath('abc/').extension); //
console.log(parsePath('abc.jpg').extension); // jpg
console.log(parsePath('abc.jpg/').extension); //

### name

> **name**: `string`

Full name. Includes extension in case of file.

---
**examples**
```typescript
console.log(parsePath('abc').name); // abc
console.log(parsePath('abc/').name); // abc
console.log(parsePath('abc.jpg').name); // abc.jpg (type is 'file')
console.log(parsePath('abc.jpg/').name); // abc.jpg (type is 'dir')

### parent

> **parent**: [`ParsedPathData`](ParsedPathData.md) \| `undefined`

Returns parsed base path or undefined if no base.

### toString()

> **toString**: () => `string`

Returns complete path string.

#### Returns

`string`

### type

> **type**: [`ParsedPathType`](ParsedPathType.md)
