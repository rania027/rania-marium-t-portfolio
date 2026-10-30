import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'interests', 'projects', 'skills', 'education', 'goals', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Interests', href: '#interests', id: 'interests' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Goals', href: '#goals', id: 'goals' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#F7F5EF]/95 backdrop-blur-md border-[#DCDDD2] shadow-[0_4px_16px_-2px_rgba(41,44,39,0.04)]'
          : 'bg-[#F7F5EF] border-[#DCDDD2]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand & Monogram - Name strictly on one line on desktop */}
        <a
          href="#"
          className="group flex flex-col shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#35483B]"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#292C27] whitespace-nowrap group-hover:text-[#35483B] transition-colors leading-tight">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-[#70736A] whitespace-nowrap pt-0.5">
            B.Tech CSE (AI &amp; ML) · REVA University
          </span>
        </a>

        {/* Desktop Navigation (visible on lg screens, perfectly proportioned) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded ${
                  isActive
                    ? 'text-[#35483B] bg-[#EEEAE0] font-semibold'
                    : 'text-[#70736A] hover:text-[#292C27] hover:bg-[#EEEAE0]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#35483B] hover:bg-[#27362C] text-[#F7F5EF] text-xs font-mono font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#35483B]/50 whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </a>
        </div>

        {/* Mobile / Tablet menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="lg:hidden p-2 rounded text-[#292C27] hover:bg-[#EEEAE0] transition-colors border border-[#DCDDD2]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DCDDD2] bg-[#F7F5EF] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-md">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#70736A] px-3 pb-1 border-b border-[#DCDDD2]">
            Navigation Index
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-[#292C27] hover:bg-[#EEEAE0] rounded font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#DCDDD2] flex flex-col sm:flex-row gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded bg-[#35483B] text-[#F7F5EF] text-xs font-mono font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded border border-[#DCDDD2] bg-[#EEEAE0] text-xs font-mono text-[#292C27]"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#70736A]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
