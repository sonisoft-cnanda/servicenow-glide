"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideRenderProperties = void 0;
const GlideSysListControl_1 = require("./GlideSysListControl.js");
const ViewManager_1 = require("./ViewManager.js");
class GlideRenderProperties {
    constructor() { }
    genEmptyForm() {
        return false;
    }
    getDeferInlineScripts() {
        return false;
    }
    getEncodedQuery() {
        return "";
    }
    getGaugeHeight() {
        return 0;
    }
    getGaugeId() {
        return "";
    }
    getGaugeName() {
        return "";
    }
    getGaugeType() {
        return "";
    }
    getGaugeWidth() {
        return 0;
    }
    getListControl() {
        return new GlideSysListControl_1.GlideSysListControl();
    }
    getMedia() {
        return "";
    }
    getParameterValue(name) {
        return "";
    }
    getParameters() {
        return {};
    }
    getQueryNoDomain() {
        return false;
    }
    getReferringURL() {
        return "";
    }
    getViewID() {
        return "";
    }
    getViewManager() {
        return new ViewManager_1.ViewManager();
    }
    getViewName() {
        return "";
    }
    getWindowID() {
        return "";
    }
    getWindowProperties() {
        return {};
    }
    isChartDetailOnReport() {
        return false;
    }
    isDefaultList() {
        return false;
    }
    isDialog() {
        return false;
    }
    isHomePage() {
        return false;
    }
    isInDevStudio() {
        return false;
    }
    isInlinePopup() {
        return false;
    }
    isInteractive() {
        return false;
    }
    isMaintainOrder() {
        return false;
    }
    isManyToMany() {
        return false;
    }
    isMultipleUpdate() {
        return false;
    }
    isOneToMany() {
        return false;
    }
    isPopup() {
        return false;
    }
    isPortal() {
        return false;
    }
    isPreview() {
        return false;
    }
    isPrint() {
        return false;
    }
    isReadOnly() {
        return false;
    }
    isRelatedList() {
        return false;
    }
    isSearch() {
        return false;
    }
    isSmallCaption() {
        return false;
    }
    setDeferInlineScripts(value) {
    }
    setDialog(dialog) {
    }
    setInlinePopup(inlinePopup) {
    }
    setListControl(listControl) {
    }
    setMedia(media) {
    }
    setPrint(b) {
    }
    setReadOnly(b) {
    }
    setSmallCaption(smallCaption) {
    }
    setView(viewName, startingViewName) {
    }
    toString() {
        return "";
    }
    useRelatedRecordManager(type) {
        return false;
    }
    useSlushbucket(type) {
        return false;
    }
}
exports.GlideRenderProperties = GlideRenderProperties;
//# sourceMappingURL=GlideRenderProperties.js.map