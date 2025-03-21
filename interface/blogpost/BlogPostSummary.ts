export interface BlogPostSummary {
    id: string;
    title: string;
    tagList: Set<string>;
    summary: string;
    authorName: string;
    postDate: string;
    imageUrl: string|null;
}
