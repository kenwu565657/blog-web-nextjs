interface BlogTagProps {
    tagName: string;
    isSelected: boolean;
}

const BlogTag = (props: BlogTagProps) => {
    return (
        <span className="p-1 border-solid border-2 rounded-md border-black bg-emerald-700 text-white">
            {props.tagName} <b>{props.isSelected ? "| X" : ""}</b>
        </span>
    )
}

export default BlogTag;
