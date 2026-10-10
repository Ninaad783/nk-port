import { portfolioData } from '../data/portfolioData.js';

// Groq API Key configuration (configured via Vite environment variables)
export const DEFAULT_GROQ_API_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GROQ_API_KEY) || "";
export const GROQ_MODEL = "qwen/qwen3.8-27b";

// System prompt grounding the AI in Ninaad's resume and real project data
export const NINAAD_SYSTEM_CONTEXT = `
You are "Ninaad AI" — the intelligent portfolio assistant representing Ninaad Kumbhar.
Your mission is to represent Ninaad to hiring managers, recruiters, and tech leads.

Candidate Background:
- Name: Ninaad Kumbhar
- Education: Bachelor of Engineering (B.E.) in Computer Engineering from Marathwada Mitra Mandal's Institute of Technology (MMIT), Pune (Graduated 2025, CGPA: 7.65/10).
- Primary Focus & Target Roles: Generative AI Engineer, MERN Stack Developer, Full-Stack AI Engineer.
- Experience: Software Engineering / MERN Stack Intern at Mira Advanced Engineering (Jan 2024 - Feb 2024) - reduced page load latency by 25%, optimized MongoDB/MySQL queries, resolved 20+ defects in an Agile/Scrum team.
- Key Certifications & Awards:
  * Oracle Certified Foundations Associate: Agentic AI Foundations Associate (Valid Aug 2026 - Aug 2028).
  * 1st Runner-Up at COMSYS Hackathon 2024 for MedEcho (Multimodal AI Healthcare Diagnostic & RAG platform).
  * 1st Place Winner at Campus-wide Bug Bounty Competition (50+ engineers, isolated backend logic flaws).
  * IBM Professional Certificates: RAG & Agentic AI (In progress).

Two Separate Resumes Available:
1. Generative AI Engineer Resume: /assets/resume_genai.pdf
2. MERN Stack Developer Resume: /assets/resume_mern.pdf

Core Projects & Repositories (Note: Medical billing app is intentionally omitted):
1. ComplyAI (Enterprise AI Compliance & Intelligence Platform):
   - Features: Document RAG with Gemini embeddings, 5-Agent autonomous pipeline, text-to-SQL, real-time prompt injection & jailbreak defense, automated Markdown reports, Docker, 3-tier GitHub Actions CI/CD.
   - Stack: Python, FastAPI, Next.js, ChromaDB, Gemini LLM, Docker.
   - GitHub: https://github.com/Ninaad783/complyai

2. MedEcho (Multimodal AI Diagnostic & Clinical Analytics):
   - Features: Gemini 2.5 Flash for radiological anomalies & clinical transcripts, LangChain RAG pipeline, JWT auth + RBAC, MongoDB query indexing (30% faster). Won 1st Runner-Up at COMSYS Hackathon 2024.
   - Stack: React.js, Node.js, Express.js, MongoDB, Gemini 2.5 Flash, LangChain.
   - GitHub: https://github.com/Ninaad783/medecho
   - Live Demo: https://medecho.vercel.app

3. Automated LLM Evaluation CI/CD Pipeline:
   - Features: LLM-as-a-judge quality gate with Gemini API for hallucination detection & faithfulness (94.2% accuracy), 40% release staging time reduction, GitHub Actions, live dashboard.
   - Stack: Python, GitHub Actions, Gemini API, Pytest, MLOps.
   - GitHub: https://github.com/Ninaad783/CICD
   - Live Demo: https://ninaad783.github.io/CICD/

4. AI Customer Support Agent (@AmazonHelp):
   - Features: 90.3% Intent Macro F1 (vs 85.2% baseline), 4.60/5.0 LLM judge rating, Pearson r=0.9728 human-judge correlation, sub-15s evaluation reproducibility, 10k knowledge base.
   - Stack: Python, Pytest, LLM Judge, Scikit-learn, Vector Retrieval.
   - GitHub: https://github.com/Ninaad783/hiver-support-agent

5. AttendAI (Biometric Vision AI Attendance Platform):
   - Features: Gemini Vision API face-embedding verification, Pandas/NumPy real-time audit pipelines, Streamlit dashboard.
   - Stack: Python, Gemini Vision, Streamlit, Pandas, OpenCV.
   - GitHub: https://github.com/Ninaad783/attendai
   - Live Demo: https://ai-resume-erw9ltzd8hfnxkgecczrnk.streamlit.app/

6. Enterprise ReferralBot (Agentic Workflow Automation):
   - Features: Cloud Functions, Gemini LLM dynamic routing, 35% higher API throughput with retries.
   - Stack: Node.js, Express.js, Cloud Functions, Gemini API.
   - GitHub: https://github.com/Ninaad783/gayatri-waffles

7. AI Career Counselor & Skill Gap Analyzer:
   - Features: Resume parsing, semantic skill gap clustering, personalized upskilling roadmaps.
   - Stack: Python, Streamlit/React, Gemini LLM.
   - GitHub: https://github.com/Ninaad783/ai-career-counselor

8. AI Volunteer Platform:
   - Features: Full-stack MERN community matching platform with smart skill matching & JWT auth.
   - Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS.
   - GitHub: https://github.com/Ninaad783/ai-vol-platform

Contact Information:
- Email: ninaadkumbhar@gmail.com
- Phone: +91 8380036778
- LinkedIn: https://www.linkedin.com/in/ninaad-kumbhar-879019234/
- GitHub: https://github.com/Ninaad783
- Live Portfolio: https://portfolio-nk-sand.vercel.app

Instructions & Scope Guardrails:
- Always format answers with clean markdown headings and bullet points.
- When asked if Ninaad is eligible for a role, provide an exact compatibility rating (e.g. 96% for GenAI, 94% for MERN), give specific production evidence, project citations, and actionable conclusions.
- When asked about resumes, clarify that he has two tailored resumes: GenAI Resume (/assets/resume_genai.pdf) and MERN Stack Resume (/assets/resume_mern.pdf).
- STRICT CANDIDATE SCOPE: You are exclusively Ninaad Kumbhar's portfolio screening assistant.
- GENERAL KNOWLEDGE / OFF-TOPIC QUESTIONS:
  If the user asks a generic technical definition, general tutorial, or off-topic question that does NOT specifically ask about Ninaad Kumbhar (e.g., "what is python", "what is react", "what is machine learning", "write code for calculator", "who is the president", etc.):
  DO NOT give a generic encyclopedia definition, and DO NOT force it into an unsolicited resume dump.
  Instead, politely state:
  "### ⚠️ Question Outside Candidate Scope
  
  It looks like you asked a general question (**\"[user question]\"**). As Ninaad Kumbhar's portfolio screening assistant, I am specifically designed to answer questions regarding Ninaad's engineering background, verified codebases, and role eligibility for **Generative AI Engineer** and **MERN Stack Developer** positions.
  
  **Relevant questions you can ask about Ninaad instead:**
  - *How does Ninaad use Python in production GenAI & MLOps pipelines (ComplyAI, CI/CD)?*
  - *Is Ninaad eligible for a Generative AI Engineer role at our company?*
  - *What is Ninaad's experience with the MERN stack (React, Node, Express, MongoDB)?*
  - *What awards and hackathon projects has Ninaad completed?*
  - *Can you evaluate our open Job Description against Ninaad's profile?*"
`;

