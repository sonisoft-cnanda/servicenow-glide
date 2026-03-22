export class CAPILibraryServiceScript {
    constructor() {  }
    createCloudApi(name?: string, category?: string, description?: string, version?: string, is_scripted?: string, capiinterface?: string, connector?: string, provider?: string, isScriptInstance?: string, scriptType?: string): string {
        return "";
    }
    createCloudConnector(name?: string, description?: string, vendor?: string, version?: string, release_date?: string, category?: string, connector_type?: string): string {
        return "";
    }
    createCloudInterface(name?: string, category?: string, description?: string): string {
        return "";
    }
    createCloudProvider(name?: string, description?: string, datacenter_class?: string): string {
        return "";
    }
    deleteCAPIInterface(id?: string): boolean {
        return false;
    }
    deleteCloudApi(id?: string): boolean {
        return false;
    }
    deleteCloudApiMethodMapperScripts(id?: string): boolean {
        return false;
    }
    deleteConnector(id?: string): boolean {
        return false;
    }
    deleteMethodMapperScripts(apiId?: string, id?: string): boolean {
        return false;
    }
    deleteProvider(id?: string): boolean {
        return false;
    }
    exportCloudApi(id?: string): string {
        return "";
    }
    exportCloudConnector(id?: string): string {
        return "";
    }
    exportCloudInterface(id?: string): string {
        return "";
    }
    exportMidScript(tableName?: string, id?: string): string {
        return "";
    }
    getApiDsl(interfaceName?: string, methodName?: string): string {
        return "";
    }
    getCAPIProviderIdByName(providerName?: string): string {
        return "";
    }
    getCApiByName(capiName?: string): string {
        return "";
    }
    importMidScript(midScriptYAML?: string): string {
        return "";
    }
    regenerateCloudApi(id?: string): string {
        return "";
    }
}
