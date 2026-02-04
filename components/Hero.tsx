import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Deep Space Base */}
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-cyan-900/10 rounded-full blur-[80px]" />

        {/* Faded Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
             }} 
        />
        
        {/* Particles */}
        <div className="absolute inset-0 opacity-40">
           {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-cyan-400 rounded-full animate-pulse"
              style={{
                width: Math.random() * 2 + 'px',
                height: Math.random() * 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Venture Capital</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Human Ingenuity
          </span>  
                    
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
           <span className="text-white font-medium">AI</span> , <span className="text-white font-medium">Robotics</span>, <span className="text-white font-medium">Quantum Computing</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full transition-all hover:bg-cyan-50 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2">
                Our Portfolio <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </section>
  );
};