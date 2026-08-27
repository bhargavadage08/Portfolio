import React from 'react';
import { useTheme } from '../context/ThemeContext';
import OSWindow from './OSWindow';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import { Folder, Code2, Briefcase, Mail, Gamepad2, Terminal, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/useSound';

export default function OSDesktop({ onOpenTerminal, onOpenGame, onOpenPalette }) {
  const { openWindows, closeWindow, openWindow } = useTheme();

  const desktopShortcuts = [
    { id: 'projects', label: 'Projects Matrix', icon: Folder, color: 'text-cyan-400' },
    { id: 'skills', label: 'Skills Lab', icon: Code2, color: 'text-indigo-400' },
    { id: 'experience', label: 'Career Timeline', icon: Briefcase, color: 'text-emerald-400' },
    { id: 'contact', label: 'Contact Hub', icon: Mail, color: 'text-pink-400' },
  ];

  return (
    <div className="relative min-h-screen pt-10 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Desktop Welcome Hero Workspace */}
      <Hero
        onOpenTerminal={onOpenTerminal}
        onOpenGame={onOpenGame}
        onOpenPalette={onOpenPalette}
      />

      {/* Desktop Quick App Launcher Cards */}
      <div className="my-16 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              OS APPLICATIONS & WORKSPACE MODULES
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">Click any module to open app window</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {desktopShortcuts.map((sc) => {
            const Icon = sc.icon;
            return (
              <button
                key={sc.id}
                onClick={() => { soundFx.playClick(); openWindow(sc.id); }}
                className="p-5 rounded-2xl glass-card border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all text-left group flex flex-col justify-between space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${sc.color}`} />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors text-base">
                    {sc.label}
                  </div>
                  <div className="text-xs text-slate-400 font-mono pt-1">
                    Launch Interactive App Window ▶
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Embedded Page Sections for seamless scroll accessibility */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* FLOATING DESKTOP OS WINDOWS */}
      <OSWindow
        id="projects"
        title="Projects Matrix App (v3.0)"
        icon={Folder}
        isOpen={openWindows.projects}
        onClose={() => closeWindow('projects')}
      >
        <Projects />
      </OSWindow>

      <OSWindow
        id="skills"
        title="Skills Lab & Interactive Inspector (v3.0)"
        icon={Code2}
        isOpen={openWindows.skills}
        onClose={() => closeWindow('skills')}
      >
        <Skills />
      </OSWindow>

      <OSWindow
        id="experience"
        title="Career Roadmap & Achievements (v3.0)"
        icon={Briefcase}
        isOpen={openWindows.experience}
        onClose={() => closeWindow('experience')}
      >
        <Experience />
      </OSWindow>

      <OSWindow
        id="contact"
        title="Communications Hub & Scheduler (v3.0)"
        icon={Mail}
        isOpen={openWindows.contact}
        onClose={() => closeWindow('contact')}
      >
        <Contact />
      </OSWindow>

    </div>
  );
}
