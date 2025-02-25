import {isBlank} from "@/utils/StringUtils";
import {notFound} from "next/navigation";
import BlogPostContent from "@/component/blogpost/BlogPostContent";
import {Suspense} from "react";
import BlogPostContentLoadingFallBackComponent from "@/component/blogpost/BlogPostContentLoadingFallBackComponent";

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
