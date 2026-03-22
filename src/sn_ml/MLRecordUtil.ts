import { GlideRecord } from "../types/GlideRecord";

export class MLRecordUtil {
    static getFieldType(tableName?: string, fieldName?: string): string {
        return "";
    }
    static getNextSolutionVersion(id?: string): number {
        return 0;
    }
    static populateMetadata(options?: Record<any, any>, solutionGR?: GlideRecord): Record<any, any> {
        return {} as any;
    }
    static updateSolutionProperties(solutionGr?: GlideRecord, properties?: Record<any, any>): boolean {
        return false;
    }
}
