import { SensitivityFilter } from "./SensitivityFilter";
import { QueryDisambiguation } from "./QueryDisambiguation";
import { PendingResultDetails } from "./PendingResultDetails";
import { Context } from "../imports/Context";

type SearchAnalyticsPayload = {};
export class SearchResponse {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean) {  }
    getAppliedFacetFilters(): Array<any> {
        return [];
    }
    getAsyncGeniusResultChannelName(): string {
        return "";
    }
    getCount(): number {
        return 0;
    }
    getCurrentPage(): number {
        return 0;
    }
    getGeniusResultCount(): number {
        return 0;
    }
    getGeniusResults(): Array<any> {
        return [];
    }
    getMatchedGeniusResultIntents(): string {
        return "";
    }
    getMatchedQueryIntents(): string {
        return "";
    }
    getNextPaginationToken(): string {
        return "";
    }
    getPendingResultDetails(): PendingResultDetails {
        return null as any;
    }
    getPreviousPaginationToken(): string {
        return "";
    }
    getQueryDisambiguation(): QueryDisambiguation {
        return null as any;
    }
    getResponseTimeInMs(): number {
        return 0;
    }
    getSearchAnalyticsMap(): Record<any, any> {
        return {} as any;
    }
    getSearchAnalyticsPayload(): SearchAnalyticsPayload {
        return null as any;
    }
    getSearchFacets(): Array<any> {
        return [];
    }
    getSearchFilters(): Array<any> {
        return [];
    }
    getSearchResults(): Array<any> {
        return [];
    }
    getSelectedFilterIds(): Array<any> {
        return [];
    }
    getSelectedSortOptionIds(): Array<any> {
        return [];
    }
    getSensitivityFilter(): SensitivityFilter {
        return null as any;
    }
    getSpellCorrectedTerm(): string {
        return "";
    }
    getSpellCorrectedTermMarkupQuery(): string {
        return "";
    }
    getTerm(): string {
        return "";
    }
    getTotalHits(): number {
        return 0;
    }
}
