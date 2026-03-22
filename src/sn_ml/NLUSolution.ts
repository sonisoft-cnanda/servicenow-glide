import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { NLUSolutionVersion } from "./NLUSolutionVersion";

export class NLUSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    activateLatestVersion(): void {
        
    }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): NLUSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): NLUSolutionVersion {
        return null as any;
    }
    getModelVersion(iso6391LanguageCode?: string, options?: Record<any, any>): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getSolutionVersionDetails(options?: Record<any, any>): string {
        return "";
    }
    getVersion(version?: string): NLUSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): NLUSolutionVersion {
        return null as any;
    }
    validate(input?: Record<any, any>, options?: Record<any, any>): string {
        return "";
    }
}
