import { SystemDocumentListEntry } from './SystemDocumentListEntry.js';
import { JSONObject } from './JSONObject.js';
export declare class DocumentListEntryService {
    constructor();
    createDocumentListEntry(entry?: SystemDocumentListEntry): JSONObject;
    deleteDocumentListEntry(listEntrySysId?: string): JSONObject;
    updateDocumentListEntry(listEntrySysId?: string, entry?: SystemDocumentListEntry): JSONObject;
}
//# sourceMappingURL=DocumentListEntryService.d.ts.map