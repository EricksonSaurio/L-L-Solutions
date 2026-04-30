import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      position: "CEO, TechStart",
      testimonial: "Excelente trabajo, entregaron el proyecto antes de tiempo y superó nuestras expectativas. El equipo es muy profesional y realmente entiende las necesidades del negocio, no solo la parte técnica.",
      featured: true,
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de IT, Innovatech",
      testimonial: "La calidad del código y la arquitectura propuesta fueron excepcionales. Definitivamente volveremos a trabajar con ellos.",
    },
    {
      name: "Ana Martínez",
      position: "Founder, StartupLab",
      testimonial: "Transformaron nuestra idea en una aplicación increíble. Su experiencia y dedicación hicieron la diferencia.",
    }
  ];

  const featured = testimonials.find(t => t.featured);
  const others = testimonials.filter(t => !t.featured);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-4">
            <span className="w-8 h-px bg-emerald-600 dark:bg-emerald-400" />
            Clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lo que dicen de nosotros
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Featured testimonial - takes 3 columns */}
          {featured && (
            <motion.div
              className="lg:col-span-3 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 lg:p-12 relative"
              variants={fadeInUp}
            >
              <span className="text-8xl font-serif text-slate-200 dark:text-slate-800 leading-none select-none absolute top-6 left-8">&ldquo;</span>
              <div className="relative">
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-light">
                  {featured.testimonial}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{featured.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{featured.position}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Smaller testimonials - stacked in 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {others.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-1 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative"
                variants={fadeInUp}
              >
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{testimonial.position}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
