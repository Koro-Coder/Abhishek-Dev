import React, { useState } from 'react';
import { Terminal, Copy, Check, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.85 },
      colors: ['#FFE600', '#FF6B4A', '#000000', '#A78BFA']
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FAF7EE] dark:bg-[#0F1117] border-b-[3px] border-black dark:border-white py-3 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / System identifier */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#FFE600] border-2 border-black dark:border-white flex items-center justify-center font-mono font-black text-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_#000] transition-all">
              AA
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-black dark:text-white block">
                abhishek.dev
              </span>
              <p className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 hidden sm:block">
                Backend & AI Systems
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono font-bold text-black dark:text-slate-200 hover:bg-white dark:hover:bg-[#1A1D27] rounded-lg transition-all border-2 border-transparent hover:border-black dark:hover:border-white hover:shadow-[2px_2px_0px_#000] dark:hover:shadow-[2px_2px_0px_#FFF]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs: Theme Switcher, Terminal, Copy Email, Hire Me */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Neubrutalist High-Contrast Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-white dark:bg-[#1A1D27] text-black dark:text-white text-xs font-mono font-black rounded-lg border-2 border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Warm Cream' : 'Switch to Dark Neubrutalism'}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span className="hidden sm:inline">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-800" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>

            {/* Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#A78BFA] text-black text-xs font-mono font-bold rounded-lg border-2 border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#A78BFA] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
              title="Launch Interactive Terminal (Ctrl + ~)"
            >
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span className="hidden sm:inline">Terminal</span>
              <kbd className="hidden lg:inline text-[9px] bg-white text-black px-1.5 py-0.5 rounded border border-black font-mono">
                ~
              </kbd>
            </button>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#1A1D27] text-black dark:text-white text-xs font-mono font-bold rounded-lg border-2 border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFFFFF] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-black dark:text-white font-extrabold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-black dark:text-white" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Recruiter Quick Reach */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFE600] text-black font-extrabold text-xs rounded-lg border-2 border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Hire Me</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-black dark:text-white bg-white dark:bg-[#1A1D27] border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFF]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white dark:bg-[#161922] border-2 border-black dark:border-white rounded-xl shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#FFE600] space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-bold text-black dark:text-white hover:bg-[#FFE600] hover:text-black dark:hover:bg-[#FFE600] dark:hover:text-black border border-transparent hover:border-black dark:hover:border-white rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t-2 border-black dark:border-white space-y-2">
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#FAF7EE] dark:bg-[#1E2330] text-black dark:text-white font-bold text-xs rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFE600]"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFE600]" /> : <Moon className="w-4 h-4 text-slate-800" />}
                <span>{theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#A78BFA] text-black font-bold text-xs rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#A78BFA]"
              >
                <Terminal className="w-4 h-4" />
                Launch Terminal
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCopyEmail();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white dark:bg-[#1A1D27] text-black dark:text-white font-bold text-xs rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFF]"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
