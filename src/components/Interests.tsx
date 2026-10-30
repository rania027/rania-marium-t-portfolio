import React, { useState } from 'react';
import { TECHNICAL_INTERESTS } from '../data/portfolioData';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const Interests: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="interests" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            02 / Research Domains &amp; Technical Interests
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal">
              Theoretical Inquiries &amp; Engineering Focus
            </h2>
            <p className="text-sm text-[#70736A] mt-1 max-w-xl">
              An index of active academic pursuits, computational paradigms, and engineering disciplines cultivated at REVA University.
            </p>
          </div>
          <span className="font-mono text-xs text-[#70736A]">
            6 Documented Pillars
          </span>
        </div>

        {/* Scholarly Index List */}
        <div className="border-t border-[#DCDDD2] divide-y divide-[#DCDDD2]">
          {TECHNICAL_INTERESTS.map((interest, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={interest.number}
                className={`transition-colors duration-150 ${
                  isExpanded ? 'bg-[#EEEAE0]/70' : 'hover:bg-[#EEEAE0]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full py-5 px-3 sm:px-4 text-left flex flex-col md:flex-row md:items-center justify-between gap-3 focus:outline-none focus-visible:bg-[#EEEAE0]"
                >
                  {/* Left: Number and Title */}
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#81533F] font-semibold w-6">
                      {interest.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#292C27] font-medium tracking-tight">
                        {interest.title}
                      </h3>
                      <div className="text-xs text-[#70736A] font-sans mt-0.5">
                        {interest.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: Badges and expand toggle */}
                  <div className="flex items-center gap-2 self-start md:self-center pl-10 md:pl-0">
                    <div className="hidden sm:flex flex-wrap gap-1">
                      {interest.tags.slice(0, 2).map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-[10px] font-mono text-[#70736A]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded border border-[#DCDDD2] bg-[#F7F5EF] text-[#35483B] transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-3 sm:px-4 pb-6 pt-1 pl-10 sm:pl-16 space-y-4 animate-in fade-in duration-200">
                    <p className="text-sm text-[#292C27] font-sans leading-relaxed max-w-3xl">
                      {interest.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {interest.tags.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-xs font-mono text-[#35483B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
