export default function CTASection() {
  return (
    <section className="section-py container-px">
      <div className="rounded-2xl border border-gray-200 p-8 bg-white shadow-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Listo para crear algo en B&N?</h2>
          <p className="mt-2 text-gray-700">Reserva tu sesión hoy mismo.</p>
        </div>
        <a href="#contacto" className="rounded-2xl bg-black text-white px-6 py-3 hover:opacity-90">Reservar sesión</a>
      </div>
    </section>
  )
}
