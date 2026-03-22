import { HermesPartitionInfo } from "./HermesPartitionInfo";
import { HermesConsumerInfo } from "./HermesConsumerInfo";

export class HermesPartitionConsumerEntry {
    constructor() {  }
    getConsumerInfos(): HermesConsumerInfo[] {
        return [];
    }
    getPartitionInfo(): HermesPartitionInfo {
        return null as any;
    }
}
