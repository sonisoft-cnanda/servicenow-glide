import { GlideRecord } from "../types/GlideRecord";

export class RecordStateValidator {
    static isValid(gr: GlideRecord): boolean {
        return false;
    }
    static isValidStateTransition(gr: GlideRecord, newState: string): boolean {
        return false;
    }
}
