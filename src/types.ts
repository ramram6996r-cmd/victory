export interface CourseFeature {
  text: string;
}

export interface Course {
  id: string;
  category: 'cet' | 'neet' | 'govt' | 'teaching';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  subjects: string[];
  duration: string;
  benefits: string[];
  targetExams?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  achievement: string;
  text: string;
  badge?: string;
  year?: string;
}

export interface ScholarshipTier {
  percentageScore: string;
  discountPercentage: number;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface EnquirySubmission {
  id: string;
  studentName: string;
  parentName?: string;
  phone: string;
  email?: string;
  courseId: string;
  batchPreference: 'morning' | 'evening' | 'weekend' | 'revision';
  percentageScored?: number;
  submittedAt: string;
  isCustomDiscountEligible?: boolean;
  calculatedDiscount?: number;
  notes?: string;
}
