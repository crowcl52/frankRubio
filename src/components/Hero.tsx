import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import logo from '../assets/img/logo.png'
import heroBanner from '../assets/img/hero_baner.avif'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])

  // Función para scroll automático hacia la galería
  const scrollToGallery = () => {
    const galleryElement = document.querySelector('[data-section="gallery"]')
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Manejar el scroll del mouse
  useEffect(() => {
    const handleWheel = (e: Event) => {
      e.preventDefault()
      scrollToGallery()
    }

    // Agregar listener solo cuando el hero esté visible
    const heroElement = document.querySelector('[data-section="hero"]')
    if (heroElement) {
      heroElement.addEventListener('wheel', handleWheel, { passive: false })
      
      return () => {
        heroElement.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <header className="relative w-full" data-section="hero">
      <div className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y }}
          initial={{ scale: 1.1, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 will-change-transform"
          aria-hidden
        >
          <img
            src={heroBanner}
            alt=""
            className="w-full h-full object-cover object-center sm:scale-110"
            loading="eager"
            decoding="sync"
          />
        </motion.div>
        
        {/* Logo y redes sociales centrados */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="cursor-pointer mb-8"
            onClick={scrollToGallery}
          >
            <img 
              src={logo} 
              alt="Frank Rubio Photography" 
              className="mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-contain filter invert hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Iconos de redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex gap-6"
          >
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/ckpgdl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Facebook"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/soyfrankphoto/?igsh=NTc4MTIwNjQ2YQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.988 11.987 6.62 0 11.987-5.366 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 1.297c-2.026 0-3.675 1.649-3.675 3.675s1.649 3.675 3.675 3.675 3.675-1.649 3.675-3.675-1.649-3.675-3.675-3.675z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Indicador de scroll - solo visible en desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          onClick={scrollToGallery}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll para continuar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
