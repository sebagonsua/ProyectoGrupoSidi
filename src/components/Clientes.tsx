import { clientes, clientesIntro } from '@/lib/content'
import flags from '@/lib/flags'
import SectionHeading from '@/components/ui/SectionHeading'

const paises = ['Uruguay', 'Argentina', 'Brasil', 'Colombia']

/**
 * Una celda de la grilla: solo el logo.
 * Sin tarjeta, sin borde, sin sombra, sin nombre debajo.
 * La caja de altura fija (.client-cell) es lo que iguala la altura óptica de
 * todos los logos; la imagen se ajusta con object-contain, así que cada uno
 * conserva su proporción original.
 */
function ClientLogo({
  nombre,
  logo,
  width,
  height,
}: {
  nombre: string
  logo: string
  width: number
  height: number
}) {
  return (
    <li className="client-cell">
      <img
        src={`/media/clientes/${logo}.webp`}
        alt={nombre}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="client-logo"
      />
    </li>
  )
}

export default function Clientes() {
  return (
    <section id="clientes" className="cv-auto bg-white px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto">
        <SectionHeading
          label="Nuestra trayectoria"
          title="Nuestros Clientes"
          intro={clientesIntro}
        />

        {/* Grilla de logos: 6 columnas en desktop, 4 en tablet, 2 en mobile. */}
        <ul
          className="clients-grid reveal mt-20 lg:mt-24"
          aria-label="Logos de clientes de Grupo SIDI"
        >
          {clientes.map((cliente) => (
            <ClientLogo
              key={cliente.nombre}
              nombre={cliente.nombre}
              logo={cliente.logo}
              width={cliente.width}
              height={cliente.height}
            />
          ))}
        </ul>

        {/* Las descripciones de cada cliente se mantienen para lectores de
            pantalla y SEO, sin ocupar espacio en el diseño. */}
        <dl className="sr-only">
          {clientes.map((cliente) => (
            <div key={cliente.nombre}>
              <dt>{cliente.nombre}</dt>
              <dd>{cliente.texto}</dd>
            </div>
          ))}
        </dl>

        {/* Alianza regional */}
        <div className="reveal mt-24 border-t border-hairline pt-14 text-center">
          <h3 className="text-[11px] font-semibold uppercase tracking-label text-muted">
            Alianza
          </h3>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {flags.map((svg, i) => (
              <li key={paises[i]} className="flex flex-col items-center gap-3">
                <span
                  role="img"
                  aria-label={`Bandera de ${paises[i]}`}
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                <span className="text-xs font-medium text-graphite">{paises[i]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
