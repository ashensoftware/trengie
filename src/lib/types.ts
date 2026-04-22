export interface Servicio {
    title: string;
    slug: string;
    summary: string;
    problemSolved?: string;
    icon: string;
    image?: string;
    features: string[];
    technologies?: string[];
    cta?: string;
    highlight?: boolean;
    idealFor?: string;
    impact?: string;
}

export interface Proyecto {
    title: string;
    slug: string;
    category: string;
    year: number;
    location: string;
    cover: string;
    summary: string;
    descripcionDetallada?: string;
    empresas?: string;
    scope: string;
    role: string;
    roleDetallado?: string;
    results: string;
    images: string[];
}

export interface Stat {
    value: string;
    label: string;
}

export interface Value {
    title: string;
    description: string;
    icon: string;
}

export interface Certification {
    name: string;
}

export interface NormativeReference {
    name: string;
}

export interface ContactChannel {
    title: string;
    description: string;
    icon: string;
    href: string;
}

export interface FeaturedClient {
    name: string;
    icon: string;
    logo?: string;
}
