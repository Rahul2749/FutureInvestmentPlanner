import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  Award,
  BookOpen,
  Calendar,
  DollarSign
} from 'lucide-react';
import { PARTNERSHIP_BENEFITS, SUCCESS_STORIES } from '../data';
import { PartnerInquiry } from '../types';

interface BecomePartnerViewProps {
  onSubmitInquiry: (inquiry: Omit<PartnerInquiry, 'id' | 'date' | 'status'>) => void;
}

export default function BecomePartnerView({ onSubmitInquiry }: BecomePartnerViewProps) {
  // Wizard Setup for Bento Multi-step Intake
  const [formStep, setFormStep] = useState<number>(1);
  const [stepData, setStepData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: 'Fresher / Student',
    availability: 'Part-time Plan',
    message: ''
  });
  const [successAnimation, setSuccessAnimation] = useState(false);

  // Success Stories expanded modal state
  const [activeStoryIdx, setActiveStoryIdx] = useState<number | null>(null);

  const handleNextStep = () => {
    if (formStep === 1) {
      if (!stepData.name || !stepData.email || !stepData.phone || !stepData.city) {
        alert('Please complete all contact details before proceeding.');
        return;
      }
      // Check phone regex
      const phoneRegex = /^[6789]\d{9}$/;
      if (!phoneRegex.test(stepData.phone)) {
        alert('Please enter a valid 10-digit Indian phone number starting with 6, 7, 8 or 9.');
        return;
      }
    }
    setFormStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleFinishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitInquiry(stepData);
    setSuccessAnimation(true);
    setTimeout(() => {
      setSuccessAnimation(false);
      setFormStep(1);
      setStepData({
        name: '',
        email: '',
        phone: '',
        city: '',
        experience: 'Fresher / Student',
        availability: 'Part-time Plan',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen" id="partner-view-root">
      
      {/* 1. Hero Spotlight */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative" id="partner-hero">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex bg-orange-500 text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
              Enrolling Advisors Nationwide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Empower Your Future as a <br />
              <span className="text-orange-400">Life Goals Partner</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Turn your local relationships into a sustainable wealth advisory brand. Bajaj Life provides the infrastructure, digital apps, continuous learning support, and high financial commission scales.
            </p>
            <div className="flex space-x-6 text-xs text-slate-300 py-2 border-t border-white/10 max-w-lg">
              <div>
                <strong className="text-white text-base block font-black">2.4 Lakh+</strong>
                <span>Active Advisors</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <strong className="text-white text-base block font-black">₹32,040 Cr</strong>
                <span>Assets Administered</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <strong className="text-white text-base block font-black">100% Digital</strong>
                <span>e-Issuance Suite</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative" id="partner-hero-image-box">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-20 blur-lg" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtttaimPCe_EQqes_rBN5HXwwUbIsQGIgGKnTt4wZP4UU2QIB0HNhniOjjeLBHTtnetYiiHRXeMduz9yY6VNnjEWerbRT5z9tdLXXp2aVKaDzauD0mz7S5stmr_P37x0VNzn0PNae5X7x_RVSZ-5W2jpRcRzVM85N8n9k_CH-ALNw7q7Dprdw0CHnA2YUxqOWkQdjUES1XpeV1MBsaQE5mWdwh5PU3J-1Rj8q9pLzGwizxINT9UgTdty6CF6mKQREsMUY1fi96PCM"
              alt="Confident corporate insurance consultant representing partnership success"
              referrerPolicy="no-referrer"
              className="rounded-2xl border border-slate-700 shadow-2xl object-cover w-full h-[260px] lg:h-[320px]"
            />
          </div>

        </div>
      </section>

      {/* 2. Core Benefits Bento Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="partnership-benefits-catalog">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-extrabold uppercase text-xs tracking-widest">Enrolment Rewards</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-1">Strategic Partnership Benefits</h2>
          <p className="text-sm text-slate-500 mt-2">Discover how Bajaj Life supports your agency goals systematically from registration day one.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="benefits-grid">
          {PARTNERSHIP_BENEFITS.map((benefit, i) => {
            const icons = [DollarSign, BookOpen, Award, Sparkles];
            const SelectedIcon = icons[i] || Sparkles;
            return (
              <div 
                key={i} 
                className="bg-white border border-slate-100 p-6 rounded-xl shadow-2xs hover:shadow-sm hover:border-blue-100 transition-all flex flex-col justify-start space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shadow-2xs shrink-0">
                  <SelectedIcon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{benefit.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Multi-Step Bento Form & Onboarding Steps */}
      <section className="bg-white py-16 px-4 border-y border-slate-200" id="onboarding-flow-section">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Step-by-step checklist guide */}
          <div className="lg:col-span-6 space-y-6 text-left" id="onboarding-guide">
            <span className="text-orange-500 font-extrabold uppercase text-xs tracking-widest block">Process Flow</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">How You Get Certified</h2>
            <p className="text-sm text-slate-600">
              Our retail advisor registration satisfies all IRDAI regulations. We guide you along every phase.
            </p>

            <div className="space-y-4" id="onboarding-checklist-stepper">
              {[
                { step: '1', title: 'Submit Initial Online Inquiry', desc: 'Fill out the wizard on the right. An regional recruitment specialist calls to clarify profiles.' },
                { step: '2', title: 'Submit Digital KYC Documents', desc: 'Provide identity validation (PAN Card, Aadhaar Card, 10th/12th Marksheet for standard licensing verification).' },
                { step: '3', title: 'Complete Online Training Model', desc: 'Enjoy our structured video learning curriculum (approximately 15 hours) focused on basic product criteria and advisor ethics.' },
                { step: '4', title: 'Clear IRDAI IC-38 Examination', desc: 'Supported with mock exam portals inside our Adviser App. High passing success curves guaranteed.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-504 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Interactive Multi-Step Wizards Form */}
          <div className="lg:col-span-6" id="onboarding-wizard-wrapper">
            <div className="mx-auto max-w-md bg-slate-50 border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 relative">
              
              <div className="flex justify-between items-center mb-6" id="wizard-progress-bar">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Step {formStep} of 3</span>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-1.5 w-6 rounded-xs transition-all ${
                        s === formStep ? 'bg-blue-600' : s < formStep ? 'bg-blue-300' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {successAnimation ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-6 bg-white border border-slate-200 rounded-xl shadow-xs"
                    id="wizard-success-card"
                  >
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-3 animate-bounce" />
                    <h3 className="text-lg font-black text-slate-900">Application Preserved!</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Your Partnership Intake Form has been preserved locally. Our agency leaders in <strong>{stepData.city}</strong> will prepare your training syllabus and call on <strong>{stepData.phone}</strong>.
                    </p>
                    <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100/50 text-[11px] text-left text-slate-700 font-mono mt-4">
                      <strong>SUBMISSION RECEIPT:</strong><br />
                      Reference: PA-{Math.floor(Math.random() * 89999 + 10000)}<br />
                      Cadre: {stepData.experience}<br />
                      Commitment: {stepData.availability}
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFinishSubmit} className="space-y-4" id="wizard-onboarding-form">
                    
                    {/* Step 1 Content */}
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                        id="step-1-inputs"
                      >
                        <h3 className="text-base font-extrabold text-blue-900 leading-tight">Tell Us Who You Are</h3>
                        <p className="text-[11px] text-slate-500">Provide basic reachability to schedule a local meet-up callback.</p>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Your Full Name *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Anand Sen"
                              value={stepData.name}
                              onChange={(e) => setStepData({ ...stepData, name: e.target.value })}
                              className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Email Address *</label>
                            <input
                              type="email"
                              required
                              placeholder="anand@yahoo.co.in"
                              value={stepData.email}
                              onChange={(e) => setStepData({ ...stepData, email: e.target.value })}
                              className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Mobile Number *</label>
                              <input
                                type="tel"
                                required
                                placeholder="98XXXXXXXX"
                                pattern="^[6789]\d{9}$"
                                value={stepData.phone}
                                onChange={(e) => setStepData({ ...stepData, phone: e.target.value.replace(/\D/g, '') })}
                                className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Operating City *</label>
                              <input
                                type="text"
                                required
                                placeholder="Pune / Lucknow"
                                value={stepData.city}
                                onChange={(e) => setStepData({ ...stepData, city: e.target.value })}
                                className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600"
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold p-3 rounded-lg mt-4 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                        >
                          <span>Next: Background Details</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </motion.div>
                    )}

                    {/* Step 2 Content */}
                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                        id="step-2-inputs"
                      >
                        <h3 className="text-base font-extrabold text-blue-900 leading-tight">Your Background Profiles</h3>
                        <p className="text-[11px] text-slate-500">We design separate learning workflows for fresher students, mutual fund agents, or corporate experts.</p>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Current Primary Cadre *</label>
                            <select
                              value={stepData.experience}
                              onChange={(e) => setStepData({ ...stepData, experience: e.target.value })}
                              className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600"
                            >
                              <option value="Fresher / Student">College Student / Career Starter</option>
                              <option value="Mutual Fund / Stockbroker agent">Mutual Fund Broker / Financial Broker</option>
                              <option value="Chartered Accountant">CA / Tax consultant expert</option>
                              <option value="Homemaker seeking part-time flex">Homemaker / Flexi-time seeker</option>
                              <option value="Corporate Professional">Full-time Employee / Other Sector</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Interest Allocation *</label>
                            <select
                              value={stepData.availability}
                              onChange={(e) => setStepData({ ...stepData, availability: e.target.value })}
                              className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600"
                            >
                              <option value="Part-time Plan">Part-time (Additional Supplemental Income)</option>
                              <option value="Full-time Strategic">Full-time Career Path (Full Core Agency)</option>
                              <option value="Referral Model">Referral Executive (Passive Sub-agency)</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="w-full border border-slate-300 text-slate-600 text-xs font-bold p-2.5 rounded-lg transition-all cursor-pointer"
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={handleNextStep}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold p-2.5 rounded-lg transition-all flex items-center justify-center space-x-1 cursor-pointer"
                          >
                            <span>Next: Custom Goals</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3 Content */}
                    {formStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                        id="step-3-inputs"
                      >
                        <h3 className="text-base font-extrabold text-blue-900 leading-tight">Additional Context</h3>
                        <p className="text-[11px] text-slate-500">Provide any specific location remarks or past experience pointers to accelerate the call audit.</p>
                        
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-600 tracking-wider mb-1">Optional Notes / Questions</label>
                          <textarea
                            placeholder="e.g. Interested in Pune Fort Branch coordinates. Already have 1 year of LIC micro-insurance experience."
                            rows={3}
                            value={stepData.message}
                            onChange={(e) => setStepData({ ...stepData, message: e.target.value })}
                            className="w-full text-xs font-semibold p-2.5 border border-slate-350 rounded-md bg-white outline-hidden focus:border-blue-600 resize-none"
                          />
                        </div>

                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-[10px] text-blue-800 leading-relaxed">
                          By confirming, you agree to receive digital onboarding communication, SMS, and phone calls from accredited Bajaj Life Agency Managers.
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="w-full border border-slate-300 text-slate-600 text-xs font-bold p-2.5 rounded-lg transition-all cursor-pointer"
                          >
                            Previous
                          </button>
                          <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold p-2.5 rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm hover:shadow-md"
                          >
                            <span>Finish & Enrol</span>
                            <CheckCircle className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Success Stories Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="partner-success-stories">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-extrabold uppercase text-xs tracking-widest block">Accredited Testimonials</span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">Success Stories from Our Network</h2>
          <p className="text-sm text-slate-500 mt-2">See how everyday professionals scaled their independent businesses inside the Bajaj Life ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="stories-grid">
          {SUCCESS_STORIES.map((story, idx) => (
            <div 
              key={story.id} 
              className="bg-white rounded-xl border border-slate-100 shadow-2xs hover:shadow-xs p-6 flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                {/* Header story detail */}
                <div className="flex items-center space-x-3">
                  <img
                    src={story.image}
                    alt={story.name}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full border border-blue-100 object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{story.name}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold block">{story.role}</span>
                  </div>
                </div>

                {/* Rating & Growth Tags */}
                <div className="flex justify-between items-center bg-slate-50 px-3 py-1.5 rounded-md">
                  <span className="text-[10px] uppercase font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-sm">
                    {story.incomeGrowth}
                  </span>
                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(Math.floor(story.rating))}
                    {story.rating % 1 !== 0 ? '½' : ''}
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>

              {/* View Interview details button */}
              <div className="pt-4 border-t border-slate-150 mt-4 text-left">
                <button
                  type="button"
                  onClick={() => setActiveStoryIdx(idx)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Read Interview Insights</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Detailed Dialog overlay modal */}
      <AnimatePresence>
        {activeStoryIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="success-story-dialog">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStoryIdx(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs" 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center space-x-3.5">
                <img
                  src={SUCCESS_STORIES[activeStoryIdx].image}
                  alt={SUCCESS_STORIES[activeStoryIdx].name}
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-full border-2 border-orange-400 object-cover"
                />
                <div>
                  <h3 className="text-base font-black text-slate-900">{SUCCESS_STORIES[activeStoryIdx].name}</h3>
                  <span className="text-xs text-blue-700 font-bold block">{SUCCESS_STORIES[activeStoryIdx].role}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-xs">
                <span className="text-[10px] uppercase font-mono text-slate-450 block font-bold mb-1">Interview Transcript Quote</span>
                <p className="text-slate-700 italic leading-relaxed">
                  "{SUCCESS_STORIES[activeStoryIdx].fullQuote}"
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 text-[11px] text-orange-900 flex gap-2">
                <div className="h-5 w-5 shrink-0 rounded-full bg-orange-200 text-orange-850 flex items-center justify-center font-bold font-mono">i</div>
                <p className="leading-relaxed">
                  <strong>Advice for novices:</strong> "Don't sell products. Solve client protection needs first. The systemized calculators manage the pitch flawlessly."
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveStoryIdx(null)}
                  className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-all cursor-pointer"
                >
                  Close Conversation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
