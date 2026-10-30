import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EEEAE0] border-t border-[#DCDDD2] text-[#292C27] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#DCDDD2]">
          
          {/* Brand & Academic Note */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#292C27]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs font-mono text-[#35483B] font-medium uppercase tracking-wider">
              {PERSONAL_INFO.department}
            </p>
            <p className="text-xs text-[#70736A] font-sans max-w-md leading-relaxed">
              Undergraduate engineer specializing in Artificial Intelligence &amp; Machine Learning at REVA University, Bengaluru (2025–2029). 
              Crafting mathematically grounded algorithms, early-warning environmental safeguards, and high-performance web software.
            </p>
            
            {/* Campus & City Badge (no clock) */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F7F5EF] border border-[#DCDDD2] font-mono text-[11px] text-[#70736A]">
              <MapPin className="w-3.5 h-3.5 text-[#35483B]" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-[#81533F] pb-1 border-b border-[#DCDDD2]/70">
              Folio Sections
            </div>
            <ul className="space-y-1.5 pt-1 text-[#70736A]">
              <li>
                <a href="#about" className="hover:text-[#292C27] transition-colors">01. About &amp; Philosophy</a>
              </li>
              <li>
                <a href="#interests" className="hover:text-[#292C27] transition-colors">02. Research Interests</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#292C27] transition-colors">03. Featured Projects (5)</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#292C27] transition-colors">04. Tech Stack &amp; Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#292C27] transition-colors">05. Education &amp; Certs</a>
              </li>
              <li>
                <a href="#goals" className="hover:text-[#292C27] transition-colors">06. Learning Goals</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#292C27] transition-colors">07. Contact &amp; Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Institutional Affiliation */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-[#81533F] pb-1 border-b border-[#DCDDD2]/70">
              Institution
            </div>
            <div className="pt-1 text-[#70736A] space-y-1">
              <div className="font-medium text-[#292C27]">REVA University</div>
              <div>School of Computer Science and Engineering (CSE)</div>
              <div>Rukmini Knowledge Park, Kattigenahalli, Yelahanka</div>
              <div>Bengaluru, Karnataka 560064</div>
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-[#35483B]"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#70736A]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Atelier Scholastica Folio System.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              Typography: EB Garamond &amp; Geist
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F7F5EF] hover:bg-[#E7E2D6] border border-[#DCDDD2] text-[#292C27] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
