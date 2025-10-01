import { testimonials } from '../lib/testimonials'

export default function Testimonials() {
  return (
    <section className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Testimonios</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-subtle">
            <p className="text-gray-900">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-gray-700">— {t.name}{t.role ? `, ${t.role}` : ''}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
