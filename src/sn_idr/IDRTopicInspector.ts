import { IDRMessageInfo } from "./IDRMessageInfo";
import { IDRTopicInfo } from "./IDRTopicInfo";
import { GlideDateTime } from "../types/GlideDateTime";

export class IDRTopicInspector {
    constructor() {  }
    getDeltaTopicsForReplicationSet(replicationSetId?: string): IDRTopicInfo[] {
        return [];
    }
    getHermesMessagesFromTime(rawTopic?: string, owner?: string, glideDateTime?: GlideDateTime, count?: number): IDRMessageInfo[] {
        return [];
    }
    static getHermesTopicInspector(): IDRTopicInspector {
        return null as any;
    }
    getLastMessages(rawTopic?: string, count?: number): IDRMessageInfo[] {
        return [];
    }
    static getLocalTopicInspector(): IDRTopicInspector {
        return null as any;
    }
    getMessagesFromOffset(rawTopic?: string, offsetValue?: number, count?: number): IDRMessageInfo[] {
        return [];
    }
    getMessagesFromTime(rawTopic?: string, glideDateTime?: GlideDateTime, count?: number): IDRMessageInfo[] {
        return [];
    }
    getMetadataTopicsForReplicationSet(replicationSetId?: string): IDRTopicInfo[] {
        return [];
    }
    static getRemoteTopicInspector(bootstrap?: string): IDRTopicInspector {
        return null as any;
    }
    getSeedingTopicsForReplicationSet(replicationSetId?: string): IDRTopicInfo[] {
        return [];
    }
}
