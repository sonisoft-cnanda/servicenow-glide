import { NativeObject } from "../imports/NativeObject";
import { GlideServletRequest } from "./GlideServletRequest";
import { GlideServletResponse } from "./GlideServletResponse";
import { XMLDocument2 } from "./XMLDocument2";

export class ScopedGlideSysAttachment {
    constructor() {  }
    copy(sourceTable: string, sourceID: string, targetTable: string, targetID: string): Array<string> {
        return [];
    }
    createAttachmentsFromMultipartRequest(request: GlideServletRequest, tableName: string, tableSysID: string, attachmentToRecordAssociations: NativeObject): boolean {
        return false;
    }
    getParameters(): Map<string, string> {
        return {} as any;
    }
    readXMLDocument(attachmentID: string): XMLDocument2 {
        return null as any;
    }
    writeAttachmentToResponse(attachmentID: string, scopedResponse: GlideServletResponse): boolean {
        return false;
    }
}
