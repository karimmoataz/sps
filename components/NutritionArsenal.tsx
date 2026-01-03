"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const nutritionData = [
  {
    id: 1,
    title: "Weight Cut Protocol",
    icon: "⚖️",
    description: "Science-based weight cutting that preserves your power, speed, and endurance. Hit your mark without compromising performance.",
    features: [
      "Gradual fat loss phase with muscle preservation",
      "Strategic water manipulation protocols",
      "Peak day nutrition for weigh-in success",
      "Rehydration & recovery optimization"
    ],
    badge: "Perfect for fight prep",
    borderColor: "orange-500",
    bgColor: "orange-600",
    checkColor: "orange-500"
  },
  {
    id: 2,
    title: "Performance Fuel",
    icon: "⚡",
    description: "Maximize explosive power, speed, and endurance. Nutrition designed to fuel high-intensity combat training.",
    features: [
      "Macro timing for peak training sessions",
      "Supplement protocols that actually work",
      "Recovery nutrition for rapid adaptation",
      "Energy system optimization"
    ],
    badge: "For elite athletes",
    borderColor: "red-500",
    bgColor: "red-600",
    checkColor: "red-500"
  },
  {
    id: 3,
    title: "Warrior Transformation",
    icon: "🔥",
    description: "Complete body recomposition. Build the physique and conditioning of a true warrior while shedding unwanted body fat.",
    features: [
      "Body composition analysis & tracking",
      "Muscle-building nutrition strategies",
      "Fat loss without sacrificing performance",
      "Sustainable lifestyle integration"
    ],
    badge: "Long-term results",
    borderColor: "yellow-500",
    bgColor: "yellow-600",
    checkColor: "yellow-500"
  },
  {
    id: 4,
    title: "1-on-1 Coaching",
    icon: "🎯",
    description: "Personalized nutrition coaching with direct access to expert guidance. Your custom roadmap to victory.",
    features: [
      "Weekly check-ins & plan adjustments",
      "Custom meal plans & recipes",
      "24/7 support via messaging",
      "Integration with training schedule"
    ],
    badge: "Most comprehensive",
    borderColor: "orange-500",
    bgColor: "orange-600",
    checkColor: "orange-500"
  }
];

const NutritionArsenal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        }
      });

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          Array.from(cards),
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "restart none none reset"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-linear-to-b from-black via-zinc-900 to-black py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            Your Weapons
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            <span className="bg-linear-to-b from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Nutrition Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Precision-crafted nutrition strategies designed for warriors at every level. Choose your weapon.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {nutritionData.map((item) => (
            <div 
              key={item.id}
              className={`group relative bg-linear-to-br from-zinc-900 to-black border border-${item.borderColor}/20 rounded-2xl p-8 hover:border-${item.borderColor}/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-${item.borderColor}/20`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-${item.bgColor}/10 rounded-full blur-3xl group-hover:bg-${item.bgColor}/20 transition-all`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                  <div className={`w-12 h-12 bg-${item.bgColor}/20 rounded-xl flex items-center justify-center group-hover:bg-${item.bgColor}/30 transition-colors`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className={`text-${item.checkColor} mt-1`}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={`pt-4 border-t border-${item.borderColor}/20`}>
                  <span className="text-gray-400 text-sm">{item.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionArsenal;
