[poru](README.md) / Modules

# poru

## Table of contents

### Enumerations

- [RequestMethod](enums/RequestMethod.md)

### Classes

- [Connection](classes/Connection.md)
- [Filters](classes/Filters.md)
- [Node](classes/Node.md)
- [Player](classes/Player.md)
- [Plugin](classes/Plugin.md)
- [Poru](classes/Poru.md)
- [Response](classes/Response.md)
- [Rest](classes/Rest.md)
- [Track](classes/Track.md)
- [customFilter](classes/customFilter.md)

### Interfaces

- [ConnectionOptions](interfaces/ConnectionOptions.md)
- [IVoiceServer](interfaces/IVoiceServer.md)
- [LavalinkResponse](interfaces/LavalinkResponse.md)
- [NodeGroup](interfaces/NodeGroup.md)
- [NodeStats](interfaces/NodeStats.md)
- [PoruEvents](interfaces/PoruEvents.md)
- [PoruOptions](interfaces/PoruOptions.md)
- [ResolveOptions](interfaces/ResolveOptions.md)
- [channelMixOptions](interfaces/channelMixOptions.md)
- [playOptions](interfaces/playOptions.md)
- [trackData](interfaces/trackData.md)
- [trackInfo](interfaces/trackInfo.md)

### Type Aliases

- [Constructor](modules.md#constructor)
- [LoadType](modules.md#loadtype)
- [RouteLike](modules.md#routelike)
- [supportedLibraries](modules.md#supportedlibraries)

## Type Aliases

### Constructor

Ƭ **Constructor**\<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/Poru.ts:13](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L13)

___

### LoadType

Ƭ **LoadType**: ``"track"`` \| ``"playlist"`` \| ``"search"`` \| ``"empty"`` \| ``"error"``

#### Defined in

[src/guild/Response.ts:4](https://github.com/adh319/poru/blob/19920d5/src/guild/Response.ts#L4)

___

### RouteLike

Ƭ **RouteLike**: \`/$\{string}\`

#### Defined in

[src/Node/Rest.ts:22](https://github.com/adh319/poru/blob/19920d5/src/Node/Rest.ts#L22)

___

### supportedLibraries

Ƭ **supportedLibraries**: ``"discord.js"`` \| ``"eris"`` \| ``"oceanic"`` \| ``"other"``

#### Defined in

[src/Poru.ts:32](https://github.com/adh319/poru/blob/19920d5/src/Poru.ts#L32)
