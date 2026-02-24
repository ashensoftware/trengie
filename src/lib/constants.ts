export const ASSETS = {
    logo: '/assets/logo-trengie.png',
    logoLight: '/assets/logo-trengie-light.png',
    heroBg: '/images/hero-bg.jpg',
    ogImage: '/og.png',
} as const;


export const ROUTES = {
    home: '/',
    servicios: '/servicios',
    proyectos: '/proyectos',
    sobreNosotros: '/sobre-nosotros',
    blog: '/blog',
    contacto: '/contacto',
    gracias: '/gracias',
} as const;

export const NAV_LINKS = [
    { href: ROUTES.servicios, label: 'Servicios' },
    { href: ROUTES.proyectos, label: 'Proyectos' },
    { href: ROUTES.sobreNosotros, label: 'Nosotros' },
    { href: ROUTES.contacto, label: 'Contacto' },
] as const;

export const FOOTER_SERVICES = [
    { href: `${ROUTES.servicios}#interventoria`, label: 'Interventoría' },
    { href: `${ROUTES.servicios}#estructuracion`, label: 'Estructuración' },
    { href: `${ROUTES.servicios}#ejecucion`, label: 'Ejecución' },
    { href: `${ROUTES.servicios}#capacitacion`, label: 'Capacitación' },
] as const;

export const LABELS = {
    cta: {
        cotizar: 'Cotizar proyecto',
        solicitarConsultoria: 'Solicitar Consultoría',
        verProyectos: 'Ver Proyectos',
        enviarSolicitud: 'Enviar Solicitud',
        enviando: 'Enviando...',
        solicitarInfo: 'Solicitar información',
        agendarReunion: 'Solicitar reunión con nuestro equipo técnico',
        volverInicio: 'Volver al inicio',
        volverProyectos: 'Volver a proyectos',
        verTodosProyectos: 'Ver todos los proyectos →',
        preinscribirse: 'Preinscribirse',
    },
    sections: {
        servicios: 'Servicios',
        proyectos: 'Proyectos',
        nosotros: 'Nosotros',
        contacto: 'Contacto',
        soluciones: 'Soluciones',
        fichaTecnica: 'Ficha Técnica',
        certificaciones: 'Certificaciones',
        filtrarPorTipo: 'Filtrar por tipo',
        todos: 'Todos',
        alcance: 'Alcance',
        rol: 'Rol',
        resultados: 'Resultados',
        galeria: 'Galería',
        knowledgeHub: 'Knowledge Hub',
    },
    headings: {
        servicios: 'Módulos de servicio',
        proyectos: 'Portafolio de proyectos',
        nosotros: 'Quiénes somos',
        contacto: 'Hablemos de su proyecto',
        nuestrosServicios: 'Nuestros Servicios',
        nuestraHistoria: 'Nuestra historia',
    },
    hero: {
        label: 'Ingeniería Ferroviaria B2B',
        titleStart: 'Infraestructura ferroviaria que',
        titleHighlight: 'mueve',
        titleEnd: 'el desarrollo',
        subtitle:
            'Interventoría, estructuración y ejecución de proyectos ferroviarios con estándares internacionales de calidad y seguridad.',
    },
    subtitles: {
        servicios:
            'Soluciones especializadas para cada fase de su proyecto ferroviario, con enfoque en resultados medibles.',
        serviciosDetalle:
            'Cada módulo está diseñado para abordar una etapa específica del ciclo de vida de un proyecto de infraestructura ferroviaria.',
        serviciosPage:
            'Soluciones especializadas para cada fase de su proyecto ferroviario, con enfoque en resultados medibles.',
        nosotros:
            'Más de 15 años conectando sistemas, territorios e industrias a través de la ingeniería ferroviaria.',
        contacto:
            'Estamos disponibles para discutir sus necesidades de infraestructura ferroviaria. Elija el canal que prefiera para comunicarse con nosotros.',
        blog: 'Artículos, análisis y tendencias del sector ferroviario e infraestructura de transporte.',
        solucionIntegral: '¿Necesita una solución integral?',
        solucionIntegralDesc:
            'Nuestro equipo puede combinar múltiples servicios para cubrir todas las fases de su proyecto.',
        proyectoSimilar: '¿Tiene un proyecto similar?',
        proyectoSimilarDesc: 'Cuéntenos y lo ayudamos a hacerlo realidad.',
        blogEmpty: 'Próximamente publicaremos artículos sobre el sector ferroviario.',
    },
    form: {
        nombre: 'Nombre',
        empresa: 'Empresa',
        correo: 'Correo electrónico',
        mensaje: 'Mensaje',
        placeholderNombre: 'Su nombre',
        placeholderEmpresa: 'Su empresa',
        placeholderCorreo: 'correo@empresa.com',
        placeholderMensaje: 'Cuéntenos sobre su proyecto...',
        successMsg: '¡Mensaje enviado! Redirigiendo...',
        errorMsg: 'Hubo un error. Intente de nuevo.',
    },
    errors: {
        paginaNoEncontrada: 'Página no encontrada',
        paginaNoEncontradaDesc: 'Lo sentimos, la página que busca no existe o ha sido movida.',
    },
    gracias: {
        titulo: '¡Gracias por escribirnos!',
        descripcion: 'Hemos recibido su mensaje y le responderemos en menos de 24 horas.',
    },
    meta: {
        titleSuffix: 'Ingeniería Ferroviaria de Clase Mundial',
        serviciosDesc:
            'Interventoría, estructuración, ejecución y capacitación en proyectos de ingeniería ferroviaria.',
        nosotrosDesc:
            'Conoce a Trengie: más de 15 años de experiencia en consultoría e ingeniería ferroviaria en Latinoamérica.',
        contactoDesc:
            'Hablemos de su proyecto de infraestructura ferroviaria. Solicite una consultoría gratuita.',
        blogDesc:
            'Artículos sobre ingeniería ferroviaria, normativa y tendencias del sector transporte.',
        graciasDesc: 'Su mensaje ha sido enviado correctamente. Lo contactaremos pronto.',
    },
    footer: {
        brand:
            'Consultoría e ingeniería ferroviaria de clase mundial para el desarrollo de infraestructura sostenible.',
        copyright: 'Todos los derechos reservados.',
    },
    aria: {
        navPrincipal: 'Navegación principal',
        abrirMenu: 'Abrir menú',
        cerrarMenu: 'Cerrar menú',
    },
} as const;
