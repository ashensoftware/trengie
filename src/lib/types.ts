export interface Servicio {
    title: string;
    slug: string;
    summary: string;
    icon: string;
    image?: string;
    features: string[];
    cta?: string;
}

export interface Proyecto {
    title: string;
    slug: string;
    category: string;
    year: number;
    location: string;
    cover: string;
    summary: string;
    scope: string;
    role: string;
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

export interface ContactChannel {
    title: string;
    description: string;
    icon: string;
    href: string;
}
