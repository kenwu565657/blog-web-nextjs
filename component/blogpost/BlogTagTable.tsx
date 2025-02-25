'use client';

import {JSX, useState} from "react";
import BlogTagList from "@/component/blogpost/BlogTagList";

interface BlogTagTableProps {
    blogTagNameList: Set<string>;
    currentSelectedTagList: Set<string>;
}

export default function BlogTagTable(props: BlogTagTableProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const openFilterByTag = () => {
        setIsOpen(true);
        window.scrollTo(0, 0);
    }
    const closeFilterByTag = () => {
        setIsOpen(false);
    }
    const notSelectedTagList: string[] = [...props.blogTagNameList].filter(x => !props.currentSelectedTagList.has(x));

    return (
        <>
            <div
                className={`fixed right-0 p-2 cursor-pointer border-2 rounded-l-full bg-green-200/95 ${isOpen ? 'hidden' : 'block'} sm:hidden`}>
                <span className={"hover:font-bold"} onClick={() => openFilterByTag()}>Filter By Tags</span>
            </div>
            <div className={`p-2 border-2 bg-green-50/95 ${isOpen ? 'block mb-2 static' : 'hidden'} sm:block sm:max-w-64`}>
                {
                    isOpen &&
                    <span
                        className={"inline-block p-2 cursor-pointer border-2 rounded-r-full bg-green-200/95 hover:font-bold sm:hidden"}
                        onClick={() => closeFilterByTag()}>Hide Filter By Tags</span>
                }
                <div className={`flex flex-col p-2 gap-2`}>
                    <h6>Filter By Tags</h6>
                    <h2>Applied Tags</h2>
                    <BlogTagList blogTagNameList={props.currentSelectedTagList} isSelected={true}></BlogTagList>
                    <h2>Not Applied Tags</h2>
                    <BlogTagList blogTagNameList={new Set(notSelectedTagList)} isSelected={false}></BlogTagList>
                </div>
            </div>
        </>

    );
}
