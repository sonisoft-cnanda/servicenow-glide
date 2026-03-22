import { GlideChoiceList } from "../types/GlideChoiceList";

export class PlanInfo {
    constructor(data?: string) {  }
    id(): string {
        return "";
    }
    isValid(): boolean {
        return false;
    }
    name(): string {
        return "";
    }
    stages(): GlideChoiceList {
        return null as any;
    }
    state(): string {
        return "";
    }
}
