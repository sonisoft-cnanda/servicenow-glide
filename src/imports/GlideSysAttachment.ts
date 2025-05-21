import { GlideRecord } from './GlideRecord';
import { GlideScriptableInputStream } from './GlideScriptableInputStream';

export class GlideSysAttachment {
    constructor() {}
    copy(sourceTable?: string, sourceID?: string, targetTable?: string, targetID?: string): Array<any> {
        return new Array();
    }
    deleteAttachment(sysAttachmentID?: string): void {
        
    }
    getAttachments(tableName?: string, sys_id?: string): GlideRecord {
        return new GlideRecord("");
    }
    getContent(sysAttachment?: GlideRecord): string {
        return "";
    }
    getContentBase64(sysAttachment?: GlideRecord): string {
        return "";
    }
    getContentStream(sysAttachmentID?: string): GlideScriptableInputStream {
        return new GlideScriptableInputStream();
    }
    write(gr?: GlideRecord, fileName?: string, contentType?: string, content?: string): string {
        return "";
    }
    writeBase64(gr?: GlideRecord, fileName?: string, contentType?: string, contentBase64?: string): string {
        return "";
    }
    writeContentStream(gr?: GlideRecord, fileName?: string, contentType?: string, is?: GlideScriptableInputStream): string {
        return "";
    }
}
