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
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number>(0);

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
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
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

    const showVideo = Boolean(backgroundVideo && useVideo);

    useEffect(() => {
        if (!showVideo || !videoRef.current || !canvasRef.current || !containerRef.current) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const container = containerRef.current;
        let running = true;

        const setCanvasSize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            if (w && h && (canvas.width !== w || canvas.height !== h)) {
                canvas.width = w;
                canvas.height = h;
            }
        };
        setCanvasSize();
        const ro = new ResizeObserver(setCanvasSize);
        ro.observe(container);

        const draw = () => {
            if (!running) return;
            const ctx = canvas.getContext('2d');
            if (!ctx || !video.videoWidth || !canvas.width) {
                rafRef.current = requestAnimationFrame(draw);
                return;
            }
            const cw = canvas.width;
            const ch = canvas.height;
            const vw = video.videoWidth;
            const vh = video.videoHeight;
            const scale = Math.max(cw / vw, ch / vh);
            const dw = vw * scale;
            const dh = vh * scale;
            const x = (cw - dw) / 2;
            const y = (ch - dh) / 2;
            ctx.drawImage(video, 0, 0, vw, vh, x, y, dw, dh);
            rafRef.current = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            running = false;
            ro.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [showVideo]);

    return (
        <section className="relative flex w-full min-h-[100dvh] flex-col overflow-hidden bg-[#0c0e13]">
            <div ref={containerRef} className="absolute inset-0 pointer-events-none">
                {showVideo ? (
                    <>
                        <div className="absolute -left-[9999px] top-0 w-[1280px] h-[720px] overflow-hidden opacity-0 pointer-events-none" aria-hidden>
                            <video
                                ref={videoRef}
                                width={1280}
                                height={720}
                                src={backgroundVideo}
                                poster={backgroundImage}
                                preload="auto"
                                autoPlay
                                muted
                                playsInline
                                aria-hidden
                                onEnded={handleVideoEnded}
                                onCanPlay={() => videoRef.current?.play().catch(() => {})}
                                disablePictureInPicture
                                disableRemotePlayback
                                controlsList="nodownload nofullscreen noremoteplayback"
                            />
                        </div>
                        <canvas
                            ref={canvasRef}
                            className={`absolute inset-0 w-full h-full object-cover grayscale-[0.5] transition-opacity duration-300 ease-out ${
                                loopFading ? 'opacity-0' : 'opacity-40'
                            }`}
                            aria-hidden
                        />
                    </>
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

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-16 pb-8 sm:px-6">
                <div className="max-w-3xl">
                    <span className="mb-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-orange sm:text-xs">
                        <span className="inline-block h-px w-8 bg-orange/40" />
                        {label}
                    </span>

                    <h1 className="text-4xl font-black leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl">
                        {title}
                    </h1>

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

            {showStats && heroStats.length > 0 && (
                <div className="relative z-20 w-full border-t border-white/5 bg-[#1a1a1a]/60 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl divide-y lg:divide-y-0 lg:divide-x divide-white/5 lg:flex lg:items-center">
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
