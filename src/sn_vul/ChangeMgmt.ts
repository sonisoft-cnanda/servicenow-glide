export class ChangeMgmt {
    public DEFAULT_ACTIVE_QUERY: string = "active=true";
    public CR_STATE_SYNC_PROPERTY: string = 'sn_vul.cr_state_synch';

    public PREVIOUS_CR_STATE = {
        CANCELLED: -1,
        OPEN: 0,
        RESOLVED: 1
    };

    public VI_M2M_MAPPING = {
        sn_vul_vulnerable_item: "sn_vul_m2m_vul_group_item",
        sn_vul_app_vulnerable_item: "sn_vul_app_m2m_vul_group_item",
        sn_vul_container_image_vulnerable_item: "sn_vul_container_m2m_vul_group_item"
    };

    public VI_VG_TABLE_MAPPING = {
        sn_vul_vulnerable_item: "sn_vul_vulnerability",
        sn_vul_app_vulnerable_item: "sn_vul_app_vulnerability",
        sn_vul_container_image_vulnerable_item: "sn_vul_container_vulnerability"
    };

    public STATE_SYNC_STATUS_CODE = {
        PROCESSED_AND_VG_STATE_UPDATED: 1,
        PROCESSED_BUT_NO_UPDATE: 2,
        NOT_PROCESSED_STATE_SYNC_IS_OFF: -1,
        NOT_PROCESSED_PREVIOUS_CR_STATE_UNKNOWN: -3,
        NOT_PROCESSED_NO_RECORD_FOUND_FOR_VG: -4,
        UNEXPECTED_ERROR_ON_UPDATE: -10
    };

    public VG_CR_STATUS = {
        NEW: "new",
        IN_PROGRESS: "in_progress",
        ERROR: "error",
        FINISHED: "finished"
    };

    constructor() {}

    public getVIInGroup(vulGroupId: string, table?: string): number {
        return 0;
    }

    public canSplitTask(vulGroupId: string, vulnGroup: any): boolean {
        return false;
    }

    public canAppSplitTask(vulGroupId: string): boolean {
        return false;
    }
    public _appendTableName(query:string, table: string): string {
        return "";
    }

    public isPatchPluginActive() : boolean{
        return true;
    }

    public _ensureValidQuery(query:string, ensureActive:boolean, table:string)  : any {

    }

    public _setCIOnCR(crId:string, ciId:string) : void{
        
    }

    public getVulnerableItemsPerGroup(vulGroupId: string, query: string, table?: string): number {
        return 0;
    }

    public getStandardChangeCategories(): any[] {
        return [];
    }

    public getStandardChangeTemplates(categoryId: string): any[] {
        return [];
    }

    public getUncategorizedChangeTemplates(): any[] {
        return [];
    }

    public getChangeDescriptionForVG(vgNumber: string): string {
        return "";
    }

    public actionCreateChange(actionCreate: any): any {
        return null;
    }

    public actionCreateChangeAsync(actionCreate: any): void {}

    public actionAssociateChangeAsync(actionAssociate: any): boolean {
        return false;
    }

    public createNewChangeRequest(actionCreate: any, parentId: string): string {
        return "";
    }

    public linkChangeRequestAndCIs(changeSysId: string, vulnGroupSysId: string, query: string): void {}

    public linkChangeRequestAndVIs(taskId: string, vulGroupId: string, query: string, maxNumber: number): number {
        return 0;
    }

    public linkChangeRequestAndVG(taskId: string, vulGroupId: string, addAssociateNote: boolean): string {
        return "";
    }

    public isTaskInvalid(sysId: string): boolean {
        return false;
    }

    public getCrListForPossibleAssociation(vgSysId: string): string {
        return "";
    }

    public getEarliestRemediationDate(vgGroupId: string, query: string): any {
        return null;
    }

    public getHighestRiskRating(vgGroupId: string, query: string): any {
        return null;
    }

    public getVulnerabilitiesCount(vgGroupId: string, query: string): number {
        return 0;
    }

    public getCIsCount(vgGroupId: string, query: string): number {
        return 0;
    }

    public getGroupState(vgGroupId: string): number {
        return 0;
    }

    public getAggregateValues(vulGroupId: string, query: string): any {
        return null;
    }

    public getSplitValues(vulGroupId: string, query: string, table?: string): any {
        return null;
    }

    public isStateSyncEnabled(): boolean {
        return false;
    }

    public processCrStateChangeAndSyncVgState(vulGroupId: string): any {
        return null;
    }

    public getPreferredSolution(vg_sys_id: string): string {
        return "";
    }

    public getPreferredSolutionCount(vg_sys_id: string): any {
        return null;
    }

    public createImplementationPlan(count: number, psids: string[]): string {
        return "";
    }

    public appendPatchInformation(prop: any): string {
        return "";
    }

    public appendPatchInformationClassic(prop: any): string {
        return "";
    }

    public getComputersFromList(computer_list: string): string {
        return "";
    }

    public canSchedulePatchVG(vulGrpId: string): any {
        return null;
    }

    public getVGTable(table: string): string {
        return "";
    }

    public getm2mTable(table: string): string {
        return "";
    }
}