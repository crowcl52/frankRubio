import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Simple client-side validation
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }

    setStatus('sending')
    await new Promise((r) => setTimeout(r, 700))
    setStatus('sent')
    form.reset()
  }

  return (
    <section id="contacto" className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contacto</h2>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Teléfono (opcional)</label>
          <input id="phone" name="phone" className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium">Tipo de sesión</label>
          <select id="type" name="type" className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2">
            <option>Retrato</option>
            <option>Boda</option>
            <option>Editorial</option>
            <option>Paisaje</option>
            <option>Otros</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">Fecha tentativa</label>
          <input id="date" name="date" type="date" className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2"></textarea>
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="rounded-2xl bg-black text-white px-6 py-3 hover:opacity-90 disabled:opacity-50" disabled={status==='sending'}>
            {status==='sending' ? 'Enviando…' : 'Enviar'}
          </button>
          {status==='error' && <p className="text-sm text-gray-700">Revisa nombre y email.</p>}
          {status==='sent' && <p className="text-sm text-gray-700">Gracias, te responderé pronto.</p>}
        </div>
      </form>
    </section>
  )
}
