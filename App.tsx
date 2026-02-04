import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  // Set dark mode default
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#000000';
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-hidden">
      <Navbar />
      
      <main className="w-full">
        {/* Section 1: Landing Only */}
        <Hero />
      </main>
    </div>
  );
};

export default App;