import SearchResultPage from "@/component/search/SearchResultPage";
import {Suspense} from "react";
import SearchInput from "@/component/search/SearchInput";

export default async function SearchPage(props: {
    searchParams?: Promise<{
        keyword?: string;
        pageNumber?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const keyword = searchParams?.keyword || '';
    const pageNumber = Number(searchParams?.pageNumber) || 1;

    return (
        <div>
            <SearchInput />
            <Suspense>
                <SearchResultPage keyword={keyword} pageNumber={pageNumber}></SearchResultPage>
            </Suspense>
        </div>
    )
}
