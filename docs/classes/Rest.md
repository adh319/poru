[poru](../README.md) / [Modules](../modules.md) / Rest

# Class: Rest

## Table of contents

### Constructors

- [constructor](Rest.md#constructor)

### Properties

- [password](Rest.md#password)
- [poru](Rest.md#poru)
- [sessionId](Rest.md#sessionid)
- [url](Rest.md#url)

### Methods

- [delete](Rest.md#delete)
- [destroyPlayer](Rest.md#destroyplayer)
- [get](Rest.md#get)
- [getAllPlayers](Rest.md#getallplayers)
- [patch](Rest.md#patch)
- [post](Rest.md#post)
- [setSessionId](Rest.md#setsessionid)
- [updatePlayer](Rest.md#updateplayer)

## Constructors

### constructor

• **new Rest**(`poru`, `node`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `poru` | [`Poru`](Poru.md) |
| `node` | [`Node`](Node.md) |

#### Defined in

[src/Node/Rest.ts:38](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L38)

## Properties

### password

• `Private` **password**: `string`

#### Defined in

[src/Node/Rest.ts:34](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L34)

___

### poru

• **poru**: [`Poru`](Poru.md)

#### Defined in

[src/Node/Rest.ts:36](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L36)

___

### sessionId

• `Private` **sessionId**: `string`

#### Defined in

[src/Node/Rest.ts:33](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L33)

___

### url

• **url**: `string`

#### Defined in

[src/Node/Rest.ts:35](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L35)

## Methods

### delete

▸ **delete**(`endpoint`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | \`/$\{string}\` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Node/Rest.ts:109](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L109)

___

### destroyPlayer

▸ **destroyPlayer**(`guildId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Node/Rest.ts:57](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L57)

___

### get

▸ **get**(`path`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | \`/$\{string}\` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Node/Rest.ts:61](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L61)

___

### getAllPlayers

▸ **getAllPlayers**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Node/Rest.ts:49](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L49)

___

### patch

▸ **patch**(`endpoint`, `body`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | \`/$\{string}\` |
| `body` | `any` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Node/Rest.ts:76](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L76)

___

### post

▸ **post**(`endpoint`, `body`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | \`/$\{string}\` |
| `body` | `any` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Node/Rest.ts:92](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L92)

___

### setSessionId

▸ **setSessionId**(`sessionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `string` |

#### Returns

`void`

#### Defined in

[src/Node/Rest.ts:45](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L45)

___

### updatePlayer

▸ **updatePlayer**(`options`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`playOptions`](../interfaces/playOptions.md) |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/Node/Rest.ts:53](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L53)
