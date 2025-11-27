import { motion } from 'framer-motion';

function FloatingShapes() {
  const shapes = [
    { size: 300, x: '10%', y: '20%', delay: 0, duration: 20, color: 'rgba(59, 130, 246, 0.1)' },
    { size: 200, x: '80%', y: '10%', delay: 2, duration: 15, color: 'rgba(147, 51, 234, 0.1)' },
    { size: 250, x: '70%', y: '70%', delay: 1, duration: 18, color: 'rgba(236, 72, 153, 0.1)' },
    { size: 180, x: '20%', y: '80%', delay: 3, duration: 22, color: 'rgba(59, 130, 246, 0.08)' },
    { size: 220, x: '50%', y: '50%', delay: 1.5, duration: 16, color: 'rgba(147, 51, 234, 0.08)' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingShapes;
