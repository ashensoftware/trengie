'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ReactCountryFlag from 'react-country-flag';
import ProjectCard from '@/components/features/ProjectCard';
import TagMultiSelect from '@/components/features/TagMultiSelect';
import proyectosData from '@/data/proyectos.json';
import { LABELS } from '@/lib/constants';
import type { Proyecto } from '@/lib/types';
import { Icons } from '@/components/ui/Icons';

const allProjects = proyectosData as Proyecto[];

const COUNTRY_CODE: Record<string, string> = {
    Colombia: 'CO',
    Perú: 'PE',
    Ecuador: 'EC',
    México: 'MX',
    Brasil: 'BR',
    Indonesia: 'ID',
    Turquía: 'TR',
};

export default function ProyectosPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const [activeCountries, setActiveCountries] = useState<string[]>([]);

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

    const countries = useMemo(() => {
        const set = new Set<string>();
        allProjects.forEach((p) => {
            const parts = p.location.split(',').map((s) => s.trim());
            const country = parts[parts.length - 1] || p.location;
            set.add(country);
        });
        return Array.from(set).sort();
    }, []);

    const filteredProjects = useMemo(() => {
        return allProjects.filter((p) => {
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategories.length === 0 || activeCategories.includes(p.category);
            const matchesCountry = activeCountries.length === 0
                ? true
                : activeCountries.some((country) =>
                    p.location.toLowerCase().includes(country.toLowerCase())
                );
            return matchesSearch && matchesCategory && matchesCountry;
        });
    }, [searchQuery, activeCategories, activeCountries]);

    return (
        <main className="bg-dark min-h-screen">
            <section className="px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 border-b border-white/5">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        <div className="max-w-2xl shrink-0">
                            <span className="section-label mb-6">{LABELS.nav.proyectos}</span>
                            <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
                                Portafolio de <span className="text-orange">Proyectos</span>
                            </h1>
                            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-xl">
                                {LABELS.subtitles.proyectos}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 lg:shrink-0">
                            <div className="w-full">
                                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/30">
                                    País
                                </span>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-full">
                                        <button
                                            type="button"
                                            onClick={() => setActiveCountries([])}
                                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest transition-colors ${
                                                activeCountries.length === 0
                                                    ? 'border-orange bg-orange/20 text-orange'
                                                    : 'border-white/10 bg-black/40 text-white/60 hover:border-orange/60 hover:text-white'
                                            }`}
                                        >
                                            <Icons.Globe className="h-3.5 w-3.5" />
                                            Todos los países
                                        </button>
                                        {countries.map((country) => {
                                            const isActive = activeCountries.includes(country);
                                            const code = COUNTRY_CODE[country];
                                            return (
                                                <button
                                                    key={country}
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveCountries((prev) =>
                                                            prev.includes(country)
                                                                ? prev.filter((c) => c !== country)
                                                                : [...prev, country]
                                                        )
                                                    }
                                                    className={`inline-flex items-center justify-start gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest transition-colors w-full ${
                                                        isActive
                                                            ? 'border-orange bg-orange/20 text-orange'
                                                            : 'border-white/10 bg-black/40 text-white/60 hover:border-orange/60 hover:text-white'
                                                    }`}
                                                >
                                                    {code && (
                                                        <ReactCountryFlag
                                                            svg
                                                            countryCode={code}
                                                            style={{ width: '1.05rem', height: '1.05rem', borderRadius: '9999px' }}
                                                        />
                                                    )}
                                                    <span>{country}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                            </div>

                            <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-end">
                                <div className="sm:min-w-[260px] sm:max-w-sm">
                                    <TagMultiSelect
                                        label="Categoría"
                                        tags={categories}
                                        selected={activeCategories}
                                        onChange={setActiveCategories}
                                        counts={categoryCounts}
                                    />
                                </div>

                                <div className="w-full sm:max-w-xs">
                                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/30">
                                        Buscar
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center h-12 pl-4 pointer-events-none">
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
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-6">
                <div className="mx-auto max-w-7xl">

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
