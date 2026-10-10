import React, { useState } from 'react';
import { Bot, Sparkles, X } from 'lucide-react';

export default function AiAssistantDock({ onOpenChat }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      
      {/* Clean Minimalist Tooltip */}
      {showTooltip && (
        <div className="relative max-w-xs p-3 rounded-xl bg-[#1b1b1e] border border-[#2e2e34] shadow-xl text-left space-y-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-300 p-0.5 rounded"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
            <Sparkles className="w-3.5 h-3.5 text-[#d97757]" />
            <span>AI Candidate Screener</span>
          </div>

          <p className="text-[11px] text-zinc-400 leading-snug">
            Recruiter? Test if Ninaad is eligible for your target role or paste a Job Description.
          </p>

          <button
            onClick={() => {
              setShowTooltip(false);
              onOpenChat("Is Ninaad eligible for our open role? Provide an executive summary of his fit.");
            }}
            className="text-[11px] font-medium text-[#d97757] hover:text-[#c96442] underline underline-offset-2 flex items-center gap-1 cursor-pointer pt-0.5"
          >
            <span>Run Instant Screening</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}

      {/* Floating Action Button: Clean Claude Style */}
      <button
        onClick={() => onOpenChat()}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#d97757] hover:bg-[#c96442] text-white font-medium text-xs shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-[#c96442]"
        aria-label="Open AI Assistant"
      >
        <Bot className="w-4 h-4 text-white" />
        <span className="tracking-tight">Ask Ninaad AI</span>
      </button>

    </div>
  );
}
