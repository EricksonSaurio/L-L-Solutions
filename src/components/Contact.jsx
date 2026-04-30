import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInLeft, fadeInRight, viewportOptions } from '../utils/animations';

const WEB3FORMS_KEY = '6d231cc0-29c6-4ca8-b906-f447107e35ca';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo mensaje de ${formData.name} desde ETLC Systems`,
          from_name: 'ETLC Systems Web',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isSending = status === 'sending';

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInLeft}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="w-8 h-px bg-emerald-600 dark:bg-emerald-400" />
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Hablemos de
              <br />tu proyecto
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-md">
              Cuéntanos qué necesitas. Te respondemos en menos de 24 horas con una evaluación honesta de cómo podemos ayudarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-slate-900 dark:text-white text-sm">systemsetlc@gmail.com</div>
                </div>
              </div>
              <a
                href="https://wa.me/50240338333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp · Línea 1</div>
                  <div className="text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">+502 4033 8333</div>
                </div>
              </a>
              <a
                href="https://wa.me/50242541992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp · Línea 2</div>
                  <div className="text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">+502 4254 1992</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Ubicación</div>
                  <div className="text-slate-900 dark:text-white text-sm">Guatemala, Guatemala</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors outline-none"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors outline-none"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors outline-none resize-none"
                placeholder="¿Qué necesitas? ¿Cuál es el problema que quieres resolver?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="group w-full flex items-center justify-center gap-2 bg-emerald-500 text-white dark:text-slate-950 px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-emerald-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>¡Mensaje enviado! Te responderemos pronto.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
