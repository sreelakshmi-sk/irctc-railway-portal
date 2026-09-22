import React, { useState } from 'react';
import { Header } from './components/Header.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { QuickTransitServices } from './components/QuickTransitServices.jsx';
import { RecentRoutes } from './components/RecentRoutes.jsx';
import { VandeBharatShowcase } from './components/VandeBharatShowcase.jsx';
import { TrustStatsBar } from './components/TrustStatsBar.jsx';
import { Footer } from './components/Footer.jsx';
import { SearchResultsModal } from './components/SearchResultsModal.jsx';
import { PNRStatusModal } from './components/PNRStatusModal.jsx';
import { LiveTrainTrackerModal } from './components/LiveTrainTrackerModal.jsx';
import { MyBookingsModal } from './components/MyBookingsModal.jsx';
import { UtilitiesModal } from './components/UtilitiesModal.jsx';
import { STATIONS, INITIAL_RECENT_ROUTES } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('Book Trains');

  // Search parameters state
  const [selectedFrom, setSelectedFrom] = useState(STATIONS[0]); // New Delhi NDLS
  const [selectedTo, setSelectedTo] = useState(STATIONS[1]); // Mumbai Central MMCT
  const [searchDate, setSearchDate] = useState('2026-09-22');
  const [travelClass, setTravelClass] = useState('All Classes');
  const [quota, setQuota] = useState('General');

  // Recent routes state
  const [recentRoutes, setRecentRoutes] = useState(INITIAL_RECENT_ROUTES);

  // Modals state
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isPnrModalOpen, setIsPnrModalOpen] = useState(false);
  const [isLiveStatusOpen, setIsLiveStatusOpen] = useState(false);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [utilitiesModal, setUtilitiesModal] = useState({
    isOpen: false,
    type: 'all',
  });

  // Toast notification for user actions
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSearch = (params) => {
    setSelectedFrom(params.from);
    setSelectedTo(params.to);
    setSearchDate(params.date);
    setTravelClass(params.travelClass);
    setQuota(params.quota);
    setIsSearchModalOpen(true);
  };

  const handleRebook = (route) => {
    const fromStation = STATIONS.find((s) => s.code === route.fromCode) || {
      code: route.fromCode,
      name: route.fromCity,
      railway: 'Indian Railways',
      zoneInfo: 'Zone Hub',
    };
    const toStation = STATIONS.find((s) => s.code === route.toCode) || {
      code: route.toCode,
      name: route.toCity,
      railway: 'Indian Railways',
      zoneInfo: 'Zone Hub',
    };

    setSelectedFrom(fromStation);
    setSelectedTo(toStation);
    setIsSearchModalOpen(true);
    showToast(`Loaded ${route.fromCity} → ${route.toCity} direct express corridors.`);
  };

  const handleClearHistory = () => {
    setRecentRoutes([]);
    showToast('Recent route search history cleared.');
  };

  const handleBookingSuccess = (train, classCode) => {
    setIsSearchModalOpen(false);
    showToast(`Confirmed! e-Ticket booked for ${train.trainName} (${classCode}). Added to My Bookings.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fb] text-slate-900 selection:bg-sky-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        onOpenPnrModal={() => setIsPnrModalOpen(true)}
        onOpenLiveStatus={() => setIsLiveStatusOpen(true)}
        onOpenFoodLounge={() => setUtilitiesModal({ isOpen: true, type: 'food' })}
      />

      {/* Hero Section with Search Card */}
      <HeroSection
        onSearch={handleSearch}
        selectedFrom={selectedFrom}
        setSelectedFrom={setSelectedFrom}
        selectedTo={selectedTo}
        setSelectedTo={setSelectedTo}
      />

      {/* Main Body Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10 sm:space-y-12 w-full flex-1">
        {/* Two-Column Middle Section: Quick Transit Services & Recent Routes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Quick Transit Services - ~62% width) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <QuickTransitServices
              onOpenPnrModal={() => setIsPnrModalOpen(true)}
              onOpenLiveStatus={() => setIsLiveStatusOpen(true)}
              onOpenCoachMatrix={() => setUtilitiesModal({ isOpen: true, type: 'coach' })}
              onOpenFoodLounge={() => setUtilitiesModal({ isOpen: true, type: 'food' })}
              onExploreUtilities={() => setUtilitiesModal({ isOpen: true, type: 'all' })}
            />
          </div>

          {/* Right Column (Recent Routes & Tatkal Open Windows - ~38% width) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <RecentRoutes
              routes={recentRoutes}
              onRebook={handleRebook}
              onClearHistory={handleClearHistory}
            />
          </div>
        </div>

        {/* Feature Banner: Vande Bharat & Tejas Corridors */}
        <VandeBharatShowcase
          onBrowseRoutes={() => {
            setIsSearchModalOpen(true);
            showToast('Showing all 102 Vande Bharat & Tejas express routes.');
          }}
          onViewPunctuality={() => {
            setIsLiveStatusOpen(true);
            showToast('Punctuality Index: 98.4% on Western & Northern corridors.');
          }}
        />

        {/* Trust & Stats Bar */}
        <TrustStatsBar />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SearchResultsModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        fromStation={selectedFrom}
        toStation={selectedTo}
        date={searchDate}
        travelClass={travelClass}
        quota={quota}
        onBookingSuccess={handleBookingSuccess}
      />

      <PNRStatusModal
        isOpen={isPnrModalOpen}
        onClose={() => setIsPnrModalOpen(false)}
      />

      <LiveTrainTrackerModal
        isOpen={isLiveStatusOpen}
        onClose={() => setIsLiveStatusOpen(false)}
      />

      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
      />

      <UtilitiesModal
        isOpen={utilitiesModal.isOpen}
        onClose={() => setUtilitiesModal({ isOpen: false, type: 'all' })}
        initialType={utilitiesModal.type}
      />
    </div>
  );
}
