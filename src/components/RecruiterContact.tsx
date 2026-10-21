import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const RecruiterContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    // Simulate sending message + confetti
    setSentMessage(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE600', '#22C55E', '#000000', '#38BDF8']
    });

    // Also trigger mailto fallback
    const subject = encodeURIComponent(`Role Inquiry: ${formData.role || 'Software Engineer'} at ${formData.company || 'Our Team'}`);
    const body = encodeURIComponent(
      `Hi Abhishek,\n\nMy name is ${formData.name} from ${formData.company}.\nRole: ${formData.role}\n\n${formData.message}\n\nReach me at: ${formData.email}`
    );
    window.open(`mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-pattern-blueprint border-t-[3px] border-black dark:border-[#2D3342] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono font-bold text-xs text-black mb-3 px-3 py-1 bg-[#FF6B4A] border-2 border-black shadow-[3px_3px_0px_#000]">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white">RECRUITER FAST-TRACK & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
            Let's Build Scalable Systems
          </h2>
          <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base font-medium mt-3">
            Open to high-impact engineering opportunities in distributed backend architectures, scalable web applications, and autonomous AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column: Direct Recruiter Quick Reach (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#161922] border-[3px] border-black dark:border-[#2D3342] shadow-[6px_6px_0px_#000] space-y-6">
              
              <div className="flex items-center gap-3.5 pb-5 border-b-2 border-black dark:border-[#2D3342]">
                <div className="w-14 h-14 rounded-xl bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-mono font-black text-black text-xl">
                  AA
                </div>
                <div>
                  <h3 className="text-xl font-black text-black dark:text-white">
                    {PORTFOLIO_DATA.personal.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#38BDF8]">
                    Software Engineer @ Wells Fargo
                  </p>
                </div>
              </div>

              {/* Status info */}
              <div className="space-y-3 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span className="text-[#15803D] dark:text-[#34D399] bg-[#DCFCE7] dark:bg-[#064E3B] px-2 py-0.5 border border-black rounded">Response time: &lt; 24 hrs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span>Notice Period: Standard enterprise timeline</span>
                </div>
              </div>

              {/* Quick Copy Email Button */}
              <div className="pt-2">
                <div className="text-xs font-mono font-bold text-black dark:text-white uppercase mb-1.5">Direct Email:</div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black shadow-[2px_2px_0px_#000]">
                  <span className="text-xs font-mono font-bold text-black dark:text-white truncate mr-2">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#FFE600] hover:bg-[#FFE600]/80 text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
                  </button>
                </div>
              </div>

              {/* Quick Copy Phone */}
              <div>
                <div className="text-xs font-mono font-bold text-black dark:text-white uppercase mb-1.5">Direct Phone:</div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black shadow-[2px_2px_0px_#000]">
                  <span className="text-xs font-mono font-bold text-black dark:text-white">
                    {PORTFOLIO_DATA.personal.phone}
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-[#FFE600] hover:bg-[#FFE600]/80 text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t-2 border-black dark:border-[#2D3342] flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#38BDF8] text-black border-2 border-black font-mono font-bold text-xs shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#A78BFA] text-black border-2 border-black font-mono font-bold text-xs shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Recruiter Inquiry Form (3/5) */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#161922] border-[3px] border-black dark:border-[#2D3342] shadow-[6px_6px_0px_#000]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-black dark:border-[#2D3342]">
                <h3 className="text-xl font-black text-black dark:text-white flex items-center gap-2">
                  <span>Send Direct Inquiry</span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#22C55E] text-black border-2 border-black shadow-[1.5px_1.5px_0px_#000]">
                    PRIORITY
                  </span>
                </h3>
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">
                  RECRUITER DESK
                </span>
              </div>

              {sentMessage ? (
                <div className="p-8 rounded-2xl bg-[#DCFCE7] dark:bg-[#064E3B] border-2 border-black shadow-[4px_4px_0px_#000] text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22C55E] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center mx-auto text-black">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black text-black dark:text-white">Inquiry Initialized!</h4>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-medium max-w-md mx-auto">
                    Your email client will open to send the message directly to Abhishek. He looks forward to discussing your team's engineering goals!
                  </p>
                  <button
                    onClick={() => setSentMessage(false)}
                    className="text-xs font-mono font-bold text-black dark:text-white underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-black dark:text-slate-200 uppercase mb-1.5">
                        Your Name / Recruiter Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black font-medium text-xs text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-[#FFE600]/10 focus:shadow-[4px_4px_0px_#000] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-black dark:text-slate-200 uppercase mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Stripe, Google, Series-A AI"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black font-medium text-xs text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-[#FFE600]/10 focus:shadow-[4px_4px_0px_#000] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-black dark:text-slate-200 uppercase mb-1.5">
                        Your Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black font-medium text-xs text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-[#FFE600]/10 focus:shadow-[4px_4px_0px_#000] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-black dark:text-slate-200 uppercase mb-1.5">
                        Target Role / Domain
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Senior Backend / AI Systems SWE"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black font-medium text-xs text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-[#FFE600]/10 focus:shadow-[4px_4px_0px_#000] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-black dark:text-slate-200 uppercase mb-1.5">
                      Message / Role Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abhishek, we're building distributed systems / AI platforms and would love to chat regarding..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#1E2332] border-2 border-black font-medium text-xs text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-[#FFE600]/10 focus:shadow-[4px_4px_0px_#000] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FFE600] text-black font-black text-sm uppercase tracking-wider border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Dispatch Recruiter Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
