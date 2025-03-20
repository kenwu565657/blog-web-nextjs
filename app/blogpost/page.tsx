import BlogPostCardList from "@/component/blogpost/BlogPostCardList";
import BlogTagTable from "@/component/blogpost/BlogTagTable";
import {findBlogPostTags} from "@/service/blogpost/BlogPostQueryService";
import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import {
    blogPostSearchResultToBlogPostSummaryList, getEmptySearchResult,
    searchBlogPostSummary,
    searchBlogPostSummaryByTagList
} from "@/service/blogpost/BlogPostSearchService";
import {ApiResponse} from "@/interface/common/ApiResponse";
import {SearchResult} from "@/interface/search/SearchResult";
import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";

export default async function BlogPostPage(props: {
    searchParams?: Promise<{
        tagList?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    let blogSummaryList: BlogPostSummary[];
    let currentSelectedTagList: string[] = [];
    if (searchParams && searchParams.tagList) {
        let searchResult = getEmptySearchResult();
        const apiResponse: ApiResponse<SearchResult<BlogPostSearchResult>> = await searchBlogPostSummaryByTagList(searchParams.tagList);
        if (apiResponse.isSuccess && apiResponse.data) {
            searchResult = apiResponse.data;
        }
        blogSummaryList = blogPostSearchResultToBlogPostSummaryList(searchResult);
        currentSelectedTagList = searchParams.tagList.split(",");
    } else {
        let searchResult = getEmptySearchResult();
        const apiResponse: ApiResponse<SearchResult<BlogPostSearchResult>> = await searchBlogPostSummary();
        if (apiResponse.isSuccess && apiResponse.data) {
            searchResult = apiResponse.data;
        }
        blogSummaryList = blogPostSearchResultToBlogPostSummaryList(searchResult);
    }
    let blogTagList: string[] = [];
    const apiResponse = await findBlogPostTags();
    if (apiResponse.isSuccess && apiResponse.data) {
        blogTagList = apiResponse.data;
    }

    return (
        <div className="flex flex-col-reverse sm:flex-row">
            <div className="grow-1 mx-3 flex-1">
                <BlogPostCardList blogPostSummaryList={blogSummaryList}>
                </BlogPostCardList>
            </div>
            <div className="mx-3">
                <BlogTagTable
                    blogTagNameList={new Set(blogTagList)}
                    currentSelectedTagList={new Set(currentSelectedTagList)}
                >
                </BlogTagTable>
            </div>
        </div>
    );
};
