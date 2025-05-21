export declare class ChangeMgmt {
    DEFAULT_ACTIVE_QUERY: string;
    CR_STATE_SYNC_PROPERTY: string;
    PREVIOUS_CR_STATE: {
        CANCELLED: number;
        OPEN: number;
        RESOLVED: number;
    };
    VI_M2M_MAPPING: {
        sn_vul_vulnerable_item: string;
        sn_vul_app_vulnerable_item: string;
        sn_vul_container_image_vulnerable_item: string;
    };
    VI_VG_TABLE_MAPPING: {
        sn_vul_vulnerable_item: string;
        sn_vul_app_vulnerable_item: string;
        sn_vul_container_image_vulnerable_item: string;
    };
    STATE_SYNC_STATUS_CODE: {
        PROCESSED_AND_VG_STATE_UPDATED: number;
        PROCESSED_BUT_NO_UPDATE: number;
        NOT_PROCESSED_STATE_SYNC_IS_OFF: number;
        NOT_PROCESSED_PREVIOUS_CR_STATE_UNKNOWN: number;
        NOT_PROCESSED_NO_RECORD_FOUND_FOR_VG: number;
        UNEXPECTED_ERROR_ON_UPDATE: number;
    };
    VG_CR_STATUS: {
        NEW: string;
        IN_PROGRESS: string;
        ERROR: string;
        FINISHED: string;
    };
    constructor();
    getVIInGroup(vulGroupId: string, table?: string): number;
    canSplitTask(vulGroupId: string, vulnGroup: any): boolean;
    canAppSplitTask(vulGroupId: string): boolean;
    _appendTableName(query: string, table: string): string;
    isPatchPluginActive(): boolean;
    _ensureValidQuery(query: string, ensureActive: boolean, table: string): any;
    _setCIOnCR(crId: string, ciId: string): void;
    getVulnerableItemsPerGroup(vulGroupId: string, query: string, table?: string): number;
    getStandardChangeCategories(): any[];
    getStandardChangeTemplates(categoryId: string): any[];
    getUncategorizedChangeTemplates(): any[];
    getChangeDescriptionForVG(vgNumber: string): string;
    actionCreateChange(actionCreate: any): any;
    actionCreateChangeAsync(actionCreate: any): void;
    actionAssociateChangeAsync(actionAssociate: any): boolean;
    createNewChangeRequest(actionCreate: any, parentId: string): string;
    linkChangeRequestAndCIs(changeSysId: string, vulnGroupSysId: string, query: string): void;
    linkChangeRequestAndVIs(taskId: string, vulGroupId: string, query: string, maxNumber: number): number;
    linkChangeRequestAndVG(taskId: string, vulGroupId: string, addAssociateNote: boolean): string;
    isTaskInvalid(sysId: string): boolean;
    getCrListForPossibleAssociation(vgSysId: string): string;
    getEarliestRemediationDate(vgGroupId: string, query: string): any;
    getHighestRiskRating(vgGroupId: string, query: string): any;
    getVulnerabilitiesCount(vgGroupId: string, query: string): number;
    getCIsCount(vgGroupId: string, query: string): number;
    getGroupState(vgGroupId: string): number;
    getAggregateValues(vulGroupId: string, query: string): any;
    getSplitValues(vulGroupId: string, query: string, table?: string): any;
    isStateSyncEnabled(): boolean;
    processCrStateChangeAndSyncVgState(vulGroupId: string): any;
    getPreferredSolution(vg_sys_id: string): string;
    getPreferredSolutionCount(vg_sys_id: string): any;
    createImplementationPlan(count: number, psids: string[]): string;
    appendPatchInformation(prop: any): string;
    appendPatchInformationClassic(prop: any): string;
    getComputersFromList(computer_list: string): string;
    canSchedulePatchVG(vulGrpId: string): any;
    getVGTable(table: string): string;
    getm2mTable(table: string): string;
}
//# sourceMappingURL=ChangeMgmt.d.ts.map