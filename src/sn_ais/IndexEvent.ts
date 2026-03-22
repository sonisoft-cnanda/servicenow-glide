import { GlideDateTime } from "../types/GlideDateTime";

export class IndexEvent {
    constructor() {  }
    aclInheritanceChange(operation?: string, instanceId?: string, targetTableName?: string): boolean {
        return false;
    }
    deleteAttachment(table?: string, sysId?: string): boolean {
        return false;
    }
    deleteRecord(table?: string, sysId?: string): boolean {
        return false;
    }
    deleteTable(table?: string): boolean {
        return false;
    }
    getEventQueueForAffectedRecord(id?: string): string {
        return "";
    }
    indexAll(email?: string): boolean {
        return false;
    }
    indexAllDatasourceUpdatedSinceQueueDisabled(toTime?: GlideDateTime, fromTime?: GlideDateTime): boolean {
        return false;
    }
    indexAttachment(sysId?: string): boolean {
        return false;
    }
    indexDatasourceByQuery(datasource?: string, query?: string, cascadeUpdate?: boolean, childTable?: string): boolean {
        return false;
    }
    indexDatasourceUpdatedSinceQueueDisabled(datasource?: string, toTime?: GlideDateTime, fromTime?: GlideDateTime): boolean {
        return false;
    }
    indexLabelChange(labelSysId?: string, triggerIndexAllShared?: boolean, triggerIndexEveryoneOnly?: boolean): boolean {
        return false;
    }
    indexRecord(table?: string, sysId?: string): boolean {
        return false;
    }
    indexTable(datasourceTable?: string, childTable?: string): boolean {
        return false;
    }
    indexTableNoBlock(datasource?: string, childTable?: string): boolean {
        return false;
    }
    indexUpdatableFields(processingStartTime?: string, table?: string): boolean {
        return false;
    }
    migrateTable(table?: string, email?: string): boolean {
        return false;
    }
    purgeFilteredDocuments(datasource?: string): void {
        
    }
    queueUpdatableFieldAction(table?: string, sysId?: string): boolean {
        return false;
    }
}
