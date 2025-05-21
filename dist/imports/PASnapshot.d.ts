import { MultiElementUUID } from './MultiElementUUID.js';
import { JSONObject } from './JSONObject.js';
export declare class PASnapshot {
    getCompareIDs(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string;
    getCompareQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string;
    getEncodedComparedQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string;
    getEncodedQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string;
    getEncodedQueryWithMultiUUID(multiElementUUID?: MultiElementUUID, dateStr?: string): JSONObject;
    getIDs(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdownId?: string, elementsFilterId?: string): string;
    getQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string;
    getRecordsForDateRange(uuidString?: string, fromDateStr?: string, toDateStr?: string): string;
    getSysIDs(indicatorSysID?: string, periodStr?: string, breakdownSysID?: string, elementSysID?: string, breakdownLevel2SysID?: string, elementLevel2SysID?: string, aggregateSysID?: string): string;
}
//# sourceMappingURL=PASnapshot.d.ts.map