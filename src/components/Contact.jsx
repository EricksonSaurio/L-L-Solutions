import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from '../utils/animations';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estamos listos para convertir tu idea en realidad
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInLeft}
            className="glass-card p-10 rounded-3xl h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Información de contacto
            </h3>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div className="flex items-center group/contact" variants={fadeInUp}>
                <motion.div
                  className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover/contact:border-blue-500/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover/contact:text-blue-300" />
                </motion.div>
                <div>
                  <p className="font-semibold text-slate-400 text-sm mb-1">Email</p>
                  <p className="text-white font-medium">contacto@etlc-systems.com</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center group/contact" variants={fadeInUp}>
                <motion.div
                  className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover/contact:border-blue-500/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-5 h-5 text-blue-400 group-hover/contact:text-blue-300" />
                </motion.div>
                <div>
                  <p className="font-semibold text-slate-400 text-sm mb-1">Teléfono</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center group/contact" variants={fadeInUp}>
                <motion.div
                  className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover/contact:border-blue-500/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-5 h-5 text-blue-400 group-hover/contact:text-blue-300" />
                </motion.div>
                <div>
                  <p className="font-semibold text-slate-400 text-sm mb-1">Ubicación</p>
                  <p className="text-white font-medium">Ciudad, País</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-10 rounded-3xl space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <div>
              <label htmlFor="name" className="block text-slate-300 font-semibold mb-2 ml-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-300 font-semibold mb-2 ml-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-300 font-semibold mb-2 ml-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full relative overflow-hidden group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">Enviar mensaje</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
