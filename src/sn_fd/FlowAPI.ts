import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { FlowRunner } from "./FlowRunner";
import { ScriptableDataStream } from "./ScriptableDataStream";
import { Scriptable } from "../imports/Scriptable";
import { GlideRecord } from "../types/GlideRecord";

export class FlowAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    static cancel(contextId?: string, reason?: string): void {
        
    }
    static compactSysJsonChunk(): boolean {
        return false;
    }
    static compile(flowSysId?: string): string {
        return "";
    }
    static eSignatureAudit(approverId?: string, approvalRecord?: any): boolean {
        return false;
    }
    static executeAction(scopedActionName?: string, scriptInputs?: Scriptable, timeoutMs?: number): Record<any, any> {
        return {} as any;
    }
    static executeActionQuick(scopedActionName?: string, scriptInputs?: Scriptable, timeoutMs?: number): Record<any, any> {
        return {} as any;
    }
    static executeDataStreamAction(scopedActionName?: string, scriptInputs?: Scriptable, timeoutMs?: number): ScriptableDataStream {
        return null as any;
    }
    static executeFlow(scopedFlowName?: string, scriptInputs?: Scriptable, timeoutMs?: number): void {
        
    }
    static executeFlowQuick(scopedFlowName?: string, scriptInputs?: Scriptable, timeoutMs?: number): void {
        
    }
    static executeSubflow(scopedSubflowName?: string, scriptInputs?: Scriptable, timeoutMs?: number): Record<any, any> {
        return {} as any;
    }
    static executeSubflowQuick(scopedSubflowName?: string, scriptInputs?: Scriptable, timeoutMs?: number): Record<any, any> {
        return {} as any;
    }
    static getApproverUsername(userSysId?: string): string {
        return "";
    }
    static getErrorMessage(contextId?: string): string {
        return "";
    }
    static getFlowStages(scopedFlowName?: string): string {
        return "";
    }
    static getOutputs(contextId?: string): Record<any, any> {
        return {} as any;
    }
    static getRunner(): FlowRunner {
        return null as any;
    }
    static getRunningFlows(sourceRecord?: GlideRecord, queryChildContexts?: boolean, flowName?: string): GlideRecord {
        return null as any;
    }
    static getState(contextId?: string): string {
        return "";
    }
    static getStatus(contextId?: string): Record<any, any> {
        return {} as any;
    }
    static hasApprovals(scopedFlowName?: string): string {
        return "";
    }
    static notifyApprovalAction(o?: any): boolean {
        return false;
    }
    static nudgeFlow(flowContextSysID?: string, delaySeconds?: number): boolean {
        return false;
    }
    static nudgeFlowsWaitingOn(waitingOnRecordTable?: string, waitingOnRecordSysID?: string, delaySeconds?: number): void {
        
    }
    static processReadyEvents(instance?: string): void {
        
    }
    static publish(flowSysId?: string): string {
        return "";
    }
    static scheduleCancel(contextId?: string, reason?: string, delaySeconds?: number): void {
        
    }
    static sendMessage(contextSysId?: string, message?: string, payload?: string): void {
        
    }
    static simulateNodeShutdown(nodeName?: string): void {
        
    }
    static startAction(scopedActionName?: string, scriptInputs?: Scriptable): string {
        return "";
    }
    static startActionQuick(scopedActionName?: string, scriptInputs?: Scriptable): void {
        
    }
    static startFlow(scopedFlowName?: string, scriptInputs?: Scriptable): string {
        return "";
    }
    static startFlowQuick(scopedFlowName?: string, scriptInputs?: Scriptable): void {
        
    }
    static startSubflow(scopedSubflowName?: string, scriptInputs?: Scriptable): string {
        return "";
    }
    static startSubflowQuick(scopedSubflowName?: string, scriptInputs?: Scriptable): void {
        
    }
    static startSubflowSkipInputValidation(scopedSubflowName?: string, scriptInputs?: Scriptable): string {
        return "";
    }
}
