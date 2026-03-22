import { NativeObject } from "../imports/NativeObject";
import { GlideRecord } from "./GlideRecord";

export class Workflow {
    inputs: any = null as any;
    variables: any = null as any;
    scratchpad: any = null as any;
    name: string = "";
    constructor() {  }
    broadcastEvent(eventName?: string, eventParms?: any): void {
        
    }
    debug(message?: string, args?: any): string {
        return "";
    }
    end(): void {
        
    }
    error(error?: any, args?: any): string {
        return "";
    }
    eval(expression?: any, identifierKey?: any): any {
        return null as any;
    }
    evaluateString(expression?: any, identifierKey?: any, thisBinding?: any): any {
        return null as any;
    }
    fault(error?: any, args?: any): string {
        return "";
    }
    fireEvent(eventName?: string, eventParms?: any): void {
        
    }
    generate(activityId?: string, order?: string, startAtDspValue?: string, noCreateFlag?: boolean): NativeObject {
        return null as any;
    }
    getExceptionDetail(): string {
        return "";
    }
    getPredecessors(): Array<any> {
        return [];
    }
    getScriptVariable(name?: string): any {
        return null as any;
    }
    getVariable(name?: string): any {
        return null as any;
    }
    hasFailed(): boolean {
        return false;
    }
    includeActivityDefinition(definitionName?: string): void {
        
    }
    info(message?: string, args?: any): string {
        return "";
    }
    interpretString(expression?: any, identifierKey?: any): any {
        return null as any;
    }
    isComplete(context?: any): boolean {
        return false;
    }
    onRollbackComplete(executing?: any): void {
        
    }
    prepareScriptVariable(name?: string, value?: any): void {
        
    }
    registerForEvent(eventName?: string): void {
        
    }
    registerListener(listenTo?: any, fields?: string): void {
        
    }
    removeScriptVariable(name?: string): void {
        
    }
    removeVariable(name?: string): void {
        
    }
    result(result?: string): void {
        
    }
    setResult(result?: string): void {
        
    }
    setVariable(name?: string, value?: any): void {
        
    }
    startSubflow(workflowId?: string, current?: any, map?: any, parentActivity?: any): GlideRecord {
        return null as any;
    }
    strEval(expression?: string): any {
        return null as any;
    }
    toActivities(): Array<any> {
        return [];
    }
    unregisterForEvent(eventName?: string): void {
        
    }
    unregisterListeners(): void {
        
    }
    warn(message?: string, args?: any): string {
        return "";
    }
}
