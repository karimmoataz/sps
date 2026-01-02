"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    value: "100%",
    title: "Individualized Plans",
    description: "No cookie-cutter approaches",
    color: "orange"
  },
  {
    id: 2,
    value: "24/7",
    title: "Expert Support",
    description: "Never fight alone",
    color: "red"
  },
  {
    id: 3,
    value: "15+",
    title: "Years Experience",
    description: "Battle-tested methods",
    color: "yellow"
  },
  {
    id: 4,
    value: "500+",
    title: "Fighters Transformed",
    description: "Proven track record",
    color: "orange"
  }
];

const featuresData = [
  {
    id: 1,
    icon: "🔬",
    title: "Evidence-Based",
    description: "Every protocol is grounded in peer-reviewed research and sports nutrition science.",
    color: "orange"
  },
  {
    id: 2,
    icon: "📊",
    title: "Data-Driven",
    description: "Track progress with precision metrics that matter for combat performance.",
    color: "red"
  },
  {
    id: 3,
    icon: "🎖️",
    title: "Battle-Tested",
    description: "Refined through years of work with professional fighters at the highest levels.",
    color: "yellow"
  }
];

const ScienceBehindShield = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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
        }
      });

      // Stats cards stagger animation
      const statsCards = statsRef.current?.children;
      if (statsCards && statsCards.length > 0) {
        gsap.fromTo(
          Array.from(statsCards),
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Features cards stagger animation
      const featureCards = featuresRef.current?.children;
      if (featureCards && featureCards.length > 0) {
        gsap.fromTo(
          Array.from(featureCards),
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            Evidence-Based Approach
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            <span className="bg-linear-to-b from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Science Behind The Shield
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Every strategy is backed by research, refined through real-world results with elite fighters.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div 
              key={stat.id}
              className={`group relative bg-linear-to-br from-zinc-900 to-black border border-${stat.color}-500/20 rounded-2xl p-6 hover:border-${stat.color}-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-${stat.color}-600/20`}
            >
              <div className={`absolute inset-0 bg-${stat.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative text-center">
                <div className={`text-5xl md:text-6xl font-bold text-${stat.color}-500 mb-3`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-semibold mb-2">
                  {stat.title}
                </div>
                <div className="text-gray-500 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={featuresRef} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-linear-to-br from-zinc-900 to-black border border-${feature.color}-500/20 rounded-2xl p-6 hover:border-${feature.color}-500/50 transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-${feature.color}-600/20 rounded-lg flex items-center justify-center shrink-0`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceBehindShield;
