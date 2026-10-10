import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Bot, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar({ onOpenAiChat }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#131315]/90 backdrop-blur-md border-b border-[#27272a] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand: Clean Minimalist Style */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#222226] border border-[#2e2e33] flex items-center justify-center text-sm font-semibold text-[#d97757] group-hover:border-[#d97757]/60 transition-colors">
            NK
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100 text-sm tracking-tight">Ninaad Kumbhar</span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">GenAI &amp; MERN</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#eligibility" className="hover:text-zinc-100 transition-colors">
            Role Eligibility
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Timeline
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ask AI button: Claude Terracotta minimal button */}
          <button
            onClick={() => onOpenAiChat("Tell me about Ninaad's background and core competencies.")}
            className="px-3 py-1.5 rounded-lg bg-[#d97757] hover:bg-[#c96442] text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Ask Ninaad AI</span>
          </button>

          {/* Separate GenAI and MERN Resume Links */}
          <a
            href={portfolioData.personal.resumeGenAi}
            download="Ninaad_Kumbhar_GenAI_Resume.pdf"
            className="px-2.5 py-1.5 rounded-lg bg-[#1e1e22] hover:bg-[#27272c] border border-[#2c2c31] text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Download Generative AI Engineer Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#d97757]" />
            <span>GenAI CV</span>
          </a>

          <a
            href={portfolioData.personal.resumeMern}
            download="Ninaad_Kumbhar_MERN_Resume.pdf"
            className="px-2.5 py-1.5 rounded-lg bg-[#1e1e22] hover:bg-[#27272c] border border-[#2c2c31] text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Download MERN Stack Developer Resume"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>MERN CV</span>
          </a>

          {/* GitHub Link */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-[#1e1e22] hover:bg-[#27272c] border border-[#2c2c31] text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenAiChat()}
            className="px-2.5 py-1.5 rounded-lg bg-[#d97757] text-white text-xs font-medium flex items-center gap-1"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-[#1e1e22] border border-[#2e2e33] text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161619] border-b border-[#27272a] px-4 py-3 space-y-2 text-left">
          <a
            href="#eligibility"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs text-zinc-300 hover:text-white font-medium"
          >
            Role Eligibility &amp; JD Matcher
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs text-zinc-300 hover:text-white font-medium"
          >
            Projects &amp; Repos
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs text-zinc-300 hover:text-white font-medium"
          >
            Skills Matrix
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs text-zinc-300 hover:text-white font-medium"
          >
            Timeline &amp; Honors
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs text-zinc-300 hover:text-white font-medium"
          >
            Contact
          </a>

          <div className="pt-2 flex items-center gap-2 border-t border-[#27272a]">
            <a
              href={portfolioData.personal.resumeGenAi}
              download="Ninaad_Kumbhar_GenAI_Resume.pdf"
              className="flex-1 py-1.5 text-center rounded-lg bg-[#222226] text-xs font-medium text-[#d97757] border border-[#2e2e33]"
            >
              GenAI CV
            </a>
            <a
              href={portfolioData.personal.resumeMern}
              download="Ninaad_Kumbhar_MERN_Resume.pdf"
              className="flex-1 py-1.5 text-center rounded-lg bg-[#222226] text-xs font-medium text-emerald-400 border border-[#2e2e33]"
            >
              MERN CV
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#222226] text-zinc-400 border border-[#2e2e33]"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
