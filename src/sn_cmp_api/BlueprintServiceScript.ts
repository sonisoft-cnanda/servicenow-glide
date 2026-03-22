export class BlueprintServiceScript {
    constructor() {  }
    addBindingOperations(bpSysId?: string, sourceAlias?: string, bindingAlias?: string, endpoint?: string): string {
        return "";
    }
    addBlueprintOperationStep(bpSysId?: string, bpOperationId?: string, stageResId?: string, resOpImplId?: string, condition?: string, addOperationToExecutionPlan?: boolean): string {
        return "";
    }
    addConstraintInStageResource(blueprintId?: string, stageResourceName?: string, resourceName?: string): string {
        return "";
    }
    addStageResourceDeployment(blueprintId?: string, sourceAliasName?: string, sourceBlockId?: string, targetAliasName?: string, targetResBlockId?: string): void {
        
    }
    addStageResourceOperationAndAttr(blueprintId?: string, aliasName?: string): void {
        
    }
    createBlueprint(bpName?: string, category?: string, description?: string, layer?: string, status?: string): string {
        return "";
    }
    createBlueprintOperation(blueprintId?: string, operationName?: string, operationType?: string, attributes?: string): string {
        return "";
    }
    createStageModelAndOperations(bpSysId?: string, tlrSysId?: string): void {
        
    }
    createStageResource(blueprintId?: string, type?: string, aliasName?: string, resourceBlockId?: string, hostCI?: string): void {
        
    }
    createTLR(bpName?: string): string {
        return "";
    }
    deleteBlueprint(bpId?: string): string {
        return "";
    }
    deleteNode(blueprintId?: string, aliasName?: string): void {
        
    }
    deleteStageResource(blueprintId?: string, aliasName?: string): void {
        
    }
    deleteStageResourceAttribute(opSysId?: string, attrJSON?: string): boolean {
        return false;
    }
    executeFieldChangeRules(catalogId?: string, blueprintId?: string, version?: string, runtimeMap?: string, operationName?: string, attributeName?: string, attributeValue?: string): string {
        return "";
    }
    executeFormLoadRules(catalogId?: string, blueprintId?: string, version?: string, runtimeMap?: string, operationName?: string): string {
        return "";
    }
    generateParameterSet(intentYaml?: string): string {
        return "";
    }
    generateSerialExecutionPlanForOperation(bpOperationId?: string): void {
        
    }
    getAllBlueprints(layer?: string, bpName?: string, currentPage?: number, limit?: number): string {
        return "";
    }
    getAllGlobalPropertiesByStageResource(operation_id?: string): string {
        return "";
    }
    getAllStageResourceForBlueprint(blueprintId?: string): string {
        return "";
    }
    getBlueprint(blueprintId?: string): string {
        return "";
    }
    getBlueprintByName(bpName?: string): string {
        return "";
    }
    getBlueprintIntent(bpSysId?: string): string {
        return "";
    }
    getBlueprintOperations(bpSysId?: string): string {
        return "";
    }
    getBlueprintOperationsForCloudPortal(bpSysId?: string, stackId?: string): string {
        return "";
    }
    getCatalogItemForBlueprintOperation(bpSysId?: string, bpOperationId?: string): string {
        return "";
    }
    getConstraintFromAliasName(blueprintId?: string, aliasName?: string): string {
        return "";
    }
    getHostsByConnection(stageModelId?: string, guestAliasName?: string, connectionName?: string): string {
        return "";
    }
    getOperationSteps(opSysId?: string): string {
        return "";
    }
    getStageModelForBlueprint(blueprintId?: string): string {
        return "";
    }
    getStageResourceAndDeployment(blueprintId?: string): string {
        return "";
    }
    getStageResourceByOperation(opSysId?: string): string {
        return "";
    }
    importBlueprint(blueprintBody?: string): string {
        return "";
    }
    isStageResourceExist(blueprintId?: string, stageResAliasName?: string): string {
        return "";
    }
    isValidYAML(yamlBody?: string): string {
        return "";
    }
    modifyAttributesForStageResource(blueprintId?: string, stageResAliasName?: string): void {
        
    }
    prefillCatalogForm(catalogId?: string, blueprintId?: string, version?: string, operationName?: string, resourceId?: string, runtimeMap?: string): string {
        return "";
    }
    removeBindingOperations(bpSysId?: string, sourceAlias?: string, bindingAlias?: string, endpoint?: string): string {
        return "";
    }
    removeBlueprintOperationStep(removedStepId?: string, stepList?: string, bpOperationId?: string): string {
        return "";
    }
    removeConstraintInStageResource(blueprintId?: string, stageResourceName?: string, resourceName?: string): string {
        return "";
    }
    reorderOperationSteps(stepList?: string): string {
        return "";
    }
    updateStageResourceAttributes(opSysId?: string, attrJSON?: string): string {
        return "";
    }
    upsertRulesForCatalog(blueprintId?: string, stageOperationId?: string, catalogId?: string): void {
        
    }
}
