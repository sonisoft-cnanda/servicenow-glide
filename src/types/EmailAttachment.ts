export class EmailAttachment {
    subject: string = "";
    body_text: string = "";
    body_html: string = "";
    from(): Array<string> {
        return [];
    }
    headers(): Record<string, Array<string>> {
        return {} as any;
    }
    parts(): Array<Record<string, string>> {
        return [];
    }
}
