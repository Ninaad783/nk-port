export const portfolioData = {
  personal: {
    name: "Ninaad Kumbhar",
    role: "Generative AI Engineer & MERN Stack Developer",
    tagline: "Building autonomous agentic workflows, production RAG architectures, and resilient full-stack MERN systems.",
    location: "Pune / Mumbai, Maharashtra, India",
    phone: "+91 8380036778",
    email: "ninaadkumbhar@gmail.com",
    linkedin: "https://www.linkedin.com/in/ninaad-kumbhar-879019234/",
    linkedinDisplay: "linkedin.com/in/ninaad-kumbhar-879019234",
    github: "https://github.com/Ninaad783",
    githubDisplay: "github.com/Ninaad783",
    portfolioUrl: "https://portfolio-nk-sand.vercel.app",
    avatar: "/assets/avatar.png",
    resumeUrl: "/assets/resume_genai.pdf",
    resumeGenAi: "/assets/resume_genai.pdf",
    resumeMern: "/assets/resume_mern.pdf",
    summary:
      "Python-focused Generative AI Engineer and MERN Stack Developer with a B.E. in Computer Engineering (Graduated 2025). Hands-on expertise building production LLM pipelines, autonomous Agentic workflows, document-grounded RAG systems, and high-performance MERN microservices. Proven track record in CI/CD automation, LLM evaluation (LLM-as-a-judge), and hackathon-winning architectures."
  },

  metrics: [
    { label: "Intent Macro F1", value: "90.3%", desc: "Production Agentic Support System" },
    { label: "LLM Faithfulness", value: "94.2%", desc: "Automated MLOps Quality Gate" },
    { label: "Query Speedup", value: "+30%", desc: "MongoDB Indexing & Schema Tuning" },
    { label: "Hackathon Honors", value: "1st Runner-Up", desc: "COMSYS Hackathon 2024 (MedEcho)" },
    { label: "Bug Bounty", value: "1st Place", desc: "Campus-wide Vulnerability Hunt" },
    { label: "Oracle Certified", value: "Agentic AI", desc: "Foundations Associate (2026-2028)" }
  ],

  targetRoles: [
    {
      id: "genai",
      title: "Generative AI Engineer",
      matchScore: 96,
      badge: "Strongly Recommended",
      headline: "Comprehensive production experience in LLMs, RAG, and Agentic frameworks.",
      summary: "Ninaad has designed multi-agent orchestration pipelines, document-grounded RAG with citations, text-to-SQL workflows, and LLM-as-a-judge evaluation frameworks with Google Gemini and Python.",
      keyStrengths: [
        "Architected ComplyAI: 5-agent compliance pipeline with RAG, Text-to-SQL, and prompt injection security guard",
        "Built MedEcho: Multimodal clinical diagnostic platform with Gemini 2.5 Flash (COMSYS Hackathon 1st Runner-Up)",
        "Engineered LLM Evaluation Pipeline: Automated CI/CD quality gate with Gemini API LLM-as-a-judge scoring 94.2% faithfulness",
        "Hiver Support Agent: 90.3% Macro F1 with calibrated Human-Judge correlation (Pearson r=0.9728, Cohen's kappa=1.0)",
        "Certified in Agentic AI by Oracle (Agentic AI Foundations Associate)"
      ],
      fitAssessment: {
        readiness: "Production Ready",
        verdict: "Exceptional candidate for GenAI roles requiring end-to-end RAG architecture, agent orchestration, model evaluation, and deployment."
      }
    },
    {
      id: "mern",
      title: "MERN Stack Developer",
      matchScore: 94,
      badge: "Industry Battle-Tested",
      headline: "Hands-on internship experience delivering performant React frontends and Node/Express backends.",
      summary: "Demonstrated full-stack development at Mira Advanced Engineering, optimizing RESTful microservices, MongoDB and MySQL schemas, and building responsive React user interfaces.",
      keyStrengths: [
        "MERN Internship at Mira Advanced Engineering: Reduced page latency by 25% and resolved 20+ defects",
        "Deep RESTful API engineering: 12+ endpoints in Express.js with JWT auth and Role-Based Access Control (RBAC)",
        "Database optimization: MongoDB Mongoose indexing and transaction safety, improving query times by 30%",
        "Frontend mastery: React.js, Next.js, Redux Toolkit, Context API, and modern responsive Tailwind CSS layouts",
        "DevOps integration: Multi-stage CI/CD pipelines in GitHub Actions maintaining 99% deployment success"
      ],
      fitAssessment: {
        readiness: "Production Ready",
        verdict: "Strong fit for MERN and Full-Stack teams requiring reliable microservices, database tuning, and high-performance interactive interfaces."
      }
    },
    {
      id: "hybrid",
      title: "Full-Stack AI Engineer (GenAI + MERN)",
      matchScore: 98,
      badge: "Rare Dual-Competency",
      headline: "Bridges the gap between frontier AI intelligence and production web applications.",
      summary: "Most AI engineers lack production frontend/backend rigor, and most web developers don't understand embeddings and agentic loops. Ninaad seamlessly builds both ends with zero handoff friction.",
      keyStrengths: [
        "Builds full-stack AI applications from React/Next.js UI down to vector databases and agentic backends",
        "Eliminates the communication barrier between AI researchers and product software engineering",
        "Combines MERN API design with FastAPI, LangChain, Google Gemini, and automated evaluation gates",
        "Security-aware: Won campus bug bounty competition, builds injection guards and robust JWT authentication"
      ],
      fitAssessment: {
        readiness: "Elite Fit",
        verdict: "Ideal candidate for high-growth tech companies building next-gen AI-first products who need an engineer capable of handling both the AI pipeline and the user-facing web app."
      }
    }
  ],

  projects: [
    {
      id: "complyai",
      title: "ComplyAI",
      subtitle: "Enterprise AI Compliance & Intelligence Platform",
      category: "GenAI & Agentic AI",
      tags: ["Python", "FastAPI", "Next.js", "Gemini LLM", "ChromaDB", "SQLAlchemy", "Docker", "CI/CD"],
      github: "https://github.com/Ninaad783/complyai",
      live: "https://github.com/Ninaad783/complyai",
      badge: "Featured GenAI Platform",
      status: "Production Ready",
      metric: "5-Agent Autonomous Workflow",
      description:
        "A production-grade GenAI compliance and intelligence platform where organizations upload policies, contracts, regulations, and datasets to perform deep semantic search, multi-agent risk auditing, text-to-SQL analytics, and automated compliance reporting.",
      highlights: [
        "Document RAG: Vector search over PDFs, DOCX, CSV with Gemini embeddings and exact page citation grounding",
        "5-Agent Multi-Agent Workflow: Retriever -> SQL -> Compliance -> Risk -> Report collaborative autonomous pipeline",
        "Real-time Security Guard: Built-in protection against prompt injection, adversarial patterns, and jailbreak attempts",
        "RAG Evaluation: LLM-as-a-judge scoring for Faithfulness, Relevancy, and Hallucination Risk metrics",
        "Automated CI/CD & Docker: 3-tier GitHub Actions workflow running Pytest, Next.js type-checks, and Docker builds"
      ]
    },
    {
      id: "medecho",
      title: "MedEcho",
      subtitle: "Multimodal AI Healthcare Diagnostic & RAG Analytics",
      category: "GenAI & MERN",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini 2.5 Flash", "LangChain", "Vector DBs"],
      github: "https://github.com/Ninaad783/medecho",
      live: "https://medecho.vercel.app",
      badge: "Hackathon 1st Runner-Up",
      status: "Live Demo",
      metric: "COMSYS Hackathon Winner",
      description:
        "An AI-powered diagnostic and medical intelligence platform using multimodal models to analyze clinical imaging and patient reports. Combines Gemini 2.5 Flash for radiography anomaly localization with a LangChain RAG pipeline for medical question-answering.",
      highlights: [
        "Multimodal Clinical Analysis: Analyzes radiological imagery and clinical transcripts with Gemini 2.5 Flash",
        "Document-Grounded RAG: Processes complex unstructured clinical datasets with persistent session memory",
        "Scalable MERN Architecture: Built 12+ RESTful APIs with Node/Express and MongoDB indexing (30% faster query times)",
        "Security & RBAC: JWT authentication and Role-Based Access Control protecting sensitive patient datasets",
        "Award: Secured 1st Runner-Up at COMSYS Hackathon 2024 for innovative healthcare reporting"
      ]
    },
    {
      id: "cicd-eval",
      title: "Automated LLM Evaluation CI/CD Pipeline",
      subtitle: "Production MLOps Quality Gate & Regression Harness",
      category: "MLOps & Quality Gate",
      tags: ["Python", "GitHub Actions", "Gemini API", "Pytest", "MLOps", "CI/CD", "Shell"],
      github: "https://github.com/Ninaad783/CICD",
      live: "https://ninaad783.github.io/CICD/",
      badge: "MLOps Production Tool",
      status: "Live Dashboard",
      metric: "94.2% Faithfulness Score",
      description:
        "A Python-based MLOps automated evaluation pipeline integrated directly into GitHub Actions. Implements an LLM-as-a-judge framework with the Gemini API to score hallucination detection and NLP answer relevancy before pull requests can merge.",
      highlights: [
        "LLM-as-a-Judge: Automated scoring of Faithfulness, Relevancy, and Hallucination risk on every pull request",
        "Multi-stage GitHub Actions: Quality gate running regression checks, reducing manual staging time by 40%",
        "Telemetry & Cost Tracking: Automated logs of inference latency, token usage, and cost estimates",
        "Interactive Dashboard: Live visual reporting dashboard deployed on GitHub Pages"
      ]
    },
    {
      id: "hiver-agent",
      title: "AI Customer Support Agent (@AmazonHelp)",
      subtitle: "Autonomous Agent with Calibrated LLM-Judge Reliability",
      category: "GenAI & Agentic AI",
      tags: ["Python", "Pytest", "LLM Judge", "Scikit-learn", "Vector Retrieval", "NLP"],
      github: "https://github.com/Ninaad783/hiver-support-agent",
      live: "https://github.com/Ninaad783/hiver-support-agent",
      badge: "Production Benchmark",
      status: "Reproducible in <15s",
      metric: "90.3% Intent Macro F1",
      description:
        "Production-grade AI Customer Support Agent built for @AmazonHelp using real-world enterprise customer support data. Features intent routing, escalation detection, and a rigorously calibrated human-versus-LLM judge inter-rater reliability study.",
      highlights: [
        "Top Benchmark Performance: 90.3% Intent Macro F1 and 60.0% Escalation F1 across 200 Golden Benchmarks",
        "Human vs. LLM Calibration Study: Pearson r = 0.9728 and Cohen's kappa = 1.0000 across 50 paired evaluations",
        "Sub-15s Zero-Key Reproducibility: Pre-packaged 10,000-exemplar KB and instant evaluation harness",
        "Escalation Safety Guard: Unsafe auto-handle rate minimized to protect brand reputation"
      ]
    },
    {
      id: "attendai",
      title: "AttendAI",
      subtitle: "Biometric Vision AI Attendance & Verification Platform",
      category: "GenAI & Vision",
      tags: ["Python", "Gemini Vision API", "Streamlit", "Pandas", "NumPy", "OpenCV"],
      github: "https://github.com/Ninaad783/attendai",
      live: "https://ai-resume-erw9ltzd8hfnxkgecczrnk.streamlit.app/",
      badge: "Computer Vision AI",
      status: "Live App",
      metric: "Sub-second Face Match",
      description:
        "An automated biometric face-matching computer vision workflow leveraging Gemini Vision multimodal capabilities to verify users and maintain persistent real-time attendance logs.",
      highlights: [
        "Multimodal face-matching verification using Google Gemini Vision API",
        "High-throughput data pipelines using Pandas and NumPy to validate and log real-time records",
        "Interactive Streamlit web application with real-time analytics dashboard"
      ]
    },
    {
      id: "referral-bot",
      title: "Enterprise ReferralBot",
      subtitle: "Agentic Workflow Automation & Cloud Microservices",
      category: "GenAI & MERN",
      tags: ["Node.js", "Express.js", "Cloud Functions", "Gemini LLM", "REST APIs", "Microservices"],
      github: "https://github.com/Ninaad783/gayatri-waffles",
      live: "https://github.com/Ninaad783/gayatri-waffles",
      badge: "Agentic Automation",
      status: "GitHub Repo",
      metric: "+35% API Throughput",
      description:
        "An AI-powered conversational application using Node.js and Cloud Functions to automate complex enterprise referral workflows with dynamic intent detection and data routing.",
      highlights: [
        "Integrated Google Gemini LLMs for natural language understanding and dynamic routing without rigid form boxes",
        "Event-driven microservices and serverless Cloud Functions for webhook processing and business logic execution",
        "Rate-limited 3rd-party API integration with structured payload validation and automated error retries"
      ]
    },
    {
      id: "career-counselor",
      title: "AI Career Counselor",
      subtitle: "Semantic Resume Analysis & Upskilling Roadmap Engine",
      category: "GenAI & Full-Stack",
      tags: ["Python", "Streamlit", "Gemini LLM", "Prompt Engineering", "NLP"],
      github: "https://github.com/Ninaad783/ai-career-counselor",
      live: "https://github.com/Ninaad783/ai-career-counselor",
      badge: "LLM Analytics",
      status: "GitHub Repo",
      metric: "Instant Gap Analysis",
      description:
        "AI career guidance platform that parses candidate resumes, computes semantic skill match against industry standards, and generates tailored step-by-step learning roadmaps.",
      highlights: [
        "Semantic resume parsing and technical competency clustering with Gemini LLM",
        "Generates customized project suggestions and learning roadmaps based on identified skill gaps",
        "Clean conversational interface guiding candidates through role transitions"
      ]
    },
    {
      id: "vol-platform",
      title: "AI Volunteer Platform",
      subtitle: "Full-Stack Community Collaboration & Smart Matching",
      category: "MERN & Full-Stack",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
      github: "https://github.com/Ninaad783/ai-vol-platform",
      live: "https://github.com/Ninaad783/ai-vol-platform",
      badge: "MERN Application",
      status: "GitHub Repo",
      metric: "Full-Stack MERN",
      description:
        "A full-stack web application connecting volunteers with non-profit initiatives featuring intelligent skill matching, event scheduling, and real-time dashboard analytics.",
      highlights: [
        "Full-stack MERN application with React, Tailwind CSS, Express, and MongoDB",
        "Smart skill-matching algorithm pairing volunteer capabilities with organizer needs",
        "JWT-based role authentication and protected route management"
      ]
    }
  ],

  skills: {
    genAi: [
      { name: "LLM Orchestration (Google Gemini, OpenAI)", level: 95 },
      { name: "RAG Frameworks (Document grounding, chunking, citations)", level: 94 },
      { name: "Agentic AI (Multi-agent workflows, tool calling, intent routing)", level: 92 },
      { name: "LLM-as-a-Judge & Eval (Faithfulness, relevancy, hallucinations)", level: 90 },
      { name: "LangChain & Vector Databases (ChromaDB, pgvector)", level: 90 },
      { name: "Prompt Engineering & Guardrails (Injection & jailbreak defense)", level: 94 },
      { name: "Text-to-SQL & Conversational Analytics", level: 88 }
    ],
    mern: [
      { name: "React.js & Next.js (App Router, Hooks, SSR)", level: 92 },
      { name: "Node.js & Express.js (RESTful APIs, Microservices)", level: 90 },
      { name: "MongoDB & Mongoose (Schema design, indexing, optimization)", level: 90 },
      { name: "JavaScript (ES6+) & TypeScript Basics", level: 92 },
      { name: "Tailwind CSS & Responsive UI/UX Design", level: 95 },
      { name: "Redux Toolkit & Context API State Management", level: 88 },
      { name: "JWT Authentication & Role-Based Access Control (RBAC)", level: 92 }
    ],
    backendDevops: [
      { name: "Python (FastAPI, Flask, Pytest, Data pipelines)", level: 92 },
      { name: "CI/CD Pipelines (GitHub Actions, Multi-stage testing)", level: 90 },
      { name: "Docker Containerization & Docker Compose", level: 84 },
      { name: "SQL & Relational Databases (PostgreSQL, MySQL)", level: 88 },
      { name: "Cloud Functions & Serverless Microservices", level: 86 },
      { name: "Postman API Testing & Linux Environments", level: 88 }
    ]
  },

  experience: [
    {
      role: "MERN Stack / Software Engineering Intern",
      company: "Mira Advanced Engineering",
      location: "Mumbai, Maharashtra",
      period: "Jan 2024 – Feb 2024",
      points: [
        "Engineered responsive, modular frontend UI components using React.js and built secure backend RESTful APIs with Node.js and Express.js, reducing page load latency by 25%.",
        "Implemented data storage and query pipelines across MongoDB and MySQL, optimizing schema validations and ensuring consistent CRUD transaction handling.",
        "Collaborated in an Agile/Scrum environment utilizing Git version control; conducted automated code debugging and resolved 20+ functional defects, enhancing overall system reliability."
      ]
    }
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institution: "Marathwada Mitra Mandal's Institute of Technology (MMIT)",
    location: "Pune, Maharashtra, India",
    period: "Graduated 2025",
    cgpa: "7.65 / 10.0"
  },

  certifications: [
    {
      title: "Oracle Certified Foundations Associate: Agentic AI Foundations Associate",
      issuer: "Oracle",
      validity: "Valid Aug 2026 – Aug 2028",
      highlight: "Verified credential in Agentic AI architectures, tool orchestration, and agent governance."
    },
    {
      title: "1st Runner-Up – COMSYS Hackathon 2024",
      issuer: "COMSYS",
      validity: "October 2024",
      highlight: "Awarded 1st Runner-Up for MedEcho: AI Multimodal Medical Diagnostic & RAG platform."
    },
    {
      title: "Winner – Campus Bug Bounty Competition",
      issuer: "Campus Engineering Board",
      validity: "2024",
      highlight: "Secured 1st place among 50+ engineers for identifying system vulnerabilities, isolating backend logic bugs, and proposing fixes."
    },
    {
      title: "IBM Professional Certificates: RAG & Agentic AI",
      issuer: "IBM",
      validity: "In Progress",
      highlight: "Advanced specialization in Retrieval-Augmented Generation architectures and agent toolchains."
    },
    {
      title: "Data & AI: SQL & Database Engineering Certificate",
      issuer: "Verified Credential",
      validity: "2024",
      highlight: "Complex relational queries, indexing, and transactional integrity."
    }
  ],

  faqs: [
    {
      q: "Who is Ninaad Kumbhar?",
      a: "Ninaad Kumbhar is a Generative AI Engineer and MERN Stack Developer graduated in 2025 with a B.E. in Computer Engineering from MMIT Pune. He specializes in building autonomous multi-agent pipelines, RAG systems, LLM evaluation CI/CD quality gates, and scalable full-stack web applications."
    },
    {
      q: "Is Ninaad eligible for a Generative AI Engineer role?",
      a: "Yes! Ninaad has a 96% match for GenAI Engineer roles. He is certified as an Oracle Agentic AI Foundations Associate, built ComplyAI (5-agent workflow with RAG and text-to-SQL), built MedEcho (Gemini 2.5 Flash multimodal healthcare platform, won COMSYS Hackathon 1st Runner-Up), and engineered an LLM-as-a-judge CI/CD evaluation gate with 94.2% faithfulness."
    },
    {
      q: "Is Ninaad eligible for a MERN Stack Developer role?",
      a: "Yes! Ninaad has a 94% match for MERN Stack roles. He completed a software engineering internship at Mira Advanced Engineering (reducing page latency by 25%), has built 12+ production RESTful APIs, optimized MongoDB schemas with indexing for 30% query acceleration, and crafted modern responsive React/Next.js interfaces."
    },
    {
      q: "What makes Ninaad unique compared to other candidates?",
      a: "Ninaad possesses a rare dual-competency: he can build both the deep AI pipeline (Gemini, RAG, multi-agent loops, MLOps eval) AND the production-ready MERN/Full-Stack web application (React, Node, Express, MongoDB, Docker, CI/CD). Plus, he is a Bug Bounty 1st place winner with strong security instincts."
    },
    {
      q: "Can I test his fit against my specific Job Description (JD)?",
      a: "Yes! Use the AI Job Description Evaluator on this website or in the chat dock. Paste your requirements, and the AI agent will analyze keyword overlap, required vs. demonstrated experience, and output a hiring match score with an executive recommendation."
    }
  ]
};
