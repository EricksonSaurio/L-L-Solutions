import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const projects = [
  {
    title: "Restaurante Pro",
    description: "Sistema completo de gestión para restaurantes: control de mesas, órdenes en tiempo real, inventario, reportes de ventas y panel administrativo. Desplegado en la nube con alta disponibilidad.",
    category: "Enterprise",
    technologies: ["Django", "PostgreSQL", "AWS", "Python"],
    accent: "bg-emerald-500",
    images: [
      '/Assets/RestaurantePro1.jpeg',
      '/Assets/RestaurantePro2.jpeg',
      '/Assets/RestaurantePro3.jpeg',
      '/Assets/RestaurantePro4.jpeg',
    ],
  },
];

/* ─── Image Carousel ─────────────────────────────── */
const AUTO_PLAY_MS = 4000;

function ImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0);
  const [ticker, setTicker] = useState(0); // bumps to reset the interval on manual nav

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [images.length, ticker]);

  const go = (newIndex) => {
    setIndex((newIndex + images.length) % images.length);
    setTicker(t => t + 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel bg-slate-100 dark:bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} - vista ${index + 1}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Nav arrows (visible on hover) */}
      <button
        onClick={(e) => { e.stopPropagation(); go(index - 1); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-black/60 transition-opacity flex items-center justify-center z-10"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); go(index + 1); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-black/60 transition-opacity flex items-center justify-center z-10"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); go(i); }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
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
              Proyectos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trabajo reciente
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed lg:text-right">
            Soluciones reales construidas para problemas reales.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors bg-white dark:bg-slate-900/50"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-2">
                {/* Image Carousel */}
                <div className="relative h-64 md:h-full md:min-h-[380px]">
                  <ImageCarousel images={project.images} alt={project.title} />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`${project.accent} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1.5" />
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hint for more projects */}
        <motion.p
          className="text-center text-sm text-slate-400 dark:text-slate-600 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          Más proyectos en camino · <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-emerald-600 dark:text-emerald-400 hover:underline">¿tienes un proyecto en mente?</button>
        </motion.p>
      </div>
    </section>
  );
}

export default Portfolio;
