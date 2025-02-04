'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";
import {ReactNode} from "react";

interface NavigationLinkProps {
    href: string;
    children: ReactNode;
}

const NavigationLink = (props: NavigationLinkProps) => {
    const path = usePathname();
    const isActivePath: boolean = path.startsWith(props.href);

    return (
        <Link href={props.href} className={isActivePath ? 'active' : undefined}>
            {props.children}
        </Link>
    )
}

export default NavigationLink;
