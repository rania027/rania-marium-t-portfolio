import React, { useState } from 'react';
import { CheckCircle2, FileText, Sparkles, Check, Download } from 'lucide-react';

export const ResumeBuilderDemo: React.FC = () => {
  const [targetRole, setTargetRole] = useState<'ai_ml' | 'software_engineer' | 'fullstack'>('ai_ml');
  const [activeTab, setActiveTab] = useState<'preview' | 'ats_report'>('preview');

  const roleData = {
    ai_ml: {
      roleTitle: 'Machine Learning Engineering Intern',
      score: 96,
      keywordsFound: ['Python', 'Data Structures & Algorithms', 'Model Evaluation', 'MySQL', 'Supervised Learning', 'Feature Engineering'],
      metricsCount: 6,
      formattingGrade: 'A+'
    },
    software_engineer: {
      roleTitle: 'Software Engineer (Systems & Backend)',
      score: 93,
      keywordsFound: ['C Language', 'Data Structures', 'Algorithmic Optimization', 'Relational Schemas', 'Git / GitHub', 'Linux'],
      metricsCount: 5,
      formattingGrade: 'A'
    },
    fullstack: {
      roleTitle: 'Full-Stack Web Developer Intern',
      score: 95,
      keywordsFound: ['React', 'JavaScript ES6+', 'Tailwind CSS', 'MySQL DBMS', 'RESTful API', 'Responsive UI'],
      metricsCount: 6,
      formattingGrade: 'A+'
    }
  };

  const current = roleData[targetRole];

  return (
    <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-md p-4 text-[#292C27] font-sans text-xs">
      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#DCDDD2] gap-2">
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-[#35483B]" />
          <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-[#35483B]">
            Smart ATS Engine · Live Folio Generator
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#70736A] text-[11px]">Target Role:</span>
          <select 
            aria-label="Target Role"
            value={targetRole} 
            onChange={(e) => setTargetRole(e.target.value as any)}
            className="bg-[#F7F5EF] border border-[#DCDDD2] text-[11px] py-0.5 px-2 rounded text-[#292C27] focus:outline-none focus:border-[#C58F78]"
          >
            <option value="ai_ml">AI & ML Engineer Intern</option>
            <option value="software_engineer">Software Engineer (Systems)</option>
            <option value="fullstack">Full-Stack Web Developer</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
            activeTab === 'preview'
              ? 'bg-[#35483B] text-[#F7F5EF]'
              : 'bg-[#F7F5EF] text-[#70736A] hover:text-[#292C27] border border-[#DCDDD2]'
          }`}
        >
          ATS Folio Output
        </button>
        <button
          onClick={() => setActiveTab('ats_report')}
          className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
            activeTab === 'ats_report'
              ? 'bg-[#35483B] text-[#F7F5EF]'
              : 'bg-[#F7F5EF] text-[#70736A] hover:text-[#292C27] border border-[#DCDDD2]'
          }`}
        >
          Compliance Diagnostics ({current.score}% Match)
        </button>
      </div>

      {activeTab === 'preview' ? (
        <div className="bg-[#F7F5EF] border border-[#DCDDD2] rounded p-3.5 space-y-2.5 font-sans">
          {/* Header */}
          <div className="border-b border-[#DCDDD2] pb-2 text-center">
            <h4 className="font-serif text-base font-semibold tracking-wide text-[#292C27]">
              RANIA MARIUM T
            </h4>
            <p className="text-[10px] text-[#70736A] font-mono">
              Bengaluru, India · raniamariumt@gmail.com · linkedin.com/in/rania-marium-t-58b254384
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#35483B] border-b border-[#DCDDD2] pb-0.5 mb-1">
              Education
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="font-medium text-[#292C27]">
                REVA University — B.Tech CSE (AI & ML)
              </span>
              <span className="font-mono text-[#70736A]">2025 – 2029</span>
            </div>
            <p className="text-[10px] text-[#70736A]">
              School of Computer Science and Engineering · Coursework: DSA, DBMS (MySQL), OOP (Python), Discrete Math
            </p>
          </div>

          {/* Key Project in Resume */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#35483B] border-b border-[#DCDDD2] pb-0.5 mb-1">
              Key Technical Implementation
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="font-medium text-[#292C27]">
                GeoVision / GeoShield-NER · Landslide Early-Warning
              </span>
              <span className="font-mono text-[10px] text-[#81533F]">Python, ML, GIS</span>
            </div>
            <ul className="list-disc list-inside text-[10px] text-[#70736A] space-y-0.5 mt-0.5">
              <li>Engineered multi-variable hazard synthesis model aggregating rainfall and moisture telemetry.</li>
              <li>Achieved sub-second automated alert classification for regional civil defense protocols.</li>
            </ul>
          </div>

          {/* Skills Line */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#35483B] border-b border-[#DCDDD2] pb-0.5 mb-1">
              Core Technical Competencies
            </div>
            <p className="text-[10px] text-[#292C27] font-mono">
              <span className="text-[#70736A]">Languages:</span> Python, C, JavaScript, SQL (MySQL) | <span className="text-[#70736A]">Web:</span> React, Tailwind CSS | <span className="text-[#70736A]">Tools:</span> Git, GitHub, VS Code, Antigravity
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#F7F5EF] border border-[#DCDDD2] p-2.5 rounded text-center">
              <div className="text-[10px] font-mono text-[#70736A] uppercase">ATS Score</div>
              <div className="font-serif text-2xl font-semibold text-[#35483B]">{current.score}%</div>
              <div className="text-[9px] text-[#35483B] font-mono">Passes ATS Threshold</div>
            </div>
            <div className="bg-[#F7F5EF] border border-[#DCDDD2] p-2.5 rounded text-center">
              <div className="text-[10px] font-mono text-[#70736A] uppercase">Format Grade</div>
              <div className="font-serif text-2xl font-semibold text-[#81533F]">{current.formattingGrade}</div>
              <div className="text-[9px] text-[#70736A] font-mono">Standard Semantic Headers</div>
            </div>
            <div className="bg-[#F7F5EF] border border-[#DCDDD2] p-2.5 rounded text-center">
              <div className="text-[10px] font-mono text-[#70736A] uppercase">Action Metrics</div>
              <div className="font-serif text-2xl font-semibold text-[#292C27]">{current.metricsCount}</div>
              <div className="text-[9px] text-[#70736A] font-mono">Quantifiable Outcomes</div>
            </div>
          </div>

          <div className="bg-[#F7F5EF] border border-[#DCDDD2] rounded p-2.5">
            <div className="text-[10px] font-mono uppercase text-[#70736A] mb-1.5 font-semibold">
              Keywords Verified by Parser ({current.keywordsFound.length} Detected)
            </div>
            <div className="flex flex-wrap gap-1">
              {current.keywordsFound.map((kw, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#A8B5A0]/25 text-[#35483B] font-mono text-[10px] border border-[#A8B5A0]/50">
                  <Check className="w-2.5 h-2.5" />
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
