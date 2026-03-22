export class DataPatternValidator {
    constructor() {  }
    exactMatches(pattern: string, input: string): boolean {
        return false;
    }
    isValid(pattern: string): boolean {
        return false;
    }
    keywordMatches(pattern: string, input: string, keywords: string, keywordProximity: number): boolean {
        return false;
    }
    matches(pattern: string, input: string): boolean {
        return false;
    }
}
