import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, slowStagger, viewportOptions } from '../utils/animations';

function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consulta inicial",
      description: "Escuchamos tus ideas y necesidades para entender tu visión y objetivos del proyecto.",
      number: "01"
    },
    {
      icon: Lightbulb,
      title: "Planificación",
      description: "Diseñamos la arquitectura y creamos un plan detallado con cronogramas y entregables.",
      number: "02"
    },
    {
      icon: Code,
      title: "Desarrollo",
      description: "Codificamos tu solución usando las mejores prácticas y tecnologías modernas.",
      number: "03"
    },
    {
      icon: Rocket,
      title: "Lanzamiento",
      description: "Desplegamos tu proyecto y brindamos soporte continuo para asegurar el éxito.",
      number: "04"
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={slowStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={index}
                className="relative"
                variants={scaleIn}
              >
                {/* Connecting Line (Desktop) */}
                {!isLast && (
                  <motion.div
                    className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 dark:from-blue-700 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={viewportOptions}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}

                <motion.div
                  className="relative bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all group"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number Badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 max-w-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              ¿Listo para empezar tu proyecto?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar consulta
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
