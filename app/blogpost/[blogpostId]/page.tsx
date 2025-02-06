import {isBlank} from "@/utils/StringUtils";
import {notFound} from "next/navigation";
import BlogPostContent from "@/component/blogpost/BlogPostContent";
import BackButton from "@/component/common/BackButton";
import './blogpost.css';

export default async function BlogPostContentPage({params,}: {
    params: Promise<{ blogpostId: string }>
}) {
    const blogpostId = (await params).blogpostId;

    if (isBlank(blogpostId)) {
        return notFound();
    }

    return (
        <div className="relative">
            <BlogPostContent blogpostId={blogpostId}/>
            <BackButton className={'left-50'}></BackButton>
        </div>

    )
}
