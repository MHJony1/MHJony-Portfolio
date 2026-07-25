import playNest from '@/assets/playnest.png';
import tileGallery from '@/assets/tilecraft.png';
import dragonNews from '@/assets/dragonnews.png';
import digiTools from '@/assets/digitools.png';
import keenKeeper from '@/assets/kinekeepr.png';
import bibliodrop from '@/assets/bibliodrop.png';

const projects = [
  {
    slug: 'bibliodrop',
    title: 'BiblioDrop',
    subtitle: 'Online Book Delivery Management System',
    description:
      'A role-based online book delivery platform that connects readers with local libraries, offering seamless book discovery, secure payments, and real-time order tracking.',
    fullDescription:
      'BiblioDrop was built to bridge the gap between readers and local libraries through a modern digital platform. The system handles the complete book delivery lifecycle — from browsing catalogues and placing orders to secure payment processing and real-time delivery tracking. It supports multiple user roles (admin, librarian, reader) with dedicated dashboards and permissions, making library management scalable and efficient.',
    features: [
      'Role-based access control with dedicated dashboards for admins, librarians, and readers',
      'Real-time order tracking with status updates throughout the delivery lifecycle',
      'Secure payment integration via Stripe with encrypted transaction handling',
      'Dynamic book catalogue with search, filter, and recommendation capabilities',
    ],
    tags: [
      'Next.js',
      'MongoDB',
      'BetterAuth',
      'JWT',
      'Stripe',
      'RoleBasedAuth',
    ],
    categories: ['Next.js', 'Full-Stack'],
    image: bibliodrop,
    liveLink: 'https://bibliodrop-client-nu.vercel.app',
    repoLink: 'https://github.com/MHJony1/bibliodrop-client',
  },
  {
    slug: 'playnest',
    title: 'PlayNest',
    subtitle: 'Sports Facility Booking Platform',
    description:
      'Full-stack booking platform for seamless discovery and real-time slot reservation across premium sports arenas. JWT-secured with session-based auth.',
    fullDescription:
      'PlayNest solves the hassle of manually booking sports facilities by providing a centralized platform for discovering arenas, checking real-time availability, and reserving slots instantly. Built with a focus on speed and reliability, it features session-based authentication, dynamic pricing, and an admin panel for venue owners to manage their facilities and bookings.',
    features: [
      'Real-time slot availability with instant reservation confirmation',
      'Session-based JWT authentication for secure, persistent logins',
      'Admin dashboard for venue management, pricing, and booking analytics',
      'Responsive facility discovery with location-based search and filtering',
    ],
    tags: ['Next.js', 'MongoDB', 'BetterAuth', 'JWT'],
    categories: ['Next.js', 'Full-Stack'],
    image: playNest,
    liveLink: 'https://a-9-sport-nest-project.vercel.app',
    repoLink: 'https://github.com/MHJony1/A-9-SportNest-Project',
  },
  {
    slug: 'tilecraft-gallery',
    title: 'Tilecraft Gallery',
    subtitle: 'Architectural Tile Showcase',
    description:
      'Production-grade architectural showcase for premium tile discovery and management. Secure auth layer via BetterAuth with a fluid HeroUI interface.',
    fullDescription:
      'Tilecraft Gallery is a production-grade showcase platform designed for architectural tile discovery. It combines a visually rich browsing experience with a robust backend for managing tile collections, categories, and inventory. The fluid HeroUI interface is powered by Framer Motion animations, while BetterAuth handles secure user sessions and admin-level content management.',
    features: [
      'Immersive tile browsing with smooth Framer Motion transitions and parallax effects',
      'Secure authentication via BetterAuth with admin content management capabilities',
      'Dynamic collection filtering by category, material, finish, and color',
      'High-resolution image galleries with optimized loading and lazy rendering',
    ],
    tags: ['Next.js', 'Framer Motion', 'BetterAuth', 'MongoDB'],
    categories: ['Next.js', 'Full-Stack'],
    image: tileGallery,
    liveLink: 'https://a-8-tiles-gallery-project.vercel.app/',
    repoLink: 'https://github.com/MHJony1?tab=repositories',
  },
  {
    slug: 'the-dragon-news',
    title: 'The Dragon News',
    subtitle: 'Dynamic News Portal',
    description:
      'High-performance news portal with sophisticated authentication, social login integration, and robust real-time content management architecture.',
    fullDescription:
      'The Dragon News is a high-performance news portal built to handle dynamic content delivery at scale. It features Firebase-powered authentication with social login support, a real-time content management system for editors, and a responsive reader experience optimized for speed. The architecture supports category-based navigation, article bookmarking, and personalized content feeds.',
    features: [
      'Firebase authentication with Google and GitHub social login integration',
      'Real-time content management for publishing and updating articles dynamically',
      'Category-based navigation with personalized content feed capabilities',
      'Performance-optimized with ISR and edge caching on Vercel',
    ],
    tags: ['Next.js', 'Tailwind', 'Firebase', 'Vercel'],
    categories: ['Next.js'],
    image: dragonNews,
    liveLink: 'https://the-dragon-news-project-alpha.vercel.app/category/01',
    repoLink: 'https://github.com/MHJony1/The-Dragon-News-Project',
  },
  {
    slug: 'keenkeeper',
    title: 'KeenKeeper',
    subtitle: 'Social Relationship Manager',
    description:
      'Your personal shelf of meaningful connections. Browse, tend, and nurture the friendships and relationships that matter most.',
    fullDescription:
      'KeenKeeper is a personal relationship management tool designed to help users maintain and nurture their professional and personal connections. It provides a private, organized space to store contact details, track interaction history, set reminders for follow-ups, and categorize relationships by importance or context. Built with React and Firebase for a seamless, real-time experience.',
    features: [
      'Private contact vault with detailed profiles and interaction history tracking',
      'Smart follow-up reminders to maintain meaningful connections',
      'Categorization system for organizing relationships by context and priority',
      'Firebase-powered real-time sync across devices with secure data storage',
    ],
    tags: ['React', 'Firebase', 'Netlify'],
    categories: ['React'],
    image: keenKeeper,
    liveLink: 'https://a-7-keen-keeper-project.netlify.app/',
    repoLink: 'https://github.com/MHJony1/A-7-Keen-Keeper',
  },
  {
    slug: 'modern-digitools',
    title: 'Modern Digitools',
    subtitle: 'Ecommerce Platform',
    description:
      'Comprehensive digital tools and productivity software platform for developers and creators to browse, purchase, and use powerful utilities.',
    fullDescription:
      'Modern Digitools is an ecommerce platform tailored for developers and creators seeking powerful digital tools and productivity software. The platform features a curated marketplace with detailed product listings, user reviews, and secure checkout. Built with React and vanilla JavaScript, it demonstrates clean architecture and responsive design principles without relying on heavy frameworks.',
    features: [
      'Curated marketplace with detailed product listings, descriptions, and user reviews',
      'Secure checkout flow with cart management and order confirmation',
      'Responsive product browsing with category filtering and search functionality',
      'Lightweight architecture using vanilla JavaScript for optimal performance',
    ],
    tags: ['React', 'JavaScript', 'Netlify'],
    categories: ['React'],
    image: digiTools,
    liveLink: 'https://digitools-platfrom-12.netlify.app/',
    repoLink: 'https://github.com/MHJony1/A-6-DigiTools-Platform',
  },
];

export default projects;
