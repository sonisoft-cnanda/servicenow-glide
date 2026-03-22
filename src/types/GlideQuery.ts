import { GlideRecord } from "./GlideRecord";

/**
 * TypeScript definitions for ServiceNow GlideQuery
 */

/**
 * Represents a single record returned from a query
 */
interface GlideQueryRecord {
  [field: string]: any;
}
/**
 * Optional container that may or may not contain a value
 */
interface Optional<T> {
  /**
   * Returns the value if present, otherwise returns the provided default value
   */
  orElse(defaultValue: T): T;
  
  /**
   * Returns the value if present
   */
  get(): T | undefined;
  
  /**
   * Returns true if a value is present
   */
  isPresent(): boolean;
  
  /**
   * Executes the provided function if a value is present
   */
  ifPresent(consumer: (value: T) => void): void;
}
/**
 * Stream interface for processing query results
 */
interface Stream<T> {
  /**
   * Converts the stream to an array
   */
  toArray(maxSize?: number): T[];
  
  /**
   * Executes the provided function for each element
   */
  forEach(callback: (item: T) => void): void;
  
  /**
   * Filters elements based on a predicate
   */
  filter(predicate: (item: T) => boolean): Stream<T>;
  
  /**
   * Maps elements to a new form
   */
  map<R>(mapper: (item: T) => R): Stream<R>;
  
  /**
   * Reduces the stream to a single value
   */
  reduce<R>(accumulator: (acc: R, item: T) => R, initialValue: R): R;
  
  /**
   * Returns the first element as an Optional
   */
  findFirst(): Optional<T>;
  
  /**
   * Limits the stream to the specified number of elements
   */
  limit(maxSize: number): Stream<T>;
  
  /**
   * Returns true if any element matches the predicate
   */
  anyMatch(predicate: (item: T) => boolean): boolean;
  
  /**
   * Returns true if all elements match the predicate
   */
  allMatch(predicate: (item: T) => boolean): boolean;
  
  /**
   * Returns true if no elements match the predicate
   */
  noneMatch(predicate: (item: T) => boolean): boolean;
}
/**
 * Valid comparison operators for where clauses
 */
type ComparisonOperator = '=' | '!=' | '>' | '>=' | '<' | '<=';
/**
 * Valid array operators
 */
type ArrayOperator = 'IN' | 'NOT IN' | 'BETWEEN';
/**
 * Valid string operators
 */
type StringOperator = 
  | 'STARTSWITH' 
  | 'ENDSWITH' 
  | 'CONTAINS' 
  | 'DOES NOT CONTAIN' 
  | 'INSTANCEOF'
  | 'SAMEAS'
  | 'NSAMEAS'
  | 'GT_FIELD'
  | 'LT_FIELD'
  | 'GT_OR_EQUALS_FIELD'
  | 'LT_OR_EQUALS_FIELD'
  | 'DYNAMIC'
  | 'EMPTYSTRING'
  | 'ANYTHING'
  | 'LIKE'
  | 'NOT LIKE'
  | 'ON';
/**
 * All valid operators
 */
type WhereOperator = ComparisonOperator | ArrayOperator | StringOperator;
/**
 * Valid aggregate function types
 */
type AggregateType = 'sum' | 'avg' | 'min' | 'max' | 'count';
/**
 * Field flags that can be appended to field names
 */
type FieldFlag = 'DISPLAY' | 'CURRENCY_CODE' | 'CURRENCY_DISPLAY' | 'CURRENCY_STRING';
/**
 * Field name with optional flag (e.g., 'company$DISPLAY')
 */
type FieldWithFlag = string;
/**
 * Key-value object for record data
 */
interface KeyValues {
  [key: string]: any;
}
/**
 * Options for GlideQuery constructor
 */
interface GlideQueryOptions {
  scope?: string;
}
/**
 * Result of updateMultiple operation
 */
interface UpdateMultipleResult {
  rowCount: number;
}
export class GlideQuery<T extends keyof Tables | string = string> {
    readonly table: T = null as any;
    readonly plan: any[] = null as any;
    readonly type: 'GlideQuery' = null as any;
    constructor(table: T, plan?: any[], options?: GlideQueryOptions) {  }
    where(field: string, value: any): GlideQuery;
    where(field: string, operator: WhereOperator, value: any): GlideQuery;
    where(query: GlideQuery): GlideQuery;
    where(...args: any[]): any {
        return null as any;
    }
    orWhere(field: string, value: any): GlideQuery;
    orWhere(field: string, operator: WhereOperator, value: any): GlideQuery;
    orWhere(query: GlideQuery): GlideQuery;
    orWhere(...args: any[]): any {
        return null as any;
    }
    whereNotNull(field: string): GlideQuery {
        return null as any;
    }
    orWhereNotNull(field: string): GlideQuery {
        return null as any;
    }
    whereNull(field: string): GlideQuery {
        return null as any;
    }
    orWhereNull(field: string): GlideQuery {
        return null as any;
    }
    getBy(keyValues: KeyValues, selectedFields?: string[]): Optional<GlideQueryRecord> {
        return {} as any;
    }
    get(key: string, selectFields?: string[]): Optional<GlideQueryRecord> {
        return {} as any;
    }
    select(...fields: FieldWithFlag[]): Stream<GlideQueryRecord> {
        return {} as any;
    }
    selectOne(...fields: FieldWithFlag[]): Optional<GlideQueryRecord> {
        return {} as any;
    }
    insert(keyValues: KeyValues, selectFields?: string[]): Optional<GlideQueryRecord> {
        return {} as any;
    }
    insertOrUpdate(changes: KeyValues, selectFields?: string[], reason?: string): Optional<GlideQueryRecord> {
        return {} as any;
    }
    update(changes: KeyValues, selectFields?: string[], reason?: string, prefetchedSchema?: any, planOverride?: any, insertWhenNotFound?: boolean): Optional<GlideQueryRecord> {
        return {} as any;
    }
    updateMultiple(changes: KeyValues): UpdateMultipleResult {
        return null as any;
    }
    deleteMultiple(): void {
        
    }
    del(): void {
        
    }
    disableWorkflow(): GlideQuery {
        return null as any;
    }
    disableAutoSysFields(): GlideQuery {
        return null as any;
    }
    forceUpdate(): GlideQuery {
        return null as any;
    }
    orderBy(field: string): GlideQuery {
        return null as any;
    }
    orderByDesc(field: string): GlideQuery;
    orderByDesc(aggregateType: AggregateType, field: string): GlideQuery;
    orderByDesc(...args: any[]): any {
        return null as any;
    }
    limit(limit: number): GlideQuery {
        return null as any;
    }
    withAcls(): GlideQuery {
        return null as any;
    }
    withSecurityDataFilters(): GlideQuery {
        return null as any;
    }
    avg(field: string): Optional<number> {
        return {} as any;
    }
    max(field: string): Optional<any> {
        return {} as any;
    }
    min(field: string): Optional<any> {
        return {} as any;
    }
    sum(field: string): Optional<number> {
        return {} as any;
    }
    count(): number {
        return 0;
    }
    groupBy(...fields: string[]): GlideQuery {
        return null as any;
    }
    aggregate(aggregateType: AggregateType, field: string): GlideQuery {
        return null as any;
    }
    having(aggregateType: AggregateType, field: string, operator: ComparisonOperator, value: number): GlideQuery {
        return null as any;
    }
    toGlideRecord(): GlideRecord {
        return null as any;
    }
    toString(): string {
        return "";
    }
    static parse(table: string, encodedQuery: string): GlideQuery {
        return null as any;
    }
}
