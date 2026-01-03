"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SpartanProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Connecting line animation (draw from top to bottom)
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Step 1 animation (from left)
      if (step1Ref.current) {
        const children = step1Ref.current.querySelectorAll('.step-content, .step-icon');
        gsap.fromTo(
          children,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step1Ref.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Step 2 animation (from right)
      if (step2Ref.current) {
        const children = step2Ref.current.querySelectorAll('.step-content, .step-icon');
        gsap.fromTo(
          children,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step2Ref.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Step 3 animation (from left)
      if (step3Ref.current) {
        const children = step3Ref.current.querySelectorAll('.step-content, .step-icon');
        gsap.fromTo(
          children,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step3Ref.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Step 4 animation (from right)
      if (step4Ref.current) {
        const children = step4Ref.current.querySelectorAll('.step-content, .step-icon');
        gsap.fromTo(
          children,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step4Ref.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-linear-to-b from-zinc-900 via-black to-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            Your Journey
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            <span className="bg-linear-to-b from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              The Spartan Process
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
            A systematic approach to transform your nutrition, performance, and physique.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div ref={lineRef} className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-600/50 via-red-600/50 to-orange-600/50" />

          <div className="space-y-12 md:space-y-16">
            {/* Step 1 */}
            <div ref={step1Ref} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="step-content md:w-1/2 md:text-right md:pr-12">
                <div className="inline-block md:block">
                  <div className="text-orange-500 text-sm font-bold mb-2">STEP 01</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Initial Assessment
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Deep dive into your current state, goals, training schedule, and nutritional history. We identify your unique challenges and opportunities.
                  </p>
                </div>
              </div>
              <div className="step-icon relative z-10 w-16 h-16 bg-linear-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-orange-600/50">
                <span className="text-2xl">📋</span>
              </div>
              <div className="md:w-1/2 md:pl-12" />
            </div>

            {/* Step 2 */}
            <div ref={step2Ref} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="md:w-1/2 md:pr-12" />
              <div className="step-icon relative z-10 w-16 h-16 bg-linear-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-600/50">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="step-content md:w-1/2 md:pl-12">
                <div className="text-red-500 text-sm font-bold mb-2">STEP 02</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Custom Strategy
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Receive your personalized nutrition blueprint. Macro targets, meal timing, supplement protocols—all designed for your specific goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div ref={step3Ref} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="step-content md:w-1/2 md:text-right md:pr-12">
                <div className="inline-block md:block">
                  <div className="text-orange-500 text-sm font-bold mb-2">STEP 03</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Implementation
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Put the plan into action with ongoing support. Weekly check-ins, real-time adjustments, and troubleshooting to keep you on track.
                  </p>
                </div>
              </div>
              <div className="step-icon relative z-10 w-16 h-16 bg-linear-to-br from-orange-600 to-yellow-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-orange-600/50">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="md:w-1/2 md:pl-12" />
            </div>

            {/* Step 4 */}
            <div ref={step4Ref} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="md:w-1/2 md:pr-12" />
              <div className="step-icon relative z-10 w-16 h-16 bg-linear-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-yellow-600/50">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="step-content md:w-1/2 md:pl-12">
                <div className="text-yellow-500 text-sm font-bold mb-2">STEP 04</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Victory & Beyond
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Achieve your goal and learn to maintain it. Build sustainable habits that keep you performing at your peak year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpartanProcess;
