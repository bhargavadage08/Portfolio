import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/useSound';
import { ShieldCheck, Award, QrCode, Cpu, CheckCircle2, RotateCw, Sparkles, Terminal } from 'lucide-react';

export default function HolographicBadge() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    soundFx.playLaunch();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={toggleFlip}
      className="group relative w-full h-[380px] cursor-pointer [perspective:1000px]"
    >
      <div
        className={`relative w-full h-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        
        {/* FRONT SIDE OF HOLOGRAPHIC PASS */}
        <div className="absolute inset-0 w-full h-full rounded-3xl glass-card p-6 border border-cyan-500/30 shadow-2xl flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
          
          {/* Metallic Holographic Glare Overlay */}
          <div className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-out" />

          {/* Pass Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                  SECURITY CLEARANCE LEVEL 5
                </span>
                <span className="text-xs font-bold text-white">CYBER ARCHITECT PASS</span>
              </div>
            </div>

            <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              ID: #8921-X
            </span>
          </div>

          {/* Central Avatar & Name Section */}
          <div className="flex items-center gap-4 py-2">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400 font-extrabold text-xl font-mono">
                AD
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full" />
            </div>

            <div className="space-y-0.5">
              <h3 className="text-xl font-extrabold text-white tracking-tight">{PORTFOLIO_DATA.personal.name}</h3>
              <p className="text-xs text-cyan-300 font-mono font-medium">{PORTFOLIO_DATA.personal.title}</p>
              <div className="text-[10px] text-slate-400 flex items-center gap-1 font-mono pt-1">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>Status: Operational & Ready</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-[9px] font-mono text-slate-400">EXP</div>
              <div className="text-xs font-bold text-cyan-300">4+ Years</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-[9px] font-mono text-slate-400">PROJECTS</div>
              <div className="text-xs font-bold text-emerald-300">25+ Built</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-[9px] font-mono text-slate-400">COMMITS</div>
              <div className="text-xs font-bold text-amber-300">3,400+</div>
            </div>
          </div>

          {/* Barcode & Flip Indicator Footer */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4 text-cyan-400" />
              <span className="tracking-widest">||| | |||| | |||||</span>
            </div>

            <span className="text-cyan-400 flex items-center gap-1">
              <RotateCw className="w-3 h-3" /> Click to Flip Pass
            </span>
          </div>

        </div>

        {/* BACK SIDE OF HOLOGRAPHIC PASS */}
        <div className="absolute inset-0 w-full h-full rounded-3xl glass-card p-6 border border-indigo-500/30 shadow-2xl flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              SYSTEM VERIFICATION LOGS
            </span>
            <span className="text-[10px] font-mono text-slate-400">AUTH #OK-99</span>
          </div>

          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span>Frontend Architecture</span>
              <span className="text-cyan-400 font-bold">React 19 / TS</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span>Cloud Microservices</span>
              <span className="text-emerald-400 font-bold">Node / FastAPI</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span>Code Audit Ratio</span>
              <span className="text-amber-400 font-bold">99.9% Clean</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-200 text-center">
            ✔ Verified Developer Pass — Ready for Deployment
          </div>

          <div className="pt-2 border-t border-slate-800 text-center text-[10px] font-mono text-cyan-400 flex justify-center items-center gap-1">
            <RotateCw className="w-3 h-3" /> Click to Flip Back
          </div>

        </div>

      </div>
    </div>
  );
}
