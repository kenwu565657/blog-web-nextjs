import BlogPostCardList from "@/component/blogpost/BlogPostCardList";
import BlogTagTable from "@/component/blogpost/BlogTagTable";
import {findBlogPostSummary} from "@/service/DynamoDB";

export default async function BlogPostPage() {
    const blogSummaryList = await findBlogPostSummary();

    return (
        <div className="">
            <div className="flex flex-row">
                <div className="grow-1 mx-3 flex-1">
                    <BlogPostCardList blogPostSummaryList={blogSummaryList}>
                    </BlogPostCardList>
                </div>


                <div className="mx-3">
                    <BlogTagTable blogTagNameList={new Set(['Java', 'TypeScript'])}>
                    </BlogTagTable>
                </div>
            </div>


        </div>
    );
};
