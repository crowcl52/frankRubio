import { useState } from 'react'
import { galleryItems } from '../lib/gallery-data'
import SmartImage from './SmartImage'
import Lightbox from './Lightbox'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()
  const items = galleryItems

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => { setIndex(i); setOpen(true) }
  const onPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const onNext = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section id="portafolio" data-section="gallery" className="section-py container-px">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold italic">{t.portfolioTitle}</h2>
      </div>

      <motion.div
        layout
        className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="break-inside-avoid mb-4 group"
          >
            <button 
              className="block w-full" 
              onClick={() => openAt(i)} 
              aria-label={`Ver imagen: ${item.alt}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-subtle hover:shadow-xl transition-all duration-500">
                <SmartImage 
                  baseName={item.baseName} 
                  alt={item.alt} 
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" 
                  className="w-full h-auto object-cover" 
                  enableHoverEffects={true}
                />
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        isOpen={open}
        onClose={() => setOpen(false)}
        currentIndex={index}
        maxIndex={items.length - 1}
        onPrev={onPrev}
        onNext={onNext}
        renderContent={(i) => {
          const it = items[i]
          return (
            <SmartImage
              baseName={it.baseName}
              alt={it.alt}
              sizes="90vw"
              className="max-h-[80svh] w-auto h-auto rounded-2xl shadow-subtle"
            />
          )
        }}
      />
    </section>
  )
}
