'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

interface BrandImageProps extends Omit<ImageProps, 'onError'> {
    fallbackWidth?: number;
    fallbackHeight?: number;
    fallbackLabel?: string;
}

export default function BrandImage({
    fallbackWidth = 600,
    fallbackHeight = 400,
    fallbackLabel,
    alt,
    ...props
}: BrandImageProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div
                className="flex items-center justify-center bg-dune/10"
                style={{
                    width: '100%',
                    aspectRatio: `${fallbackWidth} / ${fallbackHeight}`,
                    maxWidth: fallbackWidth,
                }}
                role="img"
                aria-label={alt}
            >
                <div className="text-center text-boulder">
                    <svg
                        className="mx-auto h-10 w-10 opacity-40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                        />
                    </svg>
                    <p className="mt-2 text-xs font-medium opacity-60">
                        {fallbackLabel ?? `${fallbackWidth}×${fallbackHeight}`}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <Image
            {...props}
            alt={alt}
            onError={() => setHasError(true)}
        />
    );
}
