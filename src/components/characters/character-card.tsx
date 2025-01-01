import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Ability {
  name: string;
  description: string;
  power: number;
}

interface CharacterProps {
  name: string;
  image: string;
  description: string;
  abilities: Ability[];
  className?: string;
}

export function CharacterCard({ name, image, description, abilities, className }: CharacterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={cn("relative group", className)}
    >
      <div className="relative overflow-hidden rounded-lg bg-slate-800">
        <motion.div
          className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        />
        <img
          src={image}
          alt={name}
          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="space-y-3">
            {abilities.map((ability, index) => (
              <div key={ability.name} className="relative group/ability">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="relative z-10"
                >
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 cursor-pointer"
                  >
                    {ability.name}
                    <div className="ml-2 h-1.5 w-12 bg-blue-900/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ability.power * 10}%` }}
                        transition={{ delay: 0.2 }}
                      />
                    </div>
                  </Badge>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute left-0 -top-12 w-48 p-2 bg-slate-800 rounded-md shadow-lg border border-blue-500/20 z-50 pointer-events-none transform -translate-x-1/4"
                >
                  <div className="relative">
                    <p className="text-sm text-gray-300">{ability.description}</p>
                    <div className="absolute -bottom-2 left-1/4 w-2 h-2 bg-slate-800 border-r border-b border-blue-500/20 transform rotate-45" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}