import CommonImageComponent from "@/component/common/CommonImageComponent";
import {JSX} from "react";

interface BlogPostAuthorIconProps {
    authorName?: string;
    className?: string;
}

export default function BlogPostAuthorIcon(props: BlogPostAuthorIconProps) {
    const iconComponent: JSX.Element = getIconByAuthorName(props.authorName);
    let containerClassName: string = "bg-green-400 rounded-md border-1 min-w-12";
    if (props.className) {
        containerClassName = props.className;
    }
    return (
        <div className={containerClassName}>
            {iconComponent}
        </div>
    )
}

function getIconByAuthorName(authorName: string|null|undefined): JSX.Element {
    // todo: see if have other author later
    if (!authorName) {
        return getDefaultAuthorIcon();
    }
    if (authorName) {
        return getDefaultAuthorIcon();
    }
    return (
        <span className="m-4 text-white font-bold text-2xl">{authorName[0]}</span>
    )
}

function getDefaultAuthorIcon(): JSX.Element {
    return <CommonImageComponent
        src="/icon/farmer_icon.png"
        isLocal={true}
        width={50}
        height={50}
    >
    </CommonImageComponent>
}
