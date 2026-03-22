import { GlideRecord } from "../types/GlideRecord";

export class TicketConfig {
    static getConfig(tableName?: string, domainID?: string): Record<any, any> {
        return {} as any;
    }
    static getTicketRecord(tableName?: string, sysID?: string): GlideRecord {
        return null as any;
    }
}
