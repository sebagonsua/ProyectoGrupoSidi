import { urgencias } from '@/lib/content'
import { BoltIcon, GaugeIcon, PhoneVolumeIcon } from '@/components/icons'

const icons = [BoltIcon, GaugeIcon, PhoneVolumeIcon]

// Franja informativa plana, a continuación del hero.
export default function Urgencias() {
  return (
    <section className="border-b border-hairline bg-white">
      <h2 className="sr-only">Urgencias y presupuestos</h2>
      <div className="max-w-wrap mx-auto grid divide-y divide-hairline px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {urgencias.map((item, i) => {
          const Icon = icons[i]
          return (
            <div
              key={item.titulo}
              className="flex items-center gap-5 px-2 py-8 sm:justify-center sm:px-8"
            >
              <Icon className="h-6 w-6 shrink-0 text-ink" />
              <div>
                <h3 className="font-display text-base font-semibold tracking-display text-ink">
                  {item.titulo}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.texto}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
