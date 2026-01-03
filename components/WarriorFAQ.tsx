"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const WarriorFAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

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

      // FAQ items stagger animation
      const faqItems = accordionRef.current?.children;
      if (faqItems && faqItems.length > 0) {
        gsap.fromTo(
          Array.from(faqItems),
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: accordionRef.current,
              start: "top 75%",
              toggleActions: "restart none none reset"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "How quickly can I cut weight safely?",
      answer: "Safe weight cutting depends on your starting point and timeline. Generally, we recommend 1-2% of body weight per week for fat loss, with a strategic water cut in the final 3-5 days. Our protocols have helped fighters cut 15kg+ in 14 days while maintaining full performance."
    },
    {
      question: "Do you work with beginners or only pros?",
      answer: "We work with fighters at all levels—from beginners starting their journey to professional athletes competing at the highest levels. Every warrior deserves elite nutrition guidance, and our programs scale to your experience and goals."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine sports nutrition science with real-world combat sports experience. Every strategy is individualized, evidence-based, and refined through years of working with elite fighters. No generic meal plans—just precision nutrition tailored to your unique needs and goals."
    },
    {
      question: "Can I build muscle while cutting weight?",
      answer: "In most cases, yes—especially if you're newer to proper nutrition or training. Through strategic protein intake, nutrient timing, and smart programming, we can help you recompose your body: building muscle while losing fat. The key is doing it gradually with the right approach."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Comprehensive support including weekly video check-ins, custom meal plans, supplement guidance, 24/7 messaging access, and real-time plan adjustments based on your progress. You're never alone in this journey—we're in your corner every step of the way."
    },
    {
      question: "How do online coaching sessions work?",
      answer: "Everything happens remotely through video calls, messaging apps, and our tracking platform. You'll submit weekly progress updates (weight, photos, performance metrics), and we'll adjust your plan accordingly. It's the same high-level coaching pros get, accessible from anywhere in the world."
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            Questions Answered
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            <span className="bg-linear-to-b from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Warrior's FAQ
            </span>
          </h2>
        </div>

        <Accordion ref={accordionRef} type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-linear-to-br from-zinc-900 to-black border border-orange-500/20 rounded-2xl px-6 hover:border-orange-500/50 transition-all data-[state=open]:border-orange-500/50"
            >
              <AccordionTrigger className="text-white font-bold text-lg hover:no-underline py-6 hover:text-orange-400 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WarriorFAQ;
