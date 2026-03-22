import { GlideRecord } from "../types/GlideRecord";

export class ScriptableUAHashUtil {
    static getHash(enforceNilCheck?: boolean, values?: any): string {
        return "";
    }
    static getHashForCustomMetricDefinition(eventID?: string, streamID?: string): string {
        return "";
    }
    static getHashForFamilyUsageDefinition(familyID?: string, metricMetadata?: string, schedule?: string, countType?: string): string {
        return "";
    }
    static getHashForFilteredDefinition(tableName?: string, encodedQuery?: string, schedule?: string, countType?: string, aggType?: string, aggCol?: string, groupBy?: string): string {
        return "";
    }
    static getHashForFilteredDefinitionWithJoin(tableName?: string, encodedQuery?: string, schedule?: string, countType?: string, aggType?: string, aggCol?: string, groupBy?: string, joinTableName?: string, joinColumn?: string, joinTableColumn?: string, joinTableQuery?: string, segmentByCustomizationStr?: string): string {
        return "";
    }
    static getHashForGCFDefinition(category?: string, instrumentationPoint?: string, instrumentationEvent?: string, definitionBuckets?: any, gcfFilterCondition?: string, aggregationType?: string, aggregationColumn?: string): string {
        return "";
    }
    static getHashForGRDefinition(definitionGR?: GlideRecord): string {
        return "";
    }
    static getHashForLETDefinition(eventID?: string, appID?: string): string {
        return "";
    }
    static getHashForPAFDefinition(streamID?: string, eventType?: string, metadataVersion?: string, schedule?: string, countType?: string): string {
        return "";
    }
    static getHashForScriptedDefinition(script?: string, schedule?: string, countType?: string): string {
        return "";
    }
}
