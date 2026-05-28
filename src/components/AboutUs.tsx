import React, { useState } from 'react';
import { Target, Eye, Compass, Shield, Users2, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'about' | 'vision' | 'mission'>('about');

  const missionList = [
    'To provide affordable and quality educational programs in Karnataka',
    'To help industrious students secure respected government jobs and teacherships',
    'To systematically improve student confidence and active exam performance',
    'To create skilled future teachers, ethical engineers, doctors, and officers',
    'To develop disciplined, knowledgeable, and career-ready student communities'
  ];

  return (
    <section id="about" className="py-20 bg-white border-b-4 border-indigo-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info text section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#111030] text-white border-2 border-orange-500 shadow-[2px_2px_0px_0px_#f97316] px-4 py-1.5 rounded-none text-[10px] font-black uppercase tracking-widest">
              <Users2 className="w-3.5 h-3.5 text-orange-500" />
              <span>Chitradurga Premier Institute</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display-title font-black text-indigo-950 tracking-tighter uppercase leading-tight">
              Welcome to Victory Coaching Center
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              Established with a strong vision of empowering students for academic excellence, government careers, teaching professions, and engineering/medical entrance preparation.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-bold">
              We believe that every student has immense potential to succeed when provided with proper concept-based guidance, disciplined learning systems, and expert mentorship. Our institute is structured to provide a positive, inspiring learning atmosphere to excel in Karnataka.
            </p>

            {/* Quick trust bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t-2 border-indigo-950/10">
              <div className="flex gap-2.5 items-start">
                <div className="bg-orange-500 text-indigo-950 border border-[#111030] p-2 rounded-none shrink-0 shadow-[1px_1px_0px_0px_#111030]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-indigo-950 text-xs uppercase tracking-wide">Disciplined Learning</h4>
                  <p className="text-[11px] text-slate-500 font-bold mt-1">Structured daily practice & homework review timetables.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="bg-indigo-950 text-white border border-[#111030] p-2 rounded-none shrink-0 shadow-[1px_1px_0px_0px_#f97316]">
                  <Award className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-black text-indigo-950 text-xs uppercase tracking-wide font-display-title">Expert Mentorship</h4>
                  <p className="text-[11px] text-slate-500 font-bold mt-1">Qualified professors with multiple years of merit success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Vision & Mission cards */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-none border-2 border-indigo-950 p-6 sm:p-8 shadow-[5px_5px_0px_0px_#1e1b4b]">
              
              {/* Internal tabs selector */}
              <div className="flex border-b-2 border-indigo-950/10 pb-4 mb-6 gap-2">
                <button
                  id="tab-btn-about"
                  onClick={() => setActiveTab('about')}
                  className={`flex-1 text-center py-2.5 text-[10px] font-black uppercase tracking-wider transition-all rounded-none cursor-pointer border-2 ${
                    activeTab === 'about'
                      ? 'border-indigo-950 bg-orange-500 text-indigo-950 shadow-[2px_2px_0px_0px_#111030]'
                      : 'border-transparent text-slate-500 hover:text-indigo-950 hover:bg-slate-200/50'
                  }`}
                >
                  Focus Pillars
                </button>
                <button
                  id="tab-btn-vision"
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 text-center py-2.5 text-[10px] font-black uppercase tracking-wider transition-all rounded-none cursor-pointer border-2 ${
                    activeTab === 'vision'
                      ? 'border-indigo-950 bg-orange-500 text-indigo-950 shadow-[2px_2px_0px_0px_#111030]'
                      : 'border-transparent text-slate-500 hover:text-indigo-950 hover:bg-slate-200/50'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  id="tab-btn-mission"
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 text-center py-2.5 text-[10px] font-black uppercase tracking-wider transition-all rounded-none cursor-pointer border-2 ${
                    activeTab === 'mission'
                      ? 'border-indigo-950 bg-orange-500 text-indigo-950 shadow-[2px_2px_0px_0px_#111030]'
                      : 'border-transparent text-slate-500 hover:text-indigo-950 hover:bg-slate-200/50'
                  }`}
                >
                  Our Mission
                </button>
              </div>

              {/* Tab Outputs animation container */}
              <div className="min-h-[240px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 text-xs sm:text-sm text-slate-600 font-semibold"
                    >
                      <h3 className="font-display-title font-black text-indigo-950 text-base flex items-center gap-2 uppercase tracking-wide border-b-2 border-indigo-950/5 pb-2">
                        <Compass className="w-5 h-5 text-orange-500" />
                        <span>Empowering Class performance</span>
                      </h3>
                      <p className="leading-relaxed">
                        Whether students are preparing for CET Engineering, NEET Medical, Graduate Primary School Teacher Recruitment (GPSTR), TET eligibility, or competitive government jobs (FDA, SDA, Police exams), our materials and schedules are structured to help them conquer the competitive curve.
                      </p>
                      <p className="leading-relaxed">
                        We don't believe in passive learning. We deliver rigorous, active revision classes, projection-based visual aids, and interactive assessments that benchmark performance transparently.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'vision' && (
                    <motion.div
                      key="vision"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 text-xs sm:text-sm text-slate-600 font-semibold"
                    >
                      <h3 className="font-display-title font-black text-indigo-950 text-base flex items-center gap-2 uppercase tracking-wide border-b-2 border-indigo-950/5 pb-2">
                        <Eye className="w-5 h-5 text-orange-500" />
                        <span>Our Strategic Vision</span>
                      </h3>
                      <p className="leading-relaxed italic border-l-4 border-orange-500 pl-4 py-1 text-slate-700 font-bold">
                        "To become one of the leading educational coaching centers in Karnataka by providing quality education, career-focused training, and complete guidance for students preparing for academic and competitive examinations."
                      </p>
                      
                      <div className="bg-[#111030] text-slate-100 p-4 rounded-none border border-indigo-950 text-xs mt-4 font-semibold">
                        We strive to make Chitradurga the leading tier-2 district hub for competitive competitive exam selections, giving remote students identical high-quality prep to metropolitan hubs.
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'mission' && (
                    <motion.div
                      key="mission"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-semibold"
                    >
                      <h3 className="font-display-title font-black text-indigo-950 text-base flex items-center gap-2 uppercase tracking-wide border-b-2 border-indigo-950/5 pb-2 mb-4">
                        <Target className="w-5 h-5 text-orange-500" />
                        <span>Our Mission Directives</span>
                      </h3>
                      
                      <ul className="space-y-3">
                        {missionList.map((m, i) => (
                          <li key={i} className="flex gap-3 items-start text-xs text-slate-705">
                            <span className="bg-orange-500 text-indigo-950 border border-indigo-950 w-5 h-5 rounded-none flex items-center justify-center font-black font-mono text-[10px] shrink-0 shadow-[1px_1px_0px_0px_#111030]">
                              {i + 1}
                            </span>
                            <span className="leading-tight font-bold text-slate-700">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
