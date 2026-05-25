export const achievements = [
  {
    id: 1,
    title: '1st Place — Best Website Project',
    org: 'Regional Competition, Pekanbaru',
    year: '2024',
    description: 'Built KaryaNusa, an e-commerce platform for local handcraft MSMEs, which won 1st place in the city-level website development competition.',
    icon: 'Trophy',
    color: '#f59e0b'
  },
  {
    id: 2,
    title: '2nd Place — Mini CTF Competition',
    org: 'Politeknik Mersing Johor, Malaysia',
    year: '2024',
    description: 'Competed internationally during student exchange program. Demonstrated cybersecurity problem-solving skills against peers from multiple countries.',
    icon: 'Shield',
    color: '#3b82f6'
  },
  {
    id: 3,
    title: 'Best Student — Informatics Engineering',
    org: 'Politeknik Caltex Riau',
    year: 'Semesters I–VI',
    description: 'Recognized as the top-performing student across six consecutive semesters with a GPA of 3.99/4.00 (Cum Laude).',
    icon: 'Award',
    color: '#10b981'
  },
  {
    id: 4,
    title: 'International Student Exchange',
    org: 'Politeknik Mersing Johor, Malaysia',
    year: '2024',
    description: 'Selected for a cross-border academic exchange program, gaining exposure to international academic and professional environments.',
    icon: 'Globe',
    color: '#8b5cf6'
  },
  {
    id: 5,
    title: 'Regional Government Scholarship',
    org: 'Academic Excellence — Riau Province',
    year: '2022–Present',
    description: 'Awarded a full scholarship from the Regional Government of Riau for outstanding academic performance and potential.',
    icon: 'BookOpen',
    color: '#06b6d4'
  }
];

import expLeadershipImg from '../assets/experience/leadership.png';
import expCommunicationImg from '../assets/experience/communication.png';
import expFinanceImg from '../assets/experience/finance.png';
import expSpeakingImg from '../assets/experience/speaking.png';

export const leadership = [
  {
    id: 1,
    role: 'Chairman',
    org: 'TECH EXPO III',
    period: 'March 2025',
    category: 'Leadership',
    image: expLeadershipImg,
    type: 'Event Leadership',
    bullets: [
      'Led a team of 30+ committee members to organize a campus-scale technology exhibition',
      'Coordinated logistics, sponsorship negotiations, and speaker management end-to-end',
      'Delivered the event on schedule with 200+ attendees across three exhibition tracks'
    ]
  },
  {
    id: 2,
    role: 'Public Relations Lead',
    org: 'Student Association',
    period: '2023–2024',
    category: 'Communication or Lobbying',
    image: expCommunicationImg,
    type: 'External Relations',
    bullets: [
      'Negotiated sponsorships with 5+ local tech companies for campus events',
      'Managed external communication and media partnerships',
      'Lobbied university administration for student project funding'
    ]
  },
  {
    id: 3,
    role: 'Treasurer',
    org: 'UKM CSIRT',
    period: '2023–2024',
    category: 'Bendahara atau Accounting',
    image: expFinanceImg,
    type: 'Financial Management',
    bullets: [
      'Managed an annual budget of Rp 15,000,000 for training and competitions',
      'Maintained transparent financial records and compiled quarterly reports',
      'Optimized event spending, achieving a 15% surplus at the end of the term'
    ]
  },
  {
    id: 4,
    role: 'Speaker & Presenter',
    org: 'Regional Tech Meetup',
    period: '2024',
    category: 'Public Speaking',
    image: expSpeakingImg,
    type: 'Knowledge Sharing',
    bullets: [
      'Delivered a 45-minute technical presentation on React Performance Optimization',
      'Engaged an audience of 100+ local developers and students',
      'Facilitated a live Q&A session breaking down complex concepts'
    ]
  }
];
