import matter from "gray-matter";
import {BlogPostContent} from "@/interface/blogpost/BlogPostContent";
import {BlogPostHeader} from "@/interface/blogpost/BlogPostHeader";


export function readMarkdownFile(markdownFileContent: string): BlogPostContent {
    const { data, content } = matter(markdownFileContent);
    return {
        summary: data,
        content: content
    }
}

export function extractAllHeaderFromMarkdown(markdownFileContent: string): string[] {
    const HEADING_R = /(#{1,6} .*)\r?\n/g;
    return Array.from(markdownFileContent.matchAll(HEADING_R), m => m[1]);
}

export function classifyMarkdownHeaderList(markdownHeaderList: string[]): BlogPostHeader[] {
    const sameHeaderTypeCount = [0, 0, 0, 0, 0, 0];
    const specialHandledMarkdownHeaderList: string[] = markdownHeaderList
        .map((markdownHeader) => specialHandleHtmlTagFromMarkdownHeaderString(markdownHeader));
    const resultList: BlogPostHeader[] = [];

    for (const markdownHeaderString of specialHandledMarkdownHeaderList) {
        if (markdownHeaderString.startsWith('######')) {
            const markdownHeader: BlogPostHeader = {
                htmlHeaderType: 'h6',
                headerValue: markdownHeaderString.substring(6).trim(),
                orderNumberOfSameHeaderType: ++sameHeaderTypeCount[5]
            };
            resultList.push(markdownHeader);
            continue;
        }
        if (markdownHeaderString.startsWith('#####')) {
            const markdownHeader: BlogPostHeader = {
                htmlHeaderType: 'h5',
                headerValue: markdownHeaderString.substring(5).trim(),
                orderNumberOfSameHeaderType: ++sameHeaderTypeCount[4]
            };
            resultList.push(markdownHeader);
            continue;
        }
        if (markdownHeaderString.startsWith('####')) {
            const markdownHeader: BlogPostHeader = {
                htmlHeaderType: 'h4',
                headerValue: markdownHeaderString.substring(4).trim(),
                orderNumberOfSameHeaderType: ++sameHeaderTypeCount[3]
            };
            resultList.push(markdownHeader);
            continue;
        }
        if (markdownHeaderString.startsWith('###')) {
            const markdownHeader: BlogPostHeader = {
                htmlHeaderType: 'h3',
                headerValue: markdownHeaderString.substring(3).trim(),
                orderNumberOfSameHeaderType: ++sameHeaderTypeCount[2]
            };
            resultList.push(markdownHeader);
            continue;
        }
        if (markdownHeaderString.startsWith('##')) {
            const markdownHeader: BlogPostHeader = {
                htmlHeaderType: 'h2',
                headerValue: markdownHeaderString.substring(2).trim(),
                orderNumberOfSameHeaderType: ++sameHeaderTypeCount[1]
            };
            resultList.push(markdownHeader);
            continue;
        }
        if (markdownHeaderString.startsWith('#')) {
            const markdownHeader: BlogPostHeader = {
                htmlHeaderType: 'h1',
                headerValue: markdownHeaderString.substring(1).trim(),
                orderNumberOfSameHeaderType: ++sameHeaderTypeCount[0]
            };
            resultList.push(markdownHeader);
        }
    }

    return resultList;
}

function specialHandleHtmlTagFromMarkdownHeaderString(markdownHeaderString: string): string {
    return markdownHeaderString.replace('<br/>', '').replace('<br />', '');
}
