import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";
import Link from 'next/link';
import BlogTagList  from "@/component/blogpost/BlogTagList";
import CommonImageComponent from "@/component/common/CommonImageComponent";

interface BlogPostSearchResultCardProps {
    blogPostSingleSearchResult: BlogPostSearchResult
}

export default function BlogPostSearchResultCard(props: BlogPostSearchResultCardProps) {
    const blogPostCardContainerStyle = "drop-shadow-md m-1 bg-white text-start border flex flex-row hover:bg-gray-200";
    const blogPostContentLink = `/blogpost/${props.blogPostSingleSearchResult.id}`;
    const haveTag: boolean = props.blogPostSingleSearchResult.tagList.length > 0;

    return (
        <Link href={blogPostContentLink} className={blogPostCardContainerStyle}>
            <CommonImageComponent className={"max-w-48 max-h-48"} src={props.blogPostSingleSearchResult.imageUrl}></CommonImageComponent>
            <div className={"flex flex-col gap-y-2 leading-normal m-1"}>
                <h1 className={"text-2xl font-bold"}>{props.blogPostSingleSearchResult.title}</h1>
                <p className={"leading-tight"}>{props.blogPostSingleSearchResult.summary}</p>
                {
                    haveTag && (
                        <BlogTagList blogTagNameList={new Set(props.blogPostSingleSearchResult.tagList)}>
                        </BlogTagList>
                    )
                }
                <div className="flex flex-row justify-start gap-5 items-center">
                    <div className="bg-green-400 rounded-md border-black border-2">
                        <span className="m-4 text-white font-bold text-2xl">T</span>
                    </div>

                    <span className="justify-center">Author: {props.blogPostSingleSearchResult.authorName}</span>
                    <span>Post On: {props.blogPostSingleSearchResult.postDate}</span>
                </div>
            </div>
        </Link>
    )
}