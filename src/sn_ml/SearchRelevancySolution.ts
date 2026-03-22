import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { SearchRelevancySolutionVersion } from "./SearchRelevancySolutionVersion";

export class SearchRelevancySolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): SearchRelevancySolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): SearchRelevancySolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getVersion(version?: string): SearchRelevancySolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): SearchRelevancySolutionVersion {
        return null as any;
    }
}
