import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Copy, Check, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-10 sm:pt-14 md:pt-18 pb-16 md:pb-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Folio Breadcrumb / Academic Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DCDDD2]/80 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A8B5A0]"></span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#70736A]">
              Academic Folio · Vol. I (2025–2029)
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#70736A]">
            <span>Bengaluru, India</span>
            <span>·</span>
            <span className="text-[#35483B] font-medium">REVA University</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Grid with generous spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column (Columns 1 to 7): Headline, Thesis & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEEAE0] border border-[#DCDDD2] text-[#35483B] font-mono text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58F78]"></span>
                <span>{PERSONAL_INFO.department}</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-[#292C27] leading-[1.2] lg:leading-[1.16]">
              Engineering intelligent systems with <em className="italic font-normal text-[#35483B]">restraint</em>, mathematical clarity, &amp; craft.
            </h1>

            <p className="text-base sm:text-lg text-[#70736A] leading-[1.75] font-sans max-w-2xl pt-1">
              I am <span className="text-[#292C27] font-semibold">{PERSONAL_INFO.name}</span>, a Computer Science &amp; Engineering scholar specializing in{' '}
              <span className="text-[#292C27] font-semibold">Artificial Intelligence &amp; Machine Learning</span> at REVA University, Bengaluru. 
              Bridging foundational discrete algorithms, predictive environmental models, and responsive web systems.
            </p>

            {/* Action Buttons with comfortable spacing */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#35483B] hover:bg-[#27362C] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-150 shadow-sm"
              >
                <span>View Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded border border-[#DCDDD2] bg-[#EEEAE0]/70 hover:bg-[#EEEAE0] hover:border-[#A8B5A0] text-[#292C27] font-mono text-xs uppercase tracking-wider font-medium transition-all duration-150"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#70736A]" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-transparent hover:border-[#DCDDD2] text-[#70736A] hover:text-[#292C27] hover:bg-[#EEEAE0]/50 font-mono text-xs transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#35483B]" />
                    <span className="text-[#35483B] font-medium">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column (Columns 8 to 12): Folio Dossier & Curated Metadata Card */}
          <div className="lg:col-span-5 space-y-4 pt-2 lg:pt-0">
            
            {/* Structural Metadata Dossier */}
            <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-lg p-5 sm:p-6 space-y-4 shadow-[0_4px_16px_-2px_rgba(41,44,39,0.04)]">
              <div className="flex items-center justify-between border-b border-[#DCDDD2] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#35483B] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#81533F]" />
                  <span>Cadre &amp; Academic Metrics</span>
                </span>
                <span className="font-mono text-[10px] text-[#70736A]">
                  ID: RM-2025-29
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#70736A]">
                    Institution &amp; Department
                  </div>
                  <div className="font-medium text-[#292C27] mt-0.5">
                    REVA University, Bengaluru
                  </div>
                  <div className="text-[#70736A] text-[11px]">
                    School of Computer Science and Engineering (CSE)
                  </div>
                </div>

                <div className="border-t border-[#DCDDD2]/70 pt-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#70736A]">
                    Degree &amp; Specialization
                  </div>
                  <div className="font-medium text-[#292C27] mt-0.5">
                    B.Tech CSE (AI &amp; ML) · 2025 – 2029
                  </div>
                </div>

                <div className="border-t border-[#DCDDD2]/70 pt-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#70736A]">
                    Foundational Core
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-[#F7F5EF] border border-[#DCDDD2] rounded text-[11px] font-mono text-[#292C27]">
                      Python
                    </span>
                    <span className="px-2 py-0.5 bg-[#F7F5EF] border border-[#DCDDD2] rounded text-[11px] font-mono text-[#292C27]">
                      C
                    </span>
                    <span className="px-2 py-0.5 bg-[#F7F5EF] border border-[#DCDDD2] rounded text-[11px] font-mono text-[#292C27]">
                      DSA
                    </span>
                    <span className="px-2 py-0.5 bg-[#F7F5EF] border border-[#DCDDD2] rounded text-[11px] font-mono text-[#292C27]">
                      DBMS (MySQL)
                    </span>
                    <span className="px-2 py-0.5 bg-[#F7F5EF] border border-[#DCDDD2] rounded text-[11px] font-mono text-[#292C27]">
                      React
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#DCDDD2]/70 pt-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#70736A]">
                    Active Pursuit
                  </div>
                  <div className="text-[11px] text-[#292C27] mt-0.5 flex items-start gap-1.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35483B] mt-1.5 shrink-0"></span>
                    <span>DSA mastery on LeetCode, environmental hazard modeling (GeoVision), and full-stack software integration.</span>
                  </div>
                </div>
              </div>

              {/* Fast links */}
              <div className="pt-3 border-t border-[#DCDDD2] flex items-center justify-between text-[11px] font-mono">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-[#35483B]"
                >
                  <span>LinkedIn Dossier</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C58F78]" />
                </a>
                <span className="text-[#70736A]">
                  Verified Portfolio Studio
                </span>
              </div>
            </div>

            {/* Micro quote / Philosophy */}
            <div className="border-l-2 border-[#A8B5A0] pl-3.5 py-1 text-[11px] text-[#70736A] italic font-serif">
              &ldquo;True computation is not sheer complexity, but the reduction of noise into deliberate, mathematically sound decisions.&rdquo;
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
