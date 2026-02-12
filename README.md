# Trengie — Sitio Corporativo

Sitio web institucional de [Trengie](https://trengie.com): servicios, portafolio, blog y contacto. Construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, optimizado para SEO y listo para desplegar en Vercel.

## Stack

- **Next.js 16** (App Router, SSG/SSR)
- **TypeScript**
- **Tailwind CSS v4**
- **MDX** (blog posts con frontmatter)
- **Formspree** (formulario de contacto sin backend)

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
# → Abre http://localhost:3000

# 3. Build de producción
npm run build

# 4. Lint y formato
npm run lint
npm run format
```

## Estructura del proyecto

```
trengie/
├── public/               # Archivos estáticos (favicon, og.png)
├── src/
│   ├── app/              # Rutas (App Router)
│   │   ├── blog/
│   │   ├── contacto/
│   │   ├── gracias/
│   │   ├── proyectos/
│   │   ├── servicios/
│   │   ├── sobre-nosotros/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/       # Componentes reutilizables
│   ├── content/blog/     # Posts en MDX (frontmatter: title, date, summary, tags, cover)
│   ├── data/
│   │   ├── proyectos.json
│   │   └── servicios.json
│   └── lib/              # Utilidades, tipos, configuración
└── package.json
```

## Rutas disponibles

| Ruta | Descripción |
|------|------------|
| `/` | Página principal con hero, servicios, proyectos y blog |
| `/servicios` | Detalle de todos los servicios |
| `/proyectos` | Listado de proyectos |
| `/proyectos/[slug]` | Detalle de proyecto (reto, solución, resultados, stack, galería) |
| `/sobre-nosotros` | Misión, visión, valores y equipo |
| `/contacto` | Formulario de contacto (Formspree) + WhatsApp |
| `/gracias` | Página de agradecimiento post-formulario |
| `/blog` | Listado de artículos |
| `/blog/[slug]` | Artículo en MDX |

## Contenido editable

### Servicios
Edita `data/servicios.json`. Campos: `title`, `slug`, `summary`, `icon`, `features[]`.

### Proyectos
Edita `data/proyectos.json`. Campos: `title`, `slug`, `client`, `summary`, `cover`, `reto`, `solucion`, `resultados[]`, `stack[]`, `images[]`.

### Blog
Agrega archivos `.mdx` en `content/blog/`. Frontmatter requerido:

```yaml
---
title: "Título del post"
date: "2025-01-15"
summary: "Resumen breve"
tags: ["tag1", "tag2"]
cover: "/images/blog/cover.jpg"
---
```

### Configuración del sitio
Edita `src/lib/config.ts` para cambiar:
- URL del sitio
- Enlace de WhatsApp
- URL de Formspree / Tally
- Redes sociales

## Deploy en Vercel

### Opción 1: Desde la interfaz de Vercel
1. Sube el repositorio a GitHub/GitLab
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa el repositorio
4. Vercel detecta Next.js automáticamente → clic en **Deploy**

### Opción 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Conectar dominio trengie.com

En el dashboard de Vercel → Settings → Domains:

1. Agrega `trengie.com`
2. Configura en tu registrador DNS:

| Tipo | Host | Valor |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

## Formulario de contacto

El formulario usa **Formspree** por defecto. Para configurarlo:

1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea un formulario y copia el endpoint
3. Reemplaza `YOUR_FORM_ID` en `src/lib/config.ts`

### Alternativa: Tally
1. Crea un formulario en [tally.so](https://tally.so)
2. Reemplaza `YOUR_TALLY_FORM_ID` en `src/lib/config.ts`

## Licencia

Uso privado — © Trengie
