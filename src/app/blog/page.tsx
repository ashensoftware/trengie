import BlogClient from '@/components/features/BlogClient';
import { getAllPosts } from '@/lib/blog';
import { LABELS } from '@/lib/constants';

// This is now a Server Component
export default function BlogPage() {
    const allPosts = getAllPosts();

    return (
        <main className="min-h-screen bg-dark">
            {/* Hero */}
            <section className="bg-dark px-4 pt-28 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-20">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Knowledge <span className="text-orange">Hub</span>
                    </h1>
                    <p className="mt-6 text-base leading-relaxed text-[#9a9a9a] sm:text-lg">
                        {LABELS.subtitles.blog}
                    </p>
                </div>
            </section>

            {/* Client Logic */}
            <BlogClient initialPosts={allPosts} />

            {/* Subscribe CTA (Static part) */}
            <section className="bg-[#0c0e13] px-4 py-16 text-center border-t border-white/5 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-2xl bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 shadow-2xl sm:p-12">
                    <span className="text-xs font-black uppercase tracking-widest text-orange">Newsletter</span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Manténgase actualizado
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[#9a9a9a]">
                        Reciba análisis técnicos, tendencias del sector transporte e innovaciones en ingeniería ferroviaria directamente en su correo.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="correo@empresa.com"
                            className="input flex-1 h-14"
                        />
                        <button type="button" className="btn-primary px-8 h-14 whitespace-nowrap">
                            {LABELS.cta.suscribirse}
                        </button>
                    </div>
                    <p className="mt-4 text-[10px] text-white/30">
                        Al suscribirse usted acepta nuestra política de tratamiento de datos. No enviamos spam.
                    </p>
                </div>
            </section>
        </main>
    );
}
