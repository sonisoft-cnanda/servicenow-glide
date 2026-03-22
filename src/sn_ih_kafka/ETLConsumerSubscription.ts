import { GlideRecord } from "../types/GlideRecord";

export class ETLConsumerSubscription {
    constructor() {  }
    activate(consumer?: GlideRecord): boolean {
        return false;
    }
    deactivate(consumer?: GlideRecord): boolean {
        return false;
    }
}
