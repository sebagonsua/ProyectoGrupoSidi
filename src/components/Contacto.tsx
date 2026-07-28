import { contacto, site } from '@/lib/content'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'
import { FacebookIcon, YoutubeIcon, WhatsAppIcon, MailIcon } from '@/components/icons'

export default function Contacto() {
  return (
    <section id="section-contacto" className="cv-auto bg-white px-6 py-24 lg:py-32">
      <div className="max-w-wrap mx-auto grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div>
          <SectionHeading
            label="Contacto"
            align="left"
            title={
              <>
                {contacto.titulo1}
                <span className="text-graphite">{contacto.titulo2}</span>
              </>
            }
          />

          <ul
            className="reveal mt-10 space-y-5 text-graphite"
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 transition-colors duration-300 hover:text-ink"
              >
                <WhatsAppIcon className="h-5 w-5 text-ink" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-4 transition-colors duration-300 hover:text-ink"
              >
                <MailIcon className="h-5 w-5 text-ink" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 pt-4">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Grupo SIDI"
                className="flex h-11 w-11 items-center justify-center border border-hairline text-graphite transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal de YouTube de Grupo SIDI"
                className="flex h-11 w-11 items-center justify-center border border-hairline text-graphite transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>

        <div
          className="reveal bg-mist p-8 sm:p-12"
          style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
