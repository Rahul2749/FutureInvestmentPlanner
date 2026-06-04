import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  Users, 
  Phone,
  Mail,
  Lock,
  Clock,
  Heart,
  Star,
  Award,
  ArrowRight,
  Smartphone,
  Home,
  CreditCard,
  Building,
  GraduationCap,
  TrendingUp,
  Pill,
  HeartHandshake,
  Briefcase
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
      <section className="relative overflow-hidden bg-[#005AAA] text-white py-16 px-4 sm:px-8 lg:px-16" id="home-hero">
        <div className="absolute inset-0 bg-white/5" />
        
        <div className="mx-auto max-w-none grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-taglines">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white font-semibold text-xs px-4 py-2 rounded border border-white/20 uppercase tracking-wide">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              <span>Authorized Retail Partner – Bajaj Life Insurance</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Protecting What <br />
              <span className="text-orange-400">Matters Most</span>
            </h1>
            
            <p className="text-base sm:text-lg text-blue-50 max-w-xl leading-relaxed font-medium">
              Secure your family's future, children's education, and your retirement with India's most trusted insurance partnership model.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => openQuoteForPlan('term-life')}
                id="btn-hero-quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded shadow-sm hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
              >
                <ShieldCheck className="h-5 w-5" />
                <span>Get a Free Quote</span>
              </button>
              <a
                href="https://wa.me/919423383890?text=Hi%20Sahiti,%20I'm%20interested%20in%20learning%20more%20about%20Bajaj%20Life%20Insurance%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-[#005AAA] font-bold px-8 py-3.5 rounded shadow-sm hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer border border-transparent"
              >
                <svg className="h-5 w-5 fill-current text-emerald-500" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.465L0 24zm6.26-4.148c1.657.983 3.327 1.498 5.694 1.499 5.539 0 10.05-4.48 10.054-9.988.002-2.67-1.026-5.18-2.894-7.052C17.29 2.44 14.78 1.41 12.016 1.41 6.502 1.41 1.992 5.89 1.988 11.399c-.001 2.222.548 4.39 1.587 6.189l-.993 3.626 3.735-.972zm12.39-7.25c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.584.067-.27-.134-1.14-.42-2.172-1.341-.803-.715-1.344-1.602-1.502-1.872-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.456-.607-.464-.157-.008-.337-.009-.517-.009-.18 0-.472.067-.719.337-.247.27-.944.923-.944 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.074.644.278 1.147.445 1.538.569.647.206 1.236.177 1.701.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.112-.247-.202-.516-.337z"/>
                </svg>
                <span>Talk on WhatsApp</span>
              </a>
            </div>

            {/* Badges below buttons */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20 text-xs text-white/90 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-orange-400" />
                <span>23+ Lakh Claims Settled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-orange-400" />
                <span>Trusted by Millions of Families</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-orange-400" />
                <span>India's Most Trusted Insurer</span>
              </div>
            </div>
          </div>

          {/* Right Advisor Card Frame */}
          <div className="lg:col-span-5 relative" id="hero-image-wrapper">
            <div className="relative bg-white rounded-xl p-8 shadow-xl text-slate-900 flex flex-col items-center text-center">
              
              {/* Profile Image with Verified Badge */}
              <div className="relative h-32 w-32 mb-5">
                <img
                  src="/sahiti_kotturty.png"
                  alt="Sahiti Kotturty Headshot"
                  className="rounded-full h-full w-full object-cover shadow-sm"
                />
                <div className="absolute bottom-1 right-1 bg-orange-500 text-white rounded-full p-1.5 border-2 border-white shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              {/* Profile Info */}
              <h3 className="text-2xl font-bold text-[#005AAA]">Sahiti Kotturty</h3>
              <p className="text-sm font-semibold text-slate-600 mt-1">Authorized Retail Partner</p>
              
              <span className="mt-4 px-4 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded">
                RPD Emp code : VA 10044791
              </span>

              <div className="mt-6 w-full space-y-2">
                <div className="flex items-center justify-center space-x-1.5 text-slate-700 text-sm font-semibold">
                  <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                  <span>Trusted. Certified. Committed.</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                  Helping you build a secure tomorrow, today.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Official Authorization Notice Bar */}
      <section className="bg-white border-b border-slate-100 py-4 px-4 text-center">
        <div className="mx-auto max-w-none px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs font-semibold text-slate-700">
          <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
          <span>Officially Authorized to Sell Bajaj Life Insurance Products.</span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-500 font-normal">This website is operated by an Authorized Retail Partner of Bajaj Life Insurance Co. Ltd.</span>
        </div>
      </section>

      {/* 3. Why Families Choose Me Section */}
      <section className="py-16 px-4 max-w-none sm:px-8 lg:px-16 mx-auto" id="why-choose-me">
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
      <section className="bg-slate-50 py-16 px-4 sm:px-8 lg:px-16 border-t border-slate-100" id="plan-secure-future">
        <div className="max-w-none mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
                href="https://wa.me/919423383890?text=Hi%20Sahiti,%20I'd%20like%20to%20plan%20my%20future%20investments."
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
                href="tel:+919423383890"
                className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Call Me</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">+91 94233 83890</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>

              {/* Email CTA */}
              <a
                href="mailto:skotturty@gmail.com"
                className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Email Me</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">skotturty@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-[#005AAA] py-16 px-4 sm:px-8 lg:px-16 text-white overflow-hidden relative">
        <div className="max-w-none mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-white text-[#005AAA] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              Career Growth
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Join Our Team as a <br />
              Financial Advisor
            </h2>
            
            <p className="text-sm text-blue-100 max-w-lg leading-relaxed font-medium">
              Unlock a rewarding opportunity for part-time or full-time income while helping people secure their financial future. We are looking for motivated individuals from diverse professional backgrounds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                { icon: <Smartphone className="h-4 w-4" />, text: "Mobile Shop Owners" },
                { icon: <Home className="h-4 w-4" />, text: "Real Estate Agents" },
                { icon: <CreditCard className="h-4 w-4" />, text: "Loan DST Agents" },
                { icon: <Building className="h-4 w-4" />, text: "Retired Bank Staff" },
                { icon: <GraduationCap className="h-4 w-4" />, text: "Teachers/Lecturers" },
                { icon: <TrendingUp className="h-4 w-4" />, text: "MF Distributors" },
                { icon: <Pill className="h-4 w-4" />, text: "Medical Shop/Reps" },
                { icon: <HeartHandshake className="h-4 w-4" />, text: "Social Housewives" },
                { icon: <Briefcase className="h-4 w-4" />, text: "Business Owners" }
              ].map((role, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 bg-blue-600/30 border border-blue-400/30 px-3 py-2.5 rounded shadow-sm">
                  <div className="text-orange-400">{role.icon}</div>
                  <span className="text-xs font-bold">{role.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button 
                onClick={() => setActiveTab('partner')}
                className="bg-[#E25224] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Apply Now
              </button>
              <a 
                href="https://wa.me/919423383890?text=Hi%20Sahiti,%20I'm%20interested%20in%20joining%20as%20a%20Financial%20Advisor."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded border-2 border-white shadow-sm hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.465L0 24zm6.26-4.148c1.657.983 3.327 1.498 5.694 1.499 5.539 0 10.05-4.48 10.054-9.988.002-2.67-1.026-5.18-2.894-7.052C17.29 2.44 14.78 1.41 12.016 1.41 6.502 1.41 1.992 5.89 1.988 11.399c-.001 2.222.548 4.39 1.587 6.189l-.993 3.626 3.735-.972zm12.39-7.25c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.584.067-.27-.134-1.14-.42-2.172-1.341-.803-.715-1.344-1.602-1.502-1.872-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.456-.607-.464-.157-.008-.337-.009-.517-.009-.18 0-.472.067-.719.337-.247.27-.944.923-.944 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.074.644.278 1.147.445 1.538.569.647.206 1.236.177 1.701.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.112-.247-.202-.516-.337z"/>
                </svg>
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white p-2 rounded-[2rem] shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[500px] ml-auto">
              <img 
                src="/team_meeting.png" 
                alt="Financial Advisor Team Meeting" 
                className="w-full h-auto object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. Highlight Badges Footer Bar */}
      <section className="bg-blue-900 py-10 px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-none mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
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
