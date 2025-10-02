import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type LightboxProps = {
  isOpen: boolean
  onClose: () => void
  currentIndex: number
  maxIndex: number
  onPrev: () => void
  onNext: () => void
  renderContent: (index: number) => React.ReactNode
}

export default function Lightbox({ isOpen, onClose, currentIndex, maxIndex, onPrev, onNext, renderContent }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imágenes"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button aria-label="Cerrar" onClick={onClose} className="absolute top-4 right-4 text-white/90 hover:text-white rounded-2xl border border-white/40 px-3 py-1">Esc</button>
          <button aria-label="Anterior" onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white">←</button>
          <button aria-label="Siguiente" onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white">→</button>
          <div className="max-w-6xl w-full flex items-center justify-center">
            {renderContent(currentIndex)}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">{currentIndex + 1} / {maxIndex + 1}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
