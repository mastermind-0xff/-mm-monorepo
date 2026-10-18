[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / ReadStream

# Interface: ReadStream

Defined in: node\_modules/@types/node/process.d.ts:147

## Extends

- `ReadStream`

## Properties

### allowHalfOpen

> **allowHalfOpen**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1146

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `true`.

This can be changed manually to change the half-open behavior of an existing
`Duplex` stream instance, but must be changed before the `'end'` event is emitted.

#### Since

v0.9.4

#### Inherited from

`tty.ReadStream.allowHalfOpen`

***

### autoSelectFamilyAttemptedAddresses

> `readonly` **autoSelectFamilyAttemptedAddresses**: `string`[]

Defined in: node\_modules/@types/node/net.d.ts:280

This property is only present if the family autoselection algorithm is enabled in `socket.connect(options)`
and it is an array of the addresses that have been attempted.

Each address is a string in the form of `$IP:$PORT`.
If the connection was successful, then the last address is the one that the socket is currently connected to.

#### Since

v19.4.0

#### Inherited from

`tty.ReadStream.autoSelectFamilyAttemptedAddresses`

***

### ~~bufferSize~~

> `readonly` **bufferSize**: `number`

Defined in: node\_modules/@types/node/net.d.ts:298

This property shows the number of characters buffered for writing. The buffer
may contain strings whose length after encoding is not yet known. So this number
is only an approximation of the number of bytes in the buffer.

`net.Socket` has the property that `socket.write()` always works. This is to
help users get up and running quickly. The computer cannot always keep up
with the amount of data that is written to a socket. The network connection
simply might be too slow. Node.js will internally queue up the data written to a
socket and send it out over the wire when it is possible.

The consequence of this internal buffering is that memory may grow.
Users who experience large or growing `bufferSize` should attempt to
"throttle" the data flows in their program with `socket.pause()` and `socket.resume()`.

#### Since

v0.3.8

#### Deprecated

Since v14.6.0 - Use `writableLength` instead.

#### Inherited from

`tty.ReadStream.bufferSize`

***

### bytesRead

> `readonly` **bytesRead**: `number`

Defined in: node\_modules/@types/node/net.d.ts:303

The amount of received bytes.

#### Since

v0.5.3

#### Inherited from

`tty.ReadStream.bytesRead`

***

### bytesWritten

> `readonly` **bytesWritten**: `number`

Defined in: node\_modules/@types/node/net.d.ts:308

The amount of bytes sent.

#### Since

v0.5.3

#### Inherited from

`tty.ReadStream.bytesWritten`

***

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:167

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Inherited from

`tty.ReadStream.closed`

***

### connecting

> `readonly` **connecting**: `boolean`

Defined in: node\_modules/@types/node/net.d.ts:316

If `true`, `socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

#### Since

v6.1.0

#### Inherited from

`tty.ReadStream.connecting`

***

### destroyed

> `readonly` **destroyed**: `boolean`

Defined in: node\_modules/@types/node/net.d.ts:326

See `writable.destroyed` for further details.

#### Inherited from

`tty.ReadStream.destroyed`

***

### errored

> `readonly` **errored**: `Error` \| `null`

Defined in: node\_modules/@types/node/stream.d.ts:172

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

[`WriteStream`](WriteStream.md).[`errored`](WriteStream.md#errored)

***

### isRaw

> **isRaw**: `boolean`

Defined in: node\_modules/@types/node/tty.d.ts:26

A `boolean` that is `true` if the TTY is currently configured to operate as a
raw device.

This flag is always `false` when a process starts, even if the terminal is
operating in raw mode. Its value will change with subsequent calls to `setRawMode`.

#### Since

v0.7.7

#### Inherited from

`tty.ReadStream.isRaw`

***

### isTTY

> **isTTY**: `boolean`

Defined in: node\_modules/@types/node/tty.d.ts:45

A `boolean` that is always `true` for `tty.ReadStream` instances.

#### Since

v0.5.8

#### Inherited from

`tty.ReadStream.isTTY`

***

### localAddress?

> `readonly` `optional` **localAddress?**: `string`

Defined in: node\_modules/@types/node/net.d.ts:333

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

#### Since

v0.9.6

#### Inherited from

`tty.ReadStream.localAddress`

***

### localFamily?

> `readonly` `optional` **localFamily?**: `string`

Defined in: node\_modules/@types/node/net.d.ts:343

The string representation of the local IP family. `'IPv4'` or `'IPv6'`.

#### Since

v18.8.0, v16.18.0

#### Inherited from

`tty.ReadStream.localFamily`

***

### localPort?

> `readonly` `optional` **localPort?**: `number`

Defined in: node\_modules/@types/node/net.d.ts:338

The numeric representation of the local port. For example, `80` or `21`.

#### Since

v0.9.6

#### Inherited from

`tty.ReadStream.localPort`

***

### pending

> `readonly` **pending**: `boolean`

Defined in: node\_modules/@types/node/net.d.ts:322

This is `true` if the socket is not connected yet, either because `.connect()`has not yet been called or because it is still in the process of connecting
(see `socket.connecting`).

#### Since

v11.2.0, v10.16.0

#### Inherited from

`tty.ReadStream.pending`

***

### readable

> **readable**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:119

Is `true` if it is safe to call [read](#read), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Since

v11.4.0

#### Inherited from

`tty.ReadStream.readable`

***

### readableAborted

> `readonly` **readableAborted**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:113

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Since

v16.8.0

#### Inherited from

`tty.ReadStream.readableAborted`

***

### readableDidRead

> `readonly` **readableDidRead**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:124

Returns whether `'data'` has been emitted.

#### Since

v16.7.0, v14.18.0

#### Inherited from

`tty.ReadStream.readableDidRead`

***

### readableEncoding

> `readonly` **readableEncoding**: [`BufferEncoding`](../type-aliases/BufferEncoding.md) \| `null`

Defined in: node\_modules/@types/node/stream.d.ts:129

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](#setencoding) method.

#### Since

v12.7.0

#### Inherited from

[`WriteStream`](WriteStream.md).[`readableEncoding`](WriteStream.md#readableencoding)

***

### readableEnded

> `readonly` **readableEnded**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:134

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v25.x/api/stream.html#event-end) event is emitted.

#### Since

v12.9.0

#### Inherited from

`tty.ReadStream.readableEnded`

***

### readableFlowing

> **readableFlowing**: `boolean` \| `null`

Defined in: node\_modules/@types/node/stream.d.ts:140

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v25.x/api/stream.html#three-states) section.

#### Since

v9.4.0

#### Inherited from

[`WriteStream`](WriteStream.md).[`readableFlowing`](WriteStream.md#readableflowing)

***

### readableHighWaterMark

> `readonly` **readableHighWaterMark**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:145

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Since

v9.3.0

#### Inherited from

`tty.ReadStream.readableHighWaterMark`

***

### readableLength

> `readonly` **readableLength**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:152

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Inherited from

`tty.ReadStream.readableLength`

***

### readableObjectMode

> `readonly` **readableObjectMode**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:157

Getter for the property `objectMode` of a given `Readable` stream.

#### Since

v12.3.0

#### Inherited from

`tty.ReadStream.readableObjectMode`

***

### readyState

> `readonly` **readyState**: `SocketReadyState`

Defined in: node\_modules/@types/node/net.d.ts:353

This property represents the state of the connection as a string.

* If the stream is connecting `socket.readyState` is `opening`.
* If the stream is readable and writable, it is `open`.
* If the stream is readable and not writable, it is `readOnly`.
* If the stream is not readable and writable, it is `writeOnly`.

#### Since

v0.5.0

#### Inherited from

`tty.ReadStream.readyState`

***

### remoteAddress

> `readonly` **remoteAddress**: `string` \| `undefined`

Defined in: node\_modules/@types/node/net.d.ts:359

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Since

v0.5.10

#### Inherited from

[`WriteStream`](WriteStream.md).[`remoteAddress`](WriteStream.md#remoteaddress)

***

### remoteFamily

> `readonly` **remoteFamily**: `string` \| `undefined`

Defined in: node\_modules/@types/node/net.d.ts:365

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Since

v0.11.14

#### Inherited from

[`WriteStream`](WriteStream.md).[`remoteFamily`](WriteStream.md#remotefamily)

***

### remotePort

> `readonly` **remotePort**: `number` \| `undefined`

Defined in: node\_modules/@types/node/net.d.ts:371

The numeric representation of the remote port. For example, `80` or `21`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Since

v0.5.10

#### Inherited from

[`WriteStream`](WriteStream.md).[`remotePort`](WriteStream.md#remoteport)

***

### timeout?

> `readonly` `optional` **timeout?**: `number`

Defined in: node\_modules/@types/node/net.d.ts:377

The socket timeout in milliseconds as set by `socket.setTimeout()`.
It is `undefined` if a timeout has not been set.

#### Since

v10.7.0

#### Inherited from

`tty.ReadStream.timeout`

***

### writable

> **writable**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:760

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

#### Since

v11.4.0

#### Inherited from

`tty.ReadStream.writable`

***

### writableAborted

> `readonly` **writableAborted**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:765

Returns whether the stream was destroyed or errored before emitting `'finish'`.

#### Since

v18.0.0, v16.17.0

#### Inherited from

`tty.ReadStream.writableAborted`

***

### writableCorked

> `readonly` **writableCorked**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:799

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Since

v13.2.0, v12.16.0

#### Inherited from

`tty.ReadStream.writableCorked`

***

### writableEnded

> `readonly` **writableEnded**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:771

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Since

v12.9.0

#### Inherited from

`tty.ReadStream.writableEnded`

***

### writableFinished

> `readonly` **writableFinished**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:776

Is set to `true` immediately before the `'finish'` event is emitted.

#### Since

v12.6.0

#### Inherited from

`tty.ReadStream.writableFinished`

***

### writableHighWaterMark

> `readonly` **writableHighWaterMark**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:781

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Since

v9.3.0

#### Inherited from

`tty.ReadStream.writableHighWaterMark`

***

### writableLength

> `readonly` **writableLength**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:788

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Inherited from

`tty.ReadStream.writableLength`

***

### writableNeedDrain

> `readonly` **writableNeedDrain**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:819

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

#### Since

v15.2.0, v14.17.0

#### Inherited from

`tty.ReadStream.writableNeedDrain`

***

### writableObjectMode

> `readonly` **writableObjectMode**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:793

Getter for the property `objectMode` of a given `Writable` stream.

#### Since

v12.3.0

#### Inherited from

`tty.ReadStream.writableObjectMode`

## Methods

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:173

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._construct`

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:636

#### Parameters

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._destroy`

***

### \_final()

> **\_final**(`callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:830

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._final`

***

### \_read()

> **\_read**(`size`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:174

#### Parameters

##### size

`number`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._read`

***

### \_write()

> **\_write**(`chunk`, `encoding`, `callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:820

#### Parameters

##### chunk

`any`

##### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._write`

***

### \_writev()?

> `optional` **\_writev**(`chunks`, `callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:821

#### Parameters

##### chunks

`object`[]

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._writev`

***

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: node\_modules/@types/node/stream.d.ts:659

Calls `readable.destroy()` with an `AbortError` and returns
a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Since

v20.4.0

#### Inherited from

`tty.ReadStream.[asyncDispose]`

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`AsyncIterator`](AsyncIterator.md)\<`any`\>

Defined in: node\_modules/@types/node/stream.d.ts:653

#### Returns

[`AsyncIterator`](AsyncIterator.md)\<`any`\>

`AsyncIterator` to fully consume the stream.

#### Since

v10.0.0

#### Inherited from

`tty.ReadStream.[asyncIterator]`

***

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

`tty.ReadStream.[captureRejectionSymbol]`

***

### addListener()

#### Call Signature

> **addListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:406

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:407

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

***

### address()

> **address**(): \{ \} \| `AddressInfo`

Defined in: node\_modules/@types/node/net.d.ts:257

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

#### Returns

\{ \} \| `AddressInfo`

#### Since

v0.1.90

#### Inherited from

`tty.ReadStream.address`

***

### compose()

> **compose**(`stream`, `options?`): `Duplex`

Defined in: node\_modules/@types/node/stream.d.ts:485

```js
import { Readable } from 'node:stream';

async function* splitToWords(source) {
  for await (const chunk of source) {
    const words = String(chunk).split(' ');

    for (const word of words) {
      yield word;
    }
  }
}

const wordsStream = Readable.from(['text passed through', 'composed stream']).compose(splitToWords);
const words = await wordsStream.toArray();

console.log(words); // prints ['text', 'passed', 'through', 'composed', 'stream']
```

`readable.compose(s)` is equivalent to `stream.compose(readable, s)`.

This method also allows for an `AbortSignal` to be provided, which will destroy
the composed stream when aborted.

See [`stream.compose(...streams)`](https://nodejs.org/docs/latest-v25.x/api/stream.html#streamcomposestreams) for more information.

#### Parameters

##### stream

[`WritableStream`](WritableStream.md) \| `WritableStream`\<`any`\> \| `TransformStream`\<`any`, `any`\> \| ((`source`) => `void`)

##### options?

`Abortable`

#### Returns

`Duplex`

a stream composed with the stream `stream`.

#### Since

v19.1.0, v18.13.0

#### Inherited from

`tty.ReadStream.compose`

***

### connect()

#### Call Signature

> **connect**(`options`, `connectionListener?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:134

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

##### Parameters

###### options

`SocketConnectOpts`

###### connectionListener?

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.connect`

#### Call Signature

> **connect**(`port`, `host`, `connectionListener?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:135

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

##### Parameters

###### port

`number`

###### host

`string`

###### connectionListener?

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.connect`

#### Call Signature

> **connect**(`port`, `connectionListener?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:136

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

##### Parameters

###### port

`number`

###### connectionListener?

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.connect`

#### Call Signature

> **connect**(`path`, `connectionListener?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:137

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

##### Parameters

###### path

`string`

###### connectionListener?

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.connect`

***

### cork()

> **cork**(): `void`

Defined in: node\_modules/@types/node/stream.d.ts:957

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](#uncork) or [end](#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()` buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing `writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

#### Since

v0.11.2

#### Inherited from

`tty.ReadStream.cork`

***

### destroy()

> **destroy**(`error?`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:648

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

##### error?

`Error`

Error which will be passed as payload in `'error'` event

#### Returns

`this`

#### Since

v8.0.0

#### Inherited from

`tty.ReadStream.destroy`

***

### destroySoon()

> **destroySoon**(): `void`

Defined in: node\_modules/@types/node/net.d.ts:92

Destroys the socket after all data is written. If the `finish` event was already emitted the socket is destroyed immediately.
If the socket is still writable it implicitly calls `socket.end()`.

#### Returns

`void`

#### Since

v0.3.4

#### Inherited from

`tty.ReadStream.destroySoon`

***

### drop()

> **drop**(`limit`, `options?`): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:608

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

##### limit

`number`

the number of chunks to drop from the readable.

##### options?

`Abortable`

#### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.drop`

***

### emit()

#### Call Signature

> **emit**\<`E`\>(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:408

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### args

...`SocketEventMap`\[`E`\]

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:409

##### Parameters

###### eventName

`string` \| `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

***

### end()

#### Call Signature

> **end**(`callback?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:387

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

##### Parameters

###### callback?

() => `void`

Optional callback for when the socket is finished.

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.end`

#### Call Signature

> **end**(`buffer`, `callback?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:395

Half-closes the socket, with one final chunk of data.

##### Parameters

###### buffer

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

###### callback?

() => `void`

Optional callback for when the socket is finished.

##### Returns

`this`

The socket itself.

##### See

[Socket.end](Socket.md#end) for full details.

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.end`

#### Call Signature

> **end**(`str`, `encoding?`, `callback?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:404

Half-closes the socket, with one final chunk of data.

##### Parameters

###### str

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

###### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

Only used when data is `string`.

###### callback?

() => `void`

Optional callback for when the socket is finished.

##### Returns

`this`

The socket itself.

##### See

[Socket.end](Socket.md#end) for full details.

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.end`

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

`tty.ReadStream.eventNames`

***

### every()

> **every**(`fn`, `options?`): `Promise`\<`boolean`\>

Defined in: node\_modules/@types/node/stream.d.ts:584

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`Pick`\<`ReadableOperatorOptions`, `"concurrency"` \| `"signal"`\>

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.every`

***

### filter()

> **filter**(`fn`, `options?`): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:512

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to filter chunks from the stream. Async or not.

##### options?

`ReadableOperatorOptions`

#### Returns

`Readable`

a stream filtered with the predicate *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`tty.ReadStream.filter`

***

### find()

#### Call Signature

> **find**\<`T`\>(`fn`, `options?`): `Promise`\<`T` \| `undefined`\>

Defined in: node\_modules/@types/node/stream.d.ts:567

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type Parameters

###### T

`T`

##### Parameters

###### fn

(`data`, `options?`) => `data is T`

a function to call on each chunk of the stream. Async or not.

###### options?

`Pick`\<`ReadableOperatorOptions`, `"concurrency"` \| `"signal"`\>

##### Returns

`Promise`\<`T` \| `undefined`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`tty.ReadStream.find`

#### Call Signature

> **find**(`fn`, `options?`): `Promise`\<`any`\>

Defined in: node\_modules/@types/node/stream.d.ts:571

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Parameters

###### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

###### options?

`Pick`\<`ReadableOperatorOptions`, `"concurrency"` \| `"signal"`\>

##### Returns

`Promise`\<`any`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`tty.ReadStream.find`

***

### flatMap()

> **flatMap**(`fn`, `options?`): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:598

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

##### fn

(`data`, `options?`) => `any`

a function to map over every chunk in the stream. May be async. May be a stream or generator.

##### options?

`Pick`\<`ReadableOperatorOptions`, `"concurrency"` \| `"signal"`\>

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.flatMap`

***

### forEach()

> **forEach**(`fn`, `options?`): `Promise`\<`void`\>

Defined in: node\_modules/@types/node/stream.d.ts:531

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

##### fn

(`data`, `options?`) => `void` \| `Promise`\<`void`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`Pick`\<`ReadableOperatorOptions`, `"concurrency"` \| `"signal"`\>

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.forEach`

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

`tty.ReadStream.getMaxListeners`

***

### getTypeOfService()

> **getTypeOfService**(): `number`

Defined in: node\_modules/@types/node/net.d.ts:235

Returns the current Type of Service (TOS) field for IPv4 packets or Traffic
Class for IPv6 packets for this socket.

`setTypeOfService()` may be called before the socket is connected; the value
will be cached and applied when the socket establishes a connection.
`getTypeOfService()` will return the currently set value even before connection.

On some platforms (e.g., Linux), certain TOS/ECN bits may be masked or ignored,
and behavior can differ between IPv4 and IPv6 or dual-stack sockets. Callers
should verify platform-specific semantics.

#### Returns

`number`

The current TOS value.

#### Since

v25.6.0

#### Inherited from

`tty.ReadStream.getTypeOfService`

***

### isPaused()

> **isPaused**(): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:335

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Since

v0.11.14

#### Inherited from

`tty.ReadStream.isPaused`

***

### iterator()

> **iterator**(`options?`): [`AsyncIterator`](AsyncIterator.md)\<`any`\>

Defined in: node\_modules/@types/node/stream.d.ts:495

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

##### options?

`ReadableIteratorOptions`

#### Returns

[`AsyncIterator`](AsyncIterator.md)\<`any`\>

#### Since

v16.3.0

#### Inherited from

`tty.ReadStream.iterator`

***

### listenerCount()

#### Call Signature

> **listenerCount**\<`E`\>(`eventName`, `listener?`): `number`

Defined in: node\_modules/@types/node/net.d.ts:410

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener?

(...`args`) => `void`

##### Returns

`number`

##### Inherited from

`tty.ReadStream.listenerCount`

#### Call Signature

> **listenerCount**(`eventName`, `listener?`): `number`

Defined in: node\_modules/@types/node/net.d.ts:414

##### Parameters

###### eventName

`string` \| `symbol`

###### listener?

(...`args`) => `void`

##### Returns

`number`

##### Inherited from

`tty.ReadStream.listenerCount`

***

### listeners()

#### Call Signature

> **listeners**\<`E`\>(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/net.d.ts:415

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

##### Returns

((...`args`) => `void`)[]

##### Inherited from

`tty.ReadStream.listeners`

#### Call Signature

> **listeners**(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/net.d.ts:416

##### Parameters

###### eventName

`string` \| `symbol`

##### Returns

((...`args`) => `void`)[]

##### Inherited from

`tty.ReadStream.listeners`

***

### map()

> **map**(`fn`, `options?`): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:503

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

##### fn

(`data`, `options?`) => `any`

a function to map over every chunk in the stream. Async or not.

##### options?

`ReadableOperatorOptions`

#### Returns

`Readable`

a stream mapped with the function *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`tty.ReadStream.map`

***

### off()

#### Call Signature

> **off**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:417

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.off`

#### Call Signature

> **off**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:418

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.off`

***

### on()

#### Call Signature

> **on**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:419

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:420

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

***

### once()

#### Call Signature

> **once**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:421

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:422

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

***

### pause()

> **pause**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:149

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

#### Returns

`this`

The socket itself.

#### Inherited from

`tty.ReadStream.pause`

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options?`): `T`

Defined in: node\_modules/@types/node/stream.d.ts:10

#### Type Parameters

##### T

`T` *extends* [`WritableStream`](WritableStream.md)

#### Parameters

##### destination

`T`

##### options?

`PipeOptions`

#### Returns

`T`

#### Since

v0.9.4

#### Inherited from

`tty.ReadStream.pipe`

***

### prependListener()

#### Call Signature

> **prependListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:423

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:427

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

***

### prependOnceListener()

#### Call Signature

> **prependOnceListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:428

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:432

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

***

### push()

> **push**(`chunk`, `encoding?`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:455

#### Parameters

##### chunk

`any`

##### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Returns

`boolean`

#### Inherited from

`tty.ReadStream.push`

***

### rawListeners()

#### Call Signature

> **rawListeners**\<`E`\>(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/net.d.ts:433

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

##### Returns

((...`args`) => `void`)[]

##### Inherited from

`tty.ReadStream.rawListeners`

#### Call Signature

> **rawListeners**(`eventName`): ((...`args`) => `void`)[]

Defined in: node\_modules/@types/node/net.d.ts:434

##### Parameters

###### eventName

`string` \| `symbol`

##### Returns

((...`args`) => `void`)[]

##### Inherited from

`tty.ReadStream.rawListeners`

***

### read()

> **read**(`size?`): `any`

Defined in: node\_modules/@types/node/stream.d.ts:252

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

##### size?

`number`

Optional argument to specify how much data to read.

#### Returns

`any`

#### Since

v0.9.4

#### Inherited from

`tty.ReadStream.read`

***

### reduce()

#### Call Signature

> **reduce**\<`T`\>(`fn`): `Promise`\<`T`\>

Defined in: node\_modules/@types/node/stream.d.ts:630

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

###### T

`T`

##### Parameters

###### fn

(`previous`, `data`, `options?`) => `T`

a reducer function to call over every chunk in the stream. Async or not.

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`tty.ReadStream.reduce`

#### Call Signature

> **reduce**\<`T`\>(`fn`, `initial`, `options?`): `Promise`\<`T`\>

Defined in: node\_modules/@types/node/stream.d.ts:631

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

###### T

`T`

##### Parameters

###### fn

(`previous`, `data`, `options?`) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial

`T`

the initial value to use in the reduction.

###### options?

`Abortable`

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`tty.ReadStream.reduce`

***

### ref()

> **ref**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:271

Opposite of `unref()`, calling `ref()` on a previously `unref`ed socket will _not_ let the program exit if it's the only socket left (the default behavior).
If the socket is `ref`ed calling `ref` again will have no effect.

#### Returns

`this`

The socket itself.

#### Since

v0.9.1

#### Inherited from

`tty.ReadStream.ref`

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`E`\>(`eventName?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:436

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName?

`E`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:437

##### Parameters

###### eventName?

`string` \| `symbol`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeAllListeners`

***

### removeListener()

#### Call Signature

> **removeListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:438

##### Type Parameters

###### E

`E` *extends* keyof `SocketEventMap`

##### Parameters

###### eventName

`E`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:442

##### Parameters

###### eventName

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

***

### resetAndDestroy()

> **resetAndDestroy**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:157

Close the TCP connection by sending an RST packet and destroy the stream.
If this TCP socket is in connecting status, it will send an RST packet and destroy this TCP socket once it is connected.
Otherwise, it will call `socket.destroy` with an `ERR_SOCKET_CLOSED` Error.
If this is not a TCP socket (for example, a pipe), calling this method will immediately throw an `ERR_INVALID_HANDLE_TYPE` Error.

#### Returns

`this`

#### Since

v18.3.0, v16.17.0

#### Inherited from

`tty.ReadStream.resetAndDestroy`

***

### resume()

> **resume**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:162

Resumes reading after a call to `socket.pause()`.

#### Returns

`this`

The socket itself.

#### Inherited from

`tty.ReadStream.resume`

***

### setDefaultEncoding()

> **setDefaultEncoding**(`encoding`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:903

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

##### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

The new default encoding

#### Returns

`this`

#### Since

v0.11.15

#### Inherited from

`tty.ReadStream.setDefaultEncoding`

***

### setEncoding()

> **setEncoding**(`encoding?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:143

Set the encoding for the socket as a `Readable Stream`. See `readable.setEncoding()` for more information.

#### Parameters

##### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

#### Returns

`this`

The socket itself.

#### Since

v0.1.90

#### Inherited from

`tty.ReadStream.setEncoding`

***

### setKeepAlive()

> **setKeepAlive**(`enable?`, `initialDelay?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:220

Enable/disable keep-alive functionality, and optionally set the initial
delay before the first keepalive probe is sent on an idle socket.

Set `initialDelay` (in milliseconds) to set the delay between the last
data packet received and the first keepalive probe. Setting `0` for`initialDelay` will leave the value unchanged from the default
(or previous) setting.

Enabling the keep-alive functionality will set the following socket options:

* `SO_KEEPALIVE=1`
* `TCP_KEEPIDLE=initialDelay`
* `TCP_KEEPCNT=10`
* `TCP_KEEPINTVL=1`

#### Parameters

##### enable?

`boolean`

##### initialDelay?

`number`

#### Returns

`this`

The socket itself.

#### Since

v0.1.92

#### Inherited from

`tty.ReadStream.setKeepAlive`

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

`tty.ReadStream.setMaxListeners`

***

### setNoDelay()

> **setNoDelay**(`noDelay?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:200

Enable/disable the use of Nagle's algorithm.

When a TCP connection is created, it will have Nagle's algorithm enabled.

Nagle's algorithm delays data before it is sent via the network. It attempts
to optimize throughput at the expense of latency.

Passing `true` for `noDelay` or not passing an argument will disable Nagle's
algorithm for the socket. Passing `false` for `noDelay` will enable Nagle's
algorithm.

#### Parameters

##### noDelay?

`boolean`

#### Returns

`this`

The socket itself.

#### Since

v0.1.90

#### Inherited from

`tty.ReadStream.setNoDelay`

***

### setRawMode()

> **setRawMode**(`mode`): `this`

Defined in: node\_modules/@types/node/tty.d.ts:40

Allows configuration of `tty.ReadStream` so that it operates as a raw device.

When in raw mode, input is always available character-by-character, not
including modifiers. Additionally, all special processing of characters by the
terminal is disabled, including echoing input
characters. Ctrl+C will no longer cause a `SIGINT` when
in this mode.

#### Parameters

##### mode

`boolean`

If `true`, configures the `tty.ReadStream` to operate as a raw device. If `false`, configures the `tty.ReadStream` to operate in its default mode. The `readStream.isRaw`
property will be set to the resulting mode.

#### Returns

`this`

The read stream instance.

#### Since

v0.7.7

#### Inherited from

`tty.ReadStream.setRawMode`

***

### setTimeout()

> **setTimeout**(`timeout`, `callback?`): `this`

Defined in: node\_modules/@types/node/net.d.ts:184

Sets the socket to timeout after `timeout` milliseconds of inactivity on
the socket. By default `net.Socket` do not have a timeout.

When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to
end the connection.

```js
socket.setTimeout(3000);
socket.on('timeout', () => {
  console.log('socket timeout');
  socket.end();
});
```

If `timeout` is 0, then the existing idle timeout is disabled.

The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

#### Parameters

##### timeout

`number`

##### callback?

() => `void`

#### Returns

`this`

The socket itself.

#### Since

v0.1.90

#### Inherited from

`tty.ReadStream.setTimeout`

***

### setTypeOfService()

> **setTypeOfService**(`tos`): `this`

Defined in: node\_modules/@types/node/net.d.ts:251

Sets the Type of Service (TOS) field for IPv4 packets or Traffic Class for IPv6
Packets sent from this socket. This can be used to prioritize network traffic.

`setTypeOfService()` may be called before the socket is connected; the value
will be cached and applied when the socket establishes a connection.
`getTypeOfService()` will return the currently set value even before connection.

On some platforms (e.g., Linux), certain TOS/ECN bits may be masked or ignored,
and behavior can differ between IPv4 and IPv6 or dual-stack sockets. Callers
should verify platform-specific semantics.

#### Parameters

##### tos

`number`

The TOS value to set (0-255).

#### Returns

`this`

The socket itself.

#### Since

v25.6.0

#### Inherited from

`tty.ReadStream.setTypeOfService`

***

### some()

> **some**(`fn`, `options?`): `Promise`\<`boolean`\>

Defined in: node\_modules/@types/node/stream.d.ts:553

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`Pick`\<`ReadableOperatorOptions`, `"concurrency"` \| `"signal"`\>

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.some`

***

### take()

> **take**(`limit`, `options?`): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:615

This method returns a new stream with the first *limit* chunks.

#### Parameters

##### limit

`number`

the number of chunks to take from the readable.

##### options?

`Abortable`

#### Returns

`Readable`

a stream with *limit* chunks taken.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.take`

***

### toArray()

> **toArray**(`options?`): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/stream.d.ts:543

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

##### options?

`Abortable`

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.toArray`

***

### uncork()

> **uncork**(): `void`

Defined in: node\_modules/@types/node/stream.d.ts:991

The `writable.uncork()` method flushes all data buffered since [cork](#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using `process.nextTick()`. Doing so allows batching of all `writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

#### Since

v0.11.2

#### Inherited from

`tty.ReadStream.uncork`

***

### unpipe()

> **unpipe**(`destination?`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:362

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

##### destination?

[`WritableStream`](WritableStream.md)

Optional specific stream to unpipe

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`tty.ReadStream.unpipe`

***

### unref()

> **unref**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:264

Calling `unref()` on a socket will allow the program to exit if this is the only
active socket in the event system. If the socket is already `unref`ed calling`unref()` again will have no effect.

#### Returns

`this`

The socket itself.

#### Since

v0.9.1

#### Inherited from

`tty.ReadStream.unref`

***

### unshift()

> **unshift**(`chunk`, `encoding?`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:428

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

##### chunk

`any`

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a {string}, {Buffer}, {TypedArray}, {DataView} or `null`. For object mode streams, `chunk` may be any JavaScript value.

##### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

#### Returns

`void`

#### Since

v0.9.11

#### Inherited from

`tty.ReadStream.unshift`

***

### wrap()

> **wrap**(`stream`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:454

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

##### stream

[`ReadableStream`](ReadableStream.md)

An "old style" readable stream

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`tty.ReadStream.wrap`

***

### write()

#### Call Signature

> **write**(`buffer`, `cb?`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:107

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

##### Parameters

###### buffer

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

###### cb?

(`err?`) => `void`

##### Returns

`boolean`

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.write`

#### Call Signature

> **write**(`str`, `encoding?`, `cb?`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:114

Sends data on the socket, with an explicit encoding for string data.

##### Parameters

###### str

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

###### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

Only used when data is `string`.

###### cb?

(`err?`) => `void`

##### Returns

`boolean`

##### See

[Socket.write](Socket.md#write) for full details.

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.write`
