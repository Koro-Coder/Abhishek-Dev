import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer className="py-14 bg-[#FAF7EE] dark:bg-[#0D0F14] border-t-[3px] border-black dark:border-white text-xs font-mono text-black dark:text-slate-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b-2 border-black dark:border-white/30">
          
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600] border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFE600] flex items-center justify-center font-black text-black text-sm">
                AA
              </div>
              <span className="text-black dark:text-white font-black text-base">
                Abhishek Aggarwal
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#22C55E] text-black border border-black dark:border-white font-bold text-[10px]">
                ● PROD SYSTEM ONLINE
              </span>
            </div>
            <p className="text-slate-800 dark:text-slate-400 max-w-sm font-medium leading-relaxed text-xs">
              Software Engineer at Wells Fargo designing resilient backend microservices, high-scale hybrid search algorithms, and agentic AI systems.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-[#161922] border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#38BDF8] hover:bg-[#38BDF8] text-black dark:text-white dark:hover:text-black transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-[#161922] border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#A78BFA] hover:bg-[#A78BFA] text-black dark:text-white dark:hover:text-black transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFE600] border-2 border-black dark:border-white text-black font-bold text-xs shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFE600] hover:shadow-[3px_3px_0px_#000] cursor-pointer transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-black" />
                <span>terminal.sh</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5 md:flex md:flex-col md:items-end">
            <div className="w-full md:w-auto">
              <div className="text-black dark:text-white font-black text-xs uppercase tracking-wider mb-2">
                Flagship Links
              </div>
              <ul className="space-y-2 text-xs font-bold text-slate-800 dark:text-slate-400">
                <li>
                  <a
                    href="https://hub.prepfusion.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black dark:hover:text-white flex items-center gap-1.5 hover:underline transition-all"
                  >
                    <span>PrepFusion Study Hub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black dark:text-slate-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://fametown.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black dark:hover:text-white flex items-center gap-1.5 hover:underline transition-all"
                  >
                    <span>Fametown Creator Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black dark:text-slate-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7436044630401609728/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black dark:hover:text-white flex items-center gap-1.5 hover:underline transition-all"
                  >
                    <span>LaLaTron AI Copilot</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black dark:text-slate-300" />
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-black dark:hover:text-white hover:underline transition-all">
                    Wells Fargo Impact Log
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-700 dark:text-slate-400 text-xs font-semibold gap-2">
          <div>
            © {new Date().getFullYear()} Abhishek Aggarwal. Built with precision for engineering recruiters.
          </div>
          <div className="flex items-center gap-1 text-black dark:text-white font-bold">
            <span>High-Voltage Dark Neubrutalism</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
