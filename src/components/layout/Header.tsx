'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import BrandImage from '@/components/ui/BrandImage';
import { Icons } from '@/components/ui/Icons';
import { ASSETS, ROUTES, NAV_LINKS, LABELS } from '@/lib/constants';

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    [ROUTES.servicios]: Icons.Bolt,
    [ROUTES.proyectos]: Icons.Clipboard,
    [ROUTES.sobreNosotros]: Icons.Users,
    [ROUTES.blog]: Icons.DocumentText,
    [ROUTES.contacto]: Icons.Mail,
};

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparent = !scrolled && pathname === ROUTES.home;

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isTransparent
                ? 'bg-transparent border-transparent'
                : 'bg-white/95 border-brand-dark-border/10 shadow-sm backdrop-blur-md'
                }`}
        >
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4"
                aria-label={LABELS.aria.navPrincipal}
            >
                <Link href={ROUTES.home} className="relative h-9 w-28 min-w-0 flex-shrink sm:h-10 sm:w-32 lg:w-36">
                    <BrandImage
                        src={isTransparent ? ASSETS.logoWhite : ASSETS.logoDark}
                        alt="Trengie"
                        fill
                        className="object-contain object-left"
                        fallbackWidth={128}
                        fallbackHeight={36}
                        fallbackLabel="Trengie"
                        priority
                    />
                </Link>

                <ul className="hidden items-center gap-6 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${pathname === link.href || pathname.startsWith(`${link.href}/`)
                                    ? 'text-orange'
                                    : isTransparent
                                        ? 'text-white/80 hover:text-white'
                                        : 'text-dune/70 hover:text-dune'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className={`relative z-10 shrink-0 inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden ${isTransparent ? 'text-white/80 hover:bg-white/10' : 'text-dune/70 hover:bg-grey/30'
                        }`}
                    aria-label={mobileOpen ? LABELS.aria.cerrarMenu : LABELS.aria.abrirMenu}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            <div
                className={`overflow-hidden border-t border-grey/30 bg-white transition-all duration-300 ease-in-out lg:hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
                    }`}
            >
                <ul className="space-y-1 px-4 py-4 sm:px-6">
                    {NAV_LINKS.map((link) => {
                        const Icon = NAV_ICONS[link.href];
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium transition-colors ${pathname === link.href
                                        ? 'bg-orange/10 text-orange'
                                        : 'text-dune/70 hover:bg-grey/20'
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {Icon && (
                                        <Icon className="h-5 w-5 shrink-0 text-current opacity-70" />
                                    )}
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            href={ROUTES.contacto}
                            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-orange/30 bg-orange/10 px-4 py-2 text-sm font-semibold text-orange transition-colors hover:bg-orange/20 hover:border-orange/50"
                            onClick={() => setMobileOpen(false)}
                        >
                            {LABELS.cta.cotizar}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
