import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import FloatingShapes from './FloatingShapes';
import { GradientText } from './TextReveal';
import MagneticButton from './MagneticButton';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-slate-950 text-white pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950"></div>
      <FloatingShapes />
      <motion.div
        className="container mx-auto px-4 py-20 md:py-32 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Transformamos ideas en <br className="hidden md:block" />
            <span className="text-gradient">soluciones digitales</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-slate-300"
            variants={fadeInUp}
          >
            Desarrollo de software a medida para impulsar tu negocio al siguiente nivel
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <MagneticButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative overflow-hidden group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center">Comenzar proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
            >
              Ver portafolio
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
