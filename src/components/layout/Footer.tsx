import Link from 'next/link';
import BrandImage from '@/components/ui/BrandImage';
import { siteConfig } from '@/lib/config';
import { ASSETS, ROUTES, FOOTER_SERVICES, LABELS } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    <div>
                        <Link href={ROUTES.home} className="relative inline-block h-10 w-40">
                            <BrandImage
                                src={ASSETS.logoWhite}
                                alt="Trengie"
                                fill
                                className="object-contain object-left"
                                fallbackWidth={160}
                                fallbackHeight={40}
                                fallbackLabel="Trengie"
                            />
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                            {LABELS.footer.brand}
                        </p>
                        <div className="mt-6 flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 font-accent">
                            <span>engineering</span>
                            <span className="h-1 w-1 rounded-full bg-orange/20" />
                            <span>innovation</span>
                            <span className="h-1 w-1 rounded-full bg-orange/20" />
                            <span>excellence</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-orange">
                            {LABELS.sections.servicios}
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {FOOTER_SERVICES.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-orange">
                            {LABELS.sections.contacto}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/60">
                            <li>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="transition-colors hover:text-white"
                                >
                                    {siteConfig.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-white">
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li>{siteConfig.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40 sm:mt-12 sm:pt-8">
                    © {currentYear} {siteConfig.name}. {LABELS.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
