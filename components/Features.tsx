import React from 'react';
import { Zap, Shield, BrainCircuit, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-nand-accent" />,
    title: 'Deep Learning Core',
    description: 'Our algorithms do not just follow rules; they learn. Using reinforcement learning, our models adapt to shifting market regimes in real-time.'
  },
  {
    icon: <Zap className="w-8 h-8 text-nand-accent" />,
    title: 'Microsecond Latency',
    description: 'Infrastructure co-located with major exchanges ensures execution speeds that capture opportunities before the market reacts.'
  },
  {
    icon: <Shield className="w-8 h-8 text-nand-accent" />,
    title: 'Dynamic Risk Management',
    description: 'AI-driven volatility forecasting adjusts position sizing instantly, protecting capital during black swan events.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-nand-accent" />,
    title: 'Alternative Data',
    description: 'We ingest unstructured data—from satellite imagery to sentiment analysis—to find alpha where others see noise.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-nand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Nand Advantage</h2>
          <p className="text-nand-muted max-w-2xl mx-auto">
            We bridge the gap between theoretical mathematics and practical market application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-nand-card rounded-xl border border-white/5 hover:border-nand-accent/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-nand-accent/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-nand-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};