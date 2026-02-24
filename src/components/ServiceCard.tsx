import Link from 'next/link';
import BrandImage from '@/components/BrandImage';
import type { Servicio } from '@/lib/types';
import { ROUTES, LABELS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
    clipboard: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
    ),
    cpu: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
    ),
    bolt: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    ),
    wifi: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
    ),
    train: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-15-5.25h12.75A1.5 1.5 0 0019.5 12.75V7.5a3 3 0 00-3-3H7.5a3 3 0 00-3 3v5.25a1.5 1.5 0 001.5 1.5zM8.25 15.75v.75m7.5-.75v.75m-6.75-3H15" />
        </svg>
    ),
};

export default function ServiceCard({ service }: { service: Servicio }) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-grey/50 bg-white transition-all hover:border-orange/30 hover:shadow-lg">
            {/* Top Image Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-dark sm:h-56">
                <BrandImage
                    src={service.image || '/images/hero-bg.jpg'}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackWidth={600}
                    fallbackHeight={400}
                    fallbackLabel={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                {/* Floating Icon over the image */}
                <div className="absolute bottom-4 left-5 rounded-lg bg-orange p-2.5 text-white shadow-md backdrop-blur-sm sm:bottom-6 sm:left-6 sm:p-3">
                    {iconMap[service.icon] ?? iconMap.clipboard}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg font-bold text-dune sm:text-xl">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-boulder text-sm">{service.summary}</p>

                <ul className="mb-6 mt-5 flex-1 space-y-2.5">
                    {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-dune/80">
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                            {f}
                        </li>
                    ))}
                </ul>

                <Link
                    href={`${ROUTES.contacto}?servicio=${service.slug}`}
                    className="mt-auto w-fit inline-flex items-center gap-1 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
                >
                    {service.cta ?? LABELS.cta.solicitarInfo}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
