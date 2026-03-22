import { AuthPolicyResult } from "./AuthPolicyResult";

export class AuthPolicyAPI {
    constructor() {  }
    executePolicies(policyIds?: Array<any>, parameters?: Record<any, any>, matchAll?: boolean): AuthPolicyResult {
        return null as any;
    }
    executePolicy(policyId?: string, parameters?: Record<any, any>): AuthPolicyResult {
        return null as any;
    }
    executePostAuthLoginPolicy(parameters?: Record<any, any>): AuthPolicyResult {
        return null as any;
    }
    executePostAuthPolicies(policyIds?: Array<any>, username?: string, matchAll?: boolean): AuthPolicyResult {
        return null as any;
    }
    executePreAuthLoginPolicy(parameters?: Record<any, any>): AuthPolicyResult {
        return null as any;
    }
    executePreAuthPolicies(policyIds?: Array<any>, matchAll?: boolean): AuthPolicyResult {
        return null as any;
    }
}
