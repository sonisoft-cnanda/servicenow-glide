export class WrapUpSegment {
    static createSegment(agentSysId?: string, documentSysId?: string, openedOn?: string, wrapUpConfiguration?: string, external?: boolean, segmented?: boolean, externalSegmentId?: string, configuration?: Record<any, any>): string {
        return "";
    }
    static getSegment(sysId?: string): string {
        return "";
    }
    static getSegmentByAgentAndInteraction(agentSysId?: string, interactionSysId?: string): string {
        return "";
    }
    static scheduleWrapUpSegmentTimeout(sysId?: string, timeoutDuration?: number): void {
        
    }
    static updateSegment(segmentSysId?: string, agentSysId?: string, interactionSysId?: string, externalSegmentId?: string, wrapUpCode?: string, notes?: string, confirmedOn?: string): string {
        return "";
    }
}
