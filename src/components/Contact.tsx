import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate interactive transmission
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from ' + (formData.name || 'Visitor')
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            07 / Communication &amp; Dialogue
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Inquiries, Address, Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal tracking-tight">
                Initiate a Technical Dialogue
              </h2>
              <p className="text-sm text-[#70736A] mt-2 font-sans leading-relaxed">
                I welcome academic inquiries, technical collaborations, engineering internship opportunities, and algorithmic research discussions.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email Card */}
              <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#70736A] flex items-center gap-1.5 font-semibold">
                    <Mail className="w-3.5 h-3.5 text-[#35483B]" />
                    <span>Electronic Correspondence</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] text-[#81533F] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#35483B]" />
                        <span className="text-[#35483B]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-medium text-sm text-[#292C27] hover:text-[#35483B] transition-colors block break-all font-sans"
                >
                  {PERSONAL_INFO.email}
                </a>
                <div className="text-[10px] text-[#70736A]">
                  Primary institutional contact channel
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#70736A] flex items-center gap-1.5 font-semibold">
                    <Linkedin className="w-3.5 h-3.5 text-[#35483B]" />
                    <span>Professional Network</span>
                  </span>
                  <span className="text-[10px] text-[#35483B] font-semibold">Verified</span>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm text-[#292C27] hover:text-[#35483B] transition-colors flex items-center justify-between gap-1 group font-sans"
                >
                  <span>linkedin.com/in/rania-marium-t</span>
                  <ArrowUpRight className="w-4 h-4 text-[#70736A] group-hover:text-[#35483B] transition-colors" />
                </a>
                <div className="text-[10px] text-[#70736A]">
                  Curated academic milestones &amp; professional updates
                </div>
              </div>

              {/* Campus Location */}
              <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-lg p-4 space-y-1">
                <div className="text-[10px] uppercase tracking-wider text-[#70736A] flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#81533F]" />
                  <span>Geographic Affiliation</span>
                </div>
                <div className="font-sans font-medium text-xs text-[#292C27] pt-1">
                  School of Computer Science and Engineering (CSE)
                </div>
                <div className="font-sans text-[11px] text-[#70736A]">
                  REVA University, Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru, Karnataka 560064, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Correspondence Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-lg p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCDDD2]">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#292C27]">
                  Send a Direct Message
                </h3>
                <span className="font-mono text-[10px] text-[#70736A] uppercase tracking-wider">
                  Dispatched via Client Mailto / Direct
                </span>
              </div>

              {submitted ? (
                <div className="bg-[#F7F5EF] border border-[#A8B5A0] rounded p-6 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#A8B5A0]/20 text-[#35483B] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#292C27]">
                    Correspondence Prepared
                  </h4>
                  <p className="text-xs text-[#70736A] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#292C27]">{formData.name}</strong>. Your message has been prepared for transmission to{' '}
                    <strong className="text-[#292C27]">{PERSONAL_INFO.email}</strong>.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                    <a
                      href={mailtoLink}
                      className="px-4 py-2 rounded bg-[#35483B] hover:bg-[#27362C] text-[#F7F5EF] font-mono text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Launch In Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-3 py-2 rounded border border-[#DCDDD2] bg-[#F7F5EF] text-[#70736A] hover:text-[#292C27] font-mono text-xs transition-colors cursor-pointer"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#70736A] mb-1 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Jane Doe / Recruiter"
                        className="w-full bg-[#F7F5EF] border border-[#DCDDD2] rounded px-3 py-2 text-xs text-[#292C27] placeholder-[#A6A89E] focus:outline-none focus:border-[#C58F78] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#70736A] mb-1 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-[#F7F5EF] border border-[#DCDDD2] rounded px-3 py-2 text-xs text-[#292C27] placeholder-[#A6A89E] focus:outline-none focus:border-[#C58F78] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#70736A] mb-1 font-semibold">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Inquiry / Technical Discussion / Project Collaboration"
                      className="w-full bg-[#F7F5EF] border border-[#DCDDD2] rounded px-3 py-2 text-xs text-[#292C27] placeholder-[#A6A89E] focus:outline-none focus:border-[#C58F78] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#70736A] mb-1 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your message, project specifications, or inquiry..."
                      className="w-full bg-[#F7F5EF] border border-[#DCDDD2] rounded px-3 py-2 text-xs text-[#292C27] placeholder-[#A6A89E] focus:outline-none focus:border-[#C58F78] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <span className="text-[10px] text-[#70736A] font-mono">
                      * Required fields · Direct to raniamariumt@gmail.com
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#35483B] hover:bg-[#27362C] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Prepare &amp; Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
