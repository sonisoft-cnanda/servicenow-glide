import { GlideExecutionTracker } from "./GlideExecutionTracker";

export class GlideHTTPUtil {
    constructor() {  }
    addHeader(key: string, value: string): void {
        
    }
    del(url: string, parms: string): string {
        return "";
    }
    downloadAttachment(url: string, tableName: string, tableSysID: string, fileName: string, fileContentType: string, scopedDownloadTracker: GlideExecutionTracker): string {
        return "";
    }
    get(url: string): string {
        return "";
    }
    getErrorMessage(): string {
        return "";
    }
    getStatusCode(): number {
        return 0;
    }
    isQuiet(): boolean {
        return false;
    }
    patch(url: string, parms: string): string {
        return "";
    }
    post(url: string, parms: Map<string, any>): string {
        return "";
    }
    postPayload(url: string, content: string): string {
        return "";
    }
    put(url: string, parms: string): string {
        return "";
    }
    setBaseURL(baseURL: string): void {
        
    }
    setBasicAuth(username: string, password: string): void {
        
    }
    setQuiet(b: boolean): void {
        
    }
    setTimeout(timeout: number): void {
        
    }
    setUseGZip(useGZip: boolean): void {
        
    }
    supportsHttpErrorCodes(): boolean {
        return false;
    }
    uploadAttachments(attachmentIDs: string[], url: string, parameters: Map<string, string>, uploadTracker: GlideExecutionTracker): string {
        return "";
    }
    urlDecode(parameter: string): string {
        return "";
    }
    urlEncode(parameter: string): string {
        return "";
    }
}
