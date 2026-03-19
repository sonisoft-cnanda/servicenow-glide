import { Scriptable } from './Scriptable';

export class ReportCiStatusOutputJS {
    constructor() {}
    getCiOperationStatus(): Scriptable {
        return new Scriptable();
    }
    getCmdbCI(): Scriptable {
        return new Scriptable();
    }
    getDiscoveryState(): Scriptable {
        return new Scriptable();
    }
    getIpAddress(): Scriptable {
        return new Scriptable();
    }
    getIssues(): number {
        return 0;
    }
    getIssuesLink(): Scriptable {
        return new Scriptable();
    }
    toJson(): Scriptable {
        return new Scriptable();
    }
}
