import { GlideRecord } from "./GlideRecord";
import { GlideRecordSecure } from "./GlideRecordSecure";

export namespace global {
    export class AbstractAjaxProcessor {
        private CALLABLE_PREFIX: string;
        private request: any;
        private responseXML: any;
        private gc: any;

        constructor(request?: any, responseXML?: any, gc?: any) {
            this.CALLABLE_PREFIX = "";
            this.request = request;
            this.responseXML = responseXML;
            this.gc = gc;
        }

        process(): any {
            return null;
        }

        newItem(name: string): any {
            return null;
        }

        getParameter(name: string): string {
            return "";
        }

        getDocument(): any {
            return null;
        }

        getRootElement(): any {
            return null;
        }

        getName(): string {
            return "";
        }

        getValue(): string {
            return "";
        }

        getType(): string {
            return "";
        }

        getChars(): string {
            return "";
        }

        setAnswer(value: string): void {}

        setError(error: string): void {}

        type: string = "";
    }

    export class ChangeRequestSNC {
        static ENFORCE_DATA_REQ_PROP: string = "";
        static TYPE_COMPATIBILITY: string = "";
        static MANAGE_WORKFLOW: string = "";
        static CHANGE_REQUEST_FROM_NEW: string = "";
        static TRANSACTION_CHANGE_STATE: string = "";
        static NORMAL: string = "";
        static STANDARD: string = "";
        static EMERGENCY: string = "";
        static LEGACY_STATE: any = null;

        APPROVAL = {
            REQUESTED: "",
            APPROVED: "",
            REJECTED: "",
            NOT_REQUESTED: ""
        };

        STATE: string = "";
        SUCCESSFUL: string = "";
        UNSUCCESSFUL: string = "";
        SUCCESSFUL_ISSUES: string = "";
        REQUESTED: string = "";
        APPROVED: string = "";
        REJECTED: string = "";
        NOT_REQUESTED: string = "";
        EMERGENCY_WORKFLOW: string = "";
        STANDARD_WORKFLOW: string = "";
        NORMAL_WORKFLOW: string = "";

        constructor(changeGr: any) {}

        initialize(changeGr: any): void {}

        _getAPI(): any {
            return null;
        }

        getState(): string {
            return "";
        }

        getStateFieldName(): string {
            return "";
        }

        getInitialState(): string {
            return "";
        }

        isInitialState(): boolean {
            return false;
        }

        changesToInitialState(): boolean {
            return false;
        }

        changesFromInitialState(): boolean {
            return false;
        }

        revertToInitialState(): boolean {
            return false;
        }

        isTerminalState(): boolean {
            return false;
        }

        isState(stateValue: string): boolean {
            return false;
        }

        isNextState(stateValue: string): boolean {
            return false;
        }

        isNextManualState(stateValue: string): boolean {
            return false;
        }

        getNextStates(): string[] {
            return [];
        }

        getNextManualStates(): string[] {
            return [];
        }

        moveTo(stateValue: string): boolean {
            return false;
        }

        canMoveTo(stateValue: string): boolean {
            return false;
        }

        evaluateMoveTo(stateValue: string, returnAll: boolean): any {
            return null;
        }

        canImplement(): boolean {
            return false;
        }

        getAttributesModelContains(): string[] {
            return [];
        }

        modelContainsAttribute(attributeName: string): boolean {
            return false;
        }

        hasStateAttribute(attributeName: string): boolean {
            return false;
        }

        getStateAttributes(): string[] {
            return [];
        }

        isValidTable(): boolean {
            return false;
        }

        isUsingModel(): boolean {
            return false;
        }

        isEnforceData(): boolean {
            return false;
        }

        setGlobalFromNew(value: boolean): void {}

        isGlobalFromNew(): boolean {
            return false;
        }

        setTransactionChangeState(stateValue: string): void {}

        getTransactionChangeState(): string {
            return "";
        }

        canModifyCI(checkTransaction: boolean): boolean {
            return false;
        }

        isNew(): boolean {
            return false;
        }

        changesToNew(): boolean {
            return false;
        }

        changesFromNew(): boolean {
            return false;
        }

        setNew(): boolean {
            return false;
        }

        toNew(): boolean {
            return false;
        }

        revertToNew(): boolean {
            return false;
        }

        isAssess(): boolean {
            return false;
        }

