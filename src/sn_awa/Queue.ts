export class Queue {
    constructor() {  }
    static get(queueId?: string): Queue {
        return null as any;
    }
    getAvailableAgentCount(): number {
        return 0;
    }
    getExternalId(): string {
        return "";
    }
    getExternalRequestId(): string {
        return "";
    }
    getId(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getNumber(): string {
        return "";
    }
    getServiceChannelSysId(): string {
        return "";
    }
    route(options?: any): boolean {
        return false;
    }
}
