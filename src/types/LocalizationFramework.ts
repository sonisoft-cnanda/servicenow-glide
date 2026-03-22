import { NativeArray } from "../imports/NativeArray";
import { GlideScriptableInputStream } from "./GlideScriptableInputStream";

export class LocalizationFramework {
    static getAttachmentContent(attachmentSysId?: string): string {
        return "";
    }
    static unzipAndAttachFiles(inputStream?: GlideScriptableInputStream, sysId?: string, tableName?: string, fileFormat?: string): NativeArray {
        return null as any;
    }
    static unzipFileAndGetContent(inputStream?: GlideScriptableInputStream): string {
        return "";
    }
}
