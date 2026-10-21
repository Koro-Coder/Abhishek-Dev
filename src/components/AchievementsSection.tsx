import React from 'react';
import { Trophy, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 bg-pattern-dots border-t-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE600] text-black border-2 border-black font-mono font-bold text-xs uppercase shadow-[3px_3px_0px_#000] mb-3">
            <Trophy className="w-4 h-4" />
            <span>HONORS & COMPETITIVE EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Key Achievements & Recognition
          </h2>
          <p className="text-slate-800 text-sm sm:text-base max-w-2xl font-medium mt-3">
            Demonstrating elite algorithmic intuition, high-pressure problem solving, and innovative system engineering.
          </p>
        </div>

        {/* 3 Prominent Honors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {achievements.map((item, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            const cardBg = isFirst 
              ? 'bg-[#FEF9C3]' 
              : isSecond 
              ? 'bg-[#E0F2FE]' 
              : 'bg-[#F3E8FF]';

            const badgeBg = isFirst 
              ? 'bg-[#FFE600]' 
              : isSecond 
              ? 'bg-[#38BDF8]' 
              : 'bg-[#A78BFA]';

            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[9px_9px_0px_#000] hover:-translate-y-1 transition-all relative flex flex-col justify-between ${cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white border-2 border-black shadow-[2.5px_2.5px_0px_#000]">
                      {isFirst ? (
                        <Trophy className="w-6 h-6 text-black" />
                      ) : isSecond ? (
                        <Award className="w-6 h-6 text-black" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-black" />
                      )}
                    </div>

                    <span className={`px-3 py-1 rounded-md text-xs font-mono font-black tracking-wider uppercase border-2 border-black shadow-[2px_2px_0px_#000] ${badgeBg} text-black`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-black mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 mb-4">
                    <span>{item.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-black" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono font-bold text-black">
                  <span>VALIDATION</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-black rounded shadow-[1.5px_1.5px_0px_#000]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
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
