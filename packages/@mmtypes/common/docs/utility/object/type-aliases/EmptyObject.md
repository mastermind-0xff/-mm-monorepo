[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/object](../README.md) / EmptyObject

# Type Alias: EmptyObject

> **EmptyObject** = `Record`\<`string`, `never`\>

Defined in: [utility/object.ts:13](https://github.com/mastermind-0xff/-mm-monorepo/blob/0c1e0a87a311ce2ea91722e4fbc94791a49b0cbb/packages/@mmtypes/common/src/utility/object.ts#L13)

Accepts only empty object '{}'.

---
_**Examples:**_
```typescript
const x1: EmptyObject = {}; // ok
const x2: EmptyObject = []; // NOT ok
const x3: EmptyObject = {a:1}; // NOT ok
```
