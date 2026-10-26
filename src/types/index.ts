export interface ServiceItem {
  id: string;
  category: 'usaha' | 'pbg' | 'komersial' | 'spbu' | 'perpanjangan' | 'hukum';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
  estimatedTime: string;
  estimatedCost: string;
  coverage: string[];
  requirements: string[];
  workflowSummary: string[];
  authorities: string[];
}

export interface EstimatorResult {
  title: string;
  desc: string;
  time: string;
  cost: string;
  included: string[];
}

export interface BookingSubmission {
  id: string;
  name: string;
  phone: string;
  service: string;
  entityType: string;
  location: string;
  message: string;
  urgency: string;
  submittedAt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
