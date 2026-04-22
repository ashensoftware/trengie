import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { ROUTES } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
import serviciosData from '@/data/servicios.json';
import proyectosData from '@/data/proyectos.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const routes = Object.values(ROUTES).map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 1 : 0.8,
    }));

    const services = serviciosData.map((s) => ({
        url: `${baseUrl}/servicios/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const projects = proyectosData.map((p) => ({
        url: `${baseUrl}/proyectos/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const blogPosts = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    return [...routes, ...services, ...projects, ...blogPosts];
}
