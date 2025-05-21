"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSchedule = void 0;
const GlideDateTime_1 = require("./GlideDateTime.js");
const GlideDuration_1 = require("./GlideDuration.js");
const ScheduleTimeSpan_1 = require("./ScheduleTimeSpan.js");
const ScheduleTimeMap_1 = require("./ScheduleTimeMap.js");
const TimeZone_1 = require("./TimeZone.js");
class GlideSchedule {
    constructor(sysID, timeZone) { }
    add(startDate, offset, timeZone) {
        return new GlideDateTime_1.GlideDateTime();
    }
    addOtherSchedule0(otherSchedule, includeFlag) {
        return new GlideSchedule();
    }
    addTimeSpan(grSpan) {
        return new ScheduleTimeSpan_1.ScheduleTimeSpan();
    }
    addTimeSpans(grSpans) {
    }
    addTimeSpansExcluded(grSpans) {
    }
    duration(startDate, endDate, timeZone) {
        return new GlideDuration_1.GlideDuration();
    }
    excludeTimeSpan(grSpan, timeZone) {
    }
    fetchTimeMap(startDate, endDate, timeZone, compressTimeMap) {
        return new ScheduleTimeMap_1.ScheduleTimeMap();
    }
    fetchTimeMapWithExcludes(startDate, endDate, timeZone, compressTimeMap) {
        return new ScheduleTimeMap_1.ScheduleTimeMap();
    }
    getDaysOfWeek() {
        return "";
    }
    getDaysOfWeekIgnoringExcludedSpans() {
        return "";
    }
    getID() {
        return "";
    }
    getName() {
        return "";
    }
    getSpans(startDate, endDate) {
        return new Array();
    }
    getTZ() {
        return new TimeZone_1.TimeZone();
    }
    getTimeMap(startDate, endDate, timeZone) {
        return new ScheduleTimeMap_1.ScheduleTimeMap();
    }
    getTimeZone() {
        return "";
    }
    isInSchedule(time, timeZone) {
        return false;
    }
    isValid() {
        return false;
    }
    load(sysID, timeZone, excludeSpanID) {
    }
    overlapsWith(spanGR, timeZone) {
        return new ScheduleTimeMap_1.ScheduleTimeMap();
    }
    overlapsWithAfterStart(spanGR, timeZone, startGDT) {
        return new ScheduleTimeMap_1.ScheduleTimeMap();
    }
    setTimeZone(tz) {
    }
    whenLast(time) {
        return 0;
    }
    whenNext(time, timeZone) {
        return 0;
    }
}
exports.GlideSchedule = GlideSchedule;
//# sourceMappingURL=GlideSchedule.js.map