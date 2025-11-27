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
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 overflow-hidden">
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
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Transformamos ideas en soluciones digitales
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
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Comenzar proyecto
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-slate-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
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
