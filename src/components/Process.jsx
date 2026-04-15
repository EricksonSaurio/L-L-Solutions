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
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Nuestro <span className="text-gradient">Proceso</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Metodología probada para garantizar resultados excepcionales
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
                    className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent z-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={viewportOptions}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}

                <motion.div
                  className="relative z-10 glass-card p-8 rounded-2xl h-full flex flex-col items-center text-center group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Number Badge */}
                  <motion.div
                    className="absolute -top-5 -right-5 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] border-4 border-slate-900"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <motion.div
                      className="relative w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:border-blue-500/50 transition-colors"
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block glass-card rounded-3xl p-10 max-w-2xl relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none"></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              ¿Listo para empezar tu proyecto?
            </h3>
            <p className="text-slate-400 mb-8 relative z-10 text-lg">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative z-10 overflow-hidden group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">Agendar consulta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
