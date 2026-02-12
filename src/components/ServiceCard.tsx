import Link from 'next/link';
import type { Servicio } from '@/lib/types';

const iconMap: Record<string, React.ReactNode> = {
    code: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
    ),
    lightbulb: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
    ),
    database: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
    ),
};

export default function ServiceCard({ service }: { service: Servicio }) {
    return (
        <Link
            href={`/servicios#${service.slug}`}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-lg"
        >
            <div className="mb-4 inline-flex rounded-xl bg-neutral-100 p-3 text-neutral-700 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                {iconMap[service.icon] ?? iconMap.code}
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{service.summary}</p>
            <ul className="mt-4 space-y-1">
                {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-500">
                        <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                        {f}
                    </li>
                ))}
            </ul>
        </Link>
    );
}
