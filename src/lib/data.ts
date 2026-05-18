// Central data store — swap with a CMS or API later

export const SCHOOL = {
  name: 'Vetri Tamil School',
  nameTamil: 'வெற்றி தமிழ்ப்பள்ளி',
  tagline: 'Nurturing Language, Culture & Identity',
  org: 'Sri Yoga Hanuman Cultural Society',
  email: 'vtsthabaal@gmail.com',
  phone: '604-368-8428',
  location: 'Surrey, British Columbia, Canada',
  founded: '2018',
  thirukkural: {
    verse: 'கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக.',
    translation:
      'Learn thoroughly what is worth learning; then live accordingly.',
    attribution: '— Thiruvalluvar, Thirukkural 391',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export const CLASS_LEVELS = [
  {
    id: 1,
    level: 'Beginner (Level 1)',
    levelTamil: 'தொடக்க நிலை',
    ageGroup: 'Ages 5–7',
    description: 'Introduction to Tamil alphabet (உயிரெழுத்து & மெய்யெழுத்து), basic phonics, and simple vocabulary through songs and games.',
    schedule: 'Saturdays, 10:00 AM – 12:00 PM',
    seats: 'Limited seats available',
  },
  {
    id: 2,
    level: 'Elementary (Level 2)',
    levelTamil: 'ஆரம்ப நிலை',
    ageGroup: 'Ages 8–10',
    description: 'Reading short passages, writing simple sentences, Tamil numbers, and cultural stories.',
    schedule: 'Saturdays, 10:00 AM – 12:00 PM',
    seats: 'Open enrollment',
  },
  {
    id: 3,
    level: 'Intermediate (Level 3)',
    levelTamil: 'இடை நிலை',
    ageGroup: 'Ages 11–13',
    description: 'Grammar fundamentals, essay writing, Thirukkural recitation, and Tamil literature excerpts.',
    schedule: 'Saturdays, 12:30 PM – 2:30 PM',
    seats: 'Open enrollment',
  },
  {
    id: 4,
    level: 'Advanced (Level 4)',
    levelTamil: 'மேல் நிலை',
    ageGroup: 'Ages 14+',
    description: 'Classical Tamil literature, advanced composition, spoken Tamil fluency, and cultural presentations.',
    schedule: 'Saturdays, 12:30 PM – 2:30 PM',
    seats: 'Open enrollment',
  },
]


export const TEACHERS = [
  { name: 'Malini Moorthy', role: 'LKG' },
  { name: 'Raja Rajeswari J', role: 'UKG & Grade 5' },
  { name: 'Bhuvana Ashok', role: 'Grade 1' },
  { name: 'Rajespari S', role: 'Grade 2' },
  { name: 'Ravichandran K', role: 'Grade 3' },
  { name: 'Murali Rajagopalan', role: 'Grade 4' },
  { name: 'Maniselvan', role: 'Teacher' },
  { name: 'Kumutha Senthil', role: 'Teacher' },
]

export const BOARD_MEMBERS = [
  { name: 'Raja Rajeswari J', role: 'Principal' },
  { name: 'Murali Rajagopalan', role: 'Vice Principal' },
  { name: 'Ravichandran K', role: 'Secretary' },
  { name: 'Rajesh Rajagopalan', role: 'Treasurer' },
  { name: 'Padmapriya', role: 'PAC' },
  { name: 'Praveenraj M', role: 'Director of Marketing & Comm.' },
  { name: 'Janani', role: 'Sports and Event Director' },
  { name: 'Suganthi R', role: 'Cultural Secretary' },
  { name: 'Roopa Thanisraj', role: 'Director-at-Large' },
  { name: 'Balaji Dasarathan', role: 'Director-at-Large' },
  { name: 'Anjali Dhinakaran', role: 'Director-at-Large' },
]

export const FAQ = [
  {
    q: 'When does the school year run?',
    a: 'Classes run September through June, on Saturdays. A short summer session may be offered — check Events for updates.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Tuition is $200 per year per student. Family discounts are available for two or more siblings. Contact us for details.',
  },
  {
    q: 'Do I need to speak Tamil to enroll my child?',
    a: 'No. Beginner Level 1 is designed for children with zero prior Tamil exposure. We welcome all heritage levels.',
  },
  {
    q: 'Is there a registration form?',
    a: 'Yes — use the Contact page to reach us and we will send you the enrollment package by email.',
  },
]
