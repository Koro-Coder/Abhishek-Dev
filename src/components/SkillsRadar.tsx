import React, { useState } from 'react';
import { Search, Code, Cpu, Cloud, Layout, Database, CheckCircle, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsRadar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Object.keys(PORTFOLIO_DATA.skills)];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Backend & Architecture': <Code className="w-4 h-4 text-black" />,
    'AI & Agentic Systems': <Cpu className="w-4 h-4 text-black" />,
    'Cloud, DevOps & Infra': <Cloud className="w-4 h-4 text-black" />,
    'Frontend & Web': <Layout className="w-4 h-4 text-black" />,
    'Databases & Caching': <Database className="w-4 h-4 text-black" />,
    'Testing & Reliability': <CheckCircle className="w-4 h-4 text-black" />
  };

  const categoryColors: Record<string, string> = {
    'Backend & Architecture': 'bg-[#38BDF8]',
    'AI & Agentic Systems': 'bg-[#A78BFA]',
    'Cloud, DevOps & Infra': 'bg-[#FFE600]',
    'Frontend & Web': 'bg-[#22C55E]',
    'Databases & Caching': 'bg-[#FB923C]',
    'Testing & Reliability': 'bg-[#F472B6]'
  };

  const categoryBorderColors: Record<string, string> = {
    'Backend & Architecture': 'dark:border-[#38BDF8] dark:shadow-[6px_6px_0px_#38BDF8]',
    'AI & Agentic Systems': 'dark:border-[#A78BFA] dark:shadow-[6px_6px_0px_#A78BFA]',
    'Cloud, DevOps & Infra': 'dark:border-[#FFE600] dark:shadow-[6px_6px_0px_#FFE600]',
    'Frontend & Web': 'dark:border-[#22C55E] dark:shadow-[6px_6px_0px_#22C55E]',
    'Databases & Caching': 'dark:border-[#FB923C] dark:shadow-[6px_6px_0px_#FB923C]',
    'Testing & Reliability': 'dark:border-[#F472B6] dark:shadow-[6px_6px_0px_#F472B6]'
  };

  return (
    <section id="skills" className="py-24 bg-pattern-grid border-t-[3px] border-black dark:border-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22C55E] text-black border-2 border-black dark:border-white font-mono font-bold text-xs uppercase shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#22C55E] mb-3">
              <Wrench className="w-4 h-4 text-black" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
              Skills, Frameworks & Infra
            </h2>
            <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-medium mt-3">
              Production-hardened toolchain spanning distributed backend services, vector search algorithms, and modern frontend engines.
            </p>
          </div>

          {/* Interactive Search Bar for Recruiters */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black dark:text-white" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (Java, LLM, Docker)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#181B26] border-2 border-black dark:border-white rounded-xl text-xs font-mono font-bold text-black dark:text-white placeholder-slate-500 dark:placeholder-slate-400 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFFFFF] focus:outline-none focus:bg-[#FFE600]/20 focus:dark:border-[#FFE600] transition-all"
            />
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 border-2 border-black dark:border-white ${
                activeCategory === cat
                  ? 'bg-[#FFE600] text-black shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#FFE600] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white dark:bg-[#181B26] text-black dark:text-slate-200 hover:bg-[#FAF7EE] dark:hover:bg-[#202534] shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFFFFF] hover:shadow-[3px_3px_0px_#000]'
              }`}
            >
              {cat !== 'All' && (
                <div className={`p-1 rounded border border-black ${categoryColors[cat] || 'bg-white'}`}>
                  {categoryIcons[cat]}
                </div>
              )}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with High-Contrast Color-Coded Neon Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(PORTFOLIO_DATA.skills)
            .filter(([category]) => activeCategory === 'All' || activeCategory === category)
            .map(([category, skillList]) => {
              const filteredSkills = skillList.filter(s =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (filteredSkills.length === 0) return null;

              const darkBorderClass = categoryBorderColors[category] || 'dark:border-white dark:shadow-[6px_6px_0px_#FFFFFF]';

              return (
                <div
                  key={category}
                  className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#161922] border-[3px] border-black ${darkBorderClass} shadow-[6px_6px_0px_#000] hover:shadow-[9px_9px_0px_#000] hover:-translate-y-0.5 transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-black dark:border-white/30">
                      <div className={`p-2 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] ${categoryColors[category] || 'bg-[#FFE600]'}`}>
                        {categoryIcons[category]}
                      </div>
                      <h3 className="text-base font-black font-mono text-black dark:text-white">
                        {category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {filteredSkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                            <span className="text-black dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-slate-800 dark:text-slate-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2.5 w-full bg-[#FAF7EE] dark:bg-[#202534] rounded-full border-2 border-black dark:border-white/40 overflow-hidden">
                            <div
                              className="h-full bg-[#FFE600] border-r-2 border-black dark:border-white transition-all duration-700"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-black dark:border-white/30 text-[11px] font-mono font-bold text-black dark:text-slate-300 flex items-center justify-between">
                    <span>PRODUCTION TESTED</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#DCFCE7] dark:bg-[#064E3B] border border-black dark:border-[#22C55E] rounded text-[#15803D] dark:text-[#34D399]">
                      ✓ VERIFIED
                    </span>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
