'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface BlogTagProps {
    tagName: string;
    isSelected: boolean;
}

const BlogTag = (props: BlogTagProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleOnClick() {
        const params = new URLSearchParams(searchParams);
        const currentSelectedTagListAsString = searchParams.get("tagList");
        let currentSelectedTagList: Set<string> = new Set<string>();
        if (currentSelectedTagListAsString) {
            currentSelectedTagList = new Set(currentSelectedTagListAsString.split(","));
        }
        if (props.isSelected) {
            currentSelectedTagList.delete(props.tagName);
        } else {
            currentSelectedTagList.add(props.tagName);
        }
        params.set('tagList', Array.from(currentSelectedTagList).join(','));
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <span
            className="p-1 border-solid border-2 drop-shadow-md rounded-md border-black bg-emerald-700 text-white hover:cursor-pointer"
            onClick={() => handleOnClick()}
            >
            {props.tagName} <b>{props.isSelected ? "| X" : ""}</b>
        </span>
    )
}

export default BlogTag;
