import {SearchResult} from "@/interface/search/SearchResult";
import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";

export async function searchBlogPostByKeyword(keyword: string, pageNumber: number): Promise<SearchResult<BlogPostSearchResult>> {
    const res = await fetch(`http://localhost:8080/search/blogpost/${keyword}`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.json();
}
