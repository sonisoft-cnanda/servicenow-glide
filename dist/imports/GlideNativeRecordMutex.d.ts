import { Context } from './Context.js';
import { Function } from './Function.js';
export declare class GlideNativeRecordMutex {
    constructor(cs?: Context, args?: any[], ctorObj?: Function, inNew?: boolean);
    get(): boolean;
    release(): void;
    setMaxSpins(maxSpins?: number): void;
    setMutexExpires(expires?: number): void;
    touch(): void;
}
//# sourceMappingURL=GlideNativeRecordMutex.d.ts.map