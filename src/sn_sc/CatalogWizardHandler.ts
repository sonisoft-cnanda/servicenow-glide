import { NativeArray } from "../imports/NativeArray";
import { ScriptableObject } from "../imports/ScriptableObject";

export class CatalogWizardHandler {
    static canAccessTarget(o?: ScriptableObject): boolean {
        return false;
    }
    static fetch(o?: ScriptableObject): any {
        return null as any;
    }
    static getOwnerOverridesQuestionsAssociatedToWizard(wizardId?: string): NativeArray {
        return null as any;
    }
    static submit(o?: ScriptableObject): any {
        return null as any;
    }
}
