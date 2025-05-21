export declare class DynamicTranslation {
    fixActivateServicenowTranslator(): void;
    fixDefaultSchemaInTranslatorConfig(): void;
    fixSchemaForTranslatorConfigTable(): void;
    fixTranslatorConfigRecords(oldTranslatorConfigs?: any, newTranslatorConfigs?: any, defaultVersion?: any, versionToBeDefaulted?: any): void;
    getDetectedLanguage(text?: any, parms?: any): any;
    getDetectedLanguages(texts?: any, parms?: any): any;
    getTranslation(textToTranslate?: any, parms?: any): any;
    getTranslations(textsToTranslate?: any, parms?: any): any;
    isEnabled(parms?: any): any;
    isTranslationEnabled(translator?: any): any;
    patchVersionIfWrong(translatorConfigs?: any): void;
}
//# sourceMappingURL=DynamicTranslation.d.ts.map