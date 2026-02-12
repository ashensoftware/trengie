export interface Servicio {
    title: string;
    slug: string;
    summary: string;
    icon: string;
    features: string[];
}

export interface Proyecto {
    title: string;
    slug: string;
    client: string;
    summary: string;
    cover: string;
    reto: string;
    solucion: string;
    resultados: string[];
    stack: string[];
    images: string[];
}
