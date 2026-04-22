export const ASSETS = {
    logo: '/assets/logo-trengie.svg',
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
        contacto: 'Solicitar consultoría técnica',
        cotizar: 'Cotizar presupuesto',
        enviar: 'Solicitar consultoría técnica',
        enviando: 'Enviando...',
        enviarSolicitud: 'Solicitar consultoría técnica',
        verProyectos: 'Ver portafolio',
        verServicios: 'Ver alcances técnicos',
        hablarExperto: 'Solicitar consultoría técnica',
        agendarReunion: 'Agendar reunión',
        contactar: 'Solicitar consultoría técnica',
        suscribirse: 'Suscribirse al centro de conocimiento',
        verAlcance: 'Ver detalles técnicos',
        solicitarInfo: 'Solicitar consultoría técnica',
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
    portfolio: {
        aporteEquipo: 'Aporte del equipo',
        trayectoriaEquipo: 'Trayectoria del equipo',
        impacto: 'Impacto',
        verProyecto: 'Ver proyecto',
        participacionTecnica: 'Participación técnica',
    },
    sections: {
        servicios: 'Servicios',
        proyectos: 'Proyectos',
        nosotros: 'Nosotros',
        contacto: 'Contacto empresarial',
        soluciones: 'Soluciones',
        fichaTecnica: 'Ficha Técnica',
        certificaciones: 'Certificaciones',
        filtrarPorTipo: 'Filtrar por tipo',
        todos: 'Todos',
        alcance: 'Aportes del Equipo Humano de Trengie al Proyecto',
        descripcionProyecto: 'Descripción del proyecto',
        empresas: 'Empresa / equipo',
        rol: 'Rol',
        resultados: 'Resultados',
        galeria: 'Galería',
        knowledgeHub: 'Centro de conocimiento',
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
        contacto: 'Para clientes institucionales y corporativos',
        nuestrosServicios: 'Nuestros Servicios',
        nuestraHistoria: 'Nuestra historia',
        mision: 'Misión',
        vision: 'Visión',
        comoTrabajamos: 'Cómo trabajamos',
    },
    subtitles: {
        proyectos: 'Explora nuestra trayectoria en interventoría, diseño y estructuración de sistemas ferroviarios complejos.',
        servicios:
            'Ofrecemos servicios especializados de alto nivel en Material Rodante y Sistemas Metroferroviarios, respaldados por experiencia, conocimiento técnico y enfoque en la eficiencia operativa.',
        serviciosDetalle:
            'Nuestro equipo multidisciplinario acompaña proyectos en preconstrucción, construcción, pruebas, puesta en servicio, operación y mantenimiento, con integración técnica de subsistemas críticos.',
        serviciosPage:
            'Ofrecemos servicios especializados de alto nivel en Material Rodante y Sistemas Metroferroviarios, con mejores prácticas internacionales para soluciones seguras, sostenibles y de alto desempeño.',
        nosotros:
            'Equipo multidisciplinar con más de 20 años en el sector ferroviario y proyectos ejecutados en Colombia, Ecuador, Perú, México, Brasil, Indonesia, Turquía y España.',
        contacto:
            'Acompañamos operadores, contratistas y estructuras empresariales en la evaluación de proyectos ferroviarios. Solicitudes institucionales y corporativas.',
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
        empresa: 'Organización',
        correo: 'Correo electrónico',
        mensaje: 'Mensaje',
        tipoServicio: 'Tipo de servicio',
        etapaProyecto: 'Etapa del proyecto',
        placeholderNombre: 'Su nombre',
        placeholderEmpresa: 'Su organización o entidad',
        placeholderCorreo: 'correo@empresa.com',
        placeholderMensaje: 'Descripción de la necesidad técnica o proyecto corporativo...',
        placeholderServicio: 'Seleccione un servicio',
        placeholderEtapa: 'Seleccione la etapa',
        successMsg: '¡Mensaje enviado! Redirigiendo...',
        errorMsg: 'Hubo un error. Intente de nuevo.',
        microcopy: 'Le indicaremos los próximos pasos y cómo nos mantendremos en contacto.',
        proceso: [
            { title: 'Confirmación', desc: 'Le indicamos los próximos pasos y cómo estableceremos contacto.' },
            { title: 'Evaluación', desc: 'Revisamos su solicitud y definimos los siguientes pasos según su prioridad.' },
            { title: 'Propuesta', desc: 'Entregamos solución preliminar y alcance según el modelo de trabajo.' },
        ],
        faqs: [
            { q: '¿Tienen cobertura internacional?', a: 'Sí, ejecutamos proyectos en múltiples países cumpliendo normativas locales e internacionales.' },
            { q: '¿Qué estándares de calidad siguen?', a: 'Trabajamos con estándares internacionales como ISO 9001 y CENELEC, e incorporamos buenas prácticas de gestión de proyectos basadas en PMI/IPMA y herramientas PMO.' },
        ]
    },
    errors: {
        paginaNoEncontrada: 'Página no encontrada',
        paginaNoEncontradaDesc: 'Lo sentimos, la página que busca no existe o ha sido movida.',
    },
    gracias: {
        titulo: '¡Gracias por escribirnos!',
        descripcion: 'Hemos recibido su mensaje. Le indicaremos los próximos pasos para mantener el contacto.',
    },
    meta: {
        titleSuffix: 'Ingeniería y Gestión de Proyectos',
        serviciosDesc:
            'Señalización, Ingeniería Eléctrica, Telecomunicaciones, Material Rodante y Gerencia de Proyectos para el sector ferroviario.',
        nosotrosDesc:
            'Trengie: ingeniería y gestión de proyectos ferroviarios. Equipo con más de 20 años de experiencia en el sector y trayectoria en la región.',
        contactoDesc:
            'Contacto empresarial para clientes institucionales y corporativos. Consultoría técnica ferroviaria para operadores, contratistas y estructuras empresariales.',
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
        contacto: 'Contacto empresarial',
    },
} as const;
