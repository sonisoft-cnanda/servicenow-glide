export class IntegrationStudioScriptableApi {
    static callRteMessageListener(rteDefinitionClassName?: string, rteDefinitionId?: string, verboseLogging?: boolean, additionalProperties?: Record<any, any>, messages?: Array<any>): string {
        return "";
    }
    static getSampleData(dataSourceId?: string, maxRows?: number): string {
        return "";
    }
    static partialPreview(importSetID?: string, rteDefinitionID?: string, rowFilter?: string, rowLimit?: number, stopAtEntity?: string): string {
        return "";
    }
    static preview(importSetID?: string, rteDefinitionID?: string, rowFilter?: string, rowLimit?: number): string {
        return "";
    }
    static rollback(rollbackContextId?: string): void {
        
    }
    static schemaFromSampleData(importSetID?: string, rowFilter?: string, rowLimit?: number): string {
        return "";
    }
    static transformRowJSON(row?: string, rteDefinitionID?: string, stopAt?: string): string {
        return "";
    }
}
