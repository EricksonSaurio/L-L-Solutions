import { Globe, Smartphone, Server, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewportOptions } from '../utils/animations';

function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.",
      icon: Globe
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android que tus usuarios amarán.",
      icon: Smartphone
    },
    {
      title: "Desarrollo Backend",
      description: "APIs robustas y servicios escalables para tu infraestructura digital.",
      icon: Server
    },
    {
      title: "Consultoría IT",
      description: "Asesoría experta para optimizar tu tecnología y procesos.",
      icon: Lightbulb
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para cada necesidad de tu empresa
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-lg hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-500 transition"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
