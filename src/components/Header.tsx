'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' },
    { href: '/sobre-nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
                aria-label="Navegación principal"
            >
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900">
                    {siteConfig.name}
                </Link>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA desktop */}
                <Link
                    href="/contacto"
                    className="hidden rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 md:inline-flex"
                >
                    Cotizar
                </Link>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
                    aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
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

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-neutral-200 bg-white md:hidden">
                    <ul className="space-y-1 px-6 py-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/contacto"
                                className="mt-2 block rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-sm font-medium text-white"
                                onClick={() => setMobileOpen(false)}
                            >
                                Cotizar
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
