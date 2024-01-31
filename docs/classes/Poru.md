[poru](../README.md) / [Modules](../modules.md) / Poru

# Class: Poru

## Hierarchy

- `EventEmitter`

  ↳ **`Poru`**

## Table of contents

### Constructors

- [constructor](Poru.md#constructor)

### Properties

- [\_nodes](Poru.md#_nodes)
- [client](Poru.md#client)
- [isActivated](Poru.md#isactivated)
- [nodes](Poru.md#nodes)
- [options](Poru.md#options)
- [players](Poru.md#players)
- [send](Poru.md#send)
- [userId](Poru.md#userid)
- [version](Poru.md#version)
- [captureRejectionSymbol](Poru.md#capturerejectionsymbol)
- [captureRejections](Poru.md#capturerejections)
- [defaultMaxListeners](Poru.md#defaultmaxlisteners)
- [errorMonitor](Poru.md#errormonitor)

### Accessors

- [leastUsedNodes](Poru.md#leastusednodes)

### Methods

- [[captureRejectionSymbol]](Poru.md#[capturerejectionsymbol])
- [addListener](Poru.md#addlistener)
- [addNode](Poru.md#addnode)
- [createConnection](Poru.md#createconnection)
- [createPlayer](Poru.md#createplayer)
- [decodeTrack](Poru.md#decodetrack)
- [decodeTracks](Poru.md#decodetracks)
- [emit](Poru.md#emit)
- [eventNames](Poru.md#eventnames)
- [get](Poru.md#get)
- [getLavalinkInfo](Poru.md#getlavalinkinfo)
- [getLavalinkStatus](Poru.md#getlavalinkstatus)
- [getMaxListeners](Poru.md#getmaxlisteners)
- [getNode](Poru.md#getnode)
- [getNodeByRegion](Poru.md#getnodebyregion)
- [init](Poru.md#init)
- [listenerCount](Poru.md#listenercount)
- [listeners](Poru.md#listeners)
- [off](Poru.md#off)
- [on](Poru.md#on)
- [once](Poru.md#once)
- [packetUpdate](Poru.md#packetupdate)
- [prependListener](Poru.md#prependlistener)
- [prependOnceListener](Poru.md#prependoncelistener)
- [rawListeners](Poru.md#rawlisteners)
- [removeAllListeners](Poru.md#removealllisteners)
- [removeConnection](Poru.md#removeconnection)
- [removeListener](Poru.md#removelistener)
- [removeNode](Poru.md#removenode)
- [resolve](Poru.md#resolve)
- [setMaxListeners](Poru.md#setmaxlisteners)
- [addAbortListener](Poru.md#addabortlistener)
- [getEventListeners](Poru.md#geteventlisteners)
- [getMaxListeners](Poru.md#getmaxlisteners-1)
- [listenerCount](Poru.md#listenercount-1)
- [on](Poru.md#on-1)
- [once](Poru.md#once-1)
- [setMaxListeners](Poru.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Poru**(`client`, `nodes`, `options`)

This is the main class of Poru

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `any` | VoiceClient for Poru library to use to connect to lavalink node server (discord.js, eris, oceanic) |
| `nodes` | [`NodeGroup`](../interfaces/NodeGroup.md)[] | Node |
| `options` | [`PoruOptions`](../interfaces/PoruOptions.md) | PoruOptions |

#### Defined in

[src/Poru.ts:224](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L224)

## Properties

### \_nodes

• `Private` `Readonly` **\_nodes**: [`NodeGroup`](../interfaces/NodeGroup.md)[]

#### Defined in

[src/Poru.ts:207](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L207)

___

### client

• `Readonly` **client**: `any`

#### Defined in

[src/Poru.ts:206](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L206)

___

### isActivated

• **isActivated**: `boolean`

#### Defined in

[src/Poru.ts:213](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L213)

___

### nodes

• **nodes**: `Map`\<`string`, [`Node`](Node.md)\>

#### Defined in

[src/Poru.ts:209](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L209)

___

### options

• **options**: [`PoruOptions`](../interfaces/PoruOptions.md)

#### Defined in

[src/Poru.ts:208](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L208)

___

### players

• **players**: `Map`\<`string`, [`Player`](Player.md)\>

#### Defined in

[src/Poru.ts:210](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L210)

___

### send

• **send**: `Function`

#### Defined in

[src/Poru.ts:214](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L214)

___

### userId

• **userId**: `string`

#### Defined in

[src/Poru.ts:211](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L211)

___

### version

• **version**: `Number`

#### Defined in

[src/Poru.ts:212](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L212)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Poru.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:405

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/@types/node/events.d.ts:411

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Poru.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Defined in

node_modules/@types/node/events.d.ts:404

## Accessors

### leastUsedNodes

• `get` **leastUsedNodes**(): [`Node`](Node.md)[]

Get a least used node from poru instance

#### Returns

[`Node`](Node.md)[]

#### Defined in

[src/Poru.ts:415](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L415)

## Methods

### [captureRejectionSymbol]

▸ `Optional` **[captureRejectionSymbol]**(`error`, `event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@types/node/events.d.ts:115

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Poru`](Poru.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Poru`](Poru.md)

**`Since`**

v0.1.26

#### Defined in

node_modules/@types/node/events.d.ts:475

___

### addNode

▸ **addNode**(`options`): [`Node`](Node.md)

Add a node to poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`NodeGroup`](../interfaces/NodeGroup.md) | NodeGroup |

#### Returns

[`Node`](Node.md)

Node

#### Defined in

[src/Poru.ts:319](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L319)

___

### createConnection

▸ **createConnection**(`options`): [`Player`](Player.md)

Get a player from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ConnectionOptions`](../interfaces/ConnectionOptions.md) | ConnectionOptions |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/Poru.ts:370](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L370)

___

### createPlayer

▸ `Private` **createPlayer**(`node`, `options`): [`Player`](Player.md)

Create a player from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | Node |
| `options` | [`ConnectionOptions`](../interfaces/ConnectionOptions.md) | ConnectionOptions |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/Poru.ts:394](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L394)

___

### decodeTrack

▸ **decodeTrack**(`track`, `node`): `Promise`\<`unknown`\>

Decode a track from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `string` | String |
| `node` | [`Node`](Node.md) | Node |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Poru.ts:446](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L446)

___

### decodeTracks

▸ **decodeTracks**(`tracks`, `node`): `Promise`\<`unknown`\>

Decode tracks from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | `string`[] | String[] |
| `node` | [`Node`](Node.md) | Node |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Poru.ts:457](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L457)

___

### emit

▸ **emit**\<`K`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`PoruEvents`](../interfaces/PoruEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `Parameters`\<[`PoruEvents`](../interfaces/PoruEvents.md)[`K`]\> |

#### Returns

`boolean`

#### Defined in

[src/Poru.ts:201](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L201)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
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

**`Since`**

v6.0.0

#### Defined in

node_modules/@types/node/events.d.ts:794

___

### get

▸ **get**(`guildId`): [`Player`](Player.md)

Get a player from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Guild ID |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/Poru.ts:493](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L493)

___

### getLavalinkInfo

▸ **getLavalinkInfo**(`name`): `Promise`\<`unknown`\>

Get lavalink info from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Node name |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Poru.ts:466](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L466)

___

### getLavalinkStatus

▸ **getLavalinkStatus**(`name`): `Promise`\<`unknown`\>

Get lavalink status from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Node name |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Poru.ts:475](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L475)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Poru.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Defined in

node_modules/@types/node/events.d.ts:647

___

### getNode

▸ **getNode**(`identifier?`): [`Node`](Node.md) \| [`Node`](Node.md)[]

Get a node from poru instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `identifier` | `string` | `"auto"` | Node name |

#### Returns

[`Node`](Node.md) \| [`Node`](Node.md)[]

Node

#### Defined in

[src/Poru.ts:355](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L355)

___

### getNodeByRegion

▸ **getNodeByRegion**(`region`): [`Node`](Node.md)[]

Get a node from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `region` | `string` | Region of the node |

#### Returns

[`Node`](Node.md)[]

Node

#### Defined in

[src/Poru.ts:341](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L341)

___

### init

▸ **init**(`client`): [`Poru`](Poru.md)

This method is used to add a node to poru

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `any` | VoiceClient for Poru library to use to connect to lavalink node server (discord.js, eris, oceanic) |

#### Returns

[`Poru`](Poru.md)

void

#### Defined in

[src/Poru.ts:241](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L241)

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Defined in

node_modules/@types/node/events.d.ts:741

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### off

▸ **off**\<`K`\>(`event`, `listener`): [`Poru`](Poru.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`PoruEvents`](../interfaces/PoruEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | [`PoruEvents`](../interfaces/PoruEvents.md)[`K`] |

#### Returns

[`Poru`](Poru.md)

#### Defined in

[src/Poru.ts:202](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L202)

___

### on

▸ **on**\<`K`\>(`event`, `listener`): [`Poru`](Poru.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`PoruEvents`](../interfaces/PoruEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | [`PoruEvents`](../interfaces/PoruEvents.md)[`K`] |

#### Returns

[`Poru`](Poru.md)

#### Defined in

[src/Poru.ts:199](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L199)

___

### once

▸ **once**\<`K`\>(`event`, `listener`): [`Poru`](Poru.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`PoruEvents`](../interfaces/PoruEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | [`PoruEvents`](../interfaces/PoruEvents.md)[`K`] |

#### Returns

[`Poru`](Poru.md)

#### Defined in

[src/Poru.ts:200](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L200)

___

### packetUpdate

▸ **packetUpdate**(`packet`): `void`

Voice State Update and Voice Server Update

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packet` | `any` | packet from discord api |

#### Returns

`void`

void

#### Defined in

[src/Poru.ts:301](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L301)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Poru`](Poru.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Poru`](Poru.md)

**`Since`**

v6.0.0

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Poru`](Poru.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Poru`](Poru.md)

**`Since`**

v6.0.0

#### Defined in

node_modules/@types/node/events.d.ts:775

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Poru`](Poru.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Poru`](Poru.md)

**`Since`**

v0.1.26

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeConnection

▸ **removeConnection**(`guildId`): `void`

Remove a player from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Guild ID |

#### Returns

`void`

#### Defined in

[src/Poru.ts:409](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L409)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Poru`](Poru.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

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
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
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
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Poru`](Poru.md)

**`Since`**

v0.1.26

#### Defined in

node_modules/@types/node/events.d.ts:615

___

### removeNode

▸ **removeNode**(`identifier`): `void`

Remove a node from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Node name |

#### Returns

`void`

void

#### Defined in

[src/Poru.ts:330](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L330)

___

### resolve

▸ **resolve**(`param0`, `node?`): `Promise`\<[`Response`](Response.md)\>

Resolve a track from poru instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param0` | [`ResolveOptions`](../interfaces/ResolveOptions.md) | ResolveOptions |
| `node?` | [`Node`](Node.md) | Node |

#### Returns

`Promise`\<[`Response`](Response.md)\>

#### Defined in

[src/Poru.ts:424](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L424)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Poru`](Poru.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Poru`](Poru.md)

**`Since`**

v0.3.5

#### Defined in

node_modules/@types/node/events.d.ts:641

___

### addAbortListener

▸ `Static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

**`Since`**

v18.18.0

#### Defined in

node_modules/@types/node/events.d.ts:394

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Defined in

node_modules/@types/node/events.d.ts:312

___

### getMaxListeners

▸ `Static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

**`Since`**

v18.17.0

#### Defined in

node_modules/@types/node/events.d.ts:341

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Defined in

node_modules/@types/node/events.d.ts:284

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`\<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Defined in

node_modules/@types/node/events.d.ts:263

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Defined in

node_modules/@types/node/events.d.ts:199

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

node_modules/@types/node/events.d.ts:204

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Defined in

node_modules/@types/node/events.d.ts:359
