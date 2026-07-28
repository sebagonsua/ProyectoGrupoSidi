import { site, nav } from '@/lib/content'
import { FacebookIcon, YoutubeIcon, WhatsAppIcon, MailIcon } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="cv-auto bg-ink">
      <div className="max-w-wrap mx-auto grid gap-14 px-6 py-20 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-3 font-display text-lg font-semibold tracking-display text-white">
            <img src="/media/logo-sidi-96.webp" alt="" width={96} height={96} className="h-10 w-10" />
            Grupo SIDI
          </p>
          <p className="mt-6 text-sm font-light leading-relaxed text-dim">
            Soluciones Industriales de Impacto.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className="text-[11px] font-semibold uppercase tracking-label text-white">
            Secciones
          </h2>
          <ul className="mt-7 grid grid-cols-2 gap-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-light text-dim transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-label text-white">Contacto</h2>
          <ul className="mt-7 space-y-4 text-sm text-dim">
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-light transition-colors duration-300 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 font-light transition-colors duration-300 hover:text-white"
              >
                <MailIcon className="h-4 w-4" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 pt-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Grupo SIDI"
                className="flex h-10 w-10 items-center justify-center border border-line transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal de YouTube de Grupo SIDI"
                className="flex h-10 w-10 items-center justify-center border border-line transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="max-w-wrap mx-auto px-6 py-6 text-center text-xs font-light text-dim">
          {site.credit}
        </p>
      </div>
    </footer>
  )
}
