import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/ui/Icons';
import type { Proyecto } from '@/lib/types';
import { LABELS } from '@/lib/constants';
import { toPortfolioCardModel } from '@/lib/projectCardView';

export default function ProjectCard({ project }: { project: Proyecto }) {
    const c = toPortfolioCardModel(project);
    const L = LABELS.portfolio;

    return (
        <Link
            href={`/proyectos/${c.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#181818] shadow-sm transition-all duration-300 hover:border-orange/25 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#181818]"
        >
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                {c.cover ? (
                    <Image
                        src={c.cover}
                        alt={c.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-white/5">
                        <Icons.ImagePlaceholder className="h-16 w-16" />
                    </div>
                )}
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/5 to-black/20" />

                <div className="absolute right-3 top-3 z-10 max-w-[calc(100%-1.5rem)] sm:right-3.5 sm:top-3.5">
                    <span className="inline-flex max-w-full items-center whitespace-nowrap rounded-full border border-white/10 bg-orange/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-[2px] sm:px-3 sm:text-[11px]">
                        {c.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5 sm:pt-4">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-[11px]">
                    <span className="text-orange/90">{c.location}</span>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-white/20" aria-hidden />
                    <span className="tabular-nums text-white/35">{c.year}</span>
                </p>

                <h3 className="mt-2 text-[1.0625rem] font-semibold leading-snug tracking-tight text-white sm:text-lg">
                    <span className="line-clamp-2 group-hover:text-orange/95 transition-colors">{c.title}</span>
                </h3>

                <p className="mt-2 text-[13px] leading-snug text-white/60 line-clamp-2">{c.summary}</p>

                <div className="mt-3 border-l border-orange/45 pl-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-orange/85">{L.aporteEquipo}</p>
                    <p className="mt-1.5 text-[12.5px] leading-snug text-white/72 line-clamp-3">{c.teamContribution}</p>
                </div>

                {c.organizationalContext ? (
                    <div className="mt-2.5 rounded-md bg-white/[0.035] px-2.5 py-2 ring-1 ring-inset ring-white/[0.05]">
                        <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/32">{L.trayectoriaEquipo}</p>
                        <p className="mt-1 text-[11px] leading-snug text-white/48 line-clamp-2">{c.organizationalContext}</p>
                    </div>
                ) : null}

                {c.impact ? (
                    <div className="mt-3 border-t border-white/[0.06] pt-3">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/32">{L.impacto}</p>
                        <p className="mt-1 text-[12.5px] leading-snug text-white/52 line-clamp-2">{c.impact}</p>
                    </div>
                ) : null}

                <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3.5">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-orange/90 transition-colors group-hover:gap-3">
                        {L.verProyecto}
                        <Icons.ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                </div>
            </div>
        </Link>
    );
}
