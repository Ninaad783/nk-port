import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, FileText, Send, CheckCircle, Copy } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Ninaad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 bg-[#161619] border-t border-[#242428] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase">
            <Mail className="w-3.5 h-3.5 text-[#d97757]" />
            <span>Connect</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Available for full-time Generative AI Engineering and MERN Stack Developer roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct Details */}
          <div className="md:col-span-5 space-y-3">
            
            <div className="p-4 rounded-xl bg-[#1b1b1e] border border-[#28282d] flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="text-[11px] text-zinc-500 font-mono">Email</div>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="font-medium text-zinc-200 hover:text-white"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-[#222226] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-0.5 text-xs">
              <div className="text-[11px] text-zinc-500 font-mono">Phone</div>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="font-medium text-zinc-200 hover:text-white font-mono"
              >
                {portfolioData.personal.phone}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-0.5 text-xs">
              <div className="text-[11px] text-zinc-500 font-mono">Location</div>
              <div className="font-medium text-zinc-200">
                {portfolioData.personal.location} (Open to Relocation &amp; Remote)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-2.5 text-xs">
              <div className="text-[11px] text-zinc-500 font-mono">Curriculum Vitae (PDF)</div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={portfolioData.personal.resumeGenAi}
                  download="Ninaad_Kumbhar_GenAI_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222226] hover:bg-[#2b2b31] border border-[#2e2e33] text-zinc-200 text-xs font-medium transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#d97757]" />
                  <span>GenAI Resume</span>
                </a>
                <a
                  href={portfolioData.personal.resumeMern}
                  download="Ninaad_Kumbhar_MERN_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222226] hover:bg-[#2b2b31] border border-[#2e2e33] text-zinc-200 text-xs font-medium transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MERN Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Clean Message Form */}
          <div className="md:col-span-7 p-5 sm:p-6 rounded-xl bg-[#1b1b1e] border border-[#28282d] space-y-4">
            <h3 className="text-sm font-bold text-zinc-100">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-zinc-400 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 rounded-lg bg-[#141416] border border-[#2b2b30] text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#d97757]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-400 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#141416] border border-[#2b2b30] text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#d97757]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-400 font-medium">Role / Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity for GenAI Engineer / MERN Developer"
                  className="w-full px-3 py-2 rounded-lg bg-[#141416] border border-[#2b2b30] text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#d97757]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-zinc-400 font-medium">Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Ninaad, we reviewed your projects and would like to connect..."
                  className="w-full px-3 py-2 rounded-lg bg-[#141416] border border-[#2b2b30] text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#d97757]"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#d97757] hover:bg-[#c96442] text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
