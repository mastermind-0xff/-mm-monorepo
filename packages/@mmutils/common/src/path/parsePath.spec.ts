import { parsePath } from './parsePath'; // replace wtesth your actual module path
import path from 'path';

describe('parseNodePath', () => {
  test('should correctly parse a file path', () => {
    const parsed = parsePath('/path/to.some/file.txt');
    const S = path.sep;

    expect(parsed.type).toStrictEqual('file');
    expect(parsed.basePath).toStrictEqual(`${S}path${S}to.some${S}`);
    expect(parsed.baseName).toStrictEqual('file');
    expect(parsed.extension).toStrictEqual('txt');
    expect(parsed.name).toStrictEqual('file.txt');
    expect(parsed + '').toStrictEqual(`${S}path${S}to.some${S}file.txt`);
    expect(parsed.parent + '').toStrictEqual(`${S}path${S}to.some${S}`);
  });

  test('should correctly parse a directory path', () => {
    const parsed = parsePath('/path/to.some/dir/');
    const S = path.sep;

    expect(parsed.type).toStrictEqual('dir');
    expect(parsed.basePath).toStrictEqual(`${S}path${S}to.some${S}`);
    expect(parsed.baseName).toStrictEqual('dir');
    expect(parsed.extension).toStrictEqual('');
    expect(parsed.name).toStrictEqual('dir');
    expect(parsed + '').toStrictEqual(`${S}path${S}to.some${S}dir${S}`);
    expect(parsed.parent + '').toStrictEqual(`${S}path${S}to.some${S}`);
  });

  test('should correctly parse an identifier', () => {
    const parsed = parsePath('/path/to.some/identifier');
    const S = path.sep;

    expect(parsed.type).toStrictEqual('identifier');
    expect(parsed.basePath).toStrictEqual(`${S}path${S}to.some${S}`);
    expect(parsed.baseName).toStrictEqual('identifier');
    expect(parsed.extension).toStrictEqual('');
    expect(parsed.name).toStrictEqual('identifier');
    expect(parsed + '').toStrictEqual(`${S}path${S}to.some${S}identifier`);
    expect(parsed.parent + '').toStrictEqual(`${S}path${S}to.some${S}`);
  });

  test('should correctly assess parent', () => {
    const parsed = parsePath('parent-dir/current-dir/');
    expect(parsed.parent?.name).toStrictEqual('parent-dir');
    expect(parsed.parent?.parent).toStrictEqual(undefined);
  });
});
