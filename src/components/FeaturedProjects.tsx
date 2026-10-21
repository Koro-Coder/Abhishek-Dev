import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Bot, 
  Globe, 
  CheckCircle2, 
  Eye, 
  Zap, 
  ArrowRight,
  Info,
  BookmarkCheck,
  MessageSquare,
  FileCheck
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface ArchitectureStage {
  id: string;
  stageNumber: string;
  title: string;
  role: string;
  tech: string;
  metric: string;
  details: string;
  color: string;
}

const PROJECT_PIPELINES: Record<string, ArchitectureStage[]> = {
  'prepfusion-hub': [
    {
      id: 'pf-1',
      stageNumber: 'STAGE 01',
      title: '1. Pre-Paint Theme Hydration',
      role: 'Zero-FOUC Head Injector',
      tech: 'Inline Vanilla JS in <head>',
      metric: '0ms Layout Shift',
      details: 'Reads localStorage and applies the data-theme attribute directly to the HTML document element prior to the first render paint, completely eliminating dark/light theme flash.',
      color: '#38BDF8'
    },
    {
      id: 'pf-2',
      stageNumber: 'STAGE 02',
      title: '2. Dynamic OpenGraph Engine',
      role: 'Social Preview Synthesizer',
      tech: 'Pre-rendered 2400x1260 Meta Headers',
      metric: '100% Social Crawler Match',
      details: 'Hardcodes exact 2400x1260 social-card asset pointers and OpenGraph summary_large_image tags so shared question links on WhatsApp, Telegram, and Slack display high-resolution visual previews.',
      color: '#FFE600'
    },
    {
      id: 'pf-3',
      stageNumber: 'STAGE 03',
      title: '3. Multi-Axis Catalog Filter',
      role: 'Client-Side Search Indexer',
      tech: 'React Memoized Taxonomies',
      metric: '30+ Subjects / Sub-10ms Filter',
      details: 'Structures all previous-year GATE questions and answers by subject, chapter, and exam year with instantaneous in-memory filtering that operates with zero network latency.',
      color: '#22C55E'
    },
    {
      id: 'pf-4',
      stageNumber: 'STAGE 04',
      title: '4. Mathematical Typesetting',
      role: 'LaTeX & Formula Renderer',
      tech: 'Optimized Math Typesetting',
      metric: 'Zero Layout Shift LaTeX',
      details: 'Typesets complex engineering formulas, differential equations, and truth tables crisply across desktop and mobile screens without breaking responsive layouts.',
      color: '#FF6B4A'
    },
    {
      id: 'pf-5',
      stageNumber: 'STAGE 05',
      title: '5. Cloudflare Edge Delivery',
      role: 'Global Edge Distribution',
      tech: 'Cloudflare Pages & Edge Caching',
      metric: 'Sub-second Global TTFB',
      details: 'Distributes static assets worldwide with zero sign-up wall, ensuring students in remote or low-bandwidth areas access verified exam solutions instantly.',
      color: '#A78BFA'
    }
  ],

  'fametown': [
    {
      id: 'ft-1',
      stageNumber: 'STAGE 01',
      title: '1. Brand DNA URL Extractor',
      role: 'Automated Catalog & Tone Parser',
      tech: 'Headless Scraper & LLM Categorizer',
      metric: 'Under 10s Extraction',
      details: 'Ingests any brand website URL, crawls hero positioning, product taxonomy, and value propositions to synthesize a semantic Brand DNA profile for creator matching.',
      color: '#22C55E'
    },
    {
      id: 'ft-2',
      stageNumber: 'STAGE 02',
      title: '2. Post-Level Telemetry Engine',
      role: 'Instagram Signal Calculator',
      tech: 'Engagement & Virality Metrics Engine',
      metric: 'Authentic Signal vs Follower Count',
      details: 'Computes real engagement rate, Reel virality coefficient, audience demographic breakdown, language, and city concentrations directly from actual Instagram posts.',
      color: '#FFE600'
    },
    {
      id: 'ft-3',
      stageNumber: 'STAGE 03',
      title: '3. 20L+ Micro-Influencer Index',
      role: 'Distributed Creator Database',
      tech: 'High-Concurrency Filter Index',
      metric: '2,000,000+ Creators / 448 Niches',
      details: 'Maintains an indexed catalog of 20L+ real Indian micro-influencers (5k to 100k followers) spanning 448 micro-niches and 28 states with sub-second query latency.',
      color: '#38BDF8'
    },
    {
      id: 'ft-4',
      stageNumber: 'STAGE 04',
      title: '4. Brand-Creator Alignment Matrix',
      role: 'Multi-Factor Ranking Algorithm',
      tech: 'Cosine Similarity + Demographic Weighting',
      metric: 'Ranked Swipeable Shortlist',
      details: 'Cross-correlates the brand DNA with creator metrics to output a relevance score, ordering candidates for maximum audience overlap and high ROI.',
      color: '#FF6B4A'
    },
    {
      id: 'ft-5',
      stageNumber: 'STAGE 05',
      title: '5. Swipe Deck & Contact Enrichment',
      role: 'Interactive UI & Lead Extraction',
      tech: 'Desktop Swipe Interface & Contact API',
      metric: 'Direct Email & Phone Numbers',
      details: 'Delivers a desktop Tinder-style swipe deck for brands with daily credit quotas, surfacing public emails and phone numbers for direct one-click creator outreach.',
      color: '#A78BFA'
    }
  ],

  'lalatron': [
    {
      id: 'lala-1',
      stageNumber: 'STAGE 01',
      title: '1. In-Page Event Trigger',
      role: 'Manifest V3 Content Script',
      tech: 'Chrome Extension Background Worker',
      metric: 'Zero-Tab Switch',
      details: 'Injects lightweight DOM listener and floating overlay into any active webpage, communicating asynchronously with the background service worker without freezing the tab.',
      color: '#A78BFA'
    },
    {
      id: 'lala-2',
      stageNumber: 'STAGE 02',
      title: '2. Multimodal Extraction',
      role: 'DOM Scraper & Viewport Capture',
      tech: 'HTML AST Parser & Canvas Screenshot',
      metric: 'Full Page + Visual Context',
      details: 'Condenses the rendered DOM tree into clean semantic markdown while simultaneously capturing an annotated high-resolution screenshot to feed vision-capable LLMs.',
      color: '#FFE600'
    },
    {
      id: 'lala-3',
      stageNumber: 'STAGE 03',
      title: '3. Semantic Knowledge Matcher',
      role: 'Local Vector Document Store',
      tech: 'Client-Side Cosine Similarity',
      metric: 'Instant Autofill Mapping',
      details: 'Compares target webpage form fields (input names, labels, ARIA tags) with the user’s stored knowledge profile (resume, company specs) using vector embeddings to infer target data.',
      color: '#22C55E'
    },
    {
      id: 'lala-4',
      stageNumber: 'STAGE 04',
      title: '4. BYO Model Inference',
      role: 'Hardware-Accelerated LLM Gate',
      tech: 'GROQ API / OpenAI / Gemini',
      metric: 'Sub-second Response',
      details: 'Streams prompts with stripped DOM context and multimodal snapshots to user-configured LLM models using secure client-side API keys.',
      color: '#38BDF8'
    },
    {
      id: 'lala-5',
      stageNumber: 'STAGE 05',
      title: '5. Action & Bookmark Anchor',
      role: 'DOM Mutation & Scroll Indexer',
      tech: 'Synthetic DOM Events & Anchor Store',
      metric: '1-Click Precision Navigation',
      details: 'Injects autofilled values into complex web forms with event dispatching (change, input, blur) and saves deep-page scroll coordinates with rendered card previews.',
      color: '#FF6B4A'
    }
  ],

  'wells-fargo-chatbot': [
    {
      id: 'wf-1',
      stageNumber: 'STAGE 01',
      title: '1. Ingestion Layer',
      role: 'Enterprise REST Endpoints',
      tech: 'Spring Boot Microservices',
      metric: '10,000+ Daily Agents',
      details: 'Exposes resilient RESTful API endpoints handling high-concurrency conversational queries from Wells Fargo customer support desks across branch networks.',
      color: '#FFE600'
    },
    {
      id: 'wf-2',
      stageNumber: 'STAGE 02',
      title: '2. Normalization & Lemmatization',
      role: 'Morphological Token Canonicalizer',
      tech: 'Custom Python / Java NLP Preprocessor',
      metric: '-30% Query Latency',
      details: 'Extracts grammatical lemmas and standardizes query variations to resolve to uniform semantic cache keys prior to expensive database lookups.',
      color: '#22C55E'
    },
    {
      id: 'wf-3',
      stageNumber: 'STAGE 03',
      title: '3. Hybrid Search Core',
      role: 'Dual Dense & Lexical Retriever',
      tech: 'Vector Similarity + Keyword Filtering',
      metric: '70,000+ Procedures',
      details: 'Combines dense vector embeddings with sparse keyword constraints across 70,000+ banking compliance and operational procedures.',
      color: '#38BDF8'
    },
    {
      id: 'wf-4',
      stageNumber: 'STAGE 04',
      title: '4. RBAC Authorization Gate',
      role: 'Context-Aware Security Filter',
      tech: 'Role-Based Access Control',
      metric: '100% Policy Compliance',
      details: 'Filters retrieved procedures strictly against the calling agent’s organizational tier and regional clearance level.',
      color: '#FF6B4A'
    },
    {
      id: 'wf-5',
      stageNumber: 'STAGE 05',
      title: '5. Feedback & Telemetry Loop',
      role: 'Continuous Evaluation Pipeline',
      tech: 'JUnit, PyTest & Logging Harness',
      metric: '+15% Search Relevance',
      details: 'Continuously logs user queries, agent acceptance ratings, and response latency to validate search relevance.',
      color: '#A78BFA'
    }
  ],

  'ai-hackathon-remediation': [
    {
      id: 'hack-1',
      stageNumber: 'STAGE 01',
      title: '1. Real-Time Log Streaming',
      role: 'Distributed Ingestion Node',
      tech: 'Python Async Streams',
      metric: 'Sub-second Ingest',
      details: 'Streams logs in real time across distributed banking microservices, monitoring for anomaly spikes.',
      color: '#FFE600'
    },
    {
      id: 'hack-2',
      stageNumber: 'STAGE 02',
      title: '2. Anomaly Clustering',
      role: 'Semantic Pattern Extractor',
      tech: 'Vector Embeddings & Cluster Aggregator',
      metric: 'Noise Reduced by 90%',
      details: 'Converts unstructured logs into semantic embeddings, clustering repetitive cascading failures into distinct error signatures.',
      color: '#22C55E'
    },
    {
      id: 'hack-3',
      stageNumber: 'STAGE 03',
      title: '3. Root Cause Isolation',
      role: 'LLM Reasoning Core',
      tech: 'Diagnostic Chain-of-Thought',
      metric: 'Instant Root Cause',
      details: 'Traces dependency graphs and correlates errors across services to isolate the single originating root cause.',
      color: '#38BDF8'
    },
    {
      id: 'hack-4',
      stageNumber: 'STAGE 04',
      title: '4. Policy Guardrail Engine',
      role: 'Automated Safety Verifier',
      tech: 'Deterministic Action Gate',
      metric: '100% Verified Actions',
      details: 'Validates proposed remediation actions against strict financial platform policies before any automated command is executed.',
      color: '#FF6B4A'
    },
    {
      id: 'hack-5',
      stageNumber: 'STAGE 05',
      title: '5. Autonomous Self-Healing',
      role: 'Corrective Workflow Dispatcher',
      tech: 'Automated Rollback & Pod Restart',
      metric: 'MTTR Reduced Significantly',
      details: 'Executes pre-approved remediation workflows without manual on-call overhead.',
      color: '#A78BFA'
    }
  ],

  'ntron-coding-assistant': [
    {
      id: 'nt-1',
      stageNumber: 'STAGE 01',
      title: '1. Codebase AST Indexer',
      role: 'AST Scope & File Chunking',
      tech: 'Tree-sitter / AST Chunker',
      metric: 'Preserved Scope Context',
      details: 'Parses code files into semantic AST blocks preserving function definitions, class scopes, and imports.',
      color: '#FFE600'
    },
    {
      id: 'nt-2',
      stageNumber: 'STAGE 02',
      title: '2. Vector Embeddings in MongoDB',
      role: 'Semantic Repository Vector Store',
      tech: 'MongoDB Atlas Vector Search',
      metric: 'Fast Nearest-Neighbor Match',
      details: 'Stores dense code embeddings in MongoDB Atlas with indexing for lightning-fast similarity lookups.',
      color: '#22C55E'
    },
    {
      id: 'nt-3',
      stageNumber: 'STAGE 03',
      title: '3. Hardware-Accelerated LLM',
      role: 'Low-Latency Inference Engine',
      tech: 'GROQ API LPU Acceleration',
      metric: '500+ Tokens/Sec',
      details: 'Leverages GROQ hardware architecture to provide instantaneous conversational explanations.',
      color: '#38BDF8'
    },
    {
      id: 'nt-4',
      stageNumber: 'STAGE 04',
      title: '4. Automated Test Generator',
      role: 'Unit Test Synthesis Engine',
      tech: 'Prompt Ensembles & AST Verifier',
      metric: 'Ready-to-Run Tests',
      details: 'Generates rigorous unit tests matching the existing test frameworks found inside the repository.',
      color: '#FF6B4A'
    },
    {
      id: 'nt-5',
      stageNumber: 'STAGE 05',
      title: '5. LangSmith Telemetry Loop',
      role: 'Observability & Evaluation',
      tech: 'LangSmith Tracing',
      metric: 'Full Trace Coverage',
      details: 'Tracks query traces, token costs, latency spikes, and retrieval accuracy.',
      color: '#A78BFA'
    }
  ]
};

