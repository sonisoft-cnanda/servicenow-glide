export class ScopedClothoConfigService {
    static addShard(shardID?: string, urls?: string, user?: string, password?: string): boolean {
        return false;
    }
    static getClassicClothoShard(): string {
        return "";
    }
    static getShardStatuses(): Record<any, any> {
        return {} as any;
    }
    static listShards(): Record<any, any> {
        return {} as any;
    }
    static moveShard(shardID?: string, urls?: string, user?: string, password?: string): boolean {
        return false;
    }
    static refresh(force?: boolean): void {
        
    }
    static refreshInCluster(force?: boolean): void {
        
    }
    static removeEndpoints(): boolean {
        return false;
    }
    static removeShard(shardID?: string): boolean {
        return false;
    }
    static setClassicClothoShard(shardID?: string): boolean {
        return false;
    }
    static setConfig(name?: string, urls?: string, user?: string, password?: string): boolean {
        return false;
    }
    static shardCount(): number {
        return 0;
    }
    static testConnectivity(): void {
        
    }
    static testShardConnectivity(shardID?: string): void {
        
    }
}
