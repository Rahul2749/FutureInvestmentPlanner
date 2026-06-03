import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Layers, 
  Workflow, 
  Laptop, 
  Search, 
  TrendingUp, 
  Compass, 
  ChevronRight, 
  Sliders, 
  Clock, 
  Award,
  Sparkles
} from 'lucide-react';
import { INSURANCE_PLANS } from '../data';

interface ProductsViewProps {
  openQuoteForPlan: (planId: string) => void;
}

export default function ProductsView({ openQuoteForPlan }: ProductsViewProps) {
  const [selectedPlanTab, setSelectedPlanTab] = useState<string>('term-life');
  
  // Dynamic Premium Estimators inside Products Page!
  const [userAge, setUserAge] = useState<number>(30);
  const [sumAssured, setSumAssured] = useState<number>(5000000); 
  const [policyTerm, setPolicyTerm] = useState<number>(20);

  // Application tracker states
  const [trackQuery, setTrackQuery] = useState<string>('');
  const [trackerResult, setTrackerResult] = useState<any | null>(null);
  const [trackerError, setTrackerError] = useState<string>('');

  const currentPlan = INSURANCE_PLANS.find(p => p.id === selectedPlanTab) || INSURANCE_PLANS[0];

  // Dynamic premium logic simulator based on the selected plan parameters
  const calculateSimulatedMonthlyPremium = () => {
    let baseRate = 0.08; // multiplier
    if (selectedPlanTab === 'term-life') baseRate = 0.05;
    if (selectedPlanTab === 'investment') baseRate = 0.12;
    if (selectedPlanTab === 'retirement') baseRate = 0.22;
    if (selectedPlanTab === 'child') baseRate = 0.15;

    // Age factor (older = higher cost)
    const ageFactor = 1 + (userAge - 18) * 0.04;
    
    // Term factor
    const termFactor = 1 + (policyTerm - 10) * 0.01;

    // final calculations
    const annualPremium = (sumAssured / 1000) * baseRate * ageFactor * termFactor;
    const monthlyPremium = Math.round(annualPremium / 12);
    
    return monthlyPremium < 300 ? 300 : monthlyPremium;
  };

  const simulatedPremium = calculateSimulatedMonthlyPremium();

  // Handle Mock Application Tracking searches
  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackerError('');
    setTrackerResult(null);

    const normalQuery = trackQuery.trim().toUpperCase();
    if (!normalQuery) {
      setTrackerError('Please enter a standard application ID.');
      return;
    }

    // Hardcoded demo applications for the real-time tracking feature
    const mockDb: Record<string, any> = {
      'BAL-40292': {
        id: 'BAL-40292',
        applicant: 'Devendra Phadnis',
        plan: 'Wealth & Savings Plan',
        premium: '₹4,500/mo',
        date: 'June 01, 2026',
        currentStep: 3, // out of 4 (0: Intake, 1: e-KYC, 2: Technical/Underwriting, 3: Approved/Dispatched, 4: Active)
        status: 'Dispatched for Policy Delivery',
        location: 'Mumbai fort HQ',
        notes: 'Underwriting cleared. Physical policy bond generated and dispatched via BlueDart courier.'
      },
      'BAL-77283': {
        id: 'BAL-77283',
        applicant: 'Meera Deshmukh',
        plan: 'Smart Child Future Shield',
        premium: '₹3,000/mo',
        date: 'June 03, 2026',
        currentStep: 1,
        status: 'e-KYC Verification Pending',
        location: 'Pune Yerawada Hub',
        notes: 'Waiting for digital Aadhaar verification callback. Advisor must instruct the applicant to check their OTP.'
      },
      'BAL-19299': {
        id: 'BAL-19299',
        applicant: 'Rajesh Saxena',
        plan: 'Guaranteed Pension Annuity',
        premium: '₹12,000/mo',
        date: 'May 28, 2026',
        currentStep: 4,
        status: 'Policy Active & Dispatched',
        location: 'Delhi CP Branch',
        notes: 'First payout scheduled for July 01, 2026. Electronic copy mailed.'
      }
    };

    if (mockDb[normalQuery]) {
      setTrackerResult(mockDb[normalQuery]);
    } else {
      // Generate a dynamic mock response so the portal doesn't fail tracking
      if (normalQuery.startsWith('BAL-')) {
        setTrackerResult({
          id: normalQuery,
          applicant: 'Valued Client (Discovered via Portal)',
          plan: 'Custom Advisory Plan',
          premium: '₹2,500/mo',
          date: 'Just recently',
          currentStep: 2,
          status: 'Underwriting Verification Stack',
          location: 'Regional Hub',
          notes: 'Your documents are being audited. No additional tasks are pending.'
        });
      } else {
        setTrackerError('Application ID unrecognized. Try searching standard demo IDs: BAL-40292, BAL-77283 or BAL-19299');
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen" id="products-view-root">
      
      {/* 1. Header Hero Panel */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-orange-500" id="products-hero">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-block bg-orange-500 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest">
              Digital Advisor Portfolios
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Secure Your Future <br />
              with <span className="text-orange-400">Confidence</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our unified selection of life coverage plans. Use the sliders inside to estimate dynamic customized premium projections instantly.
            </p>
          </div>

          <div className="w-full max-w-md shrink-0 relative">
            <div className="absolute top-0 right-0 bg-blue-600/35 h-36 w-36 rounded-full blur-3xl" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJhggfnW_wSLDcdxzp6dLbcKlt5UmWkfQGJiODxjB0Ejxuki1BePqJBPvBG13Ou59flJELU61KLcP9gYMTA_JJMUIBYXkyc3ufSrKWkvxcnHl-aTagNKnW6-grPG795AcdOTQk62s31wJYDsFo9csi3esG1ONBE3-3LO4NQfo0NivYIRuY1z37y1_vtN7yarzbAMZ_V2tQSx1GLW2lE6FkWmvXzyOO5dNfIsUFKuUNdutDEgNeow-vi99DYiBLMRi7rG4PuhCpJIE"
              alt="Experienced advisor with couple planning insurance outcomes on tablet"
              referrerPolicy="no-referrer"
              className="rounded-xl border border-slate-700 shadow-lg object-cover w-full h-[220px]"
            />
          </div>

        </div>
      </section>

      {/* 2. Interactive Products Hub & Premium Estimator */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="products-interactive-explorer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Plan Tabs & Detailed Description */}
          <div className="lg:col-span-7 space-y-6" id="products-tab-panel">
            
            <div className="text-left">
              <span className="text-blue-600 font-extrabold uppercase text-xs tracking-widest">Product Catalog</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Explore Unified Insurance Portfolios</h2>
              <p className="text-xs text-slate-500 mt-1">Select an insurance category to drill deep into its exclusive benefits and calculate custom estimates.</p>
            </div>

            {/* Horizontal Tabs selector */}
            <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-none space-x-2 pb-2" id="plans-tab-buttons-row">
              {INSURANCE_PLANS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPlanTab(p.id);
                    setUserAge(p.calcParams.defaultAge);
                    setSumAssured(p.calcParams.defaultSumAssured);
                  }}
                  className={`px-4 py-2 text-xs font-bold whitespace-nowrap rounded-lg transition-all cursor-pointer ${
                    selectedPlanTab === p.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Active Tab Details Display */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-2xs space-y-4" id="plans-tab-display">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-blue-900">{currentPlan.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{currentPlan.tagline}</p>
                </div>
                <div className="bg-orange-50 text-orange-700 rounded-lg p-2 shrink-0 text-center border border-orange-100">
                  <span className="text-[10px] uppercase font-mono block">Entry Criteria</span>
                  <span className="text-xs font-bold">{currentPlan.entryAge}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100" id="current-plan-points">
                <span className="text-xs font-bold text-slate-700 block mb-2.5">Key Plan Attributes:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPlan.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                      <span className="text-emerald-500 font-extrabold text-xs shrink-0 mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-3">
                <button
                  onClick={() => openQuoteForPlan(currentPlan.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer"
                >
                  Submit Inquiry for {currentPlan.title}
                </button>
                <span className="text-[10px] text-slate-400">Subject to standard underwriting clearance.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Premium Calculator */}
          <div className="lg:col-span-5" id="products-estimator-panel">
            <div className="bg-slate-900 text-white rounded-xl border border-slate-800 p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Sliders className="h-16 w-16 text-blue-500" />
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Illustrator Core</span>
                <h3 className="text-lg font-extrabold mt-0.5 text-white">Live Premium Projections</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Adjust client attributes below to simulate calculated premiums in real-time.</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                
                {/* Age Input Range */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400 font-medium">Applicant Age (Years)</span>
                    <span className="font-bold text-blue-400">{userAge} yrs</span>
                  </div>
                  <input
                    type="range"
                    min={currentPlan.calcParams.minAge}
                    max={currentPlan.calcParams.maxAge}
                    value={userAge}
                    onChange={(e) => setUserAge(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* Sum Assured Range */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400 font-medium">Coverage/Sum Assured (₹)</span>
                    <span className="font-bold text-blue-400">₹{(sumAssured / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={currentPlan.calcParams.minSumAssured}
                    max={currentPlan.calcParams.maxSumAssured}
                    step={selectedPlanTab === 'term-life' ? 500000 : 100000}
                    value={sumAssured}
                    onChange={(e) => setSumAssured(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>₹{(currentPlan.calcParams.minSumAssured / 100000).toFixed(0)}L</span>
                    <span>₹{(currentPlan.calcParams.maxSumAssured / 10000000).toFixed(0)}Cr</span>
                  </div>
                </div>

                {/* Policy Term Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400 font-medium">Policy Tenure (Years)</span>
                    <span className="font-bold text-blue-400">{policyTerm} yrs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="40"
                    value={policyTerm}
                    onChange={(e) => setPolicyTerm(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

              </div>

              {/* Simulated Output display box */}
              <div className="bg-slate-950 border border-slate-800/85 rounded-lg p-4 mt-6 text-center space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 block font-mono">ESTIMATED PREMIUM</span>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-3xl font-black text-emerald-400" id="calculated-premium">₹{simulatedPremium.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-400">/ Month</span>
                </div>
                <p className="text-[10px] text-slate-500">Premium assumes non-smoker healthy criteria, exclusive of standard GST taxes.</p>
              </div>

              <button
                onClick={() => openQuoteForPlan(selectedPlanTab)}
                className="mt-4 w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Proceed to Application Intake</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Fast Issuance & Real-time Tracking Panel */}
      <section className="bg-white border-y border-slate-200 py-16 px-4" id="payout-tracking-core">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Dashboard Left Image Overlay */}
          <div className="lg:col-span-5 relative" id="payout-image-wrapper">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-20 blur-lg" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-xl bg-slate-900">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtdfzGpb4v1oN9al7DogC2o4MJWhRGOVMG-q5QxeG-sJ-OUFINZqVoppqugIcdpK_hX3dxzuSmZgpofeiJpW3webVfSUoOavn1dERYayptgpr2A0ODm2MGl8h3dGaM-j7wz84L-GeU_G7ctsvyEyJXJK5joq8Qy3ytiQzwMWDzwO_bDjYL8D0oOfvgIekoeiiMZTK5mN0kpkk8S03Wteusm_aboZjToembogFUvHIRKF05lW4ezag4sXVYYb6mAhleB7lwivXGoI"
                alt="Bajaj Partner tracking dashboard on a tablet computer"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[350px] group-hover:scale-102 transition duration-500"
              />
            </div>
          </div>

          {/* Interactive Tracker & Fast Issuance Details */}
          <div className="lg:col-span-7 space-y-6" id="payout-features">
            <div className="text-left">
              <span className="text-orange-500 font-extrabold uppercase text-xs tracking-widest block">Process Efficiency</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Fast Issuance & Real-time Tracking</h2>
              <p className="text-xs text-slate-500 mt-1">Our digitized proposal system bypasses heavy physical underwriting waiting times.</p>
            </div>

            {/* Features Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100" id="efficiency-boxes">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">4-Hour Turnaround Time</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Most term plans with valid electronic KYC credentials are approved in under 4 hours.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">99.04% Claims Settlement Ratio</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Continuous ranking among India's most creditworthy providers with over ₹10,244 Cr claims settled.</p>
                </div>
              </div>
            </div>

            {/* Interactive Application Tracker Widget */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5" id="interactive-tracking-widget">
              <h4 className="text-xs font-bold text-slate-800 flex items-center space-x-1.5 mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Interactive Application Tracker</span>
              </h4>
              <p className="text-[11px] text-slate-500 mb-4">
                Enter your Bajaj Allianz proposal/application number to fetch dynamic processing updates.
              </p>

              <form onSubmit={handleTrackSearch} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g. BAL-40292"
                  value={trackQuery}
                  onChange={(e) => setTrackQuery(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 border border-slate-300 rounded-md bg-white uppercase outline-hidden focus:border-blue-600 font-mono tracking-wider"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-md transition-all flex items-center space-x-1 cursor-pointer"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span>Search</span>
                </button>
              </form>

              {trackerError && (
                <p className="text-[10px] text-rose-600 font-bold mt-1.5">{trackerError}</p>
              )}

              <AnimatePresence mode="wait">
                {trackerResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-slate-200 space-y-4 text-xs"
                    id="tracker-result-card"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <span className="text-[9px] uppercase font-mono text-slate-400 block">APPLICANT</span>
                        <span className="font-bold text-slate-800">{trackerResult.applicant}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-mono text-slate-400 block">APPLICATION ID</span>
                        <span className="font-mono text-blue-700 font-extrabold">{trackerResult.id}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-mono text-slate-400 block">PRODUCT PORTFOLIO</span>
                        <span className="font-bold text-slate-600">{trackerResult.plan}</span>
                      </div>
                    </div>

                    {/* Stepper tracker */}
                    <div className="py-2">
                      <div className="flex justify-between items-center relative mb-4">
                        <div className="absolute left-0 right-0 h-1 bg-slate-200 z-0" />
                        <div 
                          className="absolute left-0 h-1 bg-blue-600 z-0 transition-all duration-500" 
                          style={{ width: `${(trackerResult.currentStep / 4) * 100}%` }}
                        />
                        
                        {['Intake', 'KYC Audit', 'Underwriting', 'Dispatched', 'Active'].map((step, idx) => (
                          <div key={idx} className="flex flex-col items-center z-10">
                            <div 
                              className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-[10px] border shadow-xs transition-all ${
                                idx <= trackerResult.currentStep 
                                  ? 'bg-blue-600 border-blue-700 text-white' 
                                  : 'bg-white border-slate-200 text-slate-400'
                              }`}
                            >
                              {idx + 1}
                            </div>
                            <span className="text-[9px] font-medium text-slate-500 mt-1 hidden sm:inline">{step}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-xs leading-relaxed space-y-1">
                        <div className="flex items-center space-x-1.5 text-blue-900 font-bold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                          <span>Status: {trackerResult.status}</span>
                        </div>
                        <p className="text-[11px] text-slate-600">{trackerResult.notes}</p>
                        <span className="text-[9px] text-slate-400 block pt-1.5 border-t border-slate-100/50 font-mono">Location Assigned: {trackerResult.location}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-slate-400 justify-start">
                <span>Try Demo IDs:</span>
                <button type="button" onClick={() => setTrackQuery('BAL-40292')} className="font-mono text-blue-600 underline cursor-pointer">BAL-40292</button>
                <span>&bull;</span>
                <button type="button" onClick={() => setTrackQuery('BAL-77283')} className="font-mono text-blue-600 underline cursor-pointer">BAL-77283</button>
                <span>&bull;</span>
                <button type="button" onClick={() => setTrackQuery('BAL-19299')} className="font-mono text-blue-600 underline cursor-pointer">BAL-19299</button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
