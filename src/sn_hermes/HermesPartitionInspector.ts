import { HermesPartitionInfo } from "./HermesPartitionInfo";

export class HermesPartitionInspector {
    constructor() {  }
    getPartitionCountForService(rawKafkaTopic?: string, isInternalTopic?: boolean, service?: string): number {
        return 0;
    }
    getPartitionInfoForTopicForService(rawKafkaTopic?: string, isInternalTopic?: boolean, service?: string): HermesPartitionInfo[] {
        return [];
    }
}
