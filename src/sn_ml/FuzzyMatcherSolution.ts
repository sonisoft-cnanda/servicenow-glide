import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { FuzzyMatcherSolutionVersion } from "./FuzzyMatcherSolutionVersion";

export class FuzzyMatcherSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): FuzzyMatcherSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): FuzzyMatcherSolutionVersion {
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
    getVersion(version?: string): FuzzyMatcherSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): FuzzyMatcherSolutionVersion {
        return null as any;
    }
}
