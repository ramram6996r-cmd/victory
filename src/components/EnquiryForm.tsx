import React, { useState, useEffect } from 'react';
import { COURSES, BATCH_TIMINGS } from '../data';
import { EnquirySubmission } from '../types';
import { Bookmark, Send, Sparkles, CheckCircle2, History, RotateCcw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EnquiryFormProps {
  preFilledCourseId: string;
  preFilledDiscount: number;
  preFilledScore: number;
  onClearPreFills: () => void;
}

export default function EnquiryForm({ preFilledCourseId, preFilledDiscount, preFilledScore, onClearPreFills }: EnquiryFormProps) {
  // Setup inputs
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [batchPreference, setBatchPreference] = useState<'morning' | 'evening' | 'weekend' | 'revision'>('morning');
  const [scorePercentage, setScorePercentage] = useState<string>('');
  const [notes, setNotes] = useState('');

  // Success state
  const [isSuccess, setIsSuccess] = useState(false);
  const [latestSubmission, setLatestSubmission] = useState<EnquirySubmission | null>(null);
  
  // Local list of submissions
  const [localSubmissions, setLocalSubmissions] = useState<EnquirySubmission[]>([]);

  // Monitor pre-fills from parents
  useEffect(() => {
    if (preFilledCourseId) {
      setCourseId(preFilledCourseId);
    }
  }, [preFilledCourseId]);

  useEffect(() => {
    if (preFilledScore > 0) {
      setScorePercentage(preFilledScore.toString());
    }
  }, [preFilledScore]);

  // Load submissions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('victory_enquiries');
    if (saved) {
      try {
        setLocalSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse local inquiries', e);
      }
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim() || !courseId) {
      return;
    }

    const numericScore = scorePercentage ? parseFloat(scorePercentage) : undefined;
    let computedDiscount = 0;
    if (numericScore) {
      if (numericScore >= 90) computedDiscount = 50;
      else if (numericScore >= 80) computedDiscount = 25;
      else if (numericScore >= 70) computedDiscount = 8;
    }

    // Override with pre-filled discount if applicable
    if (preFilledDiscount > 0 && numericScore === preFilledScore) {
      computedDiscount = preFilledDiscount;
    }

    const newSubmission: EnquirySubmission = {
      id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      studentName,
      parentName: parentName || undefined,
      phone,
      email: email || undefined,
      courseId,
      batchPreference,
      percentageScored: numericScore,
      calculatedDiscount: computedDiscount > 0 ? computedDiscount : undefined,
      isCustomDiscountEligible: computedDiscount > 0,
      notes: notes || undefined,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    };

    const updated = [newSubmission, ...localSubmissions];
    setLocalSubmissions(updated);
    localStorage.setItem('victory_enquiries', JSON.stringify(updated));

    // Show success dialog
    setLatestSubmission(newSubmission);
    setIsSuccess(true);

    // Reset fields except phone/name possibly for convenience, or fully reset
    setStudentName('');
    setParentName('');
    setPhone('');
    setEmail('');
    setScorePercentage('');
    setNotes('');
    onClearPreFills();
  };

  const clearSubmissions = () => {
    localStorage.removeItem('victory_enquiries');
    setLocalSubmissions([]);
  };

  const getCourseTitle = (id: string) => {
    return COURSES.find(c => c.id === id)?.title || id;
  };

  return (
    <section id="enquiry" className="py-20 bg-white border-b-4 border-indigo-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-7 bg-slate-50 border-2 border-indigo-950 p-6 sm:p-10 rounded-none shadow-[5px_5px_0px_0px_#1e1b4b]">
            
            <div className="mb-8">
              <span className="bg-orange-500 text-indigo-950 text-[10px] font-black px-3 py-1 border border-white shadow-[1px_1px_0px_0px_#1e1b4b] uppercase tracking-wider inline-block">
                Enrollment Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-display-title font-black text-indigo-950 tracking-tighter uppercase mt-4">
                Student Admission Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-semibold">
                Secure your seat reservation counseling. Submit your details below, and our Chitradurga office coordinators will phone you within 2 business hours.
              </p>
            </div>

            {/* Notification alert for pre-fills */}
            {preFilledCourseId && (
              <div className="bg-orange-500/10 border-2 border-orange-500 text-indigo-950 p-3.5 rounded-none text-xs mb-6 flex items-center justify-between gap-3 animate-pulse">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="font-bold">
                    Course <strong className="text-[#111030]">{getCourseTitle(preFilledCourseId)}</strong> and Scholarship pre-fills have been successfully applied!
                  </span>
                </div>
                <button 
                  onClick={onClearPreFills}
                  className="text-slate-400 hover:text-slate-700 font-black transition-all"
                  title="Clear applied course filters"
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5" id="admission-enquiry-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label id="lbl-student-name" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                    Student Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sanjeev Gowda"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                  />
                </div>

                <div>
                  <label id="lbl-parent-name" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nagaraj Gowda"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label id="lbl-phone" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                    Mobile Number (WhatsApp) <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-mono font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                  />
                </div>

                <div>
                  <label id="lbl-email" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label id="lbl-course" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                    Select Preferred Course <span className="text-orange-500">*</span>
                  </label>
                  <select
                    required
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner h-[48px]"
                  >
                    <option value="">-- Choose Program --</option>
                    {COURSES.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label id="lbl-batch" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                    Batch Priority Preferred
                  </label>
                  <select
                    value={batchPreference}
                    onChange={(e) => setBatchPreference(e.target.value as any)}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner h-[48px]"
                  >
                    {BATCH_TIMINGS.map(batch => (
                      <option key={batch.id} value={batch.id}>
                        {batch.label} ({batch.time})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label id="lbl-score" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                  Your Score / Board Exam % (Calculates waiver discount)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="e.g. 88 (Grants discounts: 50%, 25%, 8%)"
                    value={scorePercentage}
                    onChange={(e) => setScorePercentage(e.target.value)}
                    className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                  />
                  {scorePercentage && parseFloat(scorePercentage) >= 70 && (
                    <span className="absolute right-3 top-3.5 bg-orange-500 text-indigo-950 font-black text-[10px] px-2 py-1 tracking-wider uppercase border border-indigo-950 shadow">
                      ✔ {parseFloat(scorePercentage) >= 90 ? '50% Waiver' : parseFloat(scorePercentage) >= 80 ? '25% Waiver' : '8% Waiver'} Verified!
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label id="lbl-notes" className="block text-xs font-black text-indigo-950 uppercase tracking-widest mb-2">
                  Questions / Message / Remarks
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter any queries regarding physical classes, hostel supports, fees installment policies, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border-2 border-indigo-950 rounded-none px-4 py-3 text-xs sm:text-sm text-[#111030] font-bold focus:outline-none focus:border-orange-500 resize-none shadow-inner"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="enquiry-form-submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-750 text-indigo-950 font-black py-4 border-2 border-indigo-950 shadow-[4px_4px_0px_0px_#111030] text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Send className="w-4 h-4 text-indigo-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Submit Admission Counseling Inquiry</span>
                </button>
              </div>

            </form>
          </div>

          {/* Submissions Sidebar Logs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Success Popup inside section */}
            <AnimatePresence>
              {isSuccess && latestSubmission && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-orange-500/10 border-2 border-orange-500 text-[#111030] p-6 rounded-none shadow-[5px_5px_0px_0px_#111030] relative"
                  id="enquiry-success-receipt"
                >
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="absolute top-3 right-3 text-indigo-950 hover:text-red-500 font-extrabold cursor-pointer"
                  >
                    ✕
                  </button>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-orange-500 shrink-0" />
                    <div>
                      <h4 className="text-base font-black uppercase tracking-wider text-indigo-950">Inquiry Logged</h4>
                      <p className="text-[11px] font-mono font-bold text-slate-400">{latestSubmission.id}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 mt-3 leading-relaxed font-bold">
                    Thank you, <strong className="text-indigo-950">{latestSubmission.studentName}</strong>. Your counseling ticket has been generated. Our Chitradurga branch representative/professor will phone you shortly at <strong className="text-orange-600 font-mono">{latestSubmission.phone}</strong>.
                  </p>

                  <div className="mt-4 pt-3 border-t-2 border-indigo-950/10 space-y-1.5 text-xs text-slate-700">
                    <p className="flex justify-between">
                      <span className="text-slate-400">Course Selected:</span>
                      <span className="font-black text-indigo-950 truncate max-w-[180px] uppercase">
                        {getCourseTitle(latestSubmission.courseId)}
                      </span>
                    </p>
                    {latestSubmission.calculatedDiscount && (
                      <p className="flex justify-between items-center text-orange-600 font-black bg-orange-500/10 px-2 py-1 rounded">
                        <span>Merit Discount Applied:</span>
                        <span>{latestSubmission.calculatedDiscount}% Off Tuition!</span>
                      </p>
                    )}
                    <p className="flex justify-between">
                      <span className="text-slate-400">Preferred Batch:</span>
                      <span className="font-black text-indigo-950 uppercase">{latestSubmission.batchPreference} Batch</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Local Storage persistence directory list */}
            <div className="bg-slate-50 border-2 border-indigo-950 p-6 rounded-none shadow-[5px_5px_0px_0px_#1e1b4b]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-black text-indigo-950 uppercase tracking-widest flex items-center gap-2">
                  <History className="w-4 h-4 text-orange-500" />
                  <span>My Enquiries ({localSubmissions.length})</span>
                </h3>
                {localSubmissions.length > 0 && (
                  <button
                    onClick={clearSubmissions}
                    className="text-[10px] text-slate-400 hover:text-[#e11d48] font-black uppercase tracking-wider flex items-center gap-1.5 focus:outline-none cursor-pointer"
                    title="Clear history from local cache"
                  >
                    <RotateCcw className="w-3" />
                    <span>Reset List</span>
                  </button>
                )}
              </div>

              {localSubmissions.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs space-y-3">
                  <Bookmark className="w-8 h-8 text-[#9391bd] mx-auto opacity-70" />
                  <p className="font-black uppercase tracking-wider text-indigo-950">No enquiries submitted yet</p>
                  <p className="text-[11px] max-w-xs mx-auto text-slate-500 font-bold leading-relaxed">
                    Any enquiries you submit will be saved and displayed here in real time to simulate counselor queues.
                  </p>
                </div>
              ) : (
                <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-1" id="local-submission-history-list">
                  {localSubmissions.map((sub) => (
                    <div 
                      key={sub.id} 
                      className="bg-white border-2 border-indigo-950 p-3 rounded-none text-xs space-y-1.5 shadow-[2px_2px_0px_0px_#1e1b4b] hover:border-orange-500 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-black text-indigo-950 uppercase">{sub.studentName}</span>
                        <span className="text-[9px] font-mono font-bold text-slate-400 shrink-0">{sub.submittedAt}</span>
                      </div>
                      
                      <p className="text-[11px] text-slate-500 font-bold">
                        Program: <strong className="text-indigo-950">{getCourseTitle(sub.courseId)}</strong>
                      </p>

                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider">
                        <span className="capitalize bg-indigo-50 border border-indigo-150 text-indigo-950 px-2 py-0.5">
                          {sub.batchPreference} Session
                        </span>
                        {sub.calculatedDiscount ? (
                          <span className="text-orange-500 bg-orange-500/10 border border-orange-500 px-2 py-0.5">
                            {sub.calculatedDiscount}% Scholarship
                          </span>
                        ) : (
                          <span className="text-slate-400">Regular Tier</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fast help box */}
            <div className="bg-indigo-950 border-2 border-orange-500 p-6 rounded-none text-white relative overflow-hidden shadow-[5px_5px_0px_0px_#f97316]">
              <p className="text-xs font-black text-orange-500 uppercase tracking-widest">Office Support Desk</p>
              <h4 className="font-display-title font-black text-lg mt-2 uppercase">Physical Registrations</h4>
              <p className="text-xs text-indigo-200 mt-2 leading-relaxed font-semibold">
                Walk in directly with original board marks lists to Opposite Appaji Parisara Building on Stadium Road, Chitradurga. Office hours: <strong className="text-white">Monday - Saturday (8:00 AM – 8:00 PM)</strong>.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
