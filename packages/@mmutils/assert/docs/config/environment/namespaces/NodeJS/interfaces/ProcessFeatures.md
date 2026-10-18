[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / ProcessFeatures

# Interface: ProcessFeatures

Defined in: node\_modules/@types/node/process.d.ts:193

## Properties

### cached\_builtins

> `readonly` **cached\_builtins**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:198

A boolean value that is `true` if the current Node.js build is caching builtin modules.

#### Since

v12.0.0

***

### debug

> `readonly` **debug**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:203

A boolean value that is `true` if the current Node.js build is a debug build.

#### Since

v0.5.5

***

### inspector

> `readonly` **inspector**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:208

A boolean value that is `true` if the current Node.js build includes the inspector.

#### Since

v11.10.0

***

### ~~ipv6~~

> `readonly` **ipv6**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:216

A boolean value that is `true` if the current Node.js build includes support for IPv6.

Since all Node.js builds have IPv6 support, this value is always `true`.

#### Since

v0.5.3

#### Deprecated

This property is always true, and any checks based on it are redundant.

***

### require\_module

> `readonly` **require\_module**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:222

A boolean value that is `true` if the current Node.js build supports
[loading ECMAScript modules using `require()`](https://nodejs.org/docs/latest-v25.x/api/modules.md#loading-ecmascript-modules-using-require).

#### Since

v22.10.0

***

### tls

> `readonly` **tls**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:227

A boolean value that is `true` if the current Node.js build includes support for TLS.

#### Since

v0.5.3

***

### ~~tls\_alpn~~

> `readonly` **tls\_alpn**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:236

A boolean value that is `true` if the current Node.js build includes support for ALPN in TLS.

In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional ALPN support.
This value is therefore identical to that of `process.features.tls`.

#### Since

v4.8.0

#### Deprecated

Use `process.features.tls` instead.

***

### ~~tls\_ocsp~~

> `readonly` **tls\_ocsp**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:245

A boolean value that is `true` if the current Node.js build includes support for OCSP in TLS.

In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional OCSP support.
This value is therefore identical to that of `process.features.tls`.

#### Since

v0.11.13

#### Deprecated

Use `process.features.tls` instead.

***

### ~~tls\_sni~~

> `readonly` **tls\_sni**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:254

A boolean value that is `true` if the current Node.js build includes support for SNI in TLS.

In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional SNI support.
This value is therefore identical to that of `process.features.tls`.

#### Since

v0.5.3

#### Deprecated

Use `process.features.tls` instead.

***

### typescript

> `readonly` **typescript**: `false` \| `"strip"` \| `"transform"`

Defined in: node\_modules/@types/node/process.d.ts:261

A value that is `"strip"` by default,
`"transform"` if Node.js is run with `--experimental-transform-types`, and `false` if
Node.js is run with `--no-strip-types`.

#### Since

v22.10.0

***

### ~~uv~~

> `readonly` **uv**: `boolean`

Defined in: node\_modules/@types/node/process.d.ts:269

A boolean value that is `true` if the current Node.js build includes support for libuv.

Since it's not possible to build Node.js without libuv, this value is always `true`.

#### Since

v0.5.3

#### Deprecated

This property is always true, and any checks based on it are redundant.
