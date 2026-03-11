'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import BrandImage from '@/components/ui/BrandImage';
import { Icons } from '@/components/ui/Icons';
import { heroStats } from '@/data/site';
import { ASSETS, ROUTES, LABELS } from '@/lib/constants';

interface HeroProps {
    label?: string;
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    showCtas?: boolean;
    showStats?: boolean;
    priority?: boolean;
}

export default function Hero({
    label = LABELS.hero.label,
    title = LABELS.hero.title,
    subtitle = LABELS.hero.subtitle,
    backgroundImage = ASSETS.heroBg,
    backgroundVideo,
    showCtas = true,
    showStats = true,
    priority = false,
}: HeroProps) {
    const [useVideo, setUseVideo] = useState(false);
    const [loopFading, setLoopFading] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!backgroundVideo) return;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion) return;
        const id = requestAnimationFrame(() => setUseVideo(true));
        return () => cancelAnimationFrame(id);
    }, [backgroundVideo]);

    useEffect(() => {
        return () => {
            if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
        };
    }, []);

    const handleVideoEnded = () => {
        setLoopFading(true);
        fadeTimeoutRef.current = setTimeout(() => {
            const video = videoRef.current;
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
            setLoopFading(false);
            fadeTimeoutRef.current = null;
        }, 320);
    };

    const showVideo = backgroundVideo && useVideo;

    return (
        <section className="relative flex w-full min-h-[100dvh] flex-col overflow-hidden bg-[#0c0e13]">
            {/* Background media (image or optional video) with deeper overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {showVideo ? (
                    <video
                        ref={videoRef}
                        className={`h-full w-full object-cover grayscale-[0.5] transition-opacity duration-300 ease-out ${
                            loopFading ? 'opacity-0' : 'opacity-40'
                        }`}
                        src={backgroundVideo}
                        poster={backgroundImage}
                        preload="metadata"
                        autoPlay
                        muted
                        playsInline
                        aria-hidden
                        onEnded={handleVideoEnded}
                        disablePictureInPicture
                        disableRemotePlayback
                        controlsList="nodownload nofullscreen noremoteplayback"
                    />
                ) : (
                    <BrandImage
                        src={backgroundImage}
                        alt="Infraestructura ferroviaria"
                        fill
                        className="object-cover opacity-30 grayscale-[0.5]"
                        fallbackWidth={1920}
                        fallbackHeight={1080}
                        fallbackLabel="Hero Background"
                        priority={priority}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e13] via-[#0c0e13]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e13] via-transparent to-transparent" />
            </div>

            {/* Main Content (Centered in remaining space) */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-16 pb-8 sm:px-6">
                <div className="max-w-3xl">
                    <span className="mb-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-orange sm:text-xs">
                        <span className="inline-block h-px w-8 bg-orange/40" />
                        {label}
                    </span>

                    <h1 className="text-4xl font-black leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl">
                        {title}
                    </h1>

                    {/* Slogan from Brand Manual */}
                    <div className="mt-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                        <span>engineering</span>
                        <span className="h-1 w-1 rounded-full bg-orange/40" />
                        <span>innovation</span>
                        <span className="h-1 w-1 rounded-full bg-orange/40" />
                        <span>excellence</span>
                    </div>

                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-xl lg:leading-loose">
                        {subtitle}
                    </p>

                    {showCtas && (
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                            <Link
                                href={ROUTES.contacto}
                                className="btn-primary group !py-4 !px-8 !text-base shadow-2xl shadow-orange/20 !rounded-full"
                                aria-label={LABELS.cta.agendarReunion}
                            >
                                <span className="flex items-center gap-3">
                                    {LABELS.cta.agendarReunion}
                                    <Icons.ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <Link
                                href={ROUTES.servicios}
                                className="btn-secondary !bg-white/5 !border-white/10 !py-4 !px-8 !text-base hover:!bg-white/10 hover:!border-white/20 !rounded-full"
                            >
                                {LABELS.cta.verServicios}
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Authority Trust Bar - Bottom Fixed Flow */}
            {showStats && heroStats.length > 0 && (
                <div className="relative z-20 w-full border-t border-white/5 bg-[#1a1a1a]/60 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl divide-y lg:divide-y-0 lg:divide-x divide-white/5 lg:flex lg:items-center">
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 lg:grid-cols-4 divide-x divide-white/5">
                            {heroStats.map((stat) => (
                                <div key={stat.label} className="px-4 py-6 text-center sm:px-6 sm:py-8 transition-colors hover:bg-white/5">
                                    <span className="text-xl font-black text-orange sm:text-2xl lg:text-3xl tracking-tighter">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/30 sm:text-[9px]">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Normativas de referencia (no claim de certificación) */}
                        <div className="bg-orange/5 px-6 py-4 lg:py-8 text-center lg:text-left lg:min-w-[300px] group transition-colors hover:bg-orange/10 flex flex-col justify-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange mb-1 block">
                                Normativas de referencia
                            </span>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                                <span className="text-xs font-bold text-white/70 group-hover:text-white transition-colors">Trabajamos con ISO · CENELEC · RAMS / SIL4</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
