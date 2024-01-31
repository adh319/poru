[poru](../README.md) / [Modules](../modules.md) / Filters

# Class: Filters

The Filters class that is used to apply filters to the currently playing track

## Hierarchy

- **`Filters`**

  ↳ [`customFilter`](customFilter.md)

## Table of contents

### Constructors

- [constructor](Filters.md#constructor)

### Properties

- [channelMix](Filters.md#channelmix)
- [distortion](Filters.md#distortion)
- [equalizer](Filters.md#equalizer)
- [karaoke](Filters.md#karaoke)
- [lowPass](Filters.md#lowpass)
- [player](Filters.md#player)
- [rotation](Filters.md#rotation)
- [timescale](Filters.md#timescale)
- [tremolo](Filters.md#tremolo)
- [vibrato](Filters.md#vibrato)
- [volume](Filters.md#volume)

### Methods

- [clearFilters](Filters.md#clearfilters)
- [setChannelMix](Filters.md#setchannelmix)
- [setDistortion](Filters.md#setdistortion)
- [setEqualizer](Filters.md#setequalizer)
- [setFilters](Filters.md#setfilters)
- [setKaraoke](Filters.md#setkaraoke)
- [setLowPass](Filters.md#setlowpass)
- [setRotation](Filters.md#setrotation)
- [setTimescale](Filters.md#settimescale)
- [setTremolo](Filters.md#settremolo)
- [setVibrato](Filters.md#setvibrato)
- [updateFilters](Filters.md#updatefilters)

## Constructors

### constructor

• **new Filters**(`player`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Player.md) |
| `options?` | `FiltersOptions` |

#### Defined in

[src/Player/Filters.ts:173](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L173)

## Properties

### channelMix

• **channelMix**: [`channelMixOptions`](../interfaces/channelMixOptions.md)

#### Defined in

[src/Player/Filters.ts:168](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L168)

___

### distortion

• **distortion**: `distortionOptions`

#### Defined in

[src/Player/Filters.ts:167](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L167)

___

### equalizer

• **equalizer**: `Band`[]

#### Defined in

[src/Player/Filters.ts:162](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L162)

___

### karaoke

• **karaoke**: `karaokeOptions`

#### Defined in

[src/Player/Filters.ts:163](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L163)

___

### lowPass

• **lowPass**: `lowPassOptions`

#### Defined in

[src/Player/Filters.ts:169](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L169)

___

### player

• **player**: [`Player`](Player.md)

#### Defined in

[src/Player/Filters.ts:160](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L160)

___

### rotation

• **rotation**: `rotationOptions`

#### Defined in

[src/Player/Filters.ts:166](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L166)

___

### timescale

• **timescale**: `timescaleOptions`

#### Defined in

[src/Player/Filters.ts:171](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L171)

___

### tremolo

• **tremolo**: `tremoloOptions`

#### Defined in

[src/Player/Filters.ts:164](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L164)

___

### vibrato

• **vibrato**: `vibratoOptions`

#### Defined in

[src/Player/Filters.ts:165](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L165)

___

### volume

• **volume**: `number`

#### Defined in

[src/Player/Filters.ts:161](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L161)

## Methods

### clearFilters

▸ **clearFilters**(): [`Filters`](Filters.md)

#### Returns

[`Filters`](Filters.md)

The current filters applied to the currently playing track

#### Defined in

[src/Player/Filters.ts:312](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L312)

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

#### Defined in

[src/Player/Filters.ts:191](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L191)

___

### setFilters

▸ **setFilters**(`options`): [`Filters`](Filters.md)

Change the filters of the currently playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | An object that conforms to the FiltersOptions type that defines the filters to apply |

#### Returns

[`Filters`](Filters.md)

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

#### Defined in

[src/Player/Filters.ts:288](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L288)

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

#### Defined in

[src/Player/Filters.ts:249](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L249)

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

#### Defined in

[src/Player/Filters.ts:226](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L226)

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

#### Defined in

[src/Player/Filters.ts:238](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L238)

___

### updateFilters

▸ **updateFilters**(): [`Filters`](Filters.md)

#### Returns

[`Filters`](Filters.md)

the updated filters applied to the currently playing track

#### Defined in

[src/Player/Filters.ts:324](https://github.com/adh319/poru/blob/19920d5/src/Player/Filters.ts#L324)
