export class ScopedAnalyticsFramework {
    static close(name: string): number {
        return 0;
    }
    static isBlocked(streamId: string, eventType: string): boolean {
        return false;
    }
    static isDisabled(): boolean {
        return false;
    }
    static open(name: string): number {
        return 0;
    }
    static send(streamId: string, obfuscationList: any, sample: any, columnList: any): number {
        return 0;
    }
    static sendEventAggJSON(streamId: string, evtAggConfigs: any, obfuscationList: any, sample: any): string {
        return "";
    }
    static sendJSON(streamId: string, obfuscationList: any, sample: string): number {
        return 0;
    }
}