// Evaluates a custom Job Description string against Ninaad's profile
export function evaluateJobDescriptionFit(jdText) {
  if (!jdText || jdText.trim().length < 15) {
    return {
      error: "Please provide a more detailed Job Description (at least a couple sentences or bullet points) to run the evaluation."
    };
  }

  const text = jdText.toLowerCase();

  const criteriaGroups = [
    {
      category: "Generative AI & LLMs",
      weight: 25,
      keywords: ["genai", "llm", "rag", "langchain", "prompt", "gemini", "gpt", "embeddings", "vector", "agent", "agentic", "hallucination", "nlp"],
      demonstrated: [
        "Architected ComplyAI 5-agent pipeline with document RAG and citation grounding",
        "Built MedEcho clinical multimodal intelligence with Gemini 2.5 Flash",
        "Oracle Certified in Agentic AI Foundations"
      ]
    },
    {
      category: "Full-Stack & MERN Engineering",
      weight: 25,
      keywords: ["react", "node", "express", "javascript", "typescript", "frontend", "mern", "tailwind", "next.js", "nextjs", "redux", "rest", "api"],
      demonstrated: [
        "MERN Internship at Mira Advanced Engineering (25% latency reduction, 20+ bug fixes)",
        "Engineered 12+ RESTful endpoints, JWT auth, and role-based access control (RBAC)",
        "Modern responsive UI/UX with React, Next.js, and Tailwind CSS"
      ]
    },
    {
      category: "Databases & Storage",
      weight: 15,
      keywords: ["mongodb", "sql", "postgresql", "mysql", "chromadb", "pgvector", "database", "mongoose", "indexing", "queries"],
      demonstrated: [
        "MongoDB indexing resulting in 30% query acceleration in MedEcho",
        "Vector databases (ChromaDB / pgvector) for semantic embeddings in ComplyAI",
        "SQL schema design, query optimization, and transaction handling"
      ]
    },
    {
      category: "Backend, Python & API Architecture",
      weight: 20,
      keywords: ["python", "fastapi", "flask", "microservices", "backend", "cloud functions", "webhooks", "serverless", "endpoints"],
      demonstrated: [
        "FastAPI high-performance backends for ComplyAI",
        "Serverless Node.js Cloud Functions with rate-limited integrations in ReferralBot",
        "Python automation scripts and regression test suites"
      ]
    },
    {
      category: "DevOps, CI/CD & Testing",
      weight: 15,
      keywords: ["ci/cd", "cicd", "github actions", "docker", "testing", "pytest", "devops", "git", "linux", "aws", "cloud", "agile", "scrum"],
      demonstrated: [
        "Automated LLM Evaluation CI/CD pipeline scoring 94.2% faithfulness in GitHub Actions",
        "Docker multi-stage builds and docker-compose orchestration",
        "Pytest suites, Postman API testing, and automated defect tracking"
      ]
    }
  ];

  let matchedCriteria = [];
  let scoreSum = 0;
  let totalApplicableWeight = 0;
  let detectedKeywords = [];

  criteriaGroups.forEach((group) => {
    const hits = group.keywords.filter((kw) => text.includes(kw));
    if (hits.length > 0) {
      detectedKeywords.push(...hits);
      totalApplicableWeight += group.weight;
      const fulfillment = Math.min(100, 75 + hits.length * 8);
      scoreSum += (fulfillment / 100) * group.weight;
      matchedCriteria.push({
        category: group.category,
        hits: hits,
        evidence: group.demonstrated,
        fulfillment
      });
    }
  });

  let finalScore = 0;
  if (totalApplicableWeight > 0) {
    finalScore = Math.round((scoreSum / totalApplicableWeight) * 100);
  } else {
    finalScore = 88;
  }

  finalScore = Math.max(82, Math.min(98, finalScore));

  let verdict = "Highly Recommended Fit";
  let summary = "";

  if (finalScore >= 92) {
    verdict = "Exceptional Candidate Fit (Tier 1 Recommendation)";
    summary = `Ninaad is an outstanding match (${finalScore}%) for this role. His proven track record in both production GenAI (RAG, Agentic AI, evaluation gates) and full-stack MERN architectures directly matches the requirements.`;
  } else if (finalScore >= 85) {
    verdict = "Strong Match & High Potential";
    summary = `Ninaad presents a strong profile (${finalScore}%) meeting core technical benchmarks. His background in full-stack engineering and cutting-edge LLMs will allow him to ramp up immediately.`;
  } else {
    verdict = "Promising Candidate with Fast Learning Curve";
    summary = `Ninaad shows solid transferable competencies (${finalScore}%) with hands-on production code, hackathon recognition, and CI/CD discipline.`;
  }

  return {
    score: finalScore,
    verdict,
    summary,
    detectedKeywords: [...new Set(detectedKeywords)],
    matchedCriteria,
    recommendedAction: "Schedule a Technical Discussion / Interview with Ninaad"
  };
}

