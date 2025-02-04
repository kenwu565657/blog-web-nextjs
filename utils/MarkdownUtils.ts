import matter from "gray-matter";
import {BlogPostContent} from "@/interface/blogpost/BlogPostContent";


export function readMarkdownFile(markdownFileContent: string): BlogPostContent {
    const { data, content } = matter(markdownFileContent);
    return {
        summary: data,
        content: content
    }
}
