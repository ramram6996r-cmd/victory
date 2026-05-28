import React from 'react';
import { GraduationCap, Facebook, Youtube, Send, ChevronRight, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { label: 'Academic Courses', id: 'courses' },
    { label: 'Scholarships & Waiver', id: 'scholarship' },
    { label: 'Enquiry Form Desk', id: 'enquiry' },
    { label: 'About Our Vision', id: 'about' },
    { label: 'Contact Chitradurga Office', id: 'contact' }
  ];

  return (
    <footer id="main-footer" className="bg-[#111030] border-t-4 border-indigo-950 text-white pt-16 pb-8 text-xs relative z-10">
      
      {/* Decorative Grid BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b-2 border-indigo-950/20">
          
          {/* Logo and brief brand text */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-1.5 border border-white rounded-none flex items-center justify-center shadow-[1px_1px_0px_0px_#111030]">
                <GraduationCap className="h-5 w-5 text-indigo-950" />
              </div>
              <span className="font-display-title font-black text-base tracking-tight uppercase">
                VICTORY COACHING CENTER
              </span>
            </div>

            <p className="text-slate-400 text-[11px] leading-relaxed max-w-sm font-semibold">
              Victory Coaching Center is committed to providing quality education, competitive exam preparation, coding education, and professional career guidance for students across Karnataka.
            </p>

            <div className="bg-[#111030] border-2 border-indigo-805 p-3.5 rounded-none text-slate-305 shadow-[2px_2px_0px_0px_#f97316]">
              <p className="font-black text-orange-500 text-[11px] tracking-wider uppercase font-display-title">Core Philosophy</p>
              <p className="text-[11px] font-sans mt-1 leading-relaxed italic text-slate-205 font-semibold">
                "Build Your Future with Knowledge, Discipline, and Success."
              </p>
            </div>
          </div>

          {/* Quick link directory column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-[#9391bd] uppercase tracking-widest font-display-title font-bold">Navigation Directory</h4>
            
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="group text-slate-300 hover:text-orange-500 font-bold transition-colors flex items-center gap-1 text-left focus:outline-none cursor-pointer uppercase tracking-wider text-[11px]"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-805 group-hover:text-orange-500 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Support Hotlines */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black text-[#9391bd] uppercase tracking-widest font-display-title font-bold">Admission Hotlines</h4>
            
            <div className="space-y-2.5 text-[11px] font-semibold text-slate-300">
              <p className="leading-relaxed">
                Contact our coordinators for instant enrollment schedules and computer laboratory visits:
              </p>

              <div className="space-y-1.5 font-bold">
                <p className="flex justify-between hover:text-white transition-colors">
                  <span className="text-slate-400">Primary Support:</span>
                  <a href="tel:9611441997" className="font-black font-mono text-emerald-400">961144 1997</a>
                </p>
                <p className="flex justify-between hover:text-white transition-colors">
                  <span className="text-slate-400">Teacher Eligibility Desk:</span>
                  <a href="tel:9591111676" className="font-black font-mono text-orange-500">959111 1676</a>
                </p>
                <p className="flex justify-between hover:text-white transition-colors">
                  <span className="text-slate-400">Police & Govt Jobs:</span>
                  <a href="tel:7795592280" className="font-black font-mono text-orange-500">779559 2280</a>
                </p>
              </div>

              <div className="bg-indigo-950/60 p-2.5 border-2 border-indigo-900 rounded-none text-[10px] text-[#9391bd] flex items-center gap-1.5 justify-center uppercase font-black tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span>Physical Office Timings: 8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] sm:text-xs">
          <p className="text-center sm:text-left select-none font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} Victory Coaching Center | All Rights Reserved.
          </p>
          
          <div className="flex gap-4">
            <span className="text-slate-550 font-bold uppercase tracking-wider">Opposite Appaji Parisara Building, Chitradurga</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
