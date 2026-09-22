import React, { useState } from 'react';
import { X, Ticket, Download, CheckCircle } from 'lucide-react';

export const MyBookingsModal = ({ isOpen, onClose }) => {
  const [downloadingId, setDownloadingId] = useState(null);

  if (!isOpen) return null;

  const handleDownload = (id) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert('Official IRCTC Electronic Reservation Slip (ERS) downloaded successfully!');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">
                  My Bookings
                </h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sky-500 text-white">
                  2 Active Journeys
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Verified IRCTC ID: <span className="text-white font-medium">NANDANAV_IRCTC</span>
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

        {/* Bookings List */}
        <div className="p-6 space-y-4 bg-slate-50 overflow-y-auto max-h-[60vh]">
          {/* Booking 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                  PNR: 2458921473
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  CONFIRMED (CNF)
                </span>
              </div>
              <span className="text-xs font-bold text-slate-900">
                ₹ 2,450
              </span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <span>New Delhi (NDLS)</span>
                  <span className="text-slate-400 font-normal">&rarr;</span>
                  <span>Mumbai Central (MMCT)</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  12432 Trivandrum Rajdhani Spl • AC 3–Tier (3A)
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">
                  Coach B4 • Berth 35 (MB) • 22 Sep 2026 (16:55)
                </div>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 rounded border border-sky-200">
                  Boarding PF #2
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Chart Prepared
              </span>
              <button
                type="button"
                onClick={() => handleDownload('b1')}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-sky-500 text-xs font-bold text-slate-700 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'b1' ? 'Downloading...' : 'e-Ticket PDF'}</span>
              </button>
            </div>
          </div>

          {/* Booking 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                  PNR: 4892018321
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  CONFIRMED (CNF)
                </span>
              </div>
              <span className="text-xs font-bold text-slate-900">
                ₹ 1,465
              </span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <span>Kochi (ERS)</span>
                  <span className="text-slate-400 font-normal">&rarr;</span>
                  <span>Bengaluru (SBC)</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  20642 Vande Bharat Express • AC Chair Car (CC)
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">
                  Coach C2 • Berth 14 (Window) • 28 Sep 2026 (05:10)
                </div>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 rounded border border-sky-200">
                  Meals Included
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                Free Cancellation until 4 hours before chart prep
              </span>
              <button
                type="button"
                onClick={() => handleDownload('b2')}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-sky-500 text-xs font-bold text-slate-700 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'b2' ? 'Downloading...' : 'e-Ticket PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
