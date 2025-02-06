export interface BlogPostHeader {
    htmlHeaderType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headerValue: string;
    orderNumberOfSameHeaderType: number;
}
