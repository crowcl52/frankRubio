import React from 'react'

type SmartImageProps = {
  baseName: string
  alt: string
  priority?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  enableHoverEffects?: boolean
}

export default function SmartImage({ baseName, alt, priority = false, width, height, sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw', className, enableHoverEffects = false }: SmartImageProps) {
  // Generate srcsets for different formats and sizes
  const avifSrcSet = [480, 768, 1024, 1440, 1920]
    .map((w) => `/gallery/derived/${w}/${baseName}.avif ${w}w`).join(', ')
  const webpSrcSet = [480, 768, 1024, 1440, 1920]
    .map((w) => `/gallery/derived/${w}/${baseName}.webp ${w}w`).join(', ')
  const jpgSrcSet = [480, 768, 1024, 1440, 1920]
    .map((w) => `/gallery/derived/${w}/${baseName}.jpg ${w}w`).join(', ')

  const imgSrc = `/gallery/derived/1024/${baseName}.jpg`
  const lqipSrc = `/gallery/derived/lqip/${baseName}.txt`

  // LQIP (Low Quality Image Placeholder) state
  const [placeholder, setPlaceholder] = React.useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false
    fetch(lqipSrc)
      .then((r) => r.ok ? r.text() : '')
      .then((b64) => { if (!cancelled) setPlaceholder(b64 || null) })
      .catch(() => { /* ignore */ })
    return () => { cancelled = true }
  }, [lqipSrc])

  const handleLoad = () => {
    setImageLoaded(true)
  }

  const img = (
    <img
      className={`${className} ${enableHoverEffects ? 'transition-all duration-500 ease-out grayscale-0 md:grayscale hover:scale-105 md:hover:grayscale-0' : ''}`}
      src={imgSrc}
      srcSet={jpgSrcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={handleLoad}
      style={{
        backgroundImage: placeholder && !imageLoaded ? `url(${placeholder})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: placeholder && !imageLoaded ? 'blur(8px)' : undefined,
      }}
    />
  )

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      {img}
    </picture>
  )
}