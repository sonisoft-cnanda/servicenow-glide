import { ErrorCode } from "./ErrorCode";

export class ErrorSuggestion {
    constructor() {  }
    getContent(): string {
        return "";
    }
    getErrorCode(): ErrorCode {
        return null as any;
    }
    getIcon(): string {
        return "";
    }
    getId(): string {
        return "";
    }
    getLabel(): string {
        return "";
    }
    getMessage(): string {
        return "";
    }
    getName(): string {
        return "";
    }
    getScope(): string {
        return "";
    }
    getType(): string {
        return "";
    }
    isGlobal(): boolean {
        return false;
    }
}
