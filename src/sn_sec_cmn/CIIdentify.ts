import { GlideRecord, GlideScopedEvaluator, gs } from '@servicenow/glide';
import { SecCommonUtil } from './SecCommonUtil';

export class CIIdentify {
    private _PROP_IGNORE_NULL_VALUES: boolean;
    private _IGNORE_CLASS_LIST: string[];
    private _PRODUCT_MODEL: boolean;
    private util: any;
    private autoPromoteFields: string;
    private autoPromoteFieldsJson: any;
    private filterDecommissionCi: string;
    private ignoreClassArr: string[];
    private ignoreClass: string;

    constructor() {
        this._PROP_IGNORE_NULL_VALUES = true;
        this._IGNORE_CLASS_LIST = ["sn_sec_cmn_unmatched_ci", "cmdb_ci_unclassed_hardware", "cmdb_ci_incomplete_ip"];
        this._PRODUCT_MODEL = false;
        this.util = new SecCommonUtil();
        this.autoPromoteFields = global.SecProperty.getProperty("sn_sec_cmn.autoPromoteFields", "");
        if (this.autoPromoteFields) {
            this.autoPromoteFieldsJson = JSON.parse(this.autoPromoteFields);
        } else {
            this.autoPromoteFieldsJson = {
                "dscy_switchport": "cmdb_ci",
                "cmdb_ci_network_adapter": "cmdb_ci",
                "cmdb_ci_nic": "cmdb_ci",
                "cmdb_ci_ip_address": [
                    "owned_by_cmdb_ci",
                    "nic"
                ],
                "cmdb_ci_vmware_nic": "cmdb_ci"
            };
        }
        this.filterDecommissionCi = global.SecProperty.getProperty("sn_sec_cmn.filterOutDecommissionedCI", "true");
        this.ignoreClassArr = this._getIgnoreClass();
        this.ignoreClass = this.ignoreClassArr.join(",");
    }

    public getCILookupRules(source: string): any {
        return null;
    }

    private _makeObjectFromRule(grRule: GlideRecord): GlideRecord {
        return new GlideRecord(grRule.getTableName());
    }

    public identify(source: string, srcValues: any, isReqLookupRule: boolean, hostRecord: GlideRecord): any {
        return null;
    }

    public getLookupScriptByMethod(method: string): string {
        return this._getLookupScriptByMethod(method);
    }

    private _getLookupScriptByMethod(method: string): string {
        return '';
    }

    public getLookupTypeScriptNames(): string {
        return this._getLookupTypeScriptNames();
    }

    private _getLookupTypeScriptNames(): string {
        return '';
    }

    private _autoPromoteCIID(ciId: string): string {
        return '';
    }

    private _autoPromoteCIRecord(grCI: GlideRecord): string {
        return '';
    }

    private _autoPromoteCI(ciId: string, grCI: GlideRecord): string {
        return '';
    }

    private _getAutoPromoteField(currentRecord: GlideRecord): string {
        return '';
    }

    private _identifyViaFieldMatching(rule: GlideRecord, srcValues: any): any {
        return null;
    }

    private _identifyViaScript(rule: GlideRecord, srcValues: any): any {
        return null;
    }

    private _identifyViaReferenceScript(rule: GlideRecord, srcValues: any): any {
        return null;
    }

    private _queryMatch(gr: GlideRecord, rule: GlideRecord, srcValues: any): GlideRecord | null {
        return null;
    }

    private _logDupWhileIdentifying(chosenCI: GlideRecord, rule: GlideRecord, srcValues: any): void {}

    private _cacheCi(gr: GlideRecord): GlideRecord | null {
        return null;
    }

    private _filterCI(mainCi: string, ciList: string[]): any {
        return null;
    }

    private _isOrphan(gr: GlideRecord): boolean {
        return false;
    }

    private _isCIDecommissioned(gr: GlideRecord, filterDecommissionCi: string): boolean {
        return false;
    }

    private _getIgnoreClass(): string[] {
        return [];
    }

    private _checkCIIgnored(gr: GlideRecord, ignoreClass: string[]): boolean {
        return false;
    }

    public type(): string {
        return 'CIIdentify';
    }
}