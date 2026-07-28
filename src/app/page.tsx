import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Urgencias from '@/components/Urgencias'
import Nosotros from '@/components/Nosotros'
import Servicios from '@/components/Servicios'
import Portafolio from '@/components/Portafolio'
import Clientes from '@/components/Clientes'
import TrabajaConNosotros from '@/components/TrabajaConNosotros'
import Contacto from '@/components/Contacto'
import Ubicacion from '@/components/Ubicacion'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <Header />
      <WhatsAppButton />
      <main id="main">
        <Hero />
        <Urgencias />
        <Nosotros />
        <Servicios />
        <Portafolio />
        <Clientes />
        <TrabajaConNosotros />
        <Contacto />
        <Ubicacion />
      </main>
      <Footer />
    </>
  )
}
