import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES, LABELS } from '@/lib/constants';

export const metadata: Metadata = {
    title: LABELS.gracias.titulo,
    description: LABELS.meta.graciasDesc,
};

export default function GraciasPage() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center bg-dark px-4 py-20 text-center sm:px-6">
            <div className="mx-auto max-w-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange sm:h-16 sm:w-16">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="mt-5 text-2xl font-bold text-white sm:mt-6 sm:text-3xl">
                    {LABELS.gracias.titulo}
                </h1>
                <p className="mt-3 text-base text-white/60 sm:mt-4 sm:text-lg">
                    {LABELS.gracias.descripcion}
                </p>
                <Link href={ROUTES.home} className="btn-primary mt-6 inline-flex sm:mt-8">
                    {LABELS.cta.volverInicio}
                </Link>
            </div>
        </section>
    );
}
