import { GlideAttributes } from '../imports/GlideAttributes';
import { DBI } from '../imports/DBI';

export class GlideElementDescriptor {
    constructor(name?: string, type?: string, length?: number) {}
    canAvg(): boolean {
        return false;
    }
    canMax(): boolean {
        return false;
    }
    canMin(): boolean {
        return false;
    }
    canSum(): boolean {
        return false;
    }
    getAttachmentEncryptionType(): string {
        return "";
    }
    getAttribute(name?: string): string {
        return "";
    }
    getBooleanAttribute(attribute?: string, def?: boolean): boolean {
        return false;
    }
    getChoice(): number {
        return 0;
    }
    getChoiceTable(): string {
        return "";
    }
    getColumnName(): string {
        return "";
    }
    getDefault(): string {
        return "";
    }
    getDependent(): string {
        return "";
    }
    getDirectAttribute(name?: string): string {
        return "";
    }
    getEncryptionType(): string {
        return "";
    }
    getFirstTableName(): string {
        return "";
    }
    getHint(): string {
        return "";
    }
    getInternalType(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getLength(): number {
        return 0;
    }
    getName(): string {
        return "";
    }
    getPlural(): string {
        return "";
    }
    getReference(): string {
        return "";
    }
    getReferenceKey(): string {
        return "";
    }
    getReferenceQualifier(): string {
        return "";
    }
    getSchemaTableName(): string {
        return "";
    }
    getScopeID(): string {
        return "";
    }
    getSqlLength(): number {
        return 0;
    }
    getTableName(): string {
        return "";
    }
    getType(): number {
        return 0;
    }
    getUniqueID(): string {
        return "";
    }
    hasAttachmentsEncrypted(): boolean {
        return false;
    }
    hasAttribute(attribute?: string): boolean {
        return false;
    }
    isActive(): boolean {
        return false;
    }
    isAdpEncrypted(): boolean {
        return false;
    }
    isAdpEncryptedDataAllowed(): boolean {
        return false;
    }
    isAutoOrSysID(): boolean {
        return false;
    }
    isBoolean(): boolean {
        return false;
    }
    isChoiceTable(): boolean {
        return false;
    }
    isDateOnly(): boolean {
        return false;
    }
    isDateType(): boolean {
        return false;
    }
    isDisplay(): boolean {
        return false;
    }
    isDuration(): boolean {
        return false;
    }
    isEdgeEncryptable(): boolean {
        return false;
    }
    isEdgeEncrypted(): boolean {
        return false;
    }
    isEncrypted(): boolean {
        return false;
    }
    isFirstTableName(): boolean {
        return false;
    }
    isInDatabase(): boolean {
        return false;
    }
    isJournal(): boolean {
        return false;
    }
    isJournalList(): boolean {
        return false;
    }
    isList(): boolean {
        return false;
    }
    isMandatory(): boolean {
        return false;
    }
    isMetricType(): boolean {
        return false;
    }
    isMultiText(): boolean {
        return false;
    }
    isNumber(): boolean {
        return false;
    }
    isObject(): boolean {
        return false;
    }
    isReadOnly(): boolean {
        return false;
    }
    isReference(): boolean {
        return false;
    }
    isString(): boolean {
        return false;
    }
    isTime(): boolean {
        return false;
    }
    isTimeType(): boolean {
        return false;
    }
    isTrulyNumber(): boolean {
        return false;
    }
    isVirtual(): boolean {
        return false;
    }
    mergeAttributesWithTables(): GlideAttributes {
        return new GlideAttributes();
    }
    serializeAttributes(): string {
        return "";
    }
    setInternalType(s?: string): void {
        
    }
    setIsReference(b?: boolean): void {
        
    }
    setName(name?: string): void {
        
    }
    toSQLType(dbi?: DBI): string {
        return "";
    }
    toString(): string {
        return "";
    }
    toXML(): Element {
        return new Element();
    }
}
