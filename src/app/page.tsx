import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import type { Servicio, Proyecto } from '@/lib/types';
import { getAllPosts } from '@/lib/blog';
import servicios from '@/data/servicios.json';
import proyectos from '@/data/proyectos.json';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Tecnología que impulsa tu negocio"
        subtitle="Diseñamos y construimos soluciones digitales a medida: desde software empresarial hasta automatización de procesos. Más de 5 años transformando ideas en productos funcionales."
      />

      {/* Servicios */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Nuestros Servicios"
            subtitle="Soluciones tecnológicas integrales para cada etapa de tu negocio."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(servicios as Servicio[]).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/servicios"
              className="text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Proyectos Destacados"
            subtitle="Casos reales donde la tecnología generó resultados medibles."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {(proyectos as Proyecto[]).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/proyectos"
              className="text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Blog"
            subtitle="Artículos sobre tecnología, automatización y buenas prácticas."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
            >
              Ver todos los artículos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-neutral-900 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Cuéntanos tu idea y te ayudamos a hacerla realidad.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
