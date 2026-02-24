'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BrandImage from '@/components/BrandImage';
import { ASSETS, ROUTES, NAV_LINKS, LABELS } from '@/lib/constants';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-grey/30 bg-white/95 shadow-sm backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
                aria-label={LABELS.aria.navPrincipal}
            >
                <Link href={ROUTES.home} className="relative h-8 w-28 sm:h-9 sm:w-32">
                    <BrandImage
                        src={ASSETS.logo}
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
                                        : 'text-dune/70 hover:text-dune'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href={ROUTES.contacto}
                    className="btn-primary hidden text-xs sm:text-sm lg:inline-flex"
                >
                    {LABELS.cta.cotizar}
                </Link>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-dune/70 hover:bg-grey/30 lg:hidden"
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
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${pathname === link.href
                                        ? 'bg-orange/10 text-orange'
                                        : 'text-dune/70 hover:bg-grey/20'
                                    }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={ROUTES.contacto}
                            className="btn-primary mt-2 block w-full text-center"
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
