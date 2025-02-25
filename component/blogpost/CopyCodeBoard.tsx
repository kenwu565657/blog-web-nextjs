'use client';

import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

    function copyToClipboard() {
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
            <div className={'flex flex-row gap-1 justify-start absolute right-0.5 text-white'}>
                <span className={'pt-1'}>{getIconByProgrammingLanguage(props.language)}</span>
                <span>{props.language ? props.language.toUpperCase() : 'CODE'}</span>
                <button onClick={() => copyToClipboard()}>
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
                className={"overflow-x-auto"}
                style={a11yDark}
                wrapLines={true}
                showLineNumbers={true}
                showInlineLineNumbers={true}
                lineProps={lineNumber => {
                    const style: {color?: string} = {};
                    if (props.code.split("\n").at(lineNumber - 1)?.trimStart().startsWith("@")) {
                        style.color = "#FFFF00";
                    }
                    return {style};
                }}
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
