// Central data store — swap with a CMS or API later

export const SCHOOL = {
  name: 'Vetri Tamil School',
  nameTamil: 'வெற்றி தமிழ்ப்பள்ளி',
  tagline: 'Nurturing Language, Culture & Identity',
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
  { label: 'Events & Calendar', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export const CLASS_LEVELS = [
  {
    id: 1,
    level: 'LKG',
    levelTamil: 'கீழ் மழலையர் பள்ளி',
    icon: '🌱',
    description: 'A gentle, joyful welcome — children learn vowels and take their first steps with letters through songs, stories, and play.',
    descriptionTamil: 'மென்மையான, மகிழ்ச்சியான வரவேற்பு — குழந்தைகள் உயிர் எழுத்துக்களை கற்று, பாடல்கள், கதைகள், விளையாட்டு வழியாக மொழியுலகில் அடி எடுத்து வைக்கிறார்கள்.',
  },
  {
    id: 2,
    level: 'UKG',
    levelTamil: 'மேல் மழலையர் பள்ளி',
    icon: '🌼',
    description: 'Children begin with a review of vowels, then explore all 18 consonants and compound letters, building a warm vocabulary — colors, animals, and counting to one hundred.',
    descriptionTamil: 'குழந்தைகள் உயிர் எழுத்துக்களை மீட்டிப் பார்த்து, 18 மெய் எழுத்துக்களும் உயிர்மெய் எழுத்துக்களும் கற்று, வண்ணங்கள், விலங்குகள், நூறு வரை எண்ணுதல் என்று சொல்வளம் பெறுகிறார்கள்.',
  },
  {
    id: 3,
    level: 'Grade 1',
    levelTamil: 'முதலாம் வகுப்பு',
    icon: '✏️',
    description: 'Students complete the compound letters and come alive in conversation — learning family words, the six tastes, and joyfully building stories of their own.',
    descriptionTamil: 'மாணவர்கள் உயிர்மெய் எழுத்துக்களை கற்று முடித்து உரையாடலில் மலர்கிறார்கள் — குடும்ப உறுப்பினர் சொற்கள், அறுசுவைகள், மற்றும் மகிழ்ச்சியாக தங்களது சொந்தக் கதைகளை உருவாக்குகிறார்கள்.',
  },
  {
    id: 4,
    level: 'Grade 2',
    levelTamil: 'இரண்டாம் வகுப்பு',
    icon: '📖',
    description: 'Students grow as readers and writers — exploring short and long vowels, singular and plural, joining words, and opposites through simple sentences and spelling practice.',
    descriptionTamil: 'மாணவர்கள் வாசிப்பிலும் எழுத்திலும் வளர்கிறார்கள் — குறில், நெடில், ஒருமை, பன்மை, இணைச்சொற்கள், எதிர்ச்சொற்கள் ஆகியவற்றை எளிய வாக்கியங்களும் சொல்லெழுத்துப் பயிற்சியும் வழியாக கற்கிறார்கள்.',
  },
  {
    id: 5,
    level: 'Grade 3',
    levelTamil: 'மூன்றாம் வகுப்பு',
    icon: '📝',
    description: 'Students read stories with growing fluency, answer questions in writing, and build confidence through dictation, new vocabulary, and foundational grammar.',
    descriptionTamil: 'மாணவர்கள் கதைகளை சரளமாகப் படித்து, எழுத்தில் கேள்விகளுக்கு விடையளித்து, சொல்லி எழுதுதல், புதிய சொல்வளம், அடிப்படை இலக்கணம் வழியாக நம்பிக்கை பெறுகிறார்கள்.',
  },
  {
    id: 6,
    level: 'Grade 4',
    levelTamil: 'நான்காம் வகுப்பு',
    icon: '📚',
    description: 'Our Grade 4 textbook is a launchpad — students read stories and poems aloud with expression, write heartfelt letters and responses, and speak their minds through lively discussions.',
    descriptionTamil: 'நான்காம் வகுப்பு பாடப்புத்தகம் ஒரு தொடக்கப் புள்ளி — மாணவர்கள் கதைகளையும் கவிதைகளையும் ஓசை நயத்துடன் படித்து, இதயம் நிறைந்த கடிதங்களும் கருத்துகளும் எழுதி, விவாதங்களில் தங்கள் கருத்துகளை தெரிவிக்கிறார்கள்.',
  },
  {
    id: 7,
    level: 'Grade 5',
    levelTamil: 'ஐந்தாம் வகுப்பு',
    icon: '🎓',
    description: 'Students read, write, and speak Tamil with confidence — mastering grammar, finding wisdom in Thirukkural, and exploring the rich roots of Tamil culture and Sangam literature.',
    descriptionTamil: 'மாணவர்கள் தமிழில் நம்பிக்கையுடன் படித்து, எழுதி, பேசுகிறார்கள் — இலக்கணம் கற்று, திருக்குறளில் ஞானம் தேடி, தமிழ் கலாச்சாரம் மற்றும் சங்க இலக்கியத்தின் வேர்களை ஆராய்கிறார்கள்.',
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
