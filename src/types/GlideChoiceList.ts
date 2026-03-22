import { GlideChoice } from "./GlideChoice";
import { GlideController } from "./GlideController";

export class GlideChoiceList {
    static getChoiceList(tableName: string, fieldName: string): GlideChoiceList;
    static getChoiceList(tableName: string, fieldName: string, useExtensionTables: boolean): GlideChoiceList;
    static getChoiceList(...args: any[]): any {
        return null as any;
    }
    add(sc: GlideChoice): boolean;
    add(value: string, label: string): GlideChoice;
    add(...args: any[]): any {
        return false;
    }
    addAll(cl: GlideChoiceList): void {
        
    }
    addFirst(value: string, label: string): void {
        
    }
    addNone(): GlideChoice {
        return null as any;
    }
    getChoice(index: number): GlideChoice;
    getChoice(value: string): GlideChoice;
    getChoice(...args: any[]): any {
        return null as any;
    }
    getChoiceNoTrim(value: string): GlideChoice {
        return null as any;
    }
    getLabelOf(value: string): string {
        return "";
    }
    getNullOverride(gc: GlideController): string {
        return "";
    }
    getSelectedIndex(): number {
        return 0;
    }
    getSize(): number {
        return 0;
    }
    getValueOf(label: string): string {
        return "";
    }
    indexOf(o: any): number {
        return 0;
    }
    removeChoice(value: string): GlideChoice;
    removeChoice(index: number): GlideChoice;
    removeChoice(...args: any[]): any {
        return null as any;
    }
    removeNone(): void {
        
    }
    sort(): void {
        
    }
    toXML(): string {
        return "";
    }
    toJSON(): any[] {
        return [];
    }
}
