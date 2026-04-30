import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
          {/* Left: Brand */}
          <div className="max-w-xs">
            <div className="inline-block mb-4">
              <img src={logo} alt="ETLC Systems" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Software a medida para empresas que necesitan soluciones reales, no templates.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">Servicios</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Desarrollo Web</a></li>
                <li><a href="#services" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Apps Móviles</a></li>
                <li><a href="#services" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Backend & APIs</a></li>
                <li><a href="#services" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#portfolio" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Proyectos</a></li>
                <li><a href="#process" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Proceso</a></li>
                <li><a href="#installations" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Instalaciones</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">Social</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800/50">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            &copy; 2026 ETLC Systems. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors flex items-center gap-1.5"
          >
            Volver arriba <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
