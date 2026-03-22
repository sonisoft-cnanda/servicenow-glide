import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { LanguageXSolutionVersion } from "./LanguageXSolutionVersion";

export class LanguageXSolution {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getActiveVersion(): LanguageXSolutionVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): LanguageXSolutionVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): LanguageXSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
}
