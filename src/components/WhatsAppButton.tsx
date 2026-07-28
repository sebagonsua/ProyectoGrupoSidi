import { site } from '@/lib/content'
import { WhatsAppIcon } from '@/components/icons'

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Grupo SIDI por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
