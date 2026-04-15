import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinkClass = `transition font-medium ${scrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-slate-200 hover:text-white'}`;
  const iconBtnClass = `p-2 rounded-lg transition ${scrolled ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700' : 'bg-white/10 text-white hover:bg-white/20'}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-16 px-6 rounded-2xl transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
          {/* Logo */}
          <div className="flex items-center cursor-pointer hover:scale-105 transition-transform" onClick={() => scrollToSection('hero')}>
            <div className="px-4 py-2">
              <img src={logo} alt="ETLC Systems" className="h-12 w-auto object-contain transition-all drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className={navLinkClass}>
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} className={navLinkClass}>
              Proyectos
            </button>
            <button onClick={() => scrollToSection('process')} className={navLinkClass}>
              Proceso
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={navLinkClass}>
              Clientes
            </button>
            <button
              onClick={toggleDarkMode}
              className={iconBtnClass}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={iconBtnClass}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-white'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 px-6 glass rounded-2xl">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-left">
                Servicios
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('process')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-left">
                Proceso
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-left">
                Clientes
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