        changesToAssess(): boolean {
            return false;
        }

        setAssess(): boolean {
            return false;
        }

        assess(): boolean {
            return false;
        }

        isAuthorize(): boolean {
            return false;
        }

        changesToAuthorize(): boolean {
            return false;
        }

        setAuthorize(): boolean {
            return false;
        }

        authorize(): boolean {
            return false;
        }

        isScheduled(): boolean {
            return false;
        }

        changesToScheduled(): boolean {
            return false;
        }

        setScheduled(): boolean {
            return false;
        }

        scheduled(): boolean {
            return false;
        }

        isImplement(): boolean {
            return false;
        }

        changesToImplement(): boolean {
            return false;
        }

        setImplement(): boolean {
            return false;
        }

        implement(): boolean {
            return false;
        }

        isReview(): boolean {
            return false;
        }

        changesToReview(): boolean {
            return false;
        }

        setReview(): boolean {
            return false;
        }

        review(): boolean {
            return false;
        }

        isClosed(): boolean {
            return false;
        }

        changesToClosed(): boolean {
            return false;
        }

        isClosedSuccessful(): boolean {
            return false;
        }

        isClosedSuccessfulWithIssues(): boolean {
            return false;
        }

        isClosedUnsuccessful(): boolean {
            return false;
        }

        setClose(closeCode: string, closeNotes: string): boolean {
            return false;
        }

        close(closeCode: string, closeNotes: string): boolean {
            return false;
        }

        closeSuccessful(closeNotes: string): boolean {
            return false;
        }

        closeSuccessfulWithIssues(closeNotes: string): boolean {
            return false;
        }

        closeUnsuccessful(closeNotes: string): boolean {
            return false;
        }

        isCanceled(): boolean {
            return false;
        }

        changesToCanceled(): boolean {
            return false;
        }

        setCancel(): boolean {
            return false;
        }

        cancel(): boolean {
            return false;
        }

        isApprovalRequested(): boolean {
            return false;
        }

        isApproved(): boolean {
            return false;
        }

        isRejected(): boolean {
            return false;
        }

        setRequestApproval(): boolean {
            return false;
        }

        requestApproval(): boolean {
            return false;
        }

        isOnHold(): boolean {
            return false;
        }

        onHoldChanges(): boolean {
            return false;
        }

        onHoldReasonChanges(): boolean {
            return false;
        }

        syncOnHoldTasks(): void {}

        updateOnHoldReason(): void {}

        addToOnHoldTaskList(taskID: string): void {}

        cancelAssociatedTasks(): void {}

        hasOpenTasks(): boolean {
            return false;
        }

        modifyType(previousType: string): void {}

        deleteDefaultWorkflowContext(): void {}

        hasValidChoice(field: string, value: string): boolean {
            return false;
        }

        setValue(name: string, value: any): void {}

        getValue(name: string): any {
            return null;
        }

        setDisplayValue(name: string, value: any): void {}

        getDisplayValue(name: string): any {
            return null;
        }

        insert(): string {
            return "";
        }

        update(): string {
            return "";
        }

        refreshGlideRecord(): void {}

        isChangeRequest(): boolean {
            return false;
        }

        toString(): string {
            return "";
        }

        toJS(): any {
            return null;
        }

        static getAPIClass(): any {
            return null;
        }

        static newNormal(): any {
            return null;
        }

        static newStandard(): any {
            return null;
        }

        static newEmergency(): any {
            return null;
        }

        static newChange(modelSysIdOrType: string): any {
            return null;
        }
    }

    export class ChangeRequest extends ChangeRequestSNC {
        static CHANGE_REQUEST: string = "";
        static NORMAL: string = "";
        static STANDARD: string = "";
        static EMERGENCY: string = "";
        static LEGACY_STATE: any = null;

        constructor(changeGr: any) {
            super(changeGr);
        }

        initialize(changeGr: any): void {}

        type: string = "";

        static newNormal(): any {
            return null;
        }

        static newStandard(): any {
            return null;
        }

        static newEmergency(): any {
            return null;
        }

        static newChange(modelSysIdOrType: string): any {
            return null;
        }
    }

    export class ChangeProcessSNC {
        static LOG_PROP: string = "";
        static STATE_MODEL_PLUGIN: string = "";
        static SHORT_DESC: string = "";
        static NAME: string = "";
        static NUMBER: string = "";
        static TYPE: string = "";
        static MODEL: string = "";
        static STATE: string = "";

