import { useMemo, useState } from 'react'
import { galleryItems } from '../lib/gallery-data'
import SmartImage from './SmartImage'
import Lightbox from './Lightbox'
import { motion } from 'framer-motion'

const categories = ['todos', 'retratos', 'bodas', 'editorial', 'paisaje', 'otros'] as const

type Category = typeof categories[number]

export default function Gallery() {
  const [filter, setFilter] = useState<Category>('todos')
  const items = useMemo(() => (
    filter === 'todos' ? galleryItems : galleryItems.filter(g => g.category === filter)
  ), [filter])

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => { setIndex(i); setOpen(true) }
  const onPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const onNext = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section id="portafolio" className="section-py container-px">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Portafolio</h2>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-2xl border px-3 py-1 text-sm ${filter === c ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-gray-100'}`}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.ul
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {items.map((item, i) => (
          <li key={item.id} className="group relative">
            <button className="block w-full" onClick={() => openAt(i)} aria-label={`Ver imagen: ${item.alt}`}>
              <SmartImage baseName={item.baseName} alt={item.alt} sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw" className="h-40 sm:h-48 lg:h-56 w-full object-cover rounded-2xl shadow-subtle" />
            </button>
          </li>
        ))}
      </motion.ul>

      <Lightbox
        isOpen={open}
        onClose={() => setOpen(false)}
        currentIndex={index}
        maxIndex={items.length - 1}
        onPrev={onPrev}
        onNext={onNext}
        renderContent={(i) => {
          const it = items[i]
          return (
            <SmartImage
              baseName={it.baseName}
              alt={it.alt}
              sizes="90vw"
              className="max-h-[80svh] w-auto h-auto rounded-2xl shadow-subtle"
            />
          )
        }}
      />
    </section>
  )
}
