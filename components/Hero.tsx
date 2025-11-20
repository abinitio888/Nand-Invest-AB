import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nand-accent"></span>
            </span>
            <span className="text-nand-accent text-xs font-bold tracking-widest uppercase">Algorithm Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Decide with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nand-accent to-nand-secondary">
              Neural Precision
            </span>
          </h1>
          
          <p className="text-xl text-nand-muted max-w-2xl mx-auto md:mx-0">
            Nand Invest AB combines proprietary quantitative models with generative AI to navigate global market volatility with unmatched speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#analysis" className="flex items-center justify-center gap-2 bg-white text-nand-dark px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-all">
              Try AI Analyst <TrendingUp size={18} />
            </a>
            <a href="#methodology" className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Our Methodology <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-12 md:mt-0 md:w-1/2 relative">
           <div className="relative w-full h-[400px] bg-gradient-to-br from-nand-card to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-2xl">
              <div className="absolute top-4 left-6 flex space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="h-2 bg-white/5 rounded w-3/4 animate-pulse"></div>
                <div className="h-2 bg-white/5 rounded w-1/2 animate-pulse delay-75"></div>
                <div className="h-32 mt-8 border-l border-b border-white/10 relative overflow-hidden">
                    <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <path d="M0 100 L 10 80 L 20 85 L 30 60 L 40 70 L 50 40 L 60 50 L 70 20 L 80 30 L 90 10 L 100 5" fill="none" stroke="#00E5FF" strokeWidth="2" />
                         <path d="M0 100 L 10 80 L 20 85 L 30 60 L 40 70 L 50 40 L 60 50 L 70 20 L 80 30 L 90 10 L 100 5 V 100 Z" fill="url(#grad)" opacity="0.2" />
                         <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#00E5FF" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                         </defs>
                    </svg>
                </div>
                <div className="flex justify-between text-xs text-nand-muted mt-2 font-mono">
                    <span>EXECUTION_TIME: 0.04ms</span>
                    <span className="text-green-400">ALPHA: +4.2%</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};