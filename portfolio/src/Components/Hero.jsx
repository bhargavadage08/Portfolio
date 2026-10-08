import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="min-h-screen min-h-[100dvh] pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 flex flex-col justify-between px-4 sm:px-8 md:px-12 relative overflow-hidden bg-transparent text-neutral-100 z-10">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between flex-1 gap-12 lg:gap-16 relative z-10">

        {/* Top Section: Name on Left, Short Info Card on Top Right / Middle */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">

          {/* Top Left Greeting */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight pt-1">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>
                {personal.name}
              </span>
            </h2>
          </div>

          {/* Top Right / Slightly Middle Short Information Card */}
          <div className="md:max-w-md w-full p-6 ">
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              {personal.tagline} {personal.bio.slice(0, 140)}...
            </p>
          </div>

        </div>

        {/* Main Full-Page Display Banner for AI/ML & FULL STACK DEVELOPER */}
        <div className="space-y-8 my-auto pt-6 pb-6">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[125px] font-black uppercase tracking-tighter text-white leading-[0.95] select-none">
            AI/ML & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>
              GEN AI
            </span> ENGINEER
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-neutral-800/80 pt-8">
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-widest text-neutral-400">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
