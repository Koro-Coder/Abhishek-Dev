import React, { useState } from 'react';
import { Terminal, ArrowRight, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE600', '#FF6B4A', '#000000', '#A78BFA']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAvatarClick = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.4, x: 0.75 },
      colors: ['#FFE600', '#22C55E', '#38BDF8', '#FF6B4A']
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-pattern-blueprint border-b-[3px] border-black dark:border-white transition-colors duration-200">
      
      {/* Background Architectural Blueprint Stamps */}
      <div className="absolute top-20 right-8 font-mono text-[10px] font-bold text-slate-400 dark:text-slate-400 select-none hidden xl:block tracking-widest border border-slate-300 dark:border-white/40 px-2 py-0.5 rounded bg-white/60 dark:bg-black/60">
        SPEC: AA-ENG-2026 // GRID 120x24
      </div>
      <div className="absolute bottom-6 right-8 font-mono text-[10px] font-bold text-slate-400 dark:text-slate-400 select-none hidden xl:block tracking-widest border border-slate-300 dark:border-white/40 px-2 py-0.5 rounded bg-white/60 dark:bg-black/60">
        MATH & COMPUTING RIGOR // DTU 9.03
      </div>
      <div className="absolute top-24 left-8 font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 select-none hidden xl:block tracking-widest">
        + COORD: 12.9716° N, 77.5946° E
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-start order-2 lg:order-1">
            
            {/* Top Status Capsule */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#181B26] border-2 border-black dark:border-white text-xs font-mono font-bold text-black dark:text-white mb-8 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] border border-black dark:border-white inline-block animate-pulse"></span>
              <span>SOFTWARE ENGINEER @ WELLS FARGO</span>
              <span className="text-slate-400">|</span>
              <span className="text-black dark:text-slate-200">BACKEND & AI SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-black dark:text-white mb-8 leading-[1.1]">
              Hi, I'm{' '}
              <span className="bg-[#FFE600] px-3 py-1 border-[2.5px] border-black dark:border-white inline-block shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#FFF] -rotate-1 rounded-lg text-black">
                Abhishek Aggarwal
              </span>.
              <br />
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-200 mt-2 block">
                I build high-scale backend microservices & autonomous AI agents.
              </span>
            </h1>

            {/* Subtitle / Bio note */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mb-10">
              Software Engineer at <strong className="text-black dark:text-white font-extrabold underline decoration-[#FFE600] decoration-4">Wells Fargo</strong> with 2+ years designing distributed systems, role-based hybrid search algorithms, and production web platforms.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFE600] hover:bg-[#FACC15] text-black font-extrabold text-sm border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#FFE600] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#A78BFA] hover:bg-[#8B5CF6] text-black font-mono font-bold text-xs border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#A78BFA] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-black" />
                <span>Launch Terminal</span>
                <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded border border-black font-mono">
                  CLI
                </span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-[#181B26] hover:bg-slate-50 dark:hover:bg-[#222736] text-black dark:text-white font-mono font-bold text-xs border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black dark:text-white" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Playful Cutout Sticker (4 Cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
            <div 
              className="relative group select-none"
              onClick={handleAvatarClick}
            >
              {/* Playful Floating Speech Bubble / Neubrutalist Badge */}
              <div className="absolute -top-5 -left-3 sm:-left-5 px-3 py-1 rounded-md bg-[#FFE600] border-2 border-black dark:border-white font-mono font-black text-xs text-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600] -rotate-6 z-20 group-hover:rotate-0 group-hover:scale-105 transition-all">
                <span>HEY THERE! 👋</span>
              </div>

              {/* Cutout Image with Electric Neon Neubrutalist drop shadow */}
              <img 
                src={`${import.meta.env.BASE_URL}abhishek-avatar.png`} 
                alt="Abhishek Aggarwal" 
                className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-contain filter drop-shadow-[8px_8px_0px_#000] dark:drop-shadow-[8px_8px_0px_#FFE600] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300 select-none"
              />

              {/* Bottom sticker badge */}
              <div className="absolute -bottom-2 -right-1 px-3 py-1 rounded-md bg-white dark:bg-[#181B26] border-2 border-black dark:border-white font-mono font-bold text-[11px] text-black dark:text-white shadow-[2.5px_2.5px_0px_#000] dark:shadow-[2.5px_2.5px_0px_#22C55E] rotate-3 group-hover:rotate-0 transition-all">
                <span>⚡ 100% BUILDER</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
