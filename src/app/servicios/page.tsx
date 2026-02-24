import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import type { Servicio } from '@/lib/types';
import { ROUTES, LABELS } from '@/lib/constants';
import servicios from '@/data/servicios.json';

export const metadata: Metadata = {
    title: LABELS.sections.servicios,
    description: LABELS.meta.serviciosDesc,
};

export default function ServiciosPage() {
    const typedServicios = servicios as Servicio[];

    if (typedServicios.length === 0) return null;

    return (
        <>
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

            <section className="bg-alabaster px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        label={LABELS.sections.soluciones}
                        title={LABELS.headings.servicios}
                        subtitle={LABELS.subtitles.serviciosDetalle}
                    />
                    <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
                        {typedServicios.map((s) => (
                            <ServiceCard key={s.slug} service={s} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-dark px-4 py-16 text-center sm:px-6 sm:py-20">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                        {LABELS.subtitles.solucionIntegral}
                    </h2>
                    <p className="mt-3 text-base text-white/60 sm:mt-4 sm:text-lg">
                        {LABELS.subtitles.solucionIntegralDesc}
                    </p>
                    <div className="mt-6 sm:mt-8">
                        <a href={ROUTES.contacto} className="btn-primary">
                            {LABELS.cta.agendarReunion}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
