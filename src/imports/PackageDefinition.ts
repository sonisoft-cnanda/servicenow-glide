import { DeployableDefinition } from "./DeployableDefinition";
import { PackageStateGenerator } from "./PackageStateGenerator";
import { ParameterBag } from "./ParameterBag";

export class PackageDefinition {
    allocateStateGenerator(): PackageStateGenerator {
        return null as any;
    }
    createDeployable(arg0: string): DeployableDefinition {
        return null as any;
    }
    deployables(): any {
        return null as any;
    }
    extend(): PackageDefinition {
        return null as any;
    }
    findDeployable(arg0: string): DeployableDefinition {
        return null as any;
    }
    generateState(arg0: any): PackageDefinition {
        return null as any;
    }
    getBaseDefinition(): PackageDefinition {
        return null as any;
    }
    getParameterBag(): ParameterBag {
        return null as any;
    }
    getTemplateDefinition(): PackageDefinition {
        return null as any;
    }
    isPackageState(): boolean {
        return false;
    }
    exportToJSON(): string {
        return "";
    }
    flushChanges(): void {
        
    }
    isDefinedAtThisLevel(arg0: any): boolean {
        return false;
    }
    isOutermostDefinitionLevel(): boolean {
        return false;
    }
    canEdit(): boolean {
        return false;
    }
    canRemove(): boolean {
        return false;
    }
    getObjectKind(): string {
        return "";
    }
    getSnapshotId(): string {
        return "";
    }
    getStableId(): string {
        return "";
    }
}
