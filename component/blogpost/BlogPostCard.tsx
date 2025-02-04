import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import Link from 'next/link';

interface BlogPostCardProps {
    blogSummary: BlogPostSummary
}

const BlogPostCard = (props: BlogPostCardProps) => {
    const blogPostCardContainerStyle = "p-3 text-start border-2 border-black border-solid flex flex-col";
    const blogPostContentLink = `/blogpost/${props.blogSummary.id}`;

    return (
        <div className={blogPostCardContainerStyle}>
            <h2 className="mb-2"><Link href={blogPostContentLink}>{props.blogSummary.title}</Link></h2>

            <p className="mb-2">{props.blogSummary.summary}</p>

            <div className="mb-2 flex flex-row justify-start gap-5">
                <span>{props.blogSummary.authorName}</span>
                <span>{props.blogSummary.postDate}</span>
            </div>

        </div>
    )
}

export default BlogPostCard;
