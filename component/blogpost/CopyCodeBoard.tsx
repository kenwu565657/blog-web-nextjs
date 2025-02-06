'use client';

import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { IoIosCopy } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import { FaCode } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

interface CopyCodeBoardProps {
    code: string;
    language?: string;
}

export default function CopyCodeBoard(props: CopyCodeBoardProps) {
    const [isCopied, setIsCopied] = React.useState(false);

    function copyToClipboard(event: React.MouseEvent) {
        navigator.clipboard.writeText(props.code)
            .then(() => {
                setIsCopied(true);
                toast.success("Copied!");
                setTimeout(() => {
                    setIsCopied(false);
                }, 3000);
            })
            .catch(() => {
                toast.error("Could not copy code!");
            });
    }

    return (
        <div className={'relative'}>
            <Toaster />
            <div className={'flex flex-row gap-1 justify-start text-black absolute right-4'}>
                <span className={'pt-1'}>{getIconByProgrammingLanguage(props.language)}</span>
                <span>{props.language ? props.language.toUpperCase() : 'CODE'}</span>
                <button onClick={e=> copyToClipboard(e)}>
                    {
                        isCopied ?
                            <AiOutlineFileDone className={'text-green-700'}/> :
                            <IoIosCopy/>
                    }
                </button>
                    {
                        isCopied ?
                            <span className={'text-green-700'}>Copied!</span> :
                            <span>Copy</span>
                    }
            </div>
            <SyntaxHighlighter
                PreTag="div"
                language={props.language}
            >
                {props.code}
            </SyntaxHighlighter>
        </div>
    )
}

function getIconByProgrammingLanguage(language?: string): React.JSX.Element {
    if (!language) {
        return <FaCode></FaCode>;
    }
    const upperCaseLanguage = language.toUpperCase();
    switch (upperCaseLanguage) {
        case 'JAVA':
            return <FaJava/>
        default:
            return <FaCode></FaCode>
    }
}
