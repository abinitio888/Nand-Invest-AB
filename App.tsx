import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  // Set dark mode default
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#050505';
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
      </main>
    </div>
  );
};

export default App;