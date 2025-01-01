import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function ParticleTrail({ className }) {
  return (
    <div className={className}>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            y: [null, -20, 0],
            opacity: [null, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

ParticleTrail.propTypes = {
  className: PropTypes.string
};