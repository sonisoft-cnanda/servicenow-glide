import { GlideCurrencyExchangeValue } from './GlideCurrencyExchangeValue';

export class GlideCurrencyConverter {
    constructor() {}
    convert(): GlideCurrencyExchangeValue {
        return new GlideCurrencyExchangeValue();
    }
    setAmount(value?: string): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
    setDate(date?: any): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
    setDateTime(date?: any): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
    setFromCurrency(fromCurrency?: string): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
    setRateTable(rateTable?: string): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
    setRateTableQueryCondition(queryCondition?: string): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
    setToCurrency(toCurrency?: string): GlideCurrencyConverter {
        return new GlideCurrencyConverter();
    }
}
