export class InsightACLUtilScriptable {
    constructor() {  }
    canReadInsight(): boolean {
        return false;
    }
    canReadSuggestion(type?: number): boolean {
        return false;
    }
}
