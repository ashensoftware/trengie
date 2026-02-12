'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/lib/config';

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
                // Redirect after a brief delay so user sees the success message
                setTimeout(() => {
                    window.location.href = '/gracias';
                }, 1500);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                    Nombre completo
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                    placeholder="Tu nombre"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                    placeholder="tu@email.com"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
                    Empresa{' '}
                    <span className="text-neutral-400">(opcional)</span>
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status === 'success' && (
                <p className="text-center text-sm font-medium text-green-600" role="alert">
                    ¡Mensaje enviado! Redirigiendo...
                </p>
            )}

            {status === 'error' && (
                <p className="text-center text-sm font-medium text-red-600" role="alert">
                    Hubo un error. Intenta de nuevo o usa el formulario alternativo.
                </p>
            )}

            {/* Alternative: Tally button */}
            <div className="text-center">
                <span className="text-sm text-neutral-500">¿Problemas con el formulario? </span>
                <a
                    href={siteConfig.tallyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
                >
                    Usa nuestro formulario alternativo →
                </a>
            </div>
        </form>
    );
}
