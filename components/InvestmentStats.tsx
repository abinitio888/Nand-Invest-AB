import React from 'react';

export const InvestmentStats: React.FC = () => {
  const stats = [
    { label: 'Asset Focus', value: 'Deep Tech' },
    { label: 'Growth Stage', value: 'Early - Series B' },
    { label: 'Geography', value: 'Global' },
    { label: 'AUM Reach', value: '$250M+' },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</div>
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};