import { EventMetadataMap } from "./EventMetadataMap";
import { EventPropertiesMap } from "./EventPropertiesMap";

export class EventCollector {
    static isEventCollectionEnabled(): boolean {
        return false;
    }
    static isEventCollectionWithoutUserContextEnabled(): boolean {
        return false;
    }
    static recordEvent(eventName: string, eventTime: number, eventMetadata: EventMetadataMap, eventMap: EventPropertiesMap): void {
        
    }
}
