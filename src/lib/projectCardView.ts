import type { Proyecto } from '@/lib/types';

export interface ProjectPortfolioCardModel {
    slug: string;
    title: string;
    summary: string;
    cover: string;
    category: string;
    location: string;
    year: number;
    teamContribution: string;
    organizationalContext?: string;
    impact: string;
}

function cleanSummaryForPortfolioCard(summary: string): string {
    let s = summary.trim();
    const oAcute = '\u00F3';
    const eAcute = '\u00E9';
    const patterns: RegExp[] = [
        new RegExp(`\\s*[,;]\\s*con\\s+participaci[o${oAcute}]n\\s+de\\s+[^.;]+`, 'gi'),
        new RegExp(`\\s+con\\s+participaci[o${oAcute}]n\\s+de\\s+[^.;]+`, 'gi'),
        new RegExp(`\\s*[,;]\\s*con\\s+apoyo\\s+t${eAcute}cnico\\s+en\\s+[^.;]+`, 'gi'),
        /\s*[;,]\s*con\s+apoyo\s+de\s+[^.;]+/gi,
        /\s*[;,]\s*liderad[ao]\s+por\s+[^.;]+/gi,
        new RegExp(`\\s*[,;]\\s*integraci[o${oAcute}]n\\s+de\\s+interfaces\\s+con\\s+[^.;]+`, 'gi'),
        /\s*[;,]\s*factibilidad\s+ferroviaria\s+con\s+[^.;]+/gi,
        /\s+con\s+Meta\s+Engineering(?:\s*\([^)]*\))?/gi,
        /\s+con\s+Siemens\s+Mobility\s*\.?$/i,
        /\s*;\s*proyecto\s+liderado\s+por\s+[^.;]+/gi,
        new RegExp(`\\s*[,;]\\s*operaci[o${oAcute}]n\\s+por\\s+[^.;]+`, 'gi'),
        /\s+con\s+el\s+Consorcio\s+[^.;]+/gi,
        /\s+con\s+PT\s+KAI\s+con\s+Siemens\s+Mobility/gi,
    ];
    for (const re of patterns) {
        s = s.replace(re, '');
    }
    s = s.replace(/\s*;\s*;/g, ';');
    s = s.replace(/\s*;\s*$/, '').replace(/\s*,\s*$/, '').trim();
    s = s.replace(/\s{2,}/g, ' ');
    s = s.replace(/^[,;]\s*/, '');
    if (s.length < 12) {
        const first = summary.split(/[.;]/)[0]?.trim();
        if (first && first.length >= 12) return first;
    }
    return s;
}

export function toPortfolioCardModel(project: Proyecto): ProjectPortfolioCardModel {
    return {
        slug: project.slug,
        title: project.title,
        summary: cleanSummaryForPortfolioCard(project.summary),
        cover: project.cover,
        category: project.category,
        location: project.location,
        year: project.year,
        teamContribution: project.scope,
        organizationalContext: project.empresas,
        impact: project.results,
    };
}
