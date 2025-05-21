import { GlideRecord } from '@servicenow/glide';
export declare class CIIdentify {
    private _PROP_IGNORE_NULL_VALUES;
    private _IGNORE_CLASS_LIST;
    private _PRODUCT_MODEL;
    private util;
    private autoPromoteFields;
    private autoPromoteFieldsJson;
    private filterDecommissionCi;
    private ignoreClassArr;
    private ignoreClass;
    constructor();
    getCILookupRules(source: string): any;
    private _makeObjectFromRule;
    identify(source: string, srcValues: any, isReqLookupRule: boolean, hostRecord: GlideRecord): any;
    getLookupScriptByMethod(method: string): string;
    private _getLookupScriptByMethod;
    getLookupTypeScriptNames(): string;
    private _getLookupTypeScriptNames;
    private _autoPromoteCIID;
    private _autoPromoteCIRecord;
    private _autoPromoteCI;
    private _getAutoPromoteField;
    private _identifyViaFieldMatching;
    private _identifyViaScript;
    private _identifyViaReferenceScript;
    private _queryMatch;
    private _logDupWhileIdentifying;
    private _cacheCi;
    private _filterCI;
    private _isOrphan;
    private _isCIDecommissioned;
    private _getIgnoreClass;
    private _checkCIIgnored;
    type(): string;
}
//# sourceMappingURL=CIIdentify.d.ts.map