[poru](../README.md) / [Modules](../modules.md) / Node

# Class: Node

## Table of contents

### Constructors

- [constructor](Node.md#constructor)

### Properties

- [attempt](Node.md#attempt)
- [autoResume](Node.md#autoresume)
- [isConnected](Node.md#isconnected)
- [name](Node.md#name)
- [options](Node.md#options)
- [password](Node.md#password)
- [poru](Node.md#poru)
- [reconnectAttempt](Node.md#reconnectattempt)
- [reconnectTimeout](Node.md#reconnecttimeout)
- [reconnectTries](Node.md#reconnecttries)
- [regions](Node.md#regions)
- [rest](Node.md#rest)
- [restURL](Node.md#resturl)
- [resumeKey](Node.md#resumekey)
- [resumeTimeout](Node.md#resumetimeout)
- [secure](Node.md#secure)
- [sessionId](Node.md#sessionid)
- [socketURL](Node.md#socketurl)
- [stats](Node.md#stats)
- [ws](Node.md#ws)

### Accessors

- [penalties](Node.md#penalties)

### Methods

- [close](Node.md#close)
- [connect](Node.md#connect)
- [disconnect](Node.md#disconnect)
- [error](Node.md#error)
- [getRoutePlannerStatus](Node.md#getrouteplannerstatus)
- [message](Node.md#message)
- [open](Node.md#open)
- [reconnect](Node.md#reconnect)
- [send](Node.md#send)
- [setStats](Node.md#setstats)
- [unmarkFailedAddress](Node.md#unmarkfailedaddress)

## Constructors

### constructor

• **new Node**(`poru`, `node`, `options`)

The Node class that is used to connect to a lavalink node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poru` | [`Poru`](Poru.md) | Poru |
| `node` | [`NodeGroup`](../interfaces/NodeGroup.md) | NodeGroup |
| `options` | [`PoruOptions`](../interfaces/PoruOptions.md) | PoruOptions |

#### Defined in

[src/Node/Node.ts:55](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L55)

## Properties

### attempt

• **attempt**: `number`

#### Defined in

[src/Node/Node.ts:46](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L46)

___

### autoResume

• `Readonly` **autoResume**: `boolean`

#### Defined in

[src/Node/Node.ts:42](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L42)

___

### isConnected

• **isConnected**: `boolean`

#### Defined in

[src/Node/Node.ts:29](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L29)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/Node/Node.ts:31](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L31)

___

### options

• **options**: [`NodeGroup`](../interfaces/NodeGroup.md)

#### Defined in

[src/Node/Node.ts:48](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L48)

___

### password

• **password**: `string`

#### Defined in

[src/Node/Node.ts:34](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L34)

___

### poru

• **poru**: [`Poru`](Poru.md)

#### Defined in

[src/Node/Node.ts:30](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L30)

___

### reconnectAttempt

• **reconnectAttempt**: `any`

#### Defined in

[src/Node/Node.ts:45](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L45)

___

### reconnectTimeout

• `Readonly` **reconnectTimeout**: `number`

#### Defined in

[src/Node/Node.ts:43](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L43)

___

### reconnectTries

• **reconnectTries**: `number`

#### Defined in

[src/Node/Node.ts:44](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L44)

___

### regions

• `Readonly` **regions**: `string`[]

#### Defined in

[src/Node/Node.ts:36](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L36)

___

### rest

• **rest**: [`Rest`](Rest.md)

#### Defined in

[src/Node/Node.ts:38](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L38)

___

### restURL

• `Readonly` **restURL**: `string`

#### Defined in

[src/Node/Node.ts:32](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L32)

___

### resumeKey

• `Readonly` **resumeKey**: `string`

#### Defined in

[src/Node/Node.ts:40](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L40)

___

### resumeTimeout

• `Readonly` **resumeTimeout**: `number`

#### Defined in

[src/Node/Node.ts:41](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L41)

___

### secure

• `Readonly` **secure**: `boolean`

#### Defined in

[src/Node/Node.ts:35](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L35)

___

### sessionId

• **sessionId**: `string`

#### Defined in

[src/Node/Node.ts:37](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L37)

___

### socketURL

• `Readonly` **socketURL**: `string`

#### Defined in

[src/Node/Node.ts:33](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L33)

___

### stats

• **stats**: [`NodeStats`](../interfaces/NodeStats.md)

#### Defined in

[src/Node/Node.ts:47](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L47)

___

### ws

• **ws**: `any`

#### Defined in

[src/Node/Node.ts:39](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L39)

## Accessors

### penalties

• `get` **penalties**(): `number`

#### Returns

`number`

#### Defined in

[src/Node/Node.ts:144](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L144)

## Methods

### close

▸ `Private` **close**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:203](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L203)

___

### connect

▸ **connect**(): `void`

Connects to the lavalink node

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:81](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L81)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:128](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L128)

___

### error

▸ `Private` **error**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:210](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L210)

___

### getRoutePlannerStatus

▸ **getRoutePlannerStatus**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/Node/Node.ts:216](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L216)

___

### message

▸ `Private` **message**(`payload`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Node/Node.ts:179](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L179)

___

### open

▸ `Private` **open**(): `void`

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:156](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L156)

___

### reconnect

▸ **reconnect**(): `void`

Handles the message event

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:115](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L115)

___

### send

▸ **send**(`payload`): `void`

Handles the message event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `any` | any |

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:103](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L103)

___

### setStats

▸ `Private` **setStats**(`packet`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`NodeStats`](../interfaces/NodeStats.md) |

#### Returns

`void`

#### Defined in

[src/Node/Node.ts:175](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L175)

___

### unmarkFailedAddress

▸ **unmarkFailedAddress**(`address`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/Node/Node.ts:220](https://github.com/adh319/poru/blob/19920d5/src/Node/Node.ts#L220)
