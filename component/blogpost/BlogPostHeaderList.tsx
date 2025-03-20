'use client';

import {JSX, useState} from "react";
import {classifyMarkdownHeaderList} from "@/utils/MarkdownUtils";
import BlogPostHeaderListItem from "@/component/blogpost/BlogPostHeaderListItem";

interface BlogPostHeaderListProps {
    blogPostHeaderList: string[];
}

export default function BlogPostHeaderList(props: BlogPostHeaderListProps): JSX.Element {
    const isHaveHeader: boolean = props.blogPostHeaderList.length > 0;
    const [isOpen, setIsOpen] = useState(false);

    const openHeaderTable = () => {
        setIsOpen(true);
    }

    const closeHeaderTable = () => {
        setIsOpen(false);
    }

    if (!isHaveHeader) {
        return <div></div>;
    }

    const headerList = classifyMarkdownHeaderList(props.blogPostHeaderList);

    return (
        <div className="fixed top-2 md:top-20 right-0">
            <div className={`z-5 w-fit p-2 cursor-pointer border-2 border-solid rounded-l-full bg-green-200/95 ${isOpen ? 'hidden' : 'block'}`}>
                <span className={"hover:font-bold"} onClick={() => openHeaderTable()}>Table Of Content</span>
            </div>
            <div className={`fixed right-0 p-1 border-2 bg-green-50/95 ${isOpen ? 'block' : 'hidden'} 2xl:right-2`}>
                {
                    isOpen &&
                    <span className={"inline-block p-2 cursor-pointer border-2 rounded-r-full bg-green-200/95 hover:font-bold"} onClick={() => closeHeaderTable()}>Hide Table Of Content</span>
                }
                <h2 className={'font-bold'}>Table Of Content</h2>
                <nav className='overflow-y-auto max-h-[80lvh] pb-20'>
                    <ul className='pl-2'>
                        {headerList.map((header) => (
                            <BlogPostHeaderListItem key={header.headerValue} blogPostHeader={header}/>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>

    );
}
