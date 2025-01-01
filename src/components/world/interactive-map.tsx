import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll, X } from "lucide-react";

const regions = [
  {
    id: 1,
    name: "Crystal Valley",
    position: { x: 20, y: 30 },
    description: "A mystical valley where ancient crystals power forgotten technologies.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Shadow Peaks",
    position: { x: 60, y: 40 },
    description: "Treacherous mountains where shadow creatures dwell in eternal darkness.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Eternal Forest",
    position: { x: 40, y: 70 },
    description: "An ancient woodland where time flows differently than the outside world.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop"
  }
];

export function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<typeof regions[0] | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative z-30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">World Map</h2>
        
        <div className="relative aspect-[16/9] bg-slate-800 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-50" />
          
          {regions.map((region) => (
            <motion.button
              key={region.id}
              className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full bg-blue-500/20 border-2 border-blue-500/50 cursor-pointer z-20"
              style={{ left: `${region.position.x}%`, top: `${region.position.y}%` }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedRegion(region)}
            >
              <Scroll className="w-6 h-6 m-auto text-blue-300" />
            </motion.button>
          ))}

          <AnimatePresence>
            {selectedRegion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-black/80 p-8 flex items-center justify-center z-30"
              >
                <div className="relative max-w-2xl w-full bg-slate-800 rounded-lg p-6">
                  <button
                    onClick={() => setSelectedRegion(null)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <img
                    src={selectedRegion.image}
                    alt={selectedRegion.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedRegion.name}</h3>
                  <p className="text-gray-300">{selectedRegion.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}