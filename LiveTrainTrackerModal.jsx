import React, { useState } from 'react';
import { X, Navigation } from 'lucide-react';

export const LiveTrainTrackerModal = ({ isOpen, onClose }) => {
  const [trainQuery] = useState('12432');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Navigation className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">
                  Spot Your Train (Live GPS Tracker)
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-xs text-slate-400">
                Satellite GPS telemetry updated 45 seconds ago
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Train Details Bar */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                TRAIN #{trainQuery}
              </div>
              <div className="text-xl font-black text-slate-900">
                Trivandrum Rajdhani Special (NDLS &rarr; MMCT)
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                • RIGHT ON TIME (0 Min Delay)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-200 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-400 block font-medium">Current Speed</span>
              <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">
                128 KM/H
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-400 block font-medium">Next Stoppage</span>
              <span className="font-extrabold text-slate-900 text-sm mt-0.5 block truncate">
                Vadodara Jn
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-400 block font-medium">Expected Platform</span>
              <span className="font-extrabold text-sky-600 text-sm mt-0.5 block">
                Platform #2
              </span>
            </div>
          </div>
        </div>

        {/* Live Route Milestones Timeline */}
        <div className="p-6 space-y-4 overflow-y-auto max-h-[50vh]">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Corridor Progress Timeline
          </h4>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {/* Station 1: New Delhi */}
            <div className="relative">
              <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-200" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-900">New Delhi (NDLS)</span>
                  <span className="text-xs text-slate-400 block">Departed on time: 16:55 (PF 2)</span>
                </div>
                <span className="text-xs font-bold text-emerald-600">Departed</span>
              </div>
            </div>

            {/* Station 2: Kota Jn */}
            <div className="relative">
              <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-200" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-900">Kota Junction (KOTA)</span>
                  <span className="text-xs text-slate-400 block">Passed at 21:05 (PF 1)</span>
                </div>
                <span className="text-xs font-bold text-emerald-600">Passed</span>
              </div>
            </div>

            {/* Station 3: Vadodara (Current Approaching) */}
            <div className="relative bg-sky-50 -ml-2 p-3 rounded-xl border border-sky-200">
              <span className="absolute -left-4 top-4 w-4 h-4 rounded-full bg-sky-600 border-2 border-white ring-4 ring-sky-300 animate-pulse" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-sky-900">Vadodara Junction (BRC)</span>
                    <span className="text-[10px] font-bold bg-sky-600 text-white px-1.5 py-0.5 rounded">
                      Approaching
                    </span>
                  </div>
                  <span className="text-xs text-sky-700 block mt-0.5">
                    ETA: 03:15 AM (Platform 2) • Distance: 12 KM
                  </span>
                </div>
                <span className="text-xs font-bold text-sky-700">In 9 mins</span>
              </div>
            </div>

            {/* Station 4: Mumbai Central (Final Destination) */}
            <div className="relative">
              <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-500">Mumbai Central (MMCT)</span>
                  <span className="text-xs text-slate-400 block">Scheduled Arrival: 08:35 (PF 1)</span>
                </div>
                <span className="text-xs font-medium text-slate-400">Scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
