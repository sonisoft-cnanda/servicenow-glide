import { NativeObject } from '../imports/NativeObject'

export class HermesInfrastructure {
    constructor() {  }
    addReplaceClusterForDc(dcName?: string, bootstrapServers?: string, coreSiteName?: string): void {
        
    }
    addReplaceClusterForService(serviceName?: string, bootstrapServers?: string, dcName?: string, coreSiteName?: string, primary?: boolean, isAdcAccessible?: boolean): void {
        
    }
    deleteClusterForDcIfAny(dcName?: string): void {
        
    }
    deleteClusterForServiceIfAny(dcName?: string, serviceName?: string): void {
        
    }
    deleteClustersForAllDcsIfAny(): void {
        
    }
    getDcClusterMap(): NativeObject {
        return null as any;
    }
    getDescription(): string {
        return "";
    }
    getServiceClusterMap(serviceName?: string): NativeObject {
        return null as any;
    }
    isDisabled(): boolean {
        return false;
    }
    registerNewHermesService(serviceName?: string): void {
        
    }
    resetClients(): void {
        
    }
    resetClientsInCluster(): void {
        
    }
    setDcClusterMap(map?: NativeObject, coreSiteMap?: NativeObject, description?: string): void {
        
    }
    setDescription(description?: string): void {
        
    }
    setDisabled(b?: boolean): void {
        
    }
    setServiceClusterMap(serviceName?: string, bootstrapToPrimary?: NativeObject, bootstrapToDc?: NativeObject, bootstrapToCoreSiteName?: NativeObject, bootstrapToAdcAccessible?: NativeObject): void {
        
    }
}
