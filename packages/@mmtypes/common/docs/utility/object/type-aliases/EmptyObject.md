[**@mmtypes/common**](../../../README.md)

***

[@mmtypes/common](../../../modules.md) / [utility/object](../README.md) / EmptyObject

# Type Alias: EmptyObject

> **EmptyObject** = `Record`\<`string`, `never`\>

Defined in: [utility/object.ts:13](https://github.com/mastermind-0xff/-mm-monorepo/blob/9183ce548bcc4fccff7ed80ba5a34f5f37094be0/packages/@mmtypes/common/src/utility/object.ts#L13)

Accepts only empty object '{}'.

---
_**Examples:**_
```typescript
const x1: EmptyObject = {}; // ok
const x2: EmptyObject = []; // NOT ok
const x3: EmptyObject = {a:1}; // NOT ok
```
