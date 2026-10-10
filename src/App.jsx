import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleEligibilitySection from './components/RoleEligibilitySection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AiAssistantDock from './components/AiAssistantDock';
import AiAssistantModal from './components/AiAssistantModal';

export default function App() {
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [initialAiQuery, setInitialAiQuery] = useState('');

  const handleOpenAiChat = (query = '') => {
    setInitialAiQuery(query);
    setAiChatOpen(true);
  };

  const handleCloseAiChat = () => {
    setAiChatOpen(false);
    setInitialAiQuery('');
  };

  return (
    <div className="min-h-screen bg-[#131315] text-zinc-100 flex flex-col font-sans selection:bg-[#d97757]/30 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenAiChat={handleOpenAiChat} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAiChat={handleOpenAiChat} />

        {/* Signature Feature: Role Eligibility Scorecard & Recruiter JD Evaluator */}
        <RoleEligibilitySection onOpenAiChat={handleOpenAiChat} />

        {/* Projects Showcase (ComplyAI, MedEcho, MLOps Eval, AttendAI, etc.) */}
        <ProjectsSection onOpenAiChat={handleOpenAiChat} />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Experience Timeline (Mira Internship, MMIT Degree, Hackathon & Bug Bounty Awards) */}
        <ExperienceTimeline />

        {/* Contact & Direct Messaging */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAiChat={handleOpenAiChat} />

      {/* Interactive Floating AI Assistant Dock */}
      <AiAssistantDock onOpenChat={handleOpenAiChat} />

      {/* Full AI Assistant Modal / Drawer */}
      <AiAssistantModal
        isOpen={aiChatOpen}
        onClose={handleCloseAiChat}
        initialQuery={initialAiQuery}
      />
    </div>
  );
}
