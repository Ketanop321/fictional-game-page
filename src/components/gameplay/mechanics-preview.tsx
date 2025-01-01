import { motion } from "framer-motion";
import { Sword, Wand2, Footprints, Crown } from "lucide-react";

const mechanics = [
  {
    icon: <Sword className="w-8 h-8" />,
    title: "Dynamic Combat",
    description: "Master fluid combat mechanics with unique combos and special abilities"
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Spell Crafting",
    description: "Create and combine spells to discover powerful magical combinations"
  },
  {
    icon: <Footprints className="w-8 h-8" />,
    title: "World Exploration",
    description: "Traverse vast landscapes filled with secrets and hidden treasures"
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Kingdom Building",
    description: "Establish and grow your own kingdom as you progress through the story"
  }
];

export function MechanicsPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Game Mechanics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mechanics.map((mechanic, index) => (
            <motion.div
              key={mechanic.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-blue-500 mb-4">{mechanic.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{mechanic.title}</h3>
              <p className="text-gray-400">{mechanic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}