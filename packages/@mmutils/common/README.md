# Common JavaScript utility functions (npn)

Collection of reusable, typed, JavaScript utility functions built with TypeScript.

## Installation

### Install the package

```sh
npm install @mmutils/common
# or
yarn add @mmutils/common
```

### Load as module

```javascript
import { parsePath, parsedPathAsDir } from '@mmutils/common';
// or
import { parsePath, parsedPathAsDir } from '@mmutils/common/esm/';
```

### Load as commonjs

```javascript
const { parsePath, parsedPathAsDir } = require('@mmutils/common');
// or
const { parsePath, parsedPathAsDir } = require('@mmutils/common/cjs/');
```

## Changelog

### v0.0.1

Initial release.

## Usage

### `ParsedPathType`

Parsed path object type constant.

### `parsePath`

Parse path elements and make logical assumptions if it's dir, file or identifier. If it's not a dir nor a file it must be an identifier.

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

### `parsedPathAsDir`

Convert node parsed path object file to base dir.

## License

This project is licensed under the MIT License.
