export type Language = 'es' | 'en'

export type LanguageType = Language

export interface Translations {
  // Navigation
  home: string
  portfolio: string
  services: string
  about: string
  contact: string
  
  // Hero section
  photographerName: string
  photographyStyle: string
  
  // Services section
  familyPackages: string
  soloPackages: string
  basic: string
  classic: string
  especial: string
  persons2to4: string
  persons5to10: string
  persons11plus: string
  sessionDuration: string
  basicDuration: string
  classicDuration: string
  especialDuration: string
  basicOutfit: string
  classicOutfit: string
  especialOutfit: string
  outfits: string
  editedImages: string
  basicEditedImages: string
  classicEditedImages: string
  especialEditedImages: string
  onlineGallery: string
  bookSession: string
  
  // Planes familiares personalizados
  familyBasicTitle: string
  familyBasic1: string
  familyBasic2: string
  familyBasic3: string
  familyBasic4: string
  familyClassicTitle: string
  familyClassic1: string
  familyClassic2: string
  familyClassic3: string
  familyClassic4: string
  familySpecialTitle: string
  familySpecial1: string
  familySpecial2: string
  familySpecial3: string
  familySpecial4: string

  // Planes básicos personalizados
  basicPlanTitle: string
  basicPlan1: string
  basicPlan2: string
  basicPlan3: string
  basicPlan4: string
  classicPlanTitle: string
  classicPlan1: string
  classicPlan2: string
  classicPlan3: string
  classicPlan4: string
  specialPlanTitle: string
  specialPlan1: string
  specialPlan2: string
  specialPlan3: string
  specialPlan4: string

  // Gallery section
  portfolioTitle: string
  
  // About section
  aboutTitle: string
  aboutDescription: string
  aboutUsTitle: string
  aboutUsDescription: string
  
  // Contact section
  contactTitle: string
  contactDescription: string
  name: string
  email: string
  phone: string
  phoneOptional: string
  sessionType: string
  tentativeDate: string
  message: string
  send: string
  sending: string
  thanks: string
  checkFields: string
  portrait: string
  wedding: string
  editorial: string
  landscape: string
  others: string
  
  // CTA section
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
  
  // Footer
  allRightsReserved: string
}

