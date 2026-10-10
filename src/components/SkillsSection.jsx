import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Brain, Layers, Server } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-[#161619] border-y border-[#242428] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            Technical Skills &amp; Frameworks
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Technologies Ninaad leverages to build production AI workflows and performant web services.
          </p>
        </div>

        {/* 3 Skill Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* 1. GenAI */}
          <div className="p-5 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#242428]">
              <Brain className="w-4 h-4 text-[#d97757]" />
              <h3 className="text-xs font-bold text-zinc-100 uppercase tracking-wide">
                GenAI &amp; LLMs
              </h3>
            </div>

            <div className="space-y-3">
              {portfolioData.skills.genAi.map((skill, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between text-zinc-300">
                    <span className="truncate pr-2">{skill.name}</span>
                    <span className="font-mono text-zinc-500 text-[11px]">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-[#242428] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#d97757] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. MERN */}
          <div className="p-5 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#242428]">
              <Layers className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-bold text-zinc-100 uppercase tracking-wide">
                MERN &amp; Frontend
              </h3>
            </div>

            <div className="space-y-3">
              {portfolioData.skills.mern.map((skill, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between text-zinc-300">
                    <span className="truncate pr-2">{skill.name}</span>
                    <span className="font-mono text-zinc-500 text-[11px]">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-[#242428] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Backend & DevOps */}
          <div className="p-5 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#242428]">
              <Server className="w-4 h-4 text-zinc-300" />
              <h3 className="text-xs font-bold text-zinc-100 uppercase tracking-wide">
                Backend &amp; DevOps
              </h3>
            </div>

            <div className="space-y-3">
              {portfolioData.skills.backendDevops.map((skill, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between text-zinc-300">
                    <span className="truncate pr-2">{skill.name}</span>
                    <span className="font-mono text-zinc-500 text-[11px]">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-[#242428] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
