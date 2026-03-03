'use client';

import { useState, useRef, useEffect } from 'react';

interface TagMultiSelectProps {
    label: string;
    tags: string[];
    selected: string[];
    onChange: (tags: string[]) => void;
    counts?: Record<string, number>;
}

export default function TagMultiSelect({ label, tags, selected, onChange, counts }: TagMultiSelectProps) {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const available = tags.filter(
        (t) => !selected.includes(t) && t.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        function close(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);

    function add(tag: string) {
        onChange([...selected, tag]);
        setSearch('');
        inputRef.current?.focus();
    }

    function remove(tag: string) {
        onChange(selected.filter((t) => t !== tag));
    }

    function clear() {
        onChange([]);
        setSearch('');
    }

    return (
        <div className="relative" ref={ref}>
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/30">
                {label}
            </label>
            <div
                className={`flex flex-wrap items-center gap-1.5 rounded-lg border bg-[#1f1f1f] px-3 py-2 min-h-[3rem] cursor-text transition-colors ${open ? 'border-[#ef7e24] shadow-[0_0_0_3px_rgba(239,126,36,0.15)]' : 'border-[#3a3a3a] hover:border-[#555]'}`}
                onClick={() => { setOpen(true); inputRef.current?.focus(); }}
            >
                {/* Chips */}
                {selected.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-lg bg-orange/15 border border-orange/25 px-2.5 py-1 text-[11px] font-bold text-orange leading-none"
                    >
                        {tag}
                        {counts && counts[tag] !== undefined && (
                            <span className="text-orange/50 text-[9px] ml-0.5">{counts[tag]}</span>
                        )}
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); remove(tag); }}
                            className="ml-0.5 rounded-full p-0.5 text-orange/40 hover:text-orange hover:bg-orange/10 transition-colors"
                        >
                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </span>
                ))}

                {/* Search input */}
                <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setOpen(true); }}
                    onFocus={() => setOpen(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Backspace' && search === '' && selected.length > 0) {
                            remove(selected[selected.length - 1]);
                        }
                        if (e.key === 'Enter' && available.length > 0) {
                            e.preventDefault();
                            add(available[0]);
                        }
                    }}
                    placeholder={selected.length === 0 ? 'Todas las categorías...' : ''}
                    className="flex-1 min-w-[60px] bg-transparent outline-none text-sm text-white/80 placeholder:text-white/25 py-0.5"
                />

                {/* Clear button */}
                {selected.length > 0 && (
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); clear(); }}
                        className="ml-auto shrink-0 rounded-md p-1 text-white/15 hover:text-white/40 hover:bg-white/5 transition-colors"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                {/* Chevron */}
                <svg className={`h-4 w-4 shrink-0 text-white/20 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-50 mt-1.5 w-full max-h-60 overflow-y-auto rounded-lg border border-[#3a3a3a] bg-[#1f1f1f] shadow-2xl shadow-black/60 py-1">
                    {available.length === 0 ? (
                        <div className="px-4 py-3 text-xs text-white/25 text-center">
                            {search ? 'Sin resultados' : 'Todas seleccionadas'}
                        </div>
                    ) : (
                        available.map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => add(tag)}
                                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-white/60 hover:bg-orange/10 hover:text-orange transition-colors group"
                            >
                                <span className="group-hover:font-semibold transition-all">{tag}</span>
                                {counts && counts[tag] !== undefined && (
                                    <span className="text-[10px] text-white/20 group-hover:text-orange/50 tabular-nums">{counts[tag]}</span>
                                )}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
