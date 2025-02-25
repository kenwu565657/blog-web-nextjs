'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useRef} from "react";
import CommonImageComponent from "@/component/common/CommonImageComponent";

export default function SearchInput() {
    const searchInputPlaceholder: string = "Search In ContentFarm ...";
    const searchKeywordInputRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        function handleKeyboardEnter(event: KeyboardEvent) {
            if (event.code === 'Enter') {
                handleSearch();
            }
        }

        document.addEventListener("keypress", handleKeyboardEnter);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("keypress", handleKeyboardEnter);
        };
    }, [searchKeywordInputRef]);

    function handleSearch() {
        let keyword: string|null = null;
        if (searchKeywordInputRef.current) {
            keyword = searchKeywordInputRef.current.value;
        }
        const params = new URLSearchParams(searchParams);
        if (keyword) {
            params.set('keyword', keyword);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <div
                className={'focus:outline-2 w-full flex flex-row justify-start bg-white p-2 rounded-md border border-gray-200'}>
                <input className='grow-2 w-full p-2 focus:outline-0'
                       placeholder={searchInputPlaceholder}
                       defaultValue={searchParams.get('keyword')?.toString()}
                       ref={searchKeywordInputRef}
                />
                <button className={'grow-1 p-2 border-0 rounded-full text-center drop-shadow-2xl bg-green-50 hover:drop-shadow-none'}
                        onClick={handleSearch}
                >&crarr;ENTER
                </button>
            </div>
            <div className={"flex flex-row items-center"}>
                <CommonImageComponent height={48} width={48} src="/icon/elasticsearch_icon.svg" isLocal={true}></CommonImageComponent>
                <span className={""}>Search Powered By Elastic Search</span>
            </div>
        </>
    );
}