[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/object](../README.md) / EmptyObject

# Type Alias: EmptyObject

> **EmptyObject**: `Record`\<`string`, `never`\>

Defined in: utility/object.ts:13

Accepts only empty object '{}'.

---
_**Examples:**_
```typescript
const x1: EmptyObject = {}; // ok
const x2: EmptyObject = []; // NOT ok
const x3: EmptyObject = {a:1}; // NOT ok
```
