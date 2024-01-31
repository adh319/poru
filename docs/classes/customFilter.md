[poru](../README.md) / [Modules](../modules.md) / customFilter

# Class: customFilter

The customFilters class that is used to apply filters to the currently playing track

## Hierarchy

- [`Filters`](Filters.md)

  ↳ **`customFilter`**

## Table of contents

### Constructors

- [constructor](customFilter.md#constructor)

### Properties

- [\_8d](customFilter.md#_8d)
- [band](customFilter.md#band)
- [bassboost](customFilter.md#bassboost)
- [channelMix](customFilter.md#channelmix)
- [distortion](customFilter.md#distortion)
- [equalizer](customFilter.md#equalizer)
- [gain](customFilter.md#gain)
- [karaoke](customFilter.md#karaoke)
- [lowPass](customFilter.md#lowpass)
- [nightcore](customFilter.md#nightcore)
- [player](customFilter.md#player)
- [rotation](customFilter.md#rotation)
- [slowmode](customFilter.md#slowmode)
- [timescale](customFilter.md#timescale)
- [tremolo](customFilter.md#tremolo)
- [vaporwave](customFilter.md#vaporwave)
- [vibrato](customFilter.md#vibrato)
- [volume](customFilter.md#volume)

### Methods

- [clearFilters](customFilter.md#clearfilters)
- [set8D](customFilter.md#set8d)
- [setBassboost](customFilter.md#setbassboost)
- [setChannelMix](customFilter.md#setchannelmix)
- [setDistortion](customFilter.md#setdistortion)
- [setEqualizer](customFilter.md#setequalizer)
- [setFilters](customFilter.md#setfilters)
- [setKaraoke](customFilter.md#setkaraoke)
- [setLowPass](customFilter.md#setlowpass)
- [setNightcore](customFilter.md#setnightcore)
- [setRotation](customFilter.md#setrotation)
- [setSlowmode](customFilter.md#setslowmode)
- [setTimescale](customFilter.md#settimescale)
- [setTremolo](customFilter.md#settremolo)
- [setVaporwave](customFilter.md#setvaporwave)
- [setVibrato](customFilter.md#setvibrato)
- [updateFilters](customFilter.md#updatefilters)

## Constructors

### constructor

• **new customFilter**(`player`)

The customFilters class that is used to apply filters to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Player.md) | Player |

#### Overrides

[Filters](Filters.md).[constructor](Filters.md#constructor)

#### Defined in

[src/Player/CustomFilters.ts:20](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L20)

## Properties

### \_8d

• **\_8d**: `boolean`

#### Defined in

[src/Player/CustomFilters.ts:14](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L14)

___

### band

• **band**: `number`

#### Defined in

[src/Player/CustomFilters.ts:9](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L9)

___

### bassboost

• **bassboost**: `number`

#### Defined in

[src/Player/CustomFilters.ts:15](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L15)

___

### channelMix

• **channelMix**: [`channelMixOptions`](../interfaces/channelMixOptions.md)

#### Inherited from

[Filters](Filters.md).[channelMix](Filters.md#channelmix)

#### Defined in

[src/Player/Filters.ts:168](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L168)

___

### distortion

• **distortion**: `distortionOptions`

#### Inherited from

[Filters](Filters.md).[distortion](Filters.md#distortion)

#### Defined in

[src/Player/Filters.ts:167](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L167)

___

### equalizer

• **equalizer**: `Band`[]

#### Inherited from

[Filters](Filters.md).[equalizer](Filters.md#equalizer)

#### Defined in

[src/Player/Filters.ts:162](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L162)

___

### gain

• **gain**: `number`

#### Defined in

[src/Player/CustomFilters.ts:10](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L10)

___

### karaoke

• **karaoke**: `karaokeOptions`

#### Inherited from

[Filters](Filters.md).[karaoke](Filters.md#karaoke)

#### Defined in

[src/Player/Filters.ts:163](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L163)

___

### lowPass

• **lowPass**: `lowPassOptions`

#### Inherited from

[Filters](Filters.md).[lowPass](Filters.md#lowpass)

#### Defined in

[src/Player/Filters.ts:169](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L169)

___

### nightcore

• **nightcore**: `boolean`

#### Defined in

[src/Player/CustomFilters.ts:12](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L12)

___

### player

• **player**: [`Player`](Player.md)

#### Inherited from

[Filters](Filters.md).[player](Filters.md#player)

#### Defined in

[src/Player/Filters.ts:160](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L160)

___

### rotation

• **rotation**: `rotationOptions`

#### Inherited from

[Filters](Filters.md).[rotation](Filters.md#rotation)

#### Defined in

[src/Player/Filters.ts:166](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L166)

___

### slowmode

• **slowmode**: `boolean`

#### Defined in

[src/Player/CustomFilters.ts:11](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L11)

___

### timescale

• **timescale**: `timescaleOptions`

#### Inherited from

[Filters](Filters.md).[timescale](Filters.md#timescale)

#### Defined in

[src/Player/Filters.ts:171](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L171)

___

### tremolo

• **tremolo**: `tremoloOptions`

#### Inherited from

[Filters](Filters.md).[tremolo](Filters.md#tremolo)

#### Defined in

[src/Player/Filters.ts:164](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L164)

___

### vaporwave

• **vaporwave**: `boolean`

#### Defined in

[src/Player/CustomFilters.ts:13](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L13)

___

### vibrato

• **vibrato**: `vibratoOptions`

#### Inherited from

[Filters](Filters.md).[vibrato](Filters.md#vibrato)

#### Defined in

[src/Player/Filters.ts:165](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L165)

___

### volume

• **volume**: `number`

#### Inherited from

[Filters](Filters.md).[volume](Filters.md#volume)

#### Defined in

[src/Player/Filters.ts:161](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L161)

## Methods

### clearFilters

▸ **clearFilters**(): [`Filters`](Filters.md)

#### Returns

[`Filters`](Filters.md)

The current filters applied to the currently playing track

#### Inherited from

[Filters](Filters.md).[clearFilters](Filters.md#clearfilters)

#### Defined in

[src/Player/Filters.ts:312](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L312)

___

### set8D

▸ **set8D**(`val`): `void`

Set 8D filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `boolean` | Boolean |

#### Returns

`void`

#### Defined in

[src/Player/CustomFilters.ts:99](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L99)

___

### setBassboost

▸ **setBassboost**(`val`): [`customFilter`](customFilter.md)

Set the bassboost value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | The value of the bassboost |

#### Returns

[`customFilter`](customFilter.md)

#### Defined in

[src/Player/CustomFilters.ts:30](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L30)

___

### setChannelMix

▸ **setChannelMix**(`mix`): [`Filters`](Filters.md)

Change the channel mix Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mix` | [`channelMixOptions`](../interfaces/channelMixOptions.md) | An object that conforms to the ChannelMixOptions type that defines the channel mix to apply |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setChannelMix](Filters.md#setchannelmix)

#### Defined in

[src/Player/Filters.ts:275](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L275)

___

### setDistortion

▸ **setDistortion**(`distortion`): [`Filters`](Filters.md)

Change the distortion Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distortion` | `distortionOptions` | An object that conforms to the DistortionOptions type that defines the distortion to apply |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setDistortion](Filters.md#setdistortion)

#### Defined in

[src/Player/Filters.ts:262](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L262)

___

### setEqualizer

▸ **setEqualizer**(`bands`): [`Filters`](Filters.md)

Set equalizer bands for the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bands` | `Band`[] | An array of bands to set the equalizer to |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setEqualizer](Filters.md#setequalizer)

#### Defined in

[src/Player/Filters.ts:191](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L191)

___

### setFilters

▸ **setFilters**(`options`): [`customFilter`](customFilter.md)

Change the filters of the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | An object that conforms to the FiltersOptions type that defines the filters to apply |

#### Returns

[`customFilter`](customFilter.md)

#### Inherited from

[Filters](Filters.md).[setFilters](Filters.md#setfilters)

#### Defined in

[src/Player/Filters.ts:300](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L300)

___

### setKaraoke

▸ **setKaraoke**(`karaoke?`): [`Filters`](Filters.md)

Change the karaoke Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `karaoke?` | `karaokeOptions` | An object that conforms to the KaraokeOptions type that defines a range of frequencies to mute |

#### Returns

[`Filters`](Filters.md)

The current filter instance

#### Inherited from

[Filters](Filters.md).[setKaraoke](Filters.md#setkaraoke)

#### Defined in

[src/Player/Filters.ts:202](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L202)

___

### setLowPass

▸ **setLowPass**(`pass`): [`Filters`](Filters.md)

Change the low pass Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pass` | `lowPassOptions` | An object that conforms to the LowPassOptions type that defines the low pass to apply |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setLowPass](Filters.md#setlowpass)

#### Defined in

[src/Player/Filters.ts:288](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L288)

___

### setNightcore

▸ **setNightcore**(`val`): `boolean`

Set Nightcore filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `boolean` | Boolean |

#### Returns

`boolean`

#### Defined in

[src/Player/CustomFilters.ts:71](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L71)

___

### setRotation

▸ **setRotation**(`rotation?`): [`Filters`](Filters.md)

Change the rotation Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation?` | `rotationOptions` | An object that conforms to the RotationOptions type that defines the rotation to apply |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setRotation](Filters.md#setrotation)

#### Defined in

[src/Player/Filters.ts:249](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L249)

___

### setSlowmode

▸ **setSlowmode**(`val`): [`customFilter`](customFilter.md)

Set slowmode filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `boolean` | The value of the band |

#### Returns

[`customFilter`](customFilter.md)

#### Defined in

[src/Player/CustomFilters.ts:50](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L50)

___

### setTimescale

▸ **setTimescale**(`timescale?`): [`Filters`](Filters.md)

Change the timescale Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timescale?` | `timescaleOptions` | An object that conforms to the TimescaleOptions type that defines the timescale to apply |

#### Returns

[`Filters`](Filters.md)

The current filter instance

#### Inherited from

[Filters](Filters.md).[setTimescale](Filters.md#settimescale)

#### Defined in

[src/Player/Filters.ts:214](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L214)

___

### setTremolo

▸ **setTremolo**(`tremolo?`): [`Filters`](Filters.md)

Change the tremolo Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tremolo?` | `tremoloOptions` | An object that conforms to the TremoloOptions type that defines the tremolo to apply |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setTremolo](Filters.md#settremolo)

#### Defined in

[src/Player/Filters.ts:226](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L226)

___

### setVaporwave

▸ **setVaporwave**(`val`): `void`

Set Vaporwave filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `boolean` | Boolean |

#### Returns

`void`

#### Defined in

[src/Player/CustomFilters.ts:86](https://github.com/adh319/poru/blob/19920d5/src/Player/CustomFilters.ts#L86)

___

### setVibrato

▸ **setVibrato**(`vibrato?`): [`Filters`](Filters.md)

Change the vibrato Options applied to the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vibrato?` | `vibratoOptions` | An object that conforms to the VibratoOptions type that defines the vibrato to apply |

#### Returns

[`Filters`](Filters.md)

#### Inherited from

[Filters](Filters.md).[setVibrato](Filters.md#setvibrato)

#### Defined in

[src/Player/Filters.ts:238](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L238)

___

### updateFilters

▸ **updateFilters**(): [`Filters`](Filters.md)

#### Returns

[`Filters`](Filters.md)

the updated filters applied to the currently playing track

#### Inherited from

[Filters](Filters.md).[updateFilters](Filters.md#updatefilters)

#### Defined in

[src/Player/Filters.ts:324](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L324)
