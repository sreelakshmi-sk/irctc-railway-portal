import React from 'react';
import { X, Utensils, Armchair, FileCheck, Navigation, Coffee, ShieldAlert, Luggage, Accessibility, Clock, Bed } from 'lucide-react';

export const UtilitiesModal = ({ isOpen, onClose, initialType = 'all' }) => {
  if (!isOpen) return null;

  const utilities = [
    { title: 'PNR Status & Berth Chart', desc: 'Real-time chart preparation & RAC clearance', icon: FileCheck, tag: 'Official' },
    { title: 'Spot Your Train (GPS)', desc: 'Live satellite tracking with platform updates', icon: Navigation, tag: 'Live GPS' },
    { title: 'Berth Vacancy Matrix', desc: '120-day coach level vacancy patterns', icon: Armchair, tag: '120-Day' },
    { title: 'E-Catering Food on Track', desc: 'IRCTC verified hot meals delivered to your seat', icon: Utensils, tag: 'Hot Delivery' },
    { title: 'Station Executive Lounges', desc: 'Air-conditioned lounge access at 84+ major stations', icon: Coffee, tag: 'Premier' },
    { title: 'Retiring Rooms & Dormitories', desc: 'Reserve sanitized station rooms for layovers', icon: Bed, tag: 'Pre-book' },
    { title: 'Divyangjan & Wheelchair Aid', desc: 'Ramp and wheelchair assistance at boarding', icon: Accessibility, tag: 'Priority' },
    { title: 'Luggage & Parcel Rates', desc: 'Check permissible weights & booking tariff', icon: Luggage, tag: 'Rules' },
    { title: 'Tatkal Open Windows Tracker', desc: 'Automated 10:00 AM & 11:00 AM booking alarms', icon: Clock, tag: 'Alerts' },
    { title: 'Rail Madad Grievance Help', desc: 'Direct 139 helpline & rapid response portal', icon: ShieldAlert, tag: '24x7' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">
              {initialType === 'food'
                ? 'E-Catering Food on Track & Station Lounges'
                : initialType === 'coach'
                ? 'Berth & Coach Availability Matrix'
                : 'All 14 Indian Railways Transit Utilities'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Certified digital passenger services under National Express Rail Authority
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-slate-50 overflow-y-auto max-h-[65vh]">
          {initialType === 'food' ? (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    FSSAI Verified E-Catering
                  </span>
                  <span className="text-xs font-bold text-slate-900">45+ Partner Brands</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Pre-order hot regional meals directly to your train berth
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Haldiram&apos;s, Domino&apos;s, Saravana Bhavan, Bikanervala, and authentic Jain Thalis delivered at your designated en-route station.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                    AC Executive Lounges
                  </span>
                  <span className="text-xs font-bold text-slate-900">Starting from ₹150/2 hrs</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Relax in modern station lounges with high-speed WiFi &amp; refreshments
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Available at New Delhi (NDLS), Mumbai CSMT, Varanasi Jn, Bengaluru City, and 80+ key transit terminals.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {utilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-sky-400 hover:shadow-xs transition-all flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
