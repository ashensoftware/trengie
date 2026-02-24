'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import type { Proyecto } from '@/lib/types';
import { LABELS } from '@/lib/constants';
import proyectos from '@/data/proyectos.json';

const typedProyectos = proyectos as Proyecto[];
const categories = [LABELS.sections.todos, ...Array.from(new Set(typedProyectos.map((p) => p.category)))];

export default function ProyectosPage() {
    const [activeFilter, setActiveFilter] = useState<string>(LABELS.sections.todos);
    const [selectedProject, setSelectedProject] = useState<Proyecto | null>(
        typedProyectos[0] ?? null
    );

    const filteredProjects =
        activeFilter === LABELS.sections.todos
            ? typedProyectos
            : typedProyectos.filter((p) => p.category === activeFilter);

    if (typedProyectos.length === 0) return null;

    return (
        <section className="bg-dark min-h-screen px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    label={LABELS.sections.proyectos}
                    title={LABELS.headings.proyectos}
                    light
                />

                <div className="mt-10 flex flex-col gap-6 sm:mt-14 lg:flex-row lg:gap-10">
                    <aside className="shrink-0 lg:w-48">
                        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-orange sm:mb-4">
                            {LABELS.sections.filtrarPorTipo}
                        </span>
                        <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:pb-0">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveFilter(cat)}
                                        className={`whitespace-nowrap rounded-lg px-4 py-2 text-left text-sm font-medium transition-all ${activeFilter === cat
                                            ? 'bg-orange text-white'
                                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <div className="flex-1">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                            {filteredProjects.map((p) => (
                                <div key={p.slug} onClick={() => setSelectedProject(p)}>
                                    <ProjectCard project={p} />
                                </div>
                            ))}
                        </div>

                        {selectedProject && (
                            <div className="mt-8 rounded-xl border border-dark-border bg-dark-card p-5 sm:mt-10 sm:p-8">
                                <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange">
                                    <span className="inline-block h-2 w-2 rounded-full bg-orange" />
                                    {LABELS.sections.fichaTecnica}
                                </span>
                                <h3 className="text-xl font-bold text-white sm:text-2xl">{selectedProject.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/60">
                                    {selectedProject.summary}
                                </p>
                                <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-3 sm:gap-6">
                                    <div>
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                                            {LABELS.sections.alcance}
                                        </span>
                                        <span className="mt-1 block text-sm text-white/80">
                                            {selectedProject.scope}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                                            {LABELS.sections.rol}
                                        </span>
                                        <span className="mt-1 block text-sm text-white/80">{selectedProject.role}</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                                            {LABELS.sections.resultados}
                                        </span>
                                        <span className="mt-1 block text-sm font-semibold text-orange">
                                            {selectedProject.results}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
