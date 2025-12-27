"use client";
import * as React from "react";
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const champions = [
  {
    name: "Mahmoud Diaa",
    image: "/champions/Mahmoud-diaa.png",
    achievements: [
      "Professional MMA Fighter",
      "Lost 15kg in 14 days to make 61kg weigh-in",
      "Extreme water cut in last 5 days",
      "Maintained explosive power, speed, and endurance",
      "Full recovery and performance restoration after cut"
    ],
    description:
      "Pro MMA fighter Mahmoud Diaa cut 15kg in just 14 days with SPS through science-based fat loss, performance-focused training, and a strategic water cut—hitting 61kg and restoring peak performance for fight day."
  },
  {
    name: "Mostafa Osama (Gorilla)",
    image: "/champions/Mostafa-Osama.png",
    achievements: [
      "Professional MMA Fighter",
      "Achieved dramatic body transformation and fight shape",
      "Explosive power and speed gains",
      "Custom strength, plyometrics, and endurance programs",
      "Injury rehab integrated with fight prep",
      "Won his fight in the first round"
    ],
    description:
      "Pro MMA fighter Mostafa Osama (Gorilla) transformed his conditioning, power, and speed with SPS—cutting weight, rehabbing injury, and winning his fight in the first round through a fully customized, science-based program."
  },
];

export default function ChampionsCarousel() {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [direction, setDirection] = React.useState<'next' | 'prev'>('next');
  const prev = useCallback(() => {
    setDirection('prev');
    setIndex(i => (i === 0 ? champions.length - 1 : i - 1));
  }, []);
  const next = useCallback(() => {
    setDirection('next');
    setIndex(i => (i === champions.length - 1 ? 0 : i + 1));
  }, []);
  // Clamp index to valid range if champions array changes
  React.useEffect(() => {
    if (index >= champions.length) setIndex(champions.length - 1);
    if (index < 0 && champions.length > 0) setIndex(0);
  }, [index, champions.length]);
  const champ = champions[index] || champions[0];

  // GSAP refs
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const listRef = useRef(null);
  const descRef = useRef(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchMoved = useRef(false);

  // Animate card on index change (slide left/right)
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        direction === 'next'
          ? { opacity: 0, x: 80 }
          : { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
    // Content animation remains as is
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, delay: 0.1, ease: "power3.out" }
      );
    }
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power3.out" }
      );
    }
    if (listRef.current) {
      gsap.fromTo(
        listRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.3, ease: "power3.out" }
      );
    }
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.4, ease: "power3.out" }
      );
    }
  }, [index, direction]);

  // Auto-play logic
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setTimeout(() => {
        next();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };
  }, [index, isPaused, next]);

  // Pause on hover/touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchMoved.current = false;
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
    touchStartX.current = null;
    setTimeout(() => { touchMoved.current = false; }, 300);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const deltaX = e.touches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 40 && !touchMoved.current) {
        if (deltaX > 0) prev();
        else next();
        touchMoved.current = true;
      }
    }
  };

  // Desktop only nav buttons (client only)
  const [isDesktop, setIsDesktop] = React.useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Scroll/drag for desktop
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (e.deltaX > 0) next();
        else prev();
      }
    };
    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [next, prev]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
          Our Champions
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Stories of Strength & Success
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Meet the fighters who trusted our nutrition coaching to reach the top. Their journeys inspire the next generation of champions.
        </p>
      </div>
      <div ref={cardRef} className="relative flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-br from-zinc-900 to-black border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-orange-600/10 overflow-hidden">
        {/* Nav buttons only on desktop */}
        {isDesktop && (
          <button onClick={prev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600/40 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-all z-10">
            &#8592;
          </button>
        )}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img ref={imgRef} src={champ.image} alt={champ.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-500 shadow-lg" />
          <div className="text-left max-w-md">
            <h3 ref={nameRef} className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">{champ.name}</h3>
            <ul ref={listRef} className="list-disc list-inside text-gray-300 mb-2">
              {champ.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <p ref={descRef} className="text-gray-400 text-base md:text-lg italic">{champ.description}</p>
          </div>
        </div>
        {isDesktop && (
          <button onClick={next} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600/40 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-all z-10">
            &#8594;
          </button>
        )}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {champions.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-orange-500' : 'bg-zinc-700'} transition-all`}
            aria-label={`Go to champion ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
