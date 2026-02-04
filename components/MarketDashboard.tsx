import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MarketDashboard: React.FC = () => {
  return (
    <section id="careers" className="relative h-[80vh] w-full flex items-center justify-center bg-black border-t border-white/10 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
          Make Life Multi-Planetary
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Nand Invest AB is not just a fund. It is an engine for the future. 
          We are looking for the world's most ambitious engineers and analysts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-12 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            View Openings
          </button>
          <button className="px-12 py-4 border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            Contact Team <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};