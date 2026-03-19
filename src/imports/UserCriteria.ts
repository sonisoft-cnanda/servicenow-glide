export class UserCriteria {
    constructor() {}
    isEnabled(): boolean {
        return false;
    }
    userCanSeeSearchSource(sourceID?: string): boolean {
        return false;
    }
}
