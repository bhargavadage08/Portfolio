import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Let's Connect</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h2>
        </div>

        <p className="text-slate-300 text-base leading-relaxed max-w-lg mx-auto font-normal">
          Whether you have a question, a potential project, or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${personal.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Send size={16} />
            <span>Send Email ({personal.email})</span>
          </a>

          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