        static findAll(orderBy?: string, textSearch?: string, encodedQuery?: string): GlideRecordSecure {
            return new GlideRecordSecure("");
        }

        static findById(sysId: string): ChangeProcess | null {
            return null;
        }

        static newChange(nameValuePairs: any): ChangeProcess | null {
            return null;
        }

        static newChangeProcess(nameValuePairs: any): ChangeProcess | null {
            return null;
        }

        constructor(_gr?: any, _gs?: any) {}

        initialize(_gr?: any, _gs?: any): void {}

        resolveState(state?: string): string | null {
            return null;
        }

        moveTo(state: string): boolean {
            return false;
        }

        canMoveTo(state: string): boolean {
            return false;
        }

        evaluateMoveTo(state: string): any {
            return null;
        }

        approve(comments?: string): boolean {
            return false;
        }

        reject(comments?: string): boolean {
            return false;
        }

        _processApproval(approveReject: string, comments?: string): boolean {
            return false;
        }

        getCIs(type: string): GlideRecord | null {
            return null;
        }

        getTasks(): GlideRecord | null {
            return null;
        }

        getChangeRequest(): ChangeRequest {
            return new ChangeRequest(null);
        }

        toString(): string {
            return "";
        }

        toJS(): any {
            return null;
        }

        deleteRecord(): boolean {
            return false;
        }

        canWriteTo(fieldName: string): boolean {
            return false;
        }

        insert(): string {
            return "";
        }

        update(): string {
            return "";
        }

        refreshGlideRecord(): void {}

        getGlideRecord(): GlideRecord {
            return new GlideRecord("");
        }

        setValue(fieldName: string, value: any): void {}

        setValues(values: any): any {
            return null;
        }

        resolveReference(fieldName: string): any {
            return null;
        }

        isReferenceField(fieldName: string): boolean {
            return false;
        }

        type: string = "";
    }

    export class ChangeProcess extends ChangeProcessSNC {
        static newChangeProcess: typeof ChangeProcessSNC.newChangeProcess = ChangeProcessSNC.newChangeProcess;
        static newChange: typeof ChangeProcessSNC.newChange = ChangeProcessSNC.newChange;
        static findAll: typeof ChangeProcessSNC.findAll = ChangeProcessSNC.findAll;
        static findById: typeof ChangeProcessSNC.findById = ChangeProcessSNC.findById;

        constructor(_gr?: any, _gs?: any) {
            super(_gr, _gs);
        }

        initialize(_gr?: any, _gs?: any): void {}

        type: string = "";
    }

    export class StandardChangeTemplateSNC extends ChangeProcess {
        static CHANGE_RECORD_PRODUCER: string = "";
        static CHANGE_TEMPLATE: string = "";

        constructor(_gr?: any, _gs?: any) {
            super(_gr, _gs);
        }

        initialize(_gr?: any, _gs?: any): void {}

        applyToChange(changeRequestGr: GlideRecord): boolean {
            return false;
        }

        copyAttachments(changeRequestGr: GlideRecord): boolean {
            return false;
        }

        static findById(sysId: string): StandardChangeTemplate | null {
            return null;
        }

        static findAll(orderBy?: string, textSearch?: string, encodedQuery?: string): GlideRecordSecure {
            return new GlideRecordSecure("");
        }

        type: string = "";
    }

    export class StandardChangeTemplate extends StandardChangeTemplateSNC {
        static findById: typeof StandardChangeTemplateSNC.findById = StandardChangeTemplateSNC.findById;
        static findAll: typeof StandardChangeTemplateSNC.findAll = StandardChangeTemplateSNC.findAll;

        constructor(_gr?: any, _gs?: any) {
            super(_gr, _gs);
        }

        initialize(_gr?: any, _gs?: any): void {}

        type: string = "";
    }


    export class GlideQuery {
        table: string;
        plan: any[];
        scope: string | null;
        type: string = 'GlideQuery';

