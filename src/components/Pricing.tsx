import { plans } from '../lib/plans'

export default function Pricing() {
  return (
    <section className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Servicios</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border border-gray-200 p-6 shadow-subtle bg-white">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-bold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#contacto" className="inline-block rounded-2xl bg-black text-white px-4 py-2 hover:opacity-90">{p.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
