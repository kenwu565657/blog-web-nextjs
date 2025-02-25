import BlogPostCardLoadingFallBackComponent from "@/component/blogpost/BlogPostCardLoadingFallBackComponent";

export default function Loading() {
    return (
            <div className="flex flex-col gap-2 p-3">
                <p>Loading...</p>
                <BlogPostCardLoadingFallBackComponent/>
                <BlogPostCardLoadingFallBackComponent/>
                <BlogPostCardLoadingFallBackComponent/>
            </div>
    );
}
