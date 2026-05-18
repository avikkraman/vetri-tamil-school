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
    level: 'LKG',
    levelTamil: 'கீழ் மழலையர் பள்ளி',
    icon: '🌱',
    description: 'Introduction to Tamil alphabet, basic phonics, and simple vocabulary through songs and games.',
  },
  {
    id: 2,
    level: 'UKG',
    levelTamil: 'மேல் மழலையர் பள்ளி',
    icon: '🌼',
    description: 'Alphabet recognition, early reading, and foundational writing skills.',
  },
  {
    id: 3,
    level: 'Grade 1',
    levelTamil: 'முதலாம் வகுப்பு',
    icon: '✏️',
    description: 'Reading short passages, writing simple sentences, and Tamil numbers.',
  },
  {
    id: 4,
    level: 'Grade 2',
    levelTamil: 'இரண்டாம் வகுப்பு',
    icon: '📖',
    description: 'Building vocabulary, cultural stories, and introductory grammar.',
  },
  {
    id: 5,
    level: 'Grade 3',
    levelTamil: 'மூன்றாம் வகுப்பு',
    icon: '📝',
    description: 'Grammar fundamentals, essay writing, and Thirukkural recitation.',
  },
  {
    id: 6,
    level: 'Grade 4',
    levelTamil: 'நான்காம் வகுப்பு',
    icon: '📚',
    description: 'Tamil literature excerpts, advanced writing, and spoken Tamil practice.',
  },
  {
    id: 7,
    level: 'Grade 5',
    levelTamil: 'ஐந்தாம் வகுப்பு',
    icon: '🎓',
    description: 'Classical Tamil literature, advanced composition, and cultural presentations.',
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
