import { useState } from "react";
import { motion } from "framer-motion";
import { Sword, Shield, Crown, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const equipment = {
  weapons: [
    { id: 1, name: "Dragon Slayer", type: "sword", icon: Sword, stats: { damage: 85, speed: 70 } },
    { id: 2, name: "Mystic Staff", type: "staff", icon: Wand2, stats: { damage: 95, speed: 60 } },
  ],
  armor: [
    { id: 1, name: "Knight's Plate", type: "heavy", icon: Shield, stats: { defense: 90, mobility: 60 } },
    { id: 2, name: "Royal Guard Set", type: "medium", icon: Crown, stats: { defense: 75, mobility: 80 } },
  ]
};

export function CharacterCustomizer() {
  const [selectedWeapon, setSelectedWeapon] = useState(equipment.weapons[0]);
  const [selectedArmor, setSelectedArmor] = useState(equipment.armor[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Customize Your Character</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 rounded-lg p-6"
          >
            <Tabs defaultValue="weapons">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="weapons">Weapons</TabsTrigger>
                <TabsTrigger value="armor">Armor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="weapons" className="space-y-4">
                {equipment.weapons.map((weapon) => (
                  <Button
                    key={weapon.id}
                    variant={selectedWeapon.id === weapon.id ? "default" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setSelectedWeapon(weapon)}
                  >
                    <div className="flex items-center gap-2">
                      <weapon.icon className="w-5 h-5" />
                      <span>{weapon.name}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span>DMG: {weapon.stats.damage}</span>
                      <span>SPD: {weapon.stats.speed}</span>
                    </div>
                  </Button>
                ))}
              </TabsContent>
              
              <TabsContent value="armor" className="space-y-4">
                {equipment.armor.map((armor) => (
                  <Button
                    key={armor.id}
                    variant={selectedArmor.id === armor.id ? "default" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setSelectedArmor(armor)}
                  >
                    <div className="flex items-center gap-2">
                      <armor.icon className="w-5 h-5" />
                      <span>{armor.name}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span>DEF: {armor.stats.defense}</span>
                      <span>MOB: {armor.stats.mobility}</span>
                    </div>
                  </Button>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 rounded-lg p-6"
          >
            <div className="aspect-square rounded-lg bg-slate-700/50 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1535970793482-07de93762dc4?w=400&h=400&fit=crop"
                alt="Character Preview"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}