export class DocDataExtractorScriptObject {
    static createKey(taskDefinitionId?: string, key?: any): string {
        return "";
    }
    static createKeyGroup(taskDefinitionId?: string, keyGroup?: any): string {
        return "";
    }
    static createTask(taskDefinitionId?: string, task?: any): string {
        return "";
    }
    static createTaskDefinition(taskDefinition?: any): string {
        return "";
    }
    static getPredictionResult(taskId?: string): Record<any, any> {
        return {} as any;
    }
    static getPredictionResultV2(taskId?: string): Record<any, any> {
        return {} as any;
    }
    static getUseCaseExecutionCount(startDate?: string, endDate?: string, groupBy?: Array<any>): Record<any, any> {
        return {} as any;
    }
    static predictAsyncWithTask(task?: any): boolean {
        return false;
    }
    static submitForTraining(taskId?: string): string {
        return "";
    }
}
