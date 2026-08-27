import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { soundFx } from '../utils/useSound';
import { Cpu, Zap, ShieldCheck, Sparkles, Layers, Terminal } from 'lucide-react';

export default function HolographicCore() {
  const canvasRef = useRef(null);
  const { themeConfig } = useTheme();
  const [activeNode, setActiveNode] = useState(0);
  const [coreMode, setCoreMode] = useState('quantum'); // 'quantum' | 'overdrive' | 'shield'

  const orbitalNodes = [
    { title: "Full Stack Architecture", desc: "React 19 + TypeScript + FastAPI + Node.js", icon: Layers, metric: "100k+ Users" },
    { title: "Cloud & Microservices", desc: "AWS + Docker + K8s + Redis Pipelines", icon: Cpu, metric: "99.99% Uptime" },
    { title: "Performance Engine", desc: "Sub-20ms Latency & SSR Optimization", icon: Zap, metric: "99/100 Lighthouse" },
    { title: "Cyber Security & Auth", desc: "OAuth2 + JWT + Zero Trust Standards", icon: ShieldCheck, metric: "Zero Vuln" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 400);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 360;
      }
    };
    window.addEventListener('resize', handleResize);

    let angle = 0;
    let particles = Array.from({ length: 40 }, () => ({
      orbitRadius: Math.random() * 80 + 40,
      angle: Math.random() * Math.PI * 2,
      speed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      size: Math.random() * 2.5 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw Pulsing Outer Orbit Rings
      angle += coreMode === 'overdrive' ? 0.03 : 0.015;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Orbit Ring 1 (Horizontal Ellipse)
      ctx.beginPath();
      ctx.ellipse(0, 0, 130, 45, angle * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = themeConfig.accent;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Orbit Ring 2 (Vertical Ellipse)
      ctx.beginPath();
      ctx.ellipse(0, 0, 110, 110, -angle * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = coreMode === 'overdrive' ? '#f43f5e' : '#8b5cf6';
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Draw Orbiting Energy Particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = Math.cos(p.angle) * p.orbitRadius;
        const py = Math.sin(p.angle) * (p.orbitRadius * 0.5);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = themeConfig.accent;
        ctx.globalAlpha = 0.8;
        ctx.fill();
      });

      // 3. Central Quantum Core Sphere
      const corePulse = Math.sin(angle * 3) * 6;
      const coreRadius = (coreMode === 'overdrive' ? 38 : 30) + corePulse;

      const gradient = ctx.createRadialGradient(0, 0, 2, 0, 0, coreRadius);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, themeConfig.accent);
      gradient.addColorStop(0.8, 'rgba(99, 102, 241, 0.6)');
      gradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.9;
      ctx.fill();

      // Core Glow Halo
      ctx.beginPath();
      ctx.arc(0, 0, coreRadius + 12, 0, Math.PI * 2);
      ctx.fillStyle = themeConfig.accent;
      ctx.globalAlpha = 0.15;
      ctx.fill();

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [themeConfig, coreMode]);

  const toggleCoreMode = (mode) => {
    soundFx.playLaunch();
    setCoreMode(mode);
  };

  const nextNode = (idx) => {
    soundFx.playClick();
    setActiveNode(idx);
  };

  const CurrentIcon = orbitalNodes[activeNode].icon;

  return (
    <div className="relative glass-card rounded-3xl p-6 border border-slate-800/80 shadow-2xl overflow-hidden group">
      
      {/* Top Header Badge */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            QUANTUM CORE REACTOR
          </span>
        </div>

        {/* Reactor Mode Buttons */}
        <div className="flex gap-1 bg-slate-950 px-2 py-1 rounded-xl text-[10px] font-mono">
          <button
            onClick={() => toggleCoreMode('quantum')}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              coreMode === 'quantum' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Quantum
          </button>
          <button
            onClick={() => toggleCoreMode('overdrive')}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              coreMode === 'overdrive' ? 'bg-rose-500/20 text-rose-300 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Overdrive⚡
          </button>
        </div>
      </div>

      {/* 3D Core Canvas Canvas Container */}
      <div className="relative w-full h-[240px] flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Floating Holographic Center Tag */}
        <div className="absolute pointer-events-none text-center space-y-0.5">
          <div className="text-[10px] font-mono text-cyan-300/90 font-bold tracking-widest uppercase bg-slate-950/80 px-2 py-0.5 rounded-full border border-cyan-500/40 backdrop-blur-sm inline-block">
            {coreMode.toUpperCase()} ENGINE
          </div>
        </div>
      </div>

      {/* Orbital Node Selector Tabs */}
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800/80">
        {orbitalNodes.map((node, idx) => {
          const NodeIcon = node.icon;
          return (
            <button
              key={idx}
              onClick={() => nextNode(idx)}
              className={`p-2.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                activeNode === idx
                  ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
              }`}
            >
              <NodeIcon className={`w-4 h-4 mb-1 ${activeNode === idx ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span className="text-[10px] font-mono leading-tight font-bold line-clamp-1">
                {node.title.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Card */}
      <div className="mt-3 p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-1">
        <div className="flex items-center justify-between text-xs font-bold text-white">
          <div className="flex items-center gap-2">
            <CurrentIcon className="w-4 h-4 text-cyan-400" />
            <span>{orbitalNodes[activeNode].title}</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800">
            {orbitalNodes[activeNode].metric}
          </span>
        </div>
        <p className="text-[11px] text-slate-400 font-mono">
          {orbitalNodes[activeNode].desc}
        </p>
      </div>

    </div>
  );
}
