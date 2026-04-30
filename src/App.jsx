import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Installations from './components/Installations'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Installations />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
