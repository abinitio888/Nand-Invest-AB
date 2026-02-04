import React from 'react';

export const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
          Nand Invest AB &copy; {currentYear}
        </div>

        <div className="flex gap-8">
          {['Twitter', 'LinkedIn', 'Instagram', 'Privacy'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xs text-white font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};