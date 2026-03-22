import { GlideRecord } from "../types/GlideRecord";

export class FenixClient {
    constructor() {  }
    applyDeployments(): void {
        
    }
    applyDeploymentsToEndpoint(deployments?: Array<any>, endpointGR?: GlideRecord): void {
        
    }
    clearDeploymentOverride(deploymentId?: string): void {
        
    }
    clearDeploymentsForEndpoint(endpointGR?: GlideRecord): void {
        
    }
    clearDeploymentsForURL(url?: string): void {
        
    }
    getDeploymentOverride(deploymentId?: string): Record<any, any> {
        return {} as any;
    }
    getJobStatusesByDeployment(deploymentId?: string): Array<any> {
        return [];
    }
    getLatestExecutionIdByDeployment(deploymentId?: string): string {
        return "";
    }
    getSupportedFlinkVersions(): Array<any> {
        return [];
    }
    hasDeploymentOverride(deploymentId?: string): boolean {
        return false;
    }
    mergeAllDeployments(): Array<any> {
        return [];
    }
    mergeDeployment(deploymentId?: string): Record<any, any> {
        return {} as any;
    }
    queueRestartDeployment(deploymentId?: string): void {
        
    }
    queueStartBatchDeployment(deploymentId?: string): void {
        
    }
    queueStopBatchDeployment(executionId?: string): void {
        
    }
    queueUpdateDeployment(deploymentId?: string): void {
        
    }
    restartDeployment(deploymentId?: string): void {
        
    }
    sendManifests(): void {
        
    }
    setDeploymentOverride(deploymentId?: string, overrideValues?: Record<any, any>): void {
        
    }
    startBatchDeployment(deploymentId?: string): void {
        
    }
    stopBatchDeployment(executionId?: string): void {
        
    }
    updateDeployment(deploymentId?: string): void {
        
    }
}
