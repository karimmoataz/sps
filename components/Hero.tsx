"use client";
import React from 'react'
import Helmet from "@/components/Helmet";
import { ChevronDown } from "lucide-react";
import Header from './Header';

const Hero = () => {
  return (
    <section id="hero-section" className="relative w-full h-screen overflow-hidden">
      <Header />
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <Helmet />
          </div>
        </div>
        
        <div className="absolute inset-x-4 bg-black/10 backdrop-blur-sm md:left-8 z-10 rounded-xl px-4 py-3 md:px-6 md:py-4 pointer-events-auto max-w-sm md:max-w-md">
          <div className="text-orange-500 text-xs md:text-sm lg:text-lg font-semibold tracking-widest uppercase">
            Elite Fighter Nutrition
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mt-1">
            FUEL<br />
            <span className="bg-linear-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              YOUR FIGHT<br />WITH SCIENCE
            </span>
          </h1>
        </div>

        <div className="absolute inset-x-4 bottom-60 md:bottom-8 md:left-8 z-10 bg-black/10 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 max-w-full md:max-w-md pointer-events-auto">
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
            Champions aren’t born—they’re fueled. Every meal is a step toward victory. Unlock your edge with precision nutrition, tailored for fighters who refuse to settle for less than greatness.
          </p>
        </div>

        <div className="absolute inset-x-4 bottom-32 md:bottom-8 md:left-auto md:right-8 z-10 flex flex-col sm:flex-row gap-3 md:gap-4 pointer-events-auto">
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 bg-orange-600 text-white rounded-xl font-bold text-base md:text-lg hover:bg-orange-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-600/50">
            Book Nutrition Consult
          </button>
          <button
            className="w-full sm:w-auto px-6 md:px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-xl font-bold text-base md:text-lg hover:bg-orange-600 hover:text-white transition-all hover:scale-105"
            onClick={() => {
              const championsSection = document.getElementById('champions');
              if (championsSection) {
                championsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Fighter Success Stories
          </button>
        </div>

        <button
          className="absolute bottom-18 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
          onClick={() => {
            const heroSection = document.getElementById('hero-section');
            if (heroSection) {
              const next = heroSection.nextElementSibling;
              if (next) {
                next.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </button>
      </section>
  )
}

export default Hero