import React from 'react'

type SmartImageProps = {
  baseName: string
  alt: string
  priority?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
}

// This component expects image variants generated into public/gallery/derived/{width}/{basename}.{ext}
// and LQIP base64 at public/gallery/derived/lqip/{basename}.txt
export default function SmartImage({ baseName, alt, priority = false, width, height, sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw', className }: SmartImageProps) {
  const avifSrcSet = [480, 768, 1024, 1440, 1920]
    .map((w) => `/gallery/derived/${w}/${baseName}.avif ${w}w`).join(', ')
  const webpSrcSet = [480, 768, 1024, 1440, 1920]
    .map((w) => `/gallery/derived/${w}/${baseName}.webp ${w}w`).join(', ')
  const jpgSrcSet = [480, 768, 1024, 1440, 1920]
    .map((w) => `/gallery/derived/${w}/${baseName}.jpg ${w}w`).join(', ')

  const imgSrc = `/gallery/derived/1024/${baseName}.jpg`
  const lqipSrc = `/gallery/derived/lqip/${baseName}.txt`

  const [placeholder, setPlaceholder] = React.useState<string | null>(null)
  React.useEffect(() => {
    let cancelled = false
    fetch(lqipSrc)
      .then((r) => r.ok ? r.text() : '')
      .then((b64) => { if (!cancelled) setPlaceholder(b64 || null) })
      .catch(() => { /* ignore */ })
    return () => { cancelled = true }
  }, [lqipSrc])

  const img = (
    <img
      className={className}
      src={imgSrc}
      srcSet={jpgSrcSet}
      sizes={sizes}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={placeholder ? { backgroundImage: `url(${placeholder})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(12px)', transition: 'filter 400ms ease', } : undefined}
      onLoad={(e) => {
        // remove blur once real image loads
        (e.currentTarget as HTMLImageElement).style.filter = 'none'
        ;(e.currentTarget as HTMLImageElement).style.backgroundImage = 'none'
      }}
      alt={alt}
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
