import { contacto, site } from '@/lib/content'

// Server component: el envío a Formspree lo maneja /site.js (vanilla, sin React),
// igual que en el sitio en producción.
export default function ContactForm() {
  const inputClass =
    'w-full border border-hairline bg-white px-4 py-3.5 text-ink placeholder:text-muted transition-colors duration-300 focus:border-ink focus:outline-none focus:ring-0'

  return (
    <form
      id="contactForm"
      action={site.formspree}
      method="POST"
      data-msg-sending={contacto.msgEnviando}
      data-msg-ok={contacto.msgOk}
      data-msg-error={contacto.msgError}
      data-msg-conexion={contacto.msgConexion}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="names" className="mb-2 block text-[11px] font-semibold uppercase tracking-label text-muted">
            {contacto.labels.nombre}
          </label>
          <input type="text" id="names" name="nombre" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[11px] font-semibold uppercase tracking-label text-muted">
            {contacto.labels.correo}
          </label>
          <input type="email" id="email" name="correo" required className={inputClass} autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="telephone" className="mb-2 block text-[11px] font-semibold uppercase tracking-label text-muted">
          {contacto.labels.telefono}
        </label>
        <input type="tel" id="telephone" name="telefono" className={inputClass} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[11px] font-semibold uppercase tracking-label text-muted">
          {contacto.labels.mensaje}
        </label>
        <textarea id="message" name="mensaje" required rows={5} className={inputClass} />
      </div>

      <button
        type="submit"
        className="btn btn-solid w-full disabled:opacity-60 sm:w-auto"
      >
        {contacto.boton}
      </button>

      <p id="msg" aria-live="polite" className="min-h-6 text-sm text-steel"></p>
    </form>
  )
}
