export interface BlogPostSummary {
    id: string;
    title: string;
    tagList: string[];
    summary: string;
    authorName: string;
    postDate: string;
    imageUrl: string|null;
}
