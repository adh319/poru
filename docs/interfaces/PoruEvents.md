[poru](../README.md) / [Modules](../modules.md) / PoruEvents

# Interface: PoruEvents

## Table of contents

### Events

- [debug](PoruEvents.md#debug)
- [nodeConnect](PoruEvents.md#nodeconnect)
- [nodeDisconnect](PoruEvents.md#nodedisconnect)
- [nodeError](PoruEvents.md#nodeerror)
- [nodeReconnect](PoruEvents.md#nodereconnect)
- [playerCreate](PoruEvents.md#playercreate)
- [playerDestroy](PoruEvents.md#playerdestroy)
- [playerUpdate](PoruEvents.md#playerupdate)
- [queueEnd](PoruEvents.md#queueend)
- [raw](PoruEvents.md#raw)
- [socketClose](PoruEvents.md#socketclose)
- [trackEnd](PoruEvents.md#trackend)
- [trackError](PoruEvents.md#trackerror)
- [trackStart](PoruEvents.md#trackstart)

## Events

### debug

• **debug**: (...`args`: `any`) => `void`

#### Type declaration

▸ (`...args`): `void`

Emitted when data useful for debugging is produced

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:65](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L65)

___

### nodeConnect

• **nodeConnect**: (`node`: [`Node`](../classes/Node.md)) => `void`

#### Type declaration

▸ (`node`): `void`

Emitted when lavalink node is connected with poru

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../classes/Node.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:83](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L83)

___

### nodeDisconnect

• **nodeDisconnect**: (`node`: [`Node`](../classes/Node.md), `event?`: `unknown`) => `void`

#### Type declaration

▸ (`node`, `event?`): `void`

Emitted when data useful for debugging is produced

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../classes/Node.md) |
| `event?` | `unknown` |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:92](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L92)

___

### nodeError

• **nodeError**: (`node`: [`Node`](../classes/Node.md), `event`: `any`) => `void`

#### Type declaration

▸ (`node`, `event`): `void`

Emitted when lavalink nodes get an error

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../classes/Node.md) |
| `event` | `any` |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:109](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L109)

___

### nodeReconnect

• **nodeReconnect**: (`node`: [`Node`](../classes/Node.md)) => `void`

#### Type declaration

▸ (`node`): `void`

Emitted when poru try to reconnect with lavalink node while disconnected

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../classes/Node.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:100](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L100)

___

### playerCreate

• **playerCreate**: (`player`: [`Player`](../classes/Player.md)) => `void`

#### Type declaration

▸ (`player`): `void`

Emitted when a player got created

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:164](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L164)

___

### playerDestroy

• **playerDestroy**: (`player`: [`Player`](../classes/Player.md)) => `void`

#### Type declaration

▸ (`player`): `void`

Emitted when a player destroy

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:173](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L173)

___

### playerUpdate

• **playerUpdate**: (`player`: [`Player`](../classes/Player.md)) => `void`

#### Type declaration

▸ (`player`): `void`

Emitted when a player got updates

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:156](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L156)

___

### queueEnd

• **queueEnd**: (`player`: [`Player`](../classes/Player.md)) => `void`

#### Type declaration

▸ (`player`): `void`

Emitted when player's queue  is completed and going to disconnect

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:138](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L138)

___

### raw

• **raw**: (`topic`: `string`, ...`args`: `unknown`[]) => `void`

#### Type declaration

▸ (`topic`, `...args`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | from what section the event come |
| `...args` | `unknown`[] | Emitted when a Response is come |

##### Returns

`void`

#### Defined in

[src/Poru.ts:74](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L74)

___

### socketClose

• **socketClose**: (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `data`: `any`) => `void`

#### Type declaration

▸ (`player`, `track`, `data`): `void`

Emitted when the websocket connection to Discord voice servers is closed

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |
| `track` | [`Track`](../classes/Track.md) |
| `data` | `any` |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:183](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L183)

___

### trackEnd

• **trackEnd**: (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `LavalinkData?`: `unknown`) => `void`

#### Type declaration

▸ (`player`, `track`, `LavalinkData?`): `void`

Emitted whenever track ends

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |
| `track` | [`Track`](../classes/Track.md) |
| `LavalinkData?` | `unknown` |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:129](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L129)

___

### trackError

• **trackError**: (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `data`: `any`) => `void`

#### Type declaration

▸ (`player`, `track`, `data`): `void`

Emitted when a track gets stuck while playing

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |
| `track` | [`Track`](../classes/Track.md) |
| `data` | `any` |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:148](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L148)

___

### trackStart

• **trackStart**: (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md)) => `void`

#### Type declaration

▸ (`player`, `track`): `void`

Emitted whenever player start playing new track

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](../classes/Player.md) |
| `track` | [`Track`](../classes/Track.md) |

##### Returns

`void`

void

#### Defined in

[src/Poru.ts:119](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L119)
