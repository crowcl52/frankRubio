import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageSelector from './components/LanguageSelector'
import WhatsAppButton from './components/WhatsAppButton'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <LanguageSelector />
      <WhatsAppButton />
      <App />
    </LanguageProvider>
  </StrictMode>,
)
