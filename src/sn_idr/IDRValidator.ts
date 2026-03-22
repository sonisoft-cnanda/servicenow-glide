import { IDRValidationResult } from "./IDRValidationResult";
import { GlideRecord } from "../types/GlideRecord";

export class IDRValidator {
    static hasTopicLocationAndReplicationEntries(current?: GlideRecord): boolean {
        return false;
    }
    static isConsumerSetReadyToSynchronize(current?: GlideRecord): boolean {
        return false;
    }
    static validateDelete(current?: GlideRecord): IDRValidationResult {
        return null as any;
    }
    static validateDisplay(current?: GlideRecord): IDRValidationResult {
        return null as any;
    }
    static validateInsert(current?: GlideRecord): IDRValidationResult {
        return null as any;
    }
    static validateUpdate(current?: GlideRecord, previous?: GlideRecord): IDRValidationResult {
        return null as any;
    }
}
