import { ProcessSyncCaptureField } from "./ProcessSyncCaptureField";

export class ProcessSyncCaptureHelper {
    static getAllowedTables(): string[] {
        return [];
    }
    static getCapturableTables(): string[] {
        return [];
    }
    static getFields(tableName?: string, excludeSysFields?: boolean, excludeVirtualFields?: boolean): ProcessSyncCaptureField[] {
        return [];
    }
}
