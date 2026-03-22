import { IDRDiagnosticStats } from "./IDRDiagnosticStats";

export class IDRDiagnostics {
    constructor() {  }
    getKMFHealth(): string {
        return "";
    }
    getRemoteRegions(): string[] {
        return [];
    }
    runDiagnostic(diagnosticTypeString?: string, region?: string, setId?: string, url?: string, username?: string, password?: string): IDRDiagnosticStats {
        return null as any;
    }
}
