import React from 'react';
import { LEARNING_GOALS } from '../data/portfolioData';
import { Target, CheckCircle2, Circle, TrendingUp, Clock, Code2 } from 'lucide-react';

export const LearningGoals: React.FC = () => {
  return (
    <section id="goals" className="scroll-mt-20 py-16 md:py-24 border-b border-[#DCDDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#81533F] font-semibold">
            06 / Trajectory &amp; Growth Horizons
          </span>
          <div className="h-px bg-[#DCDDD2] flex-1"></div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292C27] font-normal tracking-tight">
              Active Learning Goals &amp; Disciplines
            </h2>
            <p className="text-sm text-[#70736A] mt-1 max-w-2xl font-sans">
              Structured developmental milestones targeting algorithmic problem-solving mastery, production machine learning pipelines, and resilient full-stack systems.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#35483B] bg-[#EEEAE0] px-3 py-1 rounded border border-[#DCDDD2]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Deliberate Practice Mode</span>
          </div>
        </div>

        {/* Learning Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEARNING_GOALS.map((goal) => {
            return (
              <div
                key={goal.id}
                className="bg-[#EEEAE0] border border-[#DCDDD2] hover:border-[#A8B5A0] rounded-lg p-5 sm:p-6 transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#DCDDD2]">
                    <span className="font-mono text-[10px] uppercase font-semibold text-[#81533F] flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      <span>{goal.status}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#70736A]">
                      {goal.progress}% Trajectory
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#292C27] leading-snug">
                    {goal.title}
                  </h3>
                  <div className="text-xs font-mono text-[#35483B] mt-1 mb-3">
                    {goal.target}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#DCDDD2] h-1.5 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-[#35483B] h-full rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>

                  <p className="text-xs text-[#70736A] font-sans leading-relaxed mb-4">
                    {goal.description}
                  </p>

                  {/* Milestones list */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[10px] font-mono uppercase text-[#70736A] font-semibold">
                      Milestone Checklist:
                    </div>
                    {goal.milestones.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        {m.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#35483B] shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-[#A6A89E] shrink-0 mt-0.5" />
                        )}
                        <span className={m.completed ? 'text-[#292C27] line-through decoration-[#DCDDD2]' : 'text-[#70736A]'}>
                          {m.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disciplines Chips */}
                <div className="pt-3 border-t border-[#DCDDD2]">
                  <div className="flex flex-wrap gap-1">
                    {goal.keyDisciplines.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2 py-0.5 rounded bg-[#F7F5EF] border border-[#DCDDD2] text-[10px] font-mono text-[#292C27]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LeetCode & Daily Commitment Callout */}
        <div className="mt-8 bg-[#F7F5EF] border border-[#DCDDD2] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-semibold text-[#292C27] flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#81533F]" />
              <span>Continuous Algorithmic Discipline</span>
            </h4>
            <p className="text-xs text-[#70736A] max-w-2xl font-sans">
              Committing daily sessions to LeetCode in C and Python to systematically build deep intuition for array transformations, binary search trees, graph theory, and dynamic programming memoization.
            </p>
          </div>
          <div className="font-mono text-xs text-[#35483B] bg-[#EEEAE0] px-3 py-2 rounded border border-[#DCDDD2] shrink-0 text-center">
            Daily Practice: C &amp; Python
          </div>
        </div>

      </div>
    </section>
  );
};
