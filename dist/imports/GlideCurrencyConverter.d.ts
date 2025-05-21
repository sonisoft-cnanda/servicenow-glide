import { GlideCurrencyExchangeValue } from './GlideCurrencyExchangeValue.js';
export declare class GlideCurrencyConverter {
    constructor();
    convert(): GlideCurrencyExchangeValue;
    setAmount(value?: string): GlideCurrencyConverter;
    setDate(date?: any): GlideCurrencyConverter;
    setDateTime(date?: any): GlideCurrencyConverter;
    setFromCurrency(fromCurrency?: string): GlideCurrencyConverter;
    setRateTable(rateTable?: string): GlideCurrencyConverter;
    setRateTableQueryCondition(queryCondition?: string): GlideCurrencyConverter;
    setToCurrency(toCurrency?: string): GlideCurrencyConverter;
}
//# sourceMappingURL=GlideCurrencyConverter.d.ts.map