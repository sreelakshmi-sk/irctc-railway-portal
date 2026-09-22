import React from 'react';
import { FileCheck, Navigation, Armchair, UtensilsCrossed, ArrowRight } from 'lucide-react';

export const QuickTransitServices = ({
  onOpenPnrModal,
  onOpenLiveStatus,
  onOpenCoachMatrix,
  onOpenFoodLounge,
  onExploreUtilities,
}) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold text-sky-600 tracking-wider uppercase">
            INSTANT ASSISTANCE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Quick Transit Services
          </h2>
        </div>
        <button
          onClick={onExploreUtilities}
          className="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 transition-colors"
        >
          <span>Explore All 14 Utilities</span>
          <span>&rsaquo;</span>
        </button>
      </div>

      {/* 2x2 Grid of interactive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card 1: PNR Enquiry & Berth Chart */}
        <div
          id="pnr-service-card"
          onClick={onOpenPnrModal}
          className="group relative bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 bg-slate-100 rounded-md border border-slate-200/60">
                Live Chart
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              PNR Enquiry &amp; Berth Chart
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Instant chart preparation alert, RAC clearance forecast, and coach position details.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:gap-1.5 transition-all">
            <span>Check 10–Digit PNR</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 2: Train Running Status (Spot Train) */}
        <div
          id="spot-train-card"
          onClick={onOpenLiveStatus}
          className="group relative bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                <Navigation className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live GPS
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              Train Running Status (Spot Train)
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Track exact delay minutes, approaching platform numbers, and live station arrival times.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:gap-1.5 transition-all">
            <span>Locate by Train No.</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 3: Berth & Seat Availability */}
        <div
          id="berth-matrix-card"
          onClick={onOpenCoachMatrix}
          className="group relative bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                <Armchair className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200/70 rounded-md">
                120–Day Cal
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              Berth &amp; Seat Availability
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Check seat vacancy patterns across all express, superfast, and premium Vande Bharat coaches.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:gap-1.5 transition-all">
            <span>View Coach Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 4: Food on Track & Lounge Pass */}
        <div
          id="food-lounge-card"
          onClick={onOpenFoodLounge}
          className="group relative bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-md">
                Hot Delivery
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              Food on Track &amp; Lounge Pass
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Pre-order verified FSSAI station meals to seat or reserve premier AC station lounge access.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:gap-1.5 transition-all">
            <span>Explore Menus &amp; Lounges</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
