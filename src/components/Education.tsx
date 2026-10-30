import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            05 / Academic Pedagogy &amp; Credentials
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal tracking-tight">
            Education, Coursework &amp; Certifications
          </h2>
          <p className="text-sm text-[#70736A] mt-1 max-w-2xl font-sans">
            Formal undergraduate computer science training in artificial intelligence and machine learning at REVA University, supplemented by verified industry certifications.
          </p>
        </div>

        {/* Main Degree Card */}
        <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#DCDDD2]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-xs font-mono text-[#35483B]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Undergraduate Degree Program</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#292C27] tracking-tight pt-1">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="font-serif italic text-base text-[#81533F]">
                Specialization in {EDUCATION_DATA.specialization}
              </p>
            </div>

            <div className="md:text-right font-mono text-xs space-y-1">
              <div className="text-sm font-semibold text-[#292C27]">{EDUCATION_DATA.institution}</div>
              <div className="text-[#35483B] font-medium">{EDUCATION_DATA.school}</div>
              <div className="text-[#70736A]">{EDUCATION_DATA.campus}</div>
              <div className="inline-block mt-1 px-2 py-0.5 bg-[#A8B5A0]/25 border border-[#A8B5A0] text-[#35483B] rounded font-mono text-[11px]">
                {EDUCATION_DATA.duration}
              </div>
            </div>
          </div>

          {/* Academic Studio Course Highlight */}
          <div className="my-6 p-4 rounded bg-[#F7F5EF] border border-[#DCDDD2]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs uppercase font-semibold text-[#81533F] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Specialized Studio: {EDUCATION_DATA.studioCourse.title}</span>
              </span>
              <span className="font-mono text-[11px] text-[#70736A]">
                {EDUCATION_DATA.studioCourse.offeredBy}
              </span>
            </div>
            <p className="text-xs text-[#292C27] leading-relaxed mb-3">
              {EDUCATION_DATA.studioCourse.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {EDUCATION_DATA.studioCourse.outcomes.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EEEAE0] border border-[#DCDDD2] text-[11px] font-mono text-[#292C27]"
                >
                  <CheckCircle className="w-3 h-3 text-[#35483B]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Core Coursework Grid */}
          <div>
            <h4 className="font-mono text-xs uppercase font-semibold text-[#292C27] mb-3">
              Core Coursework &amp; Curricular Foundations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F5EF] border border-[#DCDDD2] rounded p-3.5 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="font-serif text-base font-semibold text-[#292C27] leading-snug">
                      {course.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#81533F] mt-0.5">
                      {course.focus}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#DCDDD2]/70">
                    <ul className="space-y-1">
                      {course.topics.map((topic, tidx) => (
                        <li key={tidx} className="text-[11px] text-[#70736A] flex items-center gap-1.5 font-sans">
                          <span className="w-1 h-1 rounded-full bg-[#A8B5A0]"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Achievements Section */}
        <div>
          <h3 className="font-serif text-2xl text-[#292C27] font-semibold mb-4">
            Verified Certifications &amp; Hackathons
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#EEEAE0] border border-[#DCDDD2] hover:border-[#A8B5A0] rounded-lg p-5 transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-[10px] font-mono text-[#81533F] font-semibold">
                      {cert.credentialTag}
                    </span>
                    <span className="font-mono text-xs text-[#70736A] font-medium">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-semibold text-[#292C27] mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-[#70736A] font-sans leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DCDDD2]">
                  <div className="text-[10px] font-mono uppercase text-[#70736A] mb-1.5">
                    Skills Validated:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-[10px] font-mono text-[#292C27]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
