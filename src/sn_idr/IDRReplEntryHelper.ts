import { IDRReplEntryField } from "./IDRReplEntryField";
import { GlideRecord } from "../types/GlideRecord";

export class IDRReplEntryHelper {
    static getAllowedTables(): string[] {
        return [];
    }
    static getEntriesFromReplicationSet(gr?: GlideRecord): GlideRecord {
        return null as any;
    }
    static getFields(tableName?: string, excludeSysFields?: boolean, excludeVirtualFields?: boolean): IDRReplEntryField[] {
        return [];
    }
    static getReplicationSetFromEntry(gr?: GlideRecord): GlideRecord {
        return null as any;
    }
    static getTransformationSourceFields(entryGr?: GlideRecord, excludeSysFields?: boolean, excludeVirtualFields?: boolean, tableName?: string): IDRReplEntryField[] {
        return [];
    }
    static getTransformationTargetFields(entryGr?: GlideRecord, excludeSysFields?: boolean, excludeVirtualFields?: boolean): IDRReplEntryField[] {
        return [];
    }
    static isConsumerReplicationEntryReadOnly(gr?: GlideRecord): boolean {
        return false;
    }
    static isReplEntryReadOnly(gr?: GlideRecord): boolean {
        return false;
    }
    static validateOutBoundEntryLimit(current?: GlideRecord): boolean {
        return false;
    }
}
