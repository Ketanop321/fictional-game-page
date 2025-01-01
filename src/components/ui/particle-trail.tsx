import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: particle.x - 8,
            y: particle.y - 8,
          }}
          transition={{ duration: 1 }}
          className="absolute w-4 h-4 bg-blue-500 rounded-full blur-sm"
        />
      ))}
      <motion.div
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute w-4 h-4 bg-blue-400 rounded-full blur-sm"
      />
    </div>
  );
}