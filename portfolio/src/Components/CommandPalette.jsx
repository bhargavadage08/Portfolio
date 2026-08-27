import React, { useState, useEffect } from 'react';
import { Search, Terminal, Sparkles, Volume2, VolumeX, Palette, Gamepad2, ArrowRight, X, Code2, Folder, Briefcase, Mail } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/useSound';

export default function CommandPalette({ isOpen, onClose, onOpenGame, onOpenTerminal }) {
  const [query, setQuery] = useState('');
  const { theme, changeTheme, bgMode, setBgMode, soundEnabled, setSoundEnabled } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playLaunch();
        if (isOpen) onClose();
        else {
          onClose(); // reset if needed
        }
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        soundFx.playLaunch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (href) => {
    soundFx.playClick();
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTheme = (tId) => {
    soundFx.playClick();
    changeTheme(tId);
  };

  const handleSelectBgMode = (mode) => {
    soundFx.playClick();
    setBgMode(mode);
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFx.toggleSound(next);
    if (next) soundFx.playClick();
  };

  // Filter items
  const filteredProjects = PORTFOLIO_DATA.projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSkills = [
    ...PORTFOLIO_DATA.skills.frontend,
    ...PORTFOLIO_DATA.skills.backend,
    ...PORTFOLIO_DATA.skills.devops
  ].filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-2xl w-full rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl space-y-0 relative">
        
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-800/80 flex items-center gap-3 bg-slate-900/90">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. 'React', 'Projects', 'Theme', 'Game')..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Options List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6 text-xs text-slate-300">
          
          {/* Quick Actions / Apps */}
          {!query && (
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold px-2">
                Quick Actions & Interactive Modes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => { onClose(); onOpenGame(); }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Gamepad2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-cyan-300">Launch Cyber Arcade</div>
                    <div className="text-[10px] text-slate-400">Play 45s Code Defense Game</div>
                  </div>
                </button>

                <button
                  onClick={() => { onClose(); onOpenTerminal(); }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-emerald-300">Open Cyber Terminal CLI</div>
                    <div className="text-[10px] text-slate-400">Interactive Unix Command Prompt</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Quick Section Navigation */}
          {!query && (
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold px-2">
                Section Jump
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'About', href: '#about', icon: Sparkles },
                  { label: 'Skills', href: '#skills', icon: Code2 },
                  { label: 'Projects', href: '#projects', icon: Folder },
                  { label: 'Experience', href: '#experience', icon: Briefcase },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => navigateTo(item.href)}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/40 transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium text-slate-200">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Theme & Audio Controls */}
          {!query && (
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold px-2">
                Customization Controls
              </div>
              
              {/* Color Themes */}
              <div className="space-y-1.5 px-2">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-cyan-400" /> Select Visual Theme:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.values(THEMES).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleSelectTheme(t.id)}
                      className={`p-2 rounded-xl font-mono text-[11px] text-left border transition-all ${
                        theme === t.id
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm'
                          : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background Canvas Mode & Sound */}
              <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">Background Engine:</span>
                  {['neural', 'matrix', 'grid'].map((m) => (
                    <button
                      key={m}
                      onClick={() => handleSelectBgMode(m)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] uppercase font-mono border ${
                        bgMode === m
                          ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleToggleSound}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
                  <span>Sound: {soundEnabled ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="space-y-4">
              {filteredProjects.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-cyan-400 font-bold px-2">Projects ({filteredProjects.length})</div>
                  {filteredProjects.map(p => (
                    <div
                      key={p.id}
                      onClick={() => navigateTo('#projects')}
                      className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <div className="font-bold text-white">{p.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{p.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                    </div>
                  ))}
                </div>
              )}

              {filteredSkills.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-cyan-400 font-bold px-2">Skills ({filteredSkills.length})</div>
                  <div className="grid grid-cols-2 gap-2">
                    {filteredSkills.map(s => (
                      <div
                        key={s.name}
                        onClick={() => navigateTo('#skills')}
                        className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between cursor-pointer"
                      >
                        <span className="font-medium text-white">{s.name}</span>
                        <span className="text-[10px] font-mono text-cyan-400">{s.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer Hint */}
        <div className="bg-slate-900/90 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">ESC</kbd> to close</span>
          <span>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Ctrl+K</kbd> anywhere</span>
        </div>
      </div>
    </div>
  );
}
