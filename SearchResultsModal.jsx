import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SAMPLE_TRAINS } from '../data/mockData';

export const SearchResultsModal = ({
  isOpen,
  onClose,
  fromStation,
  toStation,
  date,
  travelClass,
  quota,
  onBookingSuccess,
}) => {
  const [selectedClassMap, setSelectedClassMap] = useState({});
  const [bookedTrain, setBookedTrain] = useState(null);

  if (!isOpen) return null;

  const handleSelectClass = (trainNumber, classCode) => {
    setSelectedClassMap((prev) => ({ ...prev, [trainNumber]: classCode }));
  };

  const handleBook = (train) => {
    const classCode = selectedClassMap[train.trainNumber] || train.classes[0]?.code;
    setBookedTrain(train.trainNumber);
    setTimeout(() => {
      onBookingSuccess(train, classCode);
      setBookedTrain(null);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span>Direct Express Corridors</span>
              <span>•</span>
              <span>{quota} Quota</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold flex items-center gap-3 mt-1">
              <span>{fromStation.name} ({fromStation.code})</span>
              <span className="text-slate-400 font-normal">&rarr;</span>
              <span>{toStation.name} ({toStation.code})</span>
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Journey Date: <span className="font-semibold text-white">{date}</span> • Class Filter: <span className="font-semibold text-white">{travelClass}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Train List Content */}
        <div className="p-6 overflow-y-auto space-y-4 bg-slate-50 flex-1">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
            <span>Showing verified direct trains with IRCTC guaranteed availability</span>
            <span className="font-bold text-slate-800">{SAMPLE_TRAINS.length} Trains Running Today</span>
          </div>

          {SAMPLE_TRAINS.map((train) => {
            const activeClassCode = selectedClassMap[train.trainNumber] || train.classes[0]?.code;
            const currentClass = train.classes.find((c) => c.code === activeClassCode) || train.classes[0];

            return (
              <div
                key={train.trainNumber}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all space-y-4"
              >
                {/* Train Title & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {train.trainName}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      #{train.trainNumber}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        train.trainType === 'Vande Bharat'
                          ? 'bg-sky-100 text-sky-800'
                          : train.trainType === 'Tejas Rajdhani'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {train.trainType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {train.punctualityScore}% On-Time Rating
                    </span>
                    {train.foodIncluded && (
                      <span className="text-xs text-slate-500 hidden sm:inline">
                        🍽️ Free Meals Included
                      </span>
                    )}
                  </div>
                </div>

                {/* Timetable row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-slate-50 p-4 rounded-xl">
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-slate-900 block">
                      {train.departureTime}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 block">
                      {fromStation.name}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      {fromStation.code} • Platform 2
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-xs font-bold text-slate-500 block mb-1">
                      {train.duration}
                    </span>
                    <div className="relative flex items-center justify-center">
                      <div className="h-0.5 bg-slate-300 w-full" />
                      <div className="absolute w-2 h-2 rounded-full bg-sky-600" />
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
                      Non-stop Priority Corridor
                    </span>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 block">
                      {train.arrivalTime}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 block">
                      {toStation.name}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      {toStation.code} • Platform 1
                    </span>
                  </div>
                </div>

                {/* Classes & Fare Selection */}
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Select Class &amp; Availability:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {train.classes.map((cls) => {
                      const isSelected = cls.code === activeClassCode;
                      return (
                        <button
                          key={cls.code}
                          type="button"
                          onClick={() => handleSelectClass(train.trainNumber, cls.code)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'border-sky-600 bg-sky-50/70 shadow-xs ring-1 ring-sky-600'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-900">
                              {cls.code}
                            </span>
                            <span className="font-black text-sm text-slate-900">
                              ₹{cls.price}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {cls.name}
                          </div>
                          <div className="mt-1.5 pt-1 border-t border-slate-100 flex items-center justify-between">
                            <span
                              className={`text-[10px] font-bold ${
                                cls.status === 'AVAILABLE'
                                  ? 'text-emerald-600'
                                  : cls.status === 'RAC'
                                  ? 'text-amber-600'
                                  : 'text-rose-600'
                              }`}
                            >
                              {cls.status === 'AVAILABLE'
                                ? `AVL ${cls.seats}`
                                : cls.status === 'RAC'
                                ? `RAC ${cls.seats}`
                                : `WL ${cls.seats}`}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Booking Action Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free cancellation refund guarantee covered</span>
                  </div>
                  <button
                    onClick={() => handleBook(train)}
                    disabled={bookedTrain === train.trainNumber}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2"
                  >
                    {bookedTrain === train.trainNumber ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Reserving Berth...</span>
                      </>
                    ) : (
                      <>
                        <span>Book for ₹{currentClass.price}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
