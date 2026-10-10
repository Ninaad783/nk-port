import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Award, Trophy, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase">
            <Briefcase className="w-3.5 h-3.5 text-[#d97757]" />
            <span>Background</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            Experience, Education &amp; Honors
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Industrial software engineering internship, formal computer engineering degree, and competitive achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Internship Card */}
            <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272b] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#222226]">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#d97757] font-semibold">
                    Internship
                  </span>
                  <h3 className="text-sm font-bold text-zinc-100 mt-0.5">
                    {portfolioData.experience[0].role}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {portfolioData.experience[0].company} &bull; {portfolioData.experience[0].location}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-[#222226] px-2 py-0.5 rounded border border-[#2b2b30]">
                  {portfolioData.experience[0].period}
                </span>
              </div>

              <div className="space-y-2 text-xs text-zinc-300">
                {portfolioData.experience[0].points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#d97757] mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272b] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#222226]">
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">
                    Higher Education
                  </span>
                  <h3 className="text-sm font-bold text-zinc-100 mt-0.5">
                    {portfolioData.education.degree}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {portfolioData.education.institution} &bull; {portfolioData.education.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-[#16221c] px-2 py-0.5 rounded border border-emerald-900/40">
                  CGPA: {portfolioData.education.cgpa}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Graduated in 2025 with strong foundation in Operating Systems, Database Management Systems, System Architecture, Algorithms, and Deep Learning.
              </p>
            </div>

          </div>

          {/* Right Column: Certifications & Recognitions */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wide">
              Credentials &amp; Awards
            </h3>

            <div className="space-y-2.5">
              {portfolioData.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-xl bg-[#18181b] border border-[#27272b] space-y-1 text-xs"
                >
                  <div className="flex items-start gap-2">
                    {cIdx === 0 && <Award className="w-4 h-4 text-[#d97757] shrink-0 mt-0.5" />}
                    {cIdx === 1 && <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />}
                    {cIdx === 2 && <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                    {cIdx > 2 && <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />}
                    <div>
                      <div className="font-semibold text-zinc-100 leading-snug">
                        {cert.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                        {cert.issuer} &bull; {cert.validity}
                      </div>
                    </div>
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
