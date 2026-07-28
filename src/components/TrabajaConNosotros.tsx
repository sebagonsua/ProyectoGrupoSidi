import { trabajaConNosotros, site } from '@/lib/content'
import { MailIcon } from '@/components/icons'
import SectionHeading from '@/components/ui/SectionHeading'

// Banda oscura de CTA a ancho completo.
export default function TrabajaConNosotros() {
  // El texto original termina en el mail de RRHH: lo mantenemos verbatim y lo hacemos link.
  const [antes] = trabajaConNosotros.texto.split(site.emailRRHH)

  return (
    <section id="trabaja-con-nosotros" className="cv-auto bg-ink px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto text-center">
        <SectionHeading
          label="Sumate al equipo"
          title={
            <>
              {trabajaConNosotros.titulo1}
              <span className="text-white/55">{trabajaConNosotros.titulo2}</span>
            </>
          }
          invert
          intro={
            <>
              {antes}
              <a
                href={`mailto:${site.emailRRHH}`}
                className="font-medium text-white underline-offset-4 transition-colors hover:underline"
              >
                {site.emailRRHH}
              </a>
            </>
          }
        />

        <div
          className="reveal mt-12"
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
        >
          <a href={`mailto:${site.emailRRHH}`} className="btn btn-invert">
            <MailIcon className="h-4 w-4" />
            Enviar CV
          </a>
        </div>
      </div>
    </section>
  )
}
