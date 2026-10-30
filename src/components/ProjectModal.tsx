import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Code2, Sparkles, Database, FileText } from 'lucide-react';
import { Project } from '../types';
import { GeoVisionDemo } from './ProjectDemos/GeoVisionDemo';
import { ResumeBuilderDemo } from './ProjectDemos/ResumeBuilderDemo';
import { TrainTicketDemo } from './ProjectDemos/TrainTicketDemo';
import { TravelHubDemo } from './ProjectDemos/TravelHubDemo';
import { PortfolioSpecDemo } from './ProjectDemos/PortfolioSpecDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderDemo = () => {
    switch (project.id) {
      case 'geovision-geoshield':
        return <GeoVisionDemo />;
      case 'smart-resume-portfolio':
        return <ResumeBuilderDemo />;
      case 'train-ticket-portal':
        return <TrainTicketDemo />;
      case 'travel-exploration-hub':
        return <TravelHubDemo />;
      case 'developer-portfolio':
        return <PortfolioSpecDemo />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#292C27]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F5EF] border border-[#DCDDD2] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden text-[#292C27]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#DCDDD2] bg-[#EEEAE0]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] font-semibold text-[#81533F]">
              Exhibit {project.number}
            </span>
            <span className="font-mono text-xs text-[#70736A] uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1 rounded text-[#70736A] hover:text-[#292C27] hover:bg-[#F7F5EF] transition-colors border border-transparent hover:border-[#DCDDD2]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="p-5 sm:p-6 sm:px-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292C27] font-semibold">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#70736A] mt-1 font-serif italic">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Live Demo Container */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#35483B] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C58F78]" />
                <span>Interactive Functional Demonstration</span>
              </span>
              <span className="text-[10px] font-mono text-[#70736A]">Client-Side Logic Verified</span>
            </div>
            {renderDemo()}
          </div>

          {/* Problem Statement & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#EEEAE0] border border-[#DCDDD2] p-4 rounded-md">
              <div className="font-mono text-xs uppercase font-semibold text-[#81533F] mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-[#292C27] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-[#EEEAE0] border border-[#DCDDD2] p-4 rounded-md">
              <div className="font-mono text-xs uppercase font-semibold text-[#35483B] mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Architectural Overview</span>
              </div>
              <p className="text-xs text-[#292C27] leading-relaxed">
                {project.fullOverview}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <div className="font-mono text-xs uppercase font-semibold text-[#292C27] mb-2">
              Key Engineering Features
            </div>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#292C27]">
                  <CheckCircle2 className="w-4 h-4 text-[#35483B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics & Tech Stack */}
          <div className="pt-2 border-t border-[#DCDDD2] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#70736A] mb-2 font-semibold">
                Technology Manifest
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#EEEAE0] border border-[#DCDDD2] text-xs font-mono text-[#292C27]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#70736A] mb-2 font-semibold">
                  Performance &amp; Scale Metrics
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex justify-between border-b border-[#DCDDD2]/70 pb-1">
                      <span className="text-[#70736A]">{m.label}</span>
                      <span className="font-medium text-[#35483B]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-[#DCDDD2] bg-[#EEEAE0] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#70736A]">
            Engineering Portfolio · REVA University (CSE)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#35483B] text-[#F7F5EF] text-xs font-mono font-medium hover:bg-[#27362C] transition-colors"
          >
            Close Exhibit
          </button>
        </div>
      </div>
    </div>
  );
};
