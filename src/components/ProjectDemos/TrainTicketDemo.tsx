import React, { useState } from 'react';
import { Train, Ticket, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';

export const TrainTicketDemo: React.FC = () => {
  const [origin, setOrigin] = useState<string>('SBC - KSR Bengaluru');
  const [destination, setDestination] = useState<string>('MYS - Mysuru Junction');
  const [travelClass, setTravelClass] = useState<'SL' | '3A' | 'CC' | '1A'>('3A');
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [passengerName, setPassengerName] = useState<string>('R. Marium');
  const [bookedPnr, setBookedPnr] = useState<string | null>(null);

  const classPricing: Record<'SL' | '3A' | 'CC' | '1A', { name: string; fare: number; available: number }> = {
    SL: { name: 'Sleeper Class', fare: 165, available: 42 },
    '3A': { name: 'AC 3 Tier', fare: 540, available: 18 },
    CC: { name: 'AC Chair Car', fare: 420, available: 26 },
    '1A': { name: 'AC First Class', fare: 1120, available: 6 }
  };

  const currentClass = classPricing[travelClass];
  const totalFare = currentClass.fare * passengerCount;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim()) return;
    // Generate simulated 10-digit PNR
    const randomPnr = '482' + Math.floor(1000000 + Math.random() * 9000000);
    setBookedPnr(randomPnr);
  };

  return (
    <div className="bg-[#EEEAE0] border border-[#DCDDD2] rounded-md p-4 text-[#292C27] font-sans text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#DCDDD2] gap-2">
        <div className="flex items-center gap-2">
          <Train className="w-3.5 h-3.5 text-[#35483B]" />
          <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-[#35483B]">
            Railway Reservation Engine · Relational DBMS Demo
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#70736A]">
          Schema: 3NF Normalized MySQL
        </span>
      </div>

      {bookedPnr ? (
        <div className="bg-[#F7F5EF] border border-[#A8B5A0] rounded p-4 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#A8B5A0]/25 text-[#35483B] mb-1">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h4 className="font-serif text-base font-semibold text-[#292C27]">
            Reservation Confirmed &amp; Validated
          </h4>
          <div className="inline-block bg-[#EEEAE0] border border-[#DCDDD2] px-3 py-1.5 rounded font-mono text-xs">
            PNR: <strong className="text-[#35483B]">{bookedPnr}</strong> · Status: <span className="text-[#35483B] font-semibold">CONFIRMED (CNF)</span>
          </div>
          <p className="text-[11px] text-[#70736A]">
            Passenger: <strong>{passengerName}</strong> ({passengerCount} Seat) | {origin} <ArrowRight className="inline w-3 h-3 mx-0.5" /> {destination}
          </p>
          <div className="text-[10px] font-mono text-[#70736A]">
            Class: {currentClass.name} ({travelClass}) · Total Transaction: ₹{totalFare}
          </div>
          <button
            onClick={() => setBookedPnr(null)}
            className="mt-2 text-[11px] text-[#81533F] hover:underline font-mono"
          >
            ← Book Another Route
          </button>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#70736A] mb-1">
                Departure Station
              </label>
              <select
                aria-label="Departure Station"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-[#F7F5EF] border border-[#DCDDD2] text-xs py-1.5 px-2 rounded text-[#292C27] focus:outline-none focus:border-[#C58F78]"
              >
                <option>SBC - KSR Bengaluru</option>
                <option>MAS - Chennai Central</option>
                <option>HYB - Hyderabad Deccan</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#70736A] mb-1">
                Destination Station
              </label>
              <select
                aria-label="Destination Station"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#F7F5EF] border border-[#DCDDD2] text-xs py-1.5 px-2 rounded text-[#292C27] focus:outline-none focus:border-[#C58F78]"
              >
                <option>MYS - Mysuru Junction</option>
                <option>CBE - Coimbatore Junction</option>
                <option>CAN - Kannur Main</option>
              </select>
            </div>
          </div>

          {/* Class Selectors */}
          <div>
            <label className="block text-[10px] font-mono uppercase text-[#70736A] mb-1">
              Select Coach Quota &amp; Class
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['SL', '3A', 'CC', '1A'] as const).map((cls) => {
                const item = classPricing[cls];
                const isSelected = travelClass === cls;
                return (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setTravelClass(cls)}
                    className={`p-1.5 rounded text-left border transition-all ${
                      isSelected
                        ? 'border-[#35483B] bg-[#F7F5EF] ring-1 ring-[#35483B]'
                        : 'border-[#DCDDD2] bg-[#F7F5EF] hover:bg-[#E7E2D6]'
                    }`}
                  >
                    <div className="font-mono font-semibold text-[11px] text-[#292C27]">{cls}</div>
                    <div className="text-[9px] text-[#70736A] truncate">{item.name}</div>
                    <div className="text-[10px] font-mono text-[#35483B] mt-0.5">₹{item.fare}</div>
                    <div className="text-[9px] font-mono text-[#70736A]">Avail: {item.available}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#70736A] mb-1">
                Primary Passenger Name
              </label>
              <input
                type="text"
                required
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                placeholder="Enter passenger name"
                className="w-full bg-[#F7F5EF] border border-[#DCDDD2] text-xs py-1.5 px-2 rounded text-[#292C27] focus:outline-none focus:border-[#C58F78]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#70736A] mb-1">
                Seats: {passengerCount} (Max 4)
              </label>
              <input
                aria-label="Number of Seats"
                type="range"
                min="1"
                max="4"
                value={passengerCount}
                onChange={(e) => setPassengerCount(Number(e.target.value))}
                className="w-full accent-[#35483B] cursor-pointer mt-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#DCDDD2]">
            <div>
              <span className="text-[10px] text-[#70736A] font-mono uppercase block">Total Fare</span>
              <span className="font-serif text-lg font-semibold text-[#292C27]">₹{totalFare}</span>
              <span className="text-[10px] text-[#70736A] ml-1">incl. GST &amp; fees</span>
            </div>
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded bg-[#35483B] hover:bg-[#27362C] text-[#F7F5EF] font-mono text-[11px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Ticket className="w-3.5 h-3.5" />
              Confirm Reservation &amp; Generate PNR
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
