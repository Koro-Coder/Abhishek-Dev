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

  return (
    <section id="skills" className="py-24 bg-pattern-grid border-t-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22C55E] text-black border-2 border-black font-mono font-bold text-xs uppercase shadow-[3px_3px_0px_#000] mb-3">
              <Wrench className="w-4 h-4" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
              Skills, Frameworks & Infra
            </h2>
            <p className="text-slate-800 text-sm sm:text-base max-w-2xl font-medium mt-3">
              Production-hardened toolchain spanning distributed backend services, vector search algorithms, and modern frontend engines.
            </p>
          </div>

          {/* Interactive Search Bar for Recruiters */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (Java, LLM, Docker)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-black rounded-xl text-xs font-mono font-bold text-black placeholder-slate-500 shadow-[3px_3px_0px_#000] focus:outline-none focus:bg-[#FFE600]/20 transition-all"
            />
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 border-2 border-black ${
                activeCategory === cat
                  ? 'bg-[#FFE600] text-black shadow-[4px_4px_0px_#000] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white text-black hover:bg-[#FAF7EE] shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#000]'
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(PORTFOLIO_DATA.skills)
            .filter(([category]) => activeCategory === 'All' || activeCategory === category)
            .map(([category, skillList]) => {
              const filteredSkills = skillList.filter(s =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (filteredSkills.length === 0) return null;

              return (
                <div
                  key={category}
                  className="p-6 sm:p-7 rounded-2xl bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[9px_9px_0px_#000] hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-black">
                      <div className={`p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] ${categoryColors[category] || 'bg-[#FFE600]'}`}>
                        {categoryIcons[category]}
                      </div>
                      <h3 className="text-base font-black font-mono text-black">
                        {category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {filteredSkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                            <span className="text-black">
                              {skill.name}
                            </span>
                            <span className="text-slate-800">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2.5 w-full bg-[#FAF7EE] rounded-full border-2 border-black overflow-hidden">
                            <div
                              className="h-full bg-[#FFE600] border-r-2 border-black transition-all duration-700"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-black text-[11px] font-mono font-bold text-black flex items-center justify-between">
                    <span>PRODUCTION TESTED</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#DCFCE7] border border-black rounded text-[#15803D]">
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
