export class API {
    constructor() {  }
    assignSandboxByNodeId(nodeId?: string, dsbName?: string): boolean {
        return false;
    }
    assignSandboxNode(dsbName?: string): boolean {
        return false;
    }
    destroyAllSandboxes(): void {
        
    }
    destroySandbox(dsbName?: string): void {
        
    }
    getAllDevSandboxSizes(scale?: string): Record<any, any> {
        return {} as any;
    }
    getAllDevSandboxTableSizes(scale?: string): Record<any, any> {
        return {} as any;
    }
    getCurrentDevSandboxSize(scale?: string): number {
        return 0;
    }
    getCurrentDevSandboxTableSizes(scale?: string): Record<any, any> {
        return {} as any;
    }
    getDsb(): string {
        return "";
    }
    getDsbTableType(tableName?: string): string {
        return "";
    }
    isDsb(): boolean {
        return false;
    }
    isEnabled(): boolean {
        return false;
    }
    reassignSandboxNode(oldDsbName?: string, newDsbName?: string): boolean {
        return false;
    }
    recoverDsbAssignments(): void {
        
    }
    registerDsb(dsbName?: string, ownerId?: string, templateId?: string): boolean {
        return false;
    }
    unassignSandboxByNodeId(nodeId?: string): boolean {
        return false;
    }
    unassignSandboxNode(dsbName?: string): boolean {
        return false;
    }
}
