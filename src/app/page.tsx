import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import type { Servicio, Proyecto } from '@/lib/types';
import { ROUTES, LABELS } from '@/lib/constants';
import { companyValues, certifications, companyDescription } from '@/data/site';
import servicios from '@/data/servicios.json';
import proyectos from '@/data/proyectos.json';

const valueIcons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  target: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
    </svg>
  ),
  users: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  award: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.854a6.012 6.012 0 01-2.771.896" />
    </svg>
  ),
};

export default function HomePage() {
  const typedServicios = servicios as Servicio[];
  const typedProyectos = proyectos as Proyecto[];

  return (
    <>
      <Hero
        title={LABELS.hero.titleStart}
        highlight={LABELS.hero.titleHighlight}
        titleEnd={LABELS.hero.titleEnd}
        subtitle={LABELS.hero.subtitle}
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
                <Link key={p.slug} href={`${ROUTES.proyectos}/${p.slug}`}>
                  <ProjectCard project={p} />
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-10">
              <Link
                href={ROUTES.proyectos}
                className="text-sm font-medium text-white/60 underline underline-offset-4 transition-colors hover:text-white"
              >
                {LABELS.cta.verTodosProyectos}
              </Link>
            </div>
          </div>
        </section>
      )}

      {companyValues.length > 0 && (
        <section id="nosotros" className="bg-alabaster px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading label={LABELS.sections.nosotros} title={LABELS.headings.nosotros} />
                <p className="mt-6 leading-relaxed text-boulder">{companyDescription.intro}</p>
                <p className="mt-4 leading-relaxed text-boulder">{companyDescription.detail}</p>

                {certifications.length > 0 && (
                  <div className="mt-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-orange">
                      {LABELS.sections.certificaciones}
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {certifications.map((cert) => (
                        <span
                          key={cert.name}
                          className="rounded-full border border-dune/20 bg-white px-3 py-1 text-xs font-semibold text-dune"
                        >
                          {cert.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {companyValues.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-grey/50 bg-white p-5 transition-all hover:border-orange/30 hover:shadow-md sm:p-6"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-orange/10 p-2.5 text-orange">
                      {valueIcons[value.icon] ?? valueIcons.shield}
                    </div>
                    <h3 className="text-base font-bold text-dune">{value.title}</h3>
                    <p className="mt-1 text-sm text-boulder">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="contacto" className="bg-dark px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label={LABELS.sections.contacto}
            title={LABELS.headings.contacto}
            light
          />
          <div className="mt-10 sm:mt-14">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
