import React, { useState, useMemo } from 'react';
import { ArrowLeftRight, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { STATIONS } from '../data/mockData';
import { MovingTrainBg } from './MovingTrainBg';

export const HeroSection = ({
  onSearch,
  selectedFrom,
  setSelectedFrom,
  selectedTo,
  setSelectedTo,
}) => {
  const [departureDate, setDepartureDate] = useState('2026-09-22');
  const [travelClass, setTravelClass] = useState('All Classes');
  const [quota, setQuota] = useState('General');
  const [flexibleDate, setFlexibleDate] = useState(true);
  const [freeCancellation, setFreeCancellation] = useState(true);
  const [divyangjan, setDivyangjan] = useState(false);

  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = () => {
    setIsSwapping(true);
    const temp = selectedFrom;
    setSelectedFrom(selectedTo);
    setSelectedTo(temp);
    setTimeout(() => setIsSwapping(false), 300);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      from: selectedFrom,
      to: selectedTo,
      date: departureDate,
      travelClass,
      quota,
      flexibleDate,
      freeCancellation,
      divyangjan,
    });
  };

  // Format date display like "22 Sep 2026 Tuesday"
  const formattedDateDisplay = useMemo(() => {
    const d = new Date(departureDate + 'T00:00:00');
    if (isNaN(d.getTime())) return '22 Sep 2026 Tuesday';
    const day = d.getDate();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return `${day} ${months[d.getMonth()]} ${d.getFullYear()} ${days[d.getDay()]}`;
  }, [departureDate]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Scenic Railway Landscape with Modern Train Viaduct */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Express Rail Scenic Route"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />
        {/* Natural gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* IRCTC Official Partner Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-medium backdrop-blur-xs mb-4">
          <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Official IRCTC Booking Partner • Zero Convenience Fee on First 2 Bookings</span>
        </div>

        {/* Main Title & Subtitle with Moving Train Background Transition */}
        <div className="relative overflow-hidden rounded-2xl mb-8 pt-3 pb-5 px-1 sm:px-2">
          {/* Moving Train Background Transition */}
          <MovingTrainBg />

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Where will your journey take you?
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed drop-shadow-xs">
              Search direct express trains, check verified live availability, and book tickets with zero cancellation fee protection.
            </p>
          </div>
        </div>

        {/* Floating White Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-slate-100/90">
          <form onSubmit={handleSearchSubmit}>
            {/* Top Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-center">
              {/* FROM input */}
              <div className="md:col-span-3 relative">
                <div
                  id="from-station-selector"
                  onClick={() => {
                    setIsFromOpen(!isFromOpen);
                    setIsToOpen(false);
                  }}
                  className="p-3 rounded-xl border border-slate-200 hover:border-sky-500 bg-white cursor-pointer transition-all hover:shadow-xs"
                >
                  <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                    FROM
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      {selectedFrom.name}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-bold bg-slate-100 text-slate-600 rounded">
                      {selectedFrom.code}
                    </span>
                  </div>
                  <span className="block text-xs text-slate-500 truncate mt-0.5">
                    {selectedFrom.railway} • {selectedFrom.zoneInfo}
                  </span>
                </div>

                {/* Dropdown station picker */}
                {isFromOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-xl shadow-xl border border-slate-200 py-1 max-h-60 overflow-y-auto">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Popular Origins
                    </div>
                    {STATIONS.map((station) => (
                      <button
                        key={station.code}
                        type="button"
                        onClick={() => {
                          setSelectedFrom(station);
                          setIsFromOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-sky-50 flex items-center justify-between text-xs transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-900">{station.name}</div>
                          <div className="text-[11px] text-slate-500">{station.railway}</div>
                        </div>
                        <span className="font-mono text-[11px] font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                          {station.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Swap Button (between From and To) */}
              <div className="md:col-span-1 flex justify-center -my-2 md:my-0">
                <button
                  type="button"
                  id="swap-station-btn"
                  onClick={handleSwap}
                  className={`w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-sky-600 flex items-center justify-center shadow-xs transition-transform duration-300 ${
                    isSwapping ? 'rotate-180' : ''
                  }`}
                  title="Swap Origin and Destination"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* TO input */}
              <div className="md:col-span-3 relative">
                <div
                  id="to-station-selector"
                  onClick={() => {
                    setIsToOpen(!isToOpen);
                    setIsFromOpen(false);
                  }}
                  className="p-3 rounded-xl border border-slate-200 hover:border-sky-500 bg-white cursor-pointer transition-all hover:shadow-xs"
                >
                  <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                    TO
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      {selectedTo.name}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-bold bg-slate-100 text-slate-600 rounded">
                      {selectedTo.code}
                    </span>
                  </div>
                  <span className="block text-xs text-slate-500 truncate mt-0.5">
                    {selectedTo.railway} • {selectedTo.zoneInfo}
                  </span>
                </div>

                {/* Dropdown station picker */}
                {isToOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-xl shadow-xl border border-slate-200 py-1 max-h-60 overflow-y-auto">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Popular Destinations
                    </div>
                    {STATIONS.map((station) => (
                      <button
                        key={station.code}
                        type="button"
                        onClick={() => {
                          setSelectedTo(station);
                          setIsToOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-sky-50 flex items-center justify-between text-xs transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-900">{station.name}</div>
                          <div className="text-[11px] text-slate-500">{station.railway}</div>
                        </div>
                        <span className="font-mono text-[11px] font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                          {station.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* DEPARTURE DATE input */}
              <div className="md:col-span-3 relative">
                <div className="p-3 rounded-xl border border-slate-200 hover:border-sky-500 bg-white transition-all hover:shadow-xs relative">
                  <div className="flex items-center justify-between">
                    <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                      DEPARTURE DATE
                    </span>
                    <Calendar className="w-4 h-4 text-sky-600 shrink-0" />
                  </div>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                    id="date-picker-input"
                  />
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate">
                    {formattedDateDisplay}
                  </div>
                  <span className="block text-xs font-semibold text-emerald-600 mt-0.5">
                    Standard Timetable Active
                  </span>
                </div>
              </div>

              {/* CLASS input */}
              <div className="md:col-span-2 relative">
                <div className="p-3 rounded-xl border border-slate-200 hover:border-sky-500 bg-white transition-all hover:shadow-xs relative">
                  <span className="block text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                    CLASS
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <select
                      id="class-selector"
                      value={travelClass}
                      onChange={(e) => setTravelClass(e.target.value)}
                      className="bg-transparent text-sm sm:text-base font-bold text-slate-900 focus:outline-hidden w-full cursor-pointer pr-4"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Executive Class (EC)">Executive Class (EC)</option>
                      <option value="AC Chair Car (CC)">AC Chair Car (CC)</option>
                      <option value="AC First Class (1A)">AC First Class (1A)</option>
                      <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                      <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                      <option value="Sleeper (SL)">Sleeper (SL)</option>
                    </select>
                  </div>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Tatkal &amp; General
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row Controls */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {/* Quota dropdown */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500">Quota:</span>
                  <select
                    id="quota-select"
                    value={quota}
                    onChange={(e) => setQuota(e.target.value)}
                    className="bg-transparent font-bold text-slate-900 focus:outline-hidden cursor-pointer"
                  >
                    <option value="General">General</option>
                    <option value="Tatkal">Tatkal</option>
                    <option value="Ladies">Ladies</option>
                    <option value="Senior Citizen">Senior Citizen / Lower Berth</option>
                    <option value="Premium Tatkal">Premium Tatkal</option>
                    <option value="Divyangjan">Divyangjan</option>
                  </select>
                </div>

                {/* Checkbox: Flexible with Date */}
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs sm:text-sm font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={flexibleDate}
                    onChange={(e) => setFlexibleDate(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <span>Flexible with Date (±1 Day)</span>
                </label>

                {/* Checkbox: Free Cancellation */}
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs sm:text-sm font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={freeCancellation}
                    onChange={(e) => setFreeCancellation(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <span>Free Cancellation Refund Guarantee</span>
                </label>

                {/* Checkbox: Divyangjan Concession */}
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs sm:text-sm font-medium text-slate-600">
                  <input
                    type="checkbox"
                    checked={divyangjan}
                    onChange={(e) => setDivyangjan(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <span>Divyangjan Concession</span>
                </label>
              </div>

              {/* Submit Search Button */}
              <button
                type="submit"
                id="search-direct-trains-btn"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-150 shrink-0"
              >
                <span>Search Direct Trains</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
