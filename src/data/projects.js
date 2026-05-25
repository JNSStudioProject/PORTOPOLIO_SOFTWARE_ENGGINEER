import karyanusaImg from '../assets/projects/karyanusa.png';
import joblikerImg from '../assets/projects/jobliker.png';
import sawitMajuImg from '../assets/projects/sawit_maju.png';

export const projects = [
  {
    id: 'karyanusa',
    title: 'KaryaNusa',
    tagline: 'E-commerce Platform for Local MSME Craftsmen',
    category: 'Full-Stack Web Application',
    status: 'Completed',
    image: karyanusaImg,
    role: 'Full-Stack Developer',
    description: 'Indonesian MSMEs lack digital sales channels, relying on informal markets. Therefore, I built this website to provide a professional, zero-friction storefront.',
    effect: [
      'Won 1st Place at regional website competition, Pekanbaru 2024',
      'Successfully onboarded multiple MSME sellers simultaneously'
    ],
    stack: ['Laravel 10', 'PHP', 'MySQL', 'Blade', 'JavaScript', 'CSS'],
    color: '#3b82f6',
    github: 'https://github.com/JNSStudioProject',
    link: 'https://karya-nusa-eccomers1.vercel.app/',
    featured: true
  },
  {
    id: 'jobliker',
    title: 'Jobliker',
    tagline: 'LinkedIn-Inspired Professional Networking Platform',
    category: 'Frontend Web Application',
    status: 'Completed',
    image: joblikerImg,
    role: 'Frontend Developer',
    description: 'LinkedIn can be overwhelming for fresh graduates in Indonesia. Therefore, I built this platform to provide a simpler, localized professional networking space.',
    effect: [
      'Built a production-ready Single Page Application with zero-reload navigation',
      'Developed a scalable and reusable React component architecture'
    ],
    stack: ['React 18', 'JavaScript', 'React Router', 'REST API', 'CSS', 'Axios'],
    color: '#06b6d4',
    github: 'https://github.com/JNSStudioProject',
    featured: true
  },
  {
    id: 'sawitMaju',
    title: 'Sawit Maju',
    tagline: 'AI-Powered Palm Oil Ripeness Detection App',
    category: 'Mobile Application + Computer Vision',
    status: 'Completed',
    image: sawitMajuImg,
    role: 'Android Developer',
    description: 'Manual inspection of palm oil fruit is slow and causes yield loss. Therefore, I built this native Android application to automate ripeness detection using a custom YOLOv11 model.',
    effect: [
      'Achieved 97% detection accuracy on test datasets',
      'Sub-2 second inference latency fully offline'
    ],
    stack: ['Kotlin', 'Android', 'YOLOv11', 'Python', 'TensorFlow Lite', 'OpenCV'],
    color: '#10b981',
    github: 'https://github.com/JNSStudioProject',
    featured: true
  }
];
