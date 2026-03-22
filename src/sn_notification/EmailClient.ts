import { EmailClientConfiguration } from "./EmailClientConfiguration";
import { EmailClientTemplate } from "./EmailClientTemplate";

export class EmailClient {
    static getConfigurationByTable(table?: string): EmailClientConfiguration {
        return null as any;
    }
    static getFromAddressesByTemplate(templateId?: string, targetTable?: string, targetId?: string): Array<any> {
        return [];
    }
    static getReplyTemplateByTargetRecord(responseId?: string, responseType?: string): EmailClientTemplate {
        return null as any;
    }
    static getTemplateById(templateId?: string): EmailClientTemplate {
        return null as any;
    }
    static getTemplateByTargetRecord(targetTable?: string, targetId?: string): EmailClientTemplate {
        return null as any;
    }
}
