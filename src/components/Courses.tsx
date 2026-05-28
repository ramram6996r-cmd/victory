import React, { useState } from 'react';
import { COURSES } from '../data';
import { Course } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Check, BookOpen, Clock, Award, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onSelectCourseForEnquiry: (courseId: string) => void;
}

type TabType = 'all' | 'cet' | 'neet' | 'govt' | 'teaching';

export default function Courses({ onSelectCourseForEnquiry }: CoursesProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const tabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'cet', label: 'CET Board' },
    { id: 'neet', label: 'NEET Medical' },
    { id: 'govt', label: 'Government Jobs' },
    { id: 'teaching', label: 'Teaching (TET/GPSTR/HSTR)' }
  ];

  const filteredCourses = activeTab === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeTab);

  const handleEnquiryClick = (courseId: string) => {
    onSelectCourseForEnquiry(courseId);
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'cet': return 'bg-orange-500/10 text-orange-600 border-2 border-orange-500 rounded-none px-2.5 py-0.5 font-black uppercase text-[10px]';
      case 'neet': return 'bg-indigo-50 text-indigo-900 border-2 border-indigo-905 rounded-none px-2.5 py-0.5 font-black uppercase text-[10px]';
      case 'govt': return 'bg-orange-600/10 text-orange-600 border-2 border-orange-600 rounded-none px-2.5 py-0.5 font-black uppercase text-[10px]';
      case 'teaching': return 'bg-indigo-900 text-white border-2 border-indigo-950 rounded-none px-2.5 py-0.5 font-black uppercase text-[10px]';
      default: return 'bg-slate-100 text-slate-800 border-2 border-slate-800 rounded-none px-2.5 py-0.5 font-black uppercase text-[10px]';
    }
  };

  return (
    <section id="courses" className="py-20 bg-slate-50 border-b-4 border-indigo-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-orange-500 text-indigo-950 border-2 border-indigo-950 shadow-[2px_2px_0px_0px_#1e1b4b] px-4 py-1.5 rounded-none text-xs font-black uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Preparation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display-title font-black text-indigo-950 tracking-tighter uppercase">
            Our Professional Training Programs
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-md font-semibold">
            Victory Coaching Center Chitradurga offers carefully structured training systems led by highly experienced professors and recruitment specialists.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto pb-2" id="course-tabs-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-btn-${tab.id}`}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 sm:px-5 py-2.5 rounded-none text-xs sm:text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-indigo-950 border-2 border-indigo-950 shadow-[3px_3px_0px_0px_#1e1b4b]'
                  : 'bg-white text-indigo-950 border-2 border-indigo-950 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="courses-grid-directory">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={course.id}
                id={`course-card-${course.id}`}
                className="bg-white border-2 border-indigo-950 rounded-none shadow-[5px_5px_0px_0px_#1e1b4b] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="tracking-wider">
                      {getCategoryBadgeClass(course.category)}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display-title font-black text-indigo-950 tracking-tight leading-snug uppercase">
                    {course.title}
                  </h3>
                  <p className="text-orange-500 font-black text-xs uppercase tracking-wider mt-1">
                    {course.subtitle}
                  </p>
                  
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed font-semibold">
                    {course.description}
                  </p>
 
                  {/* Target Exams Tags */}
                  {course.targetExams && (
                    <div className="mt-4 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] font-black text-indigo-950 mr-1 uppercase tracking-wider">Targets:</span>
                      {course.targetExams.map((exam, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-950 border border-indigo-200 font-extrabold text-[10px] px-2 py-0.5">
                          {exam}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Subjects pillboxes */}
                  <div className="mt-5 pt-4 border-t-2 border-indigo-950">
                    <p className="text-xs font-black text-indigo-950 uppercase tracking-widest mb-2.5">
                      Subjects/Modules Covered:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.subjects.map((sub, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-950 border-2 border-indigo-950 font-black text-xs px-2.5 py-1">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Program Features Accordion Header */}
                  <div className="mt-6">
                    <button
                      onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                      className="text-xs font-black text-orange-500 hover:text-orange-600 flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                      id={`expand-course-btn-${course.id}`}
                    >
                      <span>{expandedCourse === course.id ? 'Hide Details' : 'View Course Highlights & Benefits'}</span>
                      <span className="text-[10px]">{expandedCourse === course.id ? '▲' : '▼'}</span>
                    </button>

                    {expandedCourse === course.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t-2 border-indigo-950 space-y-4"
                      >
                        <div>
                          <p className="text-xs font-black text-indigo-950 uppercase tracking-wider mb-2">
                            Key Highlights:
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {course.highlights.map((feature, i) => (
                              <li key={i} className="flex gap-2 text-xs text-slate-700 font-bold">
                                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-xs font-black text-indigo-950 uppercase tracking-wider mb-2">
                            Program Benefits:
                          </p>
                          <ul className="space-y-1.5">
                            {course.benefits.map((benefit, i) => (
                              <li key={i} className="flex gap-2 text-xs text-slate-705 font-bold">
                                <Award className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                                <span className="italic">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t-2 border-indigo-950 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Seats limited</p>
                    <p className="text-xs text-emerald-600 font-black uppercase tracking-wider flex items-center gap-1 justify-center sm:justify-start">
                      <span className="inline-block w-2.5 h-2.5 bg-emerald-500 animate-pulse"></span>
                      <span>Enrolling for June Batches</span>
                    </p>
                  </div>
                  
                  <button
                    id={`course-apply-btn-${course.id}`}
                    onClick={() => handleEnquiryClick(course.id)}
                    className="w-full sm:w-auto bg-[#111030] hover:bg-orange-500 hover:text-indigo-950 text-white font-black px-6 py-3 text-xs uppercase tracking-widest border-2 border-indigo-950 shadow-[3px_3px_0px_0px_#f97316] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Direct Active Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Warning notification about TET / GPSTR / HSTR qualification */}
        <div className="mt-12 bg-indigo-950 border-2 border-orange-500 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#f97316] rounded-none flex flex-col md:flex-row items-center justify-between gap-6" id="teacher-recruitment-note">
          <div className="space-y-1 text-center md:text-left">
            <span className="bg-orange-500 text-indigo-950 font-black text-[10px] px-3 py-1.5 uppercase tracking-widest border border-white">Specialised Focus</span>
            <h3 className="font-display-title font-black text-lg sm:text-xl text-white mt-4 uppercase">
              B.Ed or Degree Holder? Secure a teaching post!
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-semibold">
              We provide specific structural training guides and mock evaluations for K-TET, Graduate Primary (GPSTR), and High School Teacher Recruitment (HSTR) according to standard board structures.
            </p>
          </div>
          <button
            onClick={() => handleEnquiryClick('teacher-coaching')}
            className="bg-orange-500 hover:bg-orange-600 text-indigo-950 text-xs font-black px-6 py-4 border-2 border-white shadow-[3px_3px_0px_0px_#312e81] uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            Explore Teacher Coaching
          </button>
        </div>

      </div>
    </section>
  );
}
