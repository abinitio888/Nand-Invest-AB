import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="text-3xl font-black tracking-tighter">NANDS</div>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-sm">
              The quantitative investment partner for the next generation of financial markets.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:cj@nands.se" className="flex items-center gap-2 font-bold text-blue-500 hover:text-blue-600 transition-colors">
                <Mail size={18} /> cj@nands.se
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-6 opacity-50">Sitemap</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#methodology" className="hover:text-blue-500">Strategy</a></li>
                <li><a href="#analysis" className="hover:text-blue-500">Live Data</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-6 opacity-50">Office</h4>
              <p className="text-sm font-medium leading-relaxed">
                Birger Jarlsgatan 12<br />
                114 34 Stockholm<br />
                Sweden
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black uppercase text-xs tracking-widest mb-6 opacity-50">Social</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-500">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-100 dark:border-slate-900 text-sm font-medium opacity-50">
          <p>&copy; {new Date().getFullYear()} Nands Investment Group AB.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-blue-500">Privacy</a>
            <a href="#" className="hover:text-blue-500">Legal</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-slate-100 dark:bg-slate-900 p-3 rounded-full hover:scale-110 transition-transform"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};