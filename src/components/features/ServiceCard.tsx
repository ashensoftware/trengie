import Link from 'next/link';
import BrandImage from '@/components/ui/BrandImage';
import { Icons } from '@/components/ui/Icons';
import type { Servicio } from '@/lib/types';
import { ROUTES, LABELS } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    clipboard: Icons.Clipboard,
    cpu: Icons.Cpu,
    bolt: Icons.Bolt,
    wifi: Icons.Wifi,
    train: Icons.Train,
};

export default function ServiceCard({ service }: { service: Servicio }) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-grey/50 bg-white transition-all hover:border-orange/30 hover:shadow-lg">
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

                <div className="absolute bottom-4 left-5 rounded-lg bg-orange p-2.5 text-white shadow-md backdrop-blur-sm sm:bottom-6 sm:left-6 sm:p-3">
                    {(() => {
                        const Icon = iconMap[service.icon] ?? iconMap.clipboard;
                        return <Icon className="h-6 w-6" />;
                    })()}
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

                <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        href={`${ROUTES.servicios}/${service.slug}`}
                        className="btn-primary !py-2 !px-5 !text-xs !rounded-lg"
                    >
                        {LABELS.cta.verAlcance}
                    </Link>

                    <Link
                        href={`${ROUTES.contacto}?servicio=${service.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-orange transition-colors hover:text-orange-hover"
                    >
                        {service.cta ?? LABELS.cta.solicitarInfo}
                        <Icons.ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
