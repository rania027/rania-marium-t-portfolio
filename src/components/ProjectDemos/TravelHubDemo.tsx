import React, { useState } from 'react';
import { Compass, Calendar, Bookmark, MapPin, Heart } from 'lucide-react';

export const TravelHubDemo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Highland' | 'Heritage' | 'Coastal'>('All');
  const [savedWishlist, setSavedWishlist] = useState<string[]>(['Munnar Mist Ridge']);

  const destinations = [
    {
      id: 'munnar',
      name: 'Munnar Mist Ridge',
      region: 'Western Ghats, Kerala',
      category: 'Highland',
      elevation: '1,600m ASL',
      climate: 'Cool / Foggy',
      season: 'Sep – Mar',
      estBudget: '₹12,400',
      tag: 'Eco-Trek'
    },
    {
      id: 'hampi',
      name: 'Hampi Monoliths',
      region: 'Vijayanagara, Karnataka',
      category: 'Heritage',
      elevation: '467m ASL',
      climate: 'Arid / Sunny',
      season: 'Oct – Feb',
      estBudget: '₹8,900',
      tag: 'UNESCO Arch'
    },
    {
      id: 'gokarna',
      name: 'Gokarna Cliff Trail',
      region: 'Uttara Kannada',
      category: 'Coastal',
      elevation: 'Sea Level',
      climate: 'Tropical Breeze',
      season: 'Nov – Mar',
      estBudget: '₹9,600',
      tag: 'Coastline'
    },
    {
      id: 'coorg',
      name: 'Coorg Rainforest Canopy',
      region: 'Kodagu, Karnataka',
      category: 'Highland',
      elevation: '1,170m ASL',
      climate: 'Sub-tropical',
      season: 'All Year',
      estBudget: '₹14,200',
      tag: 'Coffee Estates'
    }
  ];

  const filtered = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory);

  const toggleWishlist = (name: string) => {
    setSavedWishlist(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-md p-4 text-[#292C27] font-sans text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#DCDDD2] gap-2">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#35483B]" />
          <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-[#35483B]">
            Travel Exploration Hub · Discovery Engine
          </span>
        </div>
        <div className="flex items-center gap-1 font-mono text-[10px] text-[#70736A]">
          <Bookmark className="w-3 h-3 text-[#81533F]" />
          <span>Wishlist: {savedWishlist.length} saved</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {(['All', 'Highland', 'Heritage', 'Coastal'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
              activeCategory === cat
                ? 'bg-[#35483B] text-[#F7F5EF]'
                : 'bg-[#F7F5EF] text-[#70736A] hover:text-[#292C27] border border-[#DCDDD2]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {filtered.map(dest => {
          const isFavorited = savedWishlist.includes(dest.name);
          return (
            <div 
              key={dest.id}
              className="bg-[#F7F5EF] border border-[#DCDDD2] hover:border-[#A8B5A0] rounded p-2.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h4 className="font-serif text-sm font-semibold text-[#292C27] leading-tight">
                    {dest.name}
                  </h4>
                  <button 
                    onClick={() => toggleWishlist(dest.name)}
                    className="p-1 hover:text-[#C58F78] transition-colors"
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-[#C58F78] text-[#C58F78]' : 'text-[#70736A]'}`} />
                  </button>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#70736A] mb-2 font-mono">
                  <MapPin className="w-2.5 h-2.5" />
                  <span>{dest.region}</span>
                </div>

                <div className="grid grid-cols-2 gap-1 text-[10px] text-[#70736A] border-y border-[#DCDDD2]/70 py-1.5 my-1.5">
                  <div>
                    <span className="block text-[9px] uppercase font-mono text-[#A6A89E]">Elevation</span>
                    <span className="font-mono text-[#292C27]">{dest.elevation}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-mono text-[#A6A89E]">Ideal Season</span>
                    <span className="font-mono text-[#292C27]">{dest.season}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="inline-block px-1.5 py-0.5 rounded bg-[#EEEAE0] text-[#35483B] font-mono text-[9px] border border-[#DCDDD2]">
                  {dest.tag}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#35483B]">
                  {dest.estBudget} <span className="text-[9px] font-normal text-[#70736A]">/ est</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
