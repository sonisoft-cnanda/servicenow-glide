export class GlideElementDescriptor {
    constructor();
    constructor(name: string, type: string, length: number);
    constructor(...args: any[]) {  }
    toSQLType(dbi: any): string {
        return "";
    }
    getLength(): number {
        return 0;
    }
    getName(): string {
        return "";
    }
    getColumnName(): string {
        return "";
    }
    getType(): number {
        return 0;
    }
    serializeAttributes(): string {
        return "";
    }
    getUniqueID(): string {
        return "";
    }
    isMandatory(): boolean {
        return false;
    }
    getInternalType(): string {
        return "";
    }
    setInternalType(s: string): void {
        
    }
    isVirtual(): boolean {
        return false;
    }
    isActive(): boolean {
        return false;
    }
    isInDatabase(): boolean {
        return false;
    }
    getReference(): string {
        return "";
    }
    getReferenceKey(): string {
        return "";
    }
    setIsReference(b: boolean): void {
        
    }
    setName(name: string): void {
        
    }
    isObject(): boolean {
        return false;
    }
    getSchemaTableName(): string {
        return "";
    }
    getTableName(): string {
        return "";
    }
    getChoice(): number {
        return 0;
    }
    getDefault(): string {
        return "";
    }
    getDependent(): string {
        return "";
    }
    isDisplay(): boolean {
        return false;
    }
    isReadOnly(): boolean {
        return false;
    }
    isMultiText(): boolean {
        return false;
    }
    getReferenceQualifier(): string {
        return "";
    }
    getScopeID(): string {
        return "";
    }
    getChoiceTable(): string {
        return "";
    }
    getSqlLength(): number {
        return 0;
    }
    isTimeType(): boolean {
        return false;
    }
    isDuration(): boolean {
        return false;
    }
    isTime(): boolean {
        return false;
    }
    isDateType(): boolean {
        return false;
    }
    isMetricType(): boolean {
        return false;
    }
    isDateOnly(): boolean {
        return false;
    }
    mergeAttributesWithTables(): any {
        return null as any;
    }
    isChoiceTable(): boolean {
        return false;
    }
    isList(): boolean {
        return false;
    }
    isJournal(): boolean {
        return false;
    }
    isEdgeEncryptable(): boolean {
        return false;
    }
    getEncryptionType(): string {
        return "";
    }
    isEdgeEncrypted(): boolean {
        return false;
    }
    getAttachmentEncryptionType(): string {
        return "";
    }
    hasAttachmentsEncrypted(): boolean {
        return false;
    }
    isEncrypted(): boolean {
        return false;
    }
    isReference(): boolean {
        return false;
    }
    isBoolean(): boolean {
        return false;
    }
    isString(): boolean {
        return false;
    }
    isJournalList(): boolean {
        return false;
    }
    isNumber(): boolean {
        return false;
    }
    isTrulyNumber(): boolean {
        return false;
    }
    isAutoOrSysID(): boolean {
        return false;
    }
    toXML(): any {
        return null as any;
    }
    hasAttribute(attribute: string): boolean {
        return false;
    }
    getBooleanAttribute(attribute: string, def?: boolean): boolean {
        return false;
    }
    getAttribute(name: string): string {
        return "";
    }
    getDirectAttribute(name: string): string {
        return "";
    }
    toString(): string {
        return "";
    }
    getPlural(): string {
        return "";
    }
    getHint(): string {
        return "";
    }
    canAvg(): boolean {
        return false;
    }
    canSum(): boolean {
        return false;
    }
    canMin(): boolean {
        return false;
    }
    canMax(): boolean {
        return false;
    }
    getFirstTableName(): string {
        return "";
    }
    isFirstTableName(): boolean {
        return false;
    }
    isAdpEncrypted(): boolean {
        return false;
    }
    isAdpEncryptedDataAllowed(): boolean {
        return false;
    }
    getLabel(): string {
        return "";
    }
}
