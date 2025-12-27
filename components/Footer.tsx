import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-orange-600/20 py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
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
  );
}
