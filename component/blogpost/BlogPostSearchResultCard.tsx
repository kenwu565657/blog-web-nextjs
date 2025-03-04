import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";
import Link from 'next/link';
import BlogTagList  from "@/component/blogpost/BlogTagList";
import CommonImageComponent from "@/component/common/CommonImageComponent";
import BlogPostAuthorIcon from "@/component/blogpost/BlogPostAuthorIcon";
import Calendar from "@/component/common/Calendar";

interface BlogPostSearchResultCardProps {
    blogPostSingleSearchResult: BlogPostSearchResult
}

export default function BlogPostSearchResultCard(props: BlogPostSearchResultCardProps) {
    const blogPostContentLink: string = `/blogpost/${props.blogPostSingleSearchResult.id}`;
    const isHaveTag: boolean = props.blogPostSingleSearchResult.tagList.length > 0;

    return (
        <Link href={blogPostContentLink} className="drop-shadow-md m-1 bg-white text-start border flex flex-row hover:bg-gray-200">
            <CommonImageComponent className="min-w-48" src={props.blogPostSingleSearchResult.imageUrl}></CommonImageComponent>
            <div className="flex flex-col gap-y-1.5 leading-normal m-1">
                <h1 className="text-2xl font-bold">{props.blogPostSingleSearchResult.title}</h1>
                <p className="leading-tight">{props.blogPostSingleSearchResult.summary}</p>
                {
                    isHaveTag && (
                        <BlogTagList blogTagNameList={new Set(props.blogPostSingleSearchResult.tagList)}>
                        </BlogTagList>
                    )
                }
                <div className="flex flex-row justify-start gap-5 items-center">
                    <Calendar date={props.blogPostSingleSearchResult.postDate}/>
                    <BlogPostAuthorIcon></BlogPostAuthorIcon>
                    <span className="justify-center">{props.blogPostSingleSearchResult.authorName}</span>
                </div>
            </div>
        </Link>
    )
}