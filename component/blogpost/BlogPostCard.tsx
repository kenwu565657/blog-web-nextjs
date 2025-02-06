import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import Link from 'next/link';
import BlogTagList from "@/component/blogpost/BlogTagList";

interface BlogPostCardProps {
    blogSummary: BlogPostSummary
}

const BlogPostCard = (props: BlogPostCardProps) => {
    const blogPostCardContainerStyle = "p-3 text-start border-2 border-black border-solid flex flex-col";
    const blogPostContentLink = `/blogpost/${props.blogSummary.id}`;
    const haveTag: boolean = props.blogSummary.tagList.size > 0;
    console.log('props', props);
    console.log(haveTag)

    return (
        <div className={blogPostCardContainerStyle}>
            <h2 className="mb-2"><Link href={blogPostContentLink}>{props.blogSummary.title}</Link></h2>

            <p className="mb-2">{props.blogSummary.summary}</p>

            <div className="mb-2 flex flex-row justify-start gap-5">
                <span>{props.blogSummary.authorName}</span>
                <span>{props.blogSummary.postDate}</span>
            </div>

            {
                haveTag && (
                    <BlogTagList blogTagNameList={props.blogSummary.tagList}>
                    </BlogTagList>
                )
            }

        </div>
    )
}

export default BlogPostCard;
