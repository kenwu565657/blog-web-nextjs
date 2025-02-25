'use client';

import { useState } from "react";
import SearchInputButton from "@/component/SearchInputButton";
import SearchPopUpModel from "@/component/search/SearchPopUpModel";

export default function SearchComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const openSearchPopUpModel = () => {
        setIsOpen(true);
    }

    const closeSearchPopUpModel = () => {
        setIsOpen(false);
    }

    return (
        <div>
            {isOpen && <SearchPopUpModel isOpen={isOpen} closePopUpFunction={closeSearchPopUpModel}></SearchPopUpModel>}
            <SearchInputButton openSearchPopUpFunction={openSearchPopUpModel}></SearchInputButton>
        </div>
    );
}
