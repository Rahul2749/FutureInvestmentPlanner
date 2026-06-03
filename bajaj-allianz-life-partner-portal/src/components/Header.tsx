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
    <header className="sticky top-0 z-40 w-full border-b border-blue-100 bg-white shadow-xs" id="main-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Branding Section */}
        <div 
          className="flex cursor-pointer items-center space-x-3" 
          onClick={() => setActiveTab('home')}
          id="header-brand-container"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg font-extrabold tracking-tight text-blue-900 sm:text-xl">
              BAJAJ <span className="text-orange-500">Allianz</span>
            </span>
            <span className="font-mono text-[9px] font-medium uppercase tracking-widest text-slate-500">
              Life Goals Partner
            </span>
          </div>
        </div>

        {/* Navigation Elements */}
        <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700 font-bold border-b-2 border-blue-600 rounded-b-none'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3" id="header-actions">
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

          {/* Core Get Quote CTAs */}
          <button
            onClick={openQuoteModal}
            id="header-btn-quote"
            className="flex items-center space-x-1 rounded-md bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Get a Quote</span>
            <ChevronRight className="h-4 w-4" />
          </button>
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
