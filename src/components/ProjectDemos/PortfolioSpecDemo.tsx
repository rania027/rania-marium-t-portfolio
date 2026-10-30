import React, { useState } from 'react';
import { Palette, Type, Layers, Check } from 'lucide-react';

export const PortfolioSpecDemo: React.FC = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const tokens = [
    { name: 'Warm Ivory', hex: '#F7F5EF', role: 'Canvas Background', textDark: true },
    { name: 'Soft Linen', hex: '#EEEAE0', role: 'Surface Container / Cards', textDark: true },
    { name: 'Deep Olive', hex: '#35483B', role: 'Anchors & Primary Actions', textDark: false },
    { name: 'Muted Sage', hex: '#A8B5A0', role: 'Secondary Accents & Badges', textDark: true },
    { name: 'Muted Terracotta', hex: '#C58F78', role: 'Warm Spark & ML Highlights', textDark: false },
    { name: 'Warm Charcoal', hex: '#292C27', role: 'Primary Editorial Text', textDark: false }
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-md p-4 text-[#292C27] font-sans text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#DCDDD2] gap-2">
        <div className="flex items-center gap-2">
          <Palette className="w-3.5 h-3.5 text-[#35483B]" />
          <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-[#35483B]">
            Atelier Scholastica · Design System Tokens
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#70736A]">
          Organic Archival Light Mode
        </span>
      </div>

      {/* Swatches */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
        {tokens.map(token => (
          <button
            key={token.hex}
            type="button"
            onClick={() => handleCopy(token.hex)}
            className="text-left border border-[#DCDDD2] rounded overflow-hidden p-2 bg-[#F7F5EF] hover:border-[#A8B5A0] transition-colors group cursor-pointer"
          >
            <div 
              className="h-8 rounded mb-1.5 border border-[#DCDDD2] flex items-center justify-center text-[10px] font-mono"
              style={{ backgroundColor: token.hex, color: token.textDark ? '#292C27' : '#F7F5EF' }}
            >
              {copiedToken === token.hex ? (
                <span className="flex items-center gap-1 font-semibold text-[10px]">
                  <Check className="w-3 h-3" /> Copied
                </span>
              ) : (
                token.hex
              )}
            </div>
            <div className="font-medium text-[11px] text-[#292C27]">{token.name}</div>
            <div className="text-[9px] text-[#70736A] truncate">{token.role}</div>
          </button>
        ))}
      </div>

      {/* Typographic System Preview */}
      <div className="bg-[#F7F5EF] border border-[#DCDDD2] rounded p-2.5 space-y-1.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#70736A] uppercase border-b border-[#DCDDD2] pb-1">
          <span>Typographic Pairing</span>
          <span>Renaissance × Modern Computation</span>
        </div>
        <div className="flex items-baseline justify-between pt-0.5">
          <span className="font-serif text-lg font-normal text-[#292C27]">
            EB Garamond · Display &amp; Headings
          </span>
          <span className="font-mono text-[10px] text-[#70736A]">Classical Authority</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="font-sans text-xs text-[#70736A]">
            Geist Sans-Serif · Technical Summaries &amp; Body
          </span>
          <span className="font-mono text-[10px] text-[#70736A]">Precision Readability</span>
        </div>
      </div>
    </div>
  );
};
