export class QuickAction {
    static filterReadable(items?: Array<any>, itemFieldName?: string, tableName?: string, recordColumnName?: string, userId?: string): Array<any> {
        return [];
    }
    static getThumbnailID(attachmentId?: string, width?: number, height?: number): string {
        return "";
    }
    static invokeAction(table?: string, sysID?: string, message?: string, context?: string, recordClassName?: string): string {
        return "";
    }
    static loadActionToolbarControls(documentTable?: string, documentSysID?: string): string {
        return "";
    }
    static loadActions(documentTable?: string, documentSysID?: string, recordClassName?: string): string {
        return "";
    }
    static searchParams(commandName?: string, query?: string, table?: string, sysID?: string, index?: number, paginationToken?: string): string {
        return "";
    }
    static validateIconImage(toolbarControlID?: string): boolean {
        return false;
    }
}
