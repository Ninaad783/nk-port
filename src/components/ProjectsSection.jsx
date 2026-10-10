import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ExternalLink,
  Bot,
  ChevronRight,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection({ onOpenAiChat }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: portfolioData.projects.length },
    { id: 'genai', label: 'GenAI & Agentic', count: 4 },
    { id: 'mern', label: 'MERN & Full-Stack', count: 3 },
    { id: 'mlops', label: 'MLOps & Evaluation', count: 1 }
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'genai') return p.category.includes('GenAI') || p.category.includes('Vision');
    if (activeCategory === 'mern') return p.category.includes('MERN') || p.category.includes('Full-Stack');
    if (activeCategory === 'mlops') return p.category.includes('MLOps') || p.category.includes('Quality');
    return true;
  });

  return (
    <section id="projects" className="py-16 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase">
              <FolderGit2 className="w-3.5 h-3.5 text-[#d97757]" />
              <span>Production Codebases</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
              Featured Projects &amp; Repositories
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Verified implementations spanning Agentic AI, RAG architectures, and MERN microservices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#27272c] text-zinc-100 border border-[#38383e]'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#1b1b1e]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] text-zinc-500 font-mono">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects List: Clean Claude Artifact / Card Style */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-xl bg-[#18181b] border border-[#27272b] hover:border-[#38383f] transition-all space-y-4 text-left"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-[#222226]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-zinc-100">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#222226] text-zinc-300 border border-[#2e2e33]">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Metric Badge */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400 bg-[#16221c] border border-emerald-900/40 shrink-0 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {project.metric}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-1.5 pt-1">
                {project.highlights.slice(0, 3).map((hl, hIdx) => (
                  <div key={hIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97757] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141416] border border-[#222226] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Actions */}
              <div className="pt-3 border-t border-[#222226] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#222226] hover:bg-[#2b2b31] border border-[#2e2e33] text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub Repo</span>
                  </a>

                  {project.live && project.live !== project.github && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#d97757] hover:bg-[#c96442] text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onOpenAiChat(`Tell me about the architecture, key metrics, and implementation details of ${project.title}.`)}
                  className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5 text-[#d97757]" />
                  <span>Ask AI about this project</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-zinc-500">
          * Displaying Ninaad's verified open-source repositories. Medical billing applications have been intentionally excluded.
        </p>

      </div>
    </section>
  );
}
