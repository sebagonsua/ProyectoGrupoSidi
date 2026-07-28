import { site } from '@/lib/content'
import { WhatsAppIcon } from '@/components/icons'

type Slide = { base: string; wide?: boolean }

// La primera diapositiva (candidata a LCP) carga eager; /site.js rota cada 5 s.
const slides: Slide[] = [
  { base: 'hero-industrial', wide: true },
  { base: 'slide-sellado' },
  { base: 'slide-valvulas' },
]

function SlideImagen({ slide, index }: { slide: Slide; index: number }) {
  const widths = slide.wide ? [828, 1280, 1920] : [828, 1440]
  const srcSet = (ext: string) =>
    widths.map((w) => `/media/${slide.base}-${w}.${ext} ${w}w`).join(', ')
  const largest = widths[widths.length - 1]

  return (
    <div className={`hero-slide absolute inset-0 overflow-hidden ${index === 0 ? 'is-active' : ''}`}>
      <picture>
        <source type="image/avif" srcSet={srcSet('avif')} sizes="100vw" />
        <source type="image/webp" srcSet={srcSet('webp')} sizes="100vw" />
        <img
          src={`/media/${slide.base}-${largest}.webp`}
          alt=""
          width={largest}
          height={slide.wide ? Math.round((largest * 1153) / 1920) : Math.round((largest * 933) / 700)}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : undefined}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate mt-20 flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-ink"
    >
      {/* Slideshow de fondo */}
      <div aria-hidden="true">
        {slides.map((slide, i) => (
          <SlideImagen key={slide.base} slide={slide} index={i} />
        ))}
      </div>

      {/* Velo oscuro monocromático: legibilidad sin teñir la imagen */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/35"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-wrap px-6 py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* El titular (candidato a LCP) pinta sin retraso de opacidad. */}
          <h1 className="font-display font-semibold leading-[1.02] tracking-display">
            <span className="block text-[11px] font-semibold uppercase tracking-label text-dim">
              Grupo SIDI es
            </span>
            <span className="mt-7 block text-5xl text-white sm:text-6xl lg:text-7xl">
              Soluciones industriales
            </span>
            <span className="block text-5xl text-white/55 sm:text-6xl lg:text-7xl">
              de impacto.
            </span>
          </h1>

          <p className="hero-fade mt-9 max-w-xl text-base font-light leading-relaxed text-dim sm:text-lg">
            {site.description}
          </p>

          <div className="hero-fade hero-fade-2 mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-invert"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escribinos por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-ghost">
              Ver nuestros servicios
            </a>
          </div>

          <p className="hero-fade hero-fade-3 mt-12 text-sm text-dim">
            {site.phoneDisplay} · {site.email}
          </p>
        </div>
      </div>

      {/* Indicadores del slideshow */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.base}
            type="button"
            className={`hero-dot h-px w-10 bg-white/30 ${i === 0 ? 'is-active' : ''}`}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
