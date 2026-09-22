import React from 'react';
import { motion } from 'motion/react';

export const MovingTrainBg = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Background Soft Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-36 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-36 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Railway Track & Catenary Line Structure */}
      <div className="absolute bottom-2 left-0 right-0 h-10 flex flex-col justify-end">
        {/* Overhead Catenary Wire (Subtle) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent mb-5" />

        {/* Double Steel Rail Lines */}
        <div className="relative w-full h-3">
          {/* Top Rail */}
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-slate-500/40 to-transparent" />
          
          {/* Track Sleepers (Ties) */}
          <div
            className="w-full h-1.5 opacity-25"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.4) 0px, rgba(148, 163, 184, 0.4) 2px, transparent 2px, transparent 12px)',
            }}
          />
          
          {/* Bottom Rail */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-slate-400/50 to-transparent shadow-[0_1px_4px_rgba(56,189,248,0.25)]" />
        </div>
      </div>

      {/* Station Signal Post in the background */}
      <div className="absolute bottom-5 right-12 sm:right-24 hidden md:flex flex-col items-center opacity-40">
        <div className="w-2.5 h-6 bg-slate-900 border border-slate-700 rounded-sm flex flex-col items-center justify-around py-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        </div>
        <div className="w-0.5 h-6 bg-slate-600" />
      </div>

      {/* Modern High-Speed Express Moving Train */}
      <motion.div
        className="absolute bottom-3 left-0 flex items-end will-change-transform opacity-60 sm:opacity-75"
        initial={{ x: '-120%' }}
        animate={{ x: '120vw' }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: 'linear',
        }}
      >
        {/* Trailing Speed Particles & Motion Glow */}
        <div className="w-28 sm:w-44 h-5 bg-gradient-to-r from-transparent via-sky-500/20 to-sky-400/40 blur-xs rounded-full mr-[-8px]" />

        {/* Coach 3 (Rear Coach) */}
        <div className="relative w-20 sm:w-28 h-6 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-tl-sm border-t border-b border-slate-300/80 shadow-xs flex items-center px-1.5 gap-1.5">
          {/* Blue Livery Stripe */}
          <div className="absolute top-1 left-0 right-0 h-1 bg-blue-900" />
          <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-amber-500" />

          {/* Passenger Windows with Warm Interior Illumination */}
          {[1, 2, 3, 4].map((w) => (
            <div
              key={`c3-w-${w}`}
              className="w-3 sm:w-4 h-2.5 bg-amber-100/90 rounded-[2px] shadow-[0_0_4px_rgba(251,191,36,0.6)] border border-slate-600/40"
            />
          ))}

          {/* Rear Red Marker Light */}
          <div className="absolute left-0.5 top-2 w-1 h-1 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" />
        </div>

        {/* Gangway Coupler */}
        <div className="w-1.5 h-4 bg-slate-800 self-center" />

        {/* Coach 2 (Middle Coach) */}
        <div className="relative w-22 sm:w-32 h-6 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border-t border-b border-slate-300/80 shadow-xs flex items-center px-1.5 gap-1.5">
          {/* Blue Livery Stripe */}
          <div className="absolute top-1 left-0 right-0 h-1 bg-blue-900" />
          <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-amber-500" />

          {/* Passenger Windows */}
          {[1, 2, 3, 4, 5].map((w) => (
            <div
              key={`c2-w-${w}`}
              className="w-3 sm:w-4 h-2.5 bg-amber-100/90 rounded-[2px] shadow-[0_0_4px_rgba(251,191,36,0.6)] border border-slate-600/40"
            />
          ))}
        </div>

        {/* Gangway Coupler */}
        <div className="w-1.5 h-4 bg-slate-800 self-center" />

        {/* Coach 1 / Executive Class */}
        <div className="relative w-22 sm:w-32 h-6 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border-t border-b border-slate-300/80 shadow-xs flex items-center px-1.5 gap-1.5">
          {/* Blue Livery Stripe */}
          <div className="absolute top-1 left-0 right-0 h-1 bg-blue-900" />
          <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-amber-500" />

          {/* Passenger Windows */}
          {[1, 2, 3, 4, 5].map((w) => (
            <div
              key={`c1-w-${w}`}
              className="w-3 sm:w-4 h-2.5 bg-amber-100/90 rounded-[2px] shadow-[0_0_4px_rgba(251,191,36,0.6)] border border-slate-600/40"
            />
          ))}
        </div>

        {/* Gangway Coupler */}
        <div className="w-1.5 h-4 bg-slate-800 self-center" />

        {/* Locomotive (Aerodynamic Streamlined Engine Head - Vande Bharat style) */}
        <div className="relative w-28 sm:w-36 h-7 flex items-end">
          {/* Roof Pantograph */}
          <div className="absolute -top-2 left-6 w-5 h-2 flex flex-col items-center">
            <div className="w-4 h-0.5 bg-slate-300" />
            <div className="w-2.5 h-1.5 border-l border-r border-t border-slate-400" />
          </div>

          {/* Engine Body with Aerodynamic Slanted Nose */}
          <div
            className="w-full h-full bg-gradient-to-r from-slate-200 via-white to-slate-200 border-t border-slate-300/80 shadow-md relative overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 75% 0%, 98% 55%, 100% 100%, 0% 100%)',
            }}
          >
            {/* National Tri-color / Blue Racing Livery Stripe */}
            <div className="absolute top-1 left-0 right-3 h-1 bg-blue-900" />
            <div className="absolute top-2 left-0 right-4 h-0.5 bg-sky-500" />
            <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-amber-500" />

            {/* Aerodynamic Cockpit Windshield */}
            <div
              className="absolute top-1 right-2 sm:right-3 w-7 sm:w-9 h-3.5 bg-slate-900 rounded-xs border border-sky-400/40"
              style={{
                clipPath: 'polygon(0% 20%, 80% 0%, 100% 100%, 20% 100%)',
              }}
            />

            {/* Side Cab Window */}
            <div className="absolute top-1.5 left-4 w-3.5 h-2.5 bg-slate-800 rounded-xs border border-slate-600" />
          </div>

          {/* Glowing Forward Headlight Beam */}
          <div className="absolute right-0 bottom-1 flex items-center">
            {/* Twin Headlight Source */}
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_16px_#38bdf8]" />
            {/* Long Projected Beam on Track */}
            <div
              className="w-24 sm:w-44 h-8 bg-gradient-to-r from-amber-200/50 via-sky-300/25 to-transparent blur-xs pointer-events-none"
              style={{
                clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 55%)',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
