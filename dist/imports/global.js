"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global = void 0;
const GlideRecord_1 = require("./GlideRecord.js");
const GlideRecordSecure_1 = require("./GlideRecordSecure.js");
var global;
(function (global) {
    class AbstractAjaxProcessor {
        constructor(request, responseXML, gc) {
            this.type = "";
            this.CALLABLE_PREFIX = "";
            this.request = request;
            this.responseXML = responseXML;
            this.gc = gc;
        }
        process() {
            return null;
        }
        newItem(name) {
            return null;
        }
        getParameter(name) {
            return "";
        }
        getDocument() {
            return null;
        }
        getRootElement() {
            return null;
        }
        getName() {
            return "";
        }
        getValue() {
            return "";
        }
        getType() {
            return "";
        }
        getChars() {
            return "";
        }
        setAnswer(value) { }
        setError(error) { }
    }
    global.AbstractAjaxProcessor = AbstractAjaxProcessor;
    class ChangeRequestSNC {
        constructor(changeGr) {
            this.APPROVAL = {
                REQUESTED: "",
                APPROVED: "",
                REJECTED: "",
                NOT_REQUESTED: ""
            };
            this.STATE = "";
            this.SUCCESSFUL = "";
            this.UNSUCCESSFUL = "";
            this.SUCCESSFUL_ISSUES = "";
            this.REQUESTED = "";
            this.APPROVED = "";
            this.REJECTED = "";
            this.NOT_REQUESTED = "";
            this.EMERGENCY_WORKFLOW = "";
            this.STANDARD_WORKFLOW = "";
            this.NORMAL_WORKFLOW = "";
        }
        initialize(changeGr) { }
        _getAPI() {
            return null;
        }
        getState() {
            return "";
        }
        getStateFieldName() {
            return "";
        }
        getInitialState() {
            return "";
        }
        isInitialState() {
            return false;
        }
        changesToInitialState() {
            return false;
        }
        changesFromInitialState() {
            return false;
        }
        revertToInitialState() {
            return false;
        }
        isTerminalState() {
            return false;
        }
        isState(stateValue) {
            return false;
        }
        isNextState(stateValue) {
            return false;
        }
        isNextManualState(stateValue) {
            return false;
        }
        getNextStates() {
            return [];
        }
        getNextManualStates() {
            return [];
        }
        moveTo(stateValue) {
            return false;
        }
        canMoveTo(stateValue) {
            return false;
        }
        evaluateMoveTo(stateValue, returnAll) {
            return null;
        }
        canImplement() {
            return false;
        }
        getAttributesModelContains() {
            return [];
        }
        modelContainsAttribute(attributeName) {
            return false;
        }
        hasStateAttribute(attributeName) {
            return false;
        }
        getStateAttributes() {
            return [];
        }
        isValidTable() {
            return false;
        }
        isUsingModel() {
            return false;
        }
        isEnforceData() {
            return false;
        }
        setGlobalFromNew(value) { }
        isGlobalFromNew() {
            return false;
        }
        setTransactionChangeState(stateValue) { }
        getTransactionChangeState() {
            return "";
        }
        canModifyCI(checkTransaction) {
            return false;
        }
        isNew() {
            return false;
        }
        changesToNew() {
            return false;
        }
        changesFromNew() {
            return false;
        }
        setNew() {
            return false;
        }
        toNew() {
            return false;
        }
        revertToNew() {
            return false;
        }
        isAssess() {
            return false;
        }
        changesToAssess() {
            return false;
        }
        setAssess() {
            return false;
        }
        assess() {
            return false;
        }
        isAuthorize() {
            return false;
        }
        changesToAuthorize() {
            return false;
        }
        setAuthorize() {
            return false;
        }
        authorize() {
            return false;
        }
        isScheduled() {
            return false;
        }
        changesToScheduled() {
            return false;
        }
        setScheduled() {
            return false;
        }
        scheduled() {
            return false;
        }
        isImplement() {
            return false;
        }
        changesToImplement() {
            return false;
        }
        setImplement() {
            return false;
        }
        implement() {
            return false;
        }
        isReview() {
            return false;
        }
        changesToReview() {
            return false;
        }
        setReview() {
            return false;
        }
        review() {
            return false;
        }
        isClosed() {
            return false;
        }
        changesToClosed() {
            return false;
        }
        isClosedSuccessful() {
            return false;
        }
        isClosedSuccessfulWithIssues() {
            return false;
        }
        isClosedUnsuccessful() {
            return false;
        }
        setClose(closeCode, closeNotes) {
            return false;
        }
        close(closeCode, closeNotes) {
            return false;
        }
        closeSuccessful(closeNotes) {
            return false;
        }
        closeSuccessfulWithIssues(closeNotes) {
            return false;
        }
        closeUnsuccessful(closeNotes) {
            return false;
        }
        isCanceled() {
            return false;
        }
        changesToCanceled() {
            return false;
        }
        setCancel() {
            return false;
        }
        cancel() {
            return false;
        }
        isApprovalRequested() {
            return false;
        }
        isApproved() {
            return false;
        }
        isRejected() {
            return false;
        }
        setRequestApproval() {
            return false;
        }
        requestApproval() {
            return false;
        }
        isOnHold() {
            return false;
        }
        onHoldChanges() {
            return false;
        }
        onHoldReasonChanges() {
            return false;
        }
        syncOnHoldTasks() { }
        updateOnHoldReason() { }
        addToOnHoldTaskList(taskID) { }
        cancelAssociatedTasks() { }
        hasOpenTasks() {
            return false;
        }
        modifyType(previousType) { }
        deleteDefaultWorkflowContext() { }
        hasValidChoice(field, value) {
            return false;
        }
        setValue(name, value) { }
        getValue(name) {
            return null;
        }
        setDisplayValue(name, value) { }
        getDisplayValue(name) {
            return null;
        }
        insert() {
            return "";
        }
        update() {
            return "";
        }
        refreshGlideRecord() { }
        isChangeRequest() {
            return false;
        }
        toString() {
            return "";
        }
        toJS() {
            return null;
        }
        static getAPIClass() {
            return null;
        }
        static newNormal() {
            return null;
        }
        static newStandard() {
            return null;
        }
        static newEmergency() {
            return null;
        }
        static newChange(modelSysIdOrType) {
            return null;
        }
    }
    ChangeRequestSNC.ENFORCE_DATA_REQ_PROP = "";
    ChangeRequestSNC.TYPE_COMPATIBILITY = "";
    ChangeRequestSNC.MANAGE_WORKFLOW = "";
    ChangeRequestSNC.CHANGE_REQUEST_FROM_NEW = "";
    ChangeRequestSNC.TRANSACTION_CHANGE_STATE = "";
    ChangeRequestSNC.NORMAL = "";
    ChangeRequestSNC.STANDARD = "";
    ChangeRequestSNC.EMERGENCY = "";
    ChangeRequestSNC.LEGACY_STATE = null;
    global.ChangeRequestSNC = ChangeRequestSNC;
    class ChangeRequest extends ChangeRequestSNC {
        constructor(changeGr) {
            super(changeGr);
            this.type = "";
        }
        initialize(changeGr) { }
        static newNormal() {
            return null;
        }
        static newStandard() {
            return null;
        }
        static newEmergency() {
            return null;
        }
        static newChange(modelSysIdOrType) {
            return null;
        }
    }
    ChangeRequest.CHANGE_REQUEST = "";
    ChangeRequest.NORMAL = "";
    ChangeRequest.STANDARD = "";
    ChangeRequest.EMERGENCY = "";
    ChangeRequest.LEGACY_STATE = null;
    global.ChangeRequest = ChangeRequest;
    class ChangeProcessSNC {
        static findAll(orderBy, textSearch, encodedQuery) {
            return new GlideRecordSecure_1.GlideRecordSecure("");
        }
        static findById(sysId) {
            return null;
        }
        static newChange(nameValuePairs) {
            return null;
        }
        static newChangeProcess(nameValuePairs) {
            return null;
        }
        constructor(_gr, _gs) {
            this.type = "";
        }
        initialize(_gr, _gs) { }
        resolveState(state) {
            return null;
        }
        moveTo(state) {
            return false;
        }
        canMoveTo(state) {
            return false;
        }
        evaluateMoveTo(state) {
            return null;
        }
        approve(comments) {
            return false;
        }
        reject(comments) {
            return false;
        }
        _processApproval(approveReject, comments) {
            return false;
        }
        getCIs(type) {
            return null;
        }
        getTasks() {
            return null;
        }
        getChangeRequest() {
            return new ChangeRequest(null);
        }
        toString() {
            return "";
        }
        toJS() {
            return null;
        }
        deleteRecord() {
            return false;
        }
        canWriteTo(fieldName) {
            return false;
        }
        insert() {
            return "";
        }
        update() {
            return "";
        }
        refreshGlideRecord() { }
        getGlideRecord() {
            return new GlideRecord_1.GlideRecord("");
        }
        setValue(fieldName, value) { }
        setValues(values) {
            return null;
        }
        resolveReference(fieldName) {
            return null;
        }
        isReferenceField(fieldName) {
            return false;
        }
    }
    ChangeProcessSNC.LOG_PROP = "";
    ChangeProcessSNC.STATE_MODEL_PLUGIN = "";
    ChangeProcessSNC.SHORT_DESC = "";
    ChangeProcessSNC.NAME = "";
    ChangeProcessSNC.NUMBER = "";
    ChangeProcessSNC.TYPE = "";
    ChangeProcessSNC.MODEL = "";
    ChangeProcessSNC.STATE = "";
    global.ChangeProcessSNC = ChangeProcessSNC;
    class ChangeProcess extends ChangeProcessSNC {
        constructor(_gr, _gs) {
            super(_gr, _gs);
            this.type = "";
        }
        initialize(_gr, _gs) { }
    }
    ChangeProcess.newChangeProcess = ChangeProcessSNC.newChangeProcess;
    ChangeProcess.newChange = ChangeProcessSNC.newChange;
    ChangeProcess.findAll = ChangeProcessSNC.findAll;
    ChangeProcess.findById = ChangeProcessSNC.findById;
    global.ChangeProcess = ChangeProcess;
    class StandardChangeTemplateSNC extends ChangeProcess {
        constructor(_gr, _gs) {
            super(_gr, _gs);
            this.type = "";
        }
        initialize(_gr, _gs) { }
        applyToChange(changeRequestGr) {
            return false;
        }
        copyAttachments(changeRequestGr) {
            return false;
        }
        static findById(sysId) {
            return null;
        }
        static findAll(orderBy, textSearch, encodedQuery) {
            return new GlideRecordSecure_1.GlideRecordSecure("");
        }
    }
    StandardChangeTemplateSNC.CHANGE_RECORD_PRODUCER = "";
    StandardChangeTemplateSNC.CHANGE_TEMPLATE = "";
    global.StandardChangeTemplateSNC = StandardChangeTemplateSNC;
    class StandardChangeTemplate extends StandardChangeTemplateSNC {
        constructor(_gr, _gs) {
            super(_gr, _gs);
            this.type = "";
        }
        initialize(_gr, _gs) { }
    }
    StandardChangeTemplate.findById = StandardChangeTemplateSNC.findById;
    StandardChangeTemplate.findAll = StandardChangeTemplateSNC.findAll;
    global.StandardChangeTemplate = StandardChangeTemplate;
    class GlideQuery {
        constructor(table, plan, options) {
            this.type = 'GlideQuery';
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
        where(fieldOrQuery, operator, value) {
            return new GlideQuery(this.table);
        }
        orWhere(fieldOrQuery, operator, value) {
            return new GlideQuery(this.table);
        }
        whereNotNull(field) {
            return new GlideQuery(this.table);
        }
        orWhereNotNull(field) {
            return new GlideQuery(this.table);
        }
        whereNull(field) {
            return new GlideQuery(this.table);
        }
        orWhereNull(field) {
            return new GlideQuery(this.table);
        }
        getBy(keyValues, selectedFields) {
            return {};
        }
        get(key, selectFields) {
            return {};
        }
        insert(keyValues, selectFields) {
            return {};
        }
        insertOrUpdate(changes, selectFields, reason) {
            return {};
        }
        update(changes, selectFields, reason, prefetchedSchema, planOverride, insertWhenNotFound) {
            return {};
        }
        updateMultiple(changes) {
            return { rowCount: 0 };
        }
        del() { }
        deleteMultiple() { }
        select(...fields) {
            return {};
        }
        selectOne(...fields) {
            return {};
        }
        disableWorkflow() {
            return new GlideQuery(this.table);
        }
        disableAutoSysFields() {
            return new GlideQuery(this.table);
        }
        forceUpdate() {
            return new GlideQuery(this.table);
        }
        orderBy(field) {
            return new GlideQuery(this.table);
        }
        orderByDesc(fieldOrAggregate, field) {
            return new GlideQuery(this.table);
        }
        limit(limit) {
            return new GlideQuery(this.table);
        }
        withAcls() {
            return new GlideQuery(this.table);
        }
        avg(field) {
            return {};
        }
        max(field) {
            return {};
        }
        min(field) {
            return {};
        }
        sum(field) {
            return {};
        }
        count() {
            return 0;
        }
        groupBy(...fields) {
            return new GlideQuery(this.table);
        }
        aggregate(aggregateType, field) {
            return new GlideQuery(this.table);
        }
        having(aggregate, field, operator, value) {
            return new GlideQuery(this.table);
        }
        toGlideRecord() {
            return {};
        }
        static parse(table, encodedQuery) {
            return new GlideQuery(table);
        }
        toString() {
            return `GlideQuery<${this.table}> ${JSON.stringify(this.plan, null, 2)}`;
        }
        static checkHavingOperatorAndValue(operator, value) { }
        static checkWhereOperator(operator, value) { }
        static flattenFields(firstArg, args) {
            return [];
        }
        static checkWhereAmbiguity(glideQuery) {
            return glideQuery;
        }
    }
    GlideQuery.operators = {
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
    global.GlideQuery = GlideQuery;
})(global || (exports.global = global = {}));
//# sourceMappingURL=global.js.map