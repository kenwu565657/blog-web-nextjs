import AboutPagePoster from "@/component/about/AboutPagePoster";
import {AboutMeDescription} from "@/component/about/AboutMeDescription";

export default function AboutPage() {
    return (
        <div className="flex flex-row items-center justify-center z-0 relative">
            <AboutPagePoster />
            <AboutMeDescription />
        </div>
    )
}