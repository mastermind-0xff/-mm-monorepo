import node_path from 'node:path';

/**
 * Override default behavior of PathData object.
 * @returns Complete path string.
 */
function toString(this: ParsedPathData): string {
  if (this.basePath === '' && this.baseName === '') return '';
  return node_path.join(
    this.basePath,
    this.name,
    this.type === 'dir' ? '/' : ''
  );
}

/**
 * Parsed path type constant.
 */
export const ParsedPathType = {
  dir: 'dir',
  file: 'file',
  identifier: 'identifier',
} as const;

export type ParsedPathType = keyof typeof ParsedPathType;

export type ParsedPathData = {
  type: ParsedPathType;
  /** Path string from the parent to the first branch or empty string. */
  basePath: string;
  /**
   * Name portion of the last element. No extension in case of file.
   *
   * ---
   * **examples**
   * ```typescript
   * console.log(parsePath('abc').baseName); // abc
   * console.log(parsePath('abc/').baseName); // abc
   * console.log(parsePath('abc.jpg').baseName); // abc
   * console.log(parsePath('abc.jpg/').baseName); // abc.jpg (type is 'dir')
   */
  baseName: string;
  /**
   * Extension in case of file or empty string.
   *
   * ---
   * **examples**
   * ```typescript
   * console.log(parsePath('abc').extension); //
   * console.log(parsePath('abc/').extension); //
   * console.log(parsePath('abc.jpg').extension); // jpg
   * console.log(parsePath('abc.jpg/').extension); //
   */
  extension: string;
  /** Full name. Includes extension in case of file.
   *
   * ---
   * **examples**
   * ```typescript
   * console.log(parsePath('abc').name); // abc
   * console.log(parsePath('abc/').name); // abc
   * console.log(parsePath('abc.jpg').name); // abc.jpg (type is 'file')
   * console.log(parsePath('abc.jpg/').name); // abc.jpg (type is 'dir')
   */
  name: string;
  /** Returns parsed base path or undefined if no base. */
  parent: ParsedPathData | undefined;
  /** @override Returns complete path string. */
  toString: () => string;
};

/**
 * Convert node parsed path object file to base dir.
 * @param data Parsed path object.
 * @returns Parsed path object as dir (base).
 */
export const parsedPathAsDir = (
  data: node_path.ParsedPath
): node_path.ParsedPath => {
  const pathAsDir = { ...data };
  pathAsDir.name = pathAsDir.base = pathAsDir.name + pathAsDir.ext;
  pathAsDir.ext = '';
  return pathAsDir;
};

/**
 * Parse path elements and make logical assumptions if it's dir, file or
 * identifier. If it's not a dir nor a file it must be an identifier.
 *
 * @param path Absolute or relative path string.
 * @returns Object containing path elements and data.
 *
 * ---
 * **examples**
 * ```typescript
 * // windows output
 * console.log(parsePath('./some.relative.dir/with/file.jpg'));
 * {
 *   type: 'file',
 *   basePath: 'some.relative.dir\\with\\',
 *   baseName: 'file',
 *   extension: 'jpg',
 *   name: 'file.jpg',
 *   parent: [Getter]
 * }
 *
 * console.log(parsePath('./some.relative.dir/with/dir/'));
 * {
 *   type: 'dir',
 *   basePath: 'some.relative.dir\\with\\',
 *   baseName: 'dir',
 *   extension: '',
 *   name: 'dir',
 *   parent: [Getter]
 * }
 *
 * console.log(parsePath('./some.relative.dir/with/identifier'));
 * {
 *   type: 'identifier',
 *   basePath: 'some.relative.dir\\with\\',
 *   baseName: 'identifier',
 *   extension: '',
 *   name: 'identifier',
 *   parent: [Getter]
 * }
 * ```
 */
export const parsePath = (path: string): ParsedPathData => {
  let pathInfo = node_path.parse(node_path.join(path));

  // check if path is а directory (has trailing slash)
  // path.parse does not work as expected in case of "./dirname.something/"
  // https://github.com/nodejs/node/issues/6229
  const isDir = /[/\\]$/.test(path);
  if (isDir) {
    pathInfo = parsedPathAsDir(pathInfo);
  }
  const parsedData: ParsedPathData = {
    type:
      isDir ? 'dir'
      : pathInfo.ext ? 'file'
      : 'identifier',
    basePath: pathInfo.dir !== '' ? node_path.join(pathInfo.dir, '/') : '',
    baseName: pathInfo.name,
    extension:
      pathInfo.ext.indexOf('.') !== -1 ?
        pathInfo.ext.substring(1)
      : pathInfo.ext,
    name: pathInfo.base,
    toString,
    get parent() {
      return this.basePath !== '' ?
          parsePath(node_path.join(this.basePath, '/'))
        : undefined;
    },
  };

  Object.defineProperty(parsedData, 'toString', { enumerable: false });

  return parsedData;
};