// Built-in intelligent fallback response generator
export function generateLocalAiResponse(userMessage) {
  const query = userMessage.toLowerCase().trim();

  // 1. Role Eligibility Queries
  if (
    query.includes("eligible") ||
    query.includes("qualification") ||
    query.includes("ready for") ||
    query.includes("evaluate") ||
    query.includes("role fit") ||
    query.includes("fit for") ||
    query.includes("should i hire")
  ) {
    if (query.includes("genai") || query.includes("generative") || query.includes("ai engineer") || query.includes("llm")) {
      const role = portfolioData.targetRoles.find((r) => r.id === "genai");
      return `### 🎯 Generative AI Engineer Eligibility Assessment: **${role.matchScore}% (Strongly Recommended)**\n\n` +
        `**Verdict:** ${role.fitAssessment.verdict}\n\n` +
        `#### 🔍 Demonstrated Production Evidence:\n` +
        role.keyStrengths.map((s) => `- ✅ ${s}`).join("\n") +
        `\n\n#### 🚀 Flagship Projects:\n` +
        `- **ComplyAI**: Enterprise 5-agent compliance pipeline, document RAG with citations, prompt injection guard ([View GitHub Repo](${portfolioData.projects[0].github}))\n` +
        `- **MedEcho**: Multimodal clinical RAG with Gemini 2.5 Flash, awarded **1st Runner-Up at COMSYS Hackathon 2024** ([Live Demo](${portfolioData.projects[1].live}) | [GitHub](${portfolioData.projects[1].github}))\n` +
        `- **Automated LLM Eval Pipeline**: LLM-as-a-judge CI/CD gate with 94.2% faithfulness ([Live Dashboard](${portfolioData.projects[2].live}))\n\n` +
        `📄 **Download GenAI Resume:** [resume_genai.pdf](${portfolioData.personal.resumeGenAi})\n\n` +
        `*Would you like to review his MERN Stack eligibility or paste a specific Job Description to evaluate?*`;
    }

    if (query.includes("mern") || query.includes("full stack") || query.includes("frontend") || query.includes("backend") || query.includes("react") || query.includes("node")) {
      const role = portfolioData.targetRoles.find((r) => r.id === "mern");
      return `### ⚡ MERN Stack Developer Eligibility Assessment: **${role.matchScore}% (Battle-Tested)**\n\n` +
        `**Verdict:** ${role.fitAssessment.verdict}\n\n` +
        `#### 🔍 Demonstrated Production Evidence:\n` +
        role.keyStrengths.map((s) => `- ✅ ${s}`).join("\n") +
        `\n\n#### 🏢 Real-World Experience:\n` +
        `- **Software Engineering Intern at Mira Advanced Engineering**: Engineered modular React components, built secure Node/Express REST APIs, reduced page latency by **25%**, and resolved 20+ system defects.\n` +
        `- **Database Optimization**: MongoDB indexing speeding queries by 30%, ACID transaction handling with MySQL and PostgreSQL.\n` +
        `- **Full-Stack Projects**: MedEcho (React + Node + Mongo), AI Volunteer Platform (Full MERN with JWT Auth).\n\n` +
        `📄 **Download MERN Stack Resume:** [resume_mern.pdf](${portfolioData.personal.resumeMern})\n\n` +
        `*Would you like to examine his GenAI credentials or contact details?*`;
    }

    const hybrid = portfolioData.targetRoles.find((r) => r.id === "hybrid");
    return `### 🌟 Full-Stack AI Engineer Eligibility (Dual Competency): **${hybrid.matchScore}% (Elite Fit)**\n\n` +
      `**Verdict:** ${hybrid.fitAssessment.verdict}\n\n` +
      `Ninaad offers a rare, high-value combination:\n` +
      `- **GenAI & Agentic AI**: 96% Match (Google Gemini, RAG with citations, 5-agent workflows, LLM-as-a-judge evaluation, Oracle Agentic AI Certified).\n` +
      `- **MERN Stack**: 94% Match (React, Node, Express, MongoDB indexing, Mira Advanced Engineering internship, 25% latency reduction).\n` +
      `- **MLOps & DevOps**: GitHub Actions CI/CD gates, Docker containerization, Pytest regression.\n` +
      `- **Security**: 1st Place Bug Bounty Winner & built-in prompt injection guards.\n\n` +
      `📄 **Resumes Available:**\n` +
      `- [Download GenAI Resume](${portfolioData.personal.resumeGenAi})\n` +
      `- [Download MERN Resume](${portfolioData.personal.resumeMern})`;
  }

  // Resume queries
  if (query.includes("resume") || query.includes("cv")) {
    return `### 📄 Ninaad's Tailored Resumes\n\n` +
      `Ninaad provides two specialized resumes depending on your target role:\n\n` +
      `1. 🧠 **[Download GenAI Engineer Resume (PDF)](${portfolioData.personal.resumeGenAi})**\n` +
      `   *Focused on LLM pipelines, Agentic AI, RAG with citations, MLOps evaluation, and Python/FastAPI backend architecture.*\n\n` +
      `2. 💻 **[Download MERN Stack Resume (PDF)](${portfolioData.personal.resumeMern})**\n` +
      `   *Focused on React.js, Node.js, Express, MongoDB indexing, Mira Advanced Engineering internship, and scalable microservices.*`;
  }

  // 2. Project List / Project Details Queries
  if (query.includes("project") || query.includes("portfolio") || query.includes("repo") || query.includes("github") || query.includes("live link") || query.includes("demo")) {
    const foundProject = portfolioData.projects.find(p => 
      query.includes(p.id) || 
      query.includes(p.title.toLowerCase()) || 
      (p.id === "cicd-eval" && (query.includes("cicd") || query.includes("mlops") || query.includes("eval"))) ||
      (p.id === "hiver-agent" && (query.includes("hiver") || query.includes("support") || query.includes("amazon")))
    );

    if (foundProject) {
      return `### 📁 Project Spotlight: **${foundProject.title}**\n` +
        `*${foundProject.subtitle}* (${foundProject.badge})\n\n` +
        `**Overview:** ${foundProject.description}\n\n` +
        `**Key Highlights & Metrics:**\n` +
        foundProject.highlights.map(h => `- 🔹 ${h}`).join("\n") +
        `\n\n**Tech Stack:** ${foundProject.tags.join(" • ")}\n\n` +
        `🔗 **Links:**\n` +
        `- [GitHub Repository](${foundProject.github})\n` +
        (foundProject.live && foundProject.live !== foundProject.github ? `- [Live Application / Demo](${foundProject.live})\n` : "");
    }

    return `### 🚀 Ninaad's Key Projects (With GitHub & Live Links):\n\n` +
      portfolioData.projects.map((p, idx) => 
        `${idx + 1}. **[${p.title}](${p.github})** — *${p.subtitle}*\n` +
        `   • **Category:** \`${p.category}\` | **Key Metric:** ${p.metric}\n` +
        `   • **Tech:** ${p.tags.slice(0, 5).join(", ")}\n` +
        `   • [GitHub Repo](${p.github}) ${p.live && p.live !== p.github ? `| [Live Demo](${p.live})` : ""}\n`
      ).join("\n") +
      `\n💡 *Note: The medical billing application has been omitted as requested.*`;
  }

  // 3. Who is Ninaad / About
  if (query.includes("who is") || query.includes("tell me about") || query.includes("about ninaad") || query.includes("intro") || query.includes("background")) {
    return `### 👋 Meet Ninaad Kumbhar\n\n` +
      `**Role:** Generative AI Engineer & MERN Stack Developer\n` +
      `**Education:** B.E. in Computer Engineering from Marathwada Mitra Mandal's Institute of Technology (MMIT), Pune (Graduated 2025, CGPA 7.65/10)\n\n` +
      `Ninaad specializes in engineering production LLM systems, autonomous multi-agent workflows, and scalable MERN microservices:\n\n` +
      `- 🧠 **GenAI & Agents:** Document RAG with exact page citations, 5-agent pipelines (ComplyAI), Gemini 2.5 Flash multimodal models (MedEcho), and calibrated LLM-judge evaluations.\n` +
      `- 💻 **MERN Full-Stack:** React, Node.js, Express, MongoDB indexing (30% query acceleration), RESTful API design, and production internship at Mira Advanced Engineering.\n` +
      `- 🛡️ **Security & Reliability:** Winner of campus Bug Bounty (1st place among 50+ engineers), CI/CD pipelines in GitHub Actions.\n\n` +
      `📬 **Contact:** [ninaadkumbhar@gmail.com](mailto:ninaadkumbhar@gmail.com) | [+91 8380036778](tel:+918380036778) | [LinkedIn](https://www.linkedin.com/in/ninaad-kumbhar-879019234/) | [GitHub](https://github.com/Ninaad783)`;
  }

  // 4. Skills and Tech Stack Queries
  if (query.includes("skill") || query.includes("tech stack") || query.includes("languages") || query.includes("framework")) {
    return `### 🛠️ Technical Skills Matrix\n\n` +
      `**1. Generative AI & Agentic AI:**\n` +
      `- Google Gemini LLMs, RAG Frameworks, Agentic AI, LangChain, Embeddings, LLM-as-a-judge, Text-to-SQL, Prompt Security & Jailbreak Defense\n\n` +
      `**2. MERN Stack & Frontend:**\n` +
      `- React.js, Next.js, Redux Toolkit, Context API, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3, Responsive UI/UX\n\n` +
      `**3. Backend & Cloud:**\n` +
      `- Node.js, Express.js, Python (FastAPI, Flask), RESTful Microservices, Cloud Functions, JWT Auth, Webhooks\n\n` +
      `**4. Databases:**\n` +
      `- MongoDB (Mongoose, Indexing), ChromaDB, pgvector, PostgreSQL, MySQL, SQL Query Tuning\n\n` +
      `**5. DevOps & Automation:**\n` +
      `- GitHub Actions CI/CD, Docker Containerization, Pytest, Linux, Postman API Testing, Git/GitLab`;
  }

  // 5. Hackathons, Certifications & Awards
  if (query.includes("award") || query.includes("hackathon") || query.includes("certificate") || query.includes("achievement") || query.includes("bug bounty")) {
    return `### 🏆 Honors, Hackathons & Certifications\n\n` +
      portfolioData.certifications.map((c) => 
        `- 🥇 **${c.title}** (${c.validity})\n  *${c.highlight}*`
      ).join("\n\n");
  }

  // 6. Experience / Internship
  if (query.includes("experience") || query.includes("work") || query.includes("intern") || query.includes("mira")) {
    const exp = portfolioData.experience[0];
    return `### 💼 Professional Experience\n\n` +
      `**${exp.role}** — *${exp.company}* (${exp.location})\n` +
      `*Duration: ${exp.period}*\n\n` +
      exp.points.map((p) => `- 🔹 ${p}`).join("\n");
  }

  // 7. Contact / Hire
  if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("phone") || query.includes("reach")) {
    return `### 📬 Contact Ninaad Kumbhar\n\n` +
      `Ninaad is actively available for **Generative AI Engineer**, **MERN Stack Developer**, and **Full-Stack AI** opportunities.\n\n` +
      `- 📧 **Email:** [ninaadkumbhar@gmail.com](mailto:ninaadkumbhar@gmail.com)\n` +
      `- 📱 **Phone:** [+91 8380036778](tel:+918380036778)\n` +
      `- 💼 **LinkedIn:** [linkedin.com/in/ninaad-kumbhar](https://www.linkedin.com/in/ninaad-kumbhar-879019234/)\n` +
      `- 💻 **GitHub:** [github.com/Ninaad783](https://github.com/Ninaad783)\n` +
      `- 📄 **Resumes:** [GenAI Resume](${portfolioData.personal.resumeGenAi}) | [MERN Resume](${portfolioData.personal.resumeMern})`;
  }

  // Default Fallback
  return `### 🤖 I am Ninaad's Portfolio Assistant!\n\n` +
    `I can help you evaluate his qualifications and explore his engineering accomplishments:\n\n` +
    `1. 🎯 **"Is Ninaad eligible for a GenAI Engineer role?"** — Detailed role match analysis (96% fit)\n` +
    `2. ⚡ **"Is he eligible for a MERN Stack Developer role?"** — Production full-stack readiness (94% fit)\n` +
    `3. 📄 **"Download his resume"** — Separate GenAI and MERN resumes available\n` +
    `4. 📁 **"Show projects with GitHub and Live links"** — Browse ComplyAI, MedEcho, MLOps CI/CD, and more\n` +
    `5. 🏆 **"Show certifications and hackathon awards"** — Oracle Agentic AI, COMSYS 1st Runner-Up, Bug Bounty Winner\n` +
    `6. 📋 **"Evaluate my Job Description"** — Paste your JD text to get an instant match score and hiring scorecard!`;
}

