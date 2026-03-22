import { GlideRecord } from "./GlideRecord";

export class MetadataLinkUtil {
    static isMetadataLinkExempt(record: GlideRecord): boolean {
        return false;
    }
    static isTableMetadataLinkExempt(tableName: string): boolean {
        return false;
    }
}
