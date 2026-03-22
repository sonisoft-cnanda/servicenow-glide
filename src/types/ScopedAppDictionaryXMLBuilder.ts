import { GlideRecord } from "./GlideRecord";
import { GlideZipOutputStream } from "./GlideZipOutputStream";

export class ScopedAppDictionaryXMLBuilder {
    constructor(application: GlideRecord) {  }
    unloadDictionaryXMLs(): Map<string, string> {
        return {} as any;
    }
    unloadPluginStaticContentXMLs(pluginId: string, zip: GlideZipOutputStream): void {
        
    }
}
