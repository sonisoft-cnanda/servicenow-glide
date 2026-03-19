export class ResponseTemplate {
    constructor() {}
    query(tableName?: string, recordId?: string, searchTerm?: string, limit?: number, offset?: number, includeEvaluatedBody?: boolean, errorFormat?: string): string {
        return "";
    }
    render(templateId?: string, tableName?: string, recordId?: string, errorFormat?: string): string {
        return "";
    }
    setChannel(channelValue?: string): boolean {
        return false;
    }
}
