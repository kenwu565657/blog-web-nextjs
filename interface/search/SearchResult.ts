export interface SearchResult<T> {
    searchResultCount: number;
    searchExecutionTimeInMs: number;
    maxSearchScore: number;
    searchResultItemList: T[]
}
