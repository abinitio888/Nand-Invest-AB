import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-10 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tight text-white select-none">
        Nand Invest AB
      </div>
      <a 
        href="mailto:cj@nands.se" 
        className="text-sm font-bold text-white/80 hover:text-cyan-400 transition-colors tracking-widest"
      >
        Email
      </a>
    </nav>
  );
};