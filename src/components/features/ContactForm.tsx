'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from '@formspree/react';
import { siteConfig } from '@/lib/config';
import { ROUTES, LABELS } from '@/lib/constants';
import { contactChannels } from '@/data/site';
import { Icons } from '@/components/ui/Icons';
import { serviceOptions, stageOptions, slugToService } from '@/data/contact_options.json';

const channelIcons: Record<string, React.ReactNode> = {
    whatsapp: <Icons.Whatsapp className="h-5 w-5" />,
    calendar: <Icons.Calendar className="h-5 w-5" />,
    mail: <Icons.Mail className="h-5 w-5" />,
};

export default function ContactForm() {
    const [state, handleSubmit] = useForm(siteConfig.formspreeId);
    const serviceRef = useRef<HTMLSelectElement>(null);
    const searchParams = useSearchParams();

    /* Pre-select service from ?servicio= query param */
    useEffect(() => {
        const param = searchParams.get('servicio');
        if (param && serviceRef.current) {
            const resolved = (slugToService as Record<string, string>)[param] || param;
            if (serviceOptions.includes(resolved)) {
                serviceRef.current.value = resolved;
            }
        }
    }, [searchParams]);

    useEffect(() => {
        if (state.succeeded) {
            const timer = setTimeout(() => {
                const servicio = serviceRef.current?.value;
                const query = servicio ? `?servicio=${encodeURIComponent(servicio)}` : '';
                window.location.href = `${ROUTES.gracias}${query}`;
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    const status = state.submitting ? 'sending' : state.succeeded ? 'success' : state.errors?.getFormErrors().length ? 'error' : 'idle';

    return (
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Formulario */}
            <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="contact-name" className="mb-2 block text-sm font-bold tracking-wide text-white/90">
                                {LABELS.form.nombre}
                            </label>
                            <input type="text" id="contact-name" name="name" required minLength={2} className="input" placeholder={LABELS.form.placeholderNombre} />
                        </div>
                        <div>
                            <label htmlFor="contact-company" className="mb-2 block text-sm font-bold tracking-wide text-white/90">
                                {LABELS.form.empresa}
                            </label>
                            <input type="text" id="contact-company" name="company" className="input" placeholder={LABELS.form.placeholderEmpresa} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contact-email" className="mb-2 block text-sm font-bold tracking-wide text-white/90">
                            {LABELS.form.correo}
                        </label>
                        <input type="email" id="contact-email" name="email" required className="input" placeholder={LABELS.form.placeholderCorreo} />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="contact-service" className="mb-2 block text-sm font-bold tracking-wide text-white/90">
                                {LABELS.form.tipoServicio}
                            </label>
                            <select id="contact-service" name="service" className="input" defaultValue="" ref={serviceRef}>
                                <option value="" disabled>{LABELS.form.placeholderServicio}</option>
                                {serviceOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="contact-stage" className="mb-2 block text-sm font-bold tracking-wide text-white/90">
                                {LABELS.form.etapaProyecto}
                            </label>
                            <select id="contact-stage" name="stage" className="input" defaultValue="">
                                <option value="" disabled>{LABELS.form.placeholderEtapa}</option>
                                {stageOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contact-message" className="mb-2 block text-sm font-bold tracking-wide text-white/90">
                            {LABELS.form.mensaje}
                        </label>
                        <textarea id="contact-message" name="message" required rows={5} minLength={10} className="input" placeholder={LABELS.form.placeholderMensaje} />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`btn-primary relative flex w-full items-center justify-center py-4 text-base shadow-lg transition-all duration-300 ${status === 'success'
                                ? '!bg-green-600 !text-white hover:!bg-green-700 !shadow-green-500/20'
                                : 'shadow-orange/10 disabled:opacity-70'
                                }`}
                        >
                            {status === 'sending' ? (
                                <>
                                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Enviando tu solicitud...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <Icons.Check className="mr-2 h-5 w-5" />
                                    ¡Enviado! Redirigiendo...
                                </>
                            ) : (
                                LABELS.cta.enviarSolicitud
                            )}
                        </button>
                    </div>

                    {/* Microcopy & Error Status */}
                    <div className="space-y-4">
                        {status !== 'success' && (
                            <p className="flex justify-center items-center gap-2 text-xs text-white/40">
                                <Icons.Clock className="h-4 w-4 text-white/30" />
                                {LABELS.form.microcopy}
                            </p>
                        )}

                        {status === 'error' && (
                            <div className="animate-in fade-in slide-in-from-top-2 rounded-lg bg-red-500/10 border border-red-500/20 p-4 flex items-center justify-center gap-3 text-red-400" role="alert">
                                <Icons.AlertCircle className="h-5 w-5 shrink-0" />
                                <span className="text-sm font-medium">{LABELS.form.errorMsg}</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Sidebar con Proceso y FAQ */}
            <div className="lg:col-span-5 space-y-12">
                {/* Canales directos */}
                <div className="grid gap-3">
                    {contactChannels.map((channel) => (
                        <a
                            key={channel.title}
                            href={channel.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#1f1f1f] px-5 py-4 transition-all hover:border-orange/40 hover:bg-[#242424] active:scale-[0.98]"
                        >
                            <span className="text-orange">
                                {channelIcons[channel.icon]}
                            </span>
                            <div>
                                <span className="block text-sm font-bold text-white/90">{channel.title}</span>
                                <span className="block text-xs text-white/40">{channel.description}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Qué pasa después */}
                <section>
                    <h3 className="mb-6 text-xs font-black uppercase tracking-widest text-orange/80">
                        {LABELS.sections.quePasaDespues}
                    </h3>
                    <div className="space-y-6">
                        {[...LABELS.form.proceso].map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-[10px] font-black text-orange ring-1 ring-orange/20">
                                    {i + 1}
                                </span>
                                <div>
                                    <h4 className="text-sm font-bold text-white/90">{step.title}</h4>
                                    <p className="mt-1 text-xs leading-relaxed text-white/50">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* mini FAQ */}
                <section>
                    <h3 className="mb-6 text-xs font-black uppercase tracking-widest text-orange/80">
                        {LABELS.sections.faq}
                    </h3>
                    <div className="space-y-6">
                        {[...LABELS.form.faqs].map((faq, i) => (
                            <div key={i}>
                                <h4 className="text-sm font-bold text-white/90 leading-snug">
                                    {faq.q}
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-white/50">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
