"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideAction = void 0;
const GlideURI_1 = require("../imports/GlideURI.js");
class GlideAction {
    constructor(sysId) { }
    get(name) {
        return "";
    }
    getActionSysId() {
        return "";
    }
    getCategory() {
        return "";
    }
    getGlideURI() {
        return new GlideURI_1.GlideURI();
    }
    getRedirectURL() {
        return "";
    }
    getReturnURL() {
        return "";
    }
    getValues() {
        return {};
    }
    hasGlideURI() {
        return false;
    }
    openGlideRecord(o) {
    }
    setNoPop(noPop) {
    }
    setRedirectURL(o) {
    }
    setReturnURL(o) {
    }
}
exports.GlideAction = GlideAction;
//# sourceMappingURL=GlideAction.js.map