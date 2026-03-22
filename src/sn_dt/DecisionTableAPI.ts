import { NativeArray } from "../imports/NativeArray";
import { ScriptableObject } from "../imports/ScriptableObject";
import { GlideRecord } from "../types/GlideRecord";

export class DecisionTableAPI {
    constructor() {  }
    createAnswerElementChoices(decisionId?: string, choices?: Array<any>): Record<any, any> {
        return {} as any;
    }
    createAnswerElements(decisionId?: string, answerElements?: Array<any>): Record<any, any> {
        return {} as any;
    }
    createConditions(decisionId?: string, conditions?: Array<any>): Record<any, any> {
        return {} as any;
    }
    createDecisionTable(decisionTable?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    createInputChoices(decisionId?: string, choices?: Array<any>): Record<any, any> {
        return {} as any;
    }
    createInputs(decisionId?: string, inputs?: Array<any>): Record<any, any> {
        return {} as any;
    }
    createQuestions(decisionId?: string, questions?: Array<any>): Record<any, any> {
        return {} as any;
    }
    deleteAnswerElement(answerElementId?: string): Record<any, any> {
        return {} as any;
    }
    deleteChoice(choiceId?: string): Record<any, any> {
        return {} as any;
    }
    deleteCondition(conditionId?: string): Record<any, any> {
        return {} as any;
    }
    deleteDecisionTable(decisionId?: string): Record<any, any> {
        return {} as any;
    }
    deleteInput(inputId?: string): Record<any, any> {
        return {} as any;
    }
    deleteInputWithDecisions(inputId?: string): Record<any, any> {
        return {} as any;
    }
    deleteQuestion(decisionId?: string): Record<any, any> {
        return {} as any;
    }
    deleteStaleMultipleAnswerRecords(): void {
        
    }
    evaluateDecisionQuestions(decisionId?: string, inputs?: Record<any, any>, firstMatch?: boolean): Array<any> {
        return [];
    }
    evaluateDecisionTableIterator(decisionId?: string, inputs?: Array<any>, firstMatch?: boolean): Array<any> {
        return [];
    }
    executeCondition(decisionId?: string, inputs?: Record<any, any>, condition?: string): boolean {
        return false;
    }
    executeDecisions(decisionId?: string, inputs?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    findOrCreateMultipleAnswerRecord(decisionId?: string, answerElementValues?: Record<any, any>): string {
        return "";
    }
    findOrCreateMultipleAnswerRecords(decisionId?: string, answerElementValuesMap?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    getAll(): ScriptableObject {
        return null as any;
    }
    getAllAsJSON(): string {
        return "";
    }
    getAnswerElements(decisionId?: string): ScriptableObject {
        return null as any;
    }
    getAnswers(decisionId?: string): ScriptableObject {
        return null as any;
    }
    getAnswersAsJSON(decisionId?: string): string {
        return "";
    }
    getDecision(decisionId?: string, inputs?: Record<any, any>): GlideRecord {
        return null as any;
    }
    getDecisionTable(decisionId?: string): ScriptableObject {
        return null as any;
    }
    getDecisionTableAsJSON(decisionId?: string): string {
        return "";
    }
    getDecisions(decisionId?: string, inputs?: Record<any, any>): NativeArray {
        return null as any;
    }
    getInputs(decisionId?: string): ScriptableObject {
        return null as any;
    }
    getInputsAsJSON(decisionId?: string): string {
        return "";
    }
    getQuestions(decisionId?: string): ScriptableObject {
        return null as any;
    }
    getQuestionsAsJSON(decisionId?: string): string {
        return "";
    }
    updateAnswerElement(answerElementId?: string, answerElement?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateChoice(choiceId?: string, choice?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateCondition(conditionId?: string, updates?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateDecisionTable(decisionId?: string, decisionTable?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateInput(inputId?: string, updates?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateQuestion(decisionId?: string, question?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
}
