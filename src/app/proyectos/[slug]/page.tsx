import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Proyecto } from '@/lib/types';
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
            {/* Header */}
            <section className="bg-neutral-900 px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <Link
                        href="/proyectos"
                        className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Volver a proyectos
                    </Link>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-neutral-400">
                        {project.client}
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-300">{project.summary}</p>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-4xl space-y-16">
                    {/* El Reto */}
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">El Reto</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{project.reto}</p>
                    </div>

                    {/* La Solución */}
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">La Solución</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{project.solucion}</p>
                    </div>

                    {/* Resultados */}
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">Resultados</h2>
                        <ul className="mt-4 space-y-3">
                            {project.resultados.map((r) => (
                                <li key={r} className="flex items-start gap-3 text-neutral-600">
                                    <svg
                                        className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {r}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stack */}
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">Stack Tecnológico</h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Galería */}
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">Galería</h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {project.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="flex aspect-video items-center justify-center rounded-xl bg-neutral-100 text-neutral-400"
                                >
                                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-16 text-center">
                <h2 className="text-2xl font-bold text-neutral-900">¿Tienes un proyecto similar?</h2>
                <p className="mt-3 text-neutral-600">Cuéntanos y te ayudamos a hacerlo realidad.</p>
                <Link
                    href="/contacto"
                    className="mt-6 inline-flex rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
                >
                    Cotizar proyecto
                </Link>
            </section>
        </>
    );
}
