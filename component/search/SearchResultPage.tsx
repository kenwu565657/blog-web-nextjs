import {searchBlogPostByKeyword} from "@/service/blogpost/BlogPostSearchService";
import SearchResultItemList from "@/component/search/SearchResultItemList";
import SearchResultHeader from "@/component/search/SearchResultHeader";

interface SearchResultPageProps {
    keyword: string;
    pageNumber: number;
}

export default async function SearchResultPage(props: SearchResultPageProps) {
    const keyword: string = props.keyword;
    const pageNumber = props.pageNumber;
    const searchResult = await searchBlogPostByKeyword(keyword, pageNumber);

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