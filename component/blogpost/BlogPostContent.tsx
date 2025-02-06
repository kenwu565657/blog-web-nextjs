import Markdown, {Components} from "react-markdown";
import {queryBlogPostContentMarkdownFile} from "@/service/blogpost/BlogPostQueryService";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {extractAllHeaderFromMarkdown} from "@/utils/MarkdownUtils";
import BlogPostHeaderList from "@/component/blogpost/BlogPostHeaderList";
import {Suspense} from "react";
import CopyCodeBoard from "@/component/blogpost/CopyCodeBoard";

interface BlogPostContentProps {
    blogpostId: string;
}

export default async function BlogPostContent(props: BlogPostContentProps) {
    const contentMarkdownFile = await queryBlogPostContentMarkdownFile();
    const counter: number[] = [0, 0, 0, 0, 0, 0];
    const components: Components = {
        code(props) {
            const {children, className, ...rest} = props;
            const match = /language-(\w+)/.exec(className || '');

            return match ? (
                <CopyCodeBoard
                    code={String(children).replace(/\n$/, '')}
                    language={match[1]}
                >
                </CopyCodeBoard>
            ) : (
                <code {...rest} className={className}>
                    {children}
                </code>
            )
        },
        h1(props) {
            const {children} = props;
            counter[0]++;
            return (
                <h1 id={`h1${counter[0]}`}>
                    {children}
                </h1>
            )
        },
        h2(props) {
            const {children} = props;
            counter[1]++
            return (
                <h2 id={`h2${counter[1]}`}>
                    {children}
                </h2>
            )
        },
        h3(props) {
            const {children} = props;
            counter[2]++;
            return (
                <h3 id={`h3${counter[2]}`}>
                    {children}
                </h3>
            )
        },
        h4(props) {
            const {children} = props;
            counter[3]++;
            return (
                <h4 id={`h4${counter[3]}`}>
                    {children}
                </h4>
            )
        },
        h5(props) {
            const {children} = props;
            counter[4]++;
            return (
                <h5 id={`h5${counter[4]}`}>
                    {children}
                </h5>
            )
        },
        h6(props) {
            const {children} = props;
            counter[5]++;
            return (
                <h6 id={`h5${counter[5]}`}>
                    {children}
                </h6>
            )
        }
    };
    const headerList = extractAllHeaderFromMarkdown(contentMarkdownFile);

    return (
        <div className='flex flex-row'>
            <div className='grow ml-3' id={'contentfarm-blog'}>
                <article className={'prose markdown-body flex-1'}>
                    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
                        {contentMarkdownFile}
                    </Markdown>
                </article>
            </div>
            <Suspense>
                <BlogPostHeaderList blogPostHeaderList={headerList}/>
            </Suspense>
        </div>
    );
}
