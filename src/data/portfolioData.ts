export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Production Platform' | 'AI & Browser' | 'Enterprise AI' | 'Developer Tool' | 'Full Stack';
  badge: string;
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  architectureDetails: {
    problem: string;
    solution: string;
    techHighlights: string[];
  };
  featured: boolean;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Abhishek Aggarwal',
    title: 'Software Engineer',
    specialization: 'Backend Architectures, Microservices & Agentic AI Systems',
    company: 'Wells Fargo',
    location: 'Bangalore, India',
    email: 'AbhishekAggarwal2801@gmail.com',
    phone: '+91-8595657293',
    linkedin: 'https://linkedin.com/in/abhishek-aggarwal-31415pi',
    github: 'https://github.com/Koro-Coder',
    education: {
      college: 'Delhi Technological University (DTU)',
      degree: 'B.Tech – Mathematics and Computing Engineering',
      period: 'Aug 2020 – May 2024',
      cgpa: '9.03 / 10.0',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Artificial Intelligence',
        'Distributed Software Development'
      ]
    },
    bio: 'Software Engineer at Wells Fargo with 2+ years designing resilient backend systems, RESTful APIs, and AI-driven search and conversational platforms at scale. Skilled in Java, Python, and Spring Boot within microservices architectures, with proven impact in latency reduction and search relevance optimization.'
  },

  keyMetrics: [
    {
      label: 'Enterprise Agents Served',
      value: '10,000+',
      change: 'Active Daily',
      description: 'Support agents empowered via customer chatbot microservices at Wells Fargo',
      icon: 'Users'
    },
    {
      label: 'Procedures Searchable',
      value: '70,000+',
      change: 'Sub-second',
      description: 'Bank procedures indexed in role-aware hybrid search engine',
      icon: 'Search'
    },
    {
      label: 'Latency Reduction',
      value: '30%',
      change: '-30% RT',
      description: 'Achieved via custom lemmatization-normalized caching layer',
      icon: 'Zap'
    },
    {
      label: 'Codeforces Max Rating',
      value: '1700+',
      change: 'Expert Rank',
      description: 'Ranked Expert globally in algorithmic problem solving and data structures',
      icon: 'Award'
    },
    {
      label: 'Wells Fargo AI Hackathon',
      value: '1st Place',
      change: 'Oct 2025',
      description: 'Engineered automated log-based troubleshooting & intelligent self-healing remediation',
      icon: 'Trophy'
    },
    {
      label: 'DTU B.Tech CGPA',
      value: '9.03',
      change: 'Top Tier',
      description: 'Mathematics & Computing Engineering from Delhi Technological University',
      icon: 'GraduationCap'
    }
  ] as Metric[],

  projects: [
    {
      id: 'prepfusion-hub',
      title: 'PrepFusion Study Hub',
      subtitle: 'Complete GATE Exam Question & Solution Platform',
      category: 'Production Platform',
      badge: 'LIVE PRODUCTION SITE',
      featured: true,
      description: 'Full-scale academic study engine hosting every GATE previous-year question and solution, browsable instantly by subject, chapter, and year with zero signup friction.',
      longDescription: 'Engineered for high-volume exam preparation where students need instantaneous lookups without paywalls or login walls. Features instantaneous client-side filtering, pre-rendered metadata for dynamic OpenGraph link previews across messaging platforms (WhatsApp, Slack, Telegram), responsive dark/light theme persistence prior to first paint, and edge caching on Cloudflare.',
      metrics: [
        'Free, 0-friction access for thousands of GATE aspirants',
        'Multi-axis search across 30+ subjects, 100+ chapters & years',
        'Zero-paint theme flash mitigation architecture',
        'Production grade Cloudflare Edge deployment'
      ],
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Cloudflare Pages', 'SEO & OpenGraph', 'Production UI'],
      liveUrl: 'https://hub.prepfusion.in/',
      architectureDetails: {
        problem: 'Engineering students struggle with fragmented, ad-cluttered PDFs and paywalled portals to access verified GATE questions and solutions.',
        solution: 'Built a clean, frictionless single-page study hub with structured subject/chapter/year taxonomies, instant query filtering, responsive LaTeX/math rendering, and robust social graph metadata for viral student community sharing.',
        techHighlights: [
          'Pre-paint theme detection to eliminate FOUC (Flash of Unstyled Content)',
          'Optimized asset bundling with sub-second page loads',
          'Rich OpenGraph 2400x1260 dynamic crawler-optimized preview headers',
          'Clean modular taxonomy structure for seamless curriculum updates'
        ]
      }
    },
    {
      id: 'fametown',
      title: 'Fametown — Creator Discovery Platform',
      subtitle: 'AI-Powered Influencer Discovery Engine for Indian Brands',
      category: 'Production Platform',
      badge: 'LIVE COMMERCIAL SAAS',
      featured: true,
      description: 'Commercial discovery engine ranking 20L+ real Indian micro-influencers against brand DNA by analyzing engagement, audience demographics, language, and city computed from actual Instagram post data.',
      longDescription: 'Engineered a high-scale creator-discovery and ranking engine for Indian D2C brands. Brands simply paste their website URL to generate an AI-extracted Brand DNA and receive a ranked, swipeable shortlist of micro-influencers (5k to 100k followers across 448 niches and 28 Indian states). Calculates genuine virality and engagement signals from real post telemetry rather than vanity follower counts, with automated public contact enrichment and daily credit quotas.',
      metrics: [
        '20L+ (2 Million+) Indian micro-influencers indexed across 448 niches',
        'AI Brand DNA generation directly from pasted brand website URLs',
        'Real engagement & virality computed from Instagram post-level telemetry',
        'Production SaaS architecture with daily credit reset mechanisms'
      ],
      tags: ['React', 'Node.js', 'Python', 'AI Matching Engine', 'Instagram Telemetry', 'SaaS Billing', 'Tailwind CSS', 'Production Platform'],
      liveUrl: 'https://fametown.in/',
      architectureDetails: {
        problem: 'Indian D2C brands spend weeks manually vetting Instagram influencers, often misled by inflated follower counts, mismatched demographics, and untraceable contact info.',
        solution: 'Built an automated platform that crawls brand websites to infer Brand DNA, queries 20L+ creator profiles on post-level engagement and geographic relevance, and provides direct contact info.',
        techHighlights: [
          'Brand DNA extractor summarizing product catalogs, brand tone, and target audience',
          'Instagram post-level telemetry pipeline calculating authentic engagement rates',
          'Swipeable discovery deck and natural language query parser for creator search',
          'Automated email and phone enrichment from public creator data'
        ]
      }
    },
    {
      id: 'lalatron',
      title: 'LaLaTron — AI Browser Copilot',
      subtitle: 'Agentic AI Extension for In-Browser Web Interaction',
      category: 'AI & Browser',
      badge: 'FLAGSHIP AI PROJECT',
      featured: true,
      description: 'Agentic Chrome extension that transforms the browser into an intelligent workspace with real-time webpage conversation, context-aware form autofill, and deep-page visual smart bookmarks.',
      longDescription: 'Built to bridge the gap between static browsing and interactive AI workflows. Features three core agentic pillars: (1) Webpage Chat combining DOM scraping and screenshot vision to answer queries on any live tab; (2) Intelligent Form Filling using stored knowledge documents (resumes, company specs) with vector matching to autofill arbitrary web forms; (3) In-Page Smart Bookmarks that capture exact scroll offsets, titles, and preview cards for complex documentation navigation.',
      metrics: [
        '3 Core Agentic Pillars: Chat, Smart Autofill & Visual Bookmarks',
        'Multimodal Vision & DOM Scraping engine',
        'Bring-Your-Own-Key model abstraction (OpenAI, Gemini, GROQ)',
        'Featured and praised on LinkedIn'
      ],
      tags: ['Chrome Extension Manifest V3', 'TypeScript', 'LLM Agent', 'Vision API', 'Vector Matching', 'DOM Scraping', 'AI Engineering'],
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7436044630401609728/',
      architectureDetails: {
        problem: 'Users repeatedly context-switch between browser tabs, re-type repetitive personal/job data into disparate web forms, and lose context inside massive documentation sites.',
        solution: 'Engineered an in-browser companion with background service workers, content script DOM extractors, multimodal screenshot comprehension, and semantic vector matching to automate everyday browsing friction.',
        techHighlights: [
          'Manifest V3 compliant background worker architecture',
          'Context-window optimization for long webpage text distillation',
          'Heuristic DOM field schema analyzer for robust form field inference',
          'Secure client-side credential and knowledge document storage'
        ]
      }
    },
    {
      id: 'wells-fargo-chatbot',
      title: 'Enterprise Support Chatbot & Hybrid Search',
      subtitle: 'Core Banking Customer Support Platform at Scale',
      category: 'Enterprise AI',
      badge: 'WELLS FARGO PRODUCTION',
      featured: true,
      description: 'Microservices-based chatbot and role-aware hybrid search engine powering 10,000+ service agents over 70,000+ bank procedures.',
      longDescription: 'Architected and deployed enterprise microservices exposed via RESTful APIs. Developed a specialized hybrid search algorithm that cross-references 70,000+ operational banking procedures, returning context-aware answers filtered strictly by agent authorization levels. Implemented an innovative lemmatization-based normalization caching layer that dropped latency by 30%.',
      metrics: [
        '10,000+ daily active enterprise customer service agents',
        '70,000+ bank operational procedures indexed',
        '30% query latency reduction via lemmatized normalization cache',
        '15% search relevance improvement validated via automated telemetry'
      ],
      tags: ['Java', 'Spring Boot', 'Python', 'Microservices', 'REST APIs', 'Lemmatization Caching', 'Hybrid Search', 'JUnit', 'PyTest'],
      architectureDetails: {
        problem: 'Bank support agents spent critical minutes navigating disparate procedure repositories during live calls, causing slow resolution times and inconsistent policy compliance.',
        solution: 'Designed a microservices chatbot and hybrid search system with role-based procedure retrieval, backed by a lemmatization cache that groups grammatically variant queries into unified cache keys.',
        techHighlights: [
          'High-throughput Spring Boot microservices with resilience patterns',
          'Custom caching layer normalizing agent query stems and lemmatized tokens',
          'Role-based access control (RBAC) ensuring agents only see authorized procedures',
          'Automated metrics harness tracking query precision, recall, and agent feedback'
        ]
      }
    },
    {
      id: 'ai-hackathon-remediation',
      title: 'Autonomous Log Troubleshooting & Remediation Agent',
      subtitle: 'Wells Fargo AI Innovation Showcase Winner',
      category: 'Enterprise AI',
      badge: '1ST PLACE HACKATHON WINNER',
      featured: true,
      description: 'Intelligent platform environment for automated log-based troubleshooting, root-cause isolation, and self-healing corrective actions in production environments.',
      longDescription: 'Created for the Wells Fargo AI Innovation Showcase Hackathon. The platform ingests real-time distributed log streams, applies semantic embeddings and LLM reasoning to pinpoint anomalies, correlates root causes across microservices, and triggers automated remediation workflows to recover degraded systems without manual intervention.',
      metrics: [
        '1st Place out of enterprise-wide engineering teams (Oct 2025)',
        'Automated root cause identification within seconds of log anomaly',
        'Safe triggered corrective actions reducing mean time to recovery (MTTR)'
      ],
      tags: ['Python', 'LLMs', 'Vector Embeddings', 'Distributed Logging', 'Autonomous Agents', 'Remediation Workflows'],
      architectureDetails: {
        problem: 'Diagnosing complex failure cascades across microservices requires tedious manual log parsing, increasing downtime during system outages.',
        solution: 'Built an AI agent that continuously analyzes log patterns, clusters error signatures, generates diagnostic summaries, and suggests or executes pre-approved remediation scripts.',
        techHighlights: [
          'Real-time streaming log ingestion and anomaly clustering',
          'Contextual LLM prompt chains for precise root cause diagnosis',
          'Guardrailed execution engine for automated operational rollbacks/restarts'
        ]
      }
    },
    {
      id: 'ntron-coding-assistant',
      title: 'NTron — Code Intelligence Assistant',
      subtitle: 'AI Developer Assistant with Semantic Code Search',
      category: 'Developer Tool',
      badge: 'AI DEV TOOL',
      featured: false,
      description: 'Conversational developer assistant enabling intelligent questioning and code comprehension over proprietary codebases using GROQ LLMs and MongoDB Vector Search.',
      longDescription: 'Implemented semantic repository indexing using vector embeddings in MongoDB. Built an interactive Chainlit UI allowing developers to query modules, explore top code matches, generate unit tests, and chat with codebase context. Integrated LangSmith for latency tracking and evaluation.',
      metrics: [
        'Sub-second inference via GROQ API hardware acceleration',
        'Semantic vector embeddings stored and indexed in MongoDB Atlas',
        'End-to-end tracing and evaluation via LangSmith'
      ],
      tags: ['Python', 'GROQ API', 'MongoDB Vector DB', 'Chainlit', 'LangSmith', 'Embeddings', 'Code Search'],
      architectureDetails: {
        problem: 'Navigating large unfamiliar codebases is slow and cognitively demanding for software engineers.',
        solution: 'Vectorized codebase ASTs and docs to allow natural language Q&A and instant automated unit test synthesis.',
        techHighlights: [
          'Code AST chunking preserving scope and dependency context',
          'GROQ LLM integration for ultra-fast conversational responses',
          'Chainlit frontend with code syntax highlighting and match inspectability'
        ]
      }
    },
    {
      id: 'smb-website-builder',
      title: 'No-Code E-Commerce Builder for Indian SMBs',
      subtitle: 'Instant Storefront Creator for Social Commerce Sellers',
      category: 'Full Stack',
      badge: 'FULL STACK APP',
      featured: false,
      description: 'Full-stack no-code platform enabling Indian small businesses and Instagram/WhatsApp merchants to launch mobile-friendly digital storefronts in minutes.',
      longDescription: 'Designed with customizable responsive templates, dynamic product catalog management, order capture, and an integrated analytics dashboard monitoring customer behavior and sales trends.',
      metrics: [
        'Under 3-minute storefront launch workflow',
        'Integrated analytics tracking views, clicks, and conversions',
        'Tailored for Indian social sellers on WhatsApp & Instagram'
      ],
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs', 'Analytics Dashboard', 'E-commerce'],
      architectureDetails: {
        problem: 'Small Indian sellers selling via Instagram and WhatsApp lack accessible tools to organize catalogs, inventory, and order tracking.',
        solution: 'Created an intuitive MERN-stack platform generating clean mobile commerce pages with WhatsApp direct order integrations.',
        techHighlights: [
          'Dynamic JSON schema driven template renderer',
          'Real-time product catalog & inventory synchronization',
          'Aggregated analytics dashboard for sales funnel visualization'
        ]
      }
    }
  ] as Project[],

  experience: [
    {
      company: 'Wells Fargo',
      role: 'Software Engineer',
      period: 'August 2024 – Present',
      location: 'Bangalore, India',
      type: 'Full-Time',
      summary: 'Developing core customer support backend microservices, high-throughput search architectures, and internal AI systems supporting 10,000+ daily agents.',
      highlights: [
        'Developed and deployed a customer-support chatbot on a microservices architecture with RESTful APIs, used daily by 10,000+ service agents to resolve customer queries efficiently.',
        'Engineered a hybrid search algorithm exposed via REST endpoints that processes queries across 70,000+ bank procedures and returns context-aware results based on agent accessibility roles.',
        'Introduced a caching layer with lemmatization-based normalization, reducing query response time by 30% and significantly boosting user satisfaction metrics.',
        'Built a comprehensive reporting and analytics ecosystem that tracks user queries, retrieved results, and feedback, enhancing the accuracy of future responses.',
        'Optimized logging infrastructure and wrote rigorous JUnit and PyTest test suites to validate performance metrics, driving a 15% improvement in search relevance over six months.'
      ],
      technologies: ['Java', 'Spring Boot', 'Python', 'Microservices', 'REST APIs', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'JUnit', 'PyTest']
    }
  ] as ExperienceItem[],

  skills: {
    'Backend & Architecture': [
      { name: 'Java', level: 95 },
      { name: 'Spring Boot', level: 92 },
      { name: 'Python', level: 95 },
      { name: 'Microservices', level: 90 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'C / C++', level: 85 },
      { name: 'System Design', level: 88 }
    ],
    'AI & Agentic Systems': [
      { name: 'LLM Integration (GROQ, OpenAI, Gemini)', level: 92 },
      { name: 'Vector DBs (MongoDB Atlas, Embeddings)', level: 88 },
      { name: 'LangSmith & Agent Observability', level: 86 },
      { name: 'Multimodal Vision & DOM Scraping', level: 90 },
      { name: 'Prompt Engineering & Autonomous Workflows', level: 90 }
    ],
    'Cloud, DevOps & Infra': [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 82 },
      { name: 'AWS & Azure', level: 85 },
      { name: 'CI/CD (Jenkins, GitHub Actions)', level: 84 },
      { name: 'Postman & API Design', level: 92 }
    ],
    'Frontend & Web': [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Node.js & Express', level: 86 },
      { name: 'Chrome Extensions (Manifest V3)', level: 92 }
    ],
    'Databases & Caching': [
      { name: 'MongoDB', level: 90 },
      { name: 'SQL / MySQL', level: 88 },
      { name: 'Lemmatization & Semantic Caching', level: 94 }
    ],
    'Testing & Reliability': [
      { name: 'JUnit', level: 92 },
      { name: 'PyTest', level: 92 },
      { name: 'Performance Profiling & Telemetry', level: 88 }
    ]
  },

  achievements: [
    {
      title: '1st Place Winner — Wells Fargo AI Innovation Showcase',
      date: 'October 2025',
      organization: 'Wells Fargo Enterprise Hackathon',
      description: 'Designed an AI-powered Integrated Platform Environment for automated log-based troubleshooting and autonomous remediation workflows that recovered services without manual overhead.',
      badge: 'Champion'
    },
    {
      title: 'Codeforces Expert (Max Rating: 1700+)',
      date: 'February 2025',
      organization: 'Codeforces Global Competitive Programming',
      description: 'Ranked in the top echelon globally by consistently solving advanced algorithmic, dynamic programming, and data structure challenges under strict time constraints.',
      badge: 'Expert Rank'
    },
    {
      title: 'B.Tech in Mathematics & Computing — CGPA: 9.03',
      date: 'August 2020 – May 2024',
      organization: 'Delhi Technological University (DTU)',
      description: 'Graduated with high distinction in core algorithmic theory, discrete mathematics, artificial intelligence, and operating systems.',
      badge: 'Distinction'
    }
  ]
};
