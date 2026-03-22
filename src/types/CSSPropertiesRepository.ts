import { GlideAggregate } from "./GlideAggregate";
import { ScriptableObject } from "../imports/ScriptableObject";
import { GlideRecord } from "./GlideRecord";

export class CSSPropertiesRepository {
    static getBaseThemeID(theme: string, themeRecord: GlideRecord): string {
        return "";
    }
    static getThemeRecord(theme: string): GlideRecord {
        return null as any;
    }
    static getPropertiesForTheme(theme: string): ScriptableObject {
        return null as any;
    }
    static getSessionProperties(): ScriptableObject {
        return null as any;
    }
    static getSystemProperties(): ScriptableObject {
        return null as any;
    }
}
