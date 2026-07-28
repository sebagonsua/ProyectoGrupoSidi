import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { site } from '@/lib/content'
import { metaKeywords, metaDescription } from '@/lib/seo'
import './globals.css'

// Una sola familia para todo el sitio: Inter. El registro "display" se logra
// con peso y tracking, no con una segunda tipografía — más limpio y más liviano.
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: metaDescription,
  keywords: metaKeywords,
  robots: 'index, all, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: site.title,
    description: metaDescription,
    siteName: 'Grupo SIDI',
    locale: 'es_UY',
    images: [{ url: '/media/og-image.jpg', width: 1200, height: 630, alt: 'Grupo SIDI — Soluciones Industriales de Impacto' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: metaDescription,
    images: ['/media/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/media/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/media/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/media/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/media/apple-touch-icon-sidi.png',
  },
  other: { language: 'spanish' },
}

export const viewport: Viewport = {
  themeColor: '#1E1E1E',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#organization`,
  name: 'Grupo SIDI',
  alternateName: 'Soluciones Industriales de Impacto',
  url: site.url,
  logo: `${site.url}/media/icon-512.png`,
  image: `${site.url}/media/og-image.jpg`,
  email: site.email,
  telephone: '+598 099007975',
  description: metaDescription,
  areaServed: { '@type': 'Country', name: 'Uruguay' },
  address: { '@type': 'PostalAddress', addressCountry: 'UY' },
  geo: { '@type': 'GeoCoordinates', latitude: -32.077153, longitude: -57.916154 },
  openingHours: 'Mo-Su 00:00-24:00',
  sameAs: [site.facebook, site.youtube],
}

// Flag para el reveal-on-scroll antes del primer paint: si no hay JS o el usuario
// prefiere menos movimiento, el contenido queda visible desde el inicio.
// La interactividad (menú, formulario, facades, observer) vive en /site.js.
const revealFlagScript = `if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-reveal');`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={inter.variable}
      style={
        {
          '--font-display': 'var(--font-sans)',
          '--font-body': 'var(--font-sans)',
        } as React.CSSProperties
      }
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: revealFlagScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <script defer src="/site.js" />
      </body>
    </html>
  )
}
