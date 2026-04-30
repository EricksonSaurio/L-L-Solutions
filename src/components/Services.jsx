import { Globe, Smartphone, Server, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';
import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiPostgresql, SiFirebase, SiDocker, SiKubernetes, SiVuedotjs, SiTailwindcss, SiLaravel, SiFlutter, SiMongodb, SiRedis, SiGraphql, SiFigma } from 'react-icons/si';

function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones web que no solo se ven bien — cargan rápido, escalan y resuelven problemas reales de tu operación.",
      icon: Globe,
      color: "emerald",
    },
    {
      title: "Apps Móviles",
      description: "Apps nativas e híbridas para iOS y Android. Desde la idea hasta el App Store.",
      icon: Smartphone,
      color: "cyan",
    },
    {
      title: "Backend & APIs",
      description: "Arquitectura robusta, bases de datos optimizadas y APIs que aguantan la carga real de tu negocio.",
      icon: Server,
      color: "blue",
    },
    {
      title: "Consultoría IT",
      description: "Te ayudamos a tomar decisiones técnicas correctas antes de escribir una sola línea de código.",
      icon: Lightbulb,
      color: "amber",
    }
  ];

  const colorMap = {
    emerald: { icon: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 dark:bg-emerald-400/10', border: 'border-emerald-500/20 dark:border-emerald-400/15', hover: 'group-hover:border-emerald-500/30' },
    cyan: { icon: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-500/10 dark:bg-cyan-400/10', border: 'border-cyan-500/20 dark:border-cyan-400/15', hover: 'group-hover:border-cyan-500/30' },
    blue: { icon: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-400/10', border: 'border-blue-500/20 dark:border-blue-400/15', hover: 'group-hover:border-blue-500/30' },
    amber: { icon: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10 dark:bg-amber-400/10', border: 'border-amber-500/20 dark:border-amber-400/15', hover: 'group-hover:border-amber-500/30' },
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
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
              Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Lo que hacemos
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm leading-relaxed lg:text-right">
            No somos agencia de marketing ni fábrica de landing pages. Construimos software de verdad.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const c = colorMap[service.color];

            return (
              <motion.div
                key={index}
                className={`group relative border border-slate-200 dark:border-slate-800 ${c.hover} rounded-2xl p-7 transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-900/50`}
                variants={fadeInUp}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-5">
                  <Icon className={`w-5 h-5 ${c.icon}`} strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech logos marquee */}
        <TechMarquee />
      </div>
    </section>
  );
}

/* ─── Infinite scrolling tech logos ─────────────────── */
const techs = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
];

function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <div className="mt-16 relative overflow-hidden py-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

      <div className="flex animate-marquee">
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex-shrink-0 mx-7 flex items-center gap-2.5"
          >
            <tech.Icon className="w-5 h-5 flex-shrink-0" style={{ color: tech.color }} />
            <span className="text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
