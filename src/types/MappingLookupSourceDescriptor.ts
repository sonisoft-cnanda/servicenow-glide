export class MappingLookupSourceDescriptor {
    constructor() {  }
    getDependendentTable(): string {
        return "";
    }
    getDependentId(): string {
        return "";
    }
    getFieldNames(): Array<string> {
        return [];
    }
    getFieldNamesString(): string {
        return "";
    }
    getRemoteDependent(): string {
        return "";
    }
    getResolverClassName(): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
    useOutputUI(): boolean {
        return false;
    }
}
