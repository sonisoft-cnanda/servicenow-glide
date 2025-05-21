"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionTableAPI = void 0;
const ScriptableObject_1 = require("./ScriptableObject.js");
const GlideRecord_1 = require("./GlideRecord.js");
const NativeArray_1 = require("./NativeArray.js");
class DecisionTableAPI {
    constructor() { }
    createAnswerElementChoices(decisionId, choices) {
        return {};
    }
    createAnswerElements(decisionId, answerElements) {
        return {};
    }
    createConditions(decisionId, conditions) {
        return {};
    }
    createDecisionTable(decisionTable) {
        return {};
    }
    createInputChoices(decisionId, choices) {
        return {};
    }
    createInputs(decisionId, inputs) {
        return {};
    }
    createQuestions(decisionId, questions) {
        return {};
    }
    deleteAnswerElement(answerElementId) {
        return {};
    }
    deleteChoice(choiceId) {
        return {};
    }
    deleteCondition(conditionId) {
        return {};
    }
    deleteDecisionTable(decisionId) {
        return {};
    }
    deleteInput(inputId) {
        return {};
    }
    deleteQuestion(decisionId) {
        return {};
    }
    deleteStaleMultipleAnswerRecords() {
    }
    executeCondition(decisionId, inputs, condition) {
        return false;
    }
    executeDecisions(decisionId, inputs) {
        return {};
    }
    findOrCreateMultipleAnswerRecord(decisionId, answerElementValues) {
        return "";
    }
    findOrCreateMultipleAnswerRecords(decisionId, answerElementValuesMap) {
        return {};
    }
    getAll() {
        return new ScriptableObject_1.ScriptableObject();
    }
    getAllAsJSON() {
        return "";
    }
    getAnswerElements(decisionId) {
        return new ScriptableObject_1.ScriptableObject();
    }
    getAnswers(decisionId) {
        return new ScriptableObject_1.ScriptableObject();
    }
    getAnswersAsJSON(decisionId) {
        return "";
    }
    getDecision(decisionId, inputs) {
        return new GlideRecord_1.GlideRecord("");
    }
    getDecisionTable(decisionId) {
        return new ScriptableObject_1.ScriptableObject();
    }
    getDecisionTableAsJSON(decisionId) {
        return "";
    }
    getDecisions(decisionId, inputs) {
        return new NativeArray_1.NativeArray();
    }
    getInputs(decisionId) {
        return new ScriptableObject_1.ScriptableObject();
    }
    getInputsAsJSON(decisionId) {
        return "";
    }
    getQuestions(decisionId) {
        return new ScriptableObject_1.ScriptableObject();
    }
    getQuestionsAsJSON(decisionId) {
        return "";
    }
    updateAnswerElement(answerElementId, answerElement) {
        return {};
    }
    updateChoice(choiceId, choice) {
        return {};
    }
    updateCondition(conditionId, updates) {
        return {};
    }
    updateDecisionTable(decisionId, decisionTable) {
        return {};
    }
    updateInput(inputId, updates) {
        return {};
    }
    updateQuestion(decisionId, question) {
        return {};
    }
}
exports.DecisionTableAPI = DecisionTableAPI;
//# sourceMappingURL=DecisionTableAPI.js.map