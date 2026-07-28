import { portafolio, site } from '@/lib/content'
import YouTubeFacade from '@/components/YouTubeFacade'
import SectionHeading from '@/components/ui/SectionHeading'

function TrabajoImagen({ slug, width, height }: { slug: string; width: number; height: number }) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/media/trabajos/${slug}-480.avif 480w, /media/trabajos/${slug}-800.avif 800w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
      />
      <source
        type="image/webp"
        srcSet={`/media/trabajos/${slug}-480.webp 480w, /media/trabajos/${slug}-800.webp 800w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
      />
      <img
        src={`/media/trabajos/${slug}-800.webp`}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </picture>
  )
}

export default function Portafolio() {
  return (
    <section id="integrantes" className="cv-auto bg-white px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto">
        <SectionHeading label="Nuestros trabajos" title="Portafolio" />

        <div className="reveal mx-auto mt-16 max-w-4xl">
          <YouTubeFacade videoId={site.youtubeVideoId} title="Video de presentación de Grupo SIDI" />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portafolio.map((trabajo, i) => (
            <article
              key={trabajo.slug}
              className="reveal group"
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <div className="aspect-[4/3] overflow-hidden bg-mist">
                <TrabajoImagen slug={trabajo.slug} width={trabajo.width} height={trabajo.height} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-display text-ink">
                {trabajo.titulo}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-graphite">
                {trabajo.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
