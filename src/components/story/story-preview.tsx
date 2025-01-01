import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StoryPreview() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Epic Tale of Destiny</h2>
          <p className="text-xl text-gray-300 mb-8">
            In a realm where ancient magic clashes with emerging technology, you emerge as the 
            last hope for a world teetering on the brink of chaos. Choose your path, forge 
            powerful alliances, and shape the destiny of the realm through your choices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {["Chapter 1: Origins", "Chapter 2: Rising Darkness", "Chapter 3: Destiny's Call"].map((chapter, index) => (
              <motion.div
                key={chapter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20"
              >
                <h3 className="text-white font-semibold">{chapter}</h3>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            Begin Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}