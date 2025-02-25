import {getBackendGatewayEndPoint} from "@/utils/EnvironmentVariableUtils";

export async function queryBlogPostContentMarkdownFile(): Promise<string> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/content/markdown/testing_blog3.md`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.text();
}

export async function findBlogPostTags(): Promise<string[]> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/tag/list`);
    if (!res.ok) {
        throw Error("Failed");
    }
    return await res.json();
}
