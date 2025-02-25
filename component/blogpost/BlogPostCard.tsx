import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import Link from 'next/link';
import BlogTagList from "@/component/blogpost/BlogTagList";
import CommonImageComponent from "@/component/common/CommonImageComponent";

interface BlogPostCardProps {
    blogSummary: BlogPostSummary
}

const BlogPostCard = (props: BlogPostCardProps) => {
    const blogPostCardContainerStyle = "text-start drop-shadow-md border-1 rounded border-black border-solid flex flex-row bg-white hover:bg-gray-200";
    const blogPostContentLink = `/blogpost/${props.blogSummary.id}`;
    const haveTag: boolean = props.blogSummary.tagList.size > 0;

    return (
        <Link href={blogPostContentLink} className={blogPostCardContainerStyle}>
            <CommonImageComponent className={"rounded-t-lg max-w-48 max-h-48"} src={props.blogSummary.imageUrl}></CommonImageComponent>
            <div className={"flex flex-col gap-y-2 leading-normal m-1"}>
                <h1 className={"text-2xl font-bold"}>{props.blogSummary.title}</h1>
                <p className={"leading-tight"}>{props.blogSummary.summary}</p>
                {
                    haveTag && (
                        <BlogTagList blogTagNameList={props.blogSummary.tagList}>
                        </BlogTagList>
                    )
                }
                <div className="flex flex-row justify-start gap-5 items-center">
                    <div className="bg-green-400 rounded-md border-black border-2">
                        <span className="m-4 text-white font-bold text-2xl">T</span>
                    </div>

                    <span className="justify-center">Author: {props.blogSummary.authorName}</span>
                    <span>Post On: {props.blogSummary.postDate}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogPostCard;
