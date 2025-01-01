import { CharacterCard } from "./character-card";

const characters = [
  {
    name: "The Warrior",
    image: "https://images.unsplash.com/photo-1535970793482-07de93762dc4?w=300&h=400&fit=crop",
    description: "Master of combat and strategy",
    abilities: [
      { name: "Sword Mastery", description: "Enhanced damage with sword attacks", power: 9 },
      { name: "Battle Cry", description: "Boost allies' morale and strength", power: 7 },
      { name: "Shield Wall", description: "Impenetrable defense stance", power: 8 }
    ]
  },
  {
    name: "The Mage",
    image: "https://images.unsplash.com/photo-1577936981699-20fc286beb58?w=300&h=400&fit=crop",
    description: "Wielder of ancient magics",
    abilities: [
      { name: "Fireball", description: "Devastating area damage spell", power: 9 },
      { name: "Teleport", description: "Instant battlefield repositioning", power: 6 },
      { name: "Time Freeze", description: "Temporarily stop time for enemies", power: 10 }
    ]
  },
  {
    name: "The Ranger",
    image: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=300&h=400&fit=crop",
    description: "Expert of bow and stealth",
    abilities: [
      { name: "Precise Shot", description: "High accuracy ranged attacks", power: 8 },
      { name: "Shadow Step", description: "Move unseen through shadows", power: 7 },
      { name: "Beast Taming", description: "Control wildlife allies", power: 6 }
    ]
  }
];

export function CharacterPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Choose Your Hero</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </div>
      </div>
    </section>
  );
}