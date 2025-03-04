import Link from 'next/link';
import HeaderMenu from "@/component/HeaderMenu";
import CommonImageComponent from "@/component/common/CommonImageComponent";

const Header = () => {
    return (
        <div className="relative px-4 py-1 left-0 top:0 bg-white mb-4">
            <div className="items-center justify-between flex flex-col md:flex-row">
                <Link href="/home">
                    <CommonImageComponent className="min-w-44 max-w-80" src="/icon/contentFarm_logo_transparent_cutted.png" isLocal={true} width={300}></CommonImageComponent>
                </Link>
                <HeaderMenu></HeaderMenu>
            </div>
        </div>
    );
}

export default Header;
