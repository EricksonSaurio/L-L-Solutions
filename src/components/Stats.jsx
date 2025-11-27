import { TrendingUp, Users, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';
import AnimatedCounter from './AnimatedCounter';

function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "8",
      suffix: "+",
      label: "Años de experiencia",
      description: "Transformando ideas en realidad"
    },
    {
      icon: CheckCircle,
      number: "200",
      suffix: "+",
      label: "Proyectos completados",
      description: "Entregados con éxito"
    },
    {
      icon: Users,
      number: "150",
      suffix: "+",
      label: "Clientes satisfechos",
      description: "En todo el mundo"
    },
    {
      icon: Award,
      number: "98",
      suffix: "%",
      label: "Tasa de satisfacción",
      description: "Clientes que recomiendan"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl mb-4 group-hover:bg-blue-600 transition"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
