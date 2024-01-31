[poru](../README.md) / [Modules](../modules.md) / Response

# Class: Response

## Table of contents

### Constructors

- [constructor](Response.md#constructor)

### Properties

- [loadType](Response.md#loadtype)
- [playlistInfo](Response.md#playlistinfo)
- [tracks](Response.md#tracks)

### Methods

- [handleTracks](Response.md#handletracks)

## Constructors

### constructor

• **new Response**(`response`, `requester`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |
| `requester` | `any` |

#### Defined in

[src/guild/Response.ts:24](https://github.com/adh319/poru/blob/19920d5/src/guild/Response.ts#L24)

## Properties

### loadType

• **loadType**: [`LoadType`](../modules.md#loadtype)

#### Defined in

[src/guild/Response.ts:22](https://github.com/adh319/poru/blob/19920d5/src/guild/Response.ts#L22)

___

### playlistInfo

• **playlistInfo**: `PlaylistInfo`

#### Defined in

[src/guild/Response.ts:23](https://github.com/adh319/poru/blob/19920d5/src/guild/Response.ts#L23)

___

### tracks

• **tracks**: [`Track`](Track.md)[]

#### Defined in

[src/guild/Response.ts:21](https://github.com/adh319/poru/blob/19920d5/src/guild/Response.ts#L21)

## Methods

### handleTracks

▸ **handleTracks**(`data`, `requester`): [`Track`](Track.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `requester` | `any` |

#### Returns

[`Track`](Track.md)[]

#### Defined in

[src/guild/Response.ts:30](https://github.com/adh319/poru/blob/19920d5/src/guild/Response.ts#L30)
