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
    { href: ROUTES.blog, label: 'Blog' },
    { href: ROUTES.contacto, label: 'Contacto' },
] as const;

export const FOOTER_SERVICES = [
    { href: `${ROUTES.servicios}#sistemas-de-senalizacion`, label: 'Señalización Ferroviaria' },
    { href: `${ROUTES.servicios}#ingenieria-electrica`, label: 'Ingeniería Eléctrica' },
    { href: `${ROUTES.servicios}#telecomunicaciones`, label: 'Telecomunicaciones' },
    { href: `${ROUTES.servicios}#material-rodante`, label: 'Material Rodante' },
    { href: `${ROUTES.servicios}#consultoria-gerencia`, label: 'Gerencia de Proyectos' },
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
        label: 'Ingeniería y Gestión de Proyectos',
        titleStart: 'Infraestructura ferroviaria que',
        titleHighlight: 'mueve',
        titleEnd: 'el desarrollo',
        subtitle:
            'Excelencia técnica, ejecución eficiente y capacidad demostrada para abordar proyectos complejos que requieren coordinación multidisciplinar.',
    },
    subtitles: {
        servicios:
            'Ofrecemos soluciones integrales y llave en mano para cada fase de su proyecto ferroviario y tecnológico.',
        serviciosDetalle:
            'Nuestras 5 verticales estratégicas cubren todas las áreas técnicas exigidas en proyectos complejos de infraestructura.',
        serviciosPage:
            'Ofrecemos soluciones integrales y llave en mano para cada fase de su proyecto ferroviario y tecnológico.',
        nosotros:
            'Más de 15 años conectando sistemas, territorios e industrias mediante ingeniería especializada y gerencia ágil.',
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
        titleSuffix: 'Ingeniería y Gestión de Proyectos',
        serviciosDesc:
            'Señalización, Ingeniería Eléctrica, Telecomunicaciones, Material Rodante y Gerencia de Proyectos para el sector ferroviario.',
        nosotrosDesc:
            'Conoce a Trengie: excelencia técnica y ejecución eficiente en proyectos de infraestructura ferroviaria a nivel global.',
        contactoDesc:
            'Hablemos de su proyecto. Soluciones técnicas con estándares internacionales y modelo ágil de trabajo.',
        blogDesc:
            'Artículos sobre ingeniería ferroviaria, normativa y tendencias del sector transporte.',
        graciasDesc: 'Su mensaje ha sido enviado correctamente. Lo contactaremos pronto.',
    },
    footer: {
        brand:
            'Ingeniería y consultoría técnica de clase mundial para el desarrollo de infraestructuras sostenibles.',
        copyright: 'Todos los derechos reservados.',
    },
    aria: {
        navPrincipal: 'Navegación principal',
        abrirMenu: 'Abrir menú',
        cerrarMenu: 'Cerrar menú',
    },
} as const;
