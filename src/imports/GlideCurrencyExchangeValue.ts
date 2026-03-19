import { GlideCurrencyValue } from './GlideCurrencyValue';

export class GlideCurrencyExchangeValue {
    constructor() {}
    equals(o?: any): boolean {
        return false;
    }
    getAmount(): string {
        return "";
    }
    getCurrency(): string {
        return "";
    }
    getCurrencyValue(): GlideCurrencyValue {
        return new GlideCurrencyValue();
    }
    getOriginalAmount(): string {
        return "";
    }
    getOriginalCurrency(): string {
        return "";
    }
    getRate(): string {
        return "";
    }
    getRateSysId(): string {
        return "";
    }
    toString(): string {
        return "";
    }
}
