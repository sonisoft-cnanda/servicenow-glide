export class ResourceBlockServiceScript {
    constructor() {  }
    addAllOperationToResourceBlockFromInterface(resouceBlockId?: string, guestInterfaceId?: string): void {
        
    }
    addAttributeFromResourceToInterface(attribute?: string, operationId?: string): void {
        
    }
    addAttributeToResourceOperation(attribute?: string, operationId?: string): void {
        
    }
    addGuestInterfaceToResourceBlock(resourceBlockId?: string): void {
        
    }
    addNewMethodOfInterfaceToImplResources(resourceInterfaceId?: string, operationName?: string): void {
        
    }
    addTranslatorToStep(resourceBlockId?: string, stepId?: string, scriptName?: string): void {
        
    }
    create(jsonResourceBlock?: string): string {
        return "";
    }
    createOpImplStep(stepsJSON?: string): string {
        return "";
    }
    createOrUpdateOpImpl(opImplJson?: string): void {
        
    }
    createResourceBlockOperation(resourceBlockName?: string, operationName?: string, operationType?: string, accessType?: string, interfaceName?: string, outputAttributes?: string): string {
        return "";
    }
    delete(jsonResourceBlock?: string): any {
        return null as any;
    }
    deleteAttributeFromResource(attribute?: string, operationId?: string): void {
        
    }
    deleteInterfaceOperation(resourceInterfaceId?: string, operationId?: string): void {
        
    }
    deleteOpImplStep(stepId?: string): void {
        
    }
    deleteResourceBlock(resourceBlockId?: string): boolean {
        return false;
    }
    deleteStepsByOpImp(opImplId?: string): void {
        
    }
    executeFieldChangeRules(catalogId?: string, runtimeMap?: string, attributeName?: string, attributeValue?: string): string {
        return "";
    }
    executeFormLoadRules(catalogId?: string, runtimeMap?: string): string {
        return "";
    }
    exportExtensionImplForResourceBlock(resourceBlockName?: string, interfaceExtension?: string): string {
        return "";
    }
    exportExtensionImplForResourceBlockWithFilters(resourceBlockName?: string, csdFilters?: string): string {
        return "";
    }
    exportOperationsFromExtensionImplForResourceBlock(resourceBlockName?: string, interfaceExtension?: string, operationNames?: Array<any>): string {
        return "";
    }
    exportResourceBlock(resourceBlockName?: string): string {
        return "";
    }
    get(id?: string): string {
        return "";
    }
    getAllOperationsForResource(resourceBlockId?: string): string {
        return "";
    }
    getAllResourceBlocks(): Array<any> {
        return [];
    }
    getAllResourceBlocksForLDC(ciListString?: string): string {
        return "";
    }
    getAllStepsByOpImpl(opImplId?: string): string {
        return "";
    }
    getEndpointsForCI(ciName?: string): string {
        return "";
    }
    getHostedRelationShipsForCI(ciName?: string): string {
        return "";
    }
    getHostsForResource(resourceBlockId?: string): string {
        return "";
    }
    getNonTLRResourceBlocks(): string {
        return "";
    }
    getParentStepsById(stepId?: string): string {
        return "";
    }
    getPublicOperationsForResource(resourceBlockId?: string, resourceId?: string): string {
        return "";
    }
    getRelationShipsForCI(ciName?: string): string {
        return "";
    }
    getResourceBlockByName(name?: string): string {
        return "";
    }
    getResourceOperations(resourceBlockId?: string, fetchChildren?: boolean): string {
        return "";
    }
    getResourceOperationsApplicableTo(resourceBlockId?: string, resourceInstanceId?: string): string {
        return "";
    }
    getStepById(stepId?: string): string {
        return "";
    }
    prefillResourceCatalog(catalogId?: string, operationName?: string, resourceId?: string): string {
        return "";
    }
    searchResourceBlocksByName(layer?: string, resouceBlockName?: string, currentPage?: number, limit?: number): string {
        return "";
    }
    update(jsonResourceBlock?: string): any {
        return null as any;
    }
    updateAttributeNameToResourceOperation(newName?: string, operationId?: string, oldName?: string): void {
        
    }
}
