import { SystemDocumentListEntry } from '../imports/SystemDocumentListEntry';
import { JSONObject } from '../imports/JSONObject';

export class DocumentListEntryService {
    constructor() {}
    createDocumentListEntry(entry?: SystemDocumentListEntry): JSONObject {
        return new JSONObject();
    }
    deleteDocumentListEntry(listEntrySysId?: string): JSONObject {
        return new JSONObject();
    }
    updateDocumentListEntry(listEntrySysId?: string, entry?: SystemDocumentListEntry): JSONObject {
        return new JSONObject();
    }
}
