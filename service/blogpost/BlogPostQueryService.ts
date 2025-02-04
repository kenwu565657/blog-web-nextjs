export async function queryBlogPostContentMarkdownFile(): Promise<string> {
    const res = await fetch(`http://localhost:8080/blogpost/content/markdown/testing_blog3.md`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.text();
}
