import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";
import Link from "next/link";
import {JSX} from "react";
import BlogTagList from "./BlogTagList";


interface BlogPostVerticalCardProps {
    blogSummary: BlogPostSummary
}

export default function BlogPostVerticalCard(props: BlogPostVerticalCardProps): JSX.Element{
    const blogPostContentLink = `/blogpost/${props.blogSummary.id}`;
    const haveTag: boolean = props.blogSummary.tagList?.size > 0;

    return (
        <div>
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
    );
}
