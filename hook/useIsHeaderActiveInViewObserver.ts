'use client';

import { useEffect, useState } from "react";

export function useIsHeaderActiveInViewObserver(htmlHeaderType: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6', orderInSameHeaderType: number) {
    const [isActive, setIsActive] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setIsActive(true);
                        } else {
                            setIsActive(false);
                        }
                    })
                },
                {
                    //root: root,
                    //rootMargin: '-20% 0% -35% 0px',
                    threshold: 0.5
        }

        );

            const headerElement = document.querySelector(`#${htmlHeaderType}${orderInSameHeaderType}`);
            if (headerElement) {
                observer.observe(headerElement);
            }

            return () => {
                if (headerElement) {
                    observer.unobserve(headerElement);
                }
            }

        });



    return { isActive };
}
