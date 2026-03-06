export const DEMO_COUNTRIES = [
  { id: 1, name: 'USA', flag_emoji: '🇺🇸', overview: 'Top research universities and STEM pathways.', visa_info: 'F1 visa with interview process.', cost_of_living: '$1200-$2500/month', banner_url: 'https://source.unsplash.com/1600x900/?usa,university' },
  { id: 2, name: 'UK', flag_emoji: '🇬🇧', overview: 'Globally ranked one-year postgraduate programs.', visa_info: 'Student Route visa', cost_of_living: '£900-£1800/month', banner_url: 'https://source.unsplash.com/1600x900/?uk,university' },
  { id: 3, name: 'Canada', flag_emoji: '🇨🇦', overview: 'High employability and post-study work options.', visa_info: 'SDS and non-SDS pathways.', cost_of_living: 'CAD 1000-1800/month', banner_url: 'https://source.unsplash.com/1600x900/?canada,university' },
  { id: 4, name: 'Australia', flag_emoji: '🇦🇺', overview: 'Excellent quality of life and practical education.', visa_info: 'Subclass 500 visa', cost_of_living: 'AUD 1300-2200/month', banner_url: 'https://source.unsplash.com/1600x900/?australia,education' },
  { id: 5, name: 'New Zealand', flag_emoji: '🇳🇿', overview: 'Strong student support and safe environment.', visa_info: 'Fee-paying student visa', cost_of_living: 'NZD 1100-1900/month', banner_url: 'https://source.unsplash.com/1600x900/?newzealand,university' },
  { id: 6, name: 'Germany', flag_emoji: '🇩🇪', overview: 'Affordable tuition and engineering excellence.', visa_info: 'German National Visa (D)', cost_of_living: '€850-1400/month', banner_url: 'https://source.unsplash.com/1600x900/?germany,university' },
  { id: 7, name: 'UAE', flag_emoji: '🇦🇪', overview: 'Growing global campuses and business hub exposure.', visa_info: 'University-sponsored student visa', cost_of_living: 'AED 2500-4500/month', banner_url: 'https://source.unsplash.com/1600x900/?uae,dubai,university' },
  { id: 8, name: 'Singapore', flag_emoji: '🇸🇬', overview: 'Top Asian universities with industry links.', visa_info: 'Student pass', cost_of_living: 'SGD 900-1800/month', banner_url: 'https://source.unsplash.com/1600x900/?singapore,university' },
];

export const DEMO_UNIVERSITIES = [
  { id: 1, name: 'Harvard University', country: 'USA', city: 'Cambridge', ranking: 1, is_featured: true, description: 'World-leading research university with broad interdisciplinary programs.', banner_url: 'https://source.unsplash.com/1600x900/?harvard' },
  { id: 2, name: 'University of Oxford', country: 'UK', city: 'Oxford', ranking: 2, is_featured: true, description: 'Historic university known for tutorial-based learning.', banner_url: 'https://source.unsplash.com/1600x900/?oxford' },
  { id: 3, name: 'University of Toronto', country: 'Canada', city: 'Toronto', ranking: 21, is_featured: true, description: 'Top public research institution with high graduate employability.', banner_url: 'https://source.unsplash.com/1600x900/?toronto,university' },
  { id: 4, name: 'National University of Singapore', country: 'Singapore', city: 'Singapore', ranking: 8, is_featured: true, description: 'Asia-leading university for engineering and computing.', banner_url: 'https://source.unsplash.com/1600x900/?singapore,university' },
];

export const DEMO_COURSES = [
  { id: 1, title: 'Computer Science', category: 'Engineering', level: 'Masters', duration: '2 years', avg_salary: '$95,000', eligibility: 'UG in related field with IELTS/TOEFL.' },
  { id: 2, title: 'MBA', category: 'Management', level: 'Masters', duration: '1-2 years', avg_salary: '$110,000', eligibility: 'UG degree + GMAT/GRE + experience preferred.' },
  { id: 3, title: 'Data Science', category: 'IT', level: 'Masters', duration: '18-24 months', avg_salary: '$105,000', eligibility: 'Math/programming background.' },
  { id: 4, title: 'Medicine', category: 'Healthcare', level: 'UG/PG', duration: '4-6 years', avg_salary: '$120,000', eligibility: 'Strong biology background and entrance requirements.' },
];

export const DEMO_BLOGS = [
  {
    id: 1,
    title: 'IELTS Preparation Strategy for Busy Students',
    slug: 'ielts-preparation-strategy',
    category: 'Exams',
    read_time: '6 min',
    thumbnail_url: 'https://source.unsplash.com/1600x900/?ielts,students',
    author: 'EduGuru Editorial Team',
    content: '<h2>Plan by skill</h2><p>Split your preparation across listening, reading, writing, and speaking.</p><ul><li>Week 1-2: baseline and diagnostics</li><li>Week 3-4: weak areas</li><li>Week 5-6: mocks and feedback</li></ul>',
  },
  {
    id: 2,
    title: 'Complete UK Student Visa Checklist 2026',
    slug: 'uk-student-visa-checklist',
    category: 'Visa',
    read_time: '8 min',
    thumbnail_url: 'https://source.unsplash.com/1600x900/?visa,passport',
    author: 'EduGuru Visa Desk',
    content: '<h2>Core documents</h2><p>Keep these documents ready for timely submission.</p><ol><li>CAS letter</li><li>Passport</li><li>Financial proofs</li><li>TB test reports (if applicable)</li></ol>',
  },
];

export const DEMO_TESTIMONIALS = [
  { id: 1, student_name: 'Aarav Sharma', university_admitted: 'University of Melbourne', country: 'Australia', testimonial_text: 'EduGuru made my entire admission journey clear and stress-free.', rating: 5 },
  { id: 2, student_name: 'Priya Nair', university_admitted: 'University of Toronto', country: 'Canada', testimonial_text: 'From SOP reviews to visa prep, every step was expertly guided.', rating: 5 },
  { id: 3, student_name: 'Rohit Verma', university_admitted: 'University of Manchester', country: 'UK', testimonial_text: 'Timely reminders and counselor feedback helped me meet every deadline.', rating: 5 },
];
