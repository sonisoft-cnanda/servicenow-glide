import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class KMFCryptoOperation {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    doOperation(data?: any, additionalParameters?: any): any;
    withAdditionalInput(additionalInput?: any): KMFCryptoOperation;
    withAlgorithm(algorithm?: string): KMFCryptoOperation;
    withInputFormat(inputFormat?: string): KMFCryptoOperation;
    withInputType(inputType?: string): KMFCryptoOperation;
    withOutputFormat(outputFormat?: string): KMFCryptoOperation;
    withOutputType(outputType?: string): KMFCryptoOperation;
    withSysId(sysId?: string): KMFCryptoOperation;
}
