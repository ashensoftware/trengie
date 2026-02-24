import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proyectos',
    description:
        'Portafolio de proyectos ferroviarios ejecutados por Trengie: interventoría, ejecución, estructuración y gerencia en Colombia y la región.',
    openGraph: {
        title: 'Proyectos — Trengie',
        description:
            'Portafolio de proyectos ferroviarios ejecutados por Trengie: interventoría, ejecución, estructuración y gerencia en Colombia y la región.',
    },
};

export default function ProyectosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
