import {getEmptySearchResult, searchBlogPostByKeyword} from "@/service/blogpost/BlogPostSearchService";
import SearchResultItemList from "@/component/search/SearchResultItemList";
import SearchResultHeader from "@/component/search/SearchResultHeader";
import {ApiResponse} from "@/interface/common/ApiResponse";
import {SearchResult} from "@/interface/search/SearchResult";
import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";

interface SearchResultPageProps {
    keyword: string;
    pageNumber: number;
}

export default async function SearchResultPage(props: SearchResultPageProps) {
    const keyword: string = props.keyword;
    const pageNumber = props.pageNumber;
    let searchResult: SearchResult<BlogPostSearchResult> = getEmptySearchResult();
    const apiResponse: ApiResponse<SearchResult<BlogPostSearchResult>> = await searchBlogPostByKeyword(keyword, pageNumber - 1);
    if (apiResponse.isSuccess) {
        searchResult = apiResponse.data!;
    }

    return (
        <>
            <SearchResultHeader
                maxSearchScore={searchResult.maxSearchScore}
                searchExecutionTimeInMs={searchResult.searchExecutionTimeInMs}
                searchResultCount={searchResult.searchResultCount}>
            </SearchResultHeader>
            <SearchResultItemList searchResult={searchResult}/>
        </>
    )
}