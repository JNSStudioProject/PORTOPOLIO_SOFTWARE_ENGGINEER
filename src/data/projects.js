export const projects = [
  {
    id: 'karyanusa',
    title: 'KaryaNusa',
    tagline: 'E-commerce Platform for Local MSME Craftsmen',
    category: 'Full-Stack Web Application',
    status: 'Completed',
    why: {
      headline: 'Local artisans had no digital sales channel',
      body: 'Small handcraft producers in Indonesia struggle to reach customers beyond their local market. Without a dedicated platform, they rely on informal channels, losing revenue and visibility. KaryaNusa was built to bridge that gap — giving MSMEs a professional, zero-friction storefront.'
    },
    how: {
      headline: 'Laravel MVC with role-based architecture',
      body: 'Built on Laravel 10 with a clean MVC pattern and Blade templating. I designed a multi-role authentication system (Admin, Seller, Buyer), implemented relational database schemas for products, orders, and transactions in MySQL, and used RESTful routing for API consistency. File uploads were handled via Laravel Storage with validation pipelines.'
    },
    what: {
      headline: 'End-to-end marketplace with order management',
      features: [
        'Multi-role authentication (Admin / Seller / Buyer)',
        'Product catalog with category filtering and search',
        'Shopping cart with persistent session management',
        'Order tracking dashboard for sellers and buyers',
        'Transaction history with status lifecycle',
        'Admin panel for platform management',
        'Mobile-responsive UI with custom CSS'
      ],
      role: 'Lead Developer — solo-built the full system from database schema to deployment',
      challenge: 'Designing a multi-tenant permission system where sellers can only manage their own products while admins retain full oversight, without leaking data across roles.'
    },
    effect: {
      headline: '1st Place — Best Website Project Competition, Pekanbaru 2024',
      results: [
        'Won 1st place at regional website competition, Pekanbaru 2024',
        'Platform can onboard multiple MSME sellers simultaneously',
        'Complete order lifecycle (cart → payment → delivery) fully functional',
        'Clean admin dashboard enabling platform-level content moderation'
      ]
    },
    stack: ['Laravel 10', 'PHP', 'MySQL', 'Blade', 'JavaScript', 'CSS'],
    color: '#3b82f6',
    github: 'https://github.com/JNSStudioProject',
    featured: true
  },
  {
    id: 'jobliker',
    title: 'Jobliker',
    tagline: 'LinkedIn-Inspired Professional Networking Platform',
    category: 'Frontend Web Application',
    status: 'Completed',
    why: {
      headline: 'Fresh graduates needed a localized networking platform',
      body: 'Indonesian students and fresh graduates often find LinkedIn overwhelming or inaccessible. Jobliker was built as a focused professional networking space — simpler, faster, and designed around the needs of early-career professionals in the Indonesian market.'
    },
    how: {
      headline: 'React component-based architecture with REST API integration',
      body: 'Built with React 18 using functional components and hooks (useState, useEffect, useContext). I implemented client-side routing with React Router, managed global state for authentication flow, and structured the codebase with reusable UI components. Data was fetched via REST API endpoints with async/await and proper error boundary handling.'
    },
    what: {
      headline: 'Social + job platform with profile and connection features',
      features: [
        'User registration, login, and JWT-based authentication',
        'Profile creation with work history and skills',
        'Professional feed with post creation and interactions',
        'Connection requests and network management',
        'Job listing board with application tracking',
        'Responsive layout optimized for mobile users',
        'Search and filter functionality for profiles and jobs'
      ],
      role: 'Frontend Developer — designed and built the full React application and UI component library',
      challenge: 'Building a feed with real-time-feel updates using polling and optimistic UI updates without a WebSocket backend, keeping the UX smooth on slow connections.'
    },
    effect: {
      headline: 'Production-ready SPA with scalable component architecture',
      results: [
        'Full SPA with zero-reload navigation across all routes',
        'Reusable component library applicable to future projects',
        'Mobile-responsive design tested across multiple breakpoints',
        'Clean separation of concerns — UI, state, and API layers'
      ]
    },
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
    why: {
      headline: 'Manual ripeness assessment costs plantation efficiency',
      body: 'Palm oil plantations in Riau province lose significant yield when fruit is harvested at the wrong ripeness stage. Manual visual inspection is slow, inconsistent, and scales poorly. We built Sawit Maju to put a 97%-accurate ripeness classifier in every harvester\'s pocket.'
    },
    how: {
      headline: 'YOLOv11 model integrated into a native Android app',
      body: 'Trained a YOLOv11 object detection model on a custom dataset of palm oil fruit images across ripeness classes. The model was exported and integrated into a native Android application built in Kotlin, using the phone\'s camera feed as real-time input. Inference runs on-device — no internet connection required in field conditions.'
    },
    what: {
      headline: 'Real-time camera-based ripeness classification',
      features: [
        'Real-time camera inference using YOLOv11 (on-device)',
        'Multi-class ripeness classification with confidence scores',
        'Visual bounding box overlay on detected fruit clusters',
        'Scan history log with timestamp and classification result',
        'Offline-first architecture — works without internet',
        'Clean, field-worker-friendly UI with large touch targets'
      ],
      role: 'Android Developer & ML Integration — built the Kotlin app, handled model export and integration, designed the UI/UX',
      challenge: 'Optimizing model inference speed on mid-range Android devices without accuracy degradation, and handling varying lighting conditions in outdoor plantation environments.'
    },
    effect: {
      headline: '97% detection accuracy — ready for field deployment',
      results: [
        '97% detection accuracy on test dataset',
        'Sub-2 second inference latency on mid-range Android devices',
        'Fully offline — functional in plantation environments with no signal',
        'Addresses a real operational pain point for Riau palm oil producers'
      ]
    },
    stack: ['Kotlin', 'Android', 'YOLOv11', 'Python', 'TensorFlow Lite', 'OpenCV'],
    color: '#10b981',
    github: 'https://github.com/JNSStudioProject',
    featured: true
  }
];
