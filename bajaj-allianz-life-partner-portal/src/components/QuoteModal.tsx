import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Heart, Coins, Compass, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { INSURANCE_PLANS } from '../data';
import { InsurancePlan } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPlanId?: string | null;
  onSubmitQuoteInquiry: (quote: {
    planId: string;
    planName: string;
    userName: string;
    userEmail: string;
    userPhone: string;
    userAge: number;
    sumAssured: number;
    calculatedPremium: number;
  }) => void;
}

export default function QuoteModal({ isOpen, onClose, preSelectedPlanId, onSubmitQuoteInquiry }: QuoteModalProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('term-life');
  
  // Quote Parameters
  const [age, setAge] = useState<number>(30);
  const [sumAssured, setSumAssured] = useState<number>(5000000);
  const [term, setTerm] = useState<number>(20);

  // User details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const matchedPlan = INSURANCE_PLANS.find(p => p.id === selectedPlanId) || INSURANCE_PLANS[0];

  // Set initial params when preSelectedPlanId changes or matches
  useEffect(() => {
    if (preSelectedPlanId) {
      setSelectedPlanId(preSelectedPlanId);
      const target = INSURANCE_PLANS.find(p => p.id === preSelectedPlanId);
      if (target) {
        setAge(target.calcParams.defaultAge);
        setSumAssured(target.calcParams.defaultSumAssured);
      }
    }
  }, [preSelectedPlanId, isOpen]);

  // Premium Calculations
  const calculatePremiumVal = () => {
    let rate = 0.08;
    if (selectedPlanId === 'term-life') rate = 0.05;
    if (selectedPlanId === 'investment') rate = 0.12;
    if (selectedPlanId === 'retirement') rate = 0.22;
    if (selectedPlanId === 'child') rate = 0.15;

    const ageMultiplier = 1 + (age - 18) * 0.04;
    const termMultiplier = 1 + (term - 10) * 0.01;
    const finalVal = Math.round(((sumAssured / 1000) * rate * ageMultiplier * termMultiplier) / 12);
    return finalVal < 300 ? 300 : finalVal;
  };

  const currentPremiumValue = calculatePremiumVal();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill out your personal contact info to process.');
      return;
    }
    const phoneRegex = /^[6789]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit Indian phone number starting with 6, 7, 8 or 9.');
      return;
    }

    onSubmitQuoteInquiry({
      planId: selectedPlanId,
      planName: matchedPlan.title,
      userName: name,
      userEmail: email,
      userPhone: phone,
      userAge: age,
      sumAssured: sumAssured,
      calculatedPremium: currentPremiumValue
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      onClose();
    }, 5000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="premium-calculator-modal">
      
      {/* Background shadow overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-50 flex flex-col"
      >
        {/* Header toolbar */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">Bajaj Quote Illustrator</h3>
              <span className="text-[10px] font-mono uppercase text-slate-400">Claims Settlement Guaranteed</span>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 font-extrabold cursor-pointer hover:bg-slate-100 p-1 rounded-full text-sm"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 flex-1">
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 space-y-3"
                id="quote-submit-success"
              >
                <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900">Investment Projection Issued!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your custom quote is stored under local reference <strong className="font-mono">BQ-{Math.floor(Math.random() * 89999 + 10000)}</strong>. A regional liaison advisor will verify your OTP and dispatch terms to {email}.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left max-w-sm mx-auto font-mono text-slate-700 leading-relaxed">
                  <strong>PROPOSAL BRIEF SUMMARY:</strong><br />
                  Plan Code: {matchedPlan.title}<br />
                  Sum Assured Coverage: ₹{(sumAssured / 100000).toFixed(0)} Lakhs<br />
                  Expected premium: ₹{currentPremiumValue.toLocaleString('en-IN')}/mo
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Left Column: Premium sliders */}
                <div className="space-y-4 text-left">
                  
                  {/* Select Product Plan type */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">1. Choose Insurance Plan</label>
                    <select
                      value={selectedPlanId}
                      onChange={(e) => {
                        setSelectedPlanId(e.target.value);
                        const matched = INSURANCE_PLANS.find(p => p.id === e.target.value);
                        if (matched) {
                          setAge(matched.calcParams.defaultAge);
                          setSumAssured(matched.calcParams.defaultSumAssured);
                        }
                      }}
                      className="w-full text-xs font-semibold p-2.5 border border-slate-300 rounded-md bg-white outline-hidden focus:border-blue-600"
                    >
                      {INSURANCE_PLANS.map((p) => (
                        <option key={p.id} value={p.id}>{p.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Age Inputs Sliders */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500 font-medium">Applicant Age</span>
                      <span className="font-bold text-blue-700">{age} Years</span>
                    </div>
                    <input
                      type="range"
                      min={matchedPlan.calcParams.minAge}
                      max={matchedPlan.calcParams.maxAge}
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  {/* Sum Assured coverage amount slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500 font-medium">Insurance Coverage (Sum Assured)</span>
                      <span className="font-bold text-blue-700">₹{(sumAssured / 100000).toLocaleString('en-IN')} Lakhs</span>
                    </div>
                    <input
                      type="range"
                      min={matchedPlan.calcParams.minSumAssured}
                      max={matchedPlan.calcParams.maxSumAssured}
                      step={selectedPlanId === 'term-life' ? 500000 : 10000}
                      value={sumAssured}
                      onChange={(e) => setSumAssured(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  {/* Tenure Term Sliders */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500 font-medium">Policy Term</span>
                      <span className="font-bold text-blue-700">{term} Years</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="40"
                      value={term}
                      onChange={(e) => setTerm(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  {/* Calculate Premium visual display */}
                  <div className="bg-slate-900 text-white rounded-lg p-3 text-center border border-slate-800">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-mono">SIMULATED INSTALLMENT</span>
                    <div className="flex justify-center items-baseline space-x-1 mt-1">
                      <span className="text-2xl font-black text-emerald-400">₹{currentPremiumValue.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-slate-400">/mo</span>
                    </div>
                  </div>

                </div>

                {/* Right Column: Inquiries Contact Intake Info */}
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left" id="modal-intake-form">
                  <h4 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">2. Secure This Premium Quote</h4>
                  
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Agarwal"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs font-semibold p-2 border border-slate-300 rounded-md bg-white outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amit@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs font-semibold p-2 border border-slate-300 rounded-md bg-white outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9822334455"
                      pattern="^[6789]\d{9}$"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full text-xs font-semibold p-2 border border-slate-300 rounded-md bg-white outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div className="bg-orange-50 border border-orange-100 rounded-md p-2.5 text-[10px] text-orange-950 leading-relaxed">
                    By submitting, you authorize Bajaj Allianz Advisors to generate digital illustrations and conduct OTP KYC verifications.
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold p-3 rounded-lg flex items-center justify-center space-x-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>Receive Complete Quote Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

              </div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}
