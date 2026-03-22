import { GlideExecutionTracker } from "./GlideExecutionTracker";
import { GlideHTTPUtil } from "./GlideHTTPUtil";

export class ScopedAppRepoRequest {
    constructor(requestType: string, parameters: Map<string, string>) {  }
    addHeader(key: string, value: string): ScopedAppRepoRequest {
        return null as any;
    }
    downloadAttachment(targetTable: string, targetSysID: string, fileName: string, fileContentType: string, downloadTracker: GlideExecutionTracker): string {
        return "";
    }
    get(): string {
        return "";
    }
    getErrorMessage(): string {
        return "";
    }
    getGlideHttpUtil(username: string, password: string): GlideHTTPUtil {
        return null as any;
    }
    getJSON(): string {
        return "";
    }
    getStatusCode(): number {
        return 0;
    }
    getUploadUrl(): string {
        return "";
    }
    isQuiet(): boolean {
        return false;
    }
    post(): string {
        return "";
    }
    setBasicAuth(username: string, password: string): ScopedAppRepoRequest {
        return null as any;
    }
    setParameter(key: string, value: string): ScopedAppRepoRequest {
        return null as any;
    }
    setQuiet(b: boolean): ScopedAppRepoRequest {
        return null as any;
    }
    uploadAttachments(attachmentIds: string[], uploadTracker: GlideExecutionTracker): string {
        return "";
    }
}
