import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Bot,
  ArrowRight,
  Download,
  Mail,
  ShieldCheck,
  Trophy,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Send,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero({ onOpenAiChat }) {
  const [inlineQuery, setInlineQuery] = useState('');

  const quickPrompts = [
    { label: "Is he eligible for GenAI roles?", query: "Is Ninaad eligible for a Generative AI Engineer role? Provide a breakdown of his hands-on LLM, RAG, and agentic experience." },
    { label: "Is he eligible for MERN roles?", query: "Is Ninaad eligible for a MERN Stack Developer role? Detail his React, Node, Express, MongoDB, and internship experience." },
    { label: "Evaluate a Job Description (JD)", query: "Evaluate JD: Looking for a developer with Python, React, Node.js, LLMs, RAG, and CI/CD pipelines to build scalable AI systems." },
    { label: "Show verified project repos", query: "List all of Ninaad's key projects with their GitHub repositories and live links." }
  ];

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    if (!inlineQuery.trim()) return;
    onOpenAiChat(inlineQuery);
    setInlineQuery('');
  };

  return (
    <section id="home" className="pt-12 pb-16 md:pt-16 md:pb-24 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Profile Header: Avatar + Identity */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative">
            <img
              src={portfolioData.personal.avatar}
              alt={portfolioData.personal.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-[#2e2e33] shadow-md bg-[#1a1a1e]"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#131315]" title="Available for opportunities" />
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                {portfolioData.personal.name}
              </h1>
              <span className="px-2 py-0.5 rounded-md bg-[#242429] border border-[#323238] text-[11px] font-medium text-[#d97757]">
                Available for Roles
              </span>
            </div>

            <div className="text-sm sm:text-base font-medium text-zinc-300">
              Generative AI Engineer <span className="text-zinc-600">&bull;</span> MERN Stack Developer
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span>B.E. Computer Engineering (2025, MMIT Pune)</span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-zinc-300 font-medium">Oracle Agentic AI Certified</span>
            </div>
          </div>
        </div>

        {/* Narrative Bio */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Full-Stack &amp; Generative AI Engineer specialized in autonomous <span className="text-zinc-100 font-medium">multi-agent workflows</span>, <span className="text-zinc-100 font-medium">document-grounded RAG</span> pipelines, and <span className="text-zinc-100 font-medium">scalable MERN microservices</span>. Winner of campus security bug bounty challenges and 1st Runner-Up at COMSYS Hackathon 2024.
        </p>

        {/* Central Claude / ChatGPT Style Prompt Bar */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#1a1a1e] border border-[#2c2c31] shadow-lg space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span className="flex items-center gap-1.5 font-medium text-[#d97757]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Ninaad AI Assistant</span>
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">Grounded in verified repos &amp; metrics</span>
          </div>

          <form onSubmit={handleInlineSubmit} className="relative flex items-center">
            <input
              type="text"
              value={inlineQuery}
              onChange={(e) => setInlineQuery(e.target.value)}
              placeholder="Ask anything about Ninaad's experience, role eligibility, or paste a JD..."
              className="w-full pl-3.5 pr-11 py-3 rounded-xl bg-[#141416] border border-[#2b2b30] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-[#d97757] transition-colors"
            />
            <button
              type="submit"
              disabled={!inlineQuery.trim()}
              className="absolute right-2 p-2 rounded-lg bg-[#d97757] hover:bg-[#c96442] disabled:opacity-30 text-white transition-colors cursor-pointer"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Prompt Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onOpenAiChat(p.query)}
                className="px-2.5 py-1.5 rounded-lg bg-[#141416] hover:bg-[#222226] border border-[#27272a] hover:border-[#3a3a40] text-xs text-zinc-300 hover:text-zinc-100 transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <Bot className="w-3 h-3 text-[#d97757]" />
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Links & Social */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="#eligibility"
              className="px-4 py-2 rounded-lg bg-[#242429] hover:bg-[#2c2c33] border border-[#323238] text-xs font-semibold text-zinc-200 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>View Role Scorecards</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="#projects"
              className="px-4 py-2 rounded-lg bg-[#1a1a1e] hover:bg-[#242429] border border-[#27272a] text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              Browse Projects &amp; Repos
            </a>

            <a
              href={portfolioData.personal.resumeGenAi}
              download="Ninaad_Kumbhar_GenAI_Resume.pdf"
              className="px-3.5 py-2 rounded-lg bg-[#1a1a1e] hover:bg-[#242429] border border-[#27272a] text-xs font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Download GenAI Engineer Resume"
            >
              <Download className="w-3.5 h-3.5 text-[#d97757]" />
              <span>GenAI Resume</span>
            </a>

            <a
              href={portfolioData.personal.resumeMern}
              download="Ninaad_Kumbhar_MERN_Resume.pdf"
              className="px-3.5 py-2 rounded-lg bg-[#1a1a1e] hover:bg-[#242429] border border-[#27272a] text-xs font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Download MERN Stack Resume"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>MERN Resume</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-700">&bull;</span>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-700">&bull;</span>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-zinc-100 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Minimal Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-4 border-t border-[#222226]">
          {portfolioData.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#18181b] border border-[#242428] text-left space-y-0.5"
            >
              <div className="text-base sm:text-lg font-bold text-zinc-100 font-mono">
                {m.value}
              </div>
              <div className="text-xs font-medium text-zinc-300">{m.label}</div>
              <div className="text-[10px] text-zinc-500 leading-tight truncate">{m.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
