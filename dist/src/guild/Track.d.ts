import { Poru } from "../Poru";
export interface trackData {
    encoded: string;
    info: trackInfo;
    pluginInfo: any;
    userData: any;
}
export interface trackInfo {
    identifier: string;
    isSeekable: boolean;
    author: string;
    length: number;
    isStream: boolean;
    title: string;
    uri: string;
    sourceName: string;
    image: string;
    artworkUrl: string;
    isrc: string | null;
    requester?: any;
}
export declare class Track {
    track: string;
    info: trackInfo;
    pluginInfo: any;
    userData: any;
    constructor(data: trackData, requester?: any);
    resolve(poru: Poru): Promise<this>;
}
