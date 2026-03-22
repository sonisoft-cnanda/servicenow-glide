import { GlideRecord } from "./GlideRecord";

export class GlideTemplate {
    constructor() {  }
    apply(record: GlideRecord): number {
        return 0;
    }
    static get(sys_id: string): GlideTemplate {
        return null as any;
    }
    static getByName(name: string): GlideTemplate {
        return null as any;
    }
    static getFromRecord(record: GlideRecord): GlideTemplate {
        return null as any;
    }
    setApplyChildren(applyChildren: boolean): void {
        
    }
    setDoInsert(doInsert: boolean): void {
        
    }
}
