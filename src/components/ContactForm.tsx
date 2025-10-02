import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Simple client-side validation
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const sessionType = String(data.get('type') || '').trim()
    const tentativeDate = String(data.get('date') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      // Crear el contenido del email
      const emailContent = `
Nueva consulta desde CK Photography

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Tipo de sesión: ${sessionType || 'No especificado'}
Fecha tentativa: ${tentativeDate || 'No especificada'}

Mensaje:
${message || 'Sin mensaje adicional'}

---
Enviado desde el sitio web de CK Photography
      `.trim()

      // Usar mailto para enviar el correo
      const subject = encodeURIComponent(`Nueva consulta de ${name} - CK Photography`)
      const body = encodeURIComponent(emailContent)
      const mailtoLink = `mailto:Soyfrankcisco19@gmail.com?subject=${subject}&body=${body}`
      
      // Abrir el cliente de correo
      window.open(mailtoLink, '_blank')
      
      setStatus('sent')
      form.reset()
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 italic">{t.contactTitle}</h2>
      <p className="text-lg text-gray-700 mb-8">{t.contactDescription}</p>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">{t.name}</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">{t.email}</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">{t.phoneOptional}</label>
          <input id="phone" name="phone" className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium">{t.sessionType}</label>
          <select id="type" name="type" className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2">
            <option value="">{t.sessionType}</option>
            <option value={t.portrait}>{t.portrait}</option>
            <option value={t.wedding}>{t.wedding}</option>
            <option value={t.editorial}>{t.editorial}</option>
            <option value={t.landscape}>{t.landscape}</option>
            <option value={t.others}>{t.others}</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">{t.tentativeDate}</label>
          <input id="date" name="date" type="date" className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">{t.message}</label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-2xl border border-gray-300 px-3 py-2"></textarea>
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="rounded-2xl bg-black text-white px-6 py-3 hover:opacity-90 disabled:opacity-50" disabled={status==='sending'}>
            {status==='sending' ? t.sending : t.send}
          </button>
          {status==='error' && <p className="text-sm text-red-600">{t.checkFields}</p>}
          {status==='sent' && <p className="text-sm text-green-600">{t.thanks}</p>}
        </div>
      </form>
    </section>
  )
}
