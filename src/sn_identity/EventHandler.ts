export class EventHandler {
    constructor() {  }
    ack(msgId?: string): Record<any, any> {
        return {} as any;
    }
    claimNext(): Record<any, any> {
        return {} as any;
    }
    getMessages(): Array<any> {
        return [];
    }
    nack(msgId?: string, terminate?: boolean): Record<any, any> {
        return {} as any;
    }
    setChannel(p2pChannelId?: string): void {
        
    }
}
