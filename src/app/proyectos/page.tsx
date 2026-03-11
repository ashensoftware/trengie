'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/features/ProjectCard';
import TagMultiSelect from '@/components/features/TagMultiSelect';
import proyectosData from '@/data/proyectos.json';
import { LABELS } from '@/lib/constants';
import type { Proyecto } from '@/lib/types';

const allProjects = proyectosData as Proyecto[];

export default function ProyectosPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategories, setActiveCategories] = useState<string[]>([]);

    const categories = useMemo(() => {
        return Array.from(new Set(allProjects.map((p) => p.category)));
    }, []);

    const categoryCounts = useMemo(() => {
        const map: Record<string, number> = {};
        categories.forEach((cat) => {
            map[cat] = allProjects.filter(p => p.category === cat).length;
        });
        return map;
    }, [categories]);

    const filteredProjects = useMemo(() => {
        return allProjects.filter((p) => {
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategories.length === 0 || activeCategories.includes(p.category);
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategories]);

    return (
        <main className="bg-dark min-h-screen">
            {/* Header + Filters unified */}
            <section className="px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 border-b border-white/5">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* Left: Title */}
                        <div className="max-w-2xl shrink-0">
                            <span className="section-label mb-6">{LABELS.nav.proyectos}</span>
                            <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
                                Portafolio de <span className="text-orange">Proyectos</span>
                            </h1>
                            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-xl">
                                {LABELS.subtitles.proyectos}
                            </p>
                        </div>

                        {/* Right: Filters */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end lg:shrink-0">
                            {/* Category Multi-Select */}
                            <div className="sm:min-w-[280px]">
                                <TagMultiSelect
                                    label="Categoría"
                                    tags={categories}
                                    selected={activeCategories}
                                    onChange={setActiveCategories}
                                    counts={categoryCounts}
                                />
                            </div>

                            {/* Search Bar */}
                            <div className="relative sm:min-w-[240px]">
                                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/30">
                                    Buscar
                                </label>
                                <span className="absolute bottom-0 left-0 flex items-center h-12 pl-4 pointer-events-none">
                                    <svg className="h-4 w-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Ciudad o sistema..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input h-12 !pl-11 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="px-4 py-12 sm:px-6">
                <div className="mx-auto max-w-7xl">

                    {/* Results Count */}
                    <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                            Mostrando {filteredProjects.length} proyectos encontrados
                        </p>
                        {activeCategories.length > 0 && (
                            <button
                                onClick={() => setActiveCategories([])}
                                className="text-orange/70 hover:text-orange text-xs font-bold uppercase tracking-widest transition-colors"
                            >
                                Limpiar ({activeCategories.length})
                            </button>
                        )}
                    </div>

                    {/* Grid */}
                    {filteredProjects.length === 0 ? (
                        <div className="py-24 text-center">
                            <h3 className="text-xl font-bold text-white/40 italic">No hay resultados para esta búsqueda</h3>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategories([]); }}
                                className="btn-tertiary mt-6"
                            >
                                Reestablecer filtros
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.slug} project={project} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#0c0e13] px-4 py-20 text-center sm:px-6">
                <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-b from-white/5 to-transparent p-12 border border-white/5">
                    <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter sm:text-4xl">
                        ¿Busca un socio técnico para <span className="text-orange italic">su próximo hito?</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/40 mx-auto max-w-2xl">
                        Aseguramos la integridad técnica y normativa de sus megaproyectos desde la factibilidad hasta la operación.
                    </p>
                    <div className="mt-10">
                        <Link href="/contacto" className="btn-primary px-10 py-4 text-base">
                            {LABELS.cta.hablarExperto}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
