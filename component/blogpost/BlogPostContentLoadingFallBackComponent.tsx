import ProgressLoader from "@/component/common/ProgressLoader";
import CommonImageComponent from "@/component/common/CommonImageComponent";

export default function BlogPostContentLoadingFallBackComponent() {
    return (
        <div className="m-6">
            <div>
                <p>Blog Post Loading ...</p>
            </div>
            <div className="flex flex-col">
                <div className="w-full h-9 loader"></div>
                <div className="flex flex-row gap-1 w-full items-center">
                    <CommonImageComponent className="max-h-48 h-40 w-40" src="/icon/image_icon.svg" isLocal={true}></CommonImageComponent>
                    <div className="flex flex-col gap-1 grow">
                        <div className="h-4 w-1/2 loader"></div>
                        <div className="h-4 w-1/3 loader"></div>
                        <div className="h-4 w-1/4 loader"></div>
                        <div className="h-4 w-1/5 loader"></div>
                        <ProgressLoader className="h-4 w-1/6 loader"></ProgressLoader>
                        <div className="h-4 w-1/6 loader"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
