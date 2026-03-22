export class ErrorCode {
    constructor() {  }
    static getById(errCodeId?: string): ErrorCode {
        return null as any;
    }
    static getByStatsId(statsSysId?: string): ErrorCode {
        return null as any;
    }
    getCategory(): string {
        return "";
    }
    getCmdbRuleId(): string {
        return "";
    }
    getCmdbRuleName(): string {
        return "";
    }
    getCode(): string {
        return "";
    }
    getComment(): string {
        return "";
    }
    getCredentialId(): string {
        return "";
    }
    getCredentialName(): string {
        return "";
    }
    getDescription(): string {
        return "";
    }
    getExecutable(): string {
        return "";
    }
    getId(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getOsId(): string {
        return "";
    }
    getOsName(): string {
        return "";
    }
    getPatternId(): string {
        return "";
    }
    getPatternName(): string {
        return "";
    }
    getPriority(): string {
        return "";
    }
    getStatsSysId(): string {
        return "";
    }
    getStatus(): string {
        return "";
    }
    getTotalAffectedItems(): number {
        return 0;
    }
    getTotalErrors(): number {
        return 0;
    }
    getTrend(): boolean {
        return false;
    }
}
