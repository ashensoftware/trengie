import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES, LABELS } from '@/lib/constants';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
    title: LABELS.gracias.titulo,
    description: LABELS.meta.graciasDesc,
};

export default async function GraciasPage({
    searchParams,
}: {
    searchParams: Promise<{ servicio?: string }>;
}) {
    const params = await searchParams;
    const servicio = params.servicio;

    return (
        <section className="relative flex min-h-[80vh] items-center justify-center bg-[#0c0e13] px-4 py-24 text-center sm:px-6 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-2xl">
                {/* Animated check icon with double ring */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 ring-1 ring-green-500/30 sm:h-24 sm:w-24">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-500/40 sm:h-16 sm:w-16">
                        <svg className="h-8 w-8 text-green-400 sm:h-9 sm:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Main title */}
                <h1 className="mt-8 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                    ¡Mensaje recibido!
                </h1>

                {/* Personalized subtitle */}
                {servicio ? (
                    <p className="mt-4 text-lg text-white/70 sm:text-xl">
                        Hemos recibido su solicitud sobre{' '}
                        <span className="font-bold text-orange">{servicio}</span>.
                        <br className="hidden sm:block" />
                        Nuestro equipo técnico la revisará y se pondrá en contacto con usted.
                    </p>
                ) : (
                    <p className="mt-4 text-lg text-white/70 sm:text-xl">
                        Hemos recibido su solicitud correctamente.
                        <br className="hidden sm:block" />
                        Nuestro equipo técnico la revisará y se pondrá en contacto con usted.
                    </p>
                )}

                {/* Timeline / next steps */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
                    {[
                        {
                            step: '01',
                            title: 'Confirmación',
                            desc: 'Su solicitud ha sido registrada en nuestro sistema.',
                            active: true,
                        },
                        {
                            step: '02',
                            title: 'Revisión técnica',
                            desc: 'Un especialista revisará los detalles en las próximas 24 horas.',
                            active: false,
                        },
                        {
                            step: '03',
                            title: 'Contacto directo',
                            desc: 'Le contactaremos para agendar una reunión técnica.',
                            active: false,
                        },
                    ].map((item) => (
                        <div
                            key={item.step}
                            className={`rounded-2xl border p-5 transition-all ${item.active
                                ? 'border-green-500/30 bg-green-500/5'
                                : 'border-white/5 bg-white/[0.02]'
                                }`}
                        >
                            <span className={`text-xs font-black uppercase tracking-widest ${item.active ? 'text-green-400' : 'text-white/30'}`}>
                                Paso {item.step}
                            </span>
                            <h3 className={`mt-2 text-sm font-bold ${item.active ? 'text-green-300' : 'text-white/70'}`}>
                                {item.title}
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-white/40">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact info reminder */}
                <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5">
                    <p className="text-sm text-white/50">
                        Si necesita comunicarse antes, puede escribirnos directamente a{' '}
                        <a href={`mailto:${siteConfig.email}`} className="font-bold text-orange hover:text-orange/80 transition-colors">
                            {siteConfig.email}
                        </a>
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={ROUTES.home} className="btn-primary !py-3 !px-8 !rounded-full shadow-lg shadow-orange/20">
                        {LABELS.cta.volverInicio}
                    </Link>
                    <Link href={ROUTES.proyectos} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                        Ver portafolio →
                    </Link>
                </div>
            </div>
        </section>
    );
}
