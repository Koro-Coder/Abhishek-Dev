import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const { experience, personal } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-pattern-dots border-t-[3px] border-black dark:border-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#38BDF8] text-black border-2 border-black dark:border-white font-mono font-bold text-xs uppercase shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#38BDF8] mb-3">
            <Briefcase className="w-4 h-4 text-black" />
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-medium mt-3">
            Engineering high-availability backend systems at enterprise financial scale, backed by rigorous mathematics & algorithmic foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Experience Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#FFE600] border-2 border-black dark:border-white font-mono font-bold text-xs text-black uppercase shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFE600]">
                Industry Experience
              </span>
            </div>

            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#161922] border-[3px] border-black dark:border-[#38BDF8] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#38BDF8] hover:shadow-[9px_9px_0px_#000] hover:dark:shadow-[9px_9px_0px_#38BDF8] hover:-translate-y-0.5 transition-all relative"
              >
                {/* Active indicator badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#22C55E] text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#22C55E] mb-4">
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-ping"></span>
                  <span>CURRENT ENTERPRISE ROLE</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-lg font-bold text-[#2563EB] dark:text-[#38BDF8] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-black dark:text-slate-200 font-bold space-y-1 sm:text-right shrink-0">
                    <div className="inline-flex sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFF]">
                      <Calendar className="w-3.5 h-3.5 text-black dark:text-white" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-slate-700 dark:text-slate-300 font-semibold pt-1">
                      <MapPin className="w-3.5 h-3.5 text-black dark:text-white" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-300 font-medium leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Impact bullets with metric bolding */}
                <div className="space-y-3.5 mb-6">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-900 dark:text-slate-200 leading-relaxed font-medium">
                      <div className="p-0.5 bg-[#FFE600] border border-black dark:border-white rounded shadow-[1px_1px_0px_#000] dark:shadow-[1px_1px_0px_#FFE600] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-black" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t-2 border-black dark:border-[#38BDF8]/40 flex flex-wrap gap-2">
                  {exp.technologies.map(t => (
                    <span 
                      key={t} 
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FAF7EE] dark:bg-[#1E2332] text-black dark:text-slate-200 border-2 border-black dark:border-[#38BDF8]/60 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#38BDF8] hover:bg-[#FFE600] dark:hover:bg-[#FFE600] dark:hover:text-black transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Rigor Column (1/3 width) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#A78BFA] border-2 border-black dark:border-white font-mono font-bold text-xs text-black uppercase shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#A78BFA]">
                Academic Foundation
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#161922] border-[3px] border-black dark:border-[#A78BFA] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#A78BFA] relative hover:shadow-[9px_9px_0px_#000] hover:dark:shadow-[9px_9px_0px_#A78BFA] transition-all">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#E9D5FF] dark:bg-[#A78BFA] text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#A78BFA] mb-3">
                <GraduationCap className="w-4 h-4 text-black" />
                <span>PREMIER INSTITUTE</span>
              </div>

              <h3 className="text-xl font-black text-black dark:text-white mb-1">
                {personal.education.college}
              </h3>
              <p className="text-xs font-mono font-bold text-[#7C3AED] dark:text-[#A78BFA] mb-4">
                {personal.education.degree}
              </p>

              <div className="p-4 rounded-xl bg-[#FEF08A] dark:bg-[#2A2614] border-2 border-black dark:border-[#FFE600] shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600] mb-5">
                <div className="text-xs font-mono font-bold text-slate-800 dark:text-slate-300 uppercase">Cumulative CGPA</div>
                <div className="text-3xl font-black font-mono text-black dark:text-[#FFE600] mt-0.5">
                  {personal.education.cgpa} <span className="text-sm font-bold text-slate-700 dark:text-slate-400">/ 10.0</span>
                </div>
                <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-400 mt-1">
                  Aug 2020 – May 2024
                </div>
              </div>

              <div className="text-xs font-mono font-bold text-black dark:text-white uppercase tracking-wider mb-2">
                Core Rigor & Coursework:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {personal.education.coursework.map(course => (
                  <span 
                    key={course} 
                    className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-[#FAF7EE] dark:bg-[#1E2332] text-black dark:text-slate-200 border-2 border-black dark:border-[#A78BFA]/50 shadow-[1.5px_1.5px_0px_#000] dark:shadow-[1.5px_1.5px_0px_#A78BFA]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Competitive Programming Callout */}
            <div className="p-6 rounded-2xl bg-[#FFE600] border-[3px] border-black dark:border-white shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#FFE600] relative">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white font-mono text-xs font-bold mb-3 shadow-[2px_2px_0px_#000]">
                <Award className="w-4 h-4 text-[#FFE600]" />
                <span>CODEFORCES EXPERT</span>
              </div>
              <div className="text-2xl font-black font-mono text-black mb-2">
                Max Rating: 1700+
              </div>
              <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                Ranked Expert among thousands of global competitive programmers solving advanced DP, graph algorithms, and data structure problems under time pressure.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
