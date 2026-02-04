import React from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  variant: 'ai' | 'space';
}

export const FocusAreas: React.FC<SectionProps> = ({ title, subtitle, description, buttonText, variant }) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-24 lg:pb-32 overflow-hidden border-t border-white/10">
      
      {/* Dynamic Backgrounds based on variant */}
      <div className="absolute inset-0 z-0">
        {variant === 'ai' ? (
            <>
                <div className="absolute inset-0 bg-black" />
                {/* Neural network abstract */}
                <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-gradient-to-bl from-purple-900/20 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-blue-900/10 blur-[100px]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
            </>
        ) : (
            <>
                <div className="absolute inset-0 bg-black" />
                {/* Space/Moon abstract */}
                <div className="absolute top-[-50%] left-[20%] w-[100vw] h-[100vw] bg-white/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-full h-[30vh] bg-gradient-to-t from-cyan-900/20 to-transparent" />
            </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content Content - Left Aligned like SpaceX */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl animate-in slide-in-from-bottom-8 fade-in duration-700">
          <h3 className="text-lg md:text-xl font-bold text-white/90 mb-2 uppercase tracking-[0.2em]">
            {subtitle}
          </h3>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-[0.9]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-10 font-medium max-w-lg leading-relaxed">
            {description}
          </p>
          
          <button className="px-12 py-4 border-2 border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};