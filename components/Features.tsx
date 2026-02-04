import React from 'react';
import { Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';

const expertise = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Neural Execution',
    description: 'Proprietary deep learning models that optimize trade entry and exit for minimal slippage.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Risk Parity',
    description: 'Dynamic volatility weighting that preserves capital during extreme market shifts.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'HFT Infrastructure',
    description: 'Co-located hardware stacks in major financial hubs providing millisecond advantages.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Arbitrage',
    description: 'Scanning 40+ liquid markets simultaneously for cross-asset price inefficiencies.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="methodology" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Expertise at the edge of math and code.</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              We operate at the intersection of quantitative analysis and software engineering, delivering superior risk-adjusted returns.
            </p>
          </div>
          <div className="text-blue-500 font-bold flex items-center gap-2 cursor-pointer hover:underline">
            View full documentation <Zap size={16} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-3xl">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-950 p-10 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};