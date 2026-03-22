import { GlideChoiceList } from "../types/GlideChoiceList";

export class ATFSnapshot {
    constructor() {  }
    findSnapshot(testSysId?: string, currentStepOrder?: string): string {
        return "";
    }
    getComponentsFromSnapshotAsChoiceList(testId?: string, stepOrder?: string, methods?: string): GlideChoiceList {
        return null as any;
    }
    static getMugshotVersion(): string {
        return "";
    }
    getMugshotsJSONbyHash(testSysId?: string, order?: number, componentHashes?: string[]): string {
        return "";
    }
    getUIComponentsByType(snapshotId?: string, type?: string): Array<any> {
        return [];
    }
    getUIComponentsFromMugshotCache(testSysId?: string, stepOrder?: string): Array<any> {
        return [];
    }
    saveSnapshot(pageURL?: string, stepSysId?: string, uiComponentsJSONString?: string, snapshotHash?: string, isPreviousStepSnapshot?: boolean): string {
        return "";
    }
}
