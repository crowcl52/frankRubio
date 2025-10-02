import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

export default function PhotographerCard() {
  const [flipped, setFlipped] = useState(false)
  const rotateY = useMotionValue(0)
  const rotate = useTransform(rotateY, (v) => `rotateY(${v}deg)`)

  const toggle = () => setFlipped((f) => !f)

  return (
    <section className="section-py container-px">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Sobre mí</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <div
            className="relative [perspective:1000px]"
          >
            <motion.button
              aria-label="Girar tarjeta"
              onClick={toggle}
              onFocus={toggle}
              onBlur={() => setFlipped(false)}
              className="block w-full h-80 sm:h-96 rounded-2xl shadow-subtle overflow-hidden bg-black"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Front */}
              <img
                src="/photographer/photoA.jpg"
                alt="Retrato del fotógrafo"
                className="absolute inset-0 w-full h-full object-cover [backface-visibility:hidden]"
              />
              {/* Back */}
              <img
                src="/photographer/photoB.jpg"
                alt="Trabajo en estudio"
                className="absolute inset-0 w-full h-full object-cover [transform:rotateY(180deg)] [backface-visibility:hidden]"
              />
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-lg text-gray-700">
            Soy un fotógrafo y artista especializado en blanco y negro. Mi enfoque es
            minimalista y busca resaltar la forma, la luz y el gesto. Trabajo con
            marcas y personas que valoran la estética sobria y el detalle.
          </p>
        </div>
      </div>
    </section>
  )
}
