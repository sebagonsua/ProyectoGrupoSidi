import type { Config } from 'tailwindcss'

/**
 * Sistema de diseño monocromático — estética corporativa minimalista.
 *
 * Paleta principal (única fuente de verdad):
 *   #FFFFFF  blanco      superficies base
 *   #F5F5F5  mist        superficies alternas / inputs
 *   #4B4B4B  graphite    texto secundario
 *   #1E1E1E  ink         texto principal / superficies oscuras
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // — Superficies oscuras —
        ink: { DEFAULT: '#1E1E1E', 2: '#161616' },
        panel: '#262626',

        // — Superficies claras —
        mist: '#F5F5F5',

        // — Texto —
        graphite: '#4B4B4B', // secundario sobre claro
        steel: '#4B4B4B', // alias semántico
        muted: '#767676', // terciario sobre claro (contraste AA sobre blanco)
        dim: '#B4B4B4', // secundario sobre oscuro

        // — Bordes —
        line: 'rgba(255,255,255,0.14)', // sobre oscuro
        hairline: '#E4E4E4', // sobre claro
      },
      fontFamily: {
        // Una sola familia (Inter) en dos registros: display usa tracking cerrado.
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '78rem',
      },
      letterSpacing: {
        display: '-0.025em',
        label: '0.22em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        header: '0 1px 0 rgba(30,30,30,0.08), 0 10px 30px -22px rgba(30,30,30,0.45)',
        soft: '0 18px 40px -28px rgba(30,30,30,0.35)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}

export default config
