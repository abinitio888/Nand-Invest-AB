import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MarketDashboard } from './components/MarketDashboard';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nand-dark text-nand-text selection:bg-nand-accent selection:text-nand-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MarketDashboard />
      </main>
      <Contact />
    </div>
  );
};

export default App;