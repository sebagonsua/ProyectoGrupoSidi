import { site, nav } from '@/lib/content'
import { MenuIcon, CloseIcon } from '@/components/icons'

// Server component: el scrollspy y el menú móvil los maneja /site.js (vanilla, sin React).
export default function Header() {
  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-40">
      {/* Barra blanca sobria, siempre visible */}
      <div className="header-bar relative border-b border-hairline bg-white">
        <nav
          className="max-w-wrap mx-auto flex h-20 items-center justify-between px-6"
          aria-label="Navegación principal"
        >
          <a
            href="#inicio"
            className="flex items-center gap-3 font-display text-lg font-semibold tracking-display text-ink"
          >
            <img src="/media/logo-sidi-96.webp" alt="" width={96} height={96} className="h-9 w-9" />
            Grupo SIDI
          </a>

          <ul className="hidden items-center gap-9 text-[12px] font-medium uppercase tracking-[0.1em] lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            id="nav-toggle"
            className="nav-toggle -mr-2 p-2 text-ink lg:hidden"
            aria-expanded="false"
            aria-controls="menu-movil"
            aria-label="Abrir menú de navegación"
          >
            <MenuIcon className="icon-menu h-5 w-5" />
            <CloseIcon className="icon-close h-5 w-5" />
          </button>
        </nav>

        {/* Menú móvil */}
        <ul
          id="menu-movil"
          className="absolute inset-x-0 top-full border-b border-hairline bg-white px-6 py-4 lg:hidden"
        >
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="menu-movil-link block border-b border-hairline py-3.5 text-[13px] font-medium uppercase tracking-[0.08em] text-graphite transition-colors last:border-b-0 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4 text-xs text-muted">
            {site.phoneDisplay} · {site.email}
          </li>
        </ul>
      </div>
    </header>
  )
}
