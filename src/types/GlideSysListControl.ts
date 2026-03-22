export class GlideSysListControl {
    constructor();
    constructor(tableName: string);
    constructor(...args: any[]) {  }
    getControlID(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    isOmitEditButton(): boolean {
        return false;
    }
    isOmitNewButton(): boolean {
        return false;
    }
    isOmitNewButtonWithoutChecks(): boolean {
        return false;
    }
    isOmitEmpty(): boolean {
        return false;
    }
    isOmitHeaderEmpty(): boolean {
        return false;
    }
    isOmitScript(): boolean {
        return false;
    }
    isOmitHeaderScript(): boolean {
        return false;
    }
    isOmitFilter(): boolean {
        return false;
    }
    isOmitLinks(): boolean {
        return false;
    }
    isShowLabelsOnRow(): boolean {
        return false;
    }
    getSearchMethod(): string {
        return "";
    }
    getMode(): string {
        return "";
    }
    getListControlID(): string {
        return "";
    }
    shouldOmitDrilldownLink(): boolean {
        return false;
    }
    isHierarchicalLists(): boolean {
        return false;
    }
    getListEditInsertRow(): boolean {
        return false;
    }
    getEditDefaultFilter(): string {
        return "";
    }
    getListEditType(): string {
        return "";
    }
    getListEditRefQualTag(): string {
        return "";
    }
    static getListControl(tableName: string, relatedList: string): GlideSysListControl {
        return null as any;
    }
}
