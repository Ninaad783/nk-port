import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer({ onOpenAiChat }) {
  return (
    <footer className="bg-[#111113] border-t border-[#242428] py-12 text-zinc-400 text-xs text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#202024]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-100 text-sm">
                {portfolioData.personal.name}
              </span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-zinc-400">{portfolioData.personal.role}</span>
            </div>
            <p className="text-zinc-500 text-xs">
              Engineering autonomous AI loops, document-grounded RAG architectures, and scalable MERN microservices.
            </p>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
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

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            &copy; 2026 Ninaad Kumbhar. Built for Generative AI &amp; MERN Stack engineering impact.
          </div>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-zinc-300">Back to top</a>
            <button
              onClick={() => onOpenAiChat("What makes Ninaad unique?")}
              className="hover:text-[#d97757] cursor-pointer"
            >
              Ask Ninaad AI
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
