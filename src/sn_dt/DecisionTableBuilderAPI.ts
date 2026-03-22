export class DecisionTableBuilderAPI {
    constructor() {  }
    copyDecisionTable(decisionId?: string, decisionTableName?: string, copyDecisions?: boolean, application?: string, includeDelta?: boolean): Record<any, any> {
        return {} as any;
    }
    createAnswerElement(answerElement?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    createChoice(choice?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    createDecisionTable(className?: string, decisionTable?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    createInput(inputDetails?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    createQuestion(question?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    deleteAnswerElement(answerElementId?: string): Record<any, any> {
        return {} as any;
    }
    deleteChoice(choiceId?: string): Record<any, any> {
        return {} as any;
    }
    deleteDecisionTable(decisionId?: string): Record<any, any> {
        return {} as any;
    }
    deleteInput(inputId?: string): Record<any, any> {
        return {} as any;
    }
    deleteObsoleteQuestions(decisionId?: string, limit?: number): Record<any, any> {
        return {} as any;
    }
    deleteQuestion(decisionTableId?: string): Record<any, any> {
        return {} as any;
    }
    evaluateDecisionTable(decisionId?: string, inputs?: Record<any, any>, includeDelta?: boolean, isFirstMatch?: boolean): Record<any, any> {
        return {} as any;
    }
    findOrCreateMultipleAnswerRecords(decisionId?: string, answerElementValuesMap?: Record<any, any>, questionAnswerLabelMap?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    getCurrentSessionDomain(): string {
        return "";
    }
    getFilteredQuestions(decisionId?: string, deltaDecisionId?: string, onlyPublishedDecisions?: boolean, answerTable?: string, fromIndex?: number, resultsCount?: number, filterPatternConfigs?: Record<any, any>[]): Record<any, any> {
        return {} as any;
    }
    getSortedAndFilteredQuestions(decisionId?: string, deltaDecisionId?: string, onlyPublishedDecisions?: boolean, answerTable?: string, fromIndex?: number, resultsCount?: number, sortConfig?: Record<any, any>, filterPatternConfigs?: Record<any, any>[]): Record<any, any> {
        return {} as any;
    }
    syncQuestionsFromDelta(decisionId?: string, deltaDecisionId?: string, answerTable?: string, limit?: number): Record<any, any> {
        return {} as any;
    }
    updateAnswerElement(answerElementId?: string, answerElement?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateChoice(choiceId?: string, choice?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateDecisionTable(className?: string, decisionId?: string, decisionTable?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateInput(inputId?: string, updates?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
    updateQuestion(questionId?: string, question?: Record<any, any>): Record<any, any> {
        return {} as any;
    }
}
