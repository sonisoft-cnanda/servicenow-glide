import { Context } from '../imports/Context';
import { Function } from '../imports/Function';

export class KMFCryptoOperation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    doOperation(data?: any, additionalParameters?: any): any {
        return null;
    }
    withAdditionalInput(additionalInput?: any): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
    withAlgorithm(algorithm?: string): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
    withInputFormat(inputFormat?: string): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
    withInputType(inputType?: string): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
    withOutputFormat(outputFormat?: string): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
    withOutputType(outputType?: string): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
    withSysId(sysId?: string): KMFCryptoOperation {
        return new KMFCryptoOperation();
    }
}
