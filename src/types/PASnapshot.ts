import { MultiElementUUID } from "../imports/MultiElementUUID";

export class PASnapshot {
    static getCompareIDs(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string {
        return "";
    }
    static getCompareQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string {
        return "";
    }
    static getEncodedComparedQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string {
        return "";
    }
    static getEncodedQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string {
        return "";
    }
    static getEncodedQueryWithMultiUUID(multiElementUUID?: MultiElementUUID, dateStr?: string): any {
        return null as any;
    }
    static getIDs(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdownId?: string, elementsFilterId?: string): string {
        return "";
    }
    static getQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string {
        return "";
    }
    static getRecordsForDateRange(uuidString?: string, fromDateStr?: string, toDateStr?: string): string {
        return "";
    }
    static getSysIDs(indicatorSysID?: string, periodStr?: string, breakdownSysID?: string, elementSysID?: string, breakdownLevel2SysID?: string, elementLevel2SysID?: string, aggregateSysID?: string): string {
        return "";
    }
}
