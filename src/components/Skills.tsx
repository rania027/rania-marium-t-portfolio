import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Code, Terminal, Globe, Check, Layers, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Tools & Environment', 'Frameworks & Web'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            04 / Technical Dialects &amp; Instrumentarium
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal tracking-tight">
              Skills, Tooling &amp; Infrastructure
            </h2>
            <p className="text-sm text-[#70736A] mt-1 max-w-xl font-sans">
              Competencies honed through undergraduate computer science coursework, laboratory implementations, and independent engineering projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EEEAE0] border border-[#DCDDD2] rounded">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#35483B] text-[#F7F5EF] font-semibold'
                    : 'text-[#70736A] hover:text-[#292C27] hover:bg-[#F7F5EF]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const isMLHighlight = skill.name === 'Python' || skill.name === 'Antigravity' || skill.name === 'React';
            return (
              <div
                key={skill.name}
                className="bg-[#EEEAE0] border border-[#DCDDD2] hover:border-[#A8B5A0] rounded-lg p-4 transition-all duration-150 flex flex-col justify-between hover:shadow-[0_4px_16px_-2px_rgba(41,44,39,0.04)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg font-semibold text-[#292C27]">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        isMLHighlight
                          ? 'bg-[#C58F78]/15 text-[#81533F] border-[#C58F78]/40'
                          : 'bg-[#F7F5EF] text-[#70736A] border-[#DCDDD2]'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-[#35483B] font-medium mb-2">
                    {skill.level}
                  </div>

                  <p className="text-xs text-[#70736A] font-sans leading-relaxed">
                    {skill.context}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#DCDDD2] flex items-center justify-between text-[10px] font-mono text-[#70736A]">
                  <span>REVA University Coursework</span>
                  <Check className="w-3.5 h-3.5 text-[#35483B]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal/Manifest Summary */}
        <div className="mt-8 bg-[#292C27] text-[#F7F5EF] rounded-lg p-4 sm:p-5 font-mono text-xs overflow-x-auto border border-[#35483B]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#70736A]/40 text-[#A8B5A0] text-[11px]">
            <span>// ENVIRONMENT MANIFEST · RANIA MARIUM T</span>
            <span>TARGET: CSE (AI &amp; ML) · BENGALURU</span>
          </div>
          <div className="space-y-1 text-[#EEEAE0]">
            <p><span className="text-[#C58F78]">$</span> cat /etc/core-stack.conf</p>
            <p className="text-[#A8B5A0] pl-4">LANGUAGES = [&quot;Python&quot;, &quot;C&quot;, &quot;JavaScript&quot;, &quot;SQL/MySQL&quot;, &quot;HTML5&quot;, &quot;CSS3&quot;]</p>
            <p className="text-[#A8B5A0] pl-4">ENVIRONMENTS = [&quot;VS Code&quot;, &quot;Git&quot;, &quot;GitHub&quot;, &quot;Antigravity&quot;]</p>
            <p className="text-[#A8B5A0] pl-4">FRAMEWORKS = [&quot;Tailwind CSS&quot;, &quot;React&quot;, &quot;Vercel&quot;, &quot;Supabase&quot;]</p>
            <p className="text-[#70736A] pl-4 mt-1"># Verified against School of Computer Science and Engineering syllabus</p>
          </div>
        </div>

      </div>
    </section>
  );
};
