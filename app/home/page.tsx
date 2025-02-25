import HomePagePoster from "@/component/home/HomePagePoster";
import Link from "next/link";
import CommonImageComponent from "@/component/common/CommonImageComponent";

export default function HomePage() {
    return (
        <div>
            <HomePagePoster/>
            <Link href="/blogpost">
                <CommonImageComponent className="mx-auto" src="/icon/contentFarm_logo_transparent_cutted.png" isLocal={true}/>
            </Link>
        </div>
    );
}
