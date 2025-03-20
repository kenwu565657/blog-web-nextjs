import {isBlank} from "@/utils/StringUtils";
import {notFound} from "next/navigation";
import BlogPostContent from "@/component/blogpost/BlogPostContent";
import {Suspense} from "react";
import BlogPostContentLoadingFallBackComponent from "@/component/blogpost/BlogPostContentLoadingFallBackComponent";
import {Metadata} from "next";
import {searchBlogPostSummaryByBlogPostId} from "@/service/blogpost/BlogPostSearchService";

export async function generateMetadata({params,}: {
    params: Promise<{ blogpostId: string }>
}): Promise<Metadata> {
    const blogpostId = (await params).blogpostId;
    if (isBlank(blogpostId)) {
        return {};
    }
    const apiResponse = await searchBlogPostSummaryByBlogPostId(blogpostId);
    if (!apiResponse.isSuccess || !apiResponse.data) {
        return {};
    }
    const blogPostSearchResult = apiResponse.data;

    return {
        title: blogPostSearchResult.title,
        description: blogPostSearchResult.summary,
        keywords: Array.from(blogPostSearchResult.tagList)
    }
}

export default async function BlogPostContentPage({params,}: {
    params: Promise<{ blogpostId: string }>
}) {
    const blogpostId = (await params).blogpostId;

    if (isBlank(blogpostId)) {
        return notFound();
    }

    return (
        <div>
            <Suspense fallback={<BlogPostContentLoadingFallBackComponent />}>
                <BlogPostContent blogpostId={blogpostId}/>
            </Suspense>
        </div>
    )
}
