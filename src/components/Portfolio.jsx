import { ExternalLink, Code2, Smartphone, Database, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from '../utils/animations';

function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con pasarela de pagos integrada y sistema de gestión de inventario en tiempo real.",
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL"],
      icon: Code2,
      accentColor: "blue"
    },
    {
      title: "App de Gestión",
      description: "Sistema de gestión empresarial con dashboard analítico, reportes personalizados y sincronización multi-dispositivo.",
      category: "Mobile & Web",
      technologies: ["React Native", "Firebase", "TypeScript"],
      icon: Smartphone,
      accentColor: "teal"
    },
    {
      title: "Sistema de Reservas",
      description: "Plataforma de reservas online con sincronización multi-calendario, notificaciones automáticas y panel administrativo.",
      category: "Backend & API",
      technologies: ["Python", "Django", "Redis"],
      icon: Database,
      accentColor: "indigo"
    },
    {
      title: "CRM Personalizado",
      description: "Sistema CRM adaptado con automatización de procesos, seguimiento de leads y análisis predictivo de ventas.",
      category: "Enterprise",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      icon: Building2,
      accentColor: "cyan"
    }
  ];

  const accentColors = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      icon: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      tag: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
      tech: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-800",
      hover: "hover:border-blue-500 dark:hover:border-blue-500"
    },
    teal: {
      bg: "bg-teal-50 dark:bg-teal-950/30",
      border: "border-teal-200 dark:border-teal-800",
      icon: "text-teal-600 dark:text-teal-400",
      iconBg: "bg-teal-100 dark:bg-teal-900",
      tag: "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
      tech: "bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-950/50 dark:text-teal-400 dark:border-teal-800",
      hover: "hover:border-teal-500 dark:hover:border-teal-500"
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-950/30",
      border: "border-indigo-200 dark:border-indigo-800",
      icon: "text-indigo-600 dark:text-indigo-400",
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      tag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
      tech: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-400 dark:border-indigo-800",
      hover: "hover:border-indigo-500 dark:hover:border-indigo-500"
    },
    cyan: {
      bg: "bg-cyan-50 dark:bg-cyan-950/30",
      border: "border-cyan-200 dark:border-cyan-800",
      icon: "text-cyan-600 dark:text-cyan-400",
      iconBg: "bg-cyan-100 dark:bg-cyan-900",
      tag: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
      tech: "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-400 dark:border-cyan-800",
      hover: "hover:border-cyan-500 dark:hover:border-cyan-500"
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Nuestros <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Innovación tecnológica aplicada a casos de uso reales
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = accentColors[project.accentColor];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="group relative glass-card rounded-2xl p-8 overflow-hidden"
                variants={isEven ? fadeInLeft : fadeInRight}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${project.accentColor}-500/10 to-transparent pointer-events-none`}></div>

                {/* Header: Icon and Category */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <motion.div
                    className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </motion.div>
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.tag}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/50 group-hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative z-10 flex items-center mt-auto">
                  <motion.button
                    className="flex items-center gap-2 text-blue-400 font-bold group/btn"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Ver detalles
                    <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full -z-10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;

