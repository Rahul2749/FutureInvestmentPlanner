import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Coins, 
  Clock, 
  Compass, 
  CheckCircle, 
  Heart, 
  GraduationCap, 
  HelpCircle, 
  Sparkles 
} from 'lucide-react';
import { INSURANCE_PLANS } from '../data';
import { ConsultationInquiry } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openQuoteForPlan: (planId: string) => void;
  onSubmitConsultation: (inquiry: Omit<ConsultationInquiry, 'id' | 'date' | 'status'>) => void;
}

export default function HomeView({ setActiveTab, openQuoteForPlan, onSubmitConsultation }: HomeViewProps) {
  // Free Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    insuranceInterest: 'term-life',
    preferredTime: 'morning'
  });
  const [formSuccess, setFormSuccess] = useState(false);

  // Interactive Advisory Core Widget State
  const [quizAge, setQuizAge] = useState<number>(30);
  const [quizGoal, setQuizGoal] = useState<'protection' | 'savings' | 'retirement' | 'child'>('protection');
  const [recommendedPlanId, setRecommendedPlanId] = useState<string>('term-life');

  // Trigger advisory updates
  const handleQuizGoalChange = (goal: 'protection' | 'savings' | 'retirement' | 'child') => {
    setQuizGoal(goal);
    if (goal === 'protection') {
      setRecommendedPlanId('term-life');
    } else if (goal === 'savings') {
      setRecommendedPlanId('investment');
    } else if (goal === 'retirement') {
      setRecommendedPlanId('retirement');
    } else {
      setRecommendedPlanId('child');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.pincode) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    onSubmitConsultation(formData);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        pincode: '',
        insuranceInterest: 'term-life',
        preferredTime: 'morning'
      });
    }, 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen" id="home-view-root">
      
      {/* 1. Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8" id="home-hero">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-taglines">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 font-mono text-xs px-3 py-1 rounded-full border border-blue-400/30">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-ping"></span>
              <span>Exclusive Strategic Retail Partner Network</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Protecting What <br />
              <span className="text-orange-400">Matters Most</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Secure your family's future, children's high educational milestones, and premium retirement wealth with India's most trusted insurance partnership model.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setActiveTab('partner')}
                id="btn-hero-partnership"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Become a Strategic Partner</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveTab('products')}
                id="btn-hero-plans"
                className="bg-transparent hover:bg-white/10 text-white font-bold px-6 py-3 rounded-lg border border-white/30 transition-all cursor-pointer"
              >
                <span>Explore Insurance Plans</span>
              </button>
            </div>
          </div>

          {/* Right Image Frame with Absolute Overlays */}
          <div className="lg:col-span-5 relative" id="hero-image-wrapper">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-30 blur-lg" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbwbwgHJCNWHCUeQSynTZafDP_-xii4VDEfSx-c-_CeS3gFscL_7TALdh8E0P-7W7mQGxqPGCHJ-X8Jbfl19oLQxwj8q-tbTlgDVoG0SNx7lgJodvUoKJKndo8Hf-Lr7PpNPx860rt3o6cAohlQZ7u80szrz3okPxgCaaNb8PdZ3CNJ6dIAasuQbyNRoowKBH3TuMUfwBPcxNfvSJ4oVn536H2qP4622bKve7mCHbPkQSqpENznGtX1bmkiRVc5jMkwor9sa2GKxw"
                alt="Happy family laughing on a couch representing protection"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[380px] lg:scale-105 hover:scale-100 transition-transform duration-500"
              />
              
              {/* Trust Badge overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-lg border border-blue-100/50 text-slate-900 max-w-[200px]">
                <div className="flex items-center space-x-1.5 text-blue-600 mb-1">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-extrabold text-xs">Trusted Protection</span>
                </div>
                <p className="text-[10px] text-slate-600">Over 23 Lakh active claims settled across India during FY23-24.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive "Goal Advisor" Quiz Section - A wonderful interactive addition! */}
      <section className="bg-white py-12 px-4 shadow-xs" id="quick-advisor-tool">
        <div className="mx-auto max-w-4xl border border-slate-100 bg-linear-to-b from-blue-50/50 to-white rounded-2xl p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-blue-700 font-extrabold uppercase text-xs tracking-wider">Plan Advisor Tool</span>
            <h2 className="text-2xl font-extrabold text-slate-800 mt-1">Find the Ideal Plan in 30 Seconds</h2>
            <p className="text-xs text-slate-500 mt-1">Select your primary financial milestone and age to instantly view a matching Bajaj Allianz solution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Interactive Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  1. What is your top financial focus?
                </label>
                <div className="grid grid-cols-2 gap-2" id="advisor-goal-selector">
                  {[
                    { id: 'protection', label: 'Pure Life Protection', icon: Heart },
                    { id: 'savings', label: 'Wealth Creation', icon: Coins },
                    { id: 'retirement', label: 'Regular Pension', icon: Compass },
                    { id: 'child', label: 'Child Education', icon: GraduationCap },
                  ].map((goalItem) => {
                    const GoalIcon = goalItem.icon;
                    return (
                      <button
                        key={goalItem.id}
                        type="button"
                        onClick={() => handleQuizGoalChange(goalItem.id as any)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          quizGoal === goalItem.id
                            ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-extrabold ring-2 ring-blue-100'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <GoalIcon className="h-5 w-5 mb-1.5 text-blue-600 shrink-0" />
                        <span className="text-xs">{goalItem.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">2. Your Current Age</span>
                  <span className="text-sm font-black text-blue-700">{quizAge} Years</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="65"
                  value={quizAge}
                  onChange={(e) => setQuizAge(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>18 Yrs</span>
                  <span>40 Yrs</span>
                  <span>65 Yrs</span>
                </div>
              </div>
            </div>

            {/* Dynamic Results Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-md relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Sparkles className="h-16 w-16 text-orange-400" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <CheckCircle className="h-4 w-4" />
                  <span>AI Recommended Insurance Plan</span>
                </div>

                {INSURANCE_PLANS.filter(p => p.id === recommendedPlanId).map(p => (
                  <div key={p.id} className="space-y-2">
                    <h3 className="text-lg font-black text-white">{p.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.tagline}</p>
                    
                    <div className="border-t border-slate-800 pt-3 mt-3">
                      <span className="text-[10px] uppercase text-slate-400 font-mono tracking-widest block mb-1">Key Advantages:</span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {p.benefits.slice(0, 3).map((b, i) => (
                          <li key={i} className="flex items-start space-x-1.5">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openQuoteForPlan(recommendedPlanId)}
                className="mt-6 w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Calculate Premium</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Insurance Plans Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="products-catalog-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-500 font-extrabold uppercase text-xs tracking-widest">Plan Options</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-1">Core Insurance Ecosystem</h2>
          <p className="text-sm text-slate-500 mt-2">
            Engineered keeping modern financial realities in focus. Partner with us to advise clients on highly custom plans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="home-plans-grid">
          {INSURANCE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl border border-blue-50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5">
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded-sm">
                  Starting @ ₹{plan.minPremium}/mo*
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">{plan.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-[48px]">{plan.tagline}</p>
                
                <ul className="space-y-1.5 text-xs text-slate-600 mt-4 pt-4 border-t border-slate-100">
                  {plan.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-1.5">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      <span className="text-[11px]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">Entry: {plan.entryAge}</span>
                <button
                  onClick={() => openQuoteForPlan(plan.id)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Select</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "Why Choose Our Partnership" Section */}
      <section className="bg-white py-16 px-4 border-y border-slate-100" id="partnership-why-choose">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-blue-600 font-black uppercase text-xs tracking-widest block">Incorporate & Scale</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Why Choose Our Strategic Retail Partnership?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We empower retail stores, individual agents, wealth advisors, and entrepreneurs to convert client relationships into highly sustainable insurance advisory businesses.
            </p>

            {/* Feature lists in layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" id="why-choose-features">
              {[
                { title: 'Generous commission models', desc: 'Continuous residual commission structures on every milestone renewal fee.' },
                { title: 'Zero barrier e-onboarding', desc: 'No heavy manual verification. Real-time digital KYC approvals.' },
                { title: 'Dedicated Relationship Manager', desc: 'Personal coaching sessions directly backed by nearby branch veterans.' },
                { title: 'Automated Quote Generator', desc: 'Design deep pricing tables and forward customized brochures on WhatsApp instantly.' },
              ].map((item, index) => (
                <div key={index} className="border border-slate-100 p-4 rounded-xl shadow-2xs hover:shadow-xs transition-all">
                  <h4 className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                    <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative" id="why-choose-handshake-wrapper">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-lg" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBKU-GJIFbjUyEMZdEJs7zd-d-mWAr7-TpiNr0IXCX6zFT9DyXylfhfmUZ8cIxBnA3JuXsxN5kxVJJzSxSyYgjX7GXB825mIv9rC944IU5_7tgw8qws8_EcevToD2gjJBvmTu7jbLpNxAk-KLNtzWOJ3_P0Yv3k-2P10OWpolJOXbSakwUzQdWUyHFh1czWAdiRRJD_yzp--RP-jYkW47YgQFzocN0a4I_9frsdUxhw72efUmsfMyWi9b1kFMxty0aU_loZt6Q_wc"
                alt="Two businessmen sealing strategic insurance partnership with handshake"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[380px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Consultation Intake Form Section */}
      <section className="bg-linear-to-b from-slate-50 to-blue-50/50 py-16 px-4" id="consultation-section">
        <div className="mx-auto max-w-xl bg-white border border-blue-100 p-6 sm:p-8 rounded-2xl shadow-md relative">
          
          <div className="text-center mb-6">
            <span className="text-blue-700 font-extrabold uppercase text-xs tracking-widest">Consultation Intake</span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">Get a Personalized Consultation</h3>
            <p className="text-xs text-slate-500 mt-1">
              Provide your details and primary interests; a certified Bajaj Goals Expert will contact you under 2 working hours.
            </p>
          </div>

          <AnimatePresence>
            {formSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-lg text-center"
                id="consultation-success-msg"
              >
                <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto mb-2 animate-bounce" />
                <h4 className="font-extrabold text-sm">Thank You for Inquiring!</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Your reference ID <strong className="font-mono text-[11px]">BC-{Math.floor(Math.random() * 89999 + 10000)}</strong> has been registered. Our wealth experts are reviewing your portfolio request.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4" id="consultation-intake-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full text-xs font-medium border border-slate-200 rounded-md p-2.5 outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@gmail.com"
                      className="w-full text-xs font-medium border border-slate-200 rounded-md p-2.5 outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      pattern="^[6789]\d{9}$"
                      title="Please enter a valid 10-digit Indian phone number"
                      className="w-full text-xs font-medium border border-slate-200 rounded-md p-2.5 outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Area Pincode *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                      placeholder="e.g. 400001"
                      className="w-full text-xs font-medium border border-slate-200 rounded-md p-2.5 outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Insurance Interest *</label>
                    <select
                      value={formData.insuranceInterest}
                      onChange={(e) => setFormData({ ...formData, insuranceInterest: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-200 rounded-md p-2.5 bg-white outline-hidden focus:border-blue-600"
                    >
                      <option value="term-life">Term Life Insurance</option>
                      <option value="savings">Wealth & Savings Plans</option>
                      <option value="retirement">Retirement & Annuity</option>
                      <option value="child">Child Future Plans</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Callback</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-200 rounded-md p-2.5 bg-white outline-hidden focus:border-blue-600"
                    >
                      <option value="morning">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="evening">Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  id="btn-submit-consultation"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold p-3 rounded-lg mt-4 transition-all shadow-sm flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Partner/Corporate Logos Strip */}
      <section className="bg-slate-900 border-t border-slate-800 py-10 px-4 text-center">
        <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-4">Strategic Banking & Alliance Integrators</p>
        <div className="mx-auto max-w-5xl flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-40 grayscale group hover:opacity-75 transition-opacity" id="partners-alliances">
          {[
            { name: 'BAJAJ FINSERV', label: 'BAJAJ FINSERV' },
            { name: 'ALLIANZ SE', label: 'ALLIANZ GROUP' },
            { name: 'AXIS BANK', label: 'AXIS BANK NETWORK' },
            { name: 'HDFC BANK', label: 'HDFC ALLIANCE' },
            { name: 'SBI GROUP', label: 'SBI LIQUIDITY' }
          ].map((partner, index) => (
            <div key={index} className="text-white text-sm font-black tracking-widest font-mono">
              {partner.name}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
