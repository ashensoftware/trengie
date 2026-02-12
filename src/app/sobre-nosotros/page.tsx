import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre Nosotros',
    description:
        'Conoce al equipo de Trengie: nuestra misión, visión y los valores que guían nuestro trabajo.',
};

const values = [
    {
        title: 'Excelencia técnica',
        description:
            'Nos apasiona escribir código limpio, escalable y bien documentado. Cada solución se construye con estándares de producción.',
    },
    {
        title: 'Transparencia',
        description:
            'Comunicación abierta con nuestros clientes en cada etapa del proyecto. Sin sorpresas, sin costos ocultos.',
    },
    {
        title: 'Impacto real',
        description:
            'Medimos el éxito por los resultados de negocio que generamos, no por líneas de código escritas.',
    },
    {
        title: 'Aprendizaje continuo',
        description:
            'Nos mantenemos actualizados con las últimas tecnologías y mejores prácticas de la industria.',
    },
];

const team = [
    {
        name: 'Nombre del Fundador',
        role: 'CEO & Lead Developer',
        bio: 'Más de 10 años de experiencia en desarrollo de software y arquitectura de sistemas.',
    },
    {
        name: 'Nombre del Socio',
        role: 'CTO & Data Engineer',
        bio: 'Especialista en pipelines de datos, automatización y soluciones cloud.',
    },
    {
        name: 'Nombre del Diseñador',
        role: 'UX/UI Designer',
        bio: 'Diseñador de experiencias digitales centradas en el usuario y la accesibilidad.',
    },
];

export default function SobreNosotrosPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-neutral-900 px-6 py-20 text-center">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Sobre Nosotros
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                        Somos un equipo de ingenieros y diseñadores apasionados por resolver problemas complejos con tecnología simple.
                    </p>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">Nuestra Misión</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">
                            Democratizar el acceso a soluciones tecnológicas de alta calidad para empresas de
                            todos los tamaños en Latinoamérica. Creemos que la tecnología bien aplicada es el
                            mayor acelerador de crecimiento empresarial.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">Nuestra Visión</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">
                            Ser el socio tecnológico de referencia para empresas que buscan transformarse
                            digitalmente, reconocidos por la calidad de nuestro trabajo y el impacto tangible que
                            generamos en cada proyecto.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-neutral-50 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-center text-3xl font-bold text-neutral-900">Nuestros Valores</h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2">
                        {values.map((v) => (
                            <div key={v.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                                <h3 className="text-lg font-semibold text-neutral-900">{v.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-center text-3xl font-bold text-neutral-900">El Equipo</h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-3">
                        {team.map((member) => (
                            <div key={member.name} className="text-center">
                                {/* Avatar placeholder */}
                                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{member.name}</h3>
                                <p className="text-sm font-medium text-neutral-500">{member.role}</p>
                                <p className="mt-2 text-sm text-neutral-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
