"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideDate = void 0;
const GlideTime_1 = require("../imports/GlideTime.js");
const GlideDateTime_1 = require("../imports/GlideDateTime.js");
const Calendar_1 = require("../imports/Calendar.js");
const Counter_1 = require("../imports/Counter.js");
const TimeZone_1 = require("../imports/TimeZone.js");
const GlideDuration_1 = require("../imports/GlideDuration.js");
class GlideDate {
    constructor(date) { }
    add(value) {
    }
    addDays(amount) {
    }
    addDaysLocalTime(amount) {
    }
    addDaysUTC(amount) {
    }
    addMonths(amount) {
    }
    addMonthsLocalTime(amount) {
    }
    addMonthsUTC(amount) {
    }
    addSeconds(value) {
    }
    addWeeks(amount) {
    }
    addWeeksLocalTime(amount) {
    }
    addWeeksUTC(amount) {
    }
    addYears(amount) {
    }
    addYearsLocalTime(amount) {
    }
    addYearsUTC(amount) {
    }
    after(gdt) {
        return false;
    }
    before(gdt) {
        return false;
    }
    compareTo(o) {
        return 0;
    }
    equals(o) {
        return false;
    }
    excludeZFromFormat(format) {
        return "";
    }
    getByFormat(format) {
        return "";
    }
    getCalendarInTimeZone(timeZone) {
        return new Calendar_1.Calendar();
    }
    getCounter() {
        return new Counter_1.Counter();
    }
    getDSTOffset() {
        return 0;
    }
    getDate() {
        return new GlideDate();
    }
    getDayOfMonth() {
        return 0;
    }
    getDayOfMonthLocalTime() {
        return 0;
    }
    getDayOfMonthNoTZ() {
        return 0;
    }
    getDayOfMonthUTC() {
        return 0;
    }
    getDayOfWeek() {
        return 0;
    }
    getDayOfWeekLocalTime() {
        return 0;
    }
    getDayOfWeekUTC() {
        return 0;
    }
    getDaysInMonth() {
        return 0;
    }
    getDaysInMonthLocalTime() {
        return 0;
    }
    getDaysInMonthUTC() {
        return 0;
    }
    getDisplayValue() {
        return "";
    }
    getDisplayValueInternal() {
        return "";
    }
    getDisplayValueLang(style, language) {
        return "";
    }
    getDisplayValueWithoutTZ() {
        return "";
    }
    getErrorMsg() {
        return "";
    }
    getInternalFormattedLocalTime() {
        return "";
    }
    getInternalMidnight(iday) {
        return new GlideDateTime_1.GlideDateTime();
    }
    getLocalDate() {
        return new GlideDate();
    }
    getLocalTime() {
        return new GlideTime_1.GlideTime();
    }
    getMonth() {
        return 0;
    }
    getMonthLocalTime() {
        return 0;
    }
    getMonthNoTZ() {
        return 0;
    }
    getMonthUTC() {
        return 0;
    }
    getNumericValue() {
        return 0;
    }
    getRaw() {
        return new Date();
    }
    getSpanTime(dayofweek) {
        return new GlideTime_1.GlideTime();
    }
    getTZOffset() {
        return 0;
    }
    getTime() {
        return new GlideTime_1.GlideTime();
    }
    getUTCMidnight(dayofweek) {
        return new GlideDateTime_1.GlideDateTime();
    }
    getUTCValue() {
        return "";
    }
    getUserFormattedLocalTime() {
        return "";
    }
    getUserTimeZone() {
        return new TimeZone_1.TimeZone();
    }
    getValue() {
        return "";
    }
    getWeekOfYearLocalTime() {
        return 0;
    }
    getWeekOfYearUTC() {
        return 0;
    }
    getXMLValue() {
        return "";
    }
    getYear() {
        return 0;
    }
    getYearLocalTime() {
        return 0;
    }
    getYearNoTZ() {
        return 0;
    }
    getYearUTC() {
        return 0;
    }
    hasDate() {
        return false;
    }
    hashCode() {
        return 0;
    }
    isDST() {
        return false;
    }
    isValid() {
        return false;
    }
    onOrAfter(gdt) {
        return false;
    }
    onOrBefore(gdt) {
        return false;
    }
    setDayOfMonth(day) {
    }
    setDayOfMonthLocalTime(day) {
    }
    setDayOfMonthUTC(day) {
    }
    setDebugTZ(debugTZ) {
    }
    setDisplayValue(value, format) {
    }
    setDisplayValueInternal(value) {
    }
    setDisplayValueInternalWithAlternates(value) {
    }
    setDisplayValueLang(asDisplayed, style, language) {
    }
    setGlideDateTime(g) {
    }
    setInitialValue(value) {
    }
    setMonth(month) {
    }
    setMonthLocalTime(month) {
    }
    setMonthUTC(month) {
    }
    setNumericValue(l) {
    }
    setTZ(tz) {
    }
    setTimeZone(timeZoneAsString) {
        return false;
    }
    setValue(number) {
    }
    setValueUTC(dt, format) {
    }
    setXMLValue(xml) {
    }
    setYear(year) {
    }
    setYearLocalTime(year) {
    }
    setYearUTC(year) {
    }
    subtract(start, end) {
        return new GlideDuration_1.GlideDuration();
    }
    toString() {
        return "";
    }
}
exports.GlideDate = GlideDate;
//# sourceMappingURL=GlideDate.js.map