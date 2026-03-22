import { NativeArray } from "./NativeArray";
import { PackageDefinition } from "./PackageDefinition";

export class DeployableDefinition {
    artifactRequiresSubstitutions(): boolean {
        return false;
    }
    compareWithPrevious(arg0: any): any {
        return null as any;
    }
    deploymentExtensions(): NativeArray {
        return null as any;
    }
    getArtifact(): string {
        return "";
    }
    getBaseDefinition(): DeployableDefinition {
        return null as any;
    }
    getCiType(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getPropertyBag(): any {
        return null as any;
    }
    getPropertyBagForDeploymentExtension(arg0: any): any {
        return null as any;
    }
    getPropertyValueOrDefault(arg0: string, arg1: string): string {
        return "";
    }
    getTemplateDefinition(): DeployableDefinition {
        return null as any;
    }
    remove(): void {
        
    }
    setArtifact(arg0: string): DeployableDefinition {
        return null as any;
    }
    setArtifactSubstitutionsFlag(arg0: boolean): DeployableDefinition {
        return null as any;
    }
    setName(arg0: string): DeployableDefinition {
        return null as any;
    }
    setPropertyValue(arg0: string, arg1: string): DeployableDefinition {
        return null as any;
    }
    tryToResolveArtifactSubstitutions(): any {
        return null as any;
    }
    unbindDeploymentExtension(arg0: any): void {
        
    }
    getDefinitionLevel(): PackageDefinition {
        return null as any;
    }
    isDefinedAtOutermostLevel(): boolean {
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
