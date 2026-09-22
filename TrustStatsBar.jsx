import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const TrustStatsBar = () => {
  return (
    <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
      {/* Left: Ministry API Guarantee */}
      <div className="flex items-start sm:items-center gap-3.5 max-w-2xl">
        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900">
            Official Ministry of Railways Certified API Guarantee
          </h4>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            Instant refunds processed directly back to UPI, NetBanking, or Credit Card within 15 minutes of cancellation.
          </p>
        </div>
      </div>

      {/* Right: Key Operating Figures */}
      <div className="flex items-center gap-8 sm:gap-12 shrink-0 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
        <div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            14.2M+
          </div>
          <div className="text-xs font-semibold text-slate-500 mt-0.5">
            Daily Passengers
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            9,140
          </div>
          <div className="text-xs font-semibold text-slate-500 mt-0.5">
            Live Trains Monitored
          </div>
        </div>
      </div>
    </div>
  );
};
