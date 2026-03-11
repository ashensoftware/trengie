export const ASSETS = {
    logo: '/assets/logo-trengie.svg', // Legacy reference
    logoWhite: '/assets/logo-white.svg',
    logoDark: '/assets/logo-dark.svg',
    heroBg: '/images/hero-bg.jpg',
    heroVideo: '/videos/hero-background.mp4',
    ogImage: '/og.png',
    mision: '/images/corporate/mision.jpg',
    vision: '/images/corporate/vision.jpg',
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
        contacto: 'Hable con nosotros',
        cotizar: 'Cotizar presupuesto',
        enviar: 'Enviar mensaje',
        enviando: 'Enviando...',
        enviarSolicitud: 'Enviar solicitud técnica',
        verProyectos: 'Ver portafolio',
        verServicios: 'Ver alcances técnicos',
        hablarExperto: 'Hablar con un experto',
        agendarReunion: 'Agendar reunión',
        suscribirse: 'Suscribirse al Hub',
        verAlcance: 'Ver detalles técnicos',
        solicitarInfo: 'Solicitar información',
        volverInicio: 'Volver al inicio',
        volverProyectos: 'Volver a proyectos',
    },
    hero: {
        label: 'Ingeniería & Consultoría',
        title: 'Ingeniería ferroviaria y gestión de proyectos',
        highlight: '',
        titleEnd: '',
        subtitle: 'Señalización, electrificación, telecomunicaciones y material rodante con estándares internacionales.',
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
        comoTrabajamos: 'Cómo trabajamos',
        metodologia: 'Metodología',
        capacidades: 'Capacidades clave',
        tipoServicio: 'Tipo de servicio',
        etapaProyecto: 'Etapa del proyecto',
        tecnologias: 'Tecnologías',
        quePasaDespues: '¿Qué pasa después?',
        faq: 'Preguntas frecuentes',
    },
    headings: {
        servicios: 'Módulos de servicio',
        proyectos: 'Portafolio de proyectos',
        nosotros: 'Quiénes somos',
        contacto: 'Hablemos de su proyecto',
        nuestrosServicios: 'Nuestros Servicios',
        nuestraHistoria: 'Nuestra historia',
        mision: 'Misión',
        vision: 'Visión',
        comoTrabajamos: 'Cómo trabajamos',
    },
    subtitles: {
        proyectos: 'Explora nuestra trayectoria en interventoría, diseño y estructuración de sistemas ferroviarios complejos.',
        servicios:
            'Ofrecemos soluciones integrales y llave en mano para cada fase de su proyecto ferroviario y tecnológico.',
        serviciosDetalle:
            'Nuestras 5 verticales estratégicas cubren todas las áreas técnicas exigidas en proyectos complejos de infraestructura.',
        serviciosPage:
            'Ofrecemos soluciones integrales y llave en mano para cada fase de su proyecto ferroviario y tecnológico.',
        nosotros:
            'Más de 20 años conectando sistemas, territorios e industrias mediante ingeniería especializada y gerencia ágil.',
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
        tipoServicio: 'Tipo de servicio',
        etapaProyecto: 'Etapa del proyecto',
        placeholderNombre: 'Su nombre',
        placeholderEmpresa: 'Su empresa',
        placeholderCorreo: 'correo@empresa.com',
        placeholderMensaje: 'Cuéntenos sobre su proyecto...',
        placeholderServicio: 'Seleccione un servicio',
        placeholderEtapa: 'Seleccione la etapa',
        successMsg: '¡Mensaje enviado! Redirigiendo...',
        errorMsg: 'Hubo un error. Intente de nuevo.',
        microcopy: 'Respondemos en menos de 24 horas',
        proceso: [
            { title: 'Respuesta rápida', desc: 'Le contactamos en menos de 24 horas hábiles.' },
            { title: 'Llamada técnica', desc: 'Agendamos una sesión de 30 min para entender su necesidad.' },
            { title: 'Propuesta técnica', desc: 'Entregamos una solución preliminar y presupuesto estimado.' },
        ],
        faqs: [
            { q: '¿Tienen cobertura internacional?', a: 'Sí, ejecutamos proyectos en múltiples países cumpliendo normativas locales e internacionales.' },
            { q: '¿Qué estándares de calidad siguen?', a: 'Trabajamos bajo normas ISO 9001 y normativas técnicas específicas como CENELEC para trenes.' },
        ]
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
    nav: {
        proyectos: 'Proyectos',
        servicios: 'Servicios',
        nosotros: 'Nosotros',
        blog: 'Blog',
        contacto: 'Contacto',
    },
} as const;
