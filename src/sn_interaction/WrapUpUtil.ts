import { ScriptableObject } from "../imports/ScriptableObject";
import { GlideRecord } from "../types/GlideRecord";

export class WrapUpUtil {
    static closeStaleInteractions(maxWrapupDuration?: number): void {
        
    }
    static getWrapUpConfiguration(interaction?: GlideRecord): ScriptableObject {
        return null as any;
    }
    static showEndWrapUpButton(interaction?: GlideRecord, codeDialogSupported?: boolean): boolean {
        return false;
    }
}
