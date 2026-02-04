import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { MarketDashboard } from './components/MarketDashboard';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme class on document body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0F172A';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Features />
        <div className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <MarketDashboard />
        </div>
      </main>

      <Contact />
    </div>
  );
};

export default App;