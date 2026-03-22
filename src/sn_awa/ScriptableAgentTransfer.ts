export class ScriptableAgentTransfer {
    static blindTransferToAgent(documentSysID?: string, username?: string): boolean {
        return false;
    }
    static consultTransferToAgent(documentSysID?: string, username?: string): boolean {
        return false;
    }
    static consultTransferToQueue(documentSysID?: string, queueNumber?: string): boolean {
        return false;
    }
    static endConsult(documentSysID?: string, handOver?: boolean): boolean {
        return false;
    }
    static getAvailableAgents(documentSysID?: string, query?: string, limit?: number): Array<any> {
        return [];
    }
    static getAvailableQueues(documentSysID?: string, query?: string, limit?: number): Array<any> {
        return [];
    }
    static transferToAgent(documentSysID?: string, username?: string): boolean {
        return false;
    }
    static transferToQueue(documentSysID?: string, queueNumber?: string): boolean {
        return false;
    }
}
