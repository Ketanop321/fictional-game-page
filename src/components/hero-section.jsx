import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { ChevronRight, Sword, Shield, Scroll } from "lucide-react";
import PropTypes from "prop-types";

function Feature({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

Feature.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-slate-900">
      <div className="absolute inset-0 z-0">
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

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Game Logo"
              className="w-32 h-32 mx-auto rounded-full shadow-lg shadow-blue-500/50"
            />
          </motion.div>

          <AnimatedText
            text="Embark on an Epic Journey Through Mystical Realms"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            once
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Discover a world where magic and technology collide, forge alliances, and become
            the hero of your own legend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Play Now
              <ChevronRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-950 px-8 py-6 text-lg"
            >
              Watch Trailer
            </Button>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<Sword className="w-8 h-8" />}
              title="Epic Battles"
              description="Engage in thrilling combat with mythical creatures"
            />
            <Feature
              icon={<Shield className="w-8 h-8" />}
              title="Forge Alliances"
              description="Build your team and conquer together"
            />
            <Feature
              icon={<Scroll className="w-8 h-8" />}
              title="Rich Storyline"
              description="Immerse yourself in a deep, engaging narrative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {};