import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Search, 
  Clock, 
  UserPlus, 
  CheckCircle, 
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import { EXPERTS, BRANCHES } from '../data';
import { Branch } from '../types';

interface AboutContactViewProps {
  onSendMessage: (msg: { name: string; email: string; phone: string; message: string; topic: string }) => void;
}

export default function AboutContactView({ onSendMessage }: AboutContactViewProps) {
  // General Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    topic: 'Partnership Setup'
  });
  const [msgSuccess, setMsgSuccess] = useState(false);

  // Dynamic Pincode Branch Locator States
  const [searchPincode, setSearchPincode] = useState('');
  const [locatorCity, setLocatorCity] = useState('');
  const [foundBranch, setFoundBranch] = useState<Branch | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  // Direct Experts Appointment States
  const [activeExpertId, setActiveExpertId] = useState<string | null>(null);
  const [aptDate, setAptDate] = useState('');
  const [aptTime, setAptTime] = useState('11:00 AM');
  const [aptSuccess, setAptSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    onSendMessage(formData);
    setMsgSuccess(true);
    setTimeout(() => {
      setMsgSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        topic: 'Partnership Setup'
      });
    }, 5000);
  };

  // Branch Pincode Search Utility
  const handleBranchLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchAttempted(true);
    setFoundBranch(null);

    const zip = searchPincode.trim().substring(0, 6);
    
    // Exact pincode match
    const matchByZip = BRANCHES.find(b => b.pincode === zip);
    if (matchByZip) {
      setFoundBranch(matchByZip);
      return;
    }

    // fallback matching city
    if (locatorCity) {
      const matchByCity = BRANCHES.find(b => b.city.toLowerCase() === locatorCity.toLowerCase());
      if (matchByCity) {
        setFoundBranch(matchByCity);
        return;
      }
    }

    // partial pincode search
    if (zip.length >= 2) {
      const partialMatch = BRANCHES.find(b => b.pincode.startsWith(zip.substring(0, 2)));
      if (partialMatch) {
        setFoundBranch(partialMatch);
      }
    }
  };

  const handleScheduleAppt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aptDate) {
      alert('Please select a preferred date.');
      return;
    }
    setAptSuccess(true);
    setTimeout(() => {
      setAptSuccess(false);
      setActiveExpertId(null);
      setAptDate('');
    }, 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen" id="about-view-root">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-orange-500" id="about-hero">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mission values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-orange-500 font-extrabold uppercase text-xs tracking-widest block">Core Lineage</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Your Local Partner in <br />
              <span className="text-blue-400">Financial Security</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Backed by the solid financial trust legacy of Bajaj Life Insurance. We are committed to translating complex protection schemes into everyday reliable household tools, assisting millions of Indian families to retire worry-free.
            </p>
            <div className="bg-slate-950 bg-opacity-70 p-4 rounded-xl border border-slate-800 flex gap-4 max-w-xl">
              <div className="h-10 w-10 shrink-0 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold font-mono">20+</div>
              <div>
                <h4 className="text-xs font-bold text-white">Years of Claim Integrity</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Continuous ranking among India's elite claim resolution hubs under strict IRDAI audit metrics.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative" id="about-hero-image">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-20 blur-lg" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8fpWvVHE6u5BKblugqFQn2g-E9j47RSyYYAiiW73sPWt3yUn-GacCWm-fhZkmvLSamGIWGCFXVZVm2-9Tgq4LtKuvaEvisP6IZgwSEt2oPUtkMMTbIYgJFn6U6aN9HeEHLshr9vOpDUuTqi-ZEmGlW6NknR5Pst4EwwDgvg51-2pH8wuy9d3se5LDV_pDClB50xxeYBACmxIVh_okEDYOI-h5WqssCH4sr23PSHLD0THFHhdvNcWXHDyyuNygXdbh6eFx3tflY2k"
              alt="Bajaj Life state-of-the-art advisor office building represent global operations presence"
              referrerPolicy="no-referrer"
              className="rounded-2xl border border-slate-700 shadow-2xl object-cover w-full h-[220px]"
            />
          </div>

        </div>
      </section>

      {/* 2. Meet Your Local Experts */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="agency-team-experts">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-extrabold uppercase text-xs tracking-widest">Advisory Leadership</span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">Meet Your Local Experts</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">Get in touch directly with our highly certified regional agency managers to consult and structure customized corporate or family protection plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="team-experts-grid">
          {EXPERTS.map((expert) => (
            <div 
              key={expert.id} 
              className="bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-sm hover:border-blue-100/70 p-5 flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden h-[240px] border border-slate-100 bg-slate-100">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 bg-slate-900/90 text-white font-mono text-[9px] font-bold tracking-wider px-2 py-1 rounded-sm uppercase">
                    {expert.experience} Experience
                  </span>
                </div>

                <div className="text-left space-y-1">
                  <h4 className="text-base font-black text-slate-900">{expert.name}</h4>
                  <p className="text-xs text-blue-700 font-bold">{expert.role}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{expert.specialty}</p>
                </div>
              </div>

              {/* Direct Appointment CTA */}
              <div className="pt-4 border-t border-slate-100 mt-5 flex justify-between items-center text-xs">
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 block font-mono">EMAIL DIRECT</span>
                  <a href={`mailto:${expert.email}`} className="font-semibold text-slate-700 hover:text-blue-600">{expert.email}</a>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveExpertId(expert.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-md transition-all cursor-pointer"
                >
                  Schedule Meet
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet scheduling popup modal */}
      <AnimatePresence>
        {activeExpertId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="expert-appt-modal">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveExpertId(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs" 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative max-w-sm w-full bg-white rounded-2xl shadow-2xl p-6 space-y-4 text-left"
            >
              {EXPERTS.filter(e => e.id === activeExpertId).map(e => (
                <div key={e.id} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img src={e.image} alt={e.name} referrerPolicy="no-referrer" className="h-12 w-12 rounded-full border border-orange-500 object-cover" />
                    <div>
                      <h4 className="font-extrabold text-slate-900">{e.name}</h4>
                      <p className="text-xs text-blue-700 font-medium">{e.role}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {aptSuccess ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-center font-medium text-xs leading-relaxed"
                        id="appt-success-msg"
                      >
                        <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-1 animate-bounce" />
                        <span>Interactive Appointment Requested!</span>
                        <p className="text-[11px] text-emerald-600 mt-1">
                          Our agency manager is notified. Confirmation dispatched under hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleScheduleAppt} className="space-y-3 pt-2">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Select Consultation Date</label>
                          <input
                            type="date"
                            required
                            value={aptDate}
                            onChange={(e) => setAptDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full text-xs border border-slate-300 rounded-md p-2 outline-hidden focus:border-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Time Block</label>
                          <select
                            value={aptTime}
                            onChange={(e) => setAptTime(e.target.value)}
                            className="w-full text-xs border border-slate-300 rounded-md p-2 bg-white outline-hidden focus:border-blue-600"
                          >
                            <option value="10:00 AM">10:00 AM (Morning block)</option>
                            <option value="11:30 AM">11:30 AM (Midday block)</option>
                            <option value="02:30 PM">02:30 PM (Mid-Afternoon)</option>
                            <option value="04:00 PM">04:00 PM (Late evening)</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => setActiveExpertId(null)}
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold p-2 rounded-md transition-all cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold p-2 rounded-md transition-all cursor-pointer"
                          >
                            Confirm Appointment
                          </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Get in Touch Contact Intake Form */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-200" id="contact-intake-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form left block */}
          <div className="lg:col-span-7 bg-white border border-slate-150 p-6 sm:p-8 rounded-2xl shadow-xs" id="custom-contact-form-col">
            <h3 className="text-xl font-extrabold text-blue-900 mb-1">Get in Touch Directly</h3>
            <p className="text-xs text-slate-500 mb-6">Have strategic partnership or licensing questions? Send a direct dispatch to our audit team.</p>

            <AnimatePresence>
              {msgSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-250 text-emerald-800 p-5 rounded-lg text-center"
                  id="message-success-feedback"
                >
                  <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto mb-2 animate-pulse" />
                  <h4 className="font-bold text-sm">Message Recorded</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Our partner coordinators have preserved your query. We will respond within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4" id="general-contact-message-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ramesh Kumar"
                        className="w-full text-xs font-semibold p-2.5 border border-slate-200 rounded-md bg-white outline-hidden focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ramesh@gmail.com"
                        className="w-full text-xs font-semibold p-2.5 border border-slate-200 rounded-md bg-white outline-hidden focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        placeholder="98XXXXXXXX"
                        pattern="^[6789]\d{9}$"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full text-xs font-semibold p-2.5 border border-slate-200 rounded-md bg-white outline-hidden focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Subject / Query Topic *</label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full text-xs font-semibold p-2.5 border border-slate-200 rounded-md bg-white outline-hidden focus:border-blue-600"
                      >
                        <option value="Partnership Setup">Become a Strategic Partner</option>
                        <option value="Premium Inquiry">Calculate Plan Premiums</option>
                        <option value="Claims Information">Claims & Settlements Query</option>
                        <option value="Careers / Jobs">Licensing examinations & Careers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Detailed Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please type your detailed questions regarding licensing, area office location coords, etc..."
                      className="w-full text-xs font-semibold p-2.5 border border-slate-200 rounded-md bg-white outline-hidden focus:border-blue-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold p-3 rounded-lg mt-3 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Map & Office Address Right Block */}
          <div className="lg:col-span-5 space-y-6" id="local-office-map-block">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-650 mb-3 shrink-0">
                <Building className="h-5 w-5" />
              </div>
              <h4 className="text-base font-black text-slate-900 leading-tight">Headquarters Coordinates</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Bajaj Life Insurance Co. Ltd.<br />
                GE Plaza, Airport Road, Yerawada,<br />
                Pune - 411006, Maharashtra.
              </p>
              <div className="text-xs space-y-1 mt-4 pt-4 border-t border-slate-150 text-slate-600 leading-relaxed font-mono">
                <div className="flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5 text-blue-600" />
                  <span>1800-209-7272 (Toll-Free)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5 text-blue-600" />
                  <span>customercare@bajajlife.com</span>
                </div>
              </div>
            </div>

            {/* Interactive Local Branch Locator Tool */}
            <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-md">
              <h4 className="text-sm font-extrabold flex items-center space-x-1.5 mb-1.5 text-orange-400">
                <MapPin className="h-4 w-4" />
                <span>Interactive Branch Office Locator</span>
              </h4>
              <p className="text-[11px] text-slate-350 leading-relaxed mb-4">
                Enter your area Pincode or closest City to find our certified regional operations branch.
              </p>

              <form onSubmit={handleBranchLookup} className="space-y-3" id="branch-locator-form">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Pincode e.g. 400001"
                    value={searchPincode}
                    onChange={(e) => setSearchPincode(e.target.value.replace(/\D/g, ''))}
                    className="text-xs p-2.5 border border-slate-800 bg-slate-950 text-white rounded-md font-mono"
                  />
                  <input
                    type="text"
                    placeholder="City e.g. Pune"
                    value={locatorCity}
                    onChange={(e) => setLocatorCity(e.target.value)}
                    className="text-xs p-2.5 border border-slate-800 bg-slate-950 text-white rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span>Search Nearest Branch</span>
                </button>
              </form>

              <AnimatePresence mode="wait">
                {foundBranch ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0 }}
                    className="bg-slate-950 border border-slate-800 p-3 rounded-lg mt-4 text-xs space-y-1.5 text-left"
                    id="branch-found-card"
                  >
                    <span className="text-[9px] uppercase font-mono font-bold text-orange-400">Nearest Branch Found</span>
                    <h5 className="font-extrabold text-white">{foundBranch.name}</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{foundBranch.address}</p>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-1.5 border-t border-slate-800">
                      <span>Phone: {foundBranch.phone}</span>
                      <span>PIN: {foundBranch.pincode}</span>
                    </div>
                  </motion.div>
                ) : (
                  searchAttempted && (
                    <p className="text-[10px] text-orange-400 mt-2 font-medium">No custom branch matched exactly. Try standard test Pincodes: 400001 (Mumbai), 110001 (Delhi), 560001 (Bengaluru), 411001 (Pune), 700001 (Kolkata).</p>
                  )
                )}
              </AnimatePresence>
            </div>
            
            {/* Map Placeholder Image requested */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
              <div className="bg-slate-950 bg-opacity-30 absolute inset-0 flex items-center justify-center text-white pointer-events-none p-4">
                <span className="text-xs font-mono font-bold text-center bg-slate-900 bg-opacity-70 px-3 py-1.5 rounded-md">General Office Location Layout</span>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyMK9X1FL8szQaMvefywfOSYyrPFOoyP82NxtCftu4Fri5CfJ9Dp3YjAxrhPU4SEtx6-lH4WEo1pJiViAd7cc44ZwTW22jt4-_7DDu_hzAPAkEAJ5WpMUtbpSqk5klK7Ea7F6Q_ywhYHkwxNFg_8WAPZo4mxkcCDOeb1tQMZdqiIiuWeXjyb1U2Ril1Pwaz5hQ_6gWXGXXrbuhK4eerhwMnC-SkQSbLJ0Y0u8Spm4mmMfWCY92qlvT4EWOrAGOOkcpX_kRKzxiDbs"
                alt="Detailed Bajaj insurance local area street intersection locator guidelines map"
                referrerPolicy="no-referrer"
                className="w-full h-[180px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
