import type { Stat, Value, NormativeReference, ContactChannel } from '@/lib/types';

export const heroStats: Stat[] = [
    { value: '20+', label: 'Años del equipo en el sector' },
    { value: '50+', label: 'Proyectos del equipo' },
    { value: '3', label: 'Países con operación' },
];

export const companyValues: Value[] = [
    {
        title: 'Excelencia Técnica',
        description: 'Especialización en nichos de alta complejidad y cumplimiento de normativas internacionales (CENELEC, ISO).',
        icon: 'award',
    },
    {
        title: 'Soluciones Integrales',
        description: 'Cubrimos el ciclo completo: factibilidad, ingeniería conceptual, pruebas, operación y mantenimiento.',
        icon: 'target',
    },
    {
        title: 'Agilidad y Flexibilidad',
        description: 'Modelo asociativo y estructura ligera que nos permite adaptarnos rápidamente a cada proyecto.',
        icon: 'users',
    },
    {
        title: 'Visión Global',
        description: 'Capacidad demostrable de ejecución en proyectos internacionales y adopción de tecnologías de vanguardia.',
        icon: 'shield',
    },
];

/** Normativas con las que trabajamos (referencia en proyectos; no implica certificación de la empresa). */
export const normativeReferences: NormativeReference[] = [
    { name: 'CENELEC EN 50126' },
    { name: 'CENELEC EN 50128' },
    { name: 'CENELEC EN 50129' },
    { name: 'ISO 50001 – Gestión Energética' },
    { name: 'RAMS / SIL4' },
];

export const contactChannels: ContactChannel[] = [
    {
        title: 'WhatsApp Business',
        description: 'Respuesta en menos de 2 horas',
        icon: 'whatsapp',
        href: 'https://wa.me/573002400939?text=Hola,%20tengo%20un%20proyecto%20y%20quiero%20evaluar%20cómo%20pueden%20apoyarme%20técnicamente',
    },
    {
        title: 'Agendar reunión',
        description: 'Calendly — 30 min consultoría gratuita',
        icon: 'calendar',
        href: 'https://calendly.com/trengie/consulta-tecnica',
    },
    {
        title: 'comercial@trengie.com',
        description: 'Correo corporativo',
        icon: 'mail',
        href: 'mailto:comercial@trengie.com',
    },
];

export const companyDescription = {
    intro:
        'Trengie es una compañía de ingeniería y gestión de proyectos especializada en Material Rodante y Sistemas Metroferroviarios. Nuestro equipo multidisciplinario suma más de 20 años de experiencia en el sector ferroviario colombiano y latinoamericano y ha participado en decenas de proyectos en la región.',
    detail:
        'Acompañamos a operadores, contratistas, entidades públicas y privadas en todas las etapas del proyecto: preconstrucción, construcción, pruebas y puesta en servicio, operación y mantenimiento. Integramos innovación tecnológica y mejores prácticas internacionales para garantizar soluciones sostenibles, seguras y de alto desempeño.',
    mission:
        'Brindar soluciones integrales en transporte, logística e infraestructura que impulsen el desarrollo sostenible de Colombia. Nuestros servicios para el Material Rodante y Sistemas Metroferroviarios constituyen el eje estratégico de la compañía, con proyección hacia la expansión de nuevas líneas de negocio.',
    missionBullets: [
        'Material Rodante y Sistemas Metroferroviarios como eje estratégico',
        'Movilidad multimodal, automatización e infraestructura inteligente',
        'Enfoque en eficiencia, seguridad e innovación',
    ],
    vision:
        'Consolidarnos como referente nacional e internacional en soluciones integrales de transporte, con base sólida en Material Rodante y Sistemas Metroferroviarios y proyección estratégica orientada a la diversificación de negocios.',
    visionBullets: [
        'Liderazgo en infraestructura inteligente y movilidad multimodal',
        'Tecnología aplicada y servicios complementarios',
        'Generación de valor para clientes, aliados y comunidades',
    ],
};

export const methodology = [
    { step: '01', title: 'Diagnóstico', desc: 'Evaluamos el contexto técnico, normativo y operacional del proyecto.' },
    { step: '02', title: 'Diseño', desc: 'Definimos ingeniería conceptual, básica y de detalle.' },
    { step: '03', title: 'Ejecución', desc: 'Montaje, integración de sistemas y coordinación multidisciplinaria.' },
    { step: '04', title: 'Verificación', desc: 'Pruebas, RAMS y verificación bajo estándares internacionales.' },
    { step: '05', title: 'Entrega', desc: 'Comisionamiento, capacitación y acompañamiento post puesta en marcha.' },
];

export const capabilities = [
    { value: '20+', label: 'Años del equipo en el sector' },
    { value: '50+', label: 'Proyectos del equipo' },
    { value: '3', label: 'Países con operación' },
    { value: '100%', label: 'Cumplimiento RAMS' },
];

export const featuredClients = [
    { name: 'Metro de Medellín', icon: 'train' },
    { name: 'Metro de Bogotá', icon: 'train' },
    { name: 'CRRC Changchun', icon: 'factory' },
    { name: 'Metro de Quito', icon: 'globe' },
    { name: 'Meta Engineering', icon: 'building' },
    { name: 'Tranvía de Ayacucho', icon: 'tram' },
];

