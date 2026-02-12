import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Gracias',
    description: 'Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.',
};

export default function GraciasPage() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center px-6 py-20 text-center">
            <div className="mx-auto max-w-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="mt-6 text-3xl font-bold text-neutral-900">¡Gracias por escribirnos!</h1>
                <p className="mt-4 text-lg text-neutral-600">
                    Hemos recibido tu mensaje y te responderemos en menos de 24 horas.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
                >
                    Volver al inicio
                </Link>
            </div>
        </section>
    );
}
