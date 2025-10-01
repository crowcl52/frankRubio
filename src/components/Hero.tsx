import { motion } from 'framer-motion'
import SmartImage from './SmartImage'

export default function Hero() {
  return (
    <header className="relative w-full">
      <link
        rel="preload"
        as="image"
        href="/gallery/derived/1440/hero.jpg"
        imagesrcset="/gallery/derived/768/hero.jpg 768w, /gallery/derived/1024/hero.jpg 1024w, /gallery/derived/1440/hero.jpg 1440w, /gallery/derived/1920/hero.jpg 1920w"
        imagesizes="100vw"
        fetchpriority="high"
      />
      <div className="relative h-[80svh] overflow-hidden rounded-2xl container-px mt-6">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
          aria-hidden
        >
          <SmartImage
            baseName="hero"
            alt=""
            priority
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative z-10 h-full flex items-end">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Fotografía en Blanco y Negro
            </h1>
            <p className="mt-4 text-gray-600 text-lg sm:text-xl">
              Minimalismo, contraste y emoción. Sesiones profesionales para marcas y personas.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#contacto" className="rounded-2xl bg-black text-white px-6 py-3 shadow-subtle hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900">
                Reservar sesión
              </a>
              <a href="#portafolio" className="rounded-2xl border border-gray-900 px-6 py-3 hover:bg-gray-100">
                Ver portafolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