        constructor(table: string, plan?: any[], options?: { scope?: string }) {
            const ctorScope = 'rhino.global'; // Placeholder for gs.getCallerScopeName()
            const scope = options && options.scope && ((ctorScope === 'rhino.global' && ctorScope === options.scope) || (options.scope !== 'rhino.global'))
                ? options.scope
                : null;

            Object.defineProperties(this, {
                table: { value: table, writable: false, configurable: false, enumerable: false },
                plan: { value: plan || [], writable: false, configurable: false, enumerable: false },
                scope: { value: scope, writable: false, configurable: false, enumerable: false },
            });
        }

        where(fieldOrQuery: string | GlideQuery, operator?: string, value?: any): GlideQuery {
            return new GlideQuery(this.table);
        }

        orWhere(fieldOrQuery: string | GlideQuery, operator?: string, value?: any): GlideQuery {
            return new GlideQuery(this.table);
        }

        whereNotNull(field: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        orWhereNotNull(field: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        whereNull(field: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        orWhereNull(field: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        getBy(keyValues: { [key: string]: any }, selectedFields?: string[]): any {
            return {};
        }

        get(key: string, selectFields?: string[]): any {
            return {};
        }

        insert(keyValues: { [key: string]: any }, selectFields?: string[]): any {
            return {};
        }

        insertOrUpdate(changes: { [key: string]: any }, selectFields?: string[], reason?: string): any {
            return {};
        }

        update(changes: { [key: string]: any }, selectFields?: string[], reason?: string, prefetchedSchema?: any, planOverride?: any, insertWhenNotFound?: boolean): any {
            return {};
        }

        updateMultiple(changes: { [key: string]: any }): { rowCount: number } {
            return { rowCount: 0 };
        }

        del(): void {}

        deleteMultiple(): void {}

        select(...fields: string[]): any {
            return {};
        }

        selectOne(...fields: string[]): any {
            return {};
        }

        disableWorkflow(): GlideQuery {
            return new GlideQuery(this.table);
        }

        disableAutoSysFields(): GlideQuery {
            return new GlideQuery(this.table);
        }

        forceUpdate(): GlideQuery {
            return new GlideQuery(this.table);
        }

        orderBy(field: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        orderByDesc(fieldOrAggregate: string, field?: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        limit(limit: number): GlideQuery {
            return new GlideQuery(this.table);
        }

        withAcls(): GlideQuery {
            return new GlideQuery(this.table);
        }

        avg(field: string): any {
            return {};
        }

        max(field: string): any {
            return {};
        }

        min(field: string): any {
            return {};
        }

        sum(field: string): any {
            return {};
        }

        count(): number {
            return 0;
        }

        groupBy(...fields: string[]): GlideQuery {
            return new GlideQuery(this.table);
        }

        aggregate(aggregateType: string, field: string): GlideQuery {
            return new GlideQuery(this.table);
        }

        having(aggregate: string, field: string, operator: string, value: number): GlideQuery {
            return new GlideQuery(this.table);
        }

        toGlideRecord(): any {
            return {};
        }

        static parse(table: string, encodedQuery: string): GlideQuery {
            return new GlideQuery(table);
        }

        toString(): string {
            return `GlideQuery<${this.table}> ${JSON.stringify(this.plan, null, 2)}`;
        }

        static operators: { [key: string]: string } = {
            '=': 'comparable',
            '!=': 'comparable',
            '>': 'comparable',
            '>=': 'comparable',
            '<': 'comparable',
            '<=': 'comparable',
            IN: 'array',
            'NOT IN': 'array',
            STARTSWITH: 'string',
            ENDSWITH: 'string',
            CONTAINS: 'string',
            'DOES NOT CONTAIN': 'string',
            INSTANCEOF: 'string',
            SAMEAS: 'string',
            NSAMEAS: 'string',
            GT_FIELD: 'string',
            LT_FIELD: 'string',
            GT_OR_EQUALS_FIELD: 'string',
            LT_OR_EQUALS_FIELD: 'string',
            BETWEEN: 'array',
            DYNAMIC: 'string',
            EMPTYSTRING: 'string',
            ANYTHING: 'string',
            LIKE: 'string',
            'NOT LIKE': 'string',
            ON: 'string',
        };

        static checkHavingOperatorAndValue(operator: string, value: any): void {}

        static checkWhereOperator(operator: string, value: any): void {}

        static flattenFields(firstArg: any, args: IArguments): string[] {
            return [];
        }

        static checkWhereAmbiguity(glideQuery: GlideQuery): GlideQuery {
            return glideQuery;
        }
    }

}
