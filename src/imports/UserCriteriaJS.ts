import { Context } from './Context';
import { Function } from './Function';

export class UserCriteriaJS {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {}
    create(columnValues?: Record<any, any>, standardUpdate?: boolean): string {
        return "";
    }
    deleteRecord(): boolean {
        return false;
    }
    read(columns?: string[]): Record<any, any> {
        return {};
    }
    setActive(active?: boolean): void {
        
    }
    setAdvanced(advanced?: boolean): void {
        
    }
    setCompanies(companies?: string): void {
        
    }
    setDepartments(departments?: string): void {
        
    }
    setGroups(groups?: string): void {
        
    }
    setLocations(locations?: string): void {
        
    }
    setMatchAll(matchAll?: boolean): void {
        
    }
    setName(name?: string): void {
        
    }
    setRoles(roles?: string): void {
        
    }
    setScript(script?: string): void {
        
    }
    setUsers(users?: string): void {
        
    }
    update(columnValues?: Record<any, any>, reason?: string): string {
        return "";
    }
}
