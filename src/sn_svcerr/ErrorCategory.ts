export class ErrorCategory {
    constructor() {  }
    getIcon(): string {
        return "";
    }
    getId(): string {
        return "";
    }
    getName(): string {
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
