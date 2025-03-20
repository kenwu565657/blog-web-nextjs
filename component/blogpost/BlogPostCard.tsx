import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import Link from 'next/link';
import BlogTagList from "@/component/blogpost/BlogTagList";
import CommonImageComponent from "@/component/common/CommonImageComponent";
import BlogPostAuthorIcon from "@/component/blogpost/BlogPostAuthorIcon";
import Calendar from "@/component/common/Calendar";

interface BlogPostCardProps {
    blogSummary: BlogPostSummary
}

const BlogPostCard = (props: BlogPostCardProps) => {
    const blogPostCardContainerStyle = "text-start drop-shadow-md border-1 rounded border-black border-solid flex flex-row bg-white hover:bg-gray-200";
    const blogPostContentLink = `/blogpost/${props.blogSummary.id}`;
    const haveTag: boolean = props.blogSummary.tagList.size > 0;

    return (
        <Link href={blogPostContentLink} className={blogPostCardContainerStyle}>
            <div className="my-auto min-w-24 max-w-48">
                <CommonImageComponent src={props.blogSummary.imageUrl}></CommonImageComponent>
            </div>
            <div className={"flex flex-col gap-y-1.5 leading-normal m-1"}>
                <h1 className={"text-2xl font-bold"}>{props.blogSummary.title}</h1>
                <p className={"leading-tight"}>{props.blogSummary.summary}</p>
                {
                    haveTag && (
                        <BlogTagList blogTagNameList={props.blogSummary.tagList}>
                        </BlogTagList>
                    )
                }
                <div className="flex flex-col md:flex-row justify-start gap-5 items-start md:items-center">
                    <Calendar date={props.blogSummary.postDate}/>
                    <BlogPostAuthorIcon></BlogPostAuthorIcon>
                    <span className="justify-center">{props.blogSummary.authorName}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogPostCard;
