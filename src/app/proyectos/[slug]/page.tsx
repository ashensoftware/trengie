import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BrandImage from '@/components/BrandImage';
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
            <section className="bg-dark px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
                <div className="mx-auto max-w-4xl">
                    <Link
                        href={ROUTES.proyectos}
                        className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/70"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        {LABELS.cta.volverProyectos}
                    </Link>

                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-orange">
                            {project.category}
                        </span>
                        <span className="text-xs text-white/40">·</span>
                        <span className="text-xs text-white/40">{project.year}</span>
                        <span className="text-xs text-white/40">·</span>
                        <span className="text-xs text-white/40">{project.location}</span>
                    </div>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
                        {project.summary}
                    </p>
                </div>
            </section>

            <section className="bg-alabaster px-4 py-12 sm:px-6 sm:py-16">
                <div className="mx-auto max-w-4xl space-y-12 sm:space-y-16">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                        <BrandImage
                            src={project.cover}
                            alt={project.title}
                            fill
                            className="object-cover"
                            fallbackWidth={1200}
                            fallbackHeight={675}
                            fallbackLabel={project.title}
                            sizes="(max-width: 768px) 100vw, 896px"
                        />
                    </div>

                    <div className="grid gap-6 rounded-xl border border-grey/50 bg-white p-5 sm:grid-cols-3 sm:gap-8 sm:p-8">
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-orange">
                                {LABELS.sections.alcance}
                            </span>
                            <span className="mt-2 block text-sm leading-relaxed text-dune">{project.scope}</span>
                        </div>
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-orange">
                                {LABELS.sections.rol}
                            </span>
                            <span className="mt-2 block text-sm leading-relaxed text-dune">{project.role}</span>
                        </div>
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-orange">
                                {LABELS.sections.resultados}
                            </span>
                            <span className="mt-2 block text-sm font-semibold text-orange">
                                {project.results}
                            </span>
                        </div>
                    </div>

                    {project.images.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold text-dune sm:text-2xl">{LABELS.sections.galeria}</h2>
                            <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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

            <section className="bg-dark px-4 py-12 text-center sm:px-6 sm:py-16">
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
