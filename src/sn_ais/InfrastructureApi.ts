export class InfrastructureApi {
    constructor() {  }
    addActiveAisConnection(url?: string): string {
        return "";
    }
    addPassiveAisConnection(url?: string): string {
        return "";
    }
    addReadReplicaAisConnection(url?: string): string {
        return "";
    }
    deleteAisConnectionByUrl(url?: string): boolean {
        return false;
    }
    deleteAllAisConnections(): void {
        
    }
    disableAis(temporary?: boolean): void {
        
    }
    enableAis(): void {
        
    }
    initAis(): void {
        
    }
    requestAis(): boolean {
        return false;
    }
    setAisEventQueueWritable(writable?: boolean): void {
        
    }
    setAisPartition(partitionId?: string): void {
        
    }
    setAisServerWritable(writable?: boolean): void {
        
    }
    testAisConnection(sysId?: string, timeoutInSecond?: number): boolean {
        return false;
    }
}
