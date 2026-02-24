'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/lib/config';
import { ROUTES, LABELS } from '@/lib/constants';
import { contactChannels } from '@/data/site';

const channelIcons: Record<string, React.ReactNode> = {
    whatsapp: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    ),
    calendar: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
    ),
    mail: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    ),
};

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(siteConfig.formspreeUrl, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => {
                    window.location.href = ROUTES.gracias;
                }, 1500);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    const inputBase =
        'block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none transition-colors';

    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                            {LABELS.form.nombre}
                        </label>
                        <input
                            type="text"
                            id="contact-name"
                            name="name"
                            required
                            minLength={2}
                            className={inputBase}
                            placeholder={LABELS.form.placeholderNombre}
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                            {LABELS.form.empresa}
                        </label>
                        <input
                            type="text"
                            id="contact-company"
                            name="company"
                            className={inputBase}
                            placeholder={LABELS.form.placeholderEmpresa}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                        {LABELS.form.correo}
                    </label>
                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        className={inputBase}
                        placeholder={LABELS.form.placeholderCorreo}
                    />
                </div>

                <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                        {LABELS.form.mensaje}
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        minLength={10}
                        className={inputBase}
                        placeholder={LABELS.form.placeholderMensaje}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {status === 'sending' ? LABELS.cta.enviando : LABELS.cta.enviarSolicitud}
                </button>

                {status === 'success' && (
                    <p className="text-center text-sm font-medium text-green-400" role="alert">
                        {LABELS.form.successMsg}
                    </p>
                )}

                {status === 'error' && (
                    <p className="text-center text-sm font-medium text-red-400" role="alert">
                        {LABELS.form.errorMsg}
                    </p>
                )}
            </form>

            <div className="space-y-4">
                <p className="text-sm leading-relaxed text-white/60">
                    {LABELS.subtitles.contacto}
                </p>
                <div className="space-y-3">
                    {contactChannels.map((channel) => (
                        <a
                            key={channel.title}
                            href={channel.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all hover:border-orange/30 hover:bg-white/10 sm:px-5 sm:py-4"
                        >
                            <span className="text-orange">
                                {channelIcons[channel.icon]}
                            </span>
                            <div>
                                <span className="block text-sm font-semibold text-white">{channel.title}</span>
                                <span className="block text-xs text-white/40">{channel.description}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
