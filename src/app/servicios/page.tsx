import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/features/ServiceCard';
import type { Servicio } from '@/lib/types';
import { ROUTES, LABELS } from '@/lib/constants';
import servicios from '@/data/servicios.json';

export const metadata: Metadata = {
    title: LABELS.sections.servicios,
    description: LABELS.meta.serviciosDesc,
};

const processSteps = [
    { number: '01', title: 'Discovery', desc: 'Análisis de requerimientos, normativa aplicable y condiciones del proyecto.' },
    { number: '02', title: 'Ingeniería', desc: 'Diseño conceptual, básico y de detalle con estándares internacionales.' },
    { number: '03', title: 'Implementación', desc: 'Montaje, integración de sistemas y coordinación multidisciplinaria.' },
    { number: '04', title: 'Pruebas', desc: 'Validación funcional, pruebas estáticas/dinámicas y certificación RAMS.' },
    { number: '05', title: 'Puesta en marcha', desc: 'Comisionamiento, operación asistida y transferencia de conocimiento.' },
];

export default function ServiciosPage() {
    const typedServicios = servicios as Servicio[];

    if (typedServicios.length === 0) return null;

    return (
        <>
            {/* Hero */}
            <section className="bg-dark px-4 pt-28 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-20">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {LABELS.headings.nuestrosServicios}
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
                        {LABELS.subtitles.serviciosPage}
                    </p>
                </div>
            </section>

            {/* Service Cards */}
            <section className="bg-alabaster px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        label={LABELS.sections.soluciones}
                        title={LABELS.headings.servicios}
                        subtitle={LABELS.subtitles.serviciosDetalle}
                    />
                    <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                        {typedServicios.map((s) => (
                            <ServiceCard key={s.slug} service={s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Cómo trabajamos — Process Timeline */}
            <section className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        label={LABELS.sections.comoTrabajamos}
                        title={LABELS.headings.comoTrabajamos}
                        light
                    />
                    <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-dark-border sm:mt-14 sm:grid-cols-5">
                        {processSteps.map((step) => (
                            <div
                                key={step.number}
                                className="group bg-dark-card p-6 transition-colors hover:bg-dark-card/80 sm:p-8"
                            >
                                <span className="text-3xl font-black text-orange/30 transition-colors group-hover:text-orange sm:text-4xl">
                                    {step.number}
                                </span>
                                <h3 className="mt-3 text-base font-bold text-white sm:text-lg">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/50">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#0c0e13] px-4 py-16 text-center sm:px-6 sm:py-20">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                        {LABELS.subtitles.solucionIntegral}
                    </h2>
                    <p className="mt-3 text-base text-white/60 sm:mt-4 sm:text-lg">
                        {LABELS.subtitles.solucionIntegralDesc}
                    </p>
                    <div className="mt-6 sm:mt-8">
                        <a href={ROUTES.contacto} className="btn-primary">
                            {LABELS.cta.cotizar}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
