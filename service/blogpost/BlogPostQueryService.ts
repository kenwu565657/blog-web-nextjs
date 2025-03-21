import {getBackendGatewayEndPoint} from "@/utils/EnvironmentVariableUtils";
import {ApiResponse} from "@/interface/common/ApiResponse";

export async function queryBlogPostContentMarkdownFile(blogPostId: string): Promise<ApiResponse<string>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/${blogPostId}/content/markdown`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) {
        return {isSuccess: false, failureMessage: "", data: null};
    }
    const text = await res.text();
    return {isSuccess: true, failureMessage: null, data: text};
}

export async function findBlogPostTags(): Promise<ApiResponse<string[]>> {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    const res = await fetch(`${backendGatewayEndPoint}/blogpost/tag/list`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) {
        return {isSuccess: false, failureMessage: "", data: null};
    }
    const json = await res.json();
    return {isSuccess: true, failureMessage: null, data: json};
}
