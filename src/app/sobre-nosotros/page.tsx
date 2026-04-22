import type { Metadata } from 'next';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { LABELS } from '@/lib/constants';
import { companyValues, normativeReferences, projectManagementReferences, companyDescription, methodology, capabilities, featuredClients } from '@/data/site';

export const metadata: Metadata = {
    title: LABELS.sections.nosotros,
    description: LABELS.meta.nosotrosDesc,
};

const hasLogoAsset = (logoPath?: string) => {
    if (!logoPath) return false;
    const normalized = logoPath.replace(/^\//, '');
    return existsSync(path.join(process.cwd(), 'public', normalized));
};

const resolveLogoAsset = (logoPath?: string) => {
    if (!logoPath) return null;
    if (hasLogoAsset(logoPath)) return logoPath;

    const ext = path.extname(logoPath);
    const base = ext ? logoPath.slice(0, -ext.length) : logoPath;
    const candidates = ['.png', '.svg', '.webp', '.jpg', '.jpeg'];

    for (const candidateExt of candidates) {
        const candidatePath = `${base}${candidateExt}`;
        if (hasLogoAsset(candidatePath)) return candidatePath;
    }

    return null;
};

const valueIcons: Record<string, React.ReactNode> = {
    shield: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    target: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
        </svg>
    ),
    users: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    award: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.854a6.012 6.012 0 01-2.771.896" />
        </svg>
    ),
};

