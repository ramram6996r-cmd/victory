import { Course, Testimonial, ScholarshipTier, FAQ } from './types';

export const COURSES: Course[] = [
  {
    id: 'cet-coaching',
    category: 'cet',
    title: 'CET Coaching Program',
    subtitle: 'Engineering & Professional Entry Preparation',
    description: 'Expertly designed for students looking for competitive engineering and professional degree course entrances in Karnataka.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    duration: '1 Year Full Course / Crash Course Available',
    highlights: [
      'Complete CET syllabus coverage',
      'Daily practice sessions and home assignments',
      'Shortcut tips and direct problem-solving techniques',
      'Time management and speed optimization methods',
      'Regular full-length mock exams and evaluation'
    ],
    benefits: [
      'Extremely strong conceptual foundations',
      'Significant improvement in State CET ranks',
      'Unshakable confidence for multiple choice questions',
      'Mentorship from experienced entrance exam experts'
    ],
    targetExams: ['KCET', 'COMEDK']
  },
  {
    id: 'neet-coaching',
    category: 'neet',
    title: 'NEET Coaching Program',
    subtitle: 'Medical entrance expert coaching',
    description: 'Advanced, concept-rooted learning structure preparing students for highly competitive national medical entrance exams with deep focus.',
    subjects: ['Physics', 'Chemistry', 'Biology (Botany & Zoology)'],
    duration: '2 Years Integrated / 1 Year Intensive / Repeater Batch',
    highlights: [
      'Premium NEET-centric study material & question banks',
      'In-depth MCQ analytical solving practice',
      'Detailed previous years chapter-wise question analysis',
      'Dedicated individual doubt-clearing sessions',
      'Weekly assessment monitors and peer benchmark analysis',
      'Professional medical career guidance & counseling'
    ],
    benefits: [
      'Exceptional performance under exam stress',
      'Flawless clarity in core biology and chemical modules',
      'Maximized raw scoring opportunities in competitive tests',
      'Rigorous preparation path matching modern NEET trends'
    ],
    targetExams: ['NEET-UG']
  },
  {
    id: 'govt-jobs',
    category: 'govt',
    title: 'Government Job Coaching',
    subtitle: 'FDA, SDA, Police & competitive exams preparation',
    description: 'Comprehensive, result-focused curriculum tailored to Karnataka State and Central government jobs selection guidelines.',
    subjects: [
      'General Knowledge',
      'Current Affairs & GK',
      'Reasoning Ability',
      'Quantitative Aptitude & Mathematics',
      'Kannada Language & Grammar',
      'English Language & Grammar',
      'Computer Awareness Basics'
    ],
    duration: '3 to 6 Months Intensive',
    highlights: [
      'Government exam dedicated faculty guidance',
      'Instant notification tracker alerts and eligibility guides',
      'Interview tips and group conversation guidance',
      'Tailored confidence and personality build modules',
      'Complete question pattern analysis with regular mock tests'
    ],
    benefits: [
      'Highly optimized preparation strategies for state jobs',
      'High-speed calculation tips for quantitative aptitude',
      'Excellent performance in general state language tests',
      'Continuous job alerts and custom application support'
    ],
    targetExams: ['FDA (First Division Assistant)', 'SDA (Second Division Assistant)', 'Karnataka Police Sub-Inspector / Constable', 'State Banking Systems', 'General Competitive Exams']
  },
  {
    id: 'teacher-coaching',
    category: 'teaching',
    title: 'Teacher Eligibility & Recruitment',
    subtitle: 'TET, GPSTR & HSTR specialised coaching',
    description: 'Our standard-setting teacher eligibility & high school/primary teacher recruitment preparation packages for B.Ed & D.Ed graduates.',
    subjects: [
      'Educational Psychology',
      'Pedagogy & Teaching Aptitude',
      'Subject Pedagogy (Science/Math/Social/Languages)',
      'General Knowledge',
      'Subject-Specific Content Mastery'
    ],
    duration: '4 to 6 Months Coaching',
    highlights: [
      'Complete syllabus breakdown for TET, GPSTR, and HSTR exams',
      'In-depth explanations of Child Psychology & Learning theories',
      'Subject-focused expert lectures with standard model lesson templates',
      'Previous year structural question discussion with mock tests',
      'Interactive micro-teaching and speech confidence feedback'
    ],
    benefits: [
      'Command over teaching methods and pedagogy models',
      'Dramatically higher qualifying ratios in state TET tests',
      'Expert strategies for high school and graduate school teacher recruitment',
      'Dedicated guidance for the descriptive language worksheets'
    ],
    targetExams: ['K-TET (Karnataka Teacher Eligibility Test)', 'GPSTR (Graduate Primary School Teachers Recruitment)', 'HSTR (High School Teachers Recruitment)']
  }
];

