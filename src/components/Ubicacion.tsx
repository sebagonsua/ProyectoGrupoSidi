import { ubicacion, site } from '@/lib/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Ubicacion() {
  return (
    <section aria-label="Nuestra ubicación" className="cv-auto bg-mist px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto">
        <SectionHeading
          label="Dónde estamos"
          title={
            <>
              {ubicacion.titulo1}
              <span className="text-graphite">{ubicacion.titulo2}</span>
            </>
          }
        />

        {/* Mapa embebido directamente; loading=lazy pospone la petición a Google
            hasta que la sección se acerca al viewport. */}
        <div
          className="reveal relative mt-16 aspect-[16/10] w-full overflow-hidden bg-white sm:aspect-[21/9]"
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
        >
          <iframe
            src={site.mapsEmbed}
            title="Ubicación de Grupo SIDI en Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
