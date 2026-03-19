export class CSVParser {
    constructor() {}
    parseLineToArray(csv?: string, delimiter?: string, quoteCharacter?: string): Array<any> {
        return new Array();
    }
    parseLineToObject(csv?: string, headers?: Array<any>, delimiter?: string, quoteCharacter?: string): Record<any, any> {
        return {};
    }
}
