import React from 'react';
import { Trophy, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 bg-pattern-dots border-t-[3px] border-black dark:border-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE600] text-black border-2 border-black dark:border-white font-mono font-bold text-xs uppercase shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#FFE600] mb-3">
            <Trophy className="w-4 h-4 text-black" />
            <span>HONORS & COMPETITIVE EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
            Key Achievements & Recognition
          </h2>
          <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-medium mt-3">
            Demonstrating elite algorithmic intuition, high-pressure problem solving, and innovative system engineering.
          </p>
        </div>

        {/* 3 Prominent Honors with High-Contrast Gold, Cyan, and Purple Neon Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {achievements.map((item, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            const cardBg = isFirst 
              ? 'bg-[#FEF9C3] dark:bg-[#1C180E] border-black dark:border-[#FFE600] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#FFE600] hover:dark:shadow-[9px_9px_0px_#FFE600]' 
              : isSecond 
              ? 'bg-[#E0F2FE] dark:bg-[#0B1A28] border-black dark:border-[#38BDF8] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#38BDF8] hover:dark:shadow-[9px_9px_0px_#38BDF8]' 
              : 'bg-[#F3E8FF] dark:bg-[#181024] border-black dark:border-[#A78BFA] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#A78BFA] hover:dark:shadow-[9px_9px_0px_#A78BFA]';

            const badgeBg = isFirst 
              ? 'bg-[#FFE600]' 
              : isSecond 
              ? 'bg-[#38BDF8]' 
              : 'bg-[#A78BFA]';

            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl border-[3px] hover:shadow-[9px_9px_0px_#000] hover:-translate-y-1 transition-all relative flex flex-col justify-between ${cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#181B26] border-2 border-black dark:border-white shadow-[2.5px_2.5px_0px_#000] dark:shadow-[2.5px_2.5px_0px_#FFF]">
                      {isFirst ? (
                        <Trophy className="w-6 h-6 text-black dark:text-[#FFE600]" />
                      ) : isSecond ? (
                        <Award className="w-6 h-6 text-black dark:text-[#38BDF8]" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-black dark:text-[#A78BFA]" />
                      )}
                    </div>

                    <span className={`px-3 py-1 rounded-md text-xs font-mono font-black tracking-wider uppercase border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#FFF] ${badgeBg} text-black`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-4">
                    <span>{item.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-black dark:text-white" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black dark:border-white/30 flex items-center justify-between text-xs font-mono font-bold text-black dark:text-white">
                  <span>VALIDATION</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-[#181B26] border border-black dark:border-white rounded shadow-[1.5px_1.5px_0px_#000] dark:shadow-[1.5px_1.5px_0px_#FFF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    VERIFIED
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
