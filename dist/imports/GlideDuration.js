"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideDuration = void 0;
const GlideTime_1 = require("./GlideTime.js");
const GlideDateTime_1 = require("./GlideDateTime.js");
const Calendar_1 = require("./Calendar.js");
const Counter_1 = require("./Counter.js");
const GlideDate_1 = require("./GlideDate.js");
const TimeZone_1 = require("./TimeZone.js");
class GlideDuration {
    constructor(asDisplayed) { }
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
        return new GlideDate_1.GlideDate();
    }
    getDayOfMonth() {
        return 0;
    }
    getDayOfMonthLocalTime() {
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
    getDayPart() {
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
    getDurationValue() {
        return "";
    }
    getErrorMsg() {
        return "";
    }
    getHourLocalTime() {
        return 0;
    }
    getHourOfDayLocalTime() {
        return 0;
    }
    getHourOfDayUTC() {
        return 0;
    }
    getHourUTC() {
        return 0;
    }
    getInternalFormattedLocalTime() {
        return "";
    }
    getInternalMidnight(iday) {
        return new GlideDateTime_1.GlideDateTime();
    }
    getLocalDate() {
        return new GlideDate_1.GlideDate();
    }
    getLocalTime(target) {
        return new GlideTime_1.GlideTime();
    }
    getMinutesLocalTime() {
        return 0;
    }
    getMinutesUTC() {
        return 0;
    }
    getMonth() {
        return 0;
    }
    getMonthLocalTime() {
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
    getRoundedDayPart() {
        return 0;
    }
    getSeconds() {
        return 0;
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
    isShowTimerAlert() {
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
        return new GlideDuration();
    }
    toString() {
        return "";
    }
}
exports.GlideDuration = GlideDuration;
//# sourceMappingURL=GlideDuration.js.map