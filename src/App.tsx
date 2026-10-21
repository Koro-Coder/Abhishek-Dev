import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsRadar } from './components/SkillsRadar';
import { AchievementsSection } from './components/AchievementsSection';
import { RecruiterContact } from './components/RecruiterContact';
import { Footer } from './components/Footer';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global keyboard shortcut to open terminal (Ctrl + ~ or `)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === '`') || (e.ctrlKey && e.key === '~')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-black flex flex-col font-sans selection:bg-[#FFE600] selection:text-black">
      {/* Top Cyber Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Flagship Projects with integrated Interactive Architecture Modals */}
        <FeaturedProjects />

        {/* Wells Fargo Experience & DTU Academic Foundations */}
        <ExperienceTimeline />

        {/* Technical Skills Radar with Live Search */}
        <SkillsRadar />

        {/* Key Achievements & Recognition (Restored to its original position) */}
        <AchievementsSection />

        {/* Recruiter Priority Fast-Track & Inquiry Desk */}
        <RecruiterContact />
      </main>

      {/* System Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Cyber Interactive CLI Terminal Drawer/Modal */}
      <InteractiveTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
