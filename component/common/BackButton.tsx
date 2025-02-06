'use client';

import {useRouter} from 'next/navigation';

interface BackButtonProps {
    className?: string;
}

export default function BackButton(props?: BackButtonProps) {
    const router = useRouter();
    return (
        <button
            className={`${props?.className || ''}`}
            onClick={router.back}>
            back
        </button>
    )
}
