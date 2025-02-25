import {SearchResult} from "@/interface/search/SearchResult";
import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";
import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import {getBackendGatewayEndPoint} from "@/utils/EnvironmentVariableUtils";

export async function searchBlogPostByKeyword(keyword: string, pageNumber: number): Promise<SearchResult<BlogPostSearchResult>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/search/blogpost?keyword=${keyword}`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.json();
}

export async function searchBlogPostSummaryByTagList(tagList: string): Promise<SearchResult<BlogPostSearchResult>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/search/blogpost?tagList=${tagList}`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.json();
}

export async function searchBlogPostSummary(): Promise<SearchResult<BlogPostSearchResult>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/search/blogpost`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.json();
}

export function blogPostSearchResultToBlogPostSummaryList(searchResult: SearchResult<BlogPostSearchResult>): BlogPostSummary[] {
    if (searchResult.searchResultItemList.length === 0) {
        return [];
    }
    return searchResult.searchResultItemList.map(x => singleBlogPostSearchResultToBlogPostSummary(x));
}

function singleBlogPostSearchResultToBlogPostSummary(blogPostSearchResult: BlogPostSearchResult): BlogPostSummary {
    return {
        id: blogPostSearchResult.id,
        summary: blogPostSearchResult.summary,
        title: blogPostSearchResult.title,
        tagList: new Set(blogPostSearchResult.tagList),
        authorName: blogPostSearchResult.authorName,
        postDate: blogPostSearchResult.postDate,
        imageUrl: blogPostSearchResult.imageUrl
    }
}
