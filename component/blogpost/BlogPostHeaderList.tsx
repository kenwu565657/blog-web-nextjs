'use client';

import {JSX} from "react";
import {classifyMarkdownHeaderList} from "@/utils/MarkdownUtils";
import BlogPostHeaderListItem from "@/component/blogpost/BlogPostHeaderListItem";

interface BlogPostHeaderListProps {
    blogPostHeaderList: string[];
}

export default function BlogPostHeaderList(props: BlogPostHeaderListProps): JSX.Element {
    const isHaveHeader: boolean = props.blogPostHeaderList.length > 0;

    if (!isHaveHeader) {
        return <div></div>;
    }

    const headerList = classifyMarkdownHeaderList(props.blogPostHeaderList);

    return (
        <div className={'mx-10 fixed right-4'}>
            <h2 className={'font-bold'}>Table Of Content</h2>
            <nav className=''>
                <ul className='pl-2'>
                    {headerList.map((header) => (
                        <BlogPostHeaderListItem key={header.headerValue} blogPostHeader={header}/>
                    ))}
                </ul>
            </nav>
        </div>

    );
}
