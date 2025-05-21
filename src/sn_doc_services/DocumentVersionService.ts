import { JSONObject } from '../imports/JSONObject';
import { SystemDocumentVersion } from '../imports/SystemDocumentVersion';

export class DocumentVersionService {
    constructor() {}
    createDocVersionFromTemplateDoc(templateDocumentSysId?: string, docSysId?: string): JSONObject {
        return new JSONObject();
    }
    createDocumentVersion(version?: SystemDocumentVersion): JSONObject {
        return new JSONObject();
    }
    deleteDocumentVersion(documentVersionSysId?: string): JSONObject {
        return new JSONObject();
    }
}
