import { GlideRecord } from "../imports/GlideRecord";

export type ProcessDataResult = {
    value: any;
    order: number;
    mandatory: boolean;
    label: string;
    type: string;
};

export class Implementation {
    constructor() {}

    setConfiguration(implementationID: string, configs: { [key: string]: any }) {   
    }

    getConfiguration(implementationID: string, getEncryptedValue: boolean, fullConfig: boolean) : { [key: string]: any } {
        const config: { [key: string]: any } = {};
        return config;
    }

    private _processImplConfigData(implConfigGR: GlideRecord, getEncryptedValue: boolean) : ProcessDataResult {
        return this._processData("", "", new GlideRecord(""));
    }

    private _processData(value: any, dataType: string, config: GlideRecord) : ProcessDataResult {
        return {
            value: "",
            order: 1,
            mandatory: false,
            label: "",
            type: ""
        } as ProcessDataResult;
    }

    private _processConfigData(configGR: GlideRecord, getEncryptedValue: boolean) : ProcessDataResult {
        return this._processData("", "", new GlideRecord(""));
    }

    getImplementationId(integrationID: string, domain?: string) : string[] {
        const implementation: string[] = [];
      
        return implementation;
    }

    createImplementation(integrationID: string, config: { [key: string]: any }) : string{
      
        return "record_sys_id";
    }

    deleteImplementation(implId: string)  : boolean{
        
        return true;
    }
}