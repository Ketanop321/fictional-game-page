import { motion } from "framer-motion";

export function Clouds() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-32 opacity-20"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
            width: "200%",
            top: `${20 + i * 25}%`,
            left: "-100%"
          }}
          animate={{
            x: ["0%", "100%"]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}