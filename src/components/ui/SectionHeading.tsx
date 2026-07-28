type Align = 'left' | 'center'

type Props = {
  /** Etiqueta pequeña sobre el título (kicker). */
  label?: string
  /** Título de la sección. */
  title: React.ReactNode
  /** Bajada opcional. */
  intro?: React.ReactNode
  align?: Align
  /** Invierte los colores para usar sobre fondo oscuro. */
  invert?: boolean
  className?: string
}

/**
 * Encabezado de sección reutilizable.
 * Un único registro tipográfico para todo el sitio: etiqueta en versalitas,
 * título grande de peso alto y tracking cerrado, y una regla fina de 2.5rem.
 */
export default function SectionHeading({
  label,
  title,
  intro,
  align = 'center',
  invert = false,
  className = '',
}: Props) {
  const centered = align === 'center'

  return (
    <div
      className={[
        'reveal',
        centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl text-left',
        className,
      ].join(' ')}
    >
      {label && (
        <p
          className={[
            'text-[11px] font-semibold uppercase tracking-label',
            invert ? 'text-dim' : 'text-muted',
          ].join(' ')}
        >
          {label}
        </p>
      )}

      <h2
        className={[
          'font-display text-4xl font-semibold leading-[1.08] tracking-display sm:text-5xl',
          label ? 'mt-4' : '',
          invert ? 'text-white' : 'text-ink',
        ].join(' ')}
      >
        {title}
      </h2>

      <span
        className={[
          'mt-7 block h-px w-10',
          centered ? 'mx-auto' : '',
          invert ? 'bg-white/40' : 'bg-ink',
        ].join(' ')}
        aria-hidden="true"
      />

      {intro && (
        <p
          className={[
            'mt-7 text-base leading-relaxed sm:text-lg',
            invert ? 'text-dim' : 'text-graphite',
          ].join(' ')}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
