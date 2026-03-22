export class QuotaServiceScript {
    constructor() {  }
    addNewQuotaDefinition(quotaDefinitionType?: string, quotaType?: string, attribute?: string, resourceName?: string, template?: string, templateAttribute?: string): string {
        return "";
    }
    checkQuota(groupId?: string, userId?: string, quotaDefinitionType?: string, count?: number, requestItem?: string): string {
        return "";
    }
    checkQuotaForBlueprintResources(groupId?: string, userId?: string, blueprintName?: string, orderForm?: string, requestItem?: string): string {
        return "";
    }
    createQuota(groupname?: string, resname?: string, grouplimit?: string, userlimit?: string): string {
        return "";
    }
    deleteQuota(grpname?: string): string {
        return "";
    }
    deleteQuotaDefinition(quotaDefinitionType?: string): string {
        return "";
    }
    getActiveInstance(quotaDefinitionType?: string): string {
        return "";
    }
    getAllQuotaAssociation(): string {
        return "";
    }
    getAllQuotaDefinition(): string {
        return "";
    }
    getConsumption(quotaDefinitionType?: string, groupId?: string, userId?: string): string {
        return "";
    }
    getGroupQuotaForUser(uname?: string): string {
        return "";
    }
    getQuotaDefinitionId(name?: string): string {
        return "";
    }
    getQuotaGroup(grpname?: string): string {
        return "";
    }
    getQuotaGroupResource(gname?: string, rname?: string): string {
        return "";
    }
    getQuotaUser(uname?: string): string {
        return "";
    }
    getQuotaUserResource(uname?: string, rname?: string): string {
        return "";
    }
    getReservedResources(userSysId?: string, groupSysId?: string, definitionSysId?: string): string {
        return "";
    }
    updateQuotaAssociation(quotaDefinitionType?: string, groupName?: string, maxLimit?: number, userLimit?: number): string {
        return "";
    }
    validateCapacity(resourceId?: string, ldcId?: string, associatedDcId?: string, definitionType?: string, count?: number, userId?: string, group?: string, requestItem?: string): string {
        return "";
    }
}
