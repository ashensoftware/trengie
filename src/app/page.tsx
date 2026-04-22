import { Suspense } from 'react';
import Link from 'next/link';
import Hero from '@/components/features/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/features/ServiceCard';
import ProjectCard from '@/components/features/ProjectCard';
import ContactForm from '@/components/features/ContactForm';
import JsonLd from '@/components/ui/JsonLd';
import { Icons } from '@/components/ui/Icons';
import type { Servicio, Proyecto } from '@/lib/types';
import { ROUTES, LABELS, ASSETS } from '@/lib/constants';
import { siteConfig } from '@/lib/config';
import { companyDescription } from '@/data/site';
import servicios from '@/data/servicios.json';
import proyectos from '@/data/proyectos.json';

export default function HomePage() {
  const typedServicios = servicios as Servicio[];
  const typedProyectos = proyectos as Proyecto[];

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <Hero
        label={LABELS.hero.label}
        title={LABELS.hero.title}
        subtitle={LABELS.hero.subtitle}
        backgroundVideo={ASSETS.heroVideo}
        priority
      />

      {typedServicios.length > 0 && (
        <section id="servicios" className="bg-alabaster px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label={LABELS.sections.servicios}
              title={LABELS.headings.servicios}
              subtitle={LABELS.subtitles.servicios}
            />
            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
              {typedServicios.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {typedProyectos.length > 0 && (
        <section id="proyectos" className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label={LABELS.sections.proyectos}
              title={LABELS.headings.proyectos}
              light
            />
            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {typedProyectos.slice(0, 3).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-10">
              <Link
                href={ROUTES.proyectos}
                className="text-sm font-medium text-white/60 underline underline-offset-4 transition-colors hover:text-white"
              >
                {LABELS.cta.verProyectos}
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0c0e13] px-4 py-16 sm:px-6 sm:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 p-8 sm:p-10 transition-all hover:border-orange/30">
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Icons.Bolt className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                  {LABELS.headings.mision}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 mb-6">
                  {companyDescription.mission}
                </p>
                <Link href={ROUTES.sobreNosotros} className="text-[10px] font-black uppercase tracking-widest text-orange flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saber más <Icons.ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 p-8 sm:p-10 transition-all hover:border-orange/30">
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Icons.Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                  {LABELS.headings.vision}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 mb-6">
                  {companyDescription.vision}
                </p>
                <Link href={ROUTES.sobreNosotros} className="text-[10px] font-black uppercase tracking-widest text-orange flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saber más <Icons.ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange to-[#b35a15] px-4 py-24 sm:px-6 text-center relative overflow-hidden shadow-[inset_0_20px_40px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6 sm:text-5xl drop-shadow-lg">
            Reduzca riesgos en su megaproyecto ferroviario
          </h2>
          <p className="text-white/90 text-xl font-medium mb-12 max-w-2xl mx-auto tracking-wide drop-shadow">
            Evite sobrecostos y garantice el cumplimiento normativo de referencia (CENELEC, SIL4) desde la estructuración técnica.
          </p>
          <Link href={ROUTES.contacto} className="btn-secondary !bg-[#0c0e13] !text-white hover:!bg-[#1a1a1a] !border-none !py-5 !px-12 !text-lg !rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest focus-visible:ring-4 focus-visible:ring-white">
            {LABELS.cta.hablarExperto}
          </Link>
        </div>
      </section>

      <section id="contacto" className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label={LABELS.sections.contacto}
            title={LABELS.headings.contacto}
            subtitle={LABELS.subtitles.contacto}
            light
          />
          <div className="mt-10 sm:mt-14">
            <Suspense fallback={<div className="text-white/30 text-center py-10">Cargando formulario...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
