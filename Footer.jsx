import React from 'react';
import { PhoneCall } from 'lucide-react';
import indianRailwaysLogo from '../assets/images/indian-railways-logo.svg';
import irctcLogo from '../assets/images/irctc-logo.svg';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#080d1a] text-slate-400 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand & Rail Madad info */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logos */}
            <div className="flex items-center gap-3">
              <img
                src={indianRailwaysLogo}
                alt="Indian Railways Official Emblem"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-contain drop-shadow-xs"
              />
              <div className="h-7 w-px bg-slate-700" />
              <img
                src={irctcLogo}
                alt="IRCTC Logo"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain rounded bg-white/10 p-1 border border-slate-700"
              />
              <div className="ml-1">
                <span className="text-base font-extrabold text-white tracking-tight leading-none block">
                  Indian Railways &amp; IRCTC
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 block mt-0.5">
                  NATIONAL EXPRESS TRANSIT
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Official next-generation passenger rail ticketing and logistical corridor platform, engineered for effortless nationwide connectivity across Indian Railways networks.
            </p>

            {/* 24x7 Rail Madad card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 block">
                  24X7 RAIL MADAD GRIEVANCE &amp; HELP
                </span>
                <span className="text-sm font-extrabold text-white block mt-0.5">
                  Dial 139 (Toll Free)
                </span>
              </div>
            </div>
          </div>

          {/* Col 1: Passenger Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Passenger Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#book" className="hover:text-white transition-colors">
                  Book Train Tickets
                </a>
              </li>
              <li>
                <a href="#timetables" className="hover:text-white transition-colors">
                  Timetables &amp; Routes
                </a>
              </li>
              <li>
                <a href="#spot" className="hover:text-white transition-colors">
                  Spot Your Train (GPS)
                </a>
              </li>
              <li>
                <a href="#lounges" className="hover:text-white transition-colors">
                  Executive Lounges
                </a>
              </li>
              <li>
                <a href="#food" className="hover:text-white transition-colors">
                  E-Catering Food Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Enquiries & Status */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Enquiries &amp; Status
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pnr" className="hover:text-white transition-colors">
                  PNR Confirmation Status
                </a>
              </li>
              <li>
                <a href="#berth" className="hover:text-white transition-colors">
                  Seat Availability Matrix
                </a>
              </li>
              <li>
                <a href="#cancellation" className="hover:text-white transition-colors">
                  Cancellation &amp; Refund Rules
                </a>
              </li>
              <li>
                <a href="#fare" className="hover:text-white transition-colors">
                  Dynamic Fare Table
                </a>
              </li>
              <li>
                <a href="#tatkal" className="hover:text-white transition-colors">
                  Tatkal Booking Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Trust */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Governance &amp; Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#charter" className="hover:text-white transition-colors">
                  Citizen's Charter
                </a>
              </li>
              <li>
                <a href="#irctc-terms" className="hover:text-white transition-colors">
                  IRCTC Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Passenger Privacy Policy
                </a>
              </li>
              <li>
                <a href="#cyber" className="hover:text-white transition-colors">
                  Cyber Security Norms
                </a>
              </li>
              <li>
                <a href="#nodal" className="hover:text-white transition-colors">
                  Nodal Officers Directory
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>CRIS / CRISP / IRCTC Certified API Gateway</span>
            <span>•</span>
            <span>ISO 27001:2022 Certified Transit Host</span>
          </div>
          <div>
            &copy; 2025 RailGo National Express. Ministry of Railways, Government of India.
          </div>
        </div>
      </div>
    </footer>
  );
};
