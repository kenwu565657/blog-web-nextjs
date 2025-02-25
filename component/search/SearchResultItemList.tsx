import {SearchResult} from "@/interface/search/SearchResult";
import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";
import {JSX} from "react";
import BlogPostSearchResultCard from "@/component/blogpost/BlogPostSearchResultCard";

interface SearchResultItemListProps {
    searchResult: SearchResult<BlogPostSearchResult>;
}

export default function SearchResultItemList(props: SearchResultItemListProps): JSX.Element {
    const haveSearchResult: boolean = props.searchResult.searchResultCount > 0;

    if (!haveSearchResult) {
        return (
            <div>
                <span>Oops, No Result</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {
                props.searchResult.searchResultItemList.map((item: BlogPostSearchResult) =>
                    <BlogPostSearchResultCard key={item.id} blogPostSingleSearchResult={item}/>
                )
            }
        </div>
    );
}
