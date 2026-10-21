import React, { useState, useEffect, useRef } from 'react';
import { X, CornerDownLeft, Sparkles, Cpu, RotateCcw, Monitor } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

type ScreenTheme = 'amber' | 'green' | 'paper';

export const InteractiveTerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState<ScreenTheme>('amber');
  const [diskActive, setDiskActive] = useState(false);

  const initialOutput = (
    <div className="space-y-2">
      <div className="font-mono text-[11px] leading-tight pb-2 border-b border-current opacity-80">
        <p>ROM BIOS v3.14 (C) 1986-2026 AA-SYSTEMS CORP.</p>
        <p>CPU: INTEL 8086-COMPATIBLE @ 4.77 MHz | 640 KB BASE MEMORY OK</p>
        <p>MOUNT: DRIVE A:\ (PORTFOLIO_OS.SYS) READY</p>
      </div>

      <div className="space-y-1">
        <p className="font-bold">
          [SYS_OK] Candidate Kernel Initialized.
        </p>
        <p className="opacity-90">
          Type <span className="font-black underline">'help'</span> or <span className="font-black underline">'disasm'</span> for instructions. Try <span className="font-bold underline">'whoami'</span>, <span className="font-bold underline">'prepfusion'</span>, <span className="font-bold underline">'fametown'</span>, <span className="font-bold underline">'lalatron'</span>, or <span className="font-bold underline">'sudo hire'</span>.
        </p>
      </div>
    </div>
  );

  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'BOOT 0x8086',
      output: initialOutput
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const triggerDiskLed = () => {
    setDiskActive(true);
    setTimeout(() => setDiskActive(false), 400);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    setInput('');
    triggerDiskLed();

    const lowerCmd = cmd.toLowerCase();
    let output: React.ReactNode = null;

    switch (lowerCmd) {
      case 'help':
        output = (
          <div className="space-y-2 text-xs">
            <p className="font-bold uppercase tracking-wider">=== ASSEMBLY / SYSTEM COMMAND DICTIONARY ===</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1">
              <div><strong className="underline font-bold">whoami</strong> / <span className="opacity-70">CALL CANDIDATE</span> - Bio & background</div>
              <div><strong className="underline font-bold">disasm</strong> / <span className="opacity-70">DUMP ASM</span> - Disassemble profile instructions</div>
              <div><strong className="underline font-bold">registers</strong> - Inspect CPU register values</div>
              <div><strong className="underline font-bold">projects</strong> - Production systems & deployments</div>
              <div><strong className="underline font-bold">prepfusion</strong> - Inspect PrepFusion Study Hub</div>
              <div><strong className="underline font-bold">fametown</strong> - Inspect Fametown Platform</div>
              <div><strong className="underline font-bold">lalatron</strong> - Inspect LaLaTron AI Extension</div>
              <div><strong className="underline font-bold">skills</strong> - Technical frameworks & languages</div>
              <div><strong className="underline font-bold">resume</strong> - Wells Fargo & education log</div>
              <div><strong className="underline font-bold">contact</strong> - Email, phone, socials</div>
              <div><strong className="underline font-bold">sudo hire</strong> - Recruiter fast-track ✨</div>
              <div><strong className="underline font-bold">theme</strong> - Toggle screen (amber/green/paper)</div>
              <div><strong className="underline font-bold">clear</strong> / <strong className="underline font-bold">cls</strong> - Clear screen</div>
              <div><strong className="underline font-bold">exit</strong> / <strong className="underline font-bold">hlt</strong> - Halt & close machine</div>
            </div>
          </div>
        );
        break;

      case 'disasm':
      case 'dump':
      case 'asm':
        output = (
          <div className="space-y-1.5 text-xs font-mono p-3 border border-current rounded bg-black/10">
            <p className="font-bold">; =========================================================</p>
            <p className="font-bold">; DISASSEMBLY LISTING: ABHISHEK_AGGARWAL.COM (x86_16)</p>
            <p className="font-bold">; =========================================================</p>
            <p><span className="opacity-60">0x1000:</span> <span className="font-bold">MOV</span> EAX, 0x0903      <span className="opacity-70">; DTU CGPA: 9.03 (Mathematics & Computing)</span></p>
            <p><span className="opacity-60">0x1005:</span> <span className="font-bold">MOV</span> EBX, 0x1700      <span className="opacity-70">; Codeforces Expert Rating (1700+)</span></p>
            <p><span className="opacity-60">0x100A:</span> <span className="font-bold">LEA</span> RSI, [WF_AGENT]  <span className="opacity-70">; Wells Fargo SWE: 10,000+ Agents Microservices</span></p>
            <p><span className="opacity-60">0x100F:</span> <span className="font-bold">CALL</span> MOUNT_HUBS      <span className="opacity-70">; PrepFusion (hub.prepfusion.in) + Fametown</span></p>
            <p><span className="opacity-60">0x1014:</span> <span className="font-bold">LOAD</span> EXT, [LALATRON]  <span className="opacity-70">; Manifest V3 Chrome AI Extension</span></p>
            <p><span className="opacity-60">0x1019:</span> <span className="font-bold">TEST</span> SYSTEM, PROD    <span className="opacity-70">; Scale: 70k+ Procedures, 30% Latency Drop</span></p>
            <p><span className="opacity-60">0x101E:</span> <span className="font-bold">JMP</span> HIRE_ENGINEER    <span className="opacity-70">; Ready to scale mission-critical systems</span></p>
            <p className="font-bold pt-1">; STATUS: 0 ERRORS, 0 WARNINGS, ARCHITECTURE OPTIMIZED</p>
          </div>
        );
        break;

      case 'registers':
      case 'reg':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="font-bold">CPU REGISTER DUMP:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
              <div className="p-1.5 border border-current rounded">EAX: 0x0903 (CGPA)</div>
              <div className="p-1.5 border border-current rounded">EBX: 0x1700 (CF_RATING)</div>
              <div className="p-1.5 border border-current rounded">ECX: 0x2024 (GRAD_YR)</div>
              <div className="p-1.5 border border-current rounded">EDX: 0x00WF (WELLS_FARGO)</div>
              <div className="p-1.5 border border-current rounded">ESI: 0xCAFE (BACKEND)</div>
              <div className="p-1.5 border border-current rounded">EDI: 0xBEEF (AGENTIC_AI)</div>
              <div className="p-1.5 border border-current rounded">ESP: 0x7FFF (STACK_TOP)</div>
              <div className="p-1.5 border border-current rounded">FLAGS: [CF:0 ZF:1 IF:1]</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'candidate':
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="font-black text-sm">{PORTFOLIO_DATA.personal.name} — {PORTFOLIO_DATA.personal.title}</p>
            <p>Current: {PORTFOLIO_DATA.personal.company} (Bangalore, India)</p>
            <p className="leading-relaxed opacity-90">{PORTFOLIO_DATA.personal.bio}</p>
            <p>Alma Mater: {PORTFOLIO_DATA.personal.education.college} (CGPA: {PORTFOLIO_DATA.personal.education.cgpa})</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2.5 text-xs">
            <p className="font-bold">FLAGSHIP PRODUCTION SYSTEMS:</p>
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <div key={i} className="border-l-2 border-current pl-2.5 space-y-0.5">
                <p className="font-bold">{p.title} [{p.badge}]</p>
                <p className="opacity-90">{p.description}</p>
                {p.liveUrl && <p className="font-bold underline">URL: {p.liveUrl}</p>}
                {p.linkedinUrl && <p className="font-bold underline">URL: {p.linkedinUrl}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'curl prepfusion':
      case 'prepfusion':
        output = (
          <div className="space-y-1 text-xs border border-current p-2.5 rounded bg-black/5">
            <p className="font-bold">HTTP/1.1 200 OK — https://hub.prepfusion.in/</p>
            <p className="font-bold">PrepFusion Study Hub</p>
            <p className="opacity-90">"Every GATE previous-year question and solution, browsable by subject, chapter and year — free, zero friction."</p>
            <p>⚡ Status: Live Production Site | Edge Caching via Cloudflare</p>
            <a href="https://hub.prepfusion.in/" target="_blank" rel="noreferrer" className="underline font-bold block pt-1">
              &gt;&gt; CLICK TO OPEN: hub.prepfusion.in
            </a>
          </div>
        );
        break;

      case 'curl fametown':
      case 'fametown':
        output = (
          <div className="space-y-1 text-xs border border-current p-2.5 rounded bg-black/5">
            <p className="font-bold">HTTP/1.1 200 OK — https://fametown.in/</p>
            <p className="font-bold">Fametown Creator Discovery Platform</p>
            <p className="opacity-90">"Rank 20L+ real Indian micro-influencers against your brand — by engagement, audience, language & city."</p>
            <p>⚡ Status: Live Commercial SaaS | 448 Niches & 28 Indian States</p>
            <a href="https://fametown.in/" target="_blank" rel="noreferrer" className="underline font-bold block pt-1">
              &gt;&gt; CLICK TO OPEN: fametown.in
            </a>
          </div>
        );
        break;

      case 'test lalatron':
      case 'lalatron':
        output = (
          <div className="space-y-1 text-xs border border-current p-2.5 rounded bg-black/5">
            <p className="font-bold">STATUS: MOUNTED — LaLaTron Manifest V3 Copilot</p>
            <p className="opacity-90">• Webpage Chat: Real-time DOM context & screenshot vision</p>
            <p className="opacity-90">• Intelligent Form Filling: Semantic mapping of stored CV to web inputs</p>
            <p className="opacity-90">• In-Page Smart Bookmarks: Scroll coordinates & visual previews</p>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7436044630401609728/" target="_blank" rel="noreferrer" className="underline font-bold block pt-1">
              &gt;&gt; CLICK TO OPEN: LinkedIn Announcement & Video Demo
            </a>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs">
            <p className="font-bold">TECHNICAL TOOLCHAIN:</p>
            <p><strong>Backend:</strong> Java, Spring Boot, Python, Microservices, REST APIs, C/C++, SQL</p>
            <p><strong>AI & LLMs:</strong> GROQ, OpenAI, Gemini, Vector DBs (MongoDB Atlas), LangSmith</p>
            <p><strong>Cloud:</strong> AWS, Azure, Docker, Kubernetes, Jenkins, Git</p>
            <p><strong>Frontend:</strong> React.js, TypeScript, Tailwind CSS, Chrome Extensions (MV3)</p>
          </div>
        );
        break;

      case 'resume':
        output = (
          <div className="space-y-1 text-xs border-l-2 border-current pl-3">
            <p className="font-bold">{PORTFOLIO_DATA.personal.name} | Wells Fargo SWE</p>
            <p className="opacity-80">{PORTFOLIO_DATA.personal.email} | {PORTFOLIO_DATA.personal.phone}</p>
            <p className="font-bold pt-1">Wells Fargo (Aug 2024 - Present):</p>
            <p>• Chatbot microservices for 10,000+ support agents</p>
            <p>• Hybrid search over 70,000+ bank procedures</p>
            <p>• Lemmatization caching layer (-30% query latency)</p>
            <p>• 1st Place - AI Innovation Showcase Hackathon (Oct 2025)</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs">
            <p className="font-bold">DIRECT COMMUNICATIONS:</p>
            <p>Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="underline font-bold">{PORTFOLIO_DATA.personal.email}</a></p>
            <p>Phone: {PORTFOLIO_DATA.personal.phone}</p>
            <p>LinkedIn: <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="underline">{PORTFOLIO_DATA.personal.linkedin}</a></p>
            <p>GitHub: <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="underline">{PORTFOLIO_DATA.personal.github}</a></p>
          </div>
        );
        break;

      case 'theme':
        setTheme(prev => (prev === 'amber' ? 'green' : prev === 'green' ? 'paper' : 'amber'));
        output = (
          <p className="text-xs">
            Monitor phosphor mode cycled. Available modes: AMBER CRT, GREEN PHOSPHOR, RETRO PAPER TERMINAL.
          </p>
        );
        break;

      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#FFE600', '#22C55E', '#FF6B4A', '#000000']
        });
        output = (
          <div className="p-3 border-2 border-current rounded text-xs space-y-1 font-mono">
            <p className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              OFFER INITIALIZED! RECRUITER FAST-TRACK ACTIVATED.
            </p>
            <p>Ready to deploy high-scale backend microservices and agentic AI systems for your team.</p>
            <p>Connect directly at <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="underline font-bold">{PORTFOLIO_DATA.personal.email}</a> or {PORTFOLIO_DATA.personal.phone}.</p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
      case 'hlt':
        onClose();
        return;

      default:
        output = (
          <p className="text-xs">
            Syntax error: '{cmd}'. Type <span className="underline font-bold">'help'</span> or <span className="underline font-bold">'disasm'</span>.
          </p>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  // Color schemes for screen
  const screenStyles = {
    amber: {
      bg: 'bg-[#181308]',
      text: 'text-[#FFB000]',
      caret: 'caret-[#FFB000]',
      accent: 'text-[#FFD166]',
      border: 'border-[#FFB000]/40',
      scanline: 'rgba(255, 176, 0, 0.05)'
    },
    green: {
      bg: 'bg-[#0B150E]',
      text: 'text-[#34D399]',
      caret: 'caret-[#34D399]',
      accent: 'text-[#6EE7B7]',
      border: 'border-[#34D399]/40',
      scanline: 'rgba(52, 211, 153, 0.05)'
    },
    paper: {
      bg: 'bg-[#FAF6EA]',
      text: 'text-[#1E293B]',
      caret: 'caret-[#1E293B]',
      accent: 'text-[#0F172A]',
      border: 'border-black/30',
      scanline: 'rgba(0, 0, 0, 0.03)'
    }
  }[theme];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Retro Microcomputer Outer Chassis */}
      <div className="w-full max-w-4xl h-[580px] rounded-2xl bg-[#E8E2D2] border-[4px] border-black shadow-[12px_12px_0px_#000] flex flex-col overflow-hidden font-mono text-xs select-none relative">
        
        {/* Computer Top Chassis Strip: Model Badge, Cooling Vents & Status LEDs */}
        <div className="px-4 py-2.5 bg-[#DFD9C7] border-b-[3px] border-black flex items-center justify-between">
          
          {/* Hardware Badge & Model */}
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-0.5 rounded bg-[#FFE600] border-2 border-black font-black text-black text-[11px] shadow-[1.5px_1.5px_0px_#000] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-black" />
              <span>AA-8086 MICROCOMPUTER</span>
            </div>
            <span className="text-[10px] font-bold text-slate-700 hidden sm:inline">
              16-BIT ARCHITECTURE // REV 2.4
            </span>
          </div>

          {/* Cooling Vents & Status Indicators */}
          <div className="flex items-center gap-4">
            {/* Ventilation Louvers */}
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-3.5 bg-slate-500 rounded-sm"></div>
              ))}
            </div>

            {/* Hardware LEDs */}
            <div className="flex items-center gap-2.5 text-[10px] font-bold">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] border border-black shadow-[0_0_6px_#22C55E] animate-pulse"></span>
                <span className="text-slate-800">PWR</span>
              </div>
              <div className="flex items-center gap-1">
                <span className={`w-2.5 h-2.5 rounded-full border border-black transition-colors ${
                  diskActive ? 'bg-[#FF6B4A] shadow-[0_0_6px_#FF6B4A]' : 'bg-slate-400'
                }`}></span>
                <span className="text-slate-800">DRIVE A:</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1 rounded bg-white hover:bg-[#FF6B4A] text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
              title="Power Off Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Assembly Register Monitor Readout Strip */}
        <div className="px-4 py-1.5 bg-[#D2CAB8] border-b-2 border-black flex items-center justify-between text-[10px] overflow-x-auto text-black font-mono font-bold">
          <div className="flex items-center gap-3 shrink-0">
            <span className="bg-white px-1.5 py-0.2 rounded border border-black shadow-[1px_1px_0px_#000]">
              EAX: 0x0903
            </span>
            <span className="bg-white px-1.5 py-0.2 rounded border border-black shadow-[1px_1px_0px_#000]">
              EBX: 0x1700
            </span>
            <span className="bg-white px-1.5 py-0.2 rounded border border-black shadow-[1px_1px_0px_#000]">
              ECX: 0x2024
            </span>
            <span className="bg-white px-1.5 py-0.2 rounded border border-black shadow-[1px_1px_0px_#000]">
              EDX: 0x00WF
            </span>
            <span className="hidden md:inline bg-white px-1.5 py-0.2 rounded border border-black shadow-[1px_1px_0px_#000]">
              FLAGS: [CF:0 ZF:1 IF:1]
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Phosphor Mode Selector */}
            <button
              onClick={() => setTheme(prev => (prev === 'amber' ? 'green' : prev === 'green' ? 'paper' : 'amber'))}
              className="flex items-center gap-1 px-2 py-0.5 bg-white hover:bg-[#FFE600] rounded border border-black text-[10px] font-bold shadow-[1px_1px_0px_#000] cursor-pointer"
              title="Cycle Monitor Mode"
            >
              <Monitor className="w-3 h-3" />
              <span className="uppercase font-mono">{theme} MODE</span>
            </button>

            {/* Quick Reset */}
            <button
              onClick={() => setHistory([{ command: 'RESET 0x8086', output: initialOutput }])}
              className="flex items-center gap-1 px-2 py-0.5 bg-white hover:bg-slate-200 rounded border border-black text-[10px] font-bold shadow-[1px_1px_0px_#000] cursor-pointer"
              title="Reset Memory"
            >
              <RotateCcw className="w-3 h-3" />
              <span>RESET</span>
            </button>
          </div>
        </div>

        {/* Embedded CRT Monitor Screen Area */}
        <div className="flex-1 p-3.5 bg-[#C5BBA7] flex flex-col overflow-hidden">
          
          {/* Inner Curved CRT Frame with Scanlines */}
          <div className={`flex-1 rounded-xl border-[3px] border-black shadow-inner flex flex-col overflow-hidden relative ${screenStyles.bg} ${screenStyles.text}`}>
            
            {/* CRT Screen Scanline Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none z-10 opacity-30" 
              style={{
                backgroundImage: `linear-gradient(${screenStyles.scanline} 50%, transparent 50%)`,
                backgroundSize: '100% 4px'
              }}
            />

            {/* Terminal Output Log Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs z-20">
              {history.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 font-bold opacity-90">
                    <span className="opacity-70">ASM:0x8086 &gt;</span>
                    <span className="underline">{item.command}</span>
                  </div>
                  <div className="pl-3 pt-0.5">{item.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Line */}
            <form 
              onSubmit={handleCommand} 
              className={`p-3 border-t-2 ${screenStyles.border} flex items-center gap-2.5 z-20 bg-black/10`}
            >
              <span className="font-bold shrink-0">ASM:0x8086 &gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help', 'disasm', 'whoami', 'prepfusion', 'sudo hire'..."
                className={`flex-1 bg-transparent focus:outline-none font-mono text-xs placeholder:opacity-40 ${screenStyles.caret}`}
                autoFocus
              />
              <button 
                type="submit" 
                className="p-1 rounded border border-current hover:bg-current/10 cursor-pointer active:translate-x-0.5"
                title="Execute Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

        {/* Chassis Bottom Lip: Floppy Slot & Hardware Specs */}
        <div className="px-4 py-2 bg-[#DFD9C7] border-t-2 border-black flex items-center justify-between text-[10px] text-slate-800 font-bold">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-8 h-1 bg-slate-700 rounded-sm inline-block"></span>
              <span>DRIVE A: 1.44MB</span>
            </div>
            <span className="hidden sm:inline opacity-70">|</span>
            <span className="hidden sm:inline">INTERRUPT VECTOR: IRQ-00 (NORMAL)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>PRESS ESC OR 'HLT' TO DISMOUNT</span>
          </div>
        </div>

      </div>
    </div>
  );
};
