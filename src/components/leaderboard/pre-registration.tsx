import { motion } from "framer-motion";
import { Trophy, Share2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const leaderboard = [
  { rank: 1, name: "DragonSlayer", points: 1500, reward: "Legendary Mount" },
  { rank: 2, name: "ShadowMage", points: 1200, reward: "Epic Weapon" },
  { rank: 3, name: "StormHunter", points: 1000, reward: "Rare Armor Set" },
];

export function PreRegistration() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pre-Registration Rewards</h2>
          <p className="text-gray-300">Join early and earn exclusive rewards!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"
          >
            <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Top Referrer Bonus</h3>
            <p className="text-gray-300">Earn points for each friend you invite</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"
          >
            <Share2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Social Media Rewards</h3>
            <p className="text-gray-300">Share and earn exclusive items</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"
          >
            <Users className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community Milestones</h3>
            <p className="text-gray-300">Unlock rewards as our community grows</p>
          </motion.div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Top Referrers</h3>
          <div className="space-y-4">
            {leaderboard.map((entry) => (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between bg-slate-700/50 p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-blue-500">#{entry.rank}</span>
                  <span className="text-white">{entry.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-300">{entry.points} points</span>
                  <span className="text-green-400">{entry.reward}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Pre-Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}