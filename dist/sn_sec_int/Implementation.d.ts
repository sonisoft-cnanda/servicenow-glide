export type ProcessDataResult = {
    value: any;
    order: number;
    mandatory: boolean;
    label: string;
    type: string;
};
export declare class Implementation {
    constructor();
    setConfiguration(implementationID: string, configs: {
        [key: string]: any;
    }): void;
    getConfiguration(implementationID: string, getEncryptedValue: boolean, fullConfig: boolean): {
        [key: string]: any;
    };
    private _processImplConfigData;
    private _processData;
    private _processConfigData;
    getImplementationId(integrationID: string, domain?: string): string[];
    createImplementation(integrationID: string, config: {
        [key: string]: any;
    }): string;
    deleteImplementation(implId: string): boolean;
}
//# sourceMappingURL=Implementation.d.ts.map