[**@mmutils/assert-primitive**](../../../../../README.md)

***

[@mmutils/assert-primitive](../../../../../modules.md) / [config/environment](../../../README.md) / [NodeJS](../README.md) / CallSite

# Interface: CallSite

Defined in: node\_modules/@types/node/globals.d.ts:292

## Methods

### getColumnNumber()

> **getColumnNumber**(): `null` \| `number`

Defined in: node\_modules/@types/node/globals.d.ts:337

Current column number [if this function was defined in a script]

#### Returns

`null` \| `number`

***

### getEnclosingColumnNumber()

> **getEnclosingColumnNumber**(): `number`

Defined in: node\_modules/@types/node/globals.d.ts:385

#### Returns

`number`

***

### getEnclosingLineNumber()

> **getEnclosingLineNumber**(): `number`

Defined in: node\_modules/@types/node/globals.d.ts:386

#### Returns

`number`

***

### getEvalOrigin()

> **getEvalOrigin**(): `undefined` \| `string`

Defined in: node\_modules/@types/node/globals.d.ts:343

A call site object representing the location where eval was called
[if this function was created using a call to eval]

#### Returns

`undefined` \| `string`

***

### getFileName()

> **getFileName**(): `undefined` \| `string`

Defined in: node\_modules/@types/node/globals.d.ts:327

Name of the script [if this function was defined in a script]

#### Returns

`undefined` \| `string`

***

### getFunction()

> **getFunction**(): `undefined` \| `Function`

Defined in: node\_modules/@types/node/globals.d.ts:309

Current function

#### Returns

`undefined` \| `Function`

***

### getFunctionName()

> **getFunctionName**(): `null` \| `string`

Defined in: node\_modules/@types/node/globals.d.ts:316

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

#### Returns

`null` \| `string`

***

### getLineNumber()

> **getLineNumber**(): `null` \| `number`

Defined in: node\_modules/@types/node/globals.d.ts:332

Current line number [if this function was defined in a script]

#### Returns

`null` \| `number`

***

### getMethodName()

> **getMethodName**(): `null` \| `string`

Defined in: node\_modules/@types/node/globals.d.ts:322

Name of the property [of "this" or one of its prototypes] that holds
the current function

#### Returns

`null` \| `string`

***

### getPosition()

> **getPosition**(): `number`

Defined in: node\_modules/@types/node/globals.d.ts:387

#### Returns

`number`

***

### getPromiseIndex()

> **getPromiseIndex**(): `null` \| `number`

Defined in: node\_modules/@types/node/globals.d.ts:380

returns the index of the promise element that was followed in
Promise.all() or Promise.any() for async stack traces, or null
if the CallSite is not an async

#### Returns

`null` \| `number`

***

### getScriptHash()

> **getScriptHash**(): `string`

Defined in: node\_modules/@types/node/globals.d.ts:383

#### Returns

`string`

***

### getScriptNameOrSourceURL()

> **getScriptNameOrSourceURL**(): `string`

Defined in: node\_modules/@types/node/globals.d.ts:382

#### Returns

`string`

***

### getThis()

> **getThis**(): `unknown`

Defined in: node\_modules/@types/node/globals.d.ts:296

Value of "this"

#### Returns

`unknown`

***

### getTypeName()

> **getTypeName**(): `null` \| `string`

Defined in: node\_modules/@types/node/globals.d.ts:304

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

#### Returns

`null` \| `string`

***

### isAsync()

> **isAsync**(): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:368

is this an async call (i.e. await, Promise.all(), or Promise.any())?

#### Returns

`boolean`

***

### isConstructor()

> **isConstructor**(): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:363

Is this a constructor call?

#### Returns

`boolean`

***

### isEval()

> **isEval**(): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:353

Does this call take place in code defined by a call to eval?

#### Returns

`boolean`

***

### isNative()

> **isNative**(): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:358

Is this call in native V8 code?

#### Returns

`boolean`

***

### isPromiseAll()

> **isPromiseAll**(): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:373

is this an async call to Promise.all()?

#### Returns

`boolean`

***

### isToplevel()

> **isToplevel**(): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:348

Is this a toplevel invocation, that is, is "this" the global object?

#### Returns

`boolean`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@types/node/globals.d.ts:389

#### Returns

`string`
