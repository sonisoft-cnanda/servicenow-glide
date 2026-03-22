import { Context } from "../imports/Context";
import { Function } from "../imports/Function";
import { GlideDateTime } from "../types/GlideDateTime";

export class WebDAVResource {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    createAttachment(tableName?: string, tableSysID?: string): string {
        return "";
    }
    createCollection(name?: string): WebDAVResource {
        return null as any;
    }
    getAbsolutePath(): string {
        return "";
    }
    getContent(): string {
        return "";
    }
    getContentType(): string {
        return "";
    }
    getCreationDate(): GlideDateTime {
        return null as any;
    }
    getDepth(): number {
        return 0;
    }
    getMember(name?: string): WebDAVResource {
        return null as any;
    }
    getMemberCount(): number {
        return 0;
    }
    getMembers(): WebDAVResource[] {
        return [];
    }
    getModifiedDate(): GlideDateTime {
        return null as any;
    }
    getName(): string {
        return "";
    }
    getParent(): WebDAVResource {
        return null as any;
    }
    getPath(): string {
        return "";
    }
    getProperties(): any {
        return null as any;
    }
    getPropertyValue(propName?: string): string {
        return "";
    }
    getSize(): number {
        return 0;
    }
    isCollection(): boolean {
        return false;
    }
    isInitialized(): boolean {
        return false;
    }
    uploadFile(fileName?: string, content?: string, contentType?: string): WebDAVResource {
        return null as any;
    }
}
