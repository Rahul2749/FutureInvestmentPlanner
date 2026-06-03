import React from 'react';
import { ShieldAlert, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" id="footer-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-1" id="footer-col-brand">
            <h3 className="font-sans text-xl font-black text-white tracking-tight mb-3">
              BAJAJ <span className="text-orange-500">Allianz</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Serving citizens across India with robust life protection solutions, guaranteed retirement pensions, high growth investment vehicles, and custom milestone education funds.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-blue-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>IRDAI Registration No. 116</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-col-links">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Our Portfolios</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer">
                  Term Life Protection
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer">
                  Guaranteed Wealth Growth
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer">
                  Immediate Pension Plans
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer">
                  Child Education Funding
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Partnership Channels */}
          <div id="footer-col-channels">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Become a Partner</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('partner')} className="hover:text-white transition-colors cursor-pointer">
                  Strategic Retail Advisor Program
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('partner')} className="hover:text-white transition-colors cursor-pointer">
                  Commission Payout Schedule
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('partner')} className="hover:text-white transition-colors cursor-pointer">
                  State-of-the-Art Digital Training
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('partner')} className="hover:text-white transition-colors cursor-pointer">
                  Partner Success Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & HQ */}
          <div id="footer-col-hq">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Corporate Headquarters</h4>
            <ul className="space-y-2 text-xs leading-relaxed">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>GE Plaza, Airport Road, Yerawada, Pune - 411006, Maharashtra.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500 shrink-0" />
                <span>1800 209 7272 (Toll Free)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <span>customercare@bajajallianz.co.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-6 text-[10px] text-slate-400 leading-relaxed" id="footer-disclaimer">
          <div className="flex items-center space-x-2 mb-1.5 text-orange-400 font-bold">
            <ShieldAlert className="h-4 w-4 shrink-0" />
            <span>BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS/FRAUDULENT OFFERS</span>
          </div>
          <p>
            IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint. Insurance is the subject matter of solicitation. For more details on risk factors, terms and conditions, please read the dynamic sales brochure carefully before concluding a sale. Tax benefits are subject to change in relevant taxation guidelines.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500" id="footer-bottom">
          <p>&copy; {currentYear} Bajaj Allianz Life Insurance Co. Ltd. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Use</span>
            <span>&bull;</span>
            <a 
              href="https://www.bajajallianzlife.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1 hover:text-slate-300"
            >
              <span>Official Website</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
