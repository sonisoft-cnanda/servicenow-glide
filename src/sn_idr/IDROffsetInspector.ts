import { IDRTopicInfo } from "./IDRTopicInfo";

export class IDROffsetInspector {
    constructor() {  }
    getAllOffsetsForTopic(replicationSet?: string, topic?: string, topicType?: string): IDRTopicInfo {
        return null as any;
    }
    static getHermesOffsetInspector(): IDROffsetInspector {
        return null as any;
    }
    static getLocalOffsetInspector(): IDROffsetInspector {
        return null as any;
    }
    getOffsetsInfoForDelta(): IDRTopicInfo[] {
        return [];
    }
    getOffsetsInfoForMetadata(): IDRTopicInfo[] {
        return [];
    }
    getPartitionOffsetsForTopic(replicationSet?: string, topicType?: string, topic?: string, owner?: string): IDRTopicInfo {
        return null as any;
    }
    static getRemoteOffsetInspector(bootstrap?: string): IDROffsetInspector {
        return null as any;
    }
}
