'use client';

import { BiArrowToTop } from "react-icons/bi";

export default function ToTopButton() {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    return (
            <button
                className={"fixed bottom-5 left-5 z-10 rounded-full border bg-green-100 shadow-md hover:shadow-2xl"}
                onClick={handleClick}
                title={"Scroll to Top"}
            >
                <BiArrowToTop className="text-black" size={40}/>
            </button>
    )
}
