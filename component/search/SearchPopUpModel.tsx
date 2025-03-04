'use client';

import {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import {isBlank} from "@/utils/StringUtils";
import CommonImageComponent from "@/component/common/CommonImageComponent";
import toast, {Toaster} from "react-hot-toast";

interface SearchPopUpModelProps {
    isOpen: boolean;
    closePopUpFunction: () => void;
}

export default function SearchPopUpModel(props: SearchPopUpModelProps) {
    const searchPopUpModelClass: string = `z-10 fixed flex flex-col inset-0 p-10 items-center justify-start bg-gray-950/90 ${props.isOpen ? 'flow-root' : 'hidden'}`;
    const searchKeywordInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();
    const searchResultPageUrl = "/search";
    const routeToSearchPage = () => {
        const keyword = searchKeywordInputRef.current ? searchKeywordInputRef.current.value : "";
        if (isBlank(keyword)) {
            toast.error("Please enter a valid search keyword.", {duration: 1500});
            return;
        }
        const path = `${searchResultPageUrl}?keyword=${keyword}`;
        props.closePopUpFunction();
        router.push(path);
    }
    const searchPopUpContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (searchPopUpContainerRef.current && !searchPopUpContainerRef.current.contains(event.target)) {
                props.closePopUpFunction();
            }
        }
        function handleKeyboardEnter(event: KeyboardEvent) {
            if (event.code === 'Enter') {
                routeToSearchPage();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keypress", handleKeyboardEnter);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keypress", handleKeyboardEnter);
        };
    }, [searchPopUpContainerRef]);

    return (
        <div className={searchPopUpModelClass} >
            <Toaster></Toaster>
            <div className={'bg-green-300 p-6 w-full flex flex-col justify-start items-center'} ref={searchPopUpContainerRef}>
                <div className={'w-full flex flex-row justify-start bg-white p-2'}>
                    <input className='grow-2 w-full border-r-3 border-cyan-800 focus:outline-0 text-clip' placeholder="Search In ContentFarm..."
                           ref={searchKeywordInputRef}/>
                    <button className={'grow-1 p-2 rounded-full text-center align-baseline drop-shadow-2xl bg-green-50 hover:drop-shadow-none'}
                            onClick={() => routeToSearchPage()}
                    >&#8629;ENTER
                    </button>
                </div>
                <div className={"flex flex-row items-center"}>
                    <CommonImageComponent height={48} width={48} src="/icon/elasticsearch_icon.svg" isLocal={true}></CommonImageComponent>
                    <span className={""}>Search Powered By Elastic Search</span>
                </div>
            </div>
        </div>
    )
}