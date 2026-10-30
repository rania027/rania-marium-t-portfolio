import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Award, Compass, GraduationCap, Cpu, Code2, Sparkles, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            01 / Biographical Discourse
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal leading-tight">
              A student of computation, algorithms, and applied machine intelligence.
            </h2>
            <p className="font-serif italic text-base text-[#70736A]">
              Cultivating depth in mathematical fundamentals while constructing reliable, human-centered software architectures.
            </p>

            <div className="pt-4 border-t border-[#DCDDD2] space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#35483B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#292C27]">{PERSONAL_INFO.department}</div>
                  <div className="text-[#70736A]">{PERSONAL_INFO.institution}, Bengaluru</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#81533F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#292C27]">Bengaluru, Karnataka</div>
                  <div className="text-[#70736A]">Global Technology Hub &amp; Innovation Corridor</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#35483B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#292C27]">IBM Certified Python Programmer</div>
                  <div className="text-[#70736A]">IDEATE&apos;BLR AWS Hackathon Participant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-[#292C27] font-sans text-sm sm:text-base leading-relaxed">
            <p>
              My academic trajectory at <strong className="text-[#292C27]">REVA University</strong> in the{' '}
              <span className="text-[#35483B] font-medium">School of Computer Science and Engineering (CSE)</span> is anchored in the belief that software engineering is highest when supported by mathematical rigor and structural discipline.
            </p>

            <p className="text-[#70736A]">
              Rather than adopting machine learning as an opaque collection of APIs, I study the foundational mechanics: how algorithmic complexity dictates computational boundaries, how discrete structures govern system states, and how relational schemas preserve transactional integrity.
            </p>

            <p className="text-[#70736A]">
              My applied efforts—from modeling environmental landslide thresholds in{' '}
              <strong className="text-[#292C27]">GeoVision / GeoShield-NER</strong> to building algorithmic parsing tools for resumes and structured railway management systems—focus on tangible societal utility and uncompromising code cleanliness.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="p-3.5 rounded bg-[#EEEAE0] border border-[#DCDDD2]">
                <div className="flex items-center gap-2 font-serif text-base font-semibold text-[#292C27] mb-1">
                  <Cpu className="w-4 h-4 text-[#81533F]" />
                  <span>Algorithmic Rigor</span>
                </div>
                <p className="text-xs text-[#70736A] leading-normal font-sans">
                  Space-time efficiency, recursive paradigms, and continuous LeetCode problem solving in C and Python.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#EEEAE0] border border-[#DCDDD2]">
                <div className="flex items-center gap-2 font-serif text-base font-semibold text-[#292C27] mb-1">
                  <Sparkles className="w-4 h-4 text-[#35483B]" />
                  <span>Applied Machine Learning</span>
                </div>
                <p className="text-xs text-[#70736A] leading-normal font-sans">
                  Predictive hazard classification, sensor-data assimilation, and early-warning environmental safeguards.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#EEEAE0] border border-[#DCDDD2]">
                <div className="flex items-center gap-2 font-serif text-base font-semibold text-[#292C27] mb-1">
                  <Code2 className="w-4 h-4 text-[#35483B]" />
                  <span>Resilient Web Systems</span>
                </div>
                <p className="text-xs text-[#70736A] leading-normal font-sans">
                  Modern declarative user interfaces (React, Tailwind CSS) paired with relational DBMS models (MySQL).
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#EEEAE0] border border-[#DCDDD2]">
                <div className="flex items-center gap-2 font-serif text-base font-semibold text-[#292C27] mb-1">
                  <Compass className="w-4 h-4 text-[#81533F]" />
                  <span>Design Restraint</span>
                </div>
                <p className="text-xs text-[#70736A] leading-normal font-sans">
                  Anti-slop typography, purposeful contrast, high accessibility, and respectful information hierarchy.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
