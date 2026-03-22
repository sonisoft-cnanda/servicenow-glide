export class IDRValidationResult {
    constructor() {  }
    getErrorMessages(): Array<any> {
        return [];
    }
    getWarningMessages(): Array<any> {
        return [];
    }
    hasErrors(): boolean {
        return false;
    }
    hasWarnings(): boolean {
        return false;
    }
    isDisplayReadOnly(): boolean {
        return false;
    }
}
