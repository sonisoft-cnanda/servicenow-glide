import { ScriptableObject } from "../imports/ScriptableObject";
import { GlideRecord } from "./GlideRecord";
import { GlideXMLParameters } from "./GlideXMLParameters";

export class SncProbe {
    constructor();
    constructor(probe: GlideRecord);
    constructor(probe: GlideRecord, values: any);
    constructor(probe: GlideRecord, values: any, midsConfig: any);
    constructor(...args: any[]) {  }
    static get(probeName: string): SncProbe;
    static get(probeName: string, values: any): SncProbe;
    static get(...args: any[]): any {
        return null as any;
    }
    static getById(sys_id: string): SncProbe;
    static getById(sys_id: string, values: any): SncProbe;
    static getById(...args: any[]): any {
        return null as any;
    }
    static createProbeResponse(eccQGr: GlideRecord): SncProbe {
        return null as any;
    }
    static getJsonPayload(eccQGr: GlideRecord): ScriptableObject {
        return null as any;
    }
    static probeParamIsNotEmptyMap(probeParameterValue: string): boolean {
        return false;
    }
    getEccQueueId(): string {
        return "";
    }
    getEccQueueRecord(): GlideRecord {
        return null as any;
    }
    getName(): string {
        return "";
    }
    setName(name: string): void {
        
    }
    setProbeName(name: string): void {
        
    }
    getSource(): string {
        return "";
    }
    setSource(source: string): void {
        
    }
    getTopic(): string {
        return "";
    }
    setTopic(topic: string): void {
        
    }
    setType(type: string): void {
        
    }
    getOutput(): string {
        return "";
    }
    getResult(): Element {
        return null as any;
    }
    getError(): string {
        return "";
    }
    getResultCode(): number {
        return 0;
    }
    getResultError(): string {
        return "";
    }
    addParameters(probeSysId: string): void {
        
    }
    addTextNodeParameter(name: string, value: string): void {
        
    }
    addParameter(name: string, value: string, addAsTextNodeParameter: boolean): void;
    addParameter(name: string, value: string): void;
    addParameter(...args: any[]): any {
        
    }
    addEncryptedParameter(name: string, value: string): void;
    addEncryptedParameter(name: string, valueFormat: string, ...valueArgs: string[]): void;
    addEncryptedParameter(...args: any[]): any {
        
    }
    hasParameter(name: string): boolean {
        return false;
    }
    getParameter(name: string): string {
        return "";
    }
    getBooleanParameter(key: string, defaultValue: boolean): boolean {
        return false;
    }
    getParameters(): GlideXMLParameters {
        return null as any;
    }
    getParametersMap(): { [key: string]: string } {
        return null as any;
    }
    copy(source: SncProbe): void;
    copy(source: SncProbe, overwrite: boolean): void;
    copy(...args: any[]): any {
        
    }
    insert(agentName: string): string {
        return "";
    }
    create(agentName: string): string;
    create(agentName: string, sensorECCID: string): string;
    create(...args: any[]): any {
        return "";
    }
    createForMidServer(agentName: string, sensorECCID: string): string {
        return "";
    }
    createForAutoSelectMidServer(applicationName: string, capabilities: any, sensorECCID: string): string {
        return "";
    }
    createForAutoSelectStartingWithMid(applicationName: string, capabilities: any, sensorECCID: string, agentName: string): string {
        return "";
    }
    createForAutoSelectedShazzam(applicationName: string, selectableMids: any[]): string {
        return "";
    }
    createForCluster(applicationName: string, clusterID: string, sensorECCID: string): string;
    createForCluster(applicationName: string, clusterID: string, caps: any, sensorECCID: string): string;
    createForCluster(...args: any[]): any {
        return "";
    }
    createForClusterStartingWithMid(agentName: string, applicationName: string, clusterId: string, sensorECCID: string): string {
        return "";
    }
    setOutput(str: string): void {
        
    }
    getAgent(): string {
        return "";
    }
    getCorrelator(): string {
        return "";
    }
    setCorrelator(correlator: string): void {
        
    }
    getId(): string {
        return "";
    }
    getPayload(): string {
        return "";
    }
    getDocument(): XMLDocument {
        return null as any;
    }
    getW3CDocument(): Document {
        return null as any;
    }
    getJson(): ScriptableObject {
        return null as any;
    }
    expose(): void {
        
    }
    setMultiProbe(multiProbe: boolean): void {
        
    }
    setMultiProbeDoc(multiProbeDoc: Document): void {
        
    }
    setEccPriority(p: string): void {
        
    }
    setMidSelectDetails(details: string): void {
        
    }
    getMidSelectDetails(): string {
        return "";
    }
}
