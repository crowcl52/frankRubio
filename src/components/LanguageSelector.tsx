import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200">
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'es'
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 hover:text-black hover:bg-gray-100'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 hover:text-black hover:bg-gray-100'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  )
}
