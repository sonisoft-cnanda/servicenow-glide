export declare class GlideSystemUtilScript {
    _getScriptError(script?: string, scopeId?: string): string;
    _getScriptErrorForTable(script?: string, scopeId?: string, table?: string): string;
    getScriptError(script?: string): string;
    getScriptErrorFromScope(script?: string, scopeId?: string): string;
    isESLatest(): boolean;
    isValidScript(script?: string): boolean;
    isValidScriptFromScope(script?: string, scopeId?: string): boolean;
    loadBatchScript(fileName?: string): void;
    scheduleScript(scriptName?: string, currentObj?: any, parmString?: any): void;
}
//# sourceMappingURL=GlideSystemUtilScript.d.ts.map