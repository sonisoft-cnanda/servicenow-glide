export class Agent {
    constructor() {  }
    static get(userId?: string): Agent {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getPresence(): Record<any, any> {
        return {} as any;
    }
    getUserName(): string {
        return "";
    }
    setPresence(setRequest?: any): Record<any, any> {
        return {} as any;
    }
    static testAgentEligibility(documentTable?: string, documentSysId?: string, agentSysIds?: Array<any>): Record<any, any> {
        return {} as any;
    }
    getAgentPresenceStateId(): string {
        return "";
    }
    getAgentPresenceStateName(): string {
        return "";
    }
    getCurrentPresenceStateId(): string {
        return "";
    }
    getStateIconType(): string {
        return "";
    }
}