export const translations: Record<Language, Translations> = {
  es: {
    // Navigation
    home: 'Inicio',
    portfolio: 'Portafolio',
    services: 'Servicios',
    about: 'Acerca de',
    contact: 'Contacto',
    
    // Hero section
    photographerName: 'Frank Rubio',
    photographyStyle: 'Fotografía en Blanco y Negro',
    
    // Services section
    familyPackages: 'Paquetes Familiares',
    familyBasicTitle: 'Básico',
    familyBasic1: '30 minutos de sesión,',
    familyBasic2: '1 outfit',
    familyBasic3: '10-15 imágenes editadas',
    familyBasic4: 'en nuestra galería en línea, listas para imprimir.',
    familyClassicTitle: 'Clásico',
    familyClassic1: '60 minutos de sesión,',
    familyClassic2: '1-2 outfit',
    familyClassic3: '20-25 imágenes editadas',
    familyClassic4: 'en nuestra galería en línea, listas para imprimir.',
    familySpecialTitle: 'Especial',
    familySpecial1: '2 horas de sesión,',
    familySpecial2: '1-4 outfit',
    familySpecial3: '30-35 imágenes editadas',
    familySpecial4: 'en nuestra galería en línea, listas para imprimir.',
    soloPackages: 'Paquetes Individuales',
    basic: 'Básico',
    classic: 'Clásico',
    especial: 'Especial',
    basicPlanTitle: 'Básico',
    basicPlan1: '30 minutos de sesión,',
    basicPlan2: '1 outfit',
    basicPlan3: '10-15 imágenes editadas',
    basicPlan4: 'en nuestra galería en línea, listas para imprimir.',
    classicPlanTitle: 'Clásico',
    classicPlan1: '60 minutos de sesión,',
    classicPlan2: '1-2 outfit',
    classicPlan3: '20-25 imágenes editadas',
    classicPlan4: 'en nuestra galería en línea, listas para imprimir.',
    specialPlanTitle: 'Especial',
    specialPlan1: '1.5 horas de sesión',
    specialPlan2: '1-4 outfit',
    specialPlan3: '30-35 imágenes editadas',
    specialPlan4: 'en nuestra galería en línea, listas para imprimir.',
    persons2to4: '2-4 personas',
    persons5to10: '5-10 personas',
    persons11plus: '11+ personas',
    sessionDuration: '60 minutos de sesión',
    basicDuration: '30 minutos de sesión',
    classicDuration: '60 minutos de sesión',
    especialDuration: '2 horas de sesión',
    outfits: '1-2 outfit',
    basicOutfit: '1 outfit',
    classicOutfit: '1-2 outfit',
    especialOutfit: '1-4 outfit',
    editedImages: '20-25 imágenes editadas',
    basicEditedImages: '10-15 imágenes editadas',
    classicEditedImages: '20-25 imágenes editadas',
    especialEditedImages: '30-35 imágenes editadas',
    onlineGallery: 'En nuestra galería en línea, listas para imprimir',
    bookSession: 'Reservar Sesión',
    
    // Gallery section
    portfolioTitle: 'Portafolio',
    
    // About section
    aboutTitle: 'Sobre mí',
    aboutDescription: 'Proveniente de Jalisco, México. Tengo 28 años de edad, Me gusta que me digan Frank y soy un apasionado de la fotografía y la moda. La fotografía es una de mis más grandes pasiones, la ejerzo tanto por trabajo como por gusto.',
    aboutUsTitle: 'Sobre nosotros',
    aboutUsDescription: 'Somos una empresa dedicada a la fotografía de Moda, producto, sociales y familiares. Ofreciéndote un servicio profesional con la finalidad de satisfacer tus necesidades y tus gustos más exigentes. Nos encanta capturar los momentos más importantes para ustedes con la finalidad de que sean recordados para siempre.',
    
    // Contact section
    contactTitle: 'Contacto',
    contactDescription: '¿Listo para tu sesión? Contáctame para más información.',
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    phoneOptional: 'Teléfono (opcional)',
    sessionType: 'Tipo de sesión',
    tentativeDate: 'Fecha tentativa',
    message: 'Mensaje',
    send: 'Enviar',
    sending: 'Enviando…',
    thanks: 'Gracias, te responderé pronto.',
    checkFields: 'Revisa nombre y email.',
    portrait: 'Retrato',
    wedding: 'Boda',
    editorial: 'Editorial',
    landscape: 'Paisaje',
    others: 'Otros',
    
    // CTA section
    ctaTitle: '¿Listo para crear algo?',
    ctaDescription: 'Reserva tu sesión hoy mismo con CK Photography.',
    ctaButton: 'Reservar sesión',
    
    // Footer
    allRightsReserved: 'Todos los derechos reservados',
  },
  
  en: {
    // Navigation
    home: 'Home',
    portfolio: 'Portfolio',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero section
    photographerName: 'Frank Rubio',
    photographyStyle: 'Black and White Photography',
    
    // Services section
    familyPackages: 'Family Packages',
    familyBasicTitle: 'Basic',
    familyBasic1: '30 minutes session,',
    familyBasic2: '1 outfit',
    familyBasic3: '10-15 edited images',
    familyBasic4: 'in our online gallery, ready to print.',
    familyClassicTitle: 'Classic',
    familyClassic1: '60 minutes session,',
    familyClassic2: '1-2 outfit',
    familyClassic3: '20-25 edited images',
    familyClassic4: 'in our online gallery, ready to print.',
    familySpecialTitle: 'Special',
    familySpecial1: '2 hours session,',
    familySpecial2: '1-4 outfit',
    familySpecial3: '30-35 edited images',
    familySpecial4: 'in our online gallery, ready to print.',
    soloPackages: 'Individual Session Packages',
    basic: 'Basic',
    classic: 'Classic',
    especial: 'Special',
    basicPlanTitle: 'Basic',
    basicPlan1: '30 minutes session,',
    basicPlan2: '1 outfit',
    basicPlan3: '10-15 edited images',
    basicPlan4: 'in our online gallery, ready to print.',
    classicPlanTitle: 'Classic',
    classicPlan1: '60 minutes session,',
    classicPlan2: '1-2 outfit',
    classicPlan3: '20-25 edited images',
    classicPlan4: 'in our online gallery, ready to print.',
    specialPlanTitle: 'Special',
    specialPlan1: '1.5 hours session',
    specialPlan2: '1-4 outfit',
    specialPlan3: '30-35 edited images',
    specialPlan4: 'in our online gallery, ready to print.',
    basicDuration: '30 minutes session',
    classicDuration: '60 minutes session',
    especialDuration: '2 hours session',
    basicOutfit: '1 outfit',
    classicOutfit: '1-2 outfit',
    especialOutfit: '1-4 outfit',
    editedImages: '20-25 edited images',
    basicEditedImages: '10-15 edited images',
    classicEditedImages: '20-25 edited images',
    especialEditedImages: '30-35 edited images',
    persons2to4: '2-4 people',
    persons5to10: '5-10 people',
    persons11plus: '11+ people',
    sessionDuration: '60 minutes session',
    outfits: '1-2 outfit',
    onlineGallery: 'In our online gallery, ready to print',
    bookSession: 'Book Session',
    
    // Gallery section
    portfolioTitle: 'Portfolio',
    
    // About section
    aboutTitle: 'About Me',
    aboutDescription: 'Originally from Jalisco, Mexico. I am 28 years old, I like to be called Frank and I am passionate about photography and fashion. Photography is one of my greatest passions, I practice it both for work and pleasure.',
    aboutUsTitle: 'About Us',
    aboutUsDescription: 'We are a company dedicated to Fashion, product, social and family photography. Offering you a professional service with the purpose of satisfying your needs and your most demanding tastes. We love to capture the most important moments for you so that they are remembered forever.',
    
    // Contact section
    contactTitle: 'Contact',
    contactDescription: 'Ready for your session? Contact me for more information.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    phoneOptional: 'Phone (optional)',
    sessionType: 'Session type',
    tentativeDate: 'Tentative date',
    message: 'Message',
    send: 'Send',
    sending: 'Sending…',
    thanks: 'Thanks, I will respond soon.',
    checkFields: 'Please check name and email.',
    portrait: 'Portrait',
    wedding: 'Wedding',
    editorial: 'Editorial',
    landscape: 'Landscape',
    others: 'Others',
    
    // CTA section
    ctaTitle: 'Ready to create something?',
    ctaDescription: 'Book your session today with CK Photography.',
    ctaButton: 'Book Session',
    
    // Footer
    allRightsReserved: 'All rights reserved',
  },
}