export default function SobreNosotrosPage() {
    return (
        <main className="bg-[#0c0e13]">
            <section className="px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 border-b border-white/5">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="section-label mb-6">{LABELS.nav.nosotros}</span>
                        <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
                            Experiencia <span className="text-orange">multidisciplinaria</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl">
                            {LABELS.subtitles.nosotros}
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 sm:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

                        <div className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 p-8 sm:p-12 transition-all hover:border-orange/30">
                            <div className="relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange mb-4 block">
                                    {LABELS.headings.mision}
                                </span>
                                <h2 className="text-3xl font-black text-white sm:text-4xl mb-6">
                                    Impulsando la <span className="text-orange">conexión</span> global.
                                </h2>
                                <p className="text-base text-white/50 leading-relaxed mb-8">
                                    {companyDescription.mission}
                                </p>
                                <ul className="space-y-4">
                                    {companyDescription.missionBullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-4 text-sm text-white/40">
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-orange/5 blur-3xl rounded-full" />
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 p-8 sm:p-12 transition-all hover:border-orange/30">
                            <div className="relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange mb-4 block">
                                    {LABELS.headings.vision}
                                </span>
                                <h2 className="text-3xl font-black text-white sm:text-4xl mb-6">
                                    Referente en <span className="text-orange">integración</span> técnica.
                                </h2>
                                <p className="text-base text-white/50 leading-relaxed mb-8">
                                    {companyDescription.vision}
                                </p>
                                <ul className="space-y-4">
                                    {companyDescription.visionBullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-4 text-sm text-white/40">
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-orange/5 blur-3xl rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0c0e13] px-4 py-16 sm:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange/5 blur-[120px] rounded-full -translate-y-1/2" />
                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {capabilities.map((cap) => (
                            <div key={cap.label} className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center transition-all hover:bg-white/10 hover:border-orange/40 group">
                                <span className="text-4xl font-black text-white lg:text-6xl tracking-tighter tabular-nums group-hover:text-orange transition-colors">{cap.value}</span>
                                <span className="mt-3 block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white/50">{cap.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-24 sm:px-6 bg-[#111318]">
                <div className="mx-auto max-w-7xl text-center">
                    <span className="section-label mb-4 mx-auto">Trayectoria del equipo</span>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-16">
                        Empresas y operadores con los que ha trabajado el <span className="text-orange">equipo Trengie</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 lg:grid-cols-5 border border-white/5 rounded-3xl overflow-hidden">
                        {featuredClients.map((client) => {
                            const logoSrc = resolveLogoAsset(client.logo);
                            return (
                            <div key={client.name} className="flex flex-col h-36 items-center justify-center gap-3 bg-[#111318] p-6 group transition-all duration-500 hover:bg-orange/5 hover:shadow-[inset_0_0_20px_rgba(239,126,36,0.1)] cursor-default">
                                {logoSrc ? (
                                    <img
                                        src={logoSrc}
                                        alt={client.name}
                                        className="h-8 w-28 object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(239,126,36,0.35)]"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="text-white/20 group-hover:text-orange transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(239,126,36,0.6)]">
                                        {client.icon === 'train' && (
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>
                                        )}
                                        {client.icon === 'factory' && (
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                            </svg>
                                        )}
                                        {client.icon === 'globe' && (
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                        )}
                                        {client.icon === 'building' && (
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                            </svg>
                                        )}
                                        {client.icon === 'tram' && (
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V2m0 4c-3.314 0-6 1.343-6 3v8c0 1.657 2.686 3 6 3s6-1.343 6-3V9c0-1.657-2.686-3-6-3zM6 9h12M8.5 18.5l-2 3m9-3l2 3M9 14h.01M15 14h.01" />
                                            </svg>
                                        )}
                                    </span>
                                )}
                                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/40 group-hover:text-orange group-hover:drop-shadow-[0_0_8px_rgba(239,126,36,0.6)] transition-all duration-500 text-center leading-tight">
                                    {client.name}
                                </span>
                            </div>
                        )})}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 sm:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-16 lg:grid-cols-2 xl:gap-24">
                        <div>
                            <span className="section-label mb-6">Autoridad Técnica</span>
                            <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-8">
                                {LABELS.headings.nuestraHistoria}
                            </h2>
                            <div className="space-y-6 text-white/50 text-lg leading-relaxed max-w-xl">
                                <p>{companyDescription.intro}</p>
                                <p>{companyDescription.detail}</p>
                            </div>

                            {normativeReferences.length > 0 && (
                                <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-10 w-10 shrink-0 bg-orange/20 rounded-lg flex items-center justify-center text-orange">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-orange block">Trabajamos con</span>
                                            <h3 className="text-xl font-black text-white uppercase tracking-tight">Estándares internacionales</h3>
                                        </div>
                                    </div>
                                    <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                        Normativa y marcos técnicos
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {normativeReferences.map((ref) => (
                                            <div key={ref.name} className="flex items-center gap-3 bg-white/5 px-5 py-4 rounded-xl border border-white/5 group hover:border-orange/40 transition-colors">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                                                <span className="text-xs font-black text-white/70 group-hover:text-white transition-colors">{ref.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="mt-8 mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                        Gestión de proyectos
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {projectManagementReferences.map((ref) => (
                                            <div key={ref.name} className="flex items-center gap-3 bg-white/5 px-5 py-4 rounded-xl border border-white/5 group hover:border-orange/40 transition-colors">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                                                <span className="text-xs font-black text-white/70 group-hover:text-white transition-colors">{ref.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 content-start">
                            {companyValues.map((value) => (
                                <div key={value.title} className="bg-white/5 border border-white/5 p-8 rounded-2xl transition-all hover:bg-white/[0.07] hover:border-orange/20 group">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-all">
                                        {valueIcons[value.icon] ?? valueIcons.shield}
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{value.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#111318] px-4 py-20 sm:px-6 sm:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <span className="section-label mb-4 mx-auto">{LABELS.sections.metodologia}</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl text-center">
                            Ingeniería <span className="text-orange">Estructurada</span>
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {methodology.map((m) => (
                            <div key={m.step} className="group bg-white/5 border border-white/5 p-8 rounded-3xl transition-all hover:border-orange/40 hover:-translate-y-2">
                                <span className="text-4xl font-black text-white/5 transition-colors group-hover:text-orange/20 mb-6 block tabular-nums">{m.step}</span>
                                <h3 className="text-base font-black text-white mb-3 uppercase tracking-tight">{m.title}</h3>
                                <p className="text-xs leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">{m.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <a href="/contacto" className="btn-primary !py-5 !px-12 !text-lg !rounded-full shadow-2xl shadow-orange/20">
                            Hablemos de su proyecto
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
