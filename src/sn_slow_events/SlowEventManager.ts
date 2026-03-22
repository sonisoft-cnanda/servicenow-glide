export class SlowEventManager {
    constructor() {  }
    static getSlowEventQueueName(): string {
        return "";
    }
    static isSlowEventManagementEnabled(): boolean {
        return false;
    }
    redirectEvents(): void {
        
    }
    routeToDefaultQueue(eventName: string): boolean {
        return false;
    }
    routeToSlowQueue(eventName: string): boolean {
        return false;
    }
}
