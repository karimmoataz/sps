import Hero from "@/components/Hero";
import { Shield, Swords, Trophy } from "lucide-react";
import ChampionsCarousel from "@/components/ChampionsCarousel";

export default function Home() {
  return (
    <div className="relative w-full">
      
      <Hero />
      
      {/* Warriors Path Section */}
      <section className="relative w-full min-h-screen bg-linear-to-b from-black via-zinc-900 to-black py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
                The Spartan Way
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                <span className="bg-linear-to-b from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Forge Your Legend
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Every warrior's journey begins with a single step. Master the ancient arts of combat, strategy, and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Card 1 */}
            <div className="group relative bg-linear-to-br from-zinc-900 to-black border border-orange-500/20 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl group-hover:bg-orange-600/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-orange-600/30 transition-colors">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Defend with Honor
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Master the art of protection. Learn ancient defensive techniques that have kept warriors alive for millennia.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-linear-to-br from-zinc-900 to-black border border-orange-500/20 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-600/30 transition-colors">
                  <Swords className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Strike with Precision
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Channel your inner warrior. Train in combat arts that demand both physical prowess and mental clarity.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-linear-to-br from-zinc-900 to-black border border-orange-500/20 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/10 rounded-full blur-3xl group-hover:bg-yellow-600/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-yellow-600/30 transition-colors">
                  <Trophy className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Claim Victory
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Rise through the ranks. Prove your worth in challenges that test every aspect of your warrior spirit.
                </p>
              </div>
            </div>
          </div>

          {/* Battle Stats */}
          <div className="bg-linear-to-b from-orange-600/10 via-red-600/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  <span className="bg-linear-to-b from-orange-500 to-red-500 bg-clip-text text-transparent">
                    300+
                  </span>
                </div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                  Elite Warriors
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  <span className="bg-linear-to-b from-orange-500 to-red-500 bg-clip-text text-transparent">
                    1000+
                  </span>
                </div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                  Battles Won
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  <span className="bg-linear-to-b from-orange-500 to-red-500 bg-clip-text text-transparent">
                    50+
                  </span>
                </div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                  Training Programs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  <span className="bg-linear-to-b from-orange-500 to-red-500 bg-clip-text text-transparent">
                    24/7
                  </span>
                </div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                  Warrior Support
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16">
            <button className="px-8 md:px-12 py-4 bg-linear-to-b from-orange-600 to-red-600 text-white rounded-xl font-bold text-base md:text-lg hover:from-orange-700 hover:to-red-700 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/50">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
      {/* Our Champions Section */}
      <ChampionsCarousel />
      
    </div>
  );
}