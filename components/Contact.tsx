import React from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Nand Invest AB</h3>
            <p className="text-nand-muted max-w-md mb-6">
              Pioneering the future of quantitative finance through rigorous mathematical modeling and cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nand-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-nand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-nand-accent transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-nand-muted">
                <MapPin size={18} className="mt-1 text-nand-secondary" />
                <span>Birger Jarlsgatan 12<br />114 34 Stockholm, Sweden</span>
              </li>
              <li className="flex items-center gap-3 text-nand-muted">
                <Mail size={18} className="text-nand-secondary" />
                <a href="mailto:cj@nands.se" className="hover:text-white transition-colors">cj@nands.se</a>
              </li>
              <li className="flex items-center gap-3 text-nand-muted">
                <Phone size={18} className="text-nand-secondary" />
                <span>+46 8 555 000</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-2 text-sm text-nand-muted">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Nand Invest AB. All rights reserved.</p>
          <p className="text-xs text-center md:text-right max-w-lg">
            Trading in financial markets involves a high degree of risk and may not be suitable for all investors. 
            Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};