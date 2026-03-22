import { Context } from '../imports/Context'
import { Function } from '../imports/Function'

export class SensitiveDataAnalyzer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    analyzeText(input?: string, categoryIds?: string[]): string {
        return "";
    }
    detectEntities(input?: string, categoryIds?: string[]): string {
        return "";
    }
    isTextSensitive(input?: string, categoryIds?: string[]): boolean {
        return false;
    }
    maskText(input?: string, categoryIds?: string[], prefix?: string): string {
        return "";
    }
    unmaskText(maskedContentJSON?: string): string {
        return "";
    }
}
