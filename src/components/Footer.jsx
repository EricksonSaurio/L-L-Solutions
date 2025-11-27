import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tu Empresa</h3>
            <p className="text-slate-400">
              Soluciones de software innovadoras para empresas que piensan en grande.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Backend</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Consultoría</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition">Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
