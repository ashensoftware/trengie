'use client';

import { useState, useMemo } from 'react';
import BlogCard from '@/components/features/BlogCard';
import TagMultiSelect from '@/components/features/TagMultiSelect';
import type { BlogPost } from '@/lib/blog';

interface BlogClientProps {
    initialPosts: BlogPost[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');

    const allTags = useMemo(() => {
        return Array.from(new Set(initialPosts.flatMap((p) => p.tags)));
    }, [initialPosts]);

    const tagCounts = useMemo(() => {
        const map: Record<string, number> = {};
        allTags.forEach((tag) => {
            map[tag] = initialPosts.filter((p) => p.tags.includes(tag)).length;
        });
        return map;
    }, [initialPosts, allTags]);

    const filteredAndSortedPosts = useMemo(() => {
        let result = initialPosts.filter((post) => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = activeTags.length === 0 || activeTags.some((t) => post.tags.includes(t));
            return matchesSearch && matchesTag;
        });

        if (sortBy === 'popular') {
            result = [...result].sort((a, b) => (b.content?.length || 0) - (a.content?.length || 0));
        } else {
            result = [...result].sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
        }

        return result;
    }, [initialPosts, searchQuery, activeTags, sortBy]);

    return (
        <>
            <section className="bg-dark px-4 py-8 sm:px-6 sm:py-12">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:items-end sm:gap-4">
                        <div className="relative flex-1 max-w-md">
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
                                placeholder="Buscar por título o contenido..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input h-12 !pl-11 w-full"
                            />
                        </div>

                        <div className="flex-1 max-w-sm">
                            <TagMultiSelect
                                label="Categorías"
                                tags={allTags}
                                selected={activeTags}
                                onChange={setActiveTags}
                                counts={tagCounts}
                            />
                        </div>

                        <div className="sm:min-w-[200px]">
                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/30">
                                Ordenar por
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular')}
                                className="input h-12 w-full"
                            >
                                <option value="recent">Recientes primero</option>
                                <option value="popular">Más destacados</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                            Mostrando {filteredAndSortedPosts.length} artículos encontrados
                        </p>
                        {activeTags.length > 0 && (
                            <button
                                onClick={() => setActiveTags([])}
                                className="text-orange/70 hover:text-orange text-xs font-bold uppercase tracking-widest transition-colors"
                            >
                                Limpiar ({activeTags.length})
                            </button>
                        )}
                    </div>

                    {filteredAndSortedPosts.length === 0 ? (
                        <div className="py-24 text-center">
                            <h3 className="text-xl font-bold text-white/60">No se encontraron artículos</h3>
                            <p className="mt-2 text-[#9a9a9a]">Intente ajustar su búsqueda o filtros.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveTags([]); }}
                                className="btn-tertiary mt-6"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredAndSortedPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
