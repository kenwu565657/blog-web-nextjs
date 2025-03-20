import Markdown, {Components} from "react-markdown";
import {queryBlogPostContentMarkdownFile} from "@/service/blogpost/BlogPostQueryService";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {extractAllHeaderFromMarkdown} from "@/utils/MarkdownUtils";
import BlogPostHeaderList from "@/component/blogpost/BlogPostHeaderList";
import {Suspense} from "react";
import CopyCodeBoard from "@/component/blogpost/CopyCodeBoard";
import CommonImageComponent from "@/component/common/CommonImageComponent";
import {ApiResponse} from "@/interface/common/ApiResponse";

interface BlogPostContentProps {
    blogpostId: string;
}

export default async function BlogPostContent(props: BlogPostContentProps) {
    const apiResponse:ApiResponse<string> = await queryBlogPostContentMarkdownFile(props.blogpostId);
    if (!apiResponse.isSuccess || !apiResponse.data) {
        // todo: add ui design
        return (
            <div>
                <p>Cannot Fetch This Blog Post. Please Try Other Blog Post.</p>
            </div>
        );
    }
    const contentMarkdownFile: string = apiResponse.data;
    const counter: number[] = [0, 0, 0, 0, 0, 0];
    const components: Components = {
        code(props) {
            const {children, className} = props;
            const match = /language-(\w+)/.exec(className || '');

            return match ? (
                <CopyCodeBoard
                    code={String(children).replace(/\n$/, '')}
                    language={match[1]}
                >
                </CopyCodeBoard>
            ) : (
                    <span className={"overflow-x-auto"}>
                        {children}
                    </span>
            )
        },
        h1(props) {
            const {children, className} = props;
            counter[0]++;
            return (
                <h1 id={`h1${counter[0]}`} className={className}>
                    {children}
                </h1>
            )
        },
        h2(props) {
            const {children, className} = props;
            counter[1]++
            return (
                <h2 id={`h2${counter[1]}`} className={className}>
                    {children}
                </h2>
            )
        },
        h3(props) {
            const {children, className} = props;
            counter[2]++;
            return (
                <h3 id={`h3${counter[2]}`} className={className}>
                    {children}
                </h3>
            )
        },
        h4(props) {
            const {children, className} = props;
            counter[3]++;
            return (
                <h4 id={`h4${counter[3]}`} className={className}>
                    {children}
                </h4>
            )
        },
        h5(props) {
            const {children, className} = props;
            counter[4]++;
            return (
                <h5 id={`h5${counter[4]}`} className={`${className} overflow-x-auto`}>
                    {children}
                </h5>
            )
        },
        h6(props) {
            const {children, className} = props;
            counter[5]++;
            return (
                <h6 id={`h5${counter[5]}`} className={className}>
                    {children}
                </h6>
            )
        },
        img(props) {
            const {className, src} = props;
            return (
                <CommonImageComponent
                    src={src}
                    className={className}
                >
                </CommonImageComponent>
            )
        }
    };
    const headerList: string[] = extractAllHeaderFromMarkdown(contentMarkdownFile);

    return (
        <div className='flex flex-row box-border xl:max-w-[90vw]'>
                <article className={'grow-1 prose max-w-full text-xs md:text-sm xl:text-base md:max-w-1/3 xl:m-2'}>
                    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
                        {contentMarkdownFile}
                    </Markdown>
                </article>
            <Suspense>
                <BlogPostHeaderList blogPostHeaderList={headerList}/>
            </Suspense>
        </div>
    );
}
