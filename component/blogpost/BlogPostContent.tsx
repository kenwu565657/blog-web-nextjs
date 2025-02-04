import Markdown from "react-markdown";
import {queryBlogPostContentMarkdownFile} from "@/service/blogpost/BlogPostQueryService";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
    blogpostId: string;
}

export default async function BlogPostContent(props: BlogPostContentProps) {
    const contentMarkdownFile = await queryBlogPostContentMarkdownFile();

    return (
        <article className={'markdown-body'}>
            <Markdown remarkPlugins={[remarkGfm]}>
                {contentMarkdownFile}
            </Markdown>
        </article>
    );
}
