/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import ScholarshipCalculator from './components/ScholarshipCalculator';
import EnquiryForm from './components/EnquiryForm';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { TESTIMONIALS } from './data';
import { 
  Check, 
  Tv, 
  Lightbulb, 
  Building, 
  Heart, 
  Sparkles, 
  UserSquare2, 
  BookOpenText,
  BookmarkCheck,
  Building2,
  CalendarDays,
  FileCheck2,
  PhoneCall
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Unified integration states
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>('');
  const [calculatedDiscountForForm, setCalculatedDiscountForForm] = useState<number>(0);
  const [scoreForForm, setScoreForForm] = useState<number>(0);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navigation header
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Callback to link a course choice to admission desk
  const handleCourseSelectForEnquiry = (courseId: string) => {
    setSelectedCourseForForm(courseId);
    handleNavigation('enquiry');
  };

  // Callback to link scholarship calculator coupon output to form
  const handleApplyScholarshipToForm = (discount: number, score: number) => {
    setCalculatedDiscountForForm(discount);
    setScoreForForm(score);
    handleNavigation('enquiry');
  };

  const clearFormPrefills = () => {
    setSelectedCourseForForm('');
    setCalculatedDiscountForForm(0);
    setScoreForForm(0);
  };

  // "Why Choose Us" Bento Grid Elements
  const keyBenefits = [
    {
      icon: UserSquare2,
      title: 'Experienced & Qualified Faculty',
      desc: 'Learn directly from seasoned subject professors and competitive exam advisors.',
      color: 'bg-blue-50 text-blue-600 border-blue-105'
    },
    {
      icon: BookmarkCheck,
      title: 'Daily Practice & Assignments',
      desc: 'Regular class worksheets, question banks, and dedicated home assignments coaching.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: Heart,
      title: 'Individual Attention & Care',
      desc: 'Small batch sizes allowing personal diagnostic reviews and custom guidance sheets.',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      icon: FileCheck2,
      title: 'Revision & Test Series',
      desc: 'Complete mock assessment modules and revision series right before final exams.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      icon: Lightbulb,
      title: 'Exam-focused Teaching',
      desc: 'Excellent shortcuts, speed techniques, and time management strategies built into sessions.',
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      icon: Building2,
      title: 'Library & Computer Labs',
      desc: 'Dedicated silent reading areas and digital nodes for test simulations and study books.',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      icon: Tv,
      title: 'Projector Classrooms',
      desc: 'Smart conceptual visualizers to understand math and science modules perfectly.',
      color: 'bg-indigo-50 text-indigo-650 border-indigo-100'
    },
    {
      icon: Sparkles,
      title: 'Scholarship waivers',
      desc: 'Generous merit waiver structure of up to 50% discount for scoring students of Chitradurga.',
      color: 'bg-yellow-50 text-yellow-700 border-yellow-100'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200 antialiased selection:bg-amber-400 selection:text-slate-900 bg-slate-50">
      
      {/* Sticky Top Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Floating Admissions Bar */}
      <div className="bg-amber-450 border-b border-amber-500 py-1.5 px-4 text-center text-[11px] sm:text-xs font-bold text-slate-950 flex items-center justify-center gap-1.5 z-40 relative mt-[26px]">
        <span>🚀 Admissions Open for June 2026 batches! Contact: </span>
        <a href="tel:9611441997" className="underline hover:text-sky-955 tracking-wide">961144 1997</a>
        <span>or</span>
        <a href="tel:9591111676" className="underline hover:text-sky-955 tracking-wide">959111 1676</a>
      </div>

      <main className="flex-grow">
        
        {/* Dynamic Navigable Sections */}
        <section id="home">
          <Hero onNavigate={handleNavigation} />
          <Stats />
        </section>

        {/* Why Choose Us - Bento Grid Panel */}
        <section className="py-20 bg-white" id="why-choose-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="bg-sky-100 text-sky-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                Our Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-3">
                Why Choose Victory Coaching?
              </h2>
              <p className="text-slate-500 mt-3 text-sm sm:text-md">
                We believe in complete academic transformation. Our holistic system ensures students succeed in competitive environments perfectly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="bento-benefits-grid">
              {keyBenefits.map((benefit, i) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={i}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-150 relative group hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className={`p-2.5 rounded-xl inline-block mb-4 border ${benefit.color}`}>
                      <IconComponent className="w-5 h-5 shrink-0" />
                    </div>
                    
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-xs text-slate-550 mt-1.5 leading-relaxed font-semibold">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* About Section */}
        <AboutUs />

        {/* Course Directory Section */}
        <Courses onSelectCourseForEnquiry={handleCourseSelectForEnquiry} />

        {/* Scholarship Discount Section */}
        <ScholarshipCalculator onApplyForEnquiryWithDiscount={handleApplyScholarshipToForm} />

        {/* Admission Enquiry Form Section */}
        <EnquiryForm 
          preFilledCourseId={selectedCourseForForm}
          preFilledDiscount={calculatedDiscountForForm}
          preFilledScore={scoreForForm}
          onClearPreFills={clearFormPrefills}
        />

        {/* True Testimonial Gallery Carousel */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="testimonials">
          <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Proof of Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-3">
                Victory Success Chronicles
              </h2>
              <p className="text-slate-300 text-sm mt-3">
                Read direct feedbacks and achievements from our graduates who successfully qualified for government posts & medical entries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="student-testimonials-grid">
              {TESTIMONIALS.map((test) => (
                <div 
                  key={test.id}
                  id={`testimonial-card-${test.id}`}
                  className="bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-amber-500/20 transition-all duration-300 relative group"
                >
                  <div className="space-y-4">
                    <span className="text-amber-400 text-3xl font-serif">“</span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold italic">
                      {test.text}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-900 mt-6 flex justify-between items-end">
                    <div>
                      <h4 className="font-display font-extrabold text-slate-150 text-xs sm:text-sm">{test.name}</h4>
                      <p className="text-[10px] text-sky-400 font-bold mt-0.5">{test.achievement}</p>
                    </div>
                    {test.badge && (
                      <span className="bg-slate-900 text-slate-400 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide border border-slate-800">
                        {test.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA directly related to enrollment after seeing success stories */}
            <div className="text-center pt-12">
              <p className="text-xs text-slate-400 font-medium">Ready to write your own success story with us?</p>
              <button
                onClick={() => handleNavigation('enquiry')}
                className="mt-3.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-extrabold text-xs px-5 py-3 rounded-lg transition-transform hover:-translate-y-0.5"
              >
                Start Your Training Pathway Today
              </button>
            </div>

          </div>
        </section>

        {/* Interactive Contacts/Address Section & FAQs */}
        <ContactUs />

      </main>

      {/* Corporate Slogan & Navigation Footer */}
      <Footer onNavigate={handleNavigation} />

    </div>
  );
}
