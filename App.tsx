import React, { useEffect, useRef } from 'react';
import { Activity, Cpu, Wifi } from 'lucide-react';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas setup
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Configuration
    const conf = {
      gridSize: 60,
      gridColor: 'rgba(30, 41, 59, 0.5)',
      lineSpeed: 1.5,
      volatility: 2.5, // How much the line jumps
      smoothing: 0.1, // Momentum factor
    };

    // State for animation
    let time = 0;
    const maxPoints = Math.ceil(width / 5) + 20;
    
    // Two data series simulating correlated assets
    const series1: number[] = [];
    const series2: number[] = [];
    
    // Initialize with centered data
    let val1 = height / 2;
    let val2 = height / 2 + 50;
    
    for (let i = 0; i < maxPoints; i++) {
      series1.push(val1);
      series2.push(val2);
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Helper: Generate next price point with mean reversion
    const nextPrice = (current: number, target: number) => {
      const noise = (Math.random() - 0.5) * conf.volatility * 10;
      const pull = (target - current) * 0.02; // Pull back to center
      return current + noise + pull;
    };

    const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = conf.gridColor;
      ctx.lineWidth = 1;

      // Vertical perspective lines (moving)
      const xOffset = (time * conf.lineSpeed) % conf.gridSize;
      for (let x = -xOffset; x < width; x += conf.gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      // Horizontal lines
      for (let y = 0; y < height; y += conf.gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const drawChartLine = (data: number[], color: string, glowColor: string) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = glowColor;
      ctx.lineJoin = 'round';

      // Draw curve
      for (let i = 0; i < data.length - 1; i++) {
        const x = i * 5; // 5px spacing
        const y = data[i];
        const nextX = (i + 1) * 5;
        const nextY = data[i + 1];
        
        // Smooth quadratic curve between points
        const cx = (x + nextX) / 2;
        const cy = (y + nextY) / 2;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.quadraticCurveTo(x, y, cx, cy);
      }
      ctx.stroke();
      
      // Reset shadow for fill
      ctx.shadowBlur = 0;

      // Gradient Fill below line
      const lastX = (data.length - 1) * 5;
      ctx.lineTo(lastX, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, glowColor.replace('1)', '0.1)')); // heavy fade
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawParticles = (data: number[], color: string) => {
      ctx.fillStyle = color;
      // Draw random particles on the line to simulate trade executions
      for (let i = 0; i < data.length; i += 20) {
        if (Math.random() > 0.7) { // Flicker effect
          const x = i * 5;
          const y = data[i];
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Draw "Head" dot
      const headIndex = data.length - 20; // Offset from right edge
      if (headIndex > 0) {
         const headX = headIndex * 5;
         const headY = data[headIndex];
         
         ctx.beginPath();
         ctx.fillStyle = '#fff';
         ctx.shadowBlur = 10;
         ctx.shadowColor = '#fff';
         ctx.arc(headX, headY, 4, 0, Math.PI * 2);
         ctx.fill();
         ctx.shadowBlur = 0;

         // Crosshair
         ctx.strokeStyle = 'rgba(255,255,255,0.2)';
         ctx.lineWidth = 1;
         ctx.setLineDash([5, 5]);
         ctx.beginPath();
         ctx.moveTo(0, headY);
         ctx.lineTo(width, headY);
         ctx.moveTo(headX, 0);
         ctx.lineTo(headX, height);
         ctx.stroke();
         ctx.setLineDash([]);

         // Price Label
         ctx.font = '10px monospace';
         ctx.fillStyle = color;
         ctx.fillText(headY.toFixed(2), headX + 10, headY - 10);
      }
    };

    const animate = () => {
      // Clear screen with slight fade for trail effect (optional, currently disabled for crisp lines)
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, width, height);

      // 1. Update Data
      val1 = nextPrice(val1, height / 2);
      val2 = nextPrice(val2, height / 2);
      
      series1.shift();
      series1.push(val1);
      series2.shift();
      series2.push(val2);

      // 2. Draw Grid
      drawGrid();

      // 3. Draw Charts
      // Series 2 (Background/Secondary)
      drawChartLine(series2, '#7C3AED', 'rgba(124, 58, 237, 0.2)'); // Violet
      
      // Series 1 (Primary/Foreground)
      drawChartLine(series1, '#00E5FF', 'rgba(0, 229, 255, 0.2)'); // Cyan
      drawParticles(series1, '#00E5FF');

      // 4. HUD Elements overlay
      time++;
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-[#0B0F19] overflow-hidden cursor-crosshair">
      <canvas ref={canvasRef} className="absolute inset-0 block" />

      {/* Header Branding */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 pointer-events-none">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10">
              <Cpu className="text-[#00E5FF] w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-widest font-sans">
                NAND <span className="text-[#00E5FF]">INVEST</span>
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-gray-400 font-mono tracking-wider">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Corner */}
        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="flex items-center gap-4 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/5 rounded-full">
             <div className="flex items-center gap-2">
                <Wifi className="w-3 h-3 text-gray-400" />
                <span className="text-xs font-mono text-gray-400">LATENCY:</span>
                <span className="text-xs font-mono text-[#00E5FF]">0.04ms</span>
             </div>
             <div className="w-px h-3 bg-white/10"></div>
             <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-gray-400" />
                <span className="text-xs font-mono text-gray-400">UPTIME:</span>
                <span className="text-xs font-mono text-white">99.999%</span>
             </div>
          </div>
        </div>
      </header>

      {/* Floating Footer / Status */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
        <div className="px-6 py-3 bg-black/60 backdrop-blur-md border-t border-white/10 rounded-full flex items-center gap-6">
          <div className="flex flex-col items-center">
             <span className="text-[10px] text-gray-500 font-mono uppercase">Alpha Gen</span>
             <span className="text-sm font-bold text-white">+12.4%</span>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col items-center">
             <span className="text-[10px] text-gray-500 font-mono uppercase">Volatility</span>
             <span className="text-sm font-bold text-[#7C3AED]">LOW</span>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col items-center">
             <span className="text-[10px] text-gray-500 font-mono uppercase">Execution</span>
             <span className="text-sm font-bold text-[#00E5FF]">OPTIMAL</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;