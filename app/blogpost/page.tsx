import BlogPostCardList from "@/component/blogpost/BlogPostCardList";
import BlogTagTable from "@/component/blogpost/BlogTagTable";
import {findBlogPostTags} from "@/service/blogpost/BlogPostQueryService";
import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import {
    blogPostSearchResultToBlogPostSummaryList,
    searchBlogPostSummary,
    searchBlogPostSummaryByTagList
} from "@/service/blogpost/BlogPostSearchService";

export default async function BlogPostPage(props: {
    searchParams?: Promise<{
        tagList?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    let blogSummaryList: BlogPostSummary[] = [];
    let currentSelectedTagList: string[] = [];
    if (searchParams && searchParams.tagList) {
        const searchResult = await searchBlogPostSummaryByTagList(searchParams.tagList);
        blogSummaryList = blogPostSearchResultToBlogPostSummaryList(searchResult);
        currentSelectedTagList = searchParams.tagList.split(",");
    } else {
        const searchResult = await searchBlogPostSummary();
        blogSummaryList = blogPostSearchResultToBlogPostSummaryList(searchResult);
    }
    const blogTagList = await findBlogPostTags();

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
