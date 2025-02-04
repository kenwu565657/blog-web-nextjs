import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import BlogPostCard from "@/component/blogpost/BlogPostCard";

interface BlogPostCardListProps {
    blogPostSummaryList: BlogPostSummary[];
}

const BlogPostCardList = async (props: BlogPostCardListProps) => {
    return (
        <div>
            <h2 className="text-start border-t-2 border-x-2">Blog Post
                Total: {props.blogPostSummaryList ? props.blogPostSummaryList.length : 0}</h2>

            <div className="flex flex-col gap-2 p-3 border-2 overflow-scroll max-h-96">
                {
                    props.blogPostSummaryList?.map((blogSummary) => {
                        return (
                            <BlogPostCard
                                key = {blogSummary.id}
                                blogSummary={blogSummary}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
};

export default BlogPostCardList;
