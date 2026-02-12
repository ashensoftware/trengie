import Link from 'next/link';
import type { Proyecto } from '@/lib/types';

export default function ProjectCard({ project }: { project: Proyecto }) {
    return (
        <Link
            href={`/proyectos/${project.slug}`}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg"
        >
            {/* Cover placeholder */}
            <div className="relative aspect-video bg-neutral-100">
                <div className="flex h-full items-center justify-center text-neutral-400">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                </div>
            </div>

            <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {project.client}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">
                    {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.summary}</p>

                {/* Stack tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.stack.length > 4 && (
                        <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
                            +{project.stack.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
