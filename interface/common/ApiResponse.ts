export interface ApiResponse<T> {
    isSuccess: boolean;
    failureMessage: string|null;
    data: T|null;
}
