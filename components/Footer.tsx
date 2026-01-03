"use client";

import React, { useEffect, useState } from "react";
import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-600/50 bg-black/80 text-orange-500 shadow-lg shadow-orange-500/10 backdrop-blur transition hover:-translate-y-1 hover:border-orange-400 hover:text-orange-400"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <footer className="w-full border-t border-orange-600/20 py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
        <div className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} <span className="text-orange-500 font-bold">SPS_Fighters</span>. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </>
  );
}
