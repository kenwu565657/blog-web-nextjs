import {BlogPostSummary} from "@/interface/blogpost/BlogPostSummary";

export interface BlogPostContent {
    summary: Partial<BlogPostSummary>;
    content: string;
}