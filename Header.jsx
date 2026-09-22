import React, { useState } from 'react';
import { User } from 'lucide-react';
import indianRailwaysLogo from '../assets/images/indian-railways-logo.svg';
import irctcLogo from '../assets/images/irctc-logo.svg';

export const Header = ({
  activeTab,
  setActiveTab,
  onOpenMyBookings,
  onOpenPnrModal,
  onOpenLiveStatus,
  onOpenFoodLounge,
}) => {
  const [lang, setLang] = useState('EN');

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Official Logos Branding Area */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Indian Railways Emblem */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveTab('Book Trains')}>
              <img
                src={indianRailwaysLogo}
                alt="Indian Railways Official Emblem"
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
              />
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-[11px] font-black tracking-wider uppercase text-blue-900 leading-none">
                  भारतीय रेल
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
                  INDIAN RAILWAYS
                </span>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="h-8 sm:h-9 w-px bg-slate-200" />

            {/* IRCTC Official Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveTab('Book Trains')}>
              <img
                src={irctcLogo}
                alt="IRCTC Official Logo"
                referrerPolicy="no-referrer"
                className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="hidden 2xl:flex flex-col text-left">
                <span className="text-[10px] font-black tracking-wider text-blue-900 leading-none">
                  IRCTC
                </span>
                <span className="text-[8px] font-semibold text-sky-600">
                  Govt. of India Enterprise
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-5 overflow-x-auto py-2 no-scrollbar">
            {/* Book Trains */}
            <button
              onClick={() => setActiveTab('Book Trains')}
              className={`relative px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'Book Trains'
                  ? 'text-sky-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Book<br className="hidden sm:inline" /> Trains
              {activeTab === 'Book Trains' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
              )}
            </button>

            {/* Search Schedules */}
            <button
              onClick={() => setActiveTab('Search Schedules')}
              className={`relative px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'Search Schedules'
                  ? 'text-sky-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Search<br className="hidden sm:inline" /> Schedules
              {activeTab === 'Search Schedules' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
              )}
            </button>

            {/* PNR Enquiry */}
            <button
              onClick={() => {
                setActiveTab('PNR Enquiry');
                onOpenPnrModal();
              }}
              className={`relative flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'PNR Enquiry'
                  ? 'text-sky-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <img
                src={indianRailwaysLogo}
                alt="PNR Railways"
                referrerPolicy="no-referrer"
                className="w-4 h-4 rounded-full object-cover shrink-0"
              />
              <span>
                PNR<br className="hidden sm:inline" /> Enquiry
              </span>
              {activeTab === 'PNR Enquiry' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
              )}
            </button>

            {/* Live Train Running Status */}
            <button
              onClick={() => {
                setActiveTab('Live Train');
                onOpenLiveStatus();
              }}
              className={`relative px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'Live Train'
                  ? 'text-sky-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live<br className="hidden sm:inline" /> Train
              <span className="hidden lg:inline"> Status</span>
              {activeTab === 'Live Train' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
              )}
            </button>

            {/* Meal & Lounge */}
            <button
              onClick={() => {
                setActiveTab('Meal & Lounge');
                onOpenFoodLounge();
              }}
              className={`relative flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'Meal & Lounge'
                  ? 'text-sky-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <img
                src={irctcLogo}
                alt="IRCTC Food"
                referrerPolicy="no-referrer"
                className="h-3.5 w-auto object-contain shrink-0"
              />
              <span>
                Meal &amp;<br className="hidden sm:inline" /> Lounge
              </span>
              {activeTab === 'Meal & Lounge' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
              )}
            </button>

            {/* Help & Support */}
            <button
              onClick={() => setActiveTab('Help & Support')}
              className={`relative px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'Help & Support'
                  ? 'text-sky-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Help &amp;<br className="hidden sm:inline" /> Support
            </button>
          </nav>

          {/* Right Utility & Profile Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0 ml-1 sm:ml-2">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full p-0.5 text-xs font-semibold border border-slate-200">
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'EN'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('HI')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'HI'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                HI
              </button>
            </div>

            {/* Currency */}
            <div className="hidden md:flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>₹ INR</span>
            </div>

            {/* My Bookings with badge */}
            <button
              id="my-bookings-btn"
              onClick={onOpenMyBookings}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100/80 border border-sky-200 rounded-lg transition-all"
            >
              <svg className="w-4 h-4 text-sky-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="hidden sm:inline">My Bookings</span>
              <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-sky-600 rounded-full">
                2
              </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs">
                <User className="w-4 h-4" />
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  Nandana V.
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified IRCTC ID
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

