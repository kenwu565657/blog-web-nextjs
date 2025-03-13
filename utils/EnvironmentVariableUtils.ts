export function getBackendGatewayEndPoint(): string {
    const environmentVariable: string|undefined = process.env.NEXT_PUBLIC_BACKEND_GATEWAY_END_POINT;
    if (environmentVariable) {
        return environmentVariable;
    }
    throw new Error(`Missing environment variable: NEXT_PUBLIC_BACKEND_GATEWAY_END_POINT`);
}
