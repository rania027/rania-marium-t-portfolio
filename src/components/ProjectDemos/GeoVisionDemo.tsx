import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Activity, MapPin, RefreshCw } from 'lucide-react';

export const GeoVisionDemo: React.FC = () => {
  const [rainfall, setRainfall] = useState<number>(45); // mm/h
  const [moisture, setMoisture] = useState<number>(68); // %
  const [slopeAngle, setSlopeAngle] = useState<number>(34); // degrees
  const [selectedStation, setSelectedStation] = useState<string>('Station Alpha (Slope-12, Western Ghats)');

  // Calculate composite risk score (0-100)
  // Weighted: Rainfall 40%, Soil Moisture 35%, Slope 25%
  const rainfallFactor = Math.min(rainfall / 80, 1) * 40;
  const moistureFactor = Math.min(moisture / 90, 1) * 35;
  const slopeFactor = Math.min(slopeAngle / 50, 1) * 25;
  const compositeScore = Math.round(rainfallFactor + moistureFactor + slopeFactor);

  let hazardLevel: { label: string; bg: string; text: string; border: string; desc: string } = {
    label: 'STABLE / NORMAL',
    bg: 'bg-[#A8B5A0]/20',
    text: 'text-[#35483B]',
    border: 'border-[#A8B5A0]',
    desc: 'Topographic telemetry indicates normal geological stability. Routine baseline monitoring active.'
  };

  if (compositeScore >= 75) {
    hazardLevel = {
      label: 'CRITICAL / EVACUATION ALERT',
      bg: 'bg-[#BA1A1A]/15',
      text: 'text-[#BA1A1A]',
      border: 'border-[#BA1A1A]',
      desc: 'Severe landslide hazard detected. Soil pore-water saturation exceeded critical threshold on steep slope.'
    };
  } else if (compositeScore >= 50) {
    hazardLevel = {
      label: 'ELEVATED HAZARD WATCH',
      bg: 'bg-[#C58F78]/25',
      text: 'text-[#81533F]',
      border: 'border-[#C58F78]',
      desc: 'Moderate risk identified. Soil moisture saturated. Automated alert triggered for civil defense authorities.'
    };
  }

  const resetToSample = (r: number, m: number, s: number) => {
    setRainfall(r);
    setMoisture(m);
    setSlopeAngle(s);
  };

  return (
    <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-md p-4 text-[#292C27] font-sans text-xs">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#DCDDD2] gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#35483B] animate-pulse"></span>
          <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-[#35483B]">
            GeoShield Telemetry Feed · Live Simulation
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#70736A]" />
          <select 
            aria-label="Monitoring Station"
            value={selectedStation} 
            onChange={(e) => setSelectedStation(e.target.value)}
            className="bg-[#F7F5EF] border border-[#DCDDD2] text-[11px] py-0.5 px-2 rounded text-[#292C27] focus:outline-none focus:border-[#C58F78]"
          >
            <option>Station Alpha (Slope-12, Western Ghats)</option>
            <option>Station Beta (High-Gradient Ridge, Node 4)</option>
            <option>Station Gamma (Valley Drainage Basin, Node 7)</option>
          </select>
        </div>
      </div>

      {/* Main Grid: Parameters on Left, Hazard Output on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Sliders Column */}
        <div className="md:col-span-7 space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="font-medium text-[#292C27] flex items-center gap-1.5">
                <span>Rainfall Intensity</span>
                <span className="font-mono text-[#70736A]">({rainfall} mm/h)</span>
              </label>
              <span className="font-mono text-[10px] text-[#70736A]">Threshold: 60mm</span>
            </div>
            <input 
              aria-label="Rainfall Intensity"
              type="range" 
              min="0" 
              max="100" 
              value={rainfall}
              onChange={(e) => setRainfall(Number(e.target.value))}
              className="w-full accent-[#35483B] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="font-medium text-[#292C27] flex items-center gap-1.5">
                <span>Soil Moisture Saturation</span>
                <span className="font-mono text-[#70736A]">({moisture}%)</span>
              </label>
              <span className="font-mono text-[10px] text-[#70736A]">Field Cap: 75%</span>
            </div>
            <input 
              aria-label="Soil Moisture Saturation"
              type="range" 
              min="10" 
              max="100" 
              value={moisture}
              onChange={(e) => setMoisture(Number(e.target.value))}
              className="w-full accent-[#35483B] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="font-medium text-[#292C27] flex items-center gap-1.5">
                <span>Slope Incline Angle</span>
                <span className="font-mono text-[#70736A]">({slopeAngle}°)</span>
              </label>
              <span className="font-mono text-[10px] text-[#70736A]">Critical: &gt;38°</span>
            </div>
            <input 
              aria-label="Slope Incline Angle"
              type="range" 
              min="10" 
              max="60" 
              value={slopeAngle}
              onChange={(e) => setSlopeAngle(Number(e.target.value))}
              className="w-full accent-[#35483B] cursor-pointer"
            />
          </div>

          {/* Quick Preset Buttons */}
          <div className="pt-1 flex items-center gap-2">
            <span className="text-[10px] text-[#70736A] uppercase font-mono">Test Scenarios:</span>
            <button 
              type="button"
              onClick={() => resetToSample(15, 35, 20)}
              className="px-2 py-0.5 rounded border border-[#DCDDD2] bg-[#F7F5EF] hover:bg-[#E7E2D6] text-[10px] text-[#292C27] transition-colors"
            >
              Dry Baseline
            </button>
            <button 
              type="button"
              onClick={() => resetToSample(52, 70, 36)}
              className="px-2 py-0.5 rounded border border-[#DCDDD2] bg-[#F7F5EF] hover:bg-[#E7E2D6] text-[10px] text-[#81533F] transition-colors"
            >
              Monsoon Surge
            </button>
            <button 
              type="button"
              onClick={() => resetToSample(85, 92, 44)}
              className="px-2 py-0.5 rounded border border-[#DCDDD2] bg-[#F7F5EF] hover:bg-[#E7E2D6] text-[10px] text-[#BA1A1A] transition-colors font-medium"
            >
              Critical Flash Flood
            </button>
          </div>
        </div>

        {/* Status Computation Column */}
        <div className="md:col-span-5 bg-[#F7F5EF] border border-[#DCDDD2] rounded p-3 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-[#70736A] tracking-wider mb-1">
              Calculated Hazard Metric
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-3xl font-semibold text-[#292C27]">
                {compositeScore}
              </span>
              <span className="font-mono text-xs text-[#70736A]">/ 100 Index</span>
            </div>

            <div className={`px-2.5 py-1.5 rounded border ${hazardLevel.border} ${hazardLevel.bg} ${hazardLevel.text} flex items-center gap-1.5 font-mono text-[11px] font-semibold mb-2`}>
              {compositeScore >= 75 ? (
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              ) : compositeScore >= 50 ? (
                <Activity className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              )}
              <span>{hazardLevel.label}</span>
            </div>

            <p className="text-[11px] text-[#70736A] leading-relaxed">
              {hazardLevel.desc}
            </p>
          </div>

          <div className="pt-2 border-t border-[#DCDDD2] mt-2 flex items-center justify-between text-[10px] text-[#70736A] font-mono">
            <span>Model: ML-HazardNet v1.2</span>
            <span>Latency: 12ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
