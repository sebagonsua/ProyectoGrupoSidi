import { PlayIcon } from '@/components/icons'

/**
 * Facade del video: solo una imagen liviana hasta que el usuario hace click.
 * El click lo maneja /site.js, que recién ahí inyecta el iframe de YouTube.
 */
export default function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  return (
    <button
      type="button"
      className="js-embed group relative block aspect-video w-full overflow-hidden bg-mist"
      data-embed={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
      data-title={title}
      aria-label={`Reproducir video: ${title}`}
    >
      <picture>
        <source
          type="image/avif"
          srcSet="/media/video-portafolio-480.avif 480w, /media/video-portafolio-960.avif 960w"
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <source
          type="image/webp"
          srcSet="/media/video-portafolio-480.webp 480w, /media/video-portafolio-960.webp 960w"
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <img
          src="/media/video-portafolio-960.webp"
          alt=""
          width={960}
          height={540}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </picture>
      <span
        className="absolute inset-0 bg-ink/45 transition-colors duration-300 group-hover:bg-ink/30"
        aria-hidden="true"
      />
      <span
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-ink transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        aria-hidden="true"
      >
        <PlayIcon className="ml-1 h-6 w-6" />
      </span>
    </button>
  )
}
