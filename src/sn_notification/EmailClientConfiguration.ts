export class EmailClientConfiguration {
    constructor() {  }
    getEmailAddressFilters(): string {
        return "";
    }
    getId(): string {
        return "";
    }
    isDisplayFrom(): boolean {
        return false;
    }
    isDisplayReplyTo(): boolean {
        return false;
    }
    isToOptional(): boolean {
        return false;
    }
}
