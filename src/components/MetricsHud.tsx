import React from 'react';
import { Users, Search, Zap, Award, Trophy, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5 text-cyan-400" />,
  Search: <Search className="w-5 h-5 text-purple-400" />,
  Zap: <Zap className="w-5 h-5 text-emerald-400" />,
  Award: <Award className="w-5 h-5 text-amber-400" />,
  Trophy: <Trophy className="w-5 h-5 text-yellow-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-400" />
};

export const MetricsHud: React.FC = () => {
  return (
    <section className="py-12 border-y border-cyber-border/80 bg-[#0a0e1a]/80 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-cyber-border/60 gap-3">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-sm bg-cyan-400"></span>
              <span>VERIFIED PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Scale, Relevance & Algorithmic Excellence
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM BENCHMARKS [PROD + CONTEST]</span>
          </div>
        </div>

        {/* 6 Key Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-cyber-surface/60 hover:bg-cyber-surface border border-cyber-border hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden shadow-sm"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400 transition-all"></div>

              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-cyber-card border border-cyber-border group-hover:scale-110 transition-transform">
                  {iconMap[metric.icon]}
                </div>
                {metric.change && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                    {metric.change}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
