export class AntiVirusOnDemandAdvisor {
    static getAvailabilityAfterUpload(attachmentSysID?: string, ignoreTableExclusion?: boolean): Record<any, any> {
        return {} as any;
    }
    static getAvailabilityForDownload(attachmentSysID?: string): Record<any, any> {
        return {} as any;
    }
    static getAvailabilityOnUpload(attachmentSysID?: string, pushInfectedMessage?: boolean): Record<any, any> {
        return {} as any;
    }
    static isAdviceRequired(tableName?: string): boolean {
        return false;
    }
}
