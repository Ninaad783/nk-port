import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { evaluateJobDescriptionFit } from '../services/aiAgent';
import {
  CheckCircle2,
  Brain,
  Layers,
  Zap,
  FileSearch,
  Bot,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Code2,
  ShieldCheck
} from 'lucide-react';

export default function RoleEligibilitySection({ onOpenAiChat }) {
  const [activeTab, setActiveTab] = useState('genai');
  const [customJdText, setCustomJdText] = useState('');
  const [jdResult, setJdResult] = useState(null);
  const [evaluating, setEvaluating] = useState(false);

  const sampleJds = {
    genai: `We are looking for a Generative AI Engineer to architect production LLM and RAG pipelines. Requirements:
- Hands-on experience with Google Gemini or OpenAI LLMs, LangChain, and vector databases (ChromaDB/pgvector).
- Experience building multi-agent workflows, tool execution, and prompt security guardrails.
- Familiarity with MLOps, LLM-as-a-judge evaluation frameworks, Python, and FastAPI.
- Experience writing automated tests (Pytest) and CI/CD pipelines.`,
    mern: `Seeking a skilled MERN Stack Developer to design and scale web applications. Requirements:
- Proficiency in React.js, JavaScript (ES6+), Node.js, and Express.js REST APIs.
- Strong database skills in MongoDB (Mongoose), indexing, schema design, and MySQL/PostgreSQL.
- Hands-on experience with JWT authentication, role-based access control (RBAC), and state management.
- Ability to build mobile-responsive interfaces with Tailwind CSS and automate builds via CI/CD.`,
    hybrid: `Hiring a Full-Stack AI Engineer who can bridge modern AI models and production web applications.
- Build interactive frontends in React/Next.js and backend microservices with Node.js and FastAPI.
- Implement RAG search, document embedding pipelines, and LLM evaluation metrics.
- Maintain CI/CD pipelines in GitHub Actions and containerize applications with Docker.`
  };

  const handleEvaluateJd = () => {
    if (!customJdText.trim()) return;
    setEvaluating(true);

    setTimeout(() => {
      const result = evaluateJobDescriptionFit(customJdText);
      setJdResult(result);
      setEvaluating(false);
    }, 350);
  };

  return (
    <section id="eligibility" className="py-16 bg-[#161619] border-y border-[#242428] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#222226] border border-[#2e2e33] text-[11px] font-medium text-[#d97757]">
            <Sparkles className="w-3 h-3" />
            <span>Role Eligibility Assessment</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            Is Ninaad Eligible for Your Target Role?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
            Objective candidate readiness analysis grounded in verified production repositories, internships, and certifications.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#27272a] pb-3">
          <button
            onClick={() => setActiveTab('genai')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'genai'
                ? 'bg-[#27272c] text-zinc-100 border border-[#38383e]'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#1e1e22]'
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-[#d97757]" />
            <span>GenAI Engineer (96%)</span>
          </button>

          <button
            onClick={() => setActiveTab('mern')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mern'
                ? 'bg-[#27272c] text-zinc-100 border border-[#38383e]'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#1e1e22]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>MERN Developer (94%)</span>
          </button>

          <button
            onClick={() => setActiveTab('hybrid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'hybrid'
                ? 'bg-[#27272c] text-zinc-100 border border-[#38383e]'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#1e1e22]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Full-Stack AI Hybrid (98%)</span>
          </button>

          <button
            onClick={() => setActiveTab('custom-jd')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'custom-jd'
                ? 'bg-[#27272c] text-zinc-100 border border-[#38383e]'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#1e1e22]'
            }`}
          >
            <FileSearch className="w-3.5 h-3.5 text-zinc-300" />
            <span>Live Recruiter JD Matcher</span>
          </button>
        </div>

        {/* Tab 1: GenAI Engineer */}
        {activeTab === 'genai' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Score Summary Box */}
            <div className="md:col-span-4 p-5 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Match Score</span>
                <div className="text-4xl font-bold text-zinc-100 font-mono mt-1">
                  96<span className="text-xl text-[#d97757] font-sans">%</span>
                </div>
                <div className="text-xs font-semibold text-emerald-400 mt-1">Strongly Recommended Fit</div>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-[#27272a] text-xs">
                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Document RAG &amp; Citations</span>
                    <span className="font-mono text-zinc-400">95%</span>
                  </div>
                  <div className="h-1 w-full bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#d97757] rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Agentic Orchestration</span>
                    <span className="font-mono text-zinc-400">94%</span>
                  </div>
                  <div className="h-1 w-full bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#d97757] rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>LLM-as-a-Judge Eval</span>
                    <span className="font-mono text-zinc-400">92%</span>
                  </div>
                  <div className="h-1 w-full bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#d97757] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenAiChat("Deep dive into Ninaad's Generative AI qualifications and specific RAG implementations.")}
                className="w-full py-2 px-3 rounded-lg bg-[#222226] hover:bg-[#2b2b31] border border-[#2e2e33] text-zinc-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5 text-[#d97757]" />
                <span>Discuss GenAI Fit with AI</span>
              </button>
            </div>

            {/* Evidence & Repos */}
            <div className="md:col-span-8 p-5 sm:p-6 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
              <h3 className="text-sm font-bold text-zinc-100">
                Verified Production Proof:
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97757] shrink-0" />
                    <span>5-Agent Multi-Agent Workflow (ComplyAI)</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    Architected collaborative autonomous pipeline (Retriever &rarr; SQL &rarr; Compliance &rarr; Risk &rarr; Report) with Gemini embeddings, page citations, and prompt injection defense.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97757] shrink-0" />
                    <span>COMSYS Hackathon 1st Runner-Up (MedEcho)</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    Multimodal clinical analytics with Gemini 2.5 Flash and LangChain document-grounded RAG, handling complex medical records with high precision.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97757] shrink-0" />
                    <span>LLM-as-a-Judge Evaluation Gate in CI/CD</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    GitHub Actions pipeline validating faithfulness (94.2%), relevancy, and hallucination risk with Gemini API, cutting staging time by 40%.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97757] shrink-0" />
                    <span>Oracle Certified in Agentic AI</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    Holds the official Oracle Agentic AI Foundations Associate credential verifying enterprise agent governance and tool chains.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: MERN Stack Developer */}
        {activeTab === 'mern' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Score Summary Box */}
            <div className="md:col-span-4 p-5 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Match Score</span>
                <div className="text-4xl font-bold text-zinc-100 font-mono mt-1">
                  94<span className="text-xl text-emerald-400 font-sans">%</span>
                </div>
                <div className="text-xs font-semibold text-emerald-400 mt-1">Production Battle-Tested</div>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-[#27272a] text-xs">
                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>React.js &amp; Frontend Architecture</span>
                    <span className="font-mono text-zinc-400">95%</span>
                  </div>
                  <div className="h-1 w-full bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Node &amp; Express Microservices</span>
                    <span className="font-mono text-zinc-400">92%</span>
                  </div>
                  <div className="h-1 w-full bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>MongoDB Indexing &amp; CRUD</span>
                    <span className="font-mono text-zinc-400">90%</span>
                  </div>
                  <div className="h-1 w-full bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenAiChat("Tell me about Ninaad's MERN Stack internship experience and MongoDB optimizations.")}
                className="w-full py-2 px-3 rounded-lg bg-[#222226] hover:bg-[#2b2b31] border border-[#2e2e33] text-zinc-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss MERN Fit with AI</span>
              </button>
            </div>

            {/* Evidence & Repos */}
            <div className="md:col-span-8 p-5 sm:p-6 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
              <h3 className="text-sm font-bold text-zinc-100">
                Verified Production Proof:
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Mira Advanced Engineering Internship</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    Engineered React modular components and Node/Express REST APIs, reducing page load latency by <strong>25%</strong> and resolving 20+ defects in an Agile/Scrum workflow.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>MongoDB Query Optimization (+30% Speed)</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    Implemented indexing and schema validations across MongoDB and MySQL, optimizing CRUD transaction handling and data integrity.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#141416] border border-[#242428] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>JWT Auth &amp; Role-Based Access Control</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    Implemented token-based authentication and role-based access control protecting sensitive endpoints and patient datasets.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Full-Stack AI Hybrid */}
        {activeTab === 'hybrid' && (
          <div className="p-6 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#27272a]">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Dual-Competency Assessment</span>
                <h3 className="text-base font-bold text-zinc-100 mt-0.5">
                  Full-Stack AI Engineer: Rare Dual Fit
                </h3>
              </div>
              <div className="flex items-baseline gap-1 text-3xl font-bold text-zinc-100 font-mono">
                98<span className="text-base text-amber-400 font-sans">%</span>
                <span className="text-xs text-zinc-400 font-normal ml-2">Match</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Most software teams face a costly communication gap: pure AI researchers don't build production frontends, while web developers struggle with embeddings, RAG chunking, and latency budgets. Ninaad handles both ends seamlessly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-[#141416] border border-[#242428] space-y-1.5">
                <Cpu className="w-4 h-4 text-[#d97757]" />
                <div className="font-semibold text-zinc-200">AI Core</div>
                <p className="text-zinc-400">Gemini LLMs, RAG, multi-agent pipelines, prompt security, and MLOps evaluation.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#141416] border border-[#242428] space-y-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <div className="font-semibold text-zinc-200">Full-Stack MERN</div>
                <p className="text-zinc-400">React.js, Next.js, Node.js, Express, MongoDB indexing, and Tailwind CSS.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#141416] border border-[#242428] space-y-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <div className="font-semibold text-zinc-200">Security &amp; DevOps</div>
                <p className="text-zinc-400">Campus Bug Bounty 1st place winner, GitHub Actions CI/CD gates, and Docker.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Live Recruiter JD Matcher */}
        {activeTab === 'custom-jd' && (
          <div className="p-5 sm:p-6 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-zinc-100">
                  Paste Your Job Description (JD)
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Calculate instant compatibility against Ninaad's verified experience:
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-zinc-500 font-medium">Presets:</span>
                <button
                  onClick={() => setCustomJdText(sampleJds.genai)}
                  className="px-2 py-1 rounded bg-[#222226] text-[11px] text-zinc-300 hover:text-white"
                >
                  GenAI JD
                </button>
                <button
                  onClick={() => setCustomJdText(sampleJds.mern)}
                  className="px-2 py-1 rounded bg-[#222226] text-[11px] text-zinc-300 hover:text-white"
                >
                  MERN JD
                </button>
                <button
                  onClick={() => setCustomJdText(sampleJds.hybrid)}
                  className="px-2 py-1 rounded bg-[#222226] text-[11px] text-zinc-300 hover:text-white"
                >
                  Hybrid JD
                </button>
              </div>
            </div>

            <textarea
              value={customJdText}
              onChange={(e) => setCustomJdText(e.target.value)}
              placeholder="Paste your job description requirements here..."
              rows={4}
              className="w-full p-3.5 rounded-lg bg-[#141416] border border-[#2b2b30] text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-[#d97757] transition-colors resize-y font-mono"
            />

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-mono">
                {customJdText.length} characters
              </span>
              <button
                onClick={handleEvaluateJd}
                disabled={evaluating || customJdText.trim().length < 15}
                className="px-4 py-2 rounded-lg bg-[#d97757] hover:bg-[#c96442] disabled:opacity-40 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{evaluating ? "Evaluating..." : "Run Compatibility Check"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Evaluation Result */}
            {jdResult && (
              <div className="p-4 sm:p-5 rounded-lg bg-[#141416] border border-[#2b2b30] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#242428]">
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Assessment</div>
                    <div className="text-sm font-bold text-zinc-100">{jdResult.verdict}</div>
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">
                    {jdResult.score}%
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {jdResult.summary}
                </p>

                {jdResult.detectedKeywords?.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-zinc-500 uppercase font-mono">Matched Technologies:</div>
                    <div className="flex flex-wrap gap-1">
                      {jdResult.detectedKeywords.map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-[#1e1e22] border border-[#2a2a2f] text-[11px] text-zinc-300 font-mono">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
