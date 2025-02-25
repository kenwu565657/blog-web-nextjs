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
        <div>
            <div className={`z-5 fixed right-0 p-2 cursor-pointer border-2 border-solid rounded-l-full bg-green-200/95 ${isOpen ? 'hidden' : 'block'} 2xl:hidden`}>
                <span className={"hover:font-bold"} onClick={() => openHeaderTable()}>Table Of Content</span>
            </div>
            <div className={`p-1 right-0 border-2 bg-green-50/95 ${isOpen ? 'block fixed' : 'hidden'} 2xl:right-2 2xl:block 2xl:fixed`}>
                {
                    isOpen &&
                    <span className={"inline-block p-2 cursor-pointer border-2 rounded-r-full bg-green-200/95 hover:font-bold 2xl:hidden"} onClick={() => closeHeaderTable()}>Hide Table Of Content</span>
                }
                <h2 className={'font-bold'}>Table Of Content</h2>
                <nav className=''>
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
