export declare class GlideSecurityUtils {
    cleanURL(uri?: string): string;
    enforceRelativeURL(uri?: string): string;
    enforceRelativeUrlAndCleanJavascript(uri?: string): string;
    enforceRelativeUrlAndCleanJavascriptLogoutRedirect(uri?: string): string;
    escapeScript(script?: string): string;
    isInFipsApprovedOnlyMode(): boolean;
    isURLWhiteListed(uri?: string): boolean;
    isURLWhiteListedStrict(uri?: string): boolean;
}
//# sourceMappingURL=GlideSecurityUtils.d.ts.map