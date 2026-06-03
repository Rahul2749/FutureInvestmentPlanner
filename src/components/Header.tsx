import React from 'react';
import { ShieldCheck, Handshake, ChevronRight, UserCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
  openInquiryStatusModal: () => void;
  inquiryCount: number;
}

export default function Header({
  activeTab,
  setActiveTab,
  openQuoteModal,
  openInquiryStatusModal,
  inquiryCount
}: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'partner', label: 'Become a Partner' },
    { id: 'about', label: 'About & Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white shadow-xs" id="main-header">
      {/* Top Header Bar */}
      <div className="mx-auto flex h-16 max-w-none items-center justify-between px-4 sm:px-8 lg:px-16 border-b border-slate-100">
        
        {/* Logo and Branding Section */}
        <div 
          className="flex cursor-pointer items-center" 
          onClick={() => setActiveTab('home')}
          id="header-brand-container"
        >
          <img src="/bajaj_logo.png" alt="Bajaj Life Logo" className="h-12 object-contain" />
        </div>

        {/* Right Side Info & Action Buttons */}
        <div className="flex items-center space-x-4" id="header-right-actions">
          {/* Agent/Advisor Info */}
          <div className="hidden sm:flex flex-col text-right pr-4 border-r border-slate-200">
            <span className="text-sm font-bold text-blue-950">Sahiti Kotturty</span>
            <span className="text-[11px] text-blue-900/80 mt-0.5 font-medium">
              RPD Emp code : VA 10044791
            </span>
          </div>

          {/* Inquiry Indicator button */}
          <button
            onClick={openInquiryStatusModal}
            id="btn-view-inquiries"
            className="relative flex items-center space-x-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            title="View status of your submissions"
          >
            <UserCheck className="h-4 w-4 text-blue-600" />
            <span className="hidden sm:inline">My Requests</span>
            {inquiryCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white shadow-sm animate-pulse">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* WhatsApp Quick CTA Icon */}
          <a
            href="https://wa.me/919423383890?text=Hi%20Sahiti,%20I'm%20interested%20in%20learning%20more%20about%20Bajaj%20Life%20Insurance%20plans."
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-xs hover:scale-105 transition-all"
            title="Talk to Sahiti on WhatsApp"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.465L0 24zm6.26-4.148c1.657.983 3.327 1.498 5.694 1.499 5.539 0 10.05-4.48 10.054-9.988.002-2.67-1.026-5.18-2.894-7.052C17.29 2.44 14.78 1.41 12.016 1.41 6.502 1.41 1.992 5.89 1.988 11.399c-.001 2.222.548 4.39 1.587 6.189l-.993 3.626 3.735-.972zm12.39-7.25c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.584.067-.27-.134-1.14-.42-2.172-1.341-.803-.715-1.344-1.602-1.502-1.872-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.456-.607-.464-.157-.008-.337-.009-.517-.009-.18 0-.472.067-.719.337-.247.27-.944.923-.944 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.074.644.278 1.147.445 1.538.569.647.206 1.236.177 1.701.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.112-.247-.202-.516-.337z"/>
            </svg>
          </a>

          {/* Core Get Quote CTA */}
          <button
            onClick={openQuoteModal}
            id="header-btn-quote"
            className="flex items-center space-x-1 rounded-md bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>Get a Quote</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <div className="hidden md:block bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-none px-4 sm:px-8 lg:px-16">
          <nav className="flex items-center justify-center space-x-8 h-11" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`h-full px-2 text-sm font-bold transition-all relative ${
                  activeTab === item.id
                    ? 'text-blue-700 font-extrabold border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav indicator bar */}
      <div className="flex md:hidden border-t border-slate-100 bg-slate-50 overflow-x-auto scrollbar-none" id="mobile-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            id={`mobile-nav-tab-${item.id}`}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 min-w-[90px] text-center py-2.5 text-xs font-bold transition-all focus:outline-hidden ${
              activeTab === item.id
                ? 'text-blue-700 bg-white border-b-2 border-blue-600 font-extrabold'
                : 'text-slate-500'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
