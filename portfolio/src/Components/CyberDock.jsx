import React from 'react';
import { Folder, Code2, Briefcase, Mail, Gamepad2, Terminal, Search, Sparkles, Layout } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { soundFx } from '../utils/useSound';

export default function CyberDock({ onOpenPalette, onOpenTerminal, onOpenGame }) {
  const { openWindows, toggleWindow, activeWindow } = useTheme();

  const dockApps = [
    { id: 'projects', label: 'Projects Matrix', icon: Folder, color: 'text-cyan-400', isWin: true },
    { id: 'skills', label: 'Skills Lab', icon: Code2, color: 'text-indigo-400', isWin: true },
    { id: 'experience', label: 'Career Timeline', icon: Briefcase, color: 'text-emerald-400', isWin: true },
    { id: 'contact', label: 'Contact Hub', icon: Mail, color: 'text-pink-400', isWin: true },
    { id: 'arcade', label: 'Cyber Arcade', icon: Gamepad2, color: 'text-amber-400', action: onOpenGame },
    { id: 'cli', label: 'Unix Terminal', icon: Terminal, color: 'text-emerald-300', action: onOpenTerminal },
    { id: 'search', label: 'Command Palette', icon: Search, color: 'text-cyan-300', action: onOpenPalette },
  ];

  const handleAppClick = (app) => {
    soundFx.playClick();
    if (app.isWin) {
      toggleWindow(app.id);
    } else if (app.action) {
      app.action();
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-2 p-2 rounded-2xl glass-card border border-slate-700/80 shadow-2xl backdrop-blur-xl bg-slate-950/80">
        {dockApps.map((app) => {
          const Icon = app.icon;
          const isOpen = app.isWin ? openWindows[app.id] : false;
          const isActive = app.isWin ? activeWindow === app.id : false;

          return (
            <button
              key={app.id}
              onClick={() => handleAppClick(app)}
              className={`relative p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 group ${
                isActive
                  ? 'bg-cyan-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/80'
              }`}
              title={app.label}
            >
              <Icon className={`w-5 h-5 ${app.color}`} />
              
              {/* App Label Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                {app.label}
              </div>

              {/* Active Indicator Dot */}
              {isOpen && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
