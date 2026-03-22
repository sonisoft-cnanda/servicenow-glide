import { GlideRecord } from "../types/GlideRecord";

export class DictionaryValidator {
    constructor() {  }
    findFieldsIncorrectlyCloned(parentTable: string): Array<GlideRecord> {
        return [];
    }
    findFieldsMissingClone(parentTable: string): Array<GlideRecord> {
        return [];
    }
    findFieldsMissingPhysicalColumn(tableName: string): Array<GlideRecord> {
        return [];
    }
    findFieldsOnIncompatibleColumn(tableName: string): Array<GlideRecord> {
        return [];
    }
}
