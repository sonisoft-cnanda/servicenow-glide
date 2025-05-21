import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class GlideCurrencyFormatter {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    format(a?: any, b?: any): string {
        return "";
    }
    setLocale(language?: string, country?: string): GlideCurrencyFormatter {
        return new GlideCurrencyFormatter();
    }
    setMaxFractionDigits(maxFractionDigits?: number): GlideCurrencyFormatter {
        return new GlideCurrencyFormatter();
    }
    setMinFractionDigits(minFractionDigits?: number): GlideCurrencyFormatter {
        return new GlideCurrencyFormatter();
    }
}
