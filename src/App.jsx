import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
