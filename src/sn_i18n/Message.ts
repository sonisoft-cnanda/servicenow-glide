export class Message {
    static getMessage(code: string, message: string, args?: Map<any, any>): string {
        return "";
    }
    static getMessageLang(code: string, message: string, args?: Map<any, any>, language?: string): string {
        return "";
    }
    static getMessageLangNoDefault(code: string, message: string, args?: Map<any, any>, language?: string): string {
        return "";
    }
    static stripComments(message: string): string {
        return "";
    }
}
