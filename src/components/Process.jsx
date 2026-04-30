import { motion } from 'framer-motion';
import { Headphones, PenLine, Hammer, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

/* ─── Step animations ──────────────────────────────── */

// Headphones with pulsing sound rings
function ListenAnim() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center mb-6">
      {/* Sound rings */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-emerald-500/30 dark:border-emerald-400/20"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: [0.4, 0.7 + i * 0.15], opacity: [0.7, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: 'easeOut' }}
        />
      ))}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 dark:from-emerald-400/15 dark:to-emerald-400/5 flex items-center justify-center backdrop-blur-sm border border-emerald-500/20 dark:border-emerald-400/15">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Headphones className="w-8 h-8 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
        </motion.div>
      </div>
    </div>
  );
}

// Pencil drawing on a notepad
function DesignAnim() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center mb-6">
      {/* Notepad background */}
      <div className="absolute w-[52px] h-[58px] rounded-lg bg-cyan-500/8 dark:bg-cyan-400/8 border border-cyan-500/15 dark:border-cyan-400/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Notepad lines */}
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="absolute left-2 right-2 h-px bg-cyan-500/15 dark:bg-cyan-400/10"
            style={{ top: 14 + i * 10 }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 0.6, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
      </div>
      {/* Pencil moving across notepad */}
      <motion.div
        className="relative z-10"
        animate={{
          x: [-10, 10, -6, 8, -10],
          y: [-8, -2, 4, 10, -8],
          rotate: [15, 15, 15, 15, 15],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 dark:from-cyan-400/15 dark:to-cyan-400/5 flex items-center justify-center backdrop-blur-sm border border-cyan-500/20 dark:border-cyan-400/15">
          <PenLine className="w-6 h-6 text-cyan-600 dark:text-cyan-400" strokeWidth={1.5} />
        </div>
      </motion.div>
      {/* Ink dot trail */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-cyan-400/50"
        animate={{
          x: [-10, 10, -6, 8],
          y: [-4, 2, 8, 14],
          opacity: [0, 0.6, 0.3, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

// Hammer slamming down
function BuildAnim() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center mb-6">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 dark:from-blue-400/15 dark:to-blue-400/5 flex items-center justify-center backdrop-blur-sm border border-blue-500/20 dark:border-blue-400/15 relative">
        <motion.div
          style={{ originX: 0.3, originY: 0.8 }}
          animate={{ rotate: [0, -25, 0, -25, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1, ease: [0.36, 0, 0.66, -0.56] }}
        >
          <Hammer className="w-8 h-8 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
        </motion.div>
      </div>
      {/* Impact flash */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-blue-400/40 dark:bg-blue-400/30 blur-sm"
        animate={{ opacity: [0, 0.8, 0], scaleX: [0.5, 1.5, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1, ease: 'easeOut' }}
      />
    </div>
  );
}

// Rocket launching upward
function LaunchAnim() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center mb-6 overflow-hidden">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/15 to-purple-500/5 dark:from-purple-400/15 dark:to-purple-400/5 flex items-center justify-center backdrop-blur-sm border border-purple-500/20 dark:border-purple-400/15 relative">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
        </motion.div>
      </div>
      {/* Exhaust particles */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/60 dark:bg-purple-400/40"
          style={{ left: `calc(50% + ${(i - 1) * 6}px)` }}
          animate={{
            y: [6, 30],
            opacity: [0.8, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeIn',
          }}
        />
      ))}
      {/* Glow under rocket */}
      <motion.div
        className="absolute bottom-2 w-6 h-6 rounded-full bg-purple-500/20 dark:bg-purple-400/15 blur-md"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ─── Steps data ───────────────────────────────────── */
const steps = [
  { Anim: ListenAnim, title: "Escuchamos", description: "Entendemos tu negocio, tus usuarios y el problema real que necesitas resolver. Sin esto, el código no sirve." },
  { Anim: DesignAnim, title: "Diseñamos", description: "Arquitectura, flujos, prototipos. Planificamos todo antes de escribir la primera línea de código." },
  { Anim: BuildAnim, title: "Construimos", description: "Desarrollo iterativo con entregas frecuentes. Ves avances reales cada semana, no al final." },
  { Anim: LaunchAnim, title: "Lanzamos", description: "Deploy, monitoreo, optimización. Y seguimos aquí después del lanzamiento para lo que necesites." },
];

function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
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
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cómo trabajamos
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
              variants={fadeInUp}
            >
              <step.Anim />
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
              ¿Listo para empezar?
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Agenda una consulta gratuita. Sin compromiso.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 text-white dark:text-slate-950 px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-emerald-400 transition-colors flex-shrink-0"
          >
            Agendar consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
