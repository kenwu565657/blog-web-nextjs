import {SearchResult} from "@/interface/search/SearchResult";
import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";
import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import {getBackendGatewayEndPoint} from "@/utils/EnvironmentVariableUtils";
import {ApiResponse} from "@/interface/common/ApiResponse";

export async function searchBlogPostByKeyword(keyword: string, pageNumber: number = 0): Promise<ApiResponse<SearchResult<BlogPostSearchResult>>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/search?keyword=${keyword}&pageNumber=${pageNumber}`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) {
        return {isSuccess: false, failureMessage: "", data: null};
    }
    const json = await res.json();
    return {isSuccess: true, failureMessage: "", data: json};
}

export async function searchBlogPostSummaryByTagList(tagList: string): Promise<ApiResponse<SearchResult<BlogPostSearchResult>>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/search?tagList=${tagList}`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) {
        return {isSuccess: false, failureMessage: "", data: null};
    }
    const json = await res.json();
    return {isSuccess: true, failureMessage: "", data: json};
}

export async function searchBlogPostSummary(): Promise<ApiResponse<SearchResult<BlogPostSearchResult>>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/search`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) {
        return {isSuccess: false, failureMessage: "", data: null};
    }
    const json = await res.json();
    return {isSuccess: true, failureMessage: "", data: json};
}

export async function searchBlogPostSummaryByBlogPostId(blogPostId: string): Promise<ApiResponse<BlogPostSearchResult>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/search/${blogPostId}`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) {
        return {isSuccess: false, failureMessage: "", data: null};
    }
    const json = await res.json();
    return {isSuccess: true, failureMessage: null, data: json};
}

export function blogPostSearchResultToBlogPostSummaryList(searchResult: SearchResult<BlogPostSearchResult>): BlogPostSummary[] {
    if (searchResult.searchResultItemList.length === 0) {
        return [];
    }
    return searchResult.searchResultItemList.map(x => singleBlogPostSearchResultToBlogPostSummary(x));
}

export function getEmptySearchResult(): SearchResult<BlogPostSearchResult> {
    return {
        searchResultCount: 0,
        searchExecutionTimeInMs: 0,
        maxSearchScore: 0,
        searchResultItemList: []
    };
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
