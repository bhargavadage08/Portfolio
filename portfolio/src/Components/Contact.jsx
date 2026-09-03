import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-24 bg-slate-900/40 border-y border-slate-800/50 px-4">
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mt-3" />
        </div>
        <p className="text-slate-300 text-base leading-relaxed">
          Whether you're interested in AI/ML solutions, full-stack projects, or prospective collaborations, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${personal.email}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/20"
          >
            Send Email ({personal.email})
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-all"
          >
            GitHub Profile
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-all"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

