import { MapPin, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const installations = [
  {
    client: "Temos Steak House",
    location: "Zona 3, Quetzaltenango",
    system: "Restaurante Pro",
    date: "2026",
    images: [
      '/assets/instalacion/4.jpeg',
      '/assets/instalacion/3.jpeg',
      '/assets/instalacion/2.jpeg',
      '/assets/instalacion/1.jpeg',
    ],
  },
];

function Installations() {
  return (
    <section id="installations" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="w-8 h-px bg-emerald-600 dark:bg-emerald-400" />
              Instalaciones
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Donde estamos trabajando
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed lg:text-right">
            Implementaciones reales en clientes que ya usan nuestro software.
          </p>
        </motion.div>

        {installations.map((inst, idx) => (
          <motion.div
            key={idx}
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Client info header */}
            <motion.div
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 dark:from-emerald-400/15 dark:to-emerald-400/5 border border-emerald-500/20 dark:border-emerald-400/15 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 dark:text-white">
                    {inst.client}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {inst.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {inst.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Sistema</span>
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-md">
                  {inst.system}
                </span>
              </div>
            </motion.div>

            {/* Photo gallery — bento style */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              variants={staggerContainer}
            >
              {inst.images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group cursor-pointer ${
                    i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full' : 'aspect-square'
                  }`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img}
                    alt={`Instalación en ${inst.client} - foto ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom note */}
            <motion.p
              className="text-center text-sm text-slate-500 dark:text-slate-400 mt-10"
              variants={fadeInUp}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sistema en producción · funcionando en tiempo real
              </span>
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Installations;
