[**@mmutils/common**](../../../README.md)

***

[@mmutils/common](../../../modules.md) / [path/parsePath](../README.md) / parsePath

# Function: parsePath()

> **parsePath**(`path`): [`ParsedPathData`](../type-aliases/ParsedPathData.md)

Defined in: path/parsePath.ts:128

Parse path elements and make logical assumptions if it's dir, file or
identifier. If it's not a dir nor a file it must be an identifier.

## Parameters

### path

`string`

Absolute or relative path string.

## Returns

[`ParsedPathData`](../type-aliases/ParsedPathData.md)

Object containing path elements and data.

---
**examples**
```typescript
// windows output
console.log(parsePath('./some.relative.dir/with/file.jpg'));
{
  type: 'file',
  basePath: 'some.relative.dir\\with\\',
  baseName: 'file',
  extension: 'jpg',
  name: 'file.jpg',
  parent: [Getter]
}

console.log(parsePath('./some.relative.dir/with/dir/'));
{
  type: 'dir',
  basePath: 'some.relative.dir\\with\\',
  baseName: 'dir',
  extension: '',
  name: 'dir',
  parent: [Getter]
}

console.log(parsePath('./some.relative.dir/with/identifier'));
{
  type: 'identifier',
  basePath: 'some.relative.dir\\with\\',
  baseName: 'identifier',
  extension: '',
  name: 'identifier',
  parent: [Getter]
}
```
