export interface Expert {
  id: string;
  name: string;
  role: string;
  region: string;
  experience: string;
  image: string;
  email: string;
  phone: string;
  specialty: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  incomeGrowth: string;
  story: string;
  fullQuote: string;
  image: string;
  rating: number;
}

export interface PartnerInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  experience: string;
  availability: string;
  message?: string;
  date: string;
  status: 'Pending' | 'Contacted' | 'Approved';
}

export interface ConsultationInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  pincode: string;
  insuranceInterest: string;
  preferredTime: string;
  date: string;
  status: 'Scheduled' | 'Submitted';
}

export interface InsurancePlan {
  id: string;
  title: string;
  tagline: string;
  minPremium: number;
  entryAge: string;
  benefits: string[];
  calcParams: {
    minAge: number;
    maxAge: number;
    minSumAssured: number;
    maxSumAssured: number;
    defaultSumAssured: number;
    defaultAge: number;
  };
}

export interface Branch {
  id: string;
  pincode: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  timings: string;
}
