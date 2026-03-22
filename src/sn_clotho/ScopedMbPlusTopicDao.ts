import { GlideRecord } from "../types/GlideRecord";

export class ScopedMbPlusTopicDao {
    constructor() {  }
    addShardTopic(namespace?: string, name?: string, shardID?: string, partition?: number, type?: string, active?: boolean): string {
        return "";
    }
    addTopic(namespace?: string, name?: string, partition?: number, type?: string, active?: boolean): string {
        return "";
    }
    deleteTopic(name?: string): boolean {
        return false;
    }
    getTopic(name?: string): GlideRecord {
        return null as any;
    }
    setTopicActive(name?: string, active?: boolean): boolean {
        return false;
    }
    setTopicPartition(name?: string, partition?: number): boolean {
        return false;
    }
}
