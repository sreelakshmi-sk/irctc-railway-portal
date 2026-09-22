import React, { useState } from 'react';
import { X, Search, ShieldCheck, Train } from 'lucide-react';
import { SAMPLE_PNR } from '../data/mockData';

export const PNRStatusModal = ({ isOpen, onClose }) => {
  const [pnrInput, setPnrInput] = useState('2458921473');
  const [searchedRecord, setSearchedRecord] = useState(SAMPLE_PNR);
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (pnrInput.trim().length === 10) {
      setSearchedRecord({
        ...SAMPLE_PNR,
        pnrNumber: pnrInput,
      });
      setHasSearched(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                PNR Enquiry &amp; Live Berth Chart
              </h3>
              <p className="text-xs text-slate-400">
                Official CRIS verified passenger reservation chart status
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

        {/* Input area */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                maxLength={10}
                value={pnrInput}
                onChange={(e) => setPnrInput(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 10-Digit PNR Number"
                className="w-full pl-4 pr-10 py-3 bg-white border border-slate-300 rounded-xl font-mono text-base font-bold tracking-widest text-slate-900 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-2xs"
              />
              <span className="absolute right-3 top-3.5 text-xs text-slate-400 font-mono">
                {pnrInput.length}/10
              </span>
            </div>
            <button
              type="submit"
              disabled={pnrInput.length !== 10}
              className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white font-bold text-sm shadow-xs transition-colors flex items-center gap-2 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Check Status</span>
            </button>
          </form>
          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
            <span>Quick test:</span>
            <button
              type="button"
              onClick={() => {
                setPnrInput('2458921473');
                setSearchedRecord(SAMPLE_PNR);
                setHasSearched(true);
              }}
              className="font-mono text-sky-600 underline font-medium hover:text-sky-800"
            >
              2458921473 (Confirmed 3A)
            </button>
          </div>
        </div>

        {/* Result view */}
        {hasSearched && searchedRecord && (
          <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
            {/* Top Details Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4.5 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    PNR NUMBER
                  </span>
                  <span className="font-mono text-lg font-black text-slate-900">
                    {searchedRecord.pnrNumber}
                  </span>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {searchedRecord.chartStatus}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Train</span>
                  <span className="font-bold text-slate-800 block mt-0.5">
                    {searchedRecord.trainNumber} - {searchedRecord.trainName}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Date of Journey</span>
                  <span className="font-bold text-slate-800 block mt-0.5">
                    {searchedRecord.doj}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">From / To</span>
                  <span className="font-bold text-slate-800 block mt-0.5">
                    {searchedRecord.from} &rarr; {searchedRecord.to}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Class / Quota</span>
                  <span className="font-bold text-slate-800 block mt-0.5">
                    {searchedRecord.classCode} (GN)
                  </span>
                </div>
              </div>
            </div>

            {/* Passenger Berth Allocation Table */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Passenger Berth &amp; Coach Allocation
              </h4>
              <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
                {searchedRecord.passengers.map((p) => (
                  <div key={p.number} className="p-4 flex items-center justify-between bg-white hover:bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs">
                        P{p.number}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span>Passenger {p.number}</span>
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                            {p.currentStatus}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {p.berthType}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono text-base font-black text-slate-900">
                        {p.coach} - {p.berth}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">
                        Coach &amp; Berth No.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee note */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3.5 flex items-center gap-3 text-xs text-sky-800">
              <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
              <span>Chart Prepared and locked at Delhi Jn. Free SMS &amp; WhatsApp updates active for train 12432.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
