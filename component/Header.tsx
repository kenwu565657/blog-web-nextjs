import Link from 'next/link';
import HeaderMenu from "@/component/HeaderMenu";

const Header = () => {
    return (
        <div className="w-full px-4 py-3 uppercase">
            <div className="relative flex items-center justify-between">
                <Link href="/home">
                    <h1 className="text-2xl"><b>C<span className="text-red-700">o</span>ntent Farm</b></h1>
                </Link>
                <HeaderMenu></HeaderMenu>
            </div>
        </div>

    );
}

export default Header;
