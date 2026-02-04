import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Next-Gen Quantitative Systems
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-slate-900 dark:text-white">
            Precision <br /> 
            <span className="text-blue-600 dark:text-blue-400">Engineering</span> <br /> 
            for Global Markets.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            Nands develops proprietary algorithms that transform market noise into actionable alpha. Built for institutional speed.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-blue-500/10">
              Explore Strategy <ArrowUpRight size={22} />
            </button>
            <button className="px-10 py-5 rounded-full border border-slate-200 dark:border-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              Our Track Record
            </button>
          </div>
        </div>

        {/* Minimalist Graphic */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="aspect-square rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between bg-white dark:bg-slate-950 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest opacity-50">Core Latency</p>
                <p className="text-4xl font-black">0.02ms</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-4">
               <div className="h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 w-3/4 group-hover:w-full transition-all duration-1000" />
               </div>
               <div className="h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-400 w-1/2 group-hover:w-3/4 transition-all duration-1000" />
               </div>
               <div className="h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-300 w-1/3 group-hover:w-1/2 transition-all duration-1000" />
               </div>
            </div>

            <div className="text-sm font-mono opacity-50">
              Uptime: 99.999% // Optimized
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};