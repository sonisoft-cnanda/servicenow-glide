import { MultiElementUUID } from './MultiElementUUID';
import { JSONObject } from './JSONObject';

export class PASnapshot {
    getCompareIDs(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string {
        return "";
    }
    getCompareQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string {
        return "";
    }
    getEncodedComparedQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string {
        return "";
    }
    getEncodedQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string {
        return "";
    }
    getEncodedQueryWithMultiUUID(multiElementUUID?: MultiElementUUID, dateStr?: string): JSONObject {
        return new JSONObject();
    }
    getIDs(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdownId?: string, elementsFilterId?: string): string {
        return "";
    }
    getQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string {
        return "";
    }
    getRecordsForDateRange(uuidString?: string, fromDateStr?: string, toDateStr?: string): string {
        return "";
    }
    getSysIDs(indicatorSysID?: string, periodStr?: string, breakdownSysID?: string, elementSysID?: string, breakdownLevel2SysID?: string, elementLevel2SysID?: string, aggregateSysID?: string): string {
        return "";
    }
}
