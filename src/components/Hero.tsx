import Link from 'next/link';
import BrandImage from '@/components/BrandImage';
import { heroStats } from '@/data/site';
import { ASSETS, ROUTES, LABELS } from '@/lib/constants';

interface HeroProps {
    label?: string;
    title: string;
    highlight?: string;
    titleEnd?: string;
    subtitle: string;
    backgroundImage?: string;
    showCtas?: boolean;
    showStats?: boolean;
}

export default function Hero({
    label = LABELS.hero.label,
    title,
    highlight,
    titleEnd,
    subtitle,
    backgroundImage = ASSETS.heroBg,
    showCtas = true,
    showStats = true,
}: HeroProps) {
    return (
        <section className="relative h-dvh overflow-hidden bg-dark">
            <div className="absolute inset-0">
                <BrandImage
                    src={backgroundImage}
                    alt="Infraestructura ferroviaria"
                    fill
                    className="object-cover opacity-40"
                    fallbackWidth={1920}
                    fallbackHeight={1080}
                    fallbackLabel="Hero Background"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
            </div>

            <div className="relative mx-auto flex h-dvh max-w-7xl flex-col justify-end px-4 pt-20 pb-0 sm:px-6">
                <div className="max-w-2xl pb-6">
                    <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-orange sm:mb-4 sm:text-xs">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange sm:h-2 sm:w-2" />
                        {label}
                    </span>

                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        {title}
                        {highlight && (
                            <>
                                {' '}
                                <span className="italic text-orange">{highlight}</span>
                            </>
                        )}
                        {titleEnd && <> {titleEnd}</>}
                    </h1>

                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
                        {subtitle}
                    </p>

                    {showCtas && (
                        <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                            <Link href={ROUTES.contacto} className="btn-primary inline-flex items-center justify-center gap-2 text-center">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                                {LABELS.cta.solicitarConsultoria}
                            </Link>
                            <Link href={ROUTES.proyectos} className="btn-outline inline-flex items-center justify-center gap-2 text-center">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                {LABELS.cta.verProyectos}
                            </Link>
                        </div>
                    )}
                </div>

                {showStats && heroStats.length > 0 && (
                    <div className="border-t border-white/10 bg-dark/60 backdrop-blur-sm">
                        <div className="grid grid-cols-3 divide-x divide-white/10">
                            {heroStats.map((stat) => (
                                <div key={stat.label} className="px-3 py-4 text-center sm:px-6 sm:py-6">
                                    <span className="text-2xl font-bold text-orange sm:text-3xl md:text-4xl">
                                        {stat.value}
                                    </span>
                                    <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-wider text-white/50 sm:mt-1 sm:text-xs">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
