import React, { useState } from 'react';
import { SCHOLARSHIPS } from '../data';
import { Award, Trophy, Ticket, CheckCircle, Calculator, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScholarshipCalculatorProps {
  onApplyForEnquiryWithDiscount: (discount: number, score: number) => void;
}

export default function ScholarshipCalculator({ onApplyForEnquiryWithDiscount }: ScholarshipCalculatorProps) {
  const [score, setScore] = useState<number>(85);
  const [name, setName] = useState<string>('');
  const [generatedVoucher, setGeneratedVoucher] = useState<{
    code: string;
    studentName: string;
    discountPercent: number;
    scorePercent: number;
    timestamp: string;
  } | null>(null);

  // Calculate discount based on user's score input
  const getDiscountInfo = (percentage: number) => {
    if (percentage >= 90) {
      return { percent: 50, color: 'bg-amber-400 text-slate-950', badge: 'Super Scholar Tier 🌟' };
    } else if (percentage >= 80) {
      return { percent: 25, color: 'bg-sky-500 text-white', badge: 'Merit List Tier 🏆' };
    } else if (percentage >= 70) {
      return { percent: 8, color: 'bg-indigo-600 text-white', badge: 'Incentive Achievement Tier 👍' };
    } else {
      return { percent: 0, color: 'bg-slate-300 text-slate-800', badge: 'Standard General Enrollment' };
    }
  };

  const discountInfo = getDiscountInfo(score);

  const handleGenerateVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const codeSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const mockCode = `VCTY-${discountInfo.percent}-${codeSuffix}`;

    setGeneratedVoucher({
      code: mockCode,
      studentName: name,
      discountPercent: discountInfo.percent,
      scorePercent: score,
      timestamp: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  };

  const handleApplyVoucherToForm = () => {
    if (generatedVoucher) {
      onApplyForEnquiryWithDiscount(generatedVoucher.discountPercent, generatedVoucher.scorePercent);
    }
  };

  return (
    <section id="scholarship" className="py-20 bg-[#111030] text-white relative overflow-hidden border-b-4 border-indigo-950">
      {/* Decorative BG Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-orange-500 text-indigo-950 border-2 border-indigo-950 shadow-[2px_2px_0px_0px_#1e1b4b] px-4 py-1.5 rounded-none text-xs font-black uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-indigo-950" />
            <span>Merit Incentives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display-title font-black text-white tracking-tighter uppercase">
            Scholarship & Merit Discount Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-md mt-3 leading-relaxed font-semibold">
            Enter your class scoring or Board Exam percentage below to instantly find your eligible fee discount tier and generate a verified tuition waiver certification!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Calculator Sidebar */}
          <div className="lg:col-span-6 bg-indigo-950 border-2 border-orange-500 p-6 sm:p-8 rounded-none shadow-[6px_6px_0px_0px_#f97316]">
            <h3 className="text-lg sm:text-xl font-display-title font-black text-white mb-6 flex items-center gap-2 uppercase tracking-wide">
              <Calculator className="w-5 h-5 text-orange-500" />
              <span>Perform Qualification Calculation</span>
            </h3>

            <div className="space-y-6">
              {/* Score slider control */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label id="score-slider-label" className="text-xs sm:text-sm font-black text-slate-300 uppercase tracking-wider">
                    What was your final score / board percentage?
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-orange-500 font-mono">
                    {score}%
                  </span>
                </div>
                
                <input
                  type="range"
                  id="score-percentage-slider"
                  min="50"
                  max="100"
                  value={score}
                  onChange={(e) => {
                    setScore(parseInt(e.target.value));
                    setGeneratedVoucher(null); // Reset generated voucher on change so they re-calculate
                  }}
                  className="w-full h-2 bg-indigo-900 rounded-none appearance-none cursor-pointer accent-orange-500 border border-white"
                />
                
                <div className="flex justify-between text-[10px] text-slate-400 font-black mt-2 font-mono uppercase tracking-wider">
                  <span>50%</span>
                  <span>70% (8% Off)</span>
                  <span>80% (25% Off)</span>
                  <span>90% (50% Off)</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Dynamic Discount Result Board */}
              <div className="bg-[#111030] border-2 border-indigo-800 p-5 rounded-none text-center relative overflow-hidden shadow-inner">
                <div className="absolute top-2 left-2 flex items-center gap-1 opacity-10">
                  <Percent className="w-8 h-8 text-white" />
                </div>
                
                <p className="text-[10px] uppercase font-black tracking-widest text-[#9391bd]">
                  Calculated Scholarship Tier
                </p>
                <div className="my-2.5">
                  <span className={`inline-block text-xs font-black px-3.5 py-1 uppercase tracking-wider border border-white ${discountInfo.percent > 0 ? 'bg-orange-500 text-indigo-950 shadow-[1px_1px_0px_0px_#fff]' : 'bg-slate-300 text-slate-800'}`}>
                    {discountInfo.badge}
                  </span>
                </div>

                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-5xl font-display-title font-black text-white leading-none">
                    {discountInfo.percent}%
                  </span>
                  <span className="text-sm font-black uppercase tracking-wider text-orange-500 select-none">Fee Discount</span>
                </div>

                <p className="text-xs text-slate-300 mt-2.5 max-w-sm mx-auto leading-relaxed font-semibold">
                  {score >= 70 
                    ? `Congratulations! Scores above ${score >= 90 ? '90%' : score >= 80 ? '80%' : '70%'} qualify you for a guaranteed ${discountInfo.percent}% coaching fee discount.`
                    : 'To build future competitive success, enrollment is fully open with flexible affordable payment installment supports!'}
                </p>
              </div>

              {/* Form to bind Name & generate Voucher */}
              {discountInfo.percent > 0 && (
                <form onSubmit={handleGenerateVoucher} className="space-y-4 pt-4 border-t-2 border-indigo-900">
                  <div>
                    <label id="calculator-name-label" className="block text-xs font-black text-[#9391bd] uppercase tracking-wider mb-2">
                      Enter Student Full Name to Register Waiver:
                    </label>
                    <input
                      type="text"
                      id="calculator-student-name"
                      placeholder="e.g. Sanjeev Gowda"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#111030] border-2 border-indigo-850 rounded-none px-4 py-3 placeholder-slate-500 text-sm text-white font-bold focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    id="generate-voucher-btn"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-indigo-950 font-black py-3.5 border-2 border-white shadow-[3px_3px_0px_0px_#312e81] text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Ticket className="w-4 h-4 text-indigo-950" />
                    <span>Generate Admission Discount Voucher</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Render Generated Voucher Output Card */}
          <div className="lg:col-span-6 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {generatedVoucher ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white text-slate-900 rounded-none shadow-[6px_6px_0px_0px_#f97316] overflow-hidden border-2 border-indigo-950 flex flex-col justify-between"
                  id="scholarship-voucher-card"
                >
                  {/* Voucher Header Accent */}
                  <div className="bg-[#111030] text-white px-6 py-5 flex items-center justify-between border-b-2 border-orange-500">
                    <div>
                      <span className="text-[9px] font-black uppercase bg-orange-500 text-indigo-950 border border-white px-2 py-0.5 tracking-wider">
                        VICTORY SCHOLARSHIP
                      </span>
                      <h4 className="font-display-title font-black text-md sm:text-lg mt-1 tracking-tight uppercase">Tuitional Waiver Voucher</h4>
                    </div>
                    <Trophy className="w-8 h-8 text-orange-500 hidden sm:block" />
                  </div>

                  {/* Voucher Ticket Center details */}
                  <div className="p-6 sm:p-8 space-y-5 text-sm font-semibold">
                    <div className="flex justify-between items-start border-b-2 border-indigo-950/10 pb-3">
                      <div>
                        <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Awarded To</p>
                        <p className="text-base font-black text-indigo-950 uppercase">{generatedVoucher.studentName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Score Achieved</p>
                        <p className="text-base font-black text-orange-500 font-mono">{generatedVoucher.scorePercent}% Score</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 my-4 bg-slate-50 p-4 border-2 border-indigo-950 rounded-none shadow-[3px_3px_0px_0px_#111030]">
                      <div className="bg-orange-500 text-indigo-950 font-black text-2xl sm:text-3xl px-3.5 py-2 border border-indigo-950 flex items-center justify-center font-mono shadow-[1px_1px_0px_0px_#fff]">
                        {generatedVoucher.discountPercent}%
                      </div>
                      <div>
                        <p className="font-black uppercase tracking-wide text-[#111030] text-xs">Tuational Discount Granted</p>
                        <p className="text-xs text-slate-600 leading-relaxed font-bold mt-1">
                          Applied upon in-person registration fee settlement at Chitradurga branch office.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 border-t-2 border-indigo-950/10 pt-4 text-xs text-slate-700">
                      <p className="font-black uppercase tracking-wider text-indigo-950">Scholarship Claim Rules:</p>
                      <div className="space-y-1 font-bold">
                        <p className="flex gap-1.5">
                          <span className="text-orange-500 font-extrabold">1.</span>
                          <span>Show this digital voucher code to the Chitradurga branch enrollment counter.</span>
                        </p>
                        <p className="flex gap-1.5">
                          <span className="text-orange-500 font-extrabold">2.</span>
                          <span>Bring original school score sheet marks cards for cross verification.</span>
                        </p>
                        <p className="flex gap-1.5">
                          <span className="text-orange-500 font-extrabold">3.</span>
                          <span>Office: Opp. Appaji Parisara Building, Stadium Road, Chitradurga.</span>
                        </p>
                      </div>
                    </div>

                    {/* Code Badge Box */}
                    <div className="border-t-2 border-dashed border-slate-300 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                      <div>
                        <p className="text-[9px] uppercase font-black text-slate-400 tracking-wider text-center sm:text-left">Verification Voucher ID Code</p>
                        <p className="text-md font-mono font-black text-indigo-950 tracking-widest text-center sm:text-left">
                          {generatedVoucher.code}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified: {generatedVoucher.timestamp}</span>
                    </div>
                  </div>

                  {/* Voucher CTA Button */}
                  <div className="bg-slate-50 px-6 py-4 border-t-2 border-indigo-950 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-100">
                    <p className="text-[11px] text-[#111030] font-black uppercase tracking-wide text-center sm:text-left">
                      Apply to admission support form below!
                    </p>
                    <button
                      onClick={handleApplyVoucherToForm}
                      className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-[#111030] font-black px-5 py-3 border border-[#111030] shadow-[2px_2px_0px_0px_#111030] text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Pre-fill Register</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="border-2 border-dashed border-indigo-900 rounded-none p-8 text-center text-slate-400 space-y-4 min-h-[300px] flex flex-col justify-center items-center">
                  <Award className="w-12 h-12 text-orange-500 animate-pulse" />
                  <p className="text-white sm:text-base font-black uppercase tracking-wider">Voucher Generator Ready</p>
                  <p className="text-slate-400 text-xs max-w-xs mx-auto font-semibold leading-relaxed">
                    Set your score on the left, input your name, and click "Generate" to lock in your tuition fee discount key!
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
