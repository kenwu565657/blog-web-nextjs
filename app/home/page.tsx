import {findBlogPostSummary} from "@/service/DynamoDB";
import BlogPostVerticalCard from "@/component/blogpost/BlogPostVerticalCard";
import HomePagePoster from "@/component/home/HomePagePoster";

export default async function HomePage() {
    const blogSummaryList = await findBlogPostSummary();

    return (
        <div>
            <HomePagePoster />
            {
                blogSummaryList.map((blogPostSummary) =>
                    <BlogPostVerticalCard key={blogPostSummary.id} blogSummary={blogPostSummary} />
                )
            }
        </div>
    );
}
