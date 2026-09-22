import React from 'react';
import { RotateCw, Clock } from 'lucide-react';

export const RecentRoutes = ({
  routes,
  onRebook,
  onClearHistory,
}) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
            FAST REBOOK
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Recent Routes
          </h2>
        </div>
        <button
          onClick={onClearHistory}
          className="text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
        >
          Clear History
        </button>
      </div>

      {/* Routes List */}
      <div className="space-y-2.5">
        {routes.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400 bg-white border border-dashed border-slate-200 rounded-2xl">
            No recent search history.
          </div>
        ) : (
          routes.map((route) => (
            <div
              key={route.id}
              className="bg-white border border-slate-200/90 hover:border-sky-300 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-xs hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-900">
                  <span>{route.fromCity}</span>
                  <span className="text-slate-400">&rarr;</span>
                  <span>{route.toCity}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  <span>{route.dateStr}</span>
                  <span className="mx-1.5 text-slate-300">•</span>
                  <span>{route.classType}</span>
                  <span className="mx-1.5 text-slate-300">•</span>
                  <span className="font-medium text-slate-700">{route.trainName}</span>
                </div>
              </div>

              {/* Refresh / Rebook Button */}
              <button
                type="button"
                onClick={() => onRebook(route)}
                className="w-9 h-9 rounded-xl border border-slate-200 hover:border-sky-500 bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-colors shrink-0 shadow-2xs"
                title="Rebook route"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          ))
        )}

        {/* Daily Tatkal Open Windows Alert Card */}
        <div className="mt-3.5 bg-slate-900 text-white rounded-2xl p-4 sm:p-4.5 border border-slate-800 shadow-md flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              Daily Tatkal Open Windows
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
              AC Coaches open at <span className="text-amber-300 font-semibold">10:00 AM IST</span>. Non-AC Sleeper classes open at <span className="text-amber-300 font-semibold">11:00 AM IST</span> daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
