import Link from 'next/link';
import { ROUTES, LABELS } from '@/lib/constants';

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center bg-dark px-4 py-20 text-center sm:px-6">
            <div className="mx-auto max-w-lg">
                <p className="text-7xl font-bold text-white/10">404</p>
                <h1 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    {LABELS.errors.paginaNoEncontrada}
                </h1>
                <p className="mt-3 text-sm text-white/60 sm:text-base">
                    {LABELS.errors.paginaNoEncontradaDesc}
                </p>
                <Link href={ROUTES.home} className="btn-primary mt-6 inline-flex sm:mt-8">
                    {LABELS.cta.volverInicio}
                </Link>
            </div>
        </section>
    );
}
