import BlogTag from "@/component/blogpost/BlogTag";
import {JSX} from "react";
import BlogTagList from "@/component/blogpost/BlogTagList";

interface BlogTagTableProps {
    blogTagNameList: Set<string>;
}

export default function BlogTagTable(props: BlogTagTableProps): JSX.Element {
    return (
        <div className="bg-emerald-700 max-w-64 border-solid border-2 flex flex-col gap-y-10 p-3 divide-y-5">
            <h6>Search By Tags</h6>
            <input></input>
            <BlogTagList blogTagNameList={props.blogTagNameList}></BlogTagList>

            <div className="w-30 flex flex-row flex-wrap  gap-3 border-t-4 border-solid p-3">
                {
                    Array.from(props.blogTagNameList).map((blogTagName) => {
                        return (
                            <BlogTag key={blogTagName} tagName={blogTagName} isSelected={false}/>
                        )
                    })
                }
            </div>
        </div>
    );
}