export class ServiceConfig {
    static getServiceHealth(serviceName: string): Map<string, string> {
        return {} as any;
    }
    static refreshConnections(serviceName: string): void {
        
    }
    static refreshInCluster(serviceName: string): void {
        
    }
    static setConnections(serviceName: string, serviceConfigJson: string): boolean {
        return false;
    }
}
