export class GlideSysListControl {
    constructor(tableName?: string) {}
    getControlID(): string {
        return "";
    }
    getEditDefaultFilter(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getListControl(tableName?: string, relatedList?: string): GlideSysListControl {
        return new GlideSysListControl();
    }
    getListControlID(): string {
        return "";
    }
    getListEditInsertRow(): boolean {
        return false;
    }
    getListEditRefQualTag(): string {
        return "";
    }
    getListEditType(): string {
        return "";
    }
    getMode(): string {
        return "";
    }
    getSearchMethod(): string {
        return "";
    }
    isHierarchicalLists(): boolean {
        return false;
    }
    isOmitEditButton(): boolean {
        return false;
    }
    isOmitEmpty(): boolean {
        return false;
    }
    isOmitFilter(): boolean {
        return false;
    }
    isOmitHeaderEmpty(): boolean {
        return false;
    }
    isOmitHeaderScript(): boolean {
        return false;
    }
    isOmitLinks(): boolean {
        return false;
    }
    isOmitNewButton(): boolean {
        return false;
    }
    isOmitNewButtonWithoutChecks(): boolean {
        return false;
    }
    isOmitScript(): boolean {
        return false;
    }
    isShowLabelsOnRow(): boolean {
        return false;
    }
    shouldOmitDrilldownLink(): boolean {
        return false;
    }
}
