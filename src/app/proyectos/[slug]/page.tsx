import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BrandImage from '@/components/ui/BrandImage';
import { Icons } from '@/components/ui/Icons';
import type { Proyecto } from '@/lib/types';
import { ROUTES, LABELS } from '@/lib/constants';
import proyectos from '@/data/proyectos.json';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return (proyectos as Proyecto[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = (proyectos as Proyecto[]).find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: project.title,
        description: project.summary,
    };
}

export default async function ProyectoDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = (proyectos as Proyecto[]).find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <>
            <section className="relative min-h-[55vh] flex flex-col justify-end px-4 pt-28 pb-12 sm:px-6 lg:px-8 sm:pb-14 overflow-hidden bg-dark">
                <div className="absolute inset-0 pointer-events-none">
                    <BrandImage
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover opacity-30"
                        fallbackWidth={1920}
                        fallbackHeight={1080}
                        fallbackLabel="Portada del proyecto"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-7xl">
                    <Link
                        href={ROUTES.proyectos}
                        className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        {LABELS.cta.volverProyectos}
                    </Link>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-orange">
                            {project.category}
                        </span>
                        <span className="text-xs text-white/40">·</span>
                        <span className="text-xs text-white/80 font-medium">{project.year}</span>
                        <span className="text-xs text-white/40">·</span>
                        <span className="text-xs text-white/80">{project.location}</span>
                    </div>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl max-w-4xl">
                        {project.summary}
                    </p>
                </div>
            </section>

            <section className="bg-alabaster px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
                <div className="mx-auto w-full max-w-7xl space-y-5 sm:space-y-6 lg:space-y-7">
                    {project.descripcionDetallada ? (
                        <div className="rounded-xl border border-grey/50 bg-white p-4 sm:p-6 lg:p-7">
                            <span className="block text-xs font-semibold uppercase tracking-wider text-orange">
                                {LABELS.sections.descripcionProyecto}
                            </span>
                            <p className="mt-2 text-sm leading-relaxed text-dune whitespace-pre-line">
                                {project.descripcionDetallada}
                            </p>
                        </div>
                    ) : null}

                    <div className="space-y-4 sm:space-y-5">
                        <div className="rounded-xl border border-grey/50 bg-white p-4 sm:p-6 lg:p-7">
                            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange">
                                <Icons.Clipboard className="h-4 w-4 shrink-0 text-orange" aria-hidden />
                                {LABELS.sections.alcance}
                            </span>
                            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-dune">{project.scope}</p>
                        </div>

                        <div
                            className={`grid gap-4 sm:gap-5 ${project.empresas ? 'md:grid-cols-2 md:items-stretch' : 'md:grid-cols-1'}`}
                        >
                            {project.empresas ? (
                                <div className="flex flex-col rounded-xl border border-grey/50 bg-white p-4 sm:p-6">
                                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange">
                                        <Icons.Users className="h-4 w-4 shrink-0 text-orange" aria-hidden />
                                        {LABELS.portfolio.trayectoriaEquipo}
                                    </span>
                                    <p className="mt-2 text-sm leading-relaxed text-dune">{project.empresas}</p>
                                </div>
                            ) : null}

                            <div className="flex flex-col rounded-xl border border-orange/25 bg-orange/5 p-4 sm:p-6">
                                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange">
                                    <Icons.Check className="h-4 w-4 shrink-0 text-orange" aria-hidden />
                                    {LABELS.sections.resultados}
                                </span>
                                <p className="mt-2 text-sm font-semibold leading-relaxed text-orange sm:text-base">
                                    {project.results}
                                </p>
                            </div>
                        </div>

                    </div>

                    {project.images.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold text-dune sm:text-xl">{LABELS.sections.galeria}</h2>
                            <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                                {project.images.map((img, i) => (
                                    <div key={i} className="relative aspect-video overflow-hidden rounded-xl">
                                        <BrandImage
                                            src={img}
                                            alt={`${project.title} - ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            fallbackWidth={400}
                                            fallbackHeight={225}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-dark px-4 py-10 text-center sm:px-6 lg:px-8 sm:py-12">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {LABELS.subtitles.proyectoSimilar}
                </h2>
                <p className="mt-2 text-white/60 sm:mt-3">{LABELS.subtitles.proyectoSimilarDesc}</p>
                <Link href={ROUTES.contacto} className="btn-primary mt-5 inline-flex sm:mt-6">
                    {LABELS.cta.cotizar}
                </Link>
            </section>
        </>
    );
}
