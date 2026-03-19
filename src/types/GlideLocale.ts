import { Locale } from '../imports/Locale';

export class GlideLocale {
    constructor() {}
    get(): GlideLocale {
        return new GlideLocale();
    }
    getCurrencyCode(): string {
        return "";
    }
    getCurrent(): Locale {
        return new Locale();
    }
    getDecimalSeparator(): string {
        return "";
    }
    getGroupingSeparator(): string {
        return "";
    }
    getSystemLocale(): Locale {
        return new Locale();
    }
}
