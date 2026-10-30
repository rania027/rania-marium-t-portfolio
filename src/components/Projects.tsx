import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, Terminal, Layers, Check } from 'lucide-react';
import { GeoVisionDemo } from './ProjectDemos/GeoVisionDemo';
import { ResumeBuilderDemo } from './ProjectDemos/ResumeBuilderDemo';
import { TrainTicketDemo } from './ProjectDemos/TrainTicketDemo';
import { TravelHubDemo } from './ProjectDemos/TravelHubDemo';
import { PortfolioSpecDemo } from './ProjectDemos/PortfolioSpecDemo';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'AI & ML' | 'Full-Stack' | 'Systems & Core'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            03 / Selected Works &amp; Technical Exhibits
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        {/* Title & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal tracking-tight">
              Five Featured Engineering Artifacts
            </h2>
            <p className="text-sm text-[#70736A] mt-1 max-w-2xl font-sans">
              Rigorous software prototypes, predictive machine learning models, and relational database systems developed during undergraduate coursework at REVA University.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EEEAE0] border border-[#DCDDD2] rounded">
            {(['All', 'AI & ML', 'Full-Stack', 'Systems & Core'] as const).map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#35483B] text-[#F7F5EF] font-semibold shadow-xs'
                    : 'text-[#70736A] hover:text-[#292C27] hover:bg-[#F7F5EF]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Folio Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            return (
              <article
                key={project.id}
                className="bg-[#EEEAE0] border border-[#DCDDD2] hover:border-[#A8B5A0] rounded-lg p-6 sm:p-7 transition-all duration-200 hover:shadow-[0_4px_16px_-2px_rgba(41,44,39,0.06)]"
              >
                {/* Upper Meta Row */}
                <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-[#DCDDD2]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-[#81533F]">
                      EXHIBIT {project.number}
                    </span>
                    <span className="text-[#DCDDD2]">|</span>
                    <span className="px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-[10px] font-mono text-[#35483B] font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded border border-[#DCDDD2] bg-[#F7F5EF] hover:bg-[#E7E2D6] text-xs font-mono text-[#292C27] transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#81533F]" />
                      <span>Inspect Architecture &amp; Demo</span>
                    </button>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
                  {/* Left Column: Title, Subtitle, Description */}
                  <div className="lg:col-span-6 space-y-3.5">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#292C27] tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="font-serif italic text-sm text-[#81533F]">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-[#70736A] font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem Statement snippet */}
                    <div className="bg-[#F7F5EF] border border-[#DCDDD2] rounded p-3 text-xs space-y-1">
                      <div className="font-mono text-[10px] uppercase font-semibold text-[#81533F]">
                        Target Problem
                      </div>
                      <div className="text-[#292C27] leading-relaxed">
                        {project.problemStatement}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2">
                      <div className="text-[10px] font-mono uppercase text-[#70736A] mb-1.5 font-semibold">
                        Technical Frameworks &amp; Dialects
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] font-mono text-[11px] text-[#292C27]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Demo Preview */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#70736A] font-semibold flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-[#35483B]" />
                          Interactive Preview Console
                        </span>
                        <span className="text-[10px] font-mono text-[#35483B]">
                          Live Component
                        </span>
                      </div>

                      {/* Render Specific Interactive Demo */}
                      {project.id === 'geovision-geoshield' && <GeoVisionDemo />}
                      {project.id === 'smart-resume-portfolio' && <ResumeBuilderDemo />}
                      {project.id === 'train-ticket-portal' && <TrainTicketDemo />}
                      {project.id === 'travel-exploration-hub' && <TravelHubDemo />}
                      {project.id === 'developer-portfolio' && <PortfolioSpecDemo />}
                    </div>

                    {/* Metric Footer */}
                    {project.metrics && (
                      <div className="mt-3 pt-2.5 border-t border-[#DCDDD2] grid grid-cols-3 gap-2 text-center">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="bg-[#F7F5EF] border border-[#DCDDD2] rounded p-1.5">
                            <div className="text-[9px] font-mono uppercase text-[#70736A] truncate">
                              {m.label}
                            </div>
                            <div className="font-serif text-xs font-semibold text-[#35483B] truncate">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Modal View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
