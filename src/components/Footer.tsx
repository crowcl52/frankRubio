export default function Footer() {
  return (
    <footer className="container-px pb-10 pt-8 text-sm text-gray-600">
      <div className="flex flex-col sm:flex-row justify-between gap-2 border-t border-gray-200 pt-6">
        <p>© {new Date().getFullYear()} Fotógrafo. Todos los derechos reservados.</p>
        <nav className="flex gap-4">
          <a href="#portafolio" className="hover:text-black">Portafolio</a>
          <a href="#contacto" className="hover:text-black">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}
