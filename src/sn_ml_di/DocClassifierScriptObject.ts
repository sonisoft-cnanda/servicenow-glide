export class DocClassifierScriptObject {
    static addKeys(taskDefinitionId?: string, keys?: any): boolean {
        return false;
    }
    static addTrainingDocuments(taskId?: string, documentsWithKeys?: any): string {
        return "";
    }
    static copyUseCase(oldTaskDefinitionId?: string, newDisplayName?: string, scopeId?: string): Record<any, any> {
        return {} as any;
    }
    static createTask(taskDefinitionId?: string, task?: any, documentsWithKeys?: any): string {
        return "";
    }
    static createTaskDefinition(taskDefinition?: any): string {
        return "";
    }
    static exportUseCase(oldTaskDefinitionId?: string): Record<any, any> {
        return {} as any;
    }
    static getPredictionResult(taskId?: string): Record<any, any> {
        return {} as any;
    }
    static predictAsyncWithTask(task?: any): string {
        return "";
    }
    static submitForTraining(taskDefinitionId?: string): Record<any, any> {
        return {} as any;
    }
}
