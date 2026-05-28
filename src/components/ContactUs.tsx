import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageSquareText, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactUs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const phoneNumbers = [
    { number: '9611441997', label: 'Call Support 1' },
    { number: '9591111676', label: 'Call Support 2' },
    { number: '7795592280', label: 'Call Support 3' },
    { number: '8123272636', label: 'Call Support 4' }
  ];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;

    setSubmitStatus('Your question has been sent! We will reply on WhatsApp shortly.');
    setFormName('');
    setFormPhone('');
    setFormMessage('');

    setTimeout(() => {
      setSubmitStatus(null);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b-4 border-indigo-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-orange-500 text-indigo-950 border-2 border-indigo-950 shadow-[2px_2px_0px_0px_#1e1b4b] px-4 py-1.5 rounded-none text-xs font-black uppercase tracking-widest mb-4">
            <Phone className="w-3.5 h-3.5 text-indigo-950" />
            <span>Admissions Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display-title font-black text-indigo-950 tracking-tighter uppercase">
            Connect Directly with Victory Chitradurga
          </h2>
          <p className="text-slate-650 text-sm mt-3 leading-relaxed font-semibold">
            Have questions about fees, scholarship structures, hostel partnerships, or batch timetables? Give us a call or visit opposite Appaji Parisara, Stadium Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details & Telephone List Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Location card */}
            <div className="bg-white border-2 border-indigo-950 p-6 rounded-none shadow-[4px_4px_0px_0px_#111030] text-xs sm:text-sm space-y-4">
              <h3 className="font-display-title font-black text-indigo-950 text-base flex items-center gap-2 uppercase tracking-wide">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Our Address Location</span>
              </h3>
              <p className="text-slate-700 leading-relaxed font-bold">
                Opposite Appaji Parisara Building, <br />
                Stadium Road, Chitradurga, Karnataka
              </p>
              
              <div className="border-t-2 border-indigo-950/10 pt-3 flex items-center gap-2 text-slate-550 font-bold">
                <Clock className="w-4.5 h-4.5 text-orange-500" />
                <span>
                  Office Hours: <strong className="text-indigo-950">8:00 AM – 8:00 PM</strong> (Mon-Sat)
                </span>
              </div>
            </div>

            {/* Quick Touch-to-Call Panel */}
            <div className="bg-white border-2 border-indigo-950 p-6 rounded-none shadow-[4px_4px_0px_0px_#111030] space-y-4">
              <h3 className="font-display-title font-black text-indigo-950 text-sm sm:text-base flex items-center gap-2 uppercase tracking-wide border-b-2 border-indigo-950/10 pb-2">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Admission Hotlines</span>
              </h3>
              <p className="text-xs text-slate-500 font-bold max-w-sm">
                Click any of our 4 official registration numbers to place an instant telephone call:
              </p>

              <div className="grid grid-cols-2 gap-3" id="direct-dial-contact-grid">
                {phoneNumbers.map((p, i) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number}`}
                    id={`dial-btn-${i + 1}`}
                    className="flex flex-col items-center justify-center p-3 rounded-none border-2 border-indigo-950 bg-slate-50 hover:bg-orange-500 hover:text-indigo-950 shadow-[2px_2px_0px_0px_#1e1b4b] hover:shadow-none transition-all cursor-pointer"
                  >
                    <span className="text-[10px] text-slate-400 hover:text-indigo-900 font-black font-mono tracking-wider uppercase">{p.label}</span>
                    <span className="text-xs sm:text-sm font-black mt-0.5 text-indigo-950 whitespace-nowrap">{p.number}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Enquiries Msg Sender Form */}
          <div className="lg:col-span-4 bg-white border-2 border-indigo-950 p-6 sm:p-8 rounded-none shadow-[4px_4px_0px_0px_#1e1b4b] space-y-5">
            <h3 className="font-display-title font-black text-indigo-950 text-base flex items-center gap-1.5 uppercase tracking-wide border-b-2 border-indigo-950/10 pb-2">
              <MessageSquareText className="w-5 h-5 text-orange-500" />
              <span>Send Quick Message</span>
            </h3>

            <p className="text-xs text-slate-500 font-bold">
              Got a quick question? Message our counseling coordinators directly.
            </p>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-orange-500/10 border-2 border-orange-500 text-indigo-950 font-black p-3.5 rounded-none text-xs"
                >
                  {submitStatus}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleMessageSubmit} className="space-y-4">
              <div>
                <label id="quick-lbl-name" className="block text-[10px] sm:text-xs font-black text-indigo-950 uppercase tracking-widest mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sanjeev Kumar"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-indigo-950 rounded-none px-3 py-2.5 text-xs text-[#111030] font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                />
              </div>

              <div>
                <label id="quick-lbl-phone" className="block text-[10px] sm:text-xs font-black text-indigo-950 uppercase tracking-widest mb-1.5">WhatsApp Mobile Phone</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="e.g. 9611441997"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-slate-50 border-2 border-indigo-950 rounded-none px-3 py-2.5 text-xs text-[#111030] font-mono font-bold focus:outline-none focus:border-orange-500 shadow-inner"
                />
              </div>

              <div>
                <label id="quick-lbl-msg" className="block text-[10px] sm:text-xs font-black text-indigo-950 uppercase tracking-widest mb-1.5">Your Question Details</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. What is the start date of next crash course of NEET?"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-indigo-950 rounded-none px-3 py-2 text-xs text-[#111030] font-bold focus:outline-none focus:border-orange-500 resize-none shadow-inner"
                ></textarea>
              </div>

              <button
                type="submit"
                id="quick-msg-submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-[#111030] font-black text-xs py-3.5 border-2 border-indigo-950 shadow-[3px_3px_0px_0px_#111030] rounded-none uppercase tracking-widest cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-indigo-950" />
                <span>Send WhatsApp Query</span>
              </button>
            </form>
          </div>

          {/* Quick FAQ accordion panel */}
          <div className="lg:col-span-4 bg-white border-2 border-indigo-950 p-6 sm:p-8 rounded-none shadow-[4px_4px_0px_0px_#1e1b4b]">
            <h3 className="font-display-title font-black text-indigo-950 text-base mb-6 flex items-center gap-1.5 uppercase tracking-wide border-b-2 border-indigo-950/10 pb-2">
              <HelpCircle className="w-5 h-5 text-orange-500" />
              <span>Questions & Answers</span>
            </h3>

            <div className="space-y-4" id="contact-faq-accordion">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b-2 border-indigo-950/5 pb-3 last:border-0 last:pb-0">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left font-black text-xs text-indigo-950 hover:text-orange-500 py-1.5 flex justify-between items-center gap-2 focus:outline-none cursor-pointer uppercase tracking-wider"
                    id={`faq-accordion-toggle-${i}`}
                  >
                    <span>{faq.question}</span>
                    <span className="text-orange-500 font-extrabold">{activeFaq === i ? '−' : '+'}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-2 text-[11px] text-slate-650 leading-relaxed font-bold bg-slate-50 p-2.5 border-l-2 border-orange-500"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
