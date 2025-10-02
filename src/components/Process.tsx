export default function Process() {
  const steps = [
    { title: 'Consulta', desc: 'Definimos objetivos y estilo.', icon: '◎' },
    { title: 'Sesión', desc: 'Dirección serena y precisa.', icon: '◇' },
    { title: 'Edición', desc: 'Blanco y negro con carácter.', icon: '▣' },
    { title: 'Entrega', desc: 'Galería privada y selección.', icon: '▭' },
  ]
  return (
    <section className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Proceso</h2>
      <ol className="grid gap-6 sm:grid-cols-4">
        {steps.map((s) => (
          <li key={s.title} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-subtle">
            <div className="text-3xl" aria-hidden>{s.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-700">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
