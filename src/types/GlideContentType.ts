import { GlideRecord } from "./GlideRecord";

export class GlideContentType {
    getDetailPage(current: GlideRecord): string {
        return "";
    }
    static get(content: GlideRecord): GlideContentType {
        return null as any;
    }
}
