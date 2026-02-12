import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog';
import type { Proyecto } from '@/lib/types';
import proyectos from '@/data/proyectos.json';

const BASE_URL = 'https://trengie.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        '',
        '/servicios',
        '/proyectos',
        '/sobre-nosotros',
        '/contacto',
        '/blog',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectPages = (proyectos as Proyecto[]).map((p) => ({
        url: `${BASE_URL}/proyectos/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const blogPages = getAllSlugs().map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages, ...blogPages];
}
