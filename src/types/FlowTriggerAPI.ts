import { GlideRecord } from "./GlideRecord";

export class FlowTriggerAPI {
    constructor() {  }
    static createRecordTrigger(current: GlideRecord): void {
        
    }
    static createRestTrigger(current: GlideRecord): void {
        
    }
    static createTimerTrigger(current: GlideRecord): void {
        
    }
    static deleteRecordTrigger(identifier: string): void {
        
    }
    static deleteTimerTrigger(identifier: string): void {
        
    }
    static fireCatalogTrigger(flowName: string, current: GlideRecord): void {
        
    }
    static fireKnowledgeTrigger(flowName: string, current: GlideRecord): void {
        
    }
    static fireRestTrigger(id: string, body: string, headers: any): void {
        
    }
    static fireSlaTaskTrigger(flowName: string, current: GlideRecord, inputs: any): string {
        return "";
    }
    static fireTimerTrigger(id: string): void {
        
    }
    static getSysTrigger(uniqueId: string): GlideRecord {
        return null as any;
    }
    syncTriggerRecords(triggerTemplateGR: GlideRecord): void {
        
    }
}
