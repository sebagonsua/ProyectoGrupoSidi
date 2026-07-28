import { servicios } from '@/lib/content'
import { ServiceIcon } from '@/components/icons'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Servicios() {
  return (
    <section id="servicios" className="cv-auto bg-mist px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto">
        <SectionHeading label="Lo que hacemos" title="Servicios" />

        {/* Grilla de 1px: las líneas divisorias son el propio fondo de la grilla,
            así no hace falta borde ni sombra en cada tarjeta. */}
        <div className="mt-20 grid gap-px overflow-hidden bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, i) => (
            <article
              key={servicio.titulo}
              className="reveal group bg-white p-9 transition-colors duration-300 hover:bg-mist lg:p-10"
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <ServiceIcon
                name={servicio.icon}
                className="h-7 w-7 text-ink transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
              />
              <h3 className="mt-7 font-display text-lg font-semibold tracking-display text-ink">
                {servicio.titulo}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-graphite">
                {servicio.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
