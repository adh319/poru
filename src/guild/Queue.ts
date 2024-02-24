import { Track } from "./Track"

export default class Queue extends Array<Track> {
    constructor() {
        super(...arguments);
    }

    /**
     * This get function will return how many Tracks there are in the queue
     */
    public get size(): number {
        return this.length;
    }

    /**
     * This function will show you the first track in the queue
     * @returns {Track | undefined} The first track in the queue or if there are none undefined
     */
    public first(): Track | undefined {
        return this[0];
    }

    /**
     * This function will add a track to the queue
     * @param {Track} track The Track to add to the queue
     * @returns {Queue} Returns the queue with the added track
     */
    public add(track: Track): Queue {
        this.push(track);
        return this;
    }

    /**
     * This function will remove a Track from the Queue
     * @param {number} index The Track to remove trough it's index 
     * @returns {Track | undefined} Returns the track. If there was no track at the specified index then it will return undefined
     * 
     * @attention This is zero based. So if there is one track in the queue then the index should be 0
     */
    public remove(index: number): Track | undefined {
        return (this as Track[]).splice(index, 1)[0];
    }

    /**
     * This function will clear the entire player's queue
     * @returns All of the cleared tracks or none if there were none to clear
     */
    public clear(): Track[] | [] {
        return (this as Track[]).splice(0);
    }

    /**
     * Shuffles the Queue
     */
    public shuffle(): void {
        for (let i = this.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
    }
};