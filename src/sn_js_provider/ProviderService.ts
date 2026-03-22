import { GlideRecord } from "../types/GlideRecord";

export class ProviderService {
    constructor() {  }
    getActionableContent(): GlideRecord {
        return null as any;
    }
    getActions(actionableContentId?: string): string {
        return "";
    }
    getChannel(destinationTypeId?: string): GlideRecord {
        return null as any;
    }
    getCommonActionableContent(): GlideRecord {
        return null as any;
    }
    getCommonContent(): GlideRecord {
        return null as any;
    }
    getContent(): GlideRecord {
        return null as any;
    }
    getContentField(fieldName?: string): string {
        return "";
    }
    getProvider(): GlideRecord {
        return null as any;
    }
    getProviderContent(): GlideRecord {
        return null as any;
    }
    getProviderDefaultContent(): GlideRecord {
        return null as any;
    }
    substitute(input?: string): string {
        return "";
    }
}
