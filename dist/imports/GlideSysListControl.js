"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSysListControl = void 0;
class GlideSysListControl {
    constructor(tableName) { }
    getControlID() {
        return "";
    }
    getEditDefaultFilter() {
        return "";
    }
    getLabel() {
        return "";
    }
    getListControl(tableName, relatedList) {
        return new GlideSysListControl();
    }
    getListControlID() {
        return "";
    }
    getListEditInsertRow() {
        return false;
    }
    getListEditRefQualTag() {
        return "";
    }
    getListEditType() {
        return "";
    }
    getMode() {
        return "";
    }
    getSearchMethod() {
        return "";
    }
    isHierarchicalLists() {
        return false;
    }
    isOmitEditButton() {
        return false;
    }
    isOmitEmpty() {
        return false;
    }
    isOmitFilter() {
        return false;
    }
    isOmitHeaderEmpty() {
        return false;
    }
    isOmitHeaderScript() {
        return false;
    }
    isOmitLinks() {
        return false;
    }
    isOmitNewButton() {
        return false;
    }
    isOmitNewButtonWithoutChecks() {
        return false;
    }
    isOmitScript() {
        return false;
    }
    isShowLabelsOnRow() {
        return false;
    }
    shouldOmitDrilldownLink() {
        return false;
    }
}
exports.GlideSysListControl = GlideSysListControl;
//# sourceMappingURL=GlideSysListControl.js.map