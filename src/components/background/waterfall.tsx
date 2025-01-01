import { motion } from "framer-motion";

export function Waterfall() {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-64 z-20 pointer-events-none overflow-hidden opacity-30">
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(147,197,253,0.3) 10%, rgba(147,197,253,0.1))",
          height: "200%"
        }}
        animate={{
          y: ["-100%", "0%"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}