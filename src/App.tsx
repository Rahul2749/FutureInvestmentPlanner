import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import BecomePartnerView from './components/BecomePartnerView';
import AboutContactView from './components/AboutContactView';
import QuoteModal from './components/QuoteModal';
import InquiryStatusModal from './components/InquiryStatusModal';
import { PartnerInquiry, ConsultationInquiry } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Modals Visibility States
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preSelectedPlanId, setPreSelectedPlanId] = useState<string | null>(null);
  const [isStatusInboxOpen, setIsStatusInboxOpen] = useState(false);

  // Unified persistent database states in LocalStorage
  const [partnerInquiries, setPartnerInquiries] = useState<PartnerInquiry[]>([]);
  const [consultationInquiries, setConsultationInquiries] = useState<ConsultationInquiry[]>([]);
  const [quoteInquiries, setQuoteInquiries] = useState<any[]>([]);

  // Hydrate persistent state from browser storage
  useEffect(() => {
    // Prevent browser from restoring previous scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Scroll to top on initial load
    window.scrollTo(0, 0);

    try {
      const storedPartners = localStorage.getItem('bal_partner_inquiries');
      if (storedPartners) setPartnerInquiries(JSON.parse(storedPartners));

      const storedConsultations = localStorage.getItem('bal_consult_inquiries');
      if (storedConsultations) setConsultationInquiries(JSON.parse(storedConsultations));

      const storedQuotes = localStorage.getItem('bal_quote_inquiries');
      if (storedQuotes) setQuoteInquiries(JSON.parse(storedQuotes));
    } catch (e) {
      console.warn('LocalStorage error, running in transient virtual state modes instead:', e);
    }
  }, []);

  // Also scroll to top whenever the active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Save changes hooks
  const savePartnerInquiries = (updated: PartnerInquiry[]) => {
    setPartnerInquiries(updated);
    try {
      localStorage.setItem('bal_partner_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const saveConsultationInquiries = (updated: ConsultationInquiry[]) => {
    setConsultationInquiries(updated);
    try {
      localStorage.setItem('bal_consult_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const saveQuoteInquiries = (updated: any[]) => {
    setQuoteInquiries(updated);
    try {
      localStorage.setItem('bal_quote_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  // State manipulation triggers
  const handleAddPartnerInquiry = (inquiryData: Omit<PartnerInquiry, 'id' | 'date' | 'status'>) => {
    const freshRecord: PartnerInquiry = {
      ...inquiryData,
      id: `PA-${Math.floor(Math.random() * 89999 + 10000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }),
      status: 'Pending'
    };
    savePartnerInquiries([freshRecord, ...partnerInquiries]);
  };

  const handleAddConsultation = (consultData: Omit<ConsultationInquiry, 'id' | 'date' | 'status'>) => {
    const freshRecord: ConsultationInquiry = {
      ...consultData,
      id: `BC-${Math.floor(Math.random() * 89999 + 10000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }),
      status: 'Submitted'
    };
    saveConsultationInquiries([freshRecord, ...consultationInquiries]);
  };

  const handleAddQuoteProposals = (quoteData: any) => {
    const freshRecord = {
      ...quoteData,
      id: `BQ-${Math.floor(Math.random() * 89999 + 10000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    };
    saveQuoteInquiries([freshRecord, ...quoteInquiries]);
  };

  const handleClearAllInquiries = () => {
    if (window.confirm('Do you want to clear all interactive drafts and submitted forms from your browser storage?')) {
      savePartnerInquiries([]);
      saveConsultationInquiries([]);
      saveQuoteInquiries([]);
    }
  };

  const handleDeleteIndividualInquiry = (type: 'partner' | 'consultation' | 'quote', id: string) => {
    if (type === 'partner') {
      savePartnerInquiries(partnerInquiries.filter(p => p.id !== id));
    } else if (type === 'consultation') {
      saveConsultationInquiries(consultationInquiries.filter(c => c.id !== id));
    } else {
      saveQuoteInquiries(quoteInquiries.filter(q => q.id !== id));
    }
  };

  const handleQuoteOnPlanSelect = (planId: string) => {
    setPreSelectedPlanId(planId);
    setIsQuoteOpen(true);
  };

  const handleGeneralQuoteTrigger = () => {
    setPreSelectedPlanId('term-life');
    setIsQuoteOpen(true);
  };

  // Helper placeholder for message submission logging
  const handleGenericMessageSubmission = (msg: { name: string; email: string; phone: string; message: string; topic: string }) => {
    console.log('Sending message dispatch to regional operations centers:', msg);
  };

  const totalInquiryCount = partnerInquiries.length + consultationInquiries.length + quoteInquiries.length;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans" id="app-root-wrapper">
      
      {/* Universal Sticky Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openQuoteModal={handleGeneralQuoteTrigger}
        openInquiryStatusModal={() => setIsStatusInboxOpen(true)}
        inquiryCount={totalInquiryCount}
      />

      {/* Main Multi-tab Body Screen Renderer */}
      <main className="flex-1" id="tabbed-content-container">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            openQuoteForPlan={handleQuoteOnPlanSelect}
            onSubmitConsultation={handleAddConsultation}
          />
        )}

        {activeTab === 'products' && (
          <ProductsView
            openQuoteForPlan={handleQuoteOnPlanSelect}
          />
        )}

        {activeTab === 'partner' && (
          <BecomePartnerView
            onSubmitInquiry={handleAddPartnerInquiry}
          />
        )}

        {activeTab === 'about' && (
          <AboutContactView
            onSendMessage={handleGenericMessageSubmission}
          />
        )}
      </main>

      {/* Universal Regulation-Compliant Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Quote Calculation Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setPreSelectedPlanId(null);
        }}
        preSelectedPlanId={preSelectedPlanId}
        onSubmitQuoteInquiry={handleAddQuoteProposals}
      />

      {/* Stored Status History List Inbox Modal */}
      <InquiryStatusModal
        isOpen={isStatusInboxOpen}
        onClose={() => setIsStatusInboxOpen(false)}
        partnerInquiries={partnerInquiries}
        consultationInquiries={consultationInquiries}
        quoteInquiries={quoteInquiries}
        onClearAll={handleClearAllInquiries}
        onDeleteInquiry={handleDeleteIndividualInquiry}
      />

    </div>
  );
}
