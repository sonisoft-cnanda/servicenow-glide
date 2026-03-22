import { GlideRecord } from "./GlideRecord";
import { GlideScriptableInputStream } from "./GlideScriptableInputStream";

export class GlideSysAttachment {
    constructor() {  }
    addAttribute(sysAttachmentID: string, attrKey: string, attrValue: string): void {
        
    }
    addMultipleAttributes(sysAttachmentID: string, attrsKeyValuePair: Map<string, string>): void {
        
    }
    copy(sourceTable: string, sourceID: string, targetTable: string, targetID: string): Array<string> {
        return [];
    }
    static copy(sourceTable: string, sourceID: string, targetTable: string, targetID: string): Array<string> {
        return [];
    }
    deleteAllAttributes(sysAttachmentID: string): boolean {
        return false;
    }
    deleteAttachment(sysAttachmentID: string): void {
        
    }
    deleteAttribute(sysAttachmentID: string, attrKey: string): boolean {
        return false;
    }
    fetchAllAttributes(sysAttachmentID: string): GlideRecord {
        return null as any;
    }
    fetchAttribute(sysAttachmentID: string, attrKey: string): GlideRecord {
        return null as any;
    }
    getAttachments(tableName: string, sys_id: string): GlideRecord {
        return null as any;
    }
    getContent(sysAttachment: GlideRecord): string {
        return "";
    }
    getContentBase64(sysAttachment: GlideRecord): string {
        return "";
    }
    getContentStream(sysAttachmentID: string): GlideScriptableInputStream {
        return null as any;
    }
    updateAllAttributes(sysAttachmentID: string, attrsKeyValuePair: Map<string, string>): void {
        
    }
    updateAttribute(sysAttachmentID: string, attrKey: string, attrValue: string): void {
        
    }
    write(gr: GlideRecord, fileName: string, contentType: string, content: string): string {
        return "";
    }
    writeBase64(gr: GlideRecord, fileName: string, contentType: string, contentBase64: string): string {
        return "";
    }
    writeContentStream(gr: GlideRecord, fileName: string, contentType: string, is: GlideScriptableInputStream): string {
        return "";
    }
}
