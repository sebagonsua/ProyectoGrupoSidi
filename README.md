# Grupo SIDI — Sitio corporativo

Sitio institucional de **Grupo SIDI** (Soluciones Industriales de Impacto), empresa uruguaya de servicios industriales: sellado de fugas en operación, reparación de calderas, montaje de estructuras, servicios de agua y tratamientos ambientales.

Migración del sitio original en HTML/CSS/JS estático a **Next.js 16 + TypeScript + Tailwind**, exportado como sitio 100% estático y optimizado para performance.

🔗 **Producción:** https://grupo-sidi.com

---

## Objetivo técnico

El sitio original era una landing estática con jQuery y assets sin optimizar. La migración buscó tres cosas, sin cambiar una sola palabra del copy:

1. **Componentizar** el marcado en piezas mantenibles con contenido centralizado.
2. **Bajar el peso al mínimo** — el sitio no tiene componentes cliente de React, así que el JS de hidratación se elimina en post-build y el HTML exportado queda estático puro (~2 KB gzip de JS inicial).
3. **Rediseñar** sobre un sistema monocromático propio, más sobrio que la versión anterior.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 3.4 + design tokens en CSS custom properties |
| Tipografía | Inter (`next/font`, self-hosted) |
| Imágenes | WebP + fallback JPG, optimizadas con `sharp` |
| Formulario | Formspree (POST directo, sin backend) |
| Deploy | Export estático — cualquier hosting de archivos |

## Decisiones de implementación

**Sin hidratación.** Toda la interactividad (menú, scroll, envío del formulario) vive en `public/site.js` en JavaScript vanilla. Como no hay componentes cliente, `scripts/strip-hydration.mjs` corre después del build y quita del HTML exportado los chunks del framework, los `preload` de esos chunks y el payload RSC inline. El CSS también se inlinea para eliminar el único request render-blocking.

**Contenido centralizado.** Todo el copy vive en `src/lib/content.ts`, verbatim del sitio en producción. Ningún componente tiene texto hardcodeado, así que actualizar la web no requiere tocar JSX.

**Sistema de diseño monocromático.** Cuatro valores como única fuente de verdad (`#FFFFFF` / `#F5F5F5` / `#4B4B4B` / `#1E1E1E`), declarados a la vez en `tailwind.config.ts` y como custom properties en `globals.css`. Una sola familia tipográfica, con el registro "display" logrado por peso y tracking en lugar de una segunda fuente.

**SEO.** Metadata del App Router, Open Graph, Twitter Card, `sitemap.ts`, `robots.ts` y JSON-LD de `LocalBusiness` con teléfono, ubicación y horarios de atención.

**YouTube diferido.** `YouTubeFacade` renderiza una miniatura estática y solo carga el iframe de YouTube al hacer click, evitando ~500 KB de scripts de terceros en la carga inicial.

**Accesibilidad.** Contraste AA en todos los niveles de texto, `prefers-reduced-motion` respetado, foco visible y labels asociados en el formulario.

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # metadata, fuentes, JSON-LD
│   ├── page.tsx          # composición de secciones
│   ├── globals.css       # design tokens + estilos base
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx        Hero.tsx        Urgencias.tsx
│   ├── Nosotros.tsx      Servicios.tsx   Portafolio.tsx
│   ├── Clientes.tsx      Ubicacion.tsx   Contacto.tsx
│   ├── ContactForm.tsx   TrabajaConNosotros.tsx
│   ├── Footer.tsx        WhatsAppButton.tsx
│   ├── YouTubeFacade.tsx icons.tsx
│   └── ui/SectionHeading.tsx
└── lib/
    ├── content.ts        # todo el copy del sitio
    ├── seo.ts            # keywords y descripciones
    └── flags.ts          # banderas SVG inline (sección Alianza)

scripts/
├── strip-hydration.mjs   # post-build: quita hidratación e inlinea CSS
└── optimize-images.js    # genera WebP desde los JPG originales

public/media/             # imágenes, logos de clientes, íconos
docs/paleta-colores/      # referencia de la paleta original
```

En la raíz también viven `index.html`, `css/`, `js/`, `media/` y `enviar.php`: es el **sitio estático original**, conservado como referencia de la migración.

## Instalación

Requiere Node.js 20 o superior.

```bash
git clone https://github.com/sebagonsua/ProyectoGrupoSidi.git
cd ProyectoGrupoSidi
npm ci
npm run dev
```

Abrir http://localhost:3000

> **Nota:** no ubicar el proyecto dentro de una carpeta sincronizada con OneDrive. La sincronización corrompe `node_modules` renombrando carpetas a `"X - copia"`, lo que provoca `MODULE_NOT_FOUND` en tiempo de ejecución.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Export estático a `out/` + strip de hidratación |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint (config de Next) |

## Deploy

`npm run build` genera `out/` con HTML, CSS e imágenes listos para servir. No necesita Node en el servidor: sirve cualquier hosting estático (Vercel, Netlify, GitHub Pages, Apache, nginx).

El formulario de contacto apunta a Formspree, así que tampoco hace falta backend. El `enviar.php` de la raíz es del sitio original y no se usa en la versión Next.

## Licencia

Código con fines de portfolio. Marca, contenido e imágenes son propiedad de Grupo SIDI.
