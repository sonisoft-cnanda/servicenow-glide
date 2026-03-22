export class NLQJavascriptProcessorScoped {
    constructor() {  }
    static apply(table?: string, inputQuery?: string, source?: string): Record<any, any> {
        return {} as any;
    }
    static applyMultiTable(commaSeparatedTables?: string, inputQuery?: string, source?: string): Record<any, any> {
        return {} as any;
    }
    static findDrivingTables(inputQuery?: string, source?: string): string {
        return "";
    }
    static isUserLanguageSupportedByNLQ(source?: string): boolean {
        return false;
    }
    static provideFeedback(sysId?: string, feedbackSentiment?: string, feedbackProblemCategory?: string, feedbackDetailed?: string): void {
        
    }
    static suggestCmdbDiscoverySources(word?: string, utterance?: string, source?: string): string {
        return "";
    }
    static suggestCmdbRelationTypes(word?: string, utterance?: string, source?: string): string {
        return "";
    }
    static suggestCmdbResultFilters(word?: string, utterance?: string, source?: string): string {
        return "";
    }
    static suggestColumns(word?: string, utterance?: string, commaSeparatedTables?: string, source?: string): string {
        return "";
    }
    static suggestSemanticShortcut(word?: string, utterance?: string, table?: string, source?: string): string {
        return "";
    }
    static suggestTables(word?: string, utterance?: string, commaSeparatedColumns?: string, source?: string): string {
        return "";
    }
}
