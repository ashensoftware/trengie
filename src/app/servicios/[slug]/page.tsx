import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ROUTES, LABELS } from '@/lib/constants';
import JsonLd from '@/components/ui/JsonLd';
import serviciosData from '@/data/servicios.json';
import extendedDataRaw from '@/data/servicios_extended.json';
import type { Servicio } from '@/lib/types';

const allServicios = serviciosData as Servicio[];
const extendedData = extendedDataRaw as Record<string, {
    heroSubtitle: string;
    sections: { heading: string; body: string }[];
    deliverables: string[];
    standards: string[];
}>;

export async function generateStaticParams() {
    return allServicios.map((s) => ({ slug: s.slug }));
}

export default async function ServicioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const servicio = allServicios.find((s) => s.slug === slug);
    if (!servicio) notFound();

    const extended = extendedData[slug];

    const serviceData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: servicio.title,
        description: extended?.heroSubtitle || servicio.summary,
        provider: {
            '@type': 'Organization',
            name: 'Trengie',
        },
        occupationalCategory: 'Engineering',
    };

    return (
        <main className="bg-[#0c0e13]">
            <JsonLd data={serviceData} />
            <section className="relative min-h-[60vh] flex flex-col justify-end px-4 pt-32 pb-16 sm:px-6 sm:pb-20 overflow-hidden bg-[#0c0e13] border-b border-white/5">
                {servicio.image && (
                    <div className="absolute inset-0 pointer-events-none">
                        <Image
                            src={servicio.image}
                            alt={servicio.title}
                            fill
                            className="object-cover opacity-50"
                            sizes="100vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e13] via-[#0c0e13]/90 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e13] via-transparent to-transparent" />
                    </div>
                )}

                <div className="relative z-10 mx-auto w-full max-w-7xl">
                    <Link
                        href={ROUTES.servicios}
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-orange transition-colors mb-12"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Todos los servicios
                    </Link>

                    <div className="max-w-3xl">
                        <span className="section-label mb-6">Servicio</span>
                        <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl leading-[0.9]">
                            {servicio.title}
                        </h1>
                        <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl font-medium">
                            {extended?.heroSubtitle || servicio.summary}
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-8 sm:px-6 bg-[#111318] border-b border-white/5">
                <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <span className="block text-[9px] font-black uppercase tracking-widest text-orange mb-2">Ideal Para</span>
                        <p className="text-sm font-medium text-white/80 leading-relaxed">
                            {servicio.idealFor || servicio.problemSolved}
                        </p>
                    </div>
                    <div className="bg-orange/10 border-l-2 border-orange/40 rounded-r-xl p-6">
                        <span className="block text-[9px] font-black uppercase tracking-widest text-orange mb-2">Impacto Generado</span>
                        <p className="text-sm font-black text-white leading-relaxed">
                            {servicio.impact || 'Eficiencia técnica garantizada'}
                        </p>
                    </div>
                </div>
            </section>

            {extended && (
                <section className="px-4 py-20 sm:px-6 sm:py-28">
                    <div className="mx-auto max-w-7xl">
                        <span className="section-label mb-6">Alcance Técnico</span>
                        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-16 sm:text-4xl">
                            Qué <span className="text-orange">hacemos</span>
                        </h2>
                        <div className="grid gap-8 lg:grid-cols-3">
                            {extended.sections.map((section, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-orange/20 transition-colors group">
                                    <span className="text-4xl font-black text-white/5 group-hover:text-orange/20 transition-colors block mb-4 tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">
                                        {section.heading}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        {section.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {extended && (
                <section className="px-4 py-20 sm:px-6 bg-[#111318]">
                    <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
                        <div>
                            <span className="section-label mb-6">Entregables</span>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-8">
                                Qué <span className="text-orange">entregamos</span>
                            </h2>
                            <ul className="space-y-4">
                                {extended.deliverables.map((d, i) => (
                                    <li key={i} className="flex items-start gap-4 text-sm text-white/50">
                                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <span className="section-label mb-6">Normativas</span>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-8">
                                Estándares <span className="text-orange">aplicados</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {extended.standards.map((s) => (
                                    <span key={s} className="text-[11px] font-black text-white/30 uppercase tracking-widest border border-white/10 px-4 py-2.5 rounded-xl hover:border-orange/30 hover:text-orange/60 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            {servicio.technologies && servicio.technologies.length > 0 && (
                                <div className="mt-8">
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4">Tecnologías</span>
                                    <div className="flex flex-wrap gap-2">
                                        {servicio.technologies.map((t) => (
                                            <span key={t} className="text-[10px] font-bold text-orange/50 uppercase tracking-widest bg-orange/5 border border-orange/10 px-3 py-1.5 rounded-lg">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            <section className="px-4 py-20 text-center sm:px-6">
                <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-b from-white/5 to-transparent p-12 border border-white/5">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter sm:text-4xl">
                        ¿Necesita este <span className="text-orange">servicio</span>?
                    </h2>
                    <p className="mt-6 text-lg text-white/40 mx-auto max-w-2xl">
                        Nuestro equipo de especialistas está listo para evaluar su proyecto y ofrecerle la mejor solución técnica.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={`${ROUTES.contacto}?servicio=${slug}`} className="btn-primary px-10 py-4 text-base">
                            {LABELS.cta.hablarExperto}
                        </Link>
                        <Link href={ROUTES.servicios} className="btn-tertiary px-8 py-4 text-base">
                            Ver otros servicios
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
