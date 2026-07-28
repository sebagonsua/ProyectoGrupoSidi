import { nosotros } from '@/lib/content'
import SectionHeading from '@/components/ui/SectionHeading'

/** Convierte los marcadores **texto** del contenido en fragmentos destacados. */
function Highlighted({ text }: { text: string }) {
  const parts = text.split('**')
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}

export default function Nosotros() {
  return (
    <section id="quienes" className="cv-auto bg-white px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading label="Grupo SIDI" title={nosotros.titulo} align="left" />

          <p
            className="reveal mt-9 font-display text-2xl font-light leading-snug tracking-display text-ink sm:text-3xl"
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            {nosotros.subtitulo}
          </p>

          <div
            className="reveal mt-8 space-y-6 font-light leading-relaxed text-graphite"
            style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
          >
            <p>
              <Highlighted text={nosotros.parrafo1} />
            </p>
            <p>
              <Highlighted text={nosotros.parrafo2} />
            </p>
          </div>
        </div>

        <div className="reveal" style={{ '--reveal-delay': '240ms' } as React.CSSProperties}>
          <picture>
            <source
              type="image/avif"
              srcSet="/media/nosotros-planta-560.avif 560w, /media/nosotros-planta-720.avif 720w"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <source
              type="image/webp"
              srcSet="/media/nosotros-planta-560.webp 560w, /media/nosotros-planta-720.webp 720w"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <img
              src="/media/nosotros-planta-720.webp"
              alt="Instalaciones de tuberías industriales en una planta"
              width={700}
              height={933}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
