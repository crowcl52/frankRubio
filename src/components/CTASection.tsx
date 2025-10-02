import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../lib/translations'
import crearAlgo from '../assets/img/crear_algo.jpe.jpg'

export default function CTASection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="section-py container-px">
      <div 
        className="relative rounded-2xl overflow-hidden shadow-subtle h-96 sm:h-[28rem] lg:h-[32rem]"
        style={{
          backgroundImage: `url(${crearAlgo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Contenido centrado */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white italic mb-4">{t.ctaTitle}</h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">{t.ctaDescription}</p>
            <a href="#contacto" className="inline-block rounded-2xl bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg">
              {t.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
