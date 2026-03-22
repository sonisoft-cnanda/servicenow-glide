import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GeniusSearchQuery } from "./GeniusSearchQuery";
import { GeniusSearchSolutionVersion } from "./GeniusSearchSolutionVersion";
import { GeniusSearchContext } from "./GeniusSearchContext";

export class GeniusSearchSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): GeniusSearchSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getConfig(): Record<any, any> {
        return {} as any;
    }
    getLatestVersion(): GeniusSearchSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): GeniusSearchSolutionVersion {
        return null as any;
    }
    search(searchQuery?: GeniusSearchQuery, searchContext?: GeniusSearchContext, options?: Record<any, any>): string {
        return "";
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): GeniusSearchSolutionVersion {
        return null as any;
    }
}
