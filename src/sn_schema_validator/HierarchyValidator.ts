import { GlideAggregate } from "../types/GlideAggregate";

export class HierarchyValidator {
    constructor() {  }
    checkLogicalElementExists(tableName?: string, element?: string): GlideAggregate {
        return null as any;
    }
    checkPhysicalColumnExists(tableName?: string, column?: string): GlideAggregate {
        return null as any;
    }
    findExtensionsMissingElement(tableName?: string, element?: string): Array<any> {
        return [];
    }
    findPartitionsMissingColumn(tableName?: string, column?: string): Array<any> {
        return [];
    }
}
