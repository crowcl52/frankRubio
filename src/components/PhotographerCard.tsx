import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../lib/translations'

// Import profile images
import profileA from '../assets/img/profile.jpeg'
import profileB from '../assets/img/profile_2.jpeg'

export default function PhotographerCard() {
  const { t, language } = useLanguage()
  const currentTranslations = translations[language]
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  })

  // Transformar el progreso de scroll para cambiar la opacidad de las imágenes
  const profileOpacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0])
  const profile2Opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section ref={ref} className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 italic">{t.aboutTitle}</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl shadow-subtle overflow-hidden bg-black h-96 sm:h-[28rem]">
            {/* Primera imagen - se desvanece al hacer scroll */}
            <motion.img
              src={profileA}
              alt="Retrato del fotógrafo"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ opacity: profileOpacity }}
            />
            {/* Segunda imagen - aparece al hacer scroll */}
            <motion.img
              src={profileB}
              alt="Trabajo en estudio"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ opacity: profile2Opacity }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 italic">{t.aboutTitle}</h3>
            <p className="text-lg text-gray-700">
              {t.aboutDescription}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 italic">{currentTranslations.aboutUsTitle}</h3>
            <p className="text-lg text-gray-700">
              {currentTranslations.aboutUsDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
