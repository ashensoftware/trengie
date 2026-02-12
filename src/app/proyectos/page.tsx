import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import type { Proyecto } from '@/lib/types';
import proyectos from '@/data/proyectos.json';

export const metadata: Metadata = {
    title: 'Proyectos',
    description:
        'Portafolio de proyectos: soluciones tecnológicas reales con resultados medibles.',
};

export default function ProyectosPage() {
    return (
        <>
            <section className="bg-neutral-900 px-6 py-20 text-center">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Nuestros Proyectos
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                        Cada proyecto es una historia de colaboración, tecnología y resultados reales.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2">
                        {(proyectos as Proyecto[]).map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
