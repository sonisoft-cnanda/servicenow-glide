import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { EncoderVersion } from "./EncoderVersion";
import { IMLSolutionVersion } from "./IMLSolutionVersion";

export class Encoder {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): EncoderVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): EncoderVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): IMLSolutionVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): EncoderVersion {
        return null as any;
    }
}
