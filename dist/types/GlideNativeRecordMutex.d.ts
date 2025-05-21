import { Context } from '../imports/Context.js';
import { Function } from '../imports/Function.js';
export declare class GlideNativeRecordMutex {
    constructor(cs?: Context, args?: any[], ctorObj?: Function, inNew?: boolean);
    get(): boolean;
    release(): void;
    setMaxSpins(maxSpins?: number): void;
    setMutexExpires(expires?: number): void;
    touch(): void;
}
//# sourceMappingURL=GlideNativeRecordMutex.d.ts.map