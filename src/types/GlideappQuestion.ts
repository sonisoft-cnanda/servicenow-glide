import { GlideChoiceList } from "./GlideChoiceList";
import { GlideElementDescriptor } from "./GlideElementDescriptor";
import { GlideRecord } from "./GlideRecord";

export class GlideappQuestion {
    static getQuestion(id: string): GlideappQuestion;
    static getQuestion(gr: GlideRecord): GlideappQuestion;
    static getQuestion(questionID: string, gr: GlideRecord): GlideappQuestion;
    static getQuestion(...args: any[]): any {
        return null as any;
    }
    static getQuestionCopy(questionID: string, gr: GlideRecord): GlideappQuestion {
        return null as any;
    }
    getSet(): any {
        return null as any;
    }
    setDisplayValue(value: string): void {
        
    }
    getDisplayValue(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getReadRoles(): string {
        return "";
    }
    getWriteRoles(): string {
        return "";
    }
    getType(): number {
        return 0;
    }
    getOrder(): number {
        return 0;
    }
    getED(): GlideElementDescriptor {
        return null as any;
    }
    hasPricingImplications(): boolean {
        return false;
    }
    getMacro(): string {
        return "";
    }
    getSummaryMacro(): string {
        return "";
    }
    getLookupLabel(): string {
        return "";
    }
    getLookupTable(): string {
        return "";
    }
    getChoiceTable(): string {
        return "";
    }
    getChoiceField(): string {
        return "";
    }
    getLookupValue(): string {
        return "";
    }
    getListTable(): string {
        return "";
    }
    isVisibleSummary(): boolean {
        return false;
    }
    getId(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getValue(): string {
        return "";
    }
    setValue(value: string): void {
        
    }
    isActive(): boolean {
        return false;
    }
    getCatalogItem(): string {
        return "";
    }
    getVSetId(): string {
        return "";
    }
    getVSetName(): string {
        return "";
    }
    getVSetType(): string {
        return "";
    }
    getDynamicValueDotWalkPath(): string {
        return "";
    }
    getChoiceList(): GlideChoiceList {
        return null as any;
    }
    getCreateRoles(): string {
        return "";
    }
    canCreate(): boolean {
        return false;
    }
    canWrite(): boolean {
        return false;
    }
    canRead(): boolean {
        return false;
    }
    validateRegex(): boolean {
        return false;
    }
    getValidationMessage(): string {
        return "";
    }
    getRegex(): string {
        return "";
    }
    validateRegexForValue(): any {
        return null as any;
    }
    isValidQuestion(): boolean {
        return false;
    }
    getReference(): string {
        return "";
    }
    getValidateRegex(): string {
        return "";
    }
    getReferenceQualifier(): string {
        return "";
    }
    getParentContainerID(): string {
        return "";
    }
    isSysReadOnly(): boolean {
        return false;
    }
}
