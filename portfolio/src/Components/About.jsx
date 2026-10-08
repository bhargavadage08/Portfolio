import React, { useState, useEffect } from 'react';
import { 
  Code2, Sparkles, 
  Lightbulb, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local assets
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind.png';
import ragLogo from '../assets/rag.webp';

export default function About() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isHovered, setIsHovered] = useState(false);

  const tabs = ['Frontend', 'Backend', 'Database', 'AI/ML'];

  // Automatically slide the tabs every 3 seconds, pause on hover
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          return tabs[(currentIndex + 1) % tabs.length];
        });
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const skills = {
    "Frontend": [
      { name: 'React', logo: reactLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
    "Backend": [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ],
    "Database": [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
    "AI/ML": [
      { name: 'RAG', logo: ragLogo },
      { name: 'LangChain', logo: 'https://placehold.co/80x80/1a1a1a/06b6d4?text=LC' },
      { name: 'Vector DB', logo: 'https://placehold.co/80x80/1a1a1a/06b6d4?text=VDB' },
    ]
  };

  return (
    <section className="relative py-24 bg-transparent text-neutral-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Intro & Bio */}
          <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 font-medium text-sm w-fit">
              <Sparkles size={16} />
              <span>Get to know me</span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>
                Creative
              </span> Mind.
            </h2>
            
            {/* Quote block */}
            <blockquote className="relative p-6 mt-4 border-l-4 border-cyan-500 bg-neutral-900/40 rounded-r-2xl text-lg text-neutral-300 italic font-light leading-relaxed max-w-xl">
              "Technology is best when it brings people together and empowers them to create things they once thought impossible."
              <span className="block mt-4 text-sm text-cyan-400 font-medium not-italic">— Matt Mullenweg</span>
            </blockquote>

            {/* Satisfying Animated Button */}
            <div className="pt-8">
              <Link 
                to="/about-details"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 border border-cyan-500/50 rounded-full overflow-hidden text-cyan-400 font-bold tracking-wide transition-all duration-300 hover:border-cyan-400 hover:text-white shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                {/* Background sliding effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                
                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-3">
                  Know more about me
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Skills Grid Interactive */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            
            <div 
              className="w-full max-w-md"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Text Tabs with bottom hovering line */}
              <div className="flex space-x-6 mb-10 border-b border-neutral-800 w-full justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 font-bold text-sm transition-all duration-300 relative group ${
                      activeTab === tab 
                        ? 'text-cyan-400' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 rounded-t-full transition-all duration-300 ${
                        activeTab === tab ? 'bg-cyan-400 scale-x-100' : 'bg-neutral-600 scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-6 min-h-[350px]">
                {skills[activeTab].map((skill, index) => (
                  <div 
                    key={`${activeTab}-${index}`} 
                    className="flex flex-col items-center gap-3 group animate-fade-in"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`} 
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://placehold.co/80x80/1a1a1a/06b6d4?text=404';
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-neutral-300 group-hover:text-cyan-400 transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Link to="/contact" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors group">
                Let's work together 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}