export const FeaturedProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedPipelineNode, setSelectedPipelineNode] = useState<string>('');
  const [activeLalaTab, setActiveLalaTab] = useState<'chat' | 'autofill' | 'bookmarks'>('chat');
  const otherProjects = PORTFOLIO_DATA.projects.filter(
    p => p.id !== 'prepfusion-hub' && p.id !== 'fametown' && p.id !== 'lalatron'
  );

  const handleOpenArchitecture = (project: Project) => {
    setActiveProject(project);
    const pipeline = PROJECT_PIPELINES[project.id];
    if (pipeline && pipeline.length > 0) {
      setSelectedPipelineNode(pipeline[0].id);
    } else {
      setSelectedPipelineNode('');
    }
  };

  const activePipeline = activeProject ? PROJECT_PIPELINES[activeProject.id] : undefined;
  const activeNodeData = activePipeline?.find(n => n.id === selectedPipelineNode) || activePipeline?.[0];

  return (
    <section id="projects" className="py-20 relative bg-pattern-grid border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-black bg-[#FFE600] text-black px-3 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] mb-3">
            <span>FEATURED WORK & SCALE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Featured Systems & Deployments
          </h2>
          <p className="text-slate-700 font-medium text-sm sm:text-base max-w-2xl mt-2">
            From enterprise microservices powering 10,000+ daily agents at Wells Fargo, to live production platforms and agentic browser tools.
          </p>
        </div>

        {/* Highlight Banner: 3 Primary Flagships in Neubrutalism Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: PrepFusion Study Hub */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8] border-2 border-black flex items-center justify-center text-black shadow-[3px_3px_0px_#000]">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase bg-[#38BDF8] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                  Live Platform
                </span>
              </div>

              <h3 className="text-xl font-black text-black group-hover:text-blue-600 transition-colors mb-1">
                PrepFusion Study Hub
              </h3>
              <p className="text-xs font-mono font-bold text-blue-600 mb-4">
                https://hub.prepfusion.in/
              </p>

              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                Full-featured exam preparation platform engineered for GATE candidates. Instant access to <strong>every GATE question and solution</strong> categorized across subjects and years with <strong>zero sign-up friction</strong>.
              </p>

              {/* Technical highlights */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instant multi-axis filtering across 30+ subjects and years</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Engineered zero-paint theme detection to eliminate FOUC</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dynamic 2400x1260 OpenGraph engine for WhatsApp/Telegram</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cloudflare Edge distributed for sub-second page loads</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {['React', 'Vite', 'Cloudflare Edge', 'Tailwind CSS', 'OpenGraph Meta', 'LaTeX'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FAF7EE] text-black border border-black shadow-[1.5px_1.5px_0px_#000]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-black">
              <a
                href="https://hub.prepfusion.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-black font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <span>Launch Hub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => handleOpenArchitecture(PORTFOLIO_DATA.projects.find(p => p.id === 'prepfusion-hub')!)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-black text-xs font-mono font-bold border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Architecture</span>
              </button>
            </div>
          </div>

          {/* Card 2: Fametown — Creator Discovery Platform */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#22C55E] border-2 border-black flex items-center justify-center text-black shadow-[3px_3px_0px_#000]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase bg-[#22C55E] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                  Live Commercial SaaS
                </span>
              </div>

              <h3 className="text-xl font-black text-black group-hover:text-emerald-700 transition-colors mb-1">
                Fametown
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-700 mb-4">
                https://fametown.in/
              </p>

              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                Commercial discovery platform ranking <strong>20L+ real Indian micro-influencers</strong> against brand DNA by analyzing engagement, audience demographics, language, and city computed from <strong>actual Instagram posts</strong>.
              </p>

              {/* Technical highlights */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>AI Brand DNA generation directly from pasted brand website URLs</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Post-level engagement & Reel virality computed from real data</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>20L+ Indian micro-influencers indexed across 448 niches</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Desktop swipe discovery deck with email & phone enrichment</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {['React', 'Node.js', 'Python', 'AI Matching', 'Instagram Telemetry', 'SaaS Billing'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FAF7EE] text-black border border-black shadow-[1.5px_1.5px_0px_#000]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-black">
              <a
                href="https://fametown.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-black font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <span>Launch Fametown</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => handleOpenArchitecture(PORTFOLIO_DATA.projects.find(p => p.id === 'fametown')!)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-black text-xs font-mono font-bold border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Architecture</span>
              </button>
            </div>
          </div>

          {/* Card 3: LaLaTron AI Browser Copilot */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#A78BFA] border-2 border-black flex items-center justify-center text-black shadow-[3px_3px_0px_#000]">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase bg-[#A78BFA] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                  Flagship AI Tool
                </span>
              </div>

              <h3 className="text-xl font-black text-black group-hover:text-purple-700 transition-colors mb-1">
                LaLaTron — AI Browser Copilot
              </h3>
              <p className="text-xs font-mono font-bold text-purple-700 mb-4">
                Chrome Extension (Manifest V3)
              </p>

              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-4">
                Agentic browser extension that turns the web browser into an interactive AI workspace with <strong>live page conversation</strong>, <strong>intelligent form autofill</strong>, and <strong>in-page smart bookmarks</strong>.
              </p>

              {/* Interactive Mini-Simulator of LaLaTron's 3 Pillars */}
              <div className="p-3.5 rounded-xl bg-[#FAF7EE] border-2 border-black shadow-[2px_2px_0px_#000] mb-5">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-black text-[11px] font-mono text-black">
                  <span className="font-extrabold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    AGENT ENGINE
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveLalaTab('chat')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border border-black ${activeLalaTab === 'chat' ? 'bg-[#FFE600] shadow-[1px_1px_0px_#000]' : 'bg-white'}`}
                    >
                      1. Chat
                    </button>
                    <button
                      onClick={() => setActiveLalaTab('autofill')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border border-black ${activeLalaTab === 'autofill' ? 'bg-[#FFE600] shadow-[1px_1px_0px_#000]' : 'bg-white'}`}
                    >
                      2. Autofill
                    </button>
                    <button
                      onClick={() => setActiveLalaTab('bookmarks')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border border-black ${activeLalaTab === 'bookmarks' ? 'bg-[#FFE600] shadow-[1px_1px_0px_#000]' : 'bg-white'}`}
                    >
                      3. Bookmarks
                    </button>
                  </div>
                </div>

                {activeLalaTab === 'chat' && (
                  <div className="text-xs space-y-1 font-mono text-slate-800">
                    <div className="flex items-center gap-1.5 font-bold">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                      <span>Input: "Summarize technical requirements"</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-black text-[11px]">
                      ⚡ <strong>DOM + Vision:</strong> Analyzing rendered DOM tree & visible viewport to deliver page-grounded insights.
                    </div>
                  </div>
                )}

                {activeLalaTab === 'autofill' && (
                  <div className="text-xs space-y-1 font-mono text-slate-800">
                    <div className="flex items-center gap-1.5 font-bold">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Knowledge Store: Resume.pdf</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-black text-[11px]">
                      🎯 <strong>Field Match:</strong> Analyzes arbitrary form inputs and autofills structured fields with semantic precision.
                    </div>
                  </div>
                )}

                {activeLalaTab === 'bookmarks' && (
                  <div className="text-xs space-y-1 font-mono text-slate-800">
                    <div className="flex items-center gap-1.5 font-bold">
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                      <span>Jump Points in 10,000-word docs</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-black text-[11px]">
                      📌 <strong>Smart Anchor:</strong> Records exact scroll coordinates & snapshots for 1-click return.
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {['Manifest V3', 'TypeScript', 'Vision APIs', 'DOM Scraping', 'Vector Matching'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FAF7EE] text-black border border-black shadow-[1.5px_1.5px_0px_#000]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-black">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7436044630401609728/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#A78BFA] hover:bg-[#8B5CF6] text-black font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <span>LinkedIn Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => handleOpenArchitecture(PORTFOLIO_DATA.projects.find(p => p.id === 'lalatron')!)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-black text-xs font-mono font-bold border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Architecture</span>
              </button>
            </div>
          </div>

        </div>

        {/* Additional Enterprise & Algorithmic Systems */}
        <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
          <span>// ADDITIONAL ENTERPRISE & ALGORITHMIC SYSTEMS</span>
          <div className="h-[2px] flex-1 bg-black"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-[#FFE600] text-black border border-black shadow-[1px_1px_0px_#000]">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-600">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-lg font-black text-black group-hover:text-blue-600 transition-colors mb-1">
                  {project.title}
                </h4>
                <p className="text-xs font-mono font-bold text-slate-600 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metric snippet */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-[#FAF7EE] border border-black mb-4 text-[11px] font-mono font-bold text-black flex items-center gap-2 shadow-[1.5px_1.5px_0px_#000]">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="line-clamp-1">{project.metrics[0]}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FAF7EE] text-black border border-black">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="flex items-center justify-between pt-3 border-t-2 border-black">
                <button
                  onClick={() => handleOpenArchitecture(project)}
                  className="text-xs font-mono font-bold text-black hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-[#FFE600] text-black border border-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000] transition-all"
                      title="Live Site"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.linkedinUrl && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-[#A78BFA] text-black border border-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000] transition-all"
                      title="LinkedIn Post"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Inspect Architecture Modal - Neubrutalist Styled */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white border-[3.5px] border-black p-6 sm:p-8 shadow-[10px_10px_0px_#000] relative text-black">
            {/* Modal close */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#FFE600] text-black border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer font-mono font-bold z-10"
            >
              ✕
            </button>

            {/* Badge & Title */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#FFE600] text-black border border-black shadow-[1.5px_1.5px_0px_#000]">
                {activeProject.badge}
              </span>
              <span>•</span>
              <span className="text-slate-600">{activeProject.category}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-black mb-1">
              {activeProject.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono font-bold text-slate-600 mb-6">
              {activeProject.subtitle}
            </p>

            {/* Interactive Architecture Pipeline */}
            {activePipeline && activePipeline.length > 0 && (
              <div className="mb-8 p-5 rounded-2xl bg-[#FAF7EE] border-2 border-black shadow-[4px_4px_0px_#000]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-black text-black">
                    <span className="w-2.5 h-2.5 bg-black rounded-sm"></span>
                    <span className="tracking-wider">SYSTEM DESIGN & INTERACTIVE PIPELINE</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-600 hidden sm:inline">
                    Click stage to inspect
                  </span>
                </div>

                {/* 5 Pipeline Stages */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-4">
                  {activePipeline.map((node, idx) => {
                    const isSelected = selectedPipelineNode === node.id;
                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedPipelineNode(node.id)}
                        style={{ backgroundColor: isSelected ? node.color : '#FFFFFF' }}
                        className={`p-3 rounded-xl border-2 border-black transition-all cursor-pointer flex flex-col justify-between relative ${
                          isSelected
                            ? 'shadow-[4px_4px_0px_#000] -translate-x-0.5 -translate-y-0.5'
                            : 'shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#000]'
                        }`}
                      >
                        {/* Desktop connector arrow */}
                        {idx < activePipeline.length - 1 && (
                          <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-black">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        )}

                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono font-black text-black tracking-wider">
                            {node.stageNumber}
                          </span>
                          <h5 className="text-xs font-black text-black leading-snug line-clamp-2">
                            {node.title.replace(/^\d+\.\s*/, '')}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Node Details Box */}
                {activeNodeData && (
                  <div className="p-4 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs leading-relaxed">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-black">
                      <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-black" />
                        <span className="font-black text-black text-sm">
                          {activeNodeData.title} — {activeNodeData.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded font-extrabold bg-[#22C55E] text-black border border-black shadow-[1px_1px_0px_#000]">
                          {activeNodeData.metric}
                        </span>
                        <span className="px-2 py-0.5 rounded font-bold bg-[#FAF7EE] text-black border border-black">
                          {activeNodeData.tech}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-800 font-medium text-xs">
                      {activeNodeData.details}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Architecture Details: Problem & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#FAF7EE] border-2 border-black shadow-[3px_3px_0px_#000]">
                <h4 className="text-xs font-mono font-black text-black uppercase tracking-wider mb-1.5">
                  PROBLEM CONTEXT
                </h4>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {activeProject.architectureDetails.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7EE] border-2 border-black shadow-[3px_3px_0px_#000]">
                <h4 className="text-xs font-mono font-black text-black uppercase tracking-wider mb-1.5">
                  ENGINEERING SOLUTION
                </h4>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {activeProject.architectureDetails.solution}
                </p>
              </div>
            </div>

            {/* Tech Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-black text-black uppercase tracking-wider mb-3">
                Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProject.architectureDetails.techHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-medium text-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-black text-black uppercase tracking-wider mb-3">
                Measurable Impact & Metrics
              </h4>
              <div className="space-y-1.5">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono font-bold text-black">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] border border-black"></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {activeProject.tags.map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#FAF7EE] text-black border border-black shadow-[1px_1px_0px_#000]">
                  {t}
                </span>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t-2 border-black">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE600] text-black font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {activeProject.linkedinUrl && (
                <a
                  href={activeProject.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#A78BFA] text-black font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all"
                >
                  <span>LinkedIn Announcement</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-bold border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
