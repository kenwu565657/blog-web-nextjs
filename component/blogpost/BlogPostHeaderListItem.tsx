'use client';

import {BlogPostHeader} from "@/interface/blogpost/BlogPostHeader";
import React from "react";
import {useIsHeaderActiveInViewObserver} from "@/hook/useIsHeaderActiveInViewObserver";

interface BlogPostHeaderProps {
    blogPostHeader: BlogPostHeader
}

export default function BlogPostHeaderListItem(props: BlogPostHeaderProps) {
    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        const query: string = `${props.blogPostHeader.htmlHeaderType}`;
        const sameHeaderTypeElement = document.querySelectorAll(query);
        if (sameHeaderTypeElement) {
            sameHeaderTypeElement[props.blogPostHeader.orderNumberOfSameHeaderType]?.scrollIntoView({behavior: "smooth"});
        }
    }
    console.log(props.blogPostHeader);
    const { isActive } = useIsHeaderActiveInViewObserver(props.blogPostHeader.htmlHeaderType, props.blogPostHeader.orderNumberOfSameHeaderType);

    const paddingClass = getPaddingClassNameBaseOnHtmlHeaderType(props.blogPostHeader.htmlHeaderType);

    return (
        <li className={`${paddingClass} ${isActive ? 'border-green-500' : ''} border-l-8 my-2 p-2`}>
            <img className={"inline pr-2"} src={getIconFileNameByIsActiveStatus(isActive)}></img>
           <a
               className={"hover:font-bold"}
               href={`#`}
               onClick={(e) => handleOnClick(e)}
           >
               {props.blogPostHeader.headerValue}
           </a>
        </li>
    );
}

function getIconFileNameByIsActiveStatus(isActive: boolean): string {
    if (isActive) {
        return '/icon/potted_plant_green.svg';
    }
    return '/icon/potted_plant_no_color.svg';
}

function getPaddingClassNameBaseOnHtmlHeaderType(htmlHeaderType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): string {
    switch (htmlHeaderType) {
        case "h1": return 'pl-2';
        case 'h2': return 'pl-4';
        case 'h3': return 'pl-8';
        case 'h4': return 'pl-10';
        case 'h5': return 'pl-12';
        case 'h6': return 'pl-14';
    }
}
