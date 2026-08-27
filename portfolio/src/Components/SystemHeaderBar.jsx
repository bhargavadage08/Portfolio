import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Search, Terminal, Volume2, VolumeX, Palette, Sparkles, Wifi } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { soundFx } from '../utils/useSound';

export default function SystemHeaderBar({ onOpenPalette, onOpenTerminal }) {
  const [timeStr, setTimeStr] = useState('');
  const [cpuUsage, setCpuUsage] = useState(12);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, changeTheme, soundEnabled, setSoundEnabled } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Simulate subtle CPU telemetry fluctuation
    const cpuInterval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 8) + 10);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(cpuInterval);
    };
  }, []);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFx.toggleSound(next);
    if (next) soundFx.playClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 h-10 px-4 flex items-center justify-between text-xs font-mono text-slate-300">
      
      {/* Left: Brand & OS Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-bold text-white">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="tracking-widest uppercase">ALEX_OS v3.0</span>
        </div>

        <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-400 pl-3 border-l border-slate-800">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <Wifi className="w-3.5 h-3.5" />
            <span>99.99% Uptime</span>
          </div>

          <div className="flex items-center gap-1.5 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>CPU: {cpuUsage}%</span>
          </div>

          <div className="flex items-center gap-1.5 text-amber-400">
            <Activity className="w-3.5 h-3.5" />
            <span>RAM: 4.2GB</span>
          </div>
        </div>
      </div>

      {/* Center: Quick Command Trigger */}
      <button
        onClick={() => { soundFx.playClick(); onOpenPalette(); }}
        className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
      >
        <Search className="w-3 h-3 text-cyan-400" />
        <span>Command Palette</span>
        <kbd className="px-1 py-0.2 rounded bg-slate-800 text-[9px] text-slate-300 border border-slate-700">Ctrl+K</kbd>
      </button>

      {/* Right: Controls & Real-Time Clock */}
      <div className="flex items-center gap-3">
        
        {/* Terminal Button */}
        <button
          onClick={() => { soundFx.playClick(); onOpenTerminal(); }}
          className="p-1 rounded text-slate-400 hover:text-emerald-400"
          title="Launch Cyber Terminal"
        >
          <Terminal className="w-3.5 h-3.5" />
        </button>

        {/* Audio Toggle */}
        <button
          onClick={handleToggleSound}
          className="p-1 rounded text-slate-400 hover:text-cyan-400"
          title={`Sound: ${soundEnabled ? 'ON' : 'OFF'}`}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
        </button>

        {/* Theme Dropdown */}
        <div className="relative">
          <button
            onClick={() => { soundFx.playClick(); setThemeDropdownOpen(!themeDropdownOpen); }}
            className="p-1 rounded text-slate-400 hover:text-pink-400"
            title="Theme Customizer"
          >
            <Palette className="w-3.5 h-3.5" />
          </button>

          {themeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-xl glass-card border border-slate-700 p-1.5 shadow-2xl space-y-1 z-50">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    changeTheme(t.id);
                    setThemeDropdownOpen(false);
                    soundFx.playClick();
                  }}
                  className={`w-full text-left px-2 py-1 rounded text-[11px] font-mono transition-all ${
                    theme === t.id ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Real-time Clock */}
        <span className="font-mono text-[11px] text-cyan-300 font-bold pl-2 border-l border-slate-800">
          {timeStr}
        </span>
      </div>

    </header>
  );
}
