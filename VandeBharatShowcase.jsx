import React from 'react';
import { Wifi, Utensils, Shield, ArrowRight, Zap, Gauge } from 'lucide-react';

export const VandeBharatShowcase = ({
  onBrowseRoutes,
  onViewPunctuality,
}) => {
  return (
    <section className="w-full bg-[#0d1527] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column (Content & Specs) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Speed Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold">
            <Gauge className="w-3.5 h-3.5 text-sky-400" />
            <span>Semi–High Speed 160 KM/H</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            The New Standard of Travel: Vande Bharat &amp; Tejas Corridors
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
            Engineered with intelligent regenerative braking, 180–degree rotating seats in Executive Class, onboard bio-vacuum restrooms, and silent aerodynamic coach acoustics.
          </p>

          {/* 3 Key Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Feature 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <Wifi className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-bold text-white">Infotainment</span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                Free high-speed WiFi
              </span>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-white">Curated Meals</span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                Celebrated regional menus
              </span>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">KAVACH 4.0</span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                Auto-protection safety
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onBrowseRoutes}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all duration-150"
            >
              Browse 102 Vande Bharat Routes
            </button>
            <button
              onClick={onViewPunctuality}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span>View Live Punctuality Index</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column (Live corridor metric card) */}
        <div className="lg:col-span-5">
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
            {/* Header / Punctuality Score */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/70">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                PUNCTUALITY SCORE
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                98.4% On-Time
              </span>
            </div>

            {/* Train details & Price */}
            <div className="flex items-start justify-between mt-4">
              <div>
                <div className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-white">
                  <span>NDLS</span>
                  <span className="text-slate-400 font-normal">⇄</span>
                  <span>MMCT</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  12432 Rajdhani Special
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  ₹ 2,450
                </div>
                <span className="text-xs font-bold text-emerald-400">
                  AC 3–Tier Available
                </span>
              </div>
            </div>

            {/* Timetable speed timeline */}
            <div className="mt-6 pt-4 border-t border-slate-700/70">
              <div className="relative flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                <span>Departure 16:55</span>
                <span>Arrival 08:35</span>
              </div>
              {/* Line track */}
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                <div className="h-0.5 bg-slate-600 flex-1 relative">
                  <div className="absolute inset-0 bg-sky-400 w-2/3" />
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-500" />
              </div>
              <div className="text-center mt-2">
                <span className="inline-block text-[11px] font-medium text-slate-400 bg-slate-900/60 px-2.5 py-0.5 rounded-full border border-slate-700">
                  15h 40m nonstop speed
                </span>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Electrified Clean Green Traction Corridors. Zero Direct Carbon Emission.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
