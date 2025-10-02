import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../lib/translations'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Intentar obtener el idioma del localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      return savedLanguage
    }
    
    // Detectar idioma del navegador
    const browserLanguage = navigator.language.toLowerCase()
    if (browserLanguage.startsWith('en')) {
      return 'en'
    }
    return 'es' // Por defecto español
  })

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
