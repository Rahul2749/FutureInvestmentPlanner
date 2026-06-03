import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ClipboardList, CheckCircle, Clock, Trash2, Heart, Coins, Compass, GraduationCap, Users } from 'lucide-react';
import { PartnerInquiry, ConsultationInquiry } from '../types';

interface InquiryStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  partnerInquiries: PartnerInquiry[];
  consultationInquiries: ConsultationInquiry[];
  quoteInquiries: any[];
  onClearAll: () => void;
  onDeleteInquiry: (type: 'partner' | 'consultation' | 'quote', id: string) => void;
}

export default function InquiryStatusModal({
  isOpen,
  onClose,
  partnerInquiries,
  consultationInquiries,
  quoteInquiries,
  onClearAll,
  onDeleteInquiry
}: InquiryStatusModalProps) {
  if (!isOpen) return null;

  const totalInquiriesCount = partnerInquiries.length + consultationInquiries.length + quoteInquiries.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="inquiry-status-modal">
      
      {/* Shadow layer backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto border border-blue-100 flex flex-col"
      >
        {/* Header bar */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center space-x-2">
            <ClipboardList className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="text-base font-black text-slate-900">Your Action Requests Inbox</h3>
              <span className="text-[10px] uppercase font-mono text-slate-400">Total stored: {totalInquiriesCount} drafts</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {totalInquiriesCount > 0 && (
              <button
                onClick={onClearAll}
                className="text-[10px] font-bold text-rose-600 hover:text-rose-800 transition-colors cursor-pointer mr-3 uppercase py-1 px-2 rounded-md hover:bg-rose-50"
              >
                Clear All
              </button>
            )}
            <button 
              type="button" 
              onClick={onClose} 
              className="text-slate-400 hover:text-slate-650 cursor-pointer p-1 rounded-full hover:bg-slate-50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content lists */}
        <div className="p-6 space-y-6 flex-1 text-left">
          {totalInquiriesCount === 0 ? (
            <div className="text-center py-10 space-y-2">
              <ClipboardList className="h-12 w-12 text-slate-200 mx-auto" />
              <h4 className="font-extrabold text-sm text-slate-700">Inbox is completely clear!</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Calculate a quote, become a partner, or schedule a free consultation. All dynamic outcomes will be stored safely here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* PARTNER APPLICATIONS SUBSECTION */}
              {partnerInquiries.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest flex items-center space-x-1">
                    <Users className="h-3.5 w-3.5 text-orange-500" />
                    <span>Become a Goals Partner ({partnerInquiries.length})</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {partnerInquiries.map((p) => (
                      <div key={p.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg relative hover:border-slate-300 transition-all text-xs">
                        <button
                          onClick={() => onDeleteInquiry('partner', p.id)}
                          className="absolute top-2.5 right-2 text-slate-400 hover:text-rose-600 transition-colors p-1"
                          title="Delete draft"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>

                        <div className="flex items-center space-x-1 text-blue-800 font-extrabold">
                          <span>Ref: {p.id}</span>
                          <span className="text-slate-300">|</span>
                          <span>{p.name} - {p.city}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 space-y-0.5">
                          <div>Background cadre: <strong className="text-slate-700">{p.experience}</strong></div>
                          <div>Interest setup: <strong className="text-slate-700">{p.availability}</strong></div>
                          <div>Saved at: <span className="font-mono">{p.date}</span></div>
                        </div>

                        {/* Status bar */}
                        <div className="mt-2.5 pt-2 border-t border-slate-150 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">Status Check:</span>
                          <span className="inline-flex items-center space-x-1 text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-sm">
                            <Clock className="h-3 w-3 animate-spin" />
                            <span>Pending Interview Review</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* QUOTES AND PREMIUM PROPOSALS */}
              {quoteInquiries.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest flex items-center space-x-1">
                    <Coins className="h-3.5 w-3.5 text-blue-600" />
                    <span>Premium Quote Proposals ({quoteInquiries.length})</span>
                  </h4>

                  <div className="space-y-2">
                    {quoteInquiries.map((q) => (
                      <div key={q.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg relative hover:border-slate-300 transition-all text-xs">
                        <button
                          onClick={() => onDeleteInquiry('quote', q.id)}
                          className="absolute top-2.5 right-2 text-slate-400 hover:text-rose-600 transition-colors p-1"
                          title="Delete draft"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>

                        <div className="flex items-center space-x-1 text-blue-800 font-extrabold">
                          <span>Ref: {q.id}</span>
                          <span className="text-slate-300">|</span>
                          <span>{q.planName}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 mt-1.5 bg-white p-2 rounded-md border border-slate-100">
                          <div>Insured: <strong className="text-slate-700">{q.userName}</strong></div>
                          <div>Applicant Age: <strong className="text-slate-700">{q.userAge} Yrs</strong></div>
                          <div>Coverage (Sum Assured): <strong className="text-slate-700">₹{(q.sumAssured / 100000).toFixed(0)} Lakhs</strong></div>
                          <div>Assumed premium: <strong className="text-emerald-600 font-extrabold">₹{q.calculatedPremium.toLocaleString('en-IN')}/mo</strong></div>
                        </div>

                        {/* Status bar */}
                        <div className="mt-2.5 pt-2 border-t border-slate-150 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">Status Check:</span>
                          <span className="inline-flex items-center space-x-1 text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded-sm">
                            <CheckCircle className="h-3 w-3 text-indigo-600" />
                            <span>Digital Illustration Ready</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CONSULTATIONS LIST */}
              {consultationInquiries.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest flex items-center space-x-1">
                    <ClipboardList className="h-3.5 w-3.5 text-blue-700" />
                    <span>Advising Appointments ({consultationInquiries.length})</span>
                  </h4>

                  <div className="space-y-2">
                    {consultationInquiries.map((c) => (
                      <div key={c.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg relative hover:border-slate-300 transition-all text-xs">
                        <button
                          onClick={() => onDeleteInquiry('consultation', c.id)}
                          className="absolute top-2.5 right-2 text-slate-400 hover:text-rose-600 transition-colors p-1"
                          title="Delete draft"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>

                        <div className="flex items-center space-x-1 text-blue-800 font-extrabold">
                          <span>Ref: {c.id}</span>
                          <span className="text-slate-300">|</span>
                          <span>Consultation for Pincode {c.pincode}</span>
                        </div>

                        <div className="text-[10px] text-slate-500 mt-1.5 space-y-0.5">
                          <div>Contact Person: <strong className="text-slate-700">{c.name}</strong></div>
                          <div>Preferred Contact Time: <strong className="text-slate-700">{c.preferredTime}</strong></div>
                          <div>Chosen Focus: <strong className="text-slate-900 font-bold uppercase">{c.insuranceInterest}</strong></div>
                        </div>

                        {/* Status bar */}
                        <div className="mt-2.5 pt-2 border-t border-slate-150 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">Status Check:</span>
                          <span className="inline-flex items-center space-x-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-sm">
                            <Clock className="h-3 w-3 text-emerald-600 animate-pulse" />
                            <span>Assigned to Nearby Branch Manager</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info block */}
        <div className="bg-slate-50 p-4 border-t border-slate-100 text-center text-[10px] text-slate-400 leading-normal">
          All records above protect the confidentiality mandates of IRDAI and are archived within your browser's local sandbox profile.
        </div>

      </motion.div>
    </div>
  );
}