export const SCHOLARSHIPS: ScholarshipTier[] = [
  {
    percentageScore: 'Above 90%',
    discountPercentage: 50,
    description: 'Outstanding performance scoring above 90% in school or board examinations qualifies you for our half-price scholarship.'
  },
  {
    percentageScore: 'Above 80%',
    discountPercentage: 25,
    description: 'Strong academic performance scoring above 80% entitles you to our merit discount of 25% off your tuition.'
  },
  {
    percentageScore: 'Above 70%',
    discountPercentage: 8,
    description: 'Academic consistency scoring above 70% entitles you to a special incentive discount of 8% on program tuition.'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'Where is Victory Coaching Center located in Chitradurga?',
    answer: 'We are situated in a highly central, easily accessible prime location: Opposite Appaji Parisara Building, Stadium Road, Chitradurga. Public and private transport facilities are easily available from all parts of Chitradurga city.'
  },
  {
    question: 'What classes are available and what are the batch timings?',
    answer: 'To suit different categories of students, we offer multiple flexible sessions: Morning Batches, Evening Batches, Weekend Batches, and Special Revision Batches. Typically classes operate anytime between 8:00 AM and 8:00 PM.'
  },
  {
    question: 'How do I check my scholarship eligibility or discount amount?',
    answer: 'You can use the interactive Scholarship and Merit Discount Calculator on our website! Simply enter your score percentage. If you qualify for 90%+, 80%+, or 70%+, we award a 50%, 25%, or 8% tuition waiver. You will receive a voucher that you can print or present during in-person admission.'
  },
  {
    question: 'Does the institute prepare candidates for teacher recruitment exams in Karnataka?',
    answer: 'Yes! We are extremely well-known for outstanding results in Teacher Eligibility Tests (TET), Graduate Primary School Teacher Recruitment (GPSTR), and High School Teacher Recruitment (HSTR) with dedicated subject matter experts.'
  },
  {
    question: 'Are there library and digital computer room facilities available?',
    answer: 'Absolutely. Students have access to our well-equipped library with exam materials and silent cabins. We also feature computer labs and smart classrooms equipped with digital projectors to facilitate conceptual visual learning.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sanjeev Kumar K.',
    achievement: 'Selected as Graduate Primary Teacher (GPSTR Rank 8)',
    text: 'Victory Coaching Center completely transformed my approach to the exam. Their specialization in Educational Psychology and child pedagogy gave me the scoring edge needed to succeed.',
    badge: 'Teacher Career Success',
    year: '2025'
  },
  {
    id: 't2',
    name: 'Pooja Reddy',
    achievement: 'NEET Score: 642/720 (Medical Admission)',
    text: 'The biology lectures and daily MCQs here were extremely detailed and matched the exact level of NEET. Continuous feedback and regular unit tests helped me overcome my physics anxiety completely.',
    badge: 'Medical Merit',
    year: '2025'
  },
  {
    id: 't3',
    name: 'Manjunath Swamy',
    achievement: 'SDA Rank holder and Police Recruitment list',
    text: 'I passed both FDA and SDA exams in my second attempt after joining Victory. The Kannada Grammar classes, Current Affairs briefings, and mental ability shortcuts are unmatched in Chitradurga!',
    badge: 'Govt Job Excellence',
    year: '2024'
  }
];

export const BATCH_TIMINGS = [
  { id: 'morning', label: 'Morning Batch', time: '8:00 AM – 11:30 AM' },
  { id: 'evening', label: 'Evening Batch', time: '4:30 PM – 8:00 PM' },
  { id: 'weekend', label: 'Weekend Batch', time: 'Saturday & Sunday (Full Day)' },
  { id: 'revision', label: 'Special Revision Batch', time: 'Crash Course and High Focus' }
];
