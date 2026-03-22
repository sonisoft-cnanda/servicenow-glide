import { HermesTopicAndTopicLocationInfo } from "./HermesTopicAndTopicLocationInfo";
import { HermesMessages } from "./HermesMessages";
import { HermesPartitionConsumerEntry } from "./HermesPartitionConsumerEntry";
import { HermesMessageInfo } from "./HermesMessageInfo";

export class HermesTopicInspector {
    constructor() {  }
    getAllTopicsForService(serviceName?: string, topicNamespace?: string): HermesTopicAndTopicLocationInfo {
        return null as any;
    }
    getConsumerInfoForTopicForService(rawKafkaTopic?: string, isInternalTopic?: boolean, service?: string): HermesPartitionConsumerEntry[] {
        return [];
    }
    getLastMessageFromTopic(rawKafkaTopic?: string, isInternalTopic?: boolean): HermesMessageInfo {
        return null as any;
    }
    getLastMessageFromTopicForService(rawKafkaTopic?: string, isInternalTopic?: boolean, service?: string): HermesMessageInfo {
        return null as any;
    }
    getMessagesFromTimePage(rawKafkaTopic?: string, isInternalTopic?: boolean, startTimestamp?: string, endTimestamp?: string, partition?: number, datacenter?: string, service?: string, searchPattern?: string, groupId?: string): HermesMessages {
        return null as any;
    }
}
