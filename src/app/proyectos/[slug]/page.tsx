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
            <section className="relative min-h-[60vh] flex flex-col justify-end px-4 pt-32 pb-16 sm:px-6 sm:pb-20 overflow-hidden bg-dark">
                {/* Background Banner */}
                <div className="absolute inset-0 pointer-events-none">
                    <BrandImage
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover opacity-30"
                        fallbackWidth={1920}
                        fallbackHeight={1080}
                        fallbackLabel="Project Cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-4xl">
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

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                        {project.title}
                    </h1>
                    <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl max-w-2xl">
                        {project.summary}
                    </p>
                </div>
            </section>

            <section className="bg-alabaster px-4 py-12 sm:px-6 sm:py-16">
                <div className="mx-auto max-w-4xl space-y-12 sm:space-y-16">

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
