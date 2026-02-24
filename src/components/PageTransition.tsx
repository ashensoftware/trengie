'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [displayChildren, setDisplayChildren] = useState(children);

    useEffect(() => {
        setIsVisible(false);
        const timeout = setTimeout(() => {
            setDisplayChildren(children);
            setIsVisible(true);
        }, 150);
        return () => clearTimeout(timeout);
    }, [pathname, children]);

    return (
        <div
            className={`transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {displayChildren}
        </div>
    );
}
