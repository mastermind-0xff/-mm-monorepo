[**@mmutils/common**](../../../README.md)

***

[@mmutils/common](../../../modules.md) / [path/parsePath](../README.md) / ParsedPathData

# Type Alias: ParsedPathData

> **ParsedPathData** = `object`

Defined in: [path/parsePath.ts:27](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L27)

## Properties

### baseName

> **baseName**: `string`

Defined in: [path/parsePath.ts:42](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L42)

Name portion of the last element. No extension in case of file.

---
**examples**
```typescript
console.log(parsePath('abc').baseName); // abc
console.log(parsePath('abc/').baseName); // abc
console.log(parsePath('abc.jpg').baseName); // abc
console.log(parsePath('abc.jpg/').baseName); // abc.jpg (type is 'dir')

***

### basePath

> **basePath**: `string`

Defined in: [path/parsePath.ts:30](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L30)

Path string from the parent to the first branch or empty string.

***

### extension

> **extension**: `string`

Defined in: [path/parsePath.ts:54](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L54)

Extension in case of file or empty string.

---
**examples**
```typescript
console.log(parsePath('abc').extension); //
console.log(parsePath('abc/').extension); //
console.log(parsePath('abc.jpg').extension); // jpg
console.log(parsePath('abc.jpg/').extension); //

***

### name

> **name**: `string`

Defined in: [path/parsePath.ts:65](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L65)

Full name. Includes extension in case of file.

---
**examples**
```typescript
console.log(parsePath('abc').name); // abc
console.log(parsePath('abc/').name); // abc
console.log(parsePath('abc.jpg').name); // abc.jpg (type is 'file')
console.log(parsePath('abc.jpg/').name); // abc.jpg (type is 'dir')

***

### parent

> **parent**: `ParsedPathData` \| `undefined`

Defined in: [path/parsePath.ts:67](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L67)

Returns parsed base path or undefined if no base.

***

### toString

> **toString**: () => `string`

Defined in: [path/parsePath.ts:69](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L69)

Returns complete path string.

#### Returns

`string`

***

### type

> **type**: [`ParsedPathType`](ParsedPathType.md)

Defined in: [path/parsePath.ts:28](https://github.com/mastermind-0xff/-mm-monorepo/blob/567572b2839aec9480e5804f4858ca2604ba8b9d/packages/@mmutils/common/src/path/parsePath.ts#L28)
