import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center px-6 py-20 text-center">
            <div className="mx-auto max-w-lg">
                <p className="text-7xl font-bold text-neutral-200">404</p>
                <h1 className="mt-4 text-2xl font-bold text-neutral-900">Página no encontrada</h1>
                <p className="mt-3 text-neutral-600">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
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
