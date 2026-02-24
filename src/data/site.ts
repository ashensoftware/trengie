import type { Stat, Value, Certification, ContactChannel } from '@/lib/types';

export const heroStats: Stat[] = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '120+', label: 'Proyectos ejecutados' },
    { value: '8', label: 'Países de cobertura' },
];

export const companyValues: Value[] = [
    {
        title: 'Seguridad',
        description: 'Estándares internacionales en cada proyecto',
        icon: 'shield',
    },
    {
        title: 'Precisión',
        description: 'Ingeniería de detalle y control riguroso',
        icon: 'target',
    },
    {
        title: 'Colaboración',
        description: 'Trabajo conjunto con todos los stakeholders',
        icon: 'users',
    },
    {
        title: 'Excelencia',
        description: 'Compromiso con resultados excepcionales',
        icon: 'award',
    },
];

export const certifications: Certification[] = [
    { name: 'ISO 9001:2015' },
    { name: 'ISO 14001:2015' },
    { name: 'ISO 45001:2018' },
    { name: 'OHSAS 18001' },
];

export const contactChannels: ContactChannel[] = [
    {
        title: 'WhatsApp Business',
        description: 'Respuesta en menos de 2 horas',
        icon: 'whatsapp',
        href: 'https://wa.me/573001234567?text=Hola%2C%20quiero%20más%20información',
    },
    {
        title: 'Agendar reunión',
        description: 'Calendly — 30 min consultoría gratuita',
        icon: 'calendar',
        href: 'https://calendly.com/trengie/consulta-tecnica',
    },
    {
        title: 'contacto@trengie.com',
        description: 'Correo corporativo',
        icon: 'mail',
        href: 'mailto:contacto@trengie.com',
    },
];

export const companyDescription = {
    intro:
        'Trengie es una firma de consultoría e ingeniería especializada en el sector ferroviario. Con más de 15 años de trayectoria, hemos participado en los proyectos de infraestructura de transporte más ambiciosos de la región.',
    detail:
        'Nuestro equipo multidisciplinario combina experiencia técnica de clase mundial con conocimiento profundo del contexto local, asegurando soluciones viables, sostenibles y de alto impacto para nuestros clientes.',
};
