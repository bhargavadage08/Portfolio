import React, { useState, useEffect } from 'react';
import { 
  Code2, Cpu, Database, Sparkles, 
  Lightbulb, ArrowRight, Atom, Smartphone, 
  Layout, Brain, Terminal, Zap, FileCode, Server, Cloud, Box 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillSlides = [
    {
      id: 'frontend',
      category: "Frontend Languages",
      shortName: "Frontend",
      description: "Building responsive, modern web & mobile user interfaces.",
      icon: Code2,
      skills: [
        { name: "React", icon: Atom },
        { name: "Flutter & Dart", icon: Smartphone },
        { name: "HTML & CSS", icon: Code2 },
        { name: "Tailwind CSS & Bootstrap", icon: Layout }
      ]
    },
    {
      id: 'ai-ml',
      category: "AI / ML & Gen AI",
      shortName: "AI / ML & Gen AI",
      description: "Context-aware AI search systems, RAG workflows & LLMs.",
      icon: Sparkles,
      skills: [
        { name: "RAG & LangChain", icon: Brain },
        { name: "Python for AI/ML", icon: Terminal },
        { name: "Vector Databases", icon: Database },
        { name: "GenAI Integrations", icon: Sparkles }
      ]
    },
    {
      id: 'backend',
      category: "Backend Frameworks",
      shortName: "Backend",
      description: "High-performance server backends, APIs, and microservices.",
      icon: Cpu,
      skills: [
        { name: "FastAPI", icon: Zap },
        { name: "JavaScript", icon: FileCode },
        { name: "C#", icon: Server },
        { name: "Python", icon: Terminal }
      ]
    },
    {
      id: 'database-cloud',
      category: "Database & Cloud",
      shortName: "Database & Cloud",
      description: "Relational database design, cloud infrastructure, and DevOps.",
      icon: Database,
      skills: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Box }
      ]
    }
  ];

  // Automatic slide rotation every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skillSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [skillSlides.length]);

  const activeSlide = skillSlides[currentSlide];
  const IconComponent = activeSlide.icon;

  return (
    <section id="about" className="min-h-screen py-24 px-4 sm:px-12 md:px-16 flex flex-col justify-center relative bg-transparent text-neutral-100 overflow-hidden">
      {/* Ambient background glow elements like Hero section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-10 relative z-10">

        {/* 2-Column Grid Layout: Left Headline, Right Skills Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Creative Mind Headline & Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
              <Lightbulb size={14} className="text-cyan-400 animate-pulse" />
              <span>Creative Mind & Innovator</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Creative <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Mind.
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal max-w-md">
              Combining creative problem solving with structured software engineering to build intelligent digital tools.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-cyan-300 text-xs sm:text-sm font-mono font-semibold transition-all"
              >
                <span>Read Full Biography Page</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Side: Compact Auto-Playing Skills Slider (Uniform Equal 2x2 Cards) */}
          <div className="lg:col-span-6 space-y-4 max-w-sm w-full ml-auto">
            
            {/* Category Tab Names with Monochrome White Underline Indicator */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-end border-b border-neutral-900/60 pb-1">
              {skillSlides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative pb-1.5 text-xs font-mono transition-colors cursor-pointer ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-neutral-500 font-normal'
                    }`}
                  >
                    <span>{slide.shortName}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Ultra Compact Transparent Slider Container */}
            <div className="relative p-0 bg-transparent border-0 h-[195px] sm:h-[175px] flex flex-col justify-between">
              
              {/* Top Slide Meta Bar */}
              <div className="flex items-center justify-between border-b border-neutral-900/80 pb-1.5 flex-wrap gap-2 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-neutral-900 text-cyan-400 flex items-center justify-center shrink-0">
                    <IconComponent size={14} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {activeSlide.category}
                  </h3>
                </div>

                <span className="text-cyan-400 font-mono text-[11px] opacity-80">
                  {currentSlide + 1} / {skillSlides.length}
                </span>
              </div>

              {/* Slide Content: 2x2 Split Layout with Uniform Equal-Sized Cards */}
              <div className="grid grid-cols-2 gap-2.5 my-auto shrink-0 w-full">
                {activeSlide.skills.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="h-20 p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex flex-col items-center justify-center text-center hover:border-neutral-800 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-neutral-900 text-cyan-400 flex items-center justify-center mb-1 shrink-0">
                        <SkillIcon size={15} />
                      </div>
                      <h4 className="text-white text-[11px] font-semibold leading-tight text-center truncate w-full">
                        {skill.name}
                      </h4>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Slider Progress Indicator Dots */}
              <div className="flex items-center justify-center pt-1.5 border-t border-neutral-900/80 shrink-0">
                <div className="flex items-center gap-1.5">
                  {skillSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === index ? 'w-5 bg-cyan-400' : 'w-1.5 bg-neutral-800'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
