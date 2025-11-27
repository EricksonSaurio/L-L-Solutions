import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract number from value (e.g., "200+" -> 200)
  const numericValue = parseInt(value.toString().replace(/\D/g, ''));

  const spring = useSpring(0, {
    damping: 30,
    stiffness: 50,
    duration: 2000
  });

  const display = useTransform(spring, (current) => {
    return Math.round(current).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
