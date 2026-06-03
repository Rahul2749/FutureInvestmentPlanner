import React from 'react';
import { ShieldAlert, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" id="main-footer">
      <div className="mx-auto max-w-none px-4 sm:px-8 lg:px-16 py-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" id="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1" id="footer-col-brand">
            <h3 className="font-sans text-xl font-black text-white tracking-tight mb-3">
              BAJAJ <span className="text-orange-500 font-bold">Life Insurance</span>
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
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('partner')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Become Partner
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div id="footer-col-products">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Products</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Term Insurance
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Savings Plan
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Child Education Plan
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Retirement Plan
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  ULIP Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Me */}
          <div id="footer-col-connect">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Connect With Me</h4>
            
            {/* Social Icons Strip */}
            <div className="flex space-x-3 mb-4">
              <a href="https://wa.me/919423383890" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-800 hover:bg-emerald-600 rounded-full text-slate-300 hover:text-white transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.465L0 24zm6.26-4.148c1.657.983 3.327 1.498 5.694 1.499 5.539 0 10.05-4.48 10.054-9.988.002-2.67-1.026-5.18-2.894-7.052C17.29 2.44 14.78 1.41 12.016 1.41 6.502 1.41 1.992 5.89 1.988 11.399c-.001 2.222.548 4.39 1.587 6.189l-.993 3.626 3.735-.972zm12.39-7.25c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.584.067-.27-.134-1.14-.42-2.172-1.341-.803-.715-1.344-1.602-1.502-1.872-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.456-.607-.464-.157-.008-.337-.009-.517-.009-.18 0-.472.067-.719.337-.247.27-.944.923-.944 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.074.644.278 1.147.445 1.538.569.647.206 1.236.177 1.701.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.112-.247-.202-.516-.337z"/>
                </svg>
              </a>
              <a href="tel:+919423383890" className="p-1.5 bg-slate-800 hover:bg-blue-600 rounded-full text-slate-300 hover:text-white transition-all">
                <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:skotturty@gmail.com" className="p-1.5 bg-slate-800 hover:bg-blue-700 rounded-full text-slate-300 hover:text-white transition-all">
                <Mail className="h-4 w-4" />
              </a>
              <span className="w-px bg-slate-800 h-6"></span>
              <a href="https://facebook.com" className="p-1.5 bg-slate-800 hover:bg-blue-800 rounded-full text-slate-300 hover:text-white transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3-3c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="https://instagram.com" className="p-1.5 bg-slate-800 hover:bg-pink-600 rounded-full text-slate-300 hover:text-white transition-all">
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" className="p-1.5 bg-slate-800 hover:bg-blue-700 rounded-full text-slate-300 hover:text-white transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            {/* Profile Info Card */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-white font-extrabold text-sm block">Sahiti Kotturty</span>
              <span className="text-[10px] font-mono text-orange-400 block mt-0.5">RPD Emp code : VA 10044791</span>
              <span className="text-[10px] text-slate-500 block mt-2">
                Authorized Retail Partner - Bajaj Life Insurance
              </span>
            </div>
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
          <p>&copy; {currentYear} Bajaj Life Insurance Co. Ltd. All Rights Reserved. | IRDAI Regn. No.: 116</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Use</span>
            <span>&bull;</span>
            <a 
              href="https://www.bajajlife.com" 
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
