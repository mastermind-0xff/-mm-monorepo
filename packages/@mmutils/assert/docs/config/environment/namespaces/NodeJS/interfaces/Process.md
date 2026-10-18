[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / Process

# Interface: Process

Defined in: node\_modules/@types/node/process.d.ts:686

## Extends

- [`EventEmitter`](EventEmitter.md)

## Properties

### allowedNodeEnvironmentFlags

> **allowedNodeEnvironmentFlags**: `ReadonlySet`\<`string`\>

Defined in: node\_modules/@types/node/process.d.ts:2029

The `process.allowedNodeEnvironmentFlags` property is a special,
read-only `Set` of flags allowable within the `NODE_OPTIONS` environment variable.

`process.allowedNodeEnvironmentFlags` extends `Set`, but overrides `Set.prototype.has` to recognize several different possible flag
representations. `process.allowedNodeEnvironmentFlags.has()` will
return `true` in the following cases:

* Flags may omit leading single (`-`) or double (`--`) dashes; e.g., `inspect-brk` for `--inspect-brk`, or `r` for `-r`.
* Flags passed through to V8 (as listed in `--v8-options`) may replace
one or more _non-leading_ dashes for an underscore, or vice-versa;
e.g., `--perf_basic_prof`, `--perf-basic-prof`, `--perf_basic-prof`,
etc.
* Flags may contain one or more equals (`=`) characters; all
characters after and including the first equals will be ignored;
e.g., `--stack-trace-limit=100`.
* Flags _must_ be allowable within `NODE_OPTIONS`.

When iterating over `process.allowedNodeEnvironmentFlags`, flags will
appear only _once_; each will begin with one or more dashes. Flags
passed through to V8 will contain underscores instead of non-leading
dashes:

```js
import { allowedNodeEnvironmentFlags } from 'node:process';

allowedNodeEnvironmentFlags.forEach((flag) => {
  // -r
  // --inspect-brk
  // --abort_on_uncaught_exception
  // ...
});
```

The methods `add()`, `clear()`, and `delete()` of`process.allowedNodeEnvironmentFlags` do nothing, and will fail
silently.

If Node.js was compiled _without_ `NODE_OPTIONS` support (shown in [config](#config)), `process.allowedNodeEnvironmentFlags` will
contain what _would have_ been allowable.

#### Since

v10.10.0

***

### arch

> `readonly` **arch**: [`Architecture`](../type-aliases/Architecture.md)

Defined in: node\_modules/@types/node/process.d.ts:1689

The operating system CPU architecture for which the Node.js binary was compiled.
Possible values are: `'arm'`, `'arm64'`, `'ia32'`, `'loong64'`, `'mips'`,
`'mipsel'`, `'ppc64'`, `'riscv64'`, `'s390x'`, and `'x64'`.

```js
import { arch } from 'node:process';

console.log(`This processor architecture is ${arch}`);
```

#### Since

v0.5.0

***

### argv

> **argv**: `string`[]

Defined in: node\_modules/@types/node/process.d.ts:766

The `process.argv` property returns an array containing the command-line
arguments passed when the Node.js process was launched. The first element will
be [execPath](#execpath). See `process.argv0` if access to the original value
of `argv[0]` is needed. The second element will be the path to the JavaScript
file being executed. If a [program entry point](https://nodejs.org/docs/latest-v25.x/api/cli.html#program-entry-point) was provided, the second element
will be the absolute path to it. The remaining elements are additional command-line
arguments.

For example, assuming the following script for `process-args.js`:

```js
import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

Launching the Node.js process as:

```bash
node process-args.js one two=three four
```

Would generate the output:

```text
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
```

#### Since

v0.1.27

***

### argv0

> **argv0**: `string`

Defined in: node\_modules/@types/node/process.d.ts:779

The `process.argv0` property stores a read-only copy of the original value of`argv[0]` passed when Node.js starts.

```console
$ bash -c 'exec -a customArgv0 ./node'
> process.argv[0]
'/Volumes/code/external/node/out/Release/node'
> process.argv0
'customArgv0'
```

#### Since

v6.4.0

***

### channel?

> `optional` **channel?**: `Control`

Defined in: node\_modules/@types/node/process.d.ts:1941

If the Node.js process was spawned with an IPC channel, the process.channel property is a reference to the IPC channel.
If no IPC channel exists, this property is undefined.

#### Since

v7.1.0

***

### config

> `readonly` **config**: [`ProcessConfig`](ProcessConfig.md)

Defined in: node\_modules/@types/node/process.d.ts:1572

The `process.config` property returns a frozen `Object` containing the
JavaScript representation of the configure options used to compile the current
Node.js executable. This is the same as the `config.gypi` file that was produced
when running the `./configure` script.

An example of the possible output looks like:

```js
{
  target_defaults:
   { cflags: [],
     default_configuration: 'Release',
     defines: [],
     include_dirs: [],
     libraries: [] },
  variables:
   {
     host_arch: 'x64',
     napi_build_version: 5,
     node_install_npm: 'true',
     node_prefix: '',
     node_shared_cares: 'false',
     node_shared_http_parser: 'false',
     node_shared_libuv: 'false',
     node_shared_zlib: 'false',
     node_use_openssl: 'true',
     node_shared_openssl: 'false',
     strict_aliasing: 'true',
     target_arch: 'x64',
     v8_use_snapshot: 1
   }
}
```

#### Since

v0.7.7

***

### connected

> **connected**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1987

If the Node.js process is spawned with an IPC channel (see the `Child Process` and `Cluster` documentation), the `process.connected` property will return `true` so long as the IPC
channel is connected and will return `false` after `process.disconnect()` is called.

Once `process.connected` is `false`, it is no longer possible to send messages
over the IPC channel using `process.send()`.

#### Since

v0.7.2

***

### debugPort

> **debugPort**: `number`

Defined in: node\_modules/@types/node/process.d.ts:892

The port used by the Node.js debugger when enabled.

```js
import process from 'node:process';

process.debugPort = 5858;
```

#### Since

v0.7.2

***

### env

> **env**: [`ProcessEnv`](ProcessEnv.md)

Defined in: node\_modules/@types/node/process.d.ts:1075

The `process.env` property returns an object containing the user environment.
See [`environ(7)`](http://man7.org/linux/man-pages/man7/environ.7.html).

An example of this object looks like:

```js
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```

It is possible to modify this object, but such modifications will not be
reflected outside the Node.js process, or (unless explicitly requested)
to other `Worker` threads.
In other words, the following example would not work:

```bash
node -e 'process.env.foo = "bar"' &#x26;&#x26; echo $foo
```

While the following will:

```js
import { env } from 'node:process';

env.foo = 'bar';
console.log(env.foo);
```

Assigning a property on `process.env` will implicitly convert the value
to a string. **This behavior is deprecated.** Future versions of Node.js may
throw an error when the value is not a string, number, or boolean.

```js
import { env } from 'node:process';

env.test = null;
console.log(env.test);
// => 'null'
env.test = undefined;
console.log(env.test);
// => 'undefined'
```

Use `delete` to delete a property from `process.env`.

```js
import { env } from 'node:process';

env.TEST = 1;
delete env.TEST;
console.log(env.TEST);
// => undefined
```

On Windows operating systems, environment variables are case-insensitive.

```js
import { env } from 'node:process';

env.TEST = 1;
console.log(env.test);
// => 1
```

Unless explicitly specified when creating a `Worker` instance,
each `Worker` thread has its own copy of `process.env`, based on its
parent thread's `process.env`, or whatever was specified as the `env` option
to the `Worker` constructor. Changes to `process.env` will not be visible
across `Worker` threads, and only the main thread can make changes that
are visible to the operating system or to native add-ons. On Windows, a copy of `process.env` on a `Worker` instance operates in a case-sensitive manner
unlike the main thread.

#### Since

v0.1.27

***

### execArgv

> **execArgv**: `string`[]

Defined in: node\_modules/@types/node/process.d.ts:808

The `process.execArgv` property returns the set of Node.js-specific command-line
options passed when the Node.js process was launched. These options do not
appear in the array returned by the [argv](#argv) property, and do not
include the Node.js executable, the name of the script, or any options following
the script name. These options are useful in order to spawn child processes with
the same execution environment as the parent.

```bash
node --icu-data-dir=./foo --require ./bar.js script.js --version
```

Results in `process.execArgv`:

```js
["--icu-data-dir=./foo", "--require", "./bar.js"]
```

And `process.argv`:

```js
['/usr/local/bin/node', 'script.js', '--version']
```

Refer to `Worker constructor` for the detailed behavior of worker
threads with this property.

#### Since

v0.7.7

***

### execPath

> **execPath**: `string`

Defined in: node\_modules/@types/node/process.d.ts:818

The `process.execPath` property returns the absolute pathname of the executable
that started the Node.js process. Symbolic links, if any, are resolved.

```js
'/usr/local/bin/node'
```

#### Since

v0.1.100

***

### exitCode

> **exitCode**: `string` \| `number` \| `null` \| `undefined`

Defined in: node\_modules/@types/node/process.d.ts:1152

A number which will be the process exit code, when the process either
exits gracefully, or is exited via [exit](#exit) without specifying
a code.

Specifying a code to [exit](#exit) will override any
previous setting of `process.exitCode`.

#### Default

```ts
undefined
```

#### Since

v0.11.8

***

### features

> `readonly` **features**: [`ProcessFeatures`](ProcessFeatures.md)

Defined in: node\_modules/@types/node/process.d.ts:1895

***

### finalization

> **finalization**: `object`

Defined in: node\_modules/@types/node/process.d.ts:1153

#### register()

> **register**\<`T`\>(`ref`, `callback`): `void`

**`Experimental`**

This function registers a callback to be called when the process emits the `exit` event if the `ref` object was not garbage collected.
If the object `ref` was garbage collected before the `exit` event is emitted, the callback will be removed from the finalization registry, and it will not be called on process exit.

Inside the callback you can release the resources allocated by the `ref` object.
Be aware that all limitations applied to the `beforeExit` event are also applied to the callback function,
this means that there is a possibility that the callback will not be called under special circumstances.

The idea of ​​this function is to help you free up resources when the starts process exiting, but also let the object be garbage collected if it is no longer being used.

##### Type Parameters

###### T

`T` *extends* `object`

##### Parameters

###### ref

`T`

The reference to the resource that is being tracked.

###### callback

(`ref`, `event`) => `void`

The callback function to be called when the resource is finalized.

##### Returns

`void`

##### Since

v22.5.0

#### registerBeforeExit()

> **registerBeforeExit**\<`T`\>(`ref`, `callback`): `void`

**`Experimental`**

This function behaves exactly like the `register`, except that the callback will be called when the process emits the `beforeExit` event if `ref` object was not garbage collected.

Be aware that all limitations applied to the `beforeExit` event are also applied to the callback function, this means that there is a possibility that the callback will not be called under special circumstances.

##### Type Parameters

###### T

`T` *extends* `object`

##### Parameters

###### ref

`T`

The reference to the resource that is being tracked.

###### callback

(`ref`, `event`) => `void`

The callback function to be called when the resource is finalized.

##### Returns

`void`

##### Since

v22.5.0

#### unregister()

> **unregister**(`ref`): `void`

**`Experimental`**

This function remove the register of the object from the finalization registry, so the callback will not be called anymore.

##### Parameters

###### ref

`object`

The reference to the resource that was registered previously.

##### Returns

`void`

##### Since

v22.5.0

***

### getegid?

> `optional` **getegid?**: () => `number`

Defined in: node\_modules/@types/node/process.d.ts:1358

The `process.getegid()` method returns the numerical effective group identity
of the Node.js process. (See [`getegid(2)`](http://man7.org/linux/man-pages/man2/getegid.2.html).)

```js
import process from 'node:process';

if (process.getegid) {
  console.log(`Current gid: ${process.getegid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

#### Returns

`number`

#### Since

v2.0.0

***

### geteuid?

> `optional` **geteuid?**: () => `number`

Defined in: node\_modules/@types/node/process.d.ts:1314

The `process.geteuid()` method returns the numerical effective user identity of
the process. (See [`geteuid(2)`](http://man7.org/linux/man-pages/man2/geteuid.2.html).)

```js
import process from 'node:process';

if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

#### Returns

`number`

#### Since

v2.0.0

***

### getgid?

> `optional` **getgid?**: () => `number`

Defined in: node\_modules/@types/node/process.d.ts:1227

The `process.getgid()` method returns the numerical group identity of the
process. (See [`getgid(2)`](http://man7.org/linux/man-pages/man2/getgid.2.html).)

```js
import process from 'node:process';

if (process.getgid) {
  console.log(`Current gid: ${process.getgid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

#### Returns

`number`

#### Since

v0.1.31

***

### getgroups?

> `optional` **getgroups?**: () => `number`[]

Defined in: node\_modules/@types/node/process.d.ts:1403

The `process.getgroups()` method returns an array with the supplementary group
IDs. POSIX leaves it unspecified if the effective group ID is included but
Node.js ensures it always is.

```js
import process from 'node:process';

if (process.getgroups) {
  console.log(process.getgroups()); // [ 16, 21, 297 ]
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

#### Returns

`number`[]

#### Since

v0.9.4

***

### getuid?

> `optional` **getuid?**: () => `number`

Defined in: node\_modules/@types/node/process.d.ts:1271

The `process.getuid()` method returns the numeric user identity of the process.
(See [`getuid(2)`](http://man7.org/linux/man-pages/man2/getuid.2.html).)

```js
import process from 'node:process';

if (process.getuid) {
  console.log(`Current uid: ${process.getuid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

#### Returns

`number`

#### Since

v0.1.28

***

### hrtime

> **hrtime**: [`HRTime`](HRTime.md)

Defined in: node\_modules/@types/node/process.d.ts:1935

***

### ~~mainModule?~~

> `optional` **mainModule?**: [`Module`](Module.md)

Defined in: node\_modules/@types/node/process.d.ts:1726

The `process.mainModule` property provides an alternative way of retrieving `require.main`. The difference is that if the main module changes at
runtime, `require.main` may still refer to the original main module in
modules that were required before the change occurred. Generally, it's
safe to assume that the two refer to the same module.

As with `require.main`, `process.mainModule` will be `undefined` if there
is no entry script.

#### Since

v0.1.17

#### Deprecated

Since v14.0.0 - Use `main` instead.

***

### memoryUsage

> **memoryUsage**: [`MemoryUsageFn`](MemoryUsageFn.md)

Defined in: node\_modules/@types/node/process.d.ts:1727

***

### noDeprecation?

> `optional` **noDeprecation?**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1864

The process.noDeprecation property indicates whether the --no-deprecation flag is set on the current Node.js process.
See the documentation for the ['warning' event](https://nodejs.org/docs/latest/api/process.html#event-warning) and the [emitWarning()](https://nodejs.org/docs/latest/api/process.html#processemitwarningwarning-type-code-ctor) method for more information about this flag's behavior.

***

### permission

> **permission**: [`ProcessPermission`](ProcessPermission.md)

Defined in: node\_modules/@types/node/process.d.ts:1872

This API is available through the [--permission](https://nodejs.org/api/cli.html#--permission) flag.

`process.permission` is an object whose methods are used to manage permissions for the current process.
Additional documentation is available in the [Permission Model](https://nodejs.org/api/permissions.html#permission-model).

#### Since

v20.0.0

***

### pid

> `readonly` **pid**: `number`

Defined in: node\_modules/@types/node/process.d.ts:1634

The `process.pid` property returns the PID of the process.

```js
import { pid } from 'node:process';

console.log(`This process is pid ${pid}`);
```

#### Since

v0.1.15

***

### platform

> `readonly` **platform**: [`Platform`](../type-aliases/Platform.md)

Defined in: node\_modules/@types/node/process.d.ts:1714

The `process.platform` property returns a string identifying the operating
system platform for which the Node.js binary was compiled.

Currently possible values are:

* `'aix'`
* `'darwin'`
* `'freebsd'`
* `'linux'`
* `'openbsd'`
* `'sunos'`
* `'win32'`

```js
import { platform } from 'node:process';

console.log(`This platform is ${platform}`);
```

The value `'android'` may also be returned if the Node.js is built on the
Android operating system. However, Android support in Node.js [is experimental](https://github.com/nodejs/node/blob/HEAD/BUILDING.md#androidandroid-based-devices-eg-firefox-os).

#### Since

v0.1.16

***

### ppid

> `readonly` **ppid**: `number`

Defined in: node\_modules/@types/node/process.d.ts:1646

The `process.ppid` property returns the PID of the parent of the
current process.

```js
import { ppid } from 'node:process';

console.log(`The parent process is pid ${ppid}`);
```

#### Since

v9.2.0, v8.10.0, v6.13.0

***

### release

> `readonly` **release**: [`ProcessRelease`](ProcessRelease.md)

Defined in: node\_modules/@types/node/process.d.ts:1894

The `process.release` property returns an `Object` containing metadata related
to the current release, including URLs for the source tarball and headers-only
tarball.

`process.release` contains the following properties:

```js
{
  name: 'node',
  lts: 'Hydrogen',
  sourceUrl: 'https://nodejs.org/download/release/v18.12.0/node-v18.12.0.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v18.12.0/node-v18.12.0-headers.tar.gz',
  libUrl: 'https://nodejs.org/download/release/v18.12.0/win-x64/node.lib'
}
```

In custom builds from non-release versions of the source tree, only the `name` property may be present. The additional properties should not be
relied upon to exist.

#### Since

v3.0.0

***

### report

> **report**: [`ProcessReport`](ProcessReport.md)

Defined in: node\_modules/@types/node/process.d.ts:2035

`process.report` is an object whose methods are used to generate diagnostic reports for the current process.
Additional documentation is available in the [report documentation](https://nodejs.org/docs/latest-v25.x/api/report.html).

#### Since

v11.8.0

***

### setegid?

> `optional` **setegid?**: (`id`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:1385

The `process.setegid()` method sets the effective group identity of the process.
(See [`setegid(2)`](http://man7.org/linux/man-pages/man2/setegid.2.html).) The `id` can be passed as either a numeric ID or a group
name string. If a group name is specified, this method blocks while resolving
the associated a numeric ID.

```js
import process from 'node:process';

if (process.getegid &#x26;&#x26; process.setegid) {
  console.log(`Current gid: ${process.getegid()}`);
  try {
    process.setegid(501);
    console.log(`New gid: ${process.getegid()}`);
  } catch (err) {
    console.log(`Failed to set gid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

#### Parameters

##### id

`string` \| `number`

A group name or ID

#### Returns

`void`

#### Since

v2.0.0

***

### seteuid?

> `optional` **seteuid?**: (`id`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:1341

The `process.seteuid()` method sets the effective user identity of the process.
(See [`seteuid(2)`](http://man7.org/linux/man-pages/man2/seteuid.2.html).) The `id` can be passed as either a numeric ID or a username
string. If a username is specified, the method blocks while resolving the
associated numeric ID.

```js
import process from 'node:process';

if (process.geteuid &#x26;&#x26; process.seteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
  try {
    process.seteuid(501);
    console.log(`New uid: ${process.geteuid()}`);
  } catch (err) {
    console.log(`Failed to set uid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

#### Parameters

##### id

`string` \| `number`

A user name or ID

#### Returns

`void`

#### Since

v2.0.0

***

### setgid?

> `optional` **setgid?**: (`id`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:1254

The `process.setgid()` method sets the group identity of the process. (See [`setgid(2)`](http://man7.org/linux/man-pages/man2/setgid.2.html).) The `id` can be passed as either a
numeric ID or a group name
string. If a group name is specified, this method blocks while resolving the
associated numeric ID.

```js
import process from 'node:process';

if (process.getgid &#x26;&#x26; process.setgid) {
  console.log(`Current gid: ${process.getgid()}`);
  try {
    process.setgid(501);
    console.log(`New gid: ${process.getgid()}`);
  } catch (err) {
    console.log(`Failed to set gid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

#### Parameters

##### id

`string` \| `number`

The group name or ID

#### Returns

`void`

#### Since

v0.1.31

***

### setgroups?

> `optional` **setgroups?**: (`groups`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:1429

The `process.setgroups()` method sets the supplementary group IDs for the
Node.js process. This is a privileged operation that requires the Node.js
process to have `root` or the `CAP_SETGID` capability.

The `groups` array can contain numeric group IDs, group names, or both.

```js
import process from 'node:process';

if (process.getgroups &#x26;&#x26; process.setgroups) {
  try {
    process.setgroups([501]);
    console.log(process.getgroups()); // new groups
  } catch (err) {
    console.log(`Failed to set groups: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

#### Parameters

##### groups

readonly (`string` \| `number`)[]

#### Returns

`void`

#### Since

v0.9.4

***

### setuid?

> `optional` **setuid?**: (`id`) => `void`

Defined in: node\_modules/@types/node/process.d.ts:1297

The `process.setuid(id)` method sets the user identity of the process. (See [`setuid(2)`](http://man7.org/linux/man-pages/man2/setuid.2.html).) The `id` can be passed as either a
numeric ID or a username string.
If a username is specified, the method blocks while resolving the associated
numeric ID.

```js
import process from 'node:process';

if (process.getuid &#x26;&#x26; process.setuid) {
  console.log(`Current uid: ${process.getuid()}`);
  try {
    process.setuid(501);
    console.log(`New uid: ${process.getuid()}`);
  } catch (err) {
    console.log(`Failed to set uid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

#### Parameters

##### id

`string` \| `number`

#### Returns

`void`

#### Since

v0.1.28

***

### sourceMapsEnabled

> `readonly` **sourceMapsEnabled**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1461

**`Experimental`**

The `process.sourceMapsEnabled` property returns whether the [Source Map v3](https://sourcemaps.info/spec.html) support for stack traces is enabled.

#### Since

v20.7.0

***

### stderr

> **stderr**: [`WriteStream`](WriteStream.md) & `object`

Defined in: node\_modules/@types/node/process.d.ts:710

The `process.stderr` property returns a stream connected to`stderr` (fd `2`). It is a `net.Socket` (which is a `Duplex` stream) unless fd `2` refers to a file, in which case it is
a `Writable` stream.

`process.stderr` differs from other Node.js streams in important ways. See `note on process I/O` for more information.

#### Type Declaration

##### fd

> **fd**: `2`

***

### stdin

> **stdin**: [`ReadStream`](ReadStream.md) & `object`

Defined in: node\_modules/@types/node/process.d.ts:726

The `process.stdin` property returns a stream connected to`stdin` (fd `0`). It is a `net.Socket` (which is a `Duplex` stream) unless fd `0` refers to a file, in which case it is
a `Readable` stream.

For details of how to read from `stdin` see `readable.read()`.

As a `Duplex` stream, `process.stdin` can also be used in "old" mode that
is compatible with scripts written for Node.js prior to v0.10\.
For more information see `Stream compatibility`.

In "old" streams mode the `stdin` stream is paused by default, so one
must call `process.stdin.resume()` to read from it. Note also that calling `process.stdin.resume()` itself would switch stream to "old" mode.

#### Type Declaration

##### fd

> **fd**: `0`

***

### stdout

> **stdout**: [`WriteStream`](WriteStream.md) & `object`

Defined in: node\_modules/@types/node/process.d.ts:701

The `process.stdout` property returns a stream connected to`stdout` (fd `1`). It is a `net.Socket` (which is a `Duplex` stream) unless fd `1` refers to a file, in which case it is
a `Writable` stream.

For example, to copy `process.stdin` to `process.stdout`:

```js
import { stdin, stdout } from 'node:process';

stdin.pipe(stdout);
```

`process.stdout` differs from other Node.js streams in important ways. See `note on process I/O` for more information.

#### Type Declaration

##### fd

> **fd**: `1`

***

### throwDeprecation

> **throwDeprecation**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:2089

The initial value of `process.throwDeprecation` indicates whether the `--throw-deprecation` flag is set on the current Node.js process. `process.throwDeprecation`
is mutable, so whether or not deprecation warnings result in errors may be altered at runtime. See the documentation for the 'warning' event and the emitWarning()
method for more information.

```bash
$ node --throw-deprecation -p "process.throwDeprecation"
true
$ node -p "process.throwDeprecation"
undefined
$ node
> process.emitWarning('test', 'DeprecationWarning');
undefined
> (node:26598) DeprecationWarning: test
> process.throwDeprecation = true;
true
> process.emitWarning('test', 'DeprecationWarning');
Thrown:
[DeprecationWarning: test] { name: 'DeprecationWarning' }
```

#### Since

v0.9.12

***

### title

> **title**: `string`

Defined in: node\_modules/@types/node/process.d.ts:1676

The `process.title` property returns the current process title (i.e. returns
the current value of `ps`). Assigning a new value to `process.title` modifies
the current value of `ps`.

When a new value is assigned, different platforms will impose different maximum
length restrictions on the title. Usually such restrictions are quite limited.
For instance, on Linux and macOS, `process.title` is limited to the size of the
binary name plus the length of the command-line arguments because setting the `process.title` overwrites the `argv` memory of the process. Node.js v0.8
allowed for longer process title strings by also overwriting the `environ` memory but that was potentially insecure and confusing in some (rather obscure)
cases.

Assigning a value to `process.title` might not result in an accurate label
within process manager applications such as macOS Activity Monitor or Windows
Services Manager.

#### Since

v0.1.104

***

### traceDeprecation

> **traceDeprecation**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:2096

The `process.traceDeprecation` property indicates whether the `--trace-deprecation` flag is set on the current Node.js process. See the
documentation for the `'warning' event` and the `emitWarning() method` for more information about this
flag's behavior.

#### Since

v0.8.0

***

### traceProcessWarnings

> **traceProcessWarnings**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1913

The `process.traceProcessWarnings` property indicates whether the `--trace-warnings` flag
is set on the current Node.js process. This property allows programmatic control over the
tracing of warnings, enabling or disabling stack traces for warnings at runtime.

```js
// Enable trace warnings
process.traceProcessWarnings = true;

// Emit a warning with a stack trace
process.emitWarning('Warning with stack trace');

// Disable trace warnings
process.traceProcessWarnings = false;
```

#### Since

v6.10.0

***

### version

> `readonly` **version**: `string`

Defined in: node\_modules/@types/node/process.d.ts:1487

The `process.version` property contains the Node.js version string.

```js
import { version } from 'node:process';

console.log(`Version: ${version}`);
// Version: v14.8.0
```

To get the version string without the prepended _v_, use`process.versions.node`.

#### Since

v0.1.3

***

### versions

> `readonly` **versions**: [`ProcessVersions`](ProcessVersions.md)

Defined in: node\_modules/@types/node/process.d.ts:1535

The `process.versions` property returns an object listing the version strings of
Node.js and its dependencies. `process.versions.modules` indicates the current
ABI version, which is increased whenever a C++ API changes. Node.js will refuse
to load modules that were compiled against a different module ABI version.

```js
import { versions } from 'node:process';

console.log(versions);
```

Will generate an object similar to:

```console
{ node: '26.0.0-pre',
  acorn: '8.15.0',
  ada: '3.4.1',
  amaro: '1.1.5',
  ares: '1.34.6',
  brotli: '1.2.0',
  merve: '1.0.0',
  cldr: '48.0',
  icu: '78.2',
  llhttp: '9.3.0',
  modules: '144',
  napi: '10',
  nbytes: '0.1.1',
  ncrypto: '0.0.1',
  nghttp2: '1.68.0',
  nghttp3: '',
  ngtcp2: '',
  openssl: '3.5.4',
  simdjson: '4.2.4',
  simdutf: '7.3.3',
  sqlite: '3.51.2',
  tz: '2025c',
  undici: '7.18.2',
  unicode: '17.0',
  uv: '1.51.0',
  uvwasi: '0.0.23',
  v8: '14.3.127.18-node.10',
  zlib: '1.3.1-e00f703',
  zstd: '1.5.7' }
```

#### Since

v0.2.0

## Methods

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/@types/node/events.d.ts:87

The `Symbol.for('nodejs.rejection')` method is called in case a
promise rejection happens when emitting an event and
`captureRejections` is enabled on the emitter.
It is possible to use `events.captureRejectionSymbol` in
place of `Symbol.for('nodejs.rejection')`.

```js
import { EventEmitter, captureRejectionSymbol } from 'node:events';

class MyClass extends EventEmitter {
  constructor() {
    super({ captureRejections: true });
  }

  [captureRejectionSymbol](err, event, ...args) {
    console.log('rejection happened for', event, 'with', err, ...args);
    this.destroy(err);
  }

  destroy(err) {
    // Tear the resource down here.
  }
}
```

#### Parameters

##### error

`Error`

##### event

`string` \| `symbol`

##### args

...`any`[]

#### Returns

`void`

#### Since

v13.4.0, v12.16.0

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`[captureRejectionSymbol]`](EventEmitter.md#capturerejectionsymbol)

***

### abort()

> **abort**(): `never`

Defined in: node\_modules/@types/node/process.d.ts:826

The `process.abort()` method causes the Node.js process to exit immediately and
generate a core file.

This feature is not available in `Worker` threads.

#### Returns

`never`

#### Since

v0.7.0

***

### addListener()

#### Call Signature

> **addListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2148

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Overrides

[`EventEmitter`](EventEmitter.md).[`addListener`](EventEmitter.md#addlistener)

#### Call Signature

> **addListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2152

Alias for `emitter.on(eventName, listener)`.

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Overrides

`EventEmitter.addListener`

***

### addUncaughtExceptionCaptureCallback()

> **addUncaughtExceptionCaptureCallback**(`fn`): `void`

Defined in: node\_modules/@types/node/process.d.ts:848

The `process.addUncaughtExceptionCaptureCallback()` function adds a callback
that will be invoked when an uncaught exception occurs, receiving the exception
value as its first argument.

Unlike `process.setUncaughtExceptionCaptureCallback()`, this function allows
multiple callbacks to be registered and does not conflict with the
[`domain`](https://nodejs.org/docs/latest-v25.x/api/domain.html) module. Callbacks are called in reverse order of registration
(most recent first). If a callback returns `true`, subsequent callbacks
and the default uncaught exception handling are skipped.

```js
import process from 'node:process';

process.addUncaughtExceptionCaptureCallback((err) => {
  console.error('Caught exception:', err.message);
  return true; // Indicates exception was handled
});
```

#### Parameters

##### fn

(`err`) => `boolean`

#### Returns

`void`

#### Since

v25.9.0

***

### availableMemory()

> **availableMemory**(): `number`

Defined in: node\_modules/@types/node/process.d.ts:1743

Gets the amount of free memory that is still available to the process (in bytes).
See [`uv_get_available_memory`](https://nodejs.org/docs/latest-v25.x/api/process.html#processavailablememory) for more information.

#### Returns

`number`

#### Since

v20.13.0

***

### chdir()

> **chdir**(`directory`): `void`

Defined in: node\_modules/@types/node/process.d.ts:869

The `process.chdir()` method changes the current working directory of the
Node.js process or throws an exception if doing so fails (for instance, if
the specified `directory` does not exist).

```js
import { chdir, cwd } from 'node:process';

console.log(`Starting directory: ${cwd()}`);
try {
  chdir('/tmp');
  console.log(`New directory: ${cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}
```

This feature is not available in `Worker` threads.

#### Parameters

##### directory

`string`

#### Returns

`void`

#### Since

v0.1.17

***

### constrainedMemory()

> **constrainedMemory**(): `number`

Defined in: node\_modules/@types/node/process.d.ts:1737

Gets the amount of memory available to the process (in bytes) based on
limits imposed by the OS. If there is no such constraint, or the constraint
is unknown, `0` is returned.

See [`uv_get_constrained_memory`](https://docs.libuv.org/en/v1.x/misc.html#c.uv_get_constrained_memory) for more
information.

#### Returns

`number`

#### Since

v19.6.0, v18.15.0

***

### cpuUsage()

> **cpuUsage**(`previousValue?`): [`CpuUsage`](CpuUsage.md)

Defined in: node\_modules/@types/node/process.d.ts:1770

The `process.cpuUsage()` method returns the user and system CPU time usage of
the current process, in an object with properties `user` and `system`, whose
values are microsecond values (millionth of a second). These values measure time
spent in user and system code respectively, and may end up being greater than
actual elapsed time if multiple CPU cores are performing work for this process.

The result of a previous call to `process.cpuUsage()` can be passed as the
argument to the function, to get a diff reading.

```js
import { cpuUsage } from 'node:process';

const startUsage = cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(cpuUsage(startUsage));
// { user: 514883, system: 11226 }
```

#### Parameters

##### previousValue?

[`CpuUsage`](CpuUsage.md)

A previous return value from calling `process.cpuUsage()`

#### Returns

[`CpuUsage`](CpuUsage.md)

#### Since

v6.1.0

***

### cwd()

> **cwd**(): `string`

Defined in: node\_modules/@types/node/process.d.ts:881

The `process.cwd()` method returns the current working directory of the Node.js
process.

```js
import { cwd } from 'node:process';

console.log(`Current directory: ${cwd()}`);
```

#### Returns

`string`

#### Since

v0.1.8

***

### disconnect()?

> `optional` **disconnect**(): `void`

Defined in: node\_modules/@types/node/process.d.ts:1978

If the Node.js process is spawned with an IPC channel (see the `Child Process` and `Cluster` documentation), the `process.disconnect()` method will close the
IPC channel to the parent process, allowing the child process to exit gracefully
once there are no other connections keeping it alive.

The effect of calling `process.disconnect()` is the same as calling `ChildProcess.disconnect()` from the parent process.

If the Node.js process was not spawned with an IPC channel, `process.disconnect()` will be `undefined`.

#### Returns

`void`

#### Since

v0.7.2

***

### dlopen()

> **dlopen**(`module`, `filename`, `flags?`): `void`

Defined in: node\_modules/@types/node/process.d.ts:918

The `process.dlopen()` method allows dynamically loading shared objects. It is primarily used by `require()` to load C++ Addons, and
should not be used directly, except in special cases. In other words, `require()` should be preferred over `process.dlopen()`
unless there are specific reasons such as custom dlopen flags or loading from ES modules.

The `flags` argument is an integer that allows to specify dlopen behavior. See the `[os.constants.dlopen](https://nodejs.org/docs/latest-v25.x/api/os.html#dlopen-constants)`
documentation for details.

An important requirement when calling `process.dlopen()` is that the `module` instance must be passed. Functions exported by the C++ Addon
are then accessible via `module.exports`.

The example below shows how to load a C++ Addon, named `local.node`, that exports a `foo` function. All the symbols are loaded before the call returns, by passing the `RTLD_NOW` constant.
In this example the constant is assumed to be available.

```js
import { dlopen } from 'node:process';
import { constants } from 'node:os';
import { fileURLToPath } from 'node:url';

const module = { exports: {} };
dlopen(module, fileURLToPath(new URL('local.node', import.meta.url)),
       constants.dlopen.RTLD_NOW);
module.exports.foo();
```

#### Parameters

##### module

`object`

##### filename

`string`

##### flags?

`number`

#### Returns

`void`

***

### emit()

#### Call Signature

> **emit**\<`E`\>(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:2153

Synchronously calls each of the listeners registered for the event named
`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

###### args

...`ProcessEventMap`\[`E`\]

##### Returns

`boolean`

##### Since

v0.1.26

##### Overrides

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

#### Call Signature

> **emit**(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:2154

Synchronously calls each of the listeners registered for the event named
`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

###### eventName

`string` \| `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Since

v0.1.26

##### Overrides

`EventEmitter.emit`

***

### emitWarning()

#### Call Signature

> **emitWarning**(`warning`, `ctor?`): `void`

Defined in: node\_modules/@types/node/process.d.ts:987

The `process.emitWarning()` method can be used to emit custom or application
specific process warnings. These can be listened for by adding a handler to the `'warning'` event.

```js
import { emitWarning } from 'node:process';

// Emit a warning using a string.
emitWarning('Something happened!');
// Emits: (node: 56338) Warning: Something happened!
```

```js
import { emitWarning } from 'node:process';

// Emit a warning using a string and a type.
emitWarning('Something Happened!', 'CustomWarning');
// Emits: (node:56338) CustomWarning: Something Happened!
```

```js
import { emitWarning } from 'node:process';

emitWarning('Something happened!', 'CustomWarning', 'WARN001');
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
```js

In each of the previous examples, an `Error` object is generated internally by `process.emitWarning()` and passed through to the `'warning'` handler.

```js
import process from 'node:process';

process.on('warning', (warning) => {
  console.warn(warning.name);    // 'Warning'
  console.warn(warning.message); // 'Something happened!'
  console.warn(warning.code);    // 'MY_WARNING'
  console.warn(warning.stack);   // Stack trace
  console.warn(warning.detail);  // 'This is some additional information'
});
```

If `warning` is passed as an `Error` object, it will be passed through to the `'warning'` event handler
unmodified (and the optional `type`, `code` and `ctor` arguments will be ignored):

```js
import { emitWarning } from 'node:process';

// Emit a warning using an Error object.
const myWarning = new Error('Something happened!');
// Use the Error name property to specify the type name
myWarning.name = 'CustomWarning';
myWarning.code = 'WARN001';

emitWarning(myWarning);
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
```

A `TypeError` is thrown if `warning` is anything other than a string or `Error` object.

While process warnings use `Error` objects, the process warning mechanism is not a replacement for normal error handling mechanisms.

The following additional handling is implemented if the warning `type` is `'DeprecationWarning'`:
* If the `--throw-deprecation` command-line flag is used, the deprecation warning is thrown as an exception rather than being emitted as an event.
* If the `--no-deprecation` command-line flag is used, the deprecation warning is suppressed.
* If the `--trace-deprecation` command-line flag is used, the deprecation warning is printed to `stderr` along with the full stack trace.

##### Parameters

###### warning

`string` \| `Error`

The warning to emit.

###### ctor?

`Function`

##### Returns

`void`

##### Since

v8.0.0

#### Call Signature

> **emitWarning**(`warning`, `type?`, `ctor?`): `void`

Defined in: node\_modules/@types/node/process.d.ts:988

##### Parameters

###### warning

`string` \| `Error`

###### type?

`string`

###### ctor?

`Function`

##### Returns

`void`

#### Call Signature

> **emitWarning**(`warning`, `type?`, `code?`, `ctor?`): `void`

Defined in: node\_modules/@types/node/process.d.ts:989

##### Parameters

###### warning

`string` \| `Error`

###### type?

`string`

###### code?

`string`

###### ctor?

`Function`

##### Returns

`void`

#### Call Signature

> **emitWarning**(`warning`, `options?`): `void`

Defined in: node\_modules/@types/node/process.d.ts:990

##### Parameters

###### warning

`string` \| `Error`

###### options?

[`EmitWarningOptions`](EmitWarningOptions.md)

##### Returns

`void`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/events.d.ts:154

Returns an array listing the events for which the emitter has registered
listeners.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`eventNames`](EventEmitter.md#eventnames)

***

### execve()?

> `optional` **execve**(`file`, `args?`, `env?`): `never`

Defined in: node\_modules/@types/node/process.d.ts:2146

**`Experimental`**

Replaces the current process with a new process.

This is achieved by using the `execve` POSIX function and therefore no memory or other
resources from the current process are preserved, except for the standard input,
standard output and standard error file descriptor.

All other resources are discarded by the system when the processes are swapped, without triggering
any exit or close events and without running any cleanup handler.

This function will never return, unless an error occurred.

This function is not available on Windows or IBM i.

#### Parameters

##### file

`string`

The name or path of the executable file to run.

##### args?

readonly `string`[]

List of string arguments. No argument can contain a null-byte (`\u0000`).

##### env?

[`ProcessEnv`](ProcessEnv.md)

Environment key-value pairs.
No key or value can contain a null-byte (`\u0000`).
**Default:** `process.env`.

#### Returns

`never`

#### Since

v22.15.0

***

### exit()

> **exit**(`code?`): `never`

Defined in: node\_modules/@types/node/process.d.ts:1141

The `process.exit()` method instructs Node.js to terminate the process
synchronously with an exit status of `code`. If `code` is omitted, exit uses
either the 'success' code `0` or the value of `process.exitCode` if it has been
set. Node.js will not terminate until all the `'exit'` event listeners are
called.

To exit with a 'failure' code:

```js
import { exit } from 'node:process';

exit(1);
```

The shell that executed Node.js should see the exit code as `1`.

Calling `process.exit()` will force the process to exit as quickly as possible
even if there are still asynchronous operations pending that have not yet
completed fully, including I/O operations to `process.stdout` and `process.stderr`.

In most situations, it is not actually necessary to call `process.exit()` explicitly. The Node.js process will exit on its own _if there is no additional_
_work pending_ in the event loop. The `process.exitCode` property can be set to
tell the process which exit code to use when the process exits gracefully.

For instance, the following example illustrates a _misuse_ of the `process.exit()` method that could lead to data printed to stdout being
truncated and lost:

```js
import { exit } from 'node:process';

// This is an example of what *not* to do:
if (someConditionNotMet()) {
  printUsageToStdout();
  exit(1);
}
```

The reason this is problematic is because writes to `process.stdout` in Node.js
are sometimes _asynchronous_ and may occur over multiple ticks of the Node.js
event loop. Calling `process.exit()`, however, forces the process to exit _before_ those additional writes to `stdout` can be performed.

Rather than calling `process.exit()` directly, the code _should_ set the `process.exitCode` and allow the process to exit naturally by avoiding
scheduling any additional work for the event loop:

```js
import process from 'node:process';

// How to properly set the exit code while letting
// the process exit gracefully.
if (someConditionNotMet()) {
  printUsageToStdout();
  process.exitCode = 1;
}
```

If it is necessary to terminate the Node.js process due to an error condition,
throwing an _uncaught_ error and allowing the process to terminate accordingly
is safer than calling `process.exit()`.

In `Worker` threads, this function stops the current thread rather
than the current process.

#### Parameters

##### code?

`string` \| `number` \| `null`

The exit code. For string type, only integer strings (e.g.,'1') are allowed.

#### Returns

`never`

#### Since

v0.1.13

***

### getActiveResourcesInfo()

> **getActiveResourcesInfo**(): `string`[]

Defined in: node\_modules/@types/node/process.d.ts:1204

The `process.getActiveResourcesInfo()` method returns an array of strings containing
the types of the active resources that are currently keeping the event loop alive.

```js
import { getActiveResourcesInfo } from 'node:process';
import { setTimeout } from 'node:timers';

console.log('Before:', getActiveResourcesInfo());
setTimeout(() => {}, 1000);
console.log('After:', getActiveResourcesInfo());
// Prints:
//   Before: [ 'TTYWrap', 'TTYWrap', 'TTYWrap' ]
//   After: [ 'TTYWrap', 'TTYWrap', 'TTYWrap', 'Timeout' ]
```

#### Returns

`string`[]

#### Since

v17.3.0, v16.14.0

***

### getBuiltinModule()

#### Call Signature

> **getBuiltinModule**\<`ID`\>(`id`): `BuiltInModule`\[`ID`\]

Defined in: node\_modules/@types/node/process.d.ts:1209

Provides a way to load built-in modules in a globally available function.

##### Type Parameters

###### ID

`ID` *extends* keyof `BuiltInModule`

##### Parameters

###### id

`ID`

ID of the built-in module being requested.

##### Returns

`BuiltInModule`\[`ID`\]

#### Call Signature

> **getBuiltinModule**(`id`): `object` \| `undefined`

Defined in: node\_modules/@types/node/process.d.ts:1210

##### Parameters

###### id

`string`

##### Returns

`object` \| `undefined`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/@types/node/events.d.ts:161

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to
`events.defaultMaxListeners`.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`getMaxListeners`](EventEmitter.md#getmaxlisteners)

***

### hasUncaughtExceptionCaptureCallback()

> **hasUncaughtExceptionCaptureCallback**(): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1455

Indicates whether a callback has been set using [setUncaughtExceptionCaptureCallback](#setuncaughtexceptioncapturecallback).

#### Returns

`boolean`

#### Since

v9.3.0

***

### kill()

> **kill**(`pid`, `signal?`): `true`

Defined in: node\_modules/@types/node/process.d.ts:1608

The `process.kill()` method sends the `signal` to the process identified by`pid`.

Signal names are strings such as `'SIGINT'` or `'SIGHUP'`. See `Signal Events` and [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) for more information.

This method will throw an error if the target `pid` does not exist. As a special
case, a signal of `0` can be used to test for the existence of a process.
Windows platforms will throw an error if the `pid` is used to kill a process
group.

Even though the name of this function is `process.kill()`, it is really just a
signal sender, like the `kill` system call. The signal sent may do something
other than kill the target process.

```js
import process, { kill } from 'node:process';

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

setTimeout(() => {
  console.log('Exiting.');
  process.exit(0);
}, 100);

kill(process.pid, 'SIGHUP');
```

When `SIGUSR1` is received by a Node.js process, Node.js will start the
debugger. See `Signal Events`.

#### Parameters

##### pid

`number`

A process ID

##### signal?

`string` \| `number`

The signal to send, either as a string or number.

#### Returns

`true`

#### Since

v0.0.6

***

### listenerCount()

#### Call Signature

> **listenerCount**\<`E`\>(`eventName`, `listener?`): `number`

Defined in: node\_modules/@types/node/process.d.ts:2155

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

The name of the event being listened for

###### listener?

(...`args`) => `void`

The event handler function

##### Returns

`number`

##### Since

v3.2.0

##### Overrides

[`EventEmitter`](EventEmitter.md).[`listenerCount`](EventEmitter.md#listenercount)

#### Call Signature

> **listenerCount**(`eventName`, `listener?`): `number`

Defined in: node\_modules/@types/node/process.d.ts:2159

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Parameters

###### eventName

`string` \| `symbol`

The name of the event being listened for

###### listener?

(...`args`) => `void`

The event handler function

##### Returns

`number`

##### Since

v3.2.0

##### Overrides

`EventEmitter.listenerCount`

***

### listeners()

#### Call Signature

> **listeners**\<`E`\>(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/process.d.ts:2160

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

##### Returns

((...`args`) => `void`)[]

##### Since

v0.1.26

##### Overrides

[`EventEmitter`](EventEmitter.md).[`listeners`](EventEmitter.md#listeners)

#### Call Signature

> **listeners**(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/process.d.ts:2161

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Parameters

###### eventName

`string` \| `symbol`

##### Returns

((...`args`) => `void`)[]

##### Since

v0.1.26

##### Overrides

`EventEmitter.listeners`

***

### loadEnvFile()

> **loadEnvFile**(`path?`): `void`

Defined in: node\_modules/@types/node/process.d.ts:1623

Loads the environment configuration from a `.env` file into `process.env`. If
the file is not found, error will be thrown.

To load a specific .env file by specifying its path, use the following code:

```js
import { loadEnvFile } from 'node:process';

loadEnvFile('./development.env')
```

#### Parameters

##### path?

`PathLike`

The path to the .env file

#### Returns

`void`

#### Since

v20.12.0

***

### nextTick()

> **nextTick**(`callback`, ...`args`): `void`

Defined in: node\_modules/@types/node/process.d.ts:1859

`process.nextTick()` adds `callback` to the "next tick queue". This queue is
fully drained after the current operation on the JavaScript stack runs to
completion and before the event loop is allowed to continue. It's possible to
create an infinite loop if one were to recursively call `process.nextTick()`.
See the [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick) guide for more background.

```js
import { nextTick } from 'node:process';

console.log('start');
nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// nextTick callback
```

This is important when developing APIs in order to give users the opportunity
to assign event handlers _after_ an object has been constructed but before any
I/O has occurred:

```js
import { nextTick } from 'node:process';

function MyThing(options) {
  this.setupOptions(options);

  nextTick(() => {
    this.startDoingStuff();
  });
}

const thing = new MyThing();
thing.getReadyForStuff();

// thing.startDoingStuff() gets called now, not before.
```

It is very important for APIs to be either 100% synchronous or 100%
asynchronous. Consider this example:

```js
// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!
function maybeSync(arg, cb) {
  if (arg) {
    cb();
    return;
  }

  fs.stat('file', cb);
}
```

This API is hazardous because in the following case:

```js
const maybeTrue = Math.random() > 0.5;

maybeSync(maybeTrue, () => {
  foo();
});

bar();
```

It is not clear whether `foo()` or `bar()` will be called first.

The following approach is much better:

```js
import { nextTick } from 'node:process';

function definitelyAsync(arg, cb) {
  if (arg) {
    nextTick(cb);
    return;
  }

  fs.stat('file', cb);
}
```

#### Parameters

##### callback

`Function`

##### args

...`any`[]

Additional arguments to pass when invoking the `callback`

#### Returns

`void`

#### Since

v0.1.26

***

### off()

#### Call Signature

> **off**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2162

Alias for `emitter.removeListener()`.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Since

v10.0.0

##### Overrides

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

#### Call Signature

> **off**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2166

Alias for `emitter.removeListener()`.

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Since

v10.0.0

##### Overrides

`EventEmitter.off`

***

### on()

#### Call Signature

> **on**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2167

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The
`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Overrides

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

#### Call Signature

> **on**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2171

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The
`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### eventName

`string` \| `symbol`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Overrides

`EventEmitter.on`

***

### once()

#### Call Signature

> **once**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2172

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The
`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Overrides

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

#### Call Signature

> **once**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2176

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The
`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### eventName

`string` \| `symbol`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Overrides

`EventEmitter.once`

***

### prependListener()

#### Call Signature

> **prependListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2177

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Overrides

[`EventEmitter`](EventEmitter.md).[`prependListener`](EventEmitter.md#prependlistener)

#### Call Signature

> **prependListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2181

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### eventName

`string` \| `symbol`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Overrides

`EventEmitter.prependListener`

***

### prependOnceListener()

#### Call Signature

> **prependOnceListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2182

Adds a **one-time** `listener` function for the event named `eventName` to the
_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Overrides

[`EventEmitter`](EventEmitter.md).[`prependOnceListener`](EventEmitter.md#prependoncelistener)

#### Call Signature

> **prependOnceListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2186

Adds a **one-time** `listener` function for the event named `eventName` to the
_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### eventName

`string` \| `symbol`

The name of the event.

###### listener

(...`args`) => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Overrides

`EventEmitter.prependOnceListener`

***

### rawListeners()

#### Call Signature

> **rawListeners**\<`E`\>(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/process.d.ts:2187

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

##### Returns

((...`args`) => `void`)[]

##### Since

v9.4.0

##### Overrides

[`EventEmitter`](EventEmitter.md).[`rawListeners`](EventEmitter.md#rawlisteners)

#### Call Signature

> **rawListeners**(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/process.d.ts:2188

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Parameters

###### eventName

`string` \| `symbol`

##### Returns

((...`args`) => `void`)[]

##### Since

v9.4.0

##### Overrides

`EventEmitter.rawListeners`

***

### ref()

> **ref**(`maybeRefable`): `void`

Defined in: node\_modules/@types/node/process.d.ts:2110

**`Experimental`**

An object is "refable" if it implements the Node.js "Refable protocol".
Specifically, this means that the object implements the `Symbol.for('nodejs.ref')`
and `Symbol.for('nodejs.unref')` methods. "Ref'd" objects will keep the Node.js
event loop alive, while "unref'd" objects will not. Historically, this was
implemented by using `ref()` and `unref()` methods directly on the objects.
This pattern, however, is being deprecated in favor of the "Refable protocol"
in order to better support Web Platform API types whose APIs cannot be modified
to add `ref()` and `unref()` methods but still need to support that behavior.

#### Parameters

##### maybeRefable

`any`

An object that may be "refable".

#### Returns

`void`

#### Since

v22.14.0

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`E`\>(`eventName?`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2190

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName?

`E`

##### Returns

`this`

##### Since

v0.1.26

##### Overrides

[`EventEmitter`](EventEmitter.md).[`removeAllListeners`](EventEmitter.md#removealllisteners)

#### Call Signature

> **removeAllListeners**(`eventName?`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2191

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### eventName?

`string` \| `symbol`

##### Returns

`this`

##### Since

v0.1.26

##### Overrides

`EventEmitter.removeAllListeners`

***

### removeListener()

#### Call Signature

> **removeListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2192

Removes the specified `listener` from the listener array for the event named
`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any
`removeListener()` or `removeAllListeners()` calls _after_ emitting and
_before_ the last listener finishes execution will not remove them from
`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indexes of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`
listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

###### E

`E` *extends* keyof `ProcessEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Overrides

[`EventEmitter`](EventEmitter.md).[`removeListener`](EventEmitter.md#removelistener)

#### Call Signature

> **removeListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/process.d.ts:2196

Removes the specified `listener` from the listener array for the event named
`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any
`removeListener()` or `removeAllListeners()` calls _after_ emitting and
_before_ the last listener finishes execution will not remove them from
`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indexes of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`
listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Overrides

`EventEmitter.removeListener`

***

### resourceUsage()

> **resourceUsage**(): [`ResourceUsage`](ResourceUsage.md)

Defined in: node\_modules/@types/node/process.d.ts:2066

```js
import { resourceUsage } from 'node:process';

console.log(resourceUsage());
/*
  Will output:
  {
    userCPUTime: 82872,
    systemCPUTime: 4143,
    maxRSS: 33164,
    sharedMemorySize: 0,
    unsharedDataSize: 0,
    unsharedStackSize: 0,
    minorPageFault: 2469,
    majorPageFault: 0,
    swappedOut: 0,
    fsRead: 0,
    fsWrite: 8,
    ipcSent: 0,
    ipcReceived: 0,
    signalsCount: 0,
    voluntaryContextSwitches: 79,
    involuntaryContextSwitches: 1
  }

```

#### Returns

[`ResourceUsage`](ResourceUsage.md)

the resource usage for the current process. All of these values come from the `uv_getrusage` call which returns a [`uv_rusage_t` struct][uv_rusage_t].

#### Since

v12.6.0

***

### send()?

#### Call Signature

> `optional` **send**(`message`, `sendHandle?`, `options?`, `callback?`): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1953

If Node.js is spawned with an IPC channel, the `process.send()` method can be
used to send messages to the parent process. Messages will be received as a `'message'` event on the parent's `ChildProcess` object.

If Node.js was not spawned with an IPC channel, `process.send` will be `undefined`.

The message goes through serialization and parsing. The resulting message might
not be the same as what is originally sent.

##### Parameters

###### message

`any`

###### sendHandle?

`SendHandle`

###### options?

`MessageOptions`

used to parameterize the sending of certain types of handles. `options` supports the following properties:

###### callback?

(`error`) => `void`

##### Returns

`boolean`

##### Since

v0.5.9

#### Call Signature

> `optional` **send**(`message`, `sendHandle`, `callback?`): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1959

##### Parameters

###### message

`any`

###### sendHandle

`SendHandle`

###### callback?

(`error`) => `void`

##### Returns

`boolean`

#### Call Signature

> `optional` **send**(`message`, `callback`): `boolean`

Defined in: node\_modules/@types/node/process.d.ts:1964

##### Parameters

###### message

`any`

###### callback

(`error`) => `void`

##### Returns

`boolean`

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/@types/node/events.d.ts:436

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to
`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### n

`number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`setMaxListeners`](EventEmitter.md#setmaxlisteners)

***

### setSourceMapsEnabled()

> **setSourceMapsEnabled**(`value`): `void`

Defined in: node\_modules/@types/node/process.d.ts:1473

**`Experimental`**

This function enables or disables the [Source Map v3](https://sourcemaps.info/spec.html) support for
stack traces.

It provides same features as launching Node.js process with commandline options `--enable-source-maps`.

Only source maps in JavaScript files that are loaded after source maps has been
enabled will be parsed and loaded.

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Since

v16.6.0, v14.18.0

***

### setUncaughtExceptionCaptureCallback()

> **setUncaughtExceptionCaptureCallback**(`cb`): `void`

Defined in: node\_modules/@types/node/process.d.ts:1450

The `process.setUncaughtExceptionCaptureCallback()` function sets a function
that will be invoked when an uncaught exception occurs, which will receive the
exception value itself as its first argument.

If such a function is set, the `'uncaughtException'` event will
not be emitted. If `--abort-on-uncaught-exception` was passed from the
command line or set through `v8.setFlagsFromString()`, the process will
not abort. Actions configured to take place on exceptions such as report
generations will be affected too

To unset the capture function, `process.setUncaughtExceptionCaptureCallback(null)` may be used. Calling this
method with a non-`null` argument while another capture function is set will
throw an error.

To register multiple callbacks that can coexist, use
`process.addUncaughtExceptionCaptureCallback()` instead.

#### Parameters

##### cb

((`err`) => `void`) \| `null`

#### Returns

`void`

#### Since

v9.3.0

***

### threadCpuUsage()

> **threadCpuUsage**(`previousValue?`): [`CpuUsage`](CpuUsage.md)

Defined in: node\_modules/@types/node/process.d.ts:1658

The `process.threadCpuUsage()` method returns the user and system CPU time usage of
the current worker thread, in an object with properties `user` and `system`, whose
values are microsecond values (millionth of a second).

The result of a previous call to `process.threadCpuUsage()` can be passed as the
argument to the function, to get a diff reading.

#### Parameters

##### previousValue?

[`CpuUsage`](CpuUsage.md)

A previous return value from calling
`process.threadCpuUsage()`

#### Returns

[`CpuUsage`](CpuUsage.md)

#### Since

v23.9.0

***

### umask()

#### Call Signature

> **umask**(): `number`

Defined in: node\_modules/@types/node/process.d.ts:1921

`process.umask()` returns the Node.js process's file mode creation mask. Child
processes inherit the mask from the parent process.

##### Returns

`number`

##### Since

v0.1.19

##### Deprecated

Calling `process.umask()` with no argument causes the process-wide umask to be written twice. This introduces a race condition between threads, and is a potential
security vulnerability. There is no safe, cross-platform alternative API.

#### Call Signature

> **umask**(`mask`): `number`

Defined in: node\_modules/@types/node/process.d.ts:1925

Can only be set if not in worker thread.

##### Parameters

###### mask

`string` \| `number`

##### Returns

`number`

***

### unref()

> **unref**(`maybeRefable`): `void`

Defined in: node\_modules/@types/node/process.d.ts:2124

**`Experimental`**

An object is "unrefable" if it implements the Node.js "Refable protocol".
Specifically, this means that the object implements the `Symbol.for('nodejs.ref')`
and `Symbol.for('nodejs.unref')` methods. "Ref'd" objects will keep the Node.js
event loop alive, while "unref'd" objects will not. Historically, this was
implemented by using `ref()` and `unref()` methods directly on the objects.
This pattern, however, is being deprecated in favor of the "Refable protocol"
in order to better support Web Platform API types whose APIs cannot be modified
to add `ref()` and `unref()` methods but still need to support that behavior.

#### Parameters

##### maybeRefable

`any`

An object that may be "unref'd".

#### Returns

`void`

#### Since

v22.14.0

***

### uptime()

> **uptime**(): `number`

Defined in: node\_modules/@types/node/process.d.ts:1934

The `process.uptime()` method returns the number of seconds the current Node.js
process has been running.

The return value includes fractions of a second. Use `Math.floor()` to get whole
seconds.

#### Returns

`number`

#### Since

v0.5.0
