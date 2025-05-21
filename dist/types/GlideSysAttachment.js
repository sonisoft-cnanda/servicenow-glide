"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSysAttachment = void 0;
const GlideRecord_1 = require("../imports/GlideRecord.js");
const GlideScriptableInputStream_1 = require("../imports/GlideScriptableInputStream.js");
class GlideSysAttachment {
    constructor() { }
    copy(sourceTable, sourceID, targetTable, targetID) {
        return new Array();
    }
    deleteAttachment(sysAttachmentID) {
    }
    getAttachments(tableName, sys_id) {
        return new GlideRecord_1.GlideRecord("");
    }
    getContent(sysAttachment) {
        return "";
    }
    getContentBase64(sysAttachment) {
        return "";
    }
    getContentStream(sysAttachmentID) {
        return new GlideScriptableInputStream_1.GlideScriptableInputStream();
    }
    write(gr, fileName, contentType, content) {
        return "";
    }
    writeBase64(gr, fileName, contentType, contentBase64) {
        return "";
    }
    writeContentStream(gr, fileName, contentType, is) {
        return "";
    }
}
exports.GlideSysAttachment = GlideSysAttachment;
//# sourceMappingURL=GlideSysAttachment.js.map