import { User, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewportOptions } from '../utils/animations';

function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      position: "CEO, TechStart",
      testimonial: "Excelente trabajo, entregaron el proyecto antes de tiempo y superó nuestras expectativas. El equipo es muy profesional."
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de IT, Innovatech",
      testimonial: "La calidad del código y la arquitectura propuesta fueron excepcionales. Definitivamente volveremos a trabajar con ellos."
    },
    {
      name: "Ana Martínez",
      position: "Founder, StartupLab",
      testimonial: "Transformaron nuestra idea en una aplicación increíble. Su experiencia y dedicación hicieron la diferencia."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Testimonios reales de empresas que confiaron en nosotros
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-lg hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-500 transition"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
