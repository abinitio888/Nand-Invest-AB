import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-24 lg:pb-32 overflow-hidden bg-[#020308]">
      
      {/* Cinematic Galaxy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* 1. Deep Space Base */}
        <div className="absolute inset-0 bg-[#010206]" />

        {/* 2. Galactic Core (Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[150px] animate-core-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-cyan-400/5 blur-[100px]" />

        {/* 3. Spiral Arm Layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] animate-galaxy-rotate-slow">
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: `radial-gradient(circle at center, transparent 30%, #1e3a8a 70%, transparent 100%)`,
                   maskImage: `conic-gradient(from 0deg, white, transparent 30%, white 50%, transparent 80%, white)`,
                   WebkitMaskImage: `conic-gradient(from 0deg, white, transparent 30%, white 50%, transparent 80%, white)`
                 }} 
            />
        </div>

        {/* 4. Dense Starfield */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: 'radial-gradient(0.5px 0.5px at center, #fff 100%, transparent 0)', 
               backgroundSize: '40px 40px' 
             }} 
        />

        {/* 5. Twinkling Distant Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div 
              key={`distant-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: Math.random() * 1.5 + 0.5 + 'px',
                height: Math.random() * 1.5 + 0.5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 10 + 's',
                opacity: Math.random() * 0.4 + 0.1
              }}
            />
          ))}
        </div>

        {/* 6. Horizon Edge for Depth */}
        <div className="absolute -bottom-[30vh] left-[-20%] right-[-20%] h-[80vh] rounded-[100%] overflow-hidden">
          <div className="absolute inset-0 bg-black/90" />
          <div className="absolute top-0 left-0 right-0 h-[20%] bg-blue-500/10 blur-[60px]" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
        </div>

        {/* 7. Final Lens Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full mb-12 animate-fade-up">
        
        {/* HUD Sub-label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-blue-600/60 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
          <span className="text-[10px] md:text-xs font-mono tracking-[0.6em] uppercase text-blue-400">
            Advancing Civilization
          </span>
        </div>

        {/* Main Branding - Sharp and Clear (Removed gray mask box) */}
        <div className="relative inline-block mb-12">
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.85] text-white">
              Nand <br /> 
              <span className="text-white/40">Invest</span>
            </h1>
            
            {/* Aesthetic Tech Decorator */}
            <div className="absolute -bottom-6 left-0 w-48 h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-50" />
        </div>

        {/* Technical Telemetry HUD Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 pt-10 border-t border-white/5">
           {[
             { label: '', val: 'cj@nands.se' },
            //  { label: 'Compute Power', val: '1.2 PETAFLOPS' },
            //  { label: 'Node Status', val: 'SYNCHRONIZED' },
            //  { label: 'Market Access', val: 'GLOBAL_SECURE' }
           ].map((item, i) => (
             <div key={i} className="flex flex-col gap-1.5 group cursor-default">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest group-hover:text-blue-500/40 transition-colors">
                    {item.label}
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    {item.val}
                </span>
             </div>
           ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-up {
          0% { transform: translateY(60px); opacity: 0; filter: blur(10px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        .animate-fade-up {
          animation: fade-up 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes core-pulse {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes galaxy-rotate-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.9); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        .animate-core-pulse { animation: core-pulse 12s ease-in-out infinite; }
        .animate-galaxy-rotate-slow { animation: galaxy-rotate-slow 180s linear infinite; }
        .animate-twinkle { animation: twinkle 8s ease-in-out infinite; }
      `}} />
    </section>
  );
};