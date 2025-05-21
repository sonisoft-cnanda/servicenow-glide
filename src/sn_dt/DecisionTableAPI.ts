import { ScriptableObject } from '../imports/ScriptableObject';
import { GlideRecord } from '../imports/GlideRecord';
import { NativeArray } from '../imports/NativeArray';

export class DecisionTableAPI {
    constructor() {}
    createAnswerElementChoices(decisionId?: string, choices?: Array<any>): Record<any, any> {
        return {};
    }
    createAnswerElements(decisionId?: string, answerElements?: Array<any>): Record<any, any> {
        return {};
    }
    createConditions(decisionId?: string, conditions?: Array<any>): Record<any, any> {
        return {};
    }
    createDecisionTable(decisionTable?: Record<any, any>): Record<any, any> {
        return {};
    }
    createInputChoices(decisionId?: string, choices?: Array<any>): Record<any, any> {
        return {};
    }
    createInputs(decisionId?: string, inputs?: Array<any>): Record<any, any> {
        return {};
    }
    createQuestions(decisionId?: string, questions?: Array<any>): Record<any, any> {
        return {};
    }
    deleteAnswerElement(answerElementId?: string): Record<any, any> {
        return {};
    }
    deleteChoice(choiceId?: string): Record<any, any> {
        return {};
    }
    deleteCondition(conditionId?: string): Record<any, any> {
        return {};
    }
    deleteDecisionTable(decisionId?: string): Record<any, any> {
        return {};
    }
    deleteInput(inputId?: string): Record<any, any> {
        return {};
    }
    deleteQuestion(decisionId?: string): Record<any, any> {
        return {};
    }
    deleteStaleMultipleAnswerRecords(): void {
        
    }
    executeCondition(decisionId?: string, inputs?: Record<any, any>, condition?: string): boolean {
        return false;
    }
    executeDecisions(decisionId?: string, inputs?: Record<any, any>): Record<any, any> {
        return {};
    }
    findOrCreateMultipleAnswerRecord(decisionId?: string, answerElementValues?: Record<any, any>): string {
        return "";
    }
    findOrCreateMultipleAnswerRecords(decisionId?: string, answerElementValuesMap?: Record<any, any>): Record<any, any> {
        return {};
    }
    getAll(): ScriptableObject {
        return new ScriptableObject();
    }
    getAllAsJSON(): string {
        return "";
    }
    getAnswerElements(decisionId?: string): ScriptableObject {
        return new ScriptableObject();
    }
    getAnswers(decisionId?: string): ScriptableObject {
        return new ScriptableObject();
    }
    getAnswersAsJSON(decisionId?: string): string {
        return "";
    }
    getDecision(decisionId?: string, inputs?: Record<any, any>): GlideRecord {
        return new GlideRecord("");
    }
    getDecisionTable(decisionId?: string): ScriptableObject {
        return new ScriptableObject();
    }
    getDecisionTableAsJSON(decisionId?: string): string {
        return "";
    }
    getDecisions(decisionId?: string, inputs?: Record<any, any>): NativeArray {
        return new NativeArray();
    }
    getInputs(decisionId?: string): ScriptableObject {
        return new ScriptableObject();
    }
    getInputsAsJSON(decisionId?: string): string {
        return "";
    }
    getQuestions(decisionId?: string): ScriptableObject {
        return new ScriptableObject();
    }
    getQuestionsAsJSON(decisionId?: string): string {
        return "";
    }
    updateAnswerElement(answerElementId?: string, answerElement?: Record<any, any>): Record<any, any> {
        return {};
    }
    updateChoice(choiceId?: string, choice?: Record<any, any>): Record<any, any> {
        return {};
    }
    updateCondition(conditionId?: string, updates?: Record<any, any>): Record<any, any> {
        return {};
    }
    updateDecisionTable(decisionId?: string, decisionTable?: Record<any, any>): Record<any, any> {
        return {};
    }
    updateInput(inputId?: string, updates?: Record<any, any>): Record<any, any> {
        return {};
    }
    updateQuestion(decisionId?: string, question?: Record<any, any>): Record<any, any> {
        return {};
    }
}
