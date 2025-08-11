[**@mmutils/assert**](../../../../../README.md)

***

[@mmutils/assert](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / ReadStream

# Interface: ReadStream

Defined in: node\_modules/@types/node/process.d.ts:125

## Extends

- `ReadStream`

## Properties

### allowHalfOpen

> **allowHalfOpen**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1076

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

Defined in: node\_modules/@types/node/net.d.ts:248

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

Defined in: node\_modules/@types/node/net.d.ts:266

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

Defined in: node\_modules/@types/node/net.d.ts:271

The amount of received bytes.

#### Since

v0.5.3

#### Inherited from

`tty.ReadStream.bytesRead`

***

### bytesWritten

> `readonly` **bytesWritten**: `number`

Defined in: node\_modules/@types/node/net.d.ts:276

The amount of bytes sent.

#### Since

v0.5.3

#### Inherited from

`tty.ReadStream.bytesWritten`

***

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1065

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Inherited from

`tty.ReadStream.closed`

***

### connecting

> `readonly` **connecting**: `boolean`

Defined in: node\_modules/@types/node/net.d.ts:284

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

Defined in: node\_modules/@types/node/net.d.ts:294

See `writable.destroyed` for further details.

#### Inherited from

`tty.ReadStream.destroyed`

***

### errored

> `readonly` **errored**: `null` \| `Error`

Defined in: node\_modules/@types/node/stream.d.ts:1066

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

`tty.ReadStream.errored`

***

### isRaw

> **isRaw**: `boolean`

Defined in: node\_modules/@types/node/tty.d.ts:51

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

Defined in: node\_modules/@types/node/tty.d.ts:70

A `boolean` that is always `true` for `tty.ReadStream` instances.

#### Since

v0.5.8

#### Inherited from

`tty.ReadStream.isTTY`

***

### localAddress?

> `readonly` `optional` **localAddress**: `string`

Defined in: node\_modules/@types/node/net.d.ts:301

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

#### Since

v0.9.6

#### Inherited from

`tty.ReadStream.localAddress`

***

### localFamily?

> `readonly` `optional` **localFamily**: `string`

Defined in: node\_modules/@types/node/net.d.ts:311

The string representation of the local IP family. `'IPv4'` or `'IPv6'`.

#### Since

v18.8.0, v16.18.0

#### Inherited from

`tty.ReadStream.localFamily`

***

### localPort?

> `readonly` `optional` **localPort**: `number`

Defined in: node\_modules/@types/node/net.d.ts:306

The numeric representation of the local port. For example, `80` or `21`.

#### Since

v0.9.6

#### Inherited from

`tty.ReadStream.localPort`

***

### pending

> `readonly` **pending**: `boolean`

Defined in: node\_modules/@types/node/net.d.ts:290

This is `true` if the socket is not connected yet, either because `.connect()`has not yet been called or because it is still in the process of connecting
(see `socket.connecting`).

#### Since

v11.2.0, v10.16.0

#### Inherited from

`tty.ReadStream.pending`

***

### readable

> **readable**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:77

Is `true` if it is safe to call [read](ReadStream.md#read), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Since

v11.4.0

#### Inherited from

`tty.ReadStream.readable`

***

### readableAborted

> `readonly` **readableAborted**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:71

**`Experimental`**

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Since

v16.8.0

#### Inherited from

`tty.ReadStream.readableAborted`

***

### readableDidRead

> `readonly` **readableDidRead**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:83

**`Experimental`**

Returns whether `'data'` has been emitted.

#### Since

v16.7.0, v14.18.0

#### Inherited from

`tty.ReadStream.readableDidRead`

***

### readableEncoding

> `readonly` **readableEncoding**: `null` \| [`BufferEncoding`](../type-aliases/BufferEncoding.md)

Defined in: node\_modules/@types/node/stream.d.ts:88

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](ReadStream.md#setencoding) method.

#### Since

v12.7.0

#### Inherited from

`tty.ReadStream.readableEncoding`

***

### readableEnded

> `readonly` **readableEnded**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:93

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted.

#### Since

v12.9.0

#### Inherited from

`tty.ReadStream.readableEnded`

***

### readableFlowing

> `readonly` **readableFlowing**: `null` \| `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:99

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section.

#### Since

v9.4.0

#### Inherited from

`tty.ReadStream.readableFlowing`

***

### readableHighWaterMark

> `readonly` **readableHighWaterMark**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:104

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Since

v9.3.0

#### Inherited from

`tty.ReadStream.readableHighWaterMark`

***

### readableLength

> `readonly` **readableLength**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:111

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

Defined in: node\_modules/@types/node/stream.d.ts:116

Getter for the property `objectMode` of a given `Readable` stream.

#### Since

v12.3.0

#### Inherited from

`tty.ReadStream.readableObjectMode`

***

### readyState

> `readonly` **readyState**: `SocketReadyState`

Defined in: node\_modules/@types/node/net.d.ts:321

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

### remoteAddress?

> `readonly` `optional` **remoteAddress**: `string`

Defined in: node\_modules/@types/node/net.d.ts:327

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Since

v0.5.10

#### Inherited from

`tty.ReadStream.remoteAddress`

***

### remoteFamily?

> `readonly` `optional` **remoteFamily**: `string`

Defined in: node\_modules/@types/node/net.d.ts:333

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Since

v0.11.14

#### Inherited from

`tty.ReadStream.remoteFamily`

***

### remotePort?

> `readonly` `optional` **remotePort**: `number`

Defined in: node\_modules/@types/node/net.d.ts:339

The numeric representation of the remote port. For example, `80` or `21`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Since

v0.5.10

#### Inherited from

`tty.ReadStream.remotePort`

***

### timeout?

> `readonly` `optional` **timeout**: `number`

Defined in: node\_modules/@types/node/net.d.ts:345

The socket timeout in milliseconds as set by `socket.setTimeout()`.
It is `undefined` if a timeout has not been set.

#### Since

v10.7.0

#### Inherited from

`tty.ReadStream.timeout`

***

### writable

> `readonly` **writable**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1057

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

#### Since

v11.4.0

#### Inherited from

`tty.ReadStream.writable`

***

### writableCorked

> `readonly` **writableCorked**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:1063

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Since

v13.2.0, v12.16.0

#### Inherited from

`tty.ReadStream.writableCorked`

***

### writableEnded

> `readonly` **writableEnded**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1058

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Since

v12.9.0

#### Inherited from

`tty.ReadStream.writableEnded`

***

### writableFinished

> `readonly` **writableFinished**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1059

Is set to `true` immediately before the `'finish'` event is emitted.

#### Since

v12.6.0

#### Inherited from

`tty.ReadStream.writableFinished`

***

### writableHighWaterMark

> `readonly` **writableHighWaterMark**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:1060

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Since

v9.3.0

#### Inherited from

`tty.ReadStream.writableHighWaterMark`

***

### writableLength

> `readonly` **writableLength**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:1061

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

Defined in: node\_modules/@types/node/stream.d.ts:1064

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

#### Since

v15.2.0, v14.17.0

#### Inherited from

`tty.ReadStream.writableNeedDrain`

***

### writableObjectMode

> `readonly` **writableObjectMode**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:1062

Getter for the property `objectMode` of a given `Writable` stream.

#### Since

v12.3.0

#### Inherited from

`tty.ReadStream.writableObjectMode`

## Methods

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:133

#### Parameters

##### callback

(`error`?) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._construct`

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:1119

#### Parameters

##### error

`null` | `Error`

##### callback

(`error`?) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._destroy`

***

### \_final()

> **\_final**(`callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:1120

#### Parameters

##### callback

(`error`?) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._final`

***

### \_read()

> **\_read**(`size`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:134

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

Defined in: node\_modules/@types/node/stream.d.ts:1111

#### Parameters

##### chunk

`any`

##### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

##### callback

(`error`?) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._write`

***

### \_writev()?

> `optional` **\_writev**(`chunks`, `callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:1112

#### Parameters

##### chunks

`object`[]

##### callback

(`error`?) => `void`

#### Returns

`void`

#### Inherited from

`tty.ReadStream._writev`

***

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: node\_modules/@types/node/stream.d.ts:659

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Since

v20.4.0

#### Inherited from

`tty.ReadStream.[asyncDispose]`

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`AsyncIterator`](AsyncIterator.md)

Defined in: node\_modules/@types/node/stream.d.ts:654

#### Returns

[`AsyncIterator`](AsyncIterator.md)

#### Inherited from

`tty.ReadStream.[asyncIterator]`

***

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/@types/node/events.d.ts:136

#### Type Parameters

• **K**

#### Parameters

##### error

`Error`

##### event

`string` | `symbol`

##### args

...`AnyRest`

#### Returns

`void`

#### Inherited from

`tty.ReadStream.[captureRejectionSymbol]`

***

### addListener()

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:374

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:375

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"close"`

###### listener

(`hadError`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:376

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"connect"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:377

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"connectionAttempt"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:378

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"connectionAttemptFailed"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:382

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"connectionAttemptTimeout"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:386

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"data"`

###### listener

(`data`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:387

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:388

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:389

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:390

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"lookup"`

###### listener

(`err`, `address`, `family`, `host`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:394

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"ready"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:395

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

##### Parameters

###### event

`"timeout"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.addListener`

***

### address()

> **address**(): \{\} \| `AddressInfo`

Defined in: node\_modules/@types/node/net.d.ts:225

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

#### Returns

\{\} \| `AddressInfo`

#### Since

v0.1.90

#### Inherited from

`tty.ReadStream.address`

***

### asIndexedPairs()

> **asIndexedPairs**(`options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:549

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream of indexed pairs.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.asIndexedPairs`

***

### compose()

> **compose**\<`T`\>(`stream`, `options`?): `T`

Defined in: node\_modules/@types/node/stream.d.ts:36

#### Type Parameters

• **T** *extends* [`ReadableStream`](ReadableStream.md)

#### Parameters

##### stream

`T` | `ComposeFnParam` | `Iterable`\<`T`\> | `AsyncIterable`\<`T`\>

##### options?

###### signal

`AbortSignal`

#### Returns

`T`

#### Inherited from

`tty.ReadStream.compose`

***

### connect()

#### Call Signature

> **connect**(`options`, `connectionListener`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:133

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

> **connect**(`port`, `host`, `connectionListener`?): `this`

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

> **connect**(`port`, `connectionListener`?): `this`

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

###### connectionListener?

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.connect`

#### Call Signature

> **connect**(`path`, `connectionListener`?): `this`

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

Defined in: node\_modules/@types/node/stream.d.ts:1127

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](ReadStream.md#uncork) or [end](ReadStream.md#end) methods are called.

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

> **destroy**(`error`?): `this`

Defined in: node\_modules/@types/node/stream.d.ts:586

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

Defined in: node\_modules/@types/node/net.d.ts:96

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

> **drop**(`limit`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:535

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

##### limit

`number`

the number of chunks to drop from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

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

> **emit**(`event`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:396

##### Parameters

###### event

`string` | `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `hadError`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:397

##### Parameters

###### event

`"close"`

###### hadError

`boolean`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:398

##### Parameters

###### event

`"connect"`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `ip`, `port`, `family`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:399

##### Parameters

###### event

`"connectionAttempt"`

###### ip

`string`

###### port

`number`

###### family

`number`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `ip`, `port`, `family`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:400

##### Parameters

###### event

`"connectionAttemptFailed"`

###### ip

`string`

###### port

`number`

###### family

`number`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `ip`, `port`, `family`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:401

##### Parameters

###### event

`"connectionAttemptTimeout"`

###### ip

`string`

###### port

`number`

###### family

`number`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `data`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:402

##### Parameters

###### event

`"data"`

###### data

`Buffer`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:403

##### Parameters

###### event

`"drain"`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:404

##### Parameters

###### event

`"end"`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `err`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:405

##### Parameters

###### event

`"error"`

###### err

`Error`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`, `err`, `address`, `family`, `host`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:406

##### Parameters

###### event

`"lookup"`

###### err

`Error`

###### address

`string`

###### family

`string` | `number`

###### host

`string`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:407

##### Parameters

###### event

`"ready"`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:408

##### Parameters

###### event

`"timeout"`

##### Returns

`boolean`

##### Inherited from

`tty.ReadStream.emit`

***

### end()

#### Call Signature

> **end**(`callback`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:356

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

> **end**(`buffer`, `callback`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:357

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

##### Parameters

###### buffer

`string` | `Uint8Array`

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

> **end**(`str`, `encoding`?, `callback`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:358

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

##### Parameters

###### str

`string` | `Uint8Array`

###### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

Only used when data is `string`.

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

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

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

> **every**(`fn`, `options`?): `Promise`\<`boolean`\>

Defined in: node\_modules/@types/node/stream.d.ts:514

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

##### fn

(`data`, `options`?) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.every`

***

### filter()

> **filter**(`fn`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:442

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

##### fn

(`data`, `options`?) => `boolean` \| `Promise`\<`boolean`\>

a function to filter chunks from the stream. Async or not.

##### options?

`ArrayOptions`

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

> **find**\<`T`\>(`fn`, `options`?): `Promise`\<`undefined` \| `T`\>

Defined in: node\_modules/@types/node/stream.d.ts:497

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type Parameters

• **T**

##### Parameters

###### fn

(`data`, `options`?) => `data is T`

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`tty.ReadStream.find`

#### Call Signature

> **find**(`fn`, `options`?): `Promise`\<`any`\>

Defined in: node\_modules/@types/node/stream.d.ts:501

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Parameters

###### fn

(`data`, `options`?) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

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

> **flatMap**(`fn`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:528

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

##### fn

(`data`, `options`?) => `any`

a function to map over every chunk in the stream. May be async. May be a stream or generator.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.flatMap`

***

### forEach()

> **forEach**(`fn`, `options`?): `Promise`\<`void`\>

Defined in: node\_modules/@types/node/stream.d.ts:461

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

(`data`, `options`?) => `void` \| `Promise`\<`void`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

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

Defined in: node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`tty.ReadStream.getMaxListeners`

***

### isPaused()

> **isPaused**(): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:295

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

> **iterator**(`options`?): [`AsyncIterator`](AsyncIterator.md)

Defined in: node\_modules/@types/node/stream.d.ts:425

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

##### options?

###### destroyOnReturn

`boolean`

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

#### Returns

[`AsyncIterator`](AsyncIterator.md)

#### Since

v16.3.0

#### Inherited from

`tty.ReadStream.iterator`

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Defined in: node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

• **K**

#### Parameters

##### eventName

The name of the event being listened for

`string` | `symbol`

##### listener?

`Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

`tty.ReadStream.listenerCount`

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

• **K**

#### Parameters

##### eventName

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

`tty.ReadStream.listeners`

***

### map()

> **map**(`fn`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:433

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

##### fn

(`data`, `options`?) => `any`

a function to map over every chunk in the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream mapped with the function *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`tty.ReadStream.map`

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

#### Type Parameters

• **K**

#### Parameters

##### eventName

`string` | `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

`tty.ReadStream.off`

***

### on()

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:409

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:410

##### Parameters

###### event

`"close"`

###### listener

(`hadError`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:411

##### Parameters

###### event

`"connect"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:412

##### Parameters

###### event

`"connectionAttempt"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:413

##### Parameters

###### event

`"connectionAttemptFailed"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:414

##### Parameters

###### event

`"connectionAttemptTimeout"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:415

##### Parameters

###### event

`"data"`

###### listener

(`data`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:416

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:417

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:418

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:419

##### Parameters

###### event

`"lookup"`

###### listener

(`err`, `address`, `family`, `host`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:423

##### Parameters

###### event

`"ready"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:424

##### Parameters

###### event

`"timeout"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.on`

***

### once()

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:425

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:426

##### Parameters

###### event

`"close"`

###### listener

(`hadError`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:427

##### Parameters

###### event

`"connectionAttempt"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:428

##### Parameters

###### event

`"connectionAttemptFailed"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:429

##### Parameters

###### event

`"connectionAttemptTimeout"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:430

##### Parameters

###### event

`"connect"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:431

##### Parameters

###### event

`"data"`

###### listener

(`data`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:432

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:433

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:434

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:435

##### Parameters

###### event

`"lookup"`

###### listener

(`err`, `address`, `family`, `host`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:439

##### Parameters

###### event

`"ready"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:440

##### Parameters

###### event

`"timeout"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.once`

***

### pause()

> **pause**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:148

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

#### Returns

`this`

The socket itself.

#### Inherited from

`tty.ReadStream.pause`

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options`?): `T`

Defined in: node\_modules/@types/node/stream.d.ts:30

#### Type Parameters

• **T** *extends* [`WritableStream`](WritableStream.md)

#### Parameters

##### destination

`T`

##### options?

###### end

`boolean`

#### Returns

`T`

#### Inherited from

`tty.ReadStream.pipe`

***

### prependListener()

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:441

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:442

##### Parameters

###### event

`"close"`

###### listener

(`hadError`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:443

##### Parameters

###### event

`"connect"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:444

##### Parameters

###### event

`"connectionAttempt"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:445

##### Parameters

###### event

`"connectionAttemptFailed"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:449

##### Parameters

###### event

`"connectionAttemptTimeout"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:453

##### Parameters

###### event

`"data"`

###### listener

(`data`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:454

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:455

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:456

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:457

##### Parameters

###### event

`"lookup"`

###### listener

(`err`, `address`, `family`, `host`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:461

##### Parameters

###### event

`"ready"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:462

##### Parameters

###### event

`"timeout"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependListener`

***

### prependOnceListener()

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:463

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:464

##### Parameters

###### event

`"close"`

###### listener

(`hadError`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:465

##### Parameters

###### event

`"connect"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:466

##### Parameters

###### event

`"connectionAttempt"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:470

##### Parameters

###### event

`"connectionAttemptFailed"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:474

##### Parameters

###### event

`"connectionAttemptTimeout"`

###### listener

(`ip`, `port`, `family`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:478

##### Parameters

###### event

`"data"`

###### listener

(`data`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:479

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:480

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:481

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:482

##### Parameters

###### event

`"lookup"`

###### listener

(`err`, `address`, `family`, `host`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:486

##### Parameters

###### event

`"ready"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/net.d.ts:487

##### Parameters

###### event

`"timeout"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.prependOnceListener`

***

### push()

> **push**(`chunk`, `encoding`?): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:415

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

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:818

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

#### Type Parameters

• **K**

#### Parameters

##### eventName

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

`tty.ReadStream.rawListeners`

***

### read()

> **read**(`size`?): `any`

Defined in: node\_modules/@types/node/stream.d.ts:212

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

Calling [read](ReadStream.md#read) after the `'end'` event has
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

> **reduce**\<`T`\>(`fn`, `initial`?, `options`?): `Promise`\<`T`\>

Defined in: node\_modules/@types/node/stream.d.ts:564

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

• **T** = `any`

##### Parameters

###### fn

(`previous`, `data`, `options`?) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial?

`undefined`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`tty.ReadStream.reduce`

#### Call Signature

> **reduce**\<`T`\>(`fn`, `initial`, `options`?): `Promise`\<`T`\>

Defined in: node\_modules/@types/node/stream.d.ts:569

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

• **T** = `any`

##### Parameters

###### fn

(`previous`, `data`, `options`?) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial

`T`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

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

Defined in: node\_modules/@types/node/net.d.ts:239

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

> **removeAllListeners**(`eventName`?): `this`

Defined in: node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### eventName?

`string` | `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`tty.ReadStream.removeAllListeners`

***

### removeListener()

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1240

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1241

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1242

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1243

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1244

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1245

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1246

##### Parameters

###### event

`"pause"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1247

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1248

##### Parameters

###### event

`"readable"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1249

##### Parameters

###### event

`"resume"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1250

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1251

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`tty.ReadStream.removeListener`

***

### resetAndDestroy()

> **resetAndDestroy**(): `this`

Defined in: node\_modules/@types/node/net.d.ts:156

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

Defined in: node\_modules/@types/node/net.d.ts:161

Resumes reading after a call to `socket.pause()`.

#### Returns

`this`

The socket itself.

#### Inherited from

`tty.ReadStream.resume`

***

### setDefaultEncoding()

> **setDefaultEncoding**(`encoding`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:1123

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

> **setEncoding**(`encoding`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:142

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

> **setKeepAlive**(`enable`?, `initialDelay`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:219

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

Defined in: node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

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

> **setNoDelay**(`noDelay`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:199

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

Defined in: node\_modules/@types/node/tty.d.ts:65

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

> **setTimeout**(`timeout`, `callback`?): `this`

Defined in: node\_modules/@types/node/net.d.ts:183

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

### some()

> **some**(`fn`, `options`?): `Promise`\<`boolean`\>

Defined in: node\_modules/@types/node/stream.d.ts:483

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

##### fn

(`data`, `options`?) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.some`

***

### take()

> **take**(`limit`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:542

This method returns a new stream with the first *limit* chunks.

#### Parameters

##### limit

`number`

the number of chunks to take from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks taken.

#### Since

v17.5.0

#### Inherited from

`tty.ReadStream.take`

***

### toArray()

> **toArray**(`options`?): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/stream.d.ts:473

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

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

Defined in: node\_modules/@types/node/stream.d.ts:1128

The `writable.uncork()` method flushes all data buffered since [cork](ReadStream.md#cork) was called.

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

> **unpipe**(`destination`?): `this`

Defined in: node\_modules/@types/node/stream.d.ts:322

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](ReadStream.md#pipe) method.

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

Defined in: node\_modules/@types/node/net.d.ts:232

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

> **unshift**(`chunk`, `encoding`?): `void`

Defined in: node\_modules/@types/node/stream.d.ts:388

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

Unlike [push](ReadStream.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](ReadStream.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](ReadStream.md#push) will reset the reading state appropriately,
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

Defined in: node\_modules/@types/node/stream.d.ts:414

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](ReadStream.md#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
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

> **write**(`buffer`, `cb`?): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:112

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

`string` | `Uint8Array`

###### cb?

(`err`?) => `void`

##### Returns

`boolean`

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.write`

#### Call Signature

> **write**(`str`, `encoding`?, `cb`?): `boolean`

Defined in: node\_modules/@types/node/net.d.ts:113

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

##### Parameters

###### str

`string` | `Uint8Array`

###### encoding?

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

Only used when data is `string`.

###### cb?

(`err`?) => `void`

##### Returns

`boolean`

##### Since

v0.1.90

##### Inherited from

`tty.ReadStream.write`
