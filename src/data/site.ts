import type { Stat, Value, Certification, ContactChannel } from '@/lib/types';

export const heroStats: Stat[] = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '120+', label: 'Proyectos ejecutados' },
    { value: '8', label: 'Países de cobertura' },
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
        'Trengie es una compañía de ingeniería y gestión de proyectos caracterizada por su excelencia técnica, ejecución eficiente y capacidad para abordar proyectos complejos que requieren coordinación multidisciplinar.',
    detail:
        'Nacemos con una fuerte especialización en el sector ferroviario, ofreciendo soluciones integrales que cubren desde la ingeniería conceptual hasta la puesta en marcha y operación. Nuestro modelo ágil y nuestra capacidad de integrar diversas disciplinas nos permiten entregar proyectos llave en mano con los más altos estándares internacionales.',
};
