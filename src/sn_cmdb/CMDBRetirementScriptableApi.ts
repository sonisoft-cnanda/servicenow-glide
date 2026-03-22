import { GlideQueryCondition } from "../types";

export class CMDBRetirementScriptableApi {
    static getAllRetirementDefinitions(): any {
        return null as any;
    }
    static getFullEncodedQuery(tableStr?: string, policyType?: string): string {
        return "";
    }
    static getFullEncodedQueryCombined(tableStr?: string, policyTypeId?: string, encodedQuery?: string, table?: string): string {
        return "";
    }
    static getFullEncodedQueryCondition(tableStr?: string, policyType?: string): GlideQueryCondition {
        return null as any;
    }
    static getIsRetired(sysId?: string): boolean {
        return false;
    }
    static getRetirementDefinition(sysId?: string): string {
        return "";
    }
    static getRetirementDefinitionForClass(table?: string): string {
        return "";
    }
    static getSimpleEncodedQuery(table?: string): string {
        return "";
    }
}
