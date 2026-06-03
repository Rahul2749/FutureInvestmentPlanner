import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Sparkles,
  Phone,
  Mail,
  Lock,
  Clock,
  Heart,
  Star,
  Award
} from 'lucide-react';
import { ConsultationInquiry } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openQuoteForPlan: (planId: string) => void;
  onSubmitConsultation: (inquiry: Omit<ConsultationInquiry, 'id' | 'date' | 'status'>) => void;
}

export default function HomeView({ setActiveTab, openQuoteForPlan }: HomeViewProps) {
  return (
    <div className="bg-slate-50 min-h-screen font-sans" id="home-view-root">
      
      {/* 1. Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8" id="home-hero">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-taglines">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 font-mono text-xs px-3 py-1.5 rounded-full border border-blue-400/30">
              <ShieldCheck className="h-4 w-4 text-orange-400 animate-pulse" />
              <span>Authorized Retail Partner – Bajaj Life Insurance</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Protecting What <br />
              <span className="text-orange-400">Matters Most</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Secure your family's future, children's education, and your retirement with India's most trusted insurance partnership model.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => openQuoteForPlan('term-life')}
                id="btn-hero-quote"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                <ShieldCheck className="h-5 w-5" />
                <span>Get a Free Quote</span>
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20Sahiti,%20I'm%20interested%20in%20learning%20more%20about%20Bajaj%20Life%20Insurance%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.465L0 24zm6.26-4.148c1.657.983 3.327 1.498 5.694 1.499 5.539 0 10.05-4.48 10.054-9.988.002-2.67-1.026-5.18-2.894-7.052C17.29 2.44 14.78 1.41 12.016 1.41 6.502 1.41 1.992 5.89 1.988 11.399c-.001 2.222.548 4.39 1.587 6.189l-.993 3.626 3.735-.972zm12.39-7.25c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.584.067-.27-.134-1.14-.42-2.172-1.341-.803-.715-1.344-1.602-1.502-1.872-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.456-.607-.464-.157-.008-.337-.009-.517-.009-.18 0-.472.067-.719.337-.247.27-.944.923-.944 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.074.644.278 1.147.445 1.538.569.647.206 1.236.177 1.701.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.112-.247-.202-.516-.337z"/>
                </svg>
                <span>Talk on WhatsApp</span>
              </a>
            </div>

            {/* Badges below buttons */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>23+ Lakh Claims Settled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-orange-400" />
                <span>Trusted by Millions of Families</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-blue-400" />
                <span>India's Most Trusted Insurer</span>
              </div>
            </div>
          </div>

          {/* Right Advisor Card Frame */}
          <div className="lg:col-span-5 relative" id="hero-image-wrapper">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-20 blur-lg" />
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl text-slate-900 border border-slate-100 flex flex-col items-center text-center">
              
              {/* Profile Image with Verified Badge */}
              <div className="relative h-28 w-28 mb-4">
                <img
                  src="/sahiti_kotturty.png"
                  alt="Sahiti Kotturty Headshot"
                  className="rounded-full h-full w-full object-cover border-4 border-slate-100 shadow-md"
                />
                <div className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow-xs">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              {/* Profile Info */}
              <h3 className="text-xl font-extrabold text-blue-900">Sahiti Kotturty</h3>
              <p className="text-xs font-bold text-blue-600 mt-0.5">Authorized Retail Partner</p>
              
              <span className="mt-3 px-4 py-1.5 bg-blue-50 text-blue-800 text-xs font-bold rounded-full">
                RP Code: BAL123456
              </span>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full space-y-2">
                <div className="flex items-center justify-center space-x-1.5 text-slate-700 text-xs font-semibold">
                  <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                  <span>Trusted. Certified. Committed.</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                  Helping you build a secure tomorrow, today.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Official Authorization Notice Bar */}
      <section className="bg-white border-b border-slate-100 py-4 px-4 text-center">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs font-semibold text-slate-700">
          <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
          <span>Officially Authorized to Sell Bajaj Life Insurance Products.</span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-500 font-normal">This website is operated by an Authorized Retail Partner of Bajaj Life Insurance Co. Ltd.</span>
        </div>
      </section>

      {/* 3. Why Families Choose Me Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto" id="why-choose-me">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Families Choose Me</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Personalized Guidance',
              description: 'Plans designed as per your life goals and financial needs.',
              icon: Users,
              color: 'bg-blue-50 text-blue-600'
            },
            {
              title: 'Trusted Solutions',
              description: 'Access to a wide range of Bajaj Life Insurance plans.',
              icon: Award,
              color: 'bg-orange-50 text-orange-600'
            },
            {
              title: 'Fast Claim Assistance',
              description: 'End-to-end support for a hassle-free claim experience.',
              icon: ShieldCheck,
              color: 'bg-emerald-50 text-emerald-600'
            },
            {
              title: 'Long-term Relationship',
              description: "I'm with you at every stage of your life journey.",
              icon: Heart,
              color: 'bg-purple-50 text-purple-600'
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className={`p-4 rounded-full ${card.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Let's Plan Your Secure Future Section */}
      <section className="bg-slate-50 py-16 px-4 border-t border-slate-100" id="plan-secure-future">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Family Image with Overlay */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200">
              <img
                src="/family_future.png"
                alt="Happy Indian Family"
                className="w-full h-auto object-cover max-h-[420px]"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-blue-900/95 backdrop-blur-md p-5 rounded-xl border border-white/10 text-white flex items-start space-x-3.5 max-w-sm">
                <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0 shadow-md">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm">Future Secure Life</h4>
                  <p className="text-[10px] text-slate-300 font-medium uppercase tracking-wider mt-0.5">Protecting Your Family's Future</p>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                    Over 23 Lakh active claims settled across India during FY23-24.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact CTA Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Let's Plan Your Secure Future</h2>
              <p className="text-sm text-slate-500 mt-1">I'm here to help you choose the right plan.</p>
            </div>

            <div className="space-y-3">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi%20Sahiti,%20I'd%20like%20to%20plan%20my%20future%20investments."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-full">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.465L0 24zm6.26-4.148c1.657.983 3.327 1.498 5.694 1.499 5.539 0 10.05-4.48 10.054-9.988.002-2.67-1.026-5.18-2.894-7.052C17.29 2.44 14.78 1.41 12.016 1.41 6.502 1.41 1.992 5.89 1.988 11.399c-.001 2.222.548 4.39 1.587 6.189l-.993 3.626 3.735-.972zm12.39-7.25c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.584.067-.27-.134-1.14-.42-2.172-1.341-.803-.715-1.344-1.602-1.502-1.872-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.456-.607-.464-.157-.008-.337-.009-.517-.009-.18 0-.472.067-.719.337-.247.27-.944.923-.944 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.074.644.278 1.147.445 1.538.569.647.206 1.236.177 1.701.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.112-.247-.202-.516-.337z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Talk on WhatsApp</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Get instant help & quotes</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>

              {/* Call CTA */}
              <a
                href="tel:+919876543210"
                className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Call Me</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">+91 98765 43210</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>

              {/* Email CTA */}
              <a
                href="mailto:sahitikotturty@gmail.com"
                className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Email Me</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">sahitikotturty@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Highlight Badges Footer Bar */}
      <section className="bg-blue-900 py-10 px-4 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <ShieldCheck className="h-7 w-7 text-orange-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Wide Range of Plans</h4>
            <p className="text-[10px] text-blue-200">Savings, Protection, Retirement & more</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Lock className="h-7 w-7 text-orange-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider">100% Secure</h4>
            <p className="text-[10px] text-blue-200">Your data is safe with us</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Users className="h-7 w-7 text-orange-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Expert Support</h4>
            <p className="text-[10px] text-blue-200">I'm just a call away</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Clock className="h-7 w-7 text-orange-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Always With You</h4>
            <p className="text-[10px] text-blue-200">After-sales support you can count on</p>
          </div>
        </div>
      </section>

    </div>
  );
}
