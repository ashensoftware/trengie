import BrandImage from '@/components/BrandImage';
import type { Proyecto } from '@/lib/types';

export default function ProjectCard({ project }: { project: Proyecto }) {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-xl border border-dark-border bg-dark-card transition-all hover:border-orange/40">
            <div className="relative aspect-[4/3] overflow-hidden">
                <BrandImage
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackWidth={600}
                    fallbackHeight={450}
                    fallbackLabel={project.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div className="p-5">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange">
                        {project.category}
                    </span>
                    <span className="text-xs text-white/40">·</span>
                    <span className="text-xs text-white/40">{project.year}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white group-hover:text-orange transition-colors">
                    {project.title}
                </h3>
            </div>
        </div>
    );
}
