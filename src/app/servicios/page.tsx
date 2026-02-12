import type { Metadata } from 'next';
import type { Servicio } from '@/lib/types';
import servicios from '@/data/servicios.json';

export const metadata: Metadata = {
    title: 'Servicios',
    description:
        'Desarrollo de software a medida, consultoría tecnológica y automatización de procesos para empresas.',
};

const iconMap: Record<string, React.ReactNode> = {
    code: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
    ),
    lightbulb: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
    ),
    database: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
    ),
};

export default function ServiciosPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-neutral-900 px-6 py-20 text-center">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Nuestros Servicios
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                        Soluciones tecnológicas diseñadas para resolver problemas reales de negocio.
                    </p>
                </div>
            </section>

            {/* Service details */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl space-y-20">
                    {(servicios as Servicio[]).map((s, i) => (
                        <div
                            key={s.slug}
                            id={s.slug}
                            className={`flex flex-col gap-10 md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                } items-start`}
                        >
                            {/* Icon + visual */}
                            <div className="flex shrink-0 items-center justify-center rounded-2xl bg-neutral-100 p-8 md:w-1/3">
                                <div className="text-neutral-700">{iconMap[s.icon] ?? iconMap.code}</div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-neutral-900">{s.title}</h2>
                                <p className="mt-3 leading-relaxed text-neutral-600">{s.summary}</p>
                                <ul className="mt-6 space-y-2">
                                    {s.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3 text-neutral-600">
                                            <svg
                                                className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
