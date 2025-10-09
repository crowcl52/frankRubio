import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="container-px pb-10 pt-8 text-sm text-gray-600">
      <div className="flex flex-col sm:flex-row justify-between gap-2 border-t border-gray-200 pt-6">
        <p>© {new Date().getFullYear()} {" "}
          <a href="https://edsanchezdev.netlify.app/es/" target='_blank' className="glitch" data-text="Eduardo Sánchez">
            Eduardo Sánchez 
          </a>
          {" "}
          {t.allRightsReserved}.</p>
        <nav className="flex gap-4">
          <a href="#portafolio" className="hover:text-black">{t.portfolio}</a>
          <a href="#contacto" className="hover:text-black">{t.contact}</a>
        </nav>
      </div>
    </footer>
  )
}
