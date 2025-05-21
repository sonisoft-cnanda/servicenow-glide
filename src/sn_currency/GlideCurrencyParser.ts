import { GlideCurrencyValue } from '../imports/GlideCurrencyValue';

export class GlideCurrencyParser {
    constructor() {}
    parse(value?: string): GlideCurrencyValue {
        return new GlideCurrencyValue();
    }
    setDefaultCurrencyCode(currencyCode?: string): GlideCurrencyParser {
        return new GlideCurrencyParser();
    }
    setLocale(language?: string, country?: string): GlideCurrencyParser {
        return new GlideCurrencyParser();
    }
}
