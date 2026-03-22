import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { AgentZeroLegacyVersion } from "./AgentZeroLegacyVersion";

export class AgentZeroLegacy {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    cancelTrainingJob(): void {
        
    }
    getActiveVersion(): AgentZeroLegacyVersion {
        return null as any;
    }
    getAllVersions(): Array<any> {
        return [];
    }
    getLatestVersion(): AgentZeroLegacyVersion {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getProperties(): string {
        return "";
    }
    getVersion(version?: string): AgentZeroLegacyVersion {
        return null as any;
    }
    setActiveVersion(version?: string): void {
        
    }
    submitTrainingJob(options?: Record<any, any>): AgentZeroLegacyVersion {
        return null as any;
    }
}
