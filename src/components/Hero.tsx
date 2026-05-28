import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BookOpen, Clock, Users, ArrowRight, Award, Trophy, GraduationCap } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const highlights = [
    { icon: Trophy, text: 'Top Selection Rate' },
    { icon: Users, text: 'Experienced Faculty' },
    { icon: ShieldCheck, text: 'Individual Student Attention' },
    { icon: BookOpen, text: 'Exam-focused Teaching' }
  ];

  return (
    <section id="hero-section" className="relative bg-[#111030] text-white pt-32 pb-20 overflow-hidden border-b-4 border-indigo-950">
      {/* Decorative BG Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35"></div>
      
      {/* Accent glow elements */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/8 -right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Header Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-500 text-indigo-950 font-black px-4 py-1.5 border-2 border-white shadow-[2px_2px_0px_0px_#312e81] text-xs tracking-widest uppercase shadow-inner"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-950"></span>
              </span>
              <span>Admissions Open 2026-27</span>
            </motion.div>
 
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="hero-main-title" 
              className="text-4.5xl sm:text-5.5xl lg:text-6.5xl font-display-title font-black text-white tracking-tighter leading-none"
            >
              SHAPE YOUR FUTURE <br />WITH <span className="text-orange-500 thick-underline uppercase">Victory Coaching</span>
            </motion.h1>
 
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 text-base sm:text-lg max-w-xl leading-relaxed font-medium"
            >
              Victory Coaching Center is one of the trusted coaching and training institutes in <span className="text-orange-500 font-extrabold underline decoration-white underline-offset-4">Chitradurga</span> dedicated to helping students achieve success in competitive exams, teacher recruitment exams, government job preparation, and professional entrances.
            </motion.p>
 
            {/* Micro Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 text-xs sm:text-sm font-black"
            >
              <span className="bg-indigo-950 border-2 border-indigo-900 px-3 py-1.5 text-white tracking-wider uppercase">CET & NEET</span>
              <span className="bg-indigo-950 border-2 border-orange-500 px-3 py-1.5 text-orange-500 tracking-wider uppercase">Teacher Eligibility (TET/GPSTR)</span>
              <span className="bg-indigo-950 border-2 border-indigo-900 px-3 py-1.5 text-white tracking-wider uppercase">Government Jobs (FDA/SDA)</span>
            </motion.div>
 
            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                id="hero-enquiry-cta"
                onClick={() => onNavigate('enquiry')}
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-indigo-950 font-black px-8 py-4 border-2 border-white shadow-[4px_4px_0px_0px_#1e1b4b] text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enroll / Enquiry Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-indigo-950" />
              </button>
              <button
                id="hero-scholarship-cta"
                onClick={() => onNavigate('scholarship')}
                className="bg-indigo-950 hover:bg-indigo-900 active:bg-indigo-950 border-2 border-indigo-800 text-slate-100 font-black px-6 py-4 shadow-[4px_4px_0px_0px_#f97316] text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
              >
                <Award className="w-5 h-5 text-orange-500" />
                <span>Scholarship Calculator</span>
              </button>
            </motion.div>
 
            {/* Quick trust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t-2 border-indigo-950 pt-8 mt-6"
            >
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <IconComponent className="w-4 h-4 text-orange-500 shrink-0 font-black" />
                    <span className="text-xs uppercase font-extrabold tracking-wider">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
 
          {/* Side Card Panel with highlight notice */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-indigo-950 border-2 border-orange-500 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#f97316] relative overflow-hidden group"
              id="hero-side-card"
            >
              <div className="absolute top-0 right-0 bg-orange-500 text-indigo-950 text-[10px] font-black uppercase px-3 py-1.5 tracking-wider shadow-md border-b-2 border-l-2 border-white">
                Chitradurga Hub
              </div>
              <h3 className="font-display-title font-black text-lg sm:text-xl text-white mb-2 flex items-center gap-2 uppercase tracking-wide">
                <GraduationCap className="h-5 w-5 text-orange-500" />
                <span>Scholarships Offer</span>
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed font-medium">
                Save on your tuition fees! We recognize and reward hard work and academic performance. Show us your mark sheets.
              </p>
 
              <div className="space-y-3.5" id="mini-scholarship-tierlist">
                <div className="flex justify-between items-center bg-indigo-900/60 border-2 border-indigo-850 p-3 hover:border-orange-500 transition-all duration-200">
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-wider">Score above 90%</p>
                    <p className="text-[11px] text-slate-300 font-medium">Class or Board Examination</p>
                  </div>
                  <div className="bg-orange-500 text-indigo-950 font-black px-3.5 py-1 text-sm tracking-widest uppercase border border-white shadow">
                    50% Off
                  </div>
                </div>
 
                <div className="flex justify-between items-center bg-indigo-900/60 border-2 border-indigo-850 p-3 hover:border-orange-500 transition-all duration-200">
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-wider">Score above 80%</p>
                    <p className="text-[11px] text-slate-300 font-medium font-medium">Class or Board Examination</p>
                  </div>
                  <div className="bg-white text-indigo-950 font-black px-3.5 py-1 text-sm tracking-widest uppercase border border-indigo-950 shadow animate-pulse">
                    25% Off
                  </div>
                </div>
 
                <div className="flex justify-between items-center bg-indigo-900/60 border-2 border-indigo-850 p-3 hover:border-orange-500 transition-all duration-200">
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-wider">Score above 70%</p>
                    <p className="text-[11px] text-slate-300 font-medium">Class or Board Examination</p>
                  </div>
                  <div className="bg-indigo-950 text-orange-500 border-2 border-orange-500 font-black px-3.5 py-1 text-sm tracking-widest uppercase shadow">
                    8% Off
                  </div>
                </div>
              </div>
 
              <div className="mt-6 pt-5 border-t-2 border-indigo-900 flex flex-col items-center sm:flex-row gap-3 justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Call Direct Desk</p>
                  <p className="text-base font-black text-orange-500 hover:text-white transition-colors">
                    <a href="tel:9611441997">961144 1997</a>
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('scholarship')}
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-indigo-950 text-xs font-black px-4 py-2.5 tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border border-white cursor-pointer"
                >
                  <span>Open Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-950" />
                </button>
              </div>
            </motion.div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
