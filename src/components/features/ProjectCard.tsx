import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/ui/Icons';
import type { Proyecto } from '@/lib/types';

export default function ProjectCard({ project }: { project: Proyecto }) {
    return (
        <Link
            href={`/proyectos/${project.slug}`}
            className="group block bg-[#1f1f1f] border border-[#3a3a3a] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(239,126,36,0.15)] hover:border-orange/60 hover:-translate-y-2 focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-dark">
                {project.cover ? (
                    <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#242424] text-white/5">
                        <Icons.ImagePlaceholder className="h-16 w-16" />
                    </div>
                )}
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Chip Top Right */}
                <div className="absolute top-4 right-4">
                    <span className="chip !bg-orange !text-white !text-[10px] !px-3 shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Technical Metadata Header */}
                <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange/90">
                        {project.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/10" />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                        {project.year}
                    </span>
                </div>

                <h3 className="text-xl font-black leading-tight text-white group-hover:text-orange transition-colors uppercase tracking-tight">
                    {project.title}
                </h3>

                {/* Technical Details Row */}
                <div className="mt-4 flex flex-col gap-2 border-l-2 border-white/5 pl-4 py-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60">
                        <span className="text-white/30 w-20">Rol:</span>
                        <span className="text-white/90">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60">
                        <span className="text-white/30 w-20">Ubicación:</span>
                        <span className="text-white/90">{project.location}</span>
                    </div>
                </div>

                {/* Impact / Result (Critical P0) */}
                <div className="mt-6 bg-gradient-to-r from-orange/20 to-orange/5 border-l-4 border-orange p-5 shadow-inner">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-orange mb-2">
                        Impacto Ejecutado
                    </span>
                    <p className="text-sm font-black text-white leading-relaxed">
                        {project.results}
                    </p>
                </div>

                <div className="mt-auto pt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-orange group-hover:gap-4 transition-all duration-300">
                        <span>Ver Detalles</span>
                        <Icons.ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <div className="text-[9px] font-mono text-white/10 group-hover:text-white/30 transition-colors uppercase">
                        {project.slug.split('-').slice(0, 2).join('.')}
                    </div>
                </div>
            </div>
        </Link>
    );
}
