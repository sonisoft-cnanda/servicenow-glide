"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeniusResultContext = void 0;
class GeniusResultContext {
    constructor(cx, args, ctorObj, inNewExpr) { }
    addAsyncGRTransactionId(transactionId) {
    }
    addQueryMetadata(key, value) {
    }
    addTransactionId(transactionId) {
    }
    getAdditionalContext() {
        return "";
    }
    getGeniusResultMode() {
        return "";
    }
    getMatchingDocuments() {
        return new Array();
    }
    getOriginalSearchPhrase() {
        return "";
    }
    getPredictionResult() {
        return new Array();
    }
    getQueryMetadata(key) {
        return "";
    }
    getSearchContext() {
        return {};
    }
    getSearchQueryRequestDetails() {
        return {};
    }
    getSearchResults() {
        return new Array();
    }
    setSearchPhraseForAllRequests(searchPhrase) {
        return false;
    }
}
exports.GeniusResultContext = GeniusResultContext;
//# sourceMappingURL=GeniusResultContext.js.map