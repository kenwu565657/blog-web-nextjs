import ProgressLoader from "@/component/common/ProgressLoader";
import CommonImageComponent from "@/component/common/CommonImageComponent";

export default function BlogPostCardLoadingFallBackComponent() {
    return (
                <div className="flex flex-row gap-1 w-full items-center">
                    <CommonImageComponent className="h-40 w-40" src="/icon/image_icon.svg"  isLocal={true}></CommonImageComponent>
                    <div className="flex flex-col gap-1 grow">
                        <ProgressLoader className="w-full h-9"></ProgressLoader>
                        <ProgressLoader className="h-4 w-1/2"></ProgressLoader>
                        <ProgressLoader className="h-4 w-1/3"></ProgressLoader>
                        <ProgressLoader className="h-4 w-1/4"></ProgressLoader>
                        <ProgressLoader className="h-4 w-1/5"></ProgressLoader>
                        <ProgressLoader className="h-4 w-1/6"></ProgressLoader>
                        <ProgressLoader className="h-4 w-1/6"></ProgressLoader>
                    </div>
                </div>
    )
}
