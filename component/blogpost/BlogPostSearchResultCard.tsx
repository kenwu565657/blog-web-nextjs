import {BlogPostSearchResult} from "@/interface/blogpost/BlogPostSearchResult";
import Link from 'next/link';
import BlogTagList  from "@/component/blogpost/BlogTagList";

interface BlogPostSearchResultCardProps {
    blogPostSingleSearchResult: BlogPostSearchResult
}

export default function BlogPostSearchResultCard(props: BlogPostSearchResultCardProps) {
    const blogPostCardContainerStyle = "p-3 text-start border-2 border-black border-solid flex flex-col";
    const blogPostContentLink = `/blogpost/${props.blogPostSingleSearchResult.id}`;
    const haveTag: boolean = props.blogPostSingleSearchResult.tagList.size > 0;

    return (
        <div className={blogPostCardContainerStyle}>
            <h2 className="mb-2"><Link href={blogPostContentLink}>{props.blogPostSingleSearchResult.title}</Link></h2>

            <p className="mb-2">{props.blogPostSingleSearchResult.summary}</p>

            <div className="mb-2 flex flex-row justify-start gap-5">
                <span>{props.blogPostSingleSearchResult.authorName}</span>
                <span>{props.blogPostSingleSearchResult.postDate}</span>
            </div>

            {
                haveTag && (
                    <BlogTagList blogTagNameList={props.blogPostSingleSearchResult.tagList}>
                    </BlogTagList>
                )
            }

        </div>
    )
}