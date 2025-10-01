import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import PhotographerCard from './components/PhotographerCard'
import CTASection from './components/CTASection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Gallery />
      <Pricing />
      <Process />
      <Testimonials />
      <PhotographerCard />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
