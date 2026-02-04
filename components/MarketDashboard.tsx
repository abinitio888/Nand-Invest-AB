import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Send, Bot, User, Loader2, Terminal } from 'lucide-react';
import { getMarketAnalysis } from '../services/geminiService';
import { ChatMessage, LoadingState, MarketDataPoint } from '../types';

// Mock data generation
const generateData = (): MarketDataPoint[] => {
  const data: MarketDataPoint[] = [];
  let val = 100;
  let bench = 100;
  for (let i = 0; i < 50; i++) {
    val = val * (1 + (Math.random() * 0.06 - 0.025)); // More volatility, higher upside
    bench = bench * (1 + (Math.random() * 0.04 - 0.018));
    data.push({
      time: `09:${30 + i}`,
      value: parseFloat(val.toFixed(2)),
      benchmark: parseFloat(bench.toFixed(2))
    });
  }
  return data;
};

export const MarketDashboard: React.FC = () => {
  const [data, setData] = useState<MarketDataPoint[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'system', content: 'Connected to Nand Neural Core. Ask me about market conditions or our algorithmic strategy.', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData(generateData());
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000); // "Live" update every 5s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: input, timestamp: Date.now() };
    setChatHistory(prev => [...prev, userMsg]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    const responseText = await getMarketAnalysis(input);

    const botMsg: ChatMessage = { role: 'model', content: responseText, timestamp: Date.now() };
    setChatHistory(prev => [...prev, botMsg]);
    setLoadingState(LoadingState.SUCCESS);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="analysis" className="py-24 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[800px] lg:h-[600px]">
          
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-nand-card rounded-2xl border border-white/5 p-6 flex flex-col shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Terminal size={20} className="text-nand-accent"/> NAND Performance Index
                </h3>
                <p className="text-xs text-nand-muted font-mono mt-1">LIVE TICKER: NND-AI // LATENCY: 12ms</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">+24.8%</div>
                    <div className="text-xs text-nand-muted">YTD Return</div>
                 </div>
              </div>
            </div>
            <div className="flex-grow w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#151B2B', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#00E5FF' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#00E5FF" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                  <Area type="monotone" dataKey="benchmark" stroke="#64748B" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chat AI Section */}
          <div className="bg-nand-card rounded-2xl border border-white/5 flex flex-col shadow-xl overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="text-nand-accent" size={20} />
                <span className="font-semibold text-white">Nand AI Analyst</span>
              </div>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase rounded-full tracking-wider">
                Online
              </span>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-nand-secondary text-white rounded-br-none' 
                        : msg.role === 'system' 
                          ? 'bg-yellow-500/10 text-yellow-200 border border-yellow-500/20' 
                          : 'bg-white/10 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loadingState === LoadingState.LOADING && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-lg rounded-bl-none">
                    <Loader2 className="w-5 h-5 text-nand-accent animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-[#0f1522]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about market trends..."
                  disabled={loadingState === LoadingState.LOADING}
                  className="w-full bg-nand-dark border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-nand-accent/50 focus:ring-1 focus:ring-nand-accent/50 placeholder-gray-600 disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loadingState === LoadingState.LOADING || !input.trim()}
                  className="absolute right-2 p-1.5 text-nand-accent hover:bg-white/10 rounded-md transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-2 text-center">
                 <p className="text-[10px] text-gray-600">AI generated content may be inaccurate. Not financial advice.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};