// Simulates smooth line-by-line / word-by-word streaming for local fallback responses
function simulateStreamingText(fullText, onChunk, onComplete) {
  const words = fullText.split(' ');
  let currentText = '';
  let index = 0;

  const timer = setInterval(() => {
    if (index < words.length) {
      currentText += (index === 0 ? '' : ' ') + words[index];
      index++;
      onChunk(currentText);
    } else {
      clearInterval(timer);
      onComplete(fullText);
    }
  }, 20); // 20ms per token for natural typewriter streaming
}

// Helper to detect generic definitions or off-topic queries
export function isGenericOrOffTopicQuery(userQuery) {
  const q = userQuery.toLowerCase().trim().replace(/['"?!.]/g, '');
  
  // If explicitly asking about Ninaad or his direct work, it is in-scope
  if (
    q.includes("ninaad") ||
    q.includes("kumbhar") ||
    q.includes("candidate") ||
    q.includes("complyai") ||
    q.includes("medecho") ||
    q.includes("attendai") ||
    q.includes("mira") ||
    q.includes("eligible") ||
    q.includes("eligibility") ||
    q.includes("resume") ||
    q.includes("hire") ||
    q.includes("interview") ||
    q.includes("hackathon") ||
    q.includes("bug bounty") ||
    q.includes("his experience") ||
    q.includes("your experience") ||
    q.includes("his projects") ||
    q.includes("your projects") ||
    q.includes("job description") ||
    q.startsWith("evaluate jd")
  ) {
    return false;
  }

  // Common generic definition or off-topic patterns
  const genericPatterns = [
    /^what\s+(is|are|was|were|i\s+s|i\s+spython)\s+[a-z0-9\s\-_]+$/i,
    /^what\s+i\s+spython$/i,
    /^what\s+is\s+python$/i,
    /^(define|explain|describe)\s+[a-z0-9\s\-_]+$/i,
    /^how\s+(does|do|to)\s+[a-z0-9\s\-_]+\s+work$/i,
    /^who\s+(is|was|are)\s+[a-z0-9\s\-_]+$/i,
    /^write\s+(a\s+)?(code|program|script|poem|story|essay)/i,
    /^(tell\s+me\s+a\s+joke|hello\s+world|who\s+are\s+you)$/i
  ];

  return genericPatterns.some(pattern => pattern.test(q));
}

export function getOffTopicResponse(userQuery) {
  return `### ⚠️ Question Outside Candidate Scope\n\n` +
    `It looks like you asked a general question (**"${userQuery}"**).\n\n` +
    `I am specifically designed to assist recruiters and engineering leads in evaluating **Ninaad Kumbhar** for **Generative AI Engineer** and **MERN Stack Developer** positions.\n\n` +
    `**Relevant questions you can ask about Ninaad instead:**\n` +
    `- *How does Ninaad use Python in production GenAI & MLOps pipelines (ComplyAI, CI/CD)?*\n` +
    `- *Is Ninaad eligible for a Generative AI Engineer role at our company?*\n` +
    `- *What is Ninaad's experience with the MERN stack (React, Node, Express, MongoDB)?*\n` +
    `- *What did Ninaad build during his software engineering internship at Mira Advanced Engineering?*\n` +
    `- *Can you evaluate our open Job Description against Ninaad's skills?*\n` +
    `- *Download Ninaad's GenAI or MERN resumes*\n\n` +
    `*Click any suggested question above to ask it directly!*`;
}

// REAL STREAMING function using Groq API with line-by-line streaming
export async function streamChatMessage(messages, customApiKey, onChunk, onComplete, onError) {
  const lastUserMessage = messages[messages.length - 1]?.content || "";
  const apiKey = (customApiKey && customApiKey.trim().length > 10) ? customApiKey.trim() : DEFAULT_GROQ_API_KEY;

  // Handle generic or off-topic questions by gently redirecting and suggesting Ninaad-focused queries
  if (isGenericOrOffTopicQuery(lastUserMessage)) {
    const offTopicReply = getOffTopicResponse(lastUserMessage);
    simulateStreamingText(offTopicReply, onChunk, onComplete);
    return;
  }

  // Handle special JD Evaluation commands immediately with streaming effect
  if (lastUserMessage.toLowerCase().startsWith("evaluate jd:") || lastUserMessage.toLowerCase().startsWith("job description:")) {
    const jdContent = lastUserMessage.replace(/^(evaluate jd:|job description:)/i, "").trim();
    const evaluation = evaluateJobDescriptionFit(jdContent);
    const replyText = `### 📋 Job Description Compatibility Assessment\n\n` +
      `**Candidate Compatibility Score:** **${evaluation.score}%**\n` +
      `**Verdict:** ${evaluation.verdict}\n\n` +
      `${evaluation.summary}\n\n` +
      `**Matched Technologies:**\n` +
      evaluation.detectedKeywords.map(k => `- \`${k}\``).join(' ') +
      `\n\n**Recommendation:** ${evaluation.recommendedAction}\n\n` +
      `*You can also download his tailored resumes: [GenAI Resume](${portfolioData.personal.resumeGenAi}) | [MERN Resume](${portfolioData.personal.resumeMern})*`;
    
    simulateStreamingText(replyText, onChunk, onComplete);
    return;
  }

  // Attempt live streaming from Groq API
  try {
    const groqMessages = [
      { role: "system", content: NINAAD_SYSTEM_CONTEXT },
      ...messages.slice(-8).map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: groqMessages,
        stream: true,
        max_tokens: 1024,
        temperature: 0.6
      })
    });

    if (!response.ok || !response.body) {
      throw new Error(`Groq API returned status ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let accumulatedText = "";
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || ""; // Keep uncompleted line in buffer

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(":")) continue; // Skip comments/keepalives
        if (trimmed === "data: [DONE]") {
          break;
        }

        if (trimmed.startsWith("data: ")) {
          const jsonStr = trimmed.substring(6);
          try {
            const parsed = JSON.parse(jsonStr);
            const delta = parsed.choices?.[0]?.delta?.content || "";
            if (delta) {
              accumulatedText += delta;
              onChunk(accumulatedText);
            }
          } catch (e) {
            // Ignore parse errors on malformed chunks
          }
        }
      }
    }

    if (accumulatedText.trim().length > 0) {
      onComplete(accumulatedText);
      return;
    }

    throw new Error("No content received from Groq stream");
  } catch (err) {
    console.warn("Groq streaming failed, falling back to local knowledge engine with smooth streaming:", err);
    // Smooth fallback streaming
    const fallbackText = generateLocalAiResponse(lastUserMessage);
    simulateStreamingText(fallbackText, onChunk, onComplete);
  }
}
