"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASnapshot = void 0;
const JSONObject_1 = require("./JSONObject.js");
class PASnapshot {
    getCompareIDs(uuidString, dateStr1, dateStr2, type) {
        return "";
    }
    getCompareQuery(uuidString, dateStr1, dateStr2, type, breakdown, elements, filteredBreakdown, elementsFilter) {
        return "";
    }
    getEncodedComparedQuery(uuidString, dateStr1, dateStr2, type) {
        return "";
    }
    getEncodedQuery(uuidString, dateStr, breakdown, elements, filteredBreakdown, elementsFilter) {
        return "";
    }
    getEncodedQueryWithMultiUUID(multiElementUUID, dateStr) {
        return new JSONObject_1.JSONObject();
    }
    getIDs(uuidString, dateStr, breakdown, elements, filteredBreakdownId, elementsFilterId) {
        return "";
    }
    getQuery(uuidString, dateStr, breakdown, elements, filteredBreakdown, elementsFilter) {
        return "";
    }
    getRecordsForDateRange(uuidString, fromDateStr, toDateStr) {
        return "";
    }
    getSysIDs(indicatorSysID, periodStr, breakdownSysID, elementSysID, breakdownLevel2SysID, elementLevel2SysID, aggregateSysID) {
        return "";
    }
}
exports.PASnapshot = PASnapshot;
//# sourceMappingURL=PASnapshot.js.map