import playNest from '@/assets/playnest.png';
import tileGallery from '@/assets/tilecraft.png';
import dragonNews from '@/assets/dragonnews.png';
import digiTools from '@/assets/digitools.png';
import keenKeeper from '@/assets/kinekeepr.png';
import bibliodrop from '@/assets/bibliodrop.png';
import voyageAI from '@/assets/voyageAI.png';
import recipeHub from '@/assets/recipeHub.png';

const projects = [
  {
    slug: 'bibliodrop',
    title: 'BiblioDrop',
    heroHeadline: 'Your Favorite Books, Delivered Luxury to You.',
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
    techOverview: {
      Frontend: 'Next.js, Tailwind CSS, Framer Motion',
      Backend: 'Node.js, Express',
      Database: 'MongoDB',
      Auth: 'BetterAuth, JWT',
      Payment: 'Stripe',
    },
    architecture:
      'BiblioDrop uses a modern decoupled architecture with a Next.js client for optimized delivery and a Node.js Express server to handle complex business logic, transactions, and role management. MongoDB serves as the flexible schema data store, allowing easy catalog updates and dynamic order schemas. State and sessions are secured using JWT-based BetterAuth.',
    systemWorkflow: [
      'User browses library catalog and adds selections to cart',
      'Checkout triggers Stripe payment intent and verifies transaction',
      'Order is securely recorded; status updates dispatch notifications',
      'Librarian fulfills order, triggering real-time delivery tracking',
    ],
    tags: ['Next.js', 'MongoDB', 'BetterAuth', 'JWT', 'Stripe', 'RoleBasedAuth'],
    categories: ['Next.js', 'Full-Stack'],
    image: bibliodrop,
    liveLink: 'https://bibliodrop-client-nu.vercel.app',
    repoLink: 'https://github.com/MHJony1/bibliodrop-client',
    frontendRepo: 'https://github.com/MHJony1/bibliodrop-client',
    backendRepo: 'https://github.com/MHJony1/bibliodrop-server',
  },
  {
    slug: 'voyageai',
    title: 'VoyageAI',
    subtitle: 'Plan Smarter. Travel Better.',
    description:
      'AI-powered travel planning platform that turns "where should I go?" into a fully personalized itinerary in seconds. Combines curated destination discovery with generative AI for seamless trip planning.',
    fullDescription:
      'VoyageAI leverages cutting-edge artificial intelligence to revolutionize travel planning. By taking user preferences, budget, and travel style as inputs, the system generates custom, day-by-day itineraries. Users can browse curated destinations, generate their own trips, and save customized plans. The application merges AI prompt engineering with a beautiful, performant Next.js frontend to deliver an unforgettable user experience.',
    features: [
      'AI-driven custom itinerary generation based on user preferences and constraints',
      'Curated destination discovery with high-quality visual exploration',
      'User dashboard to save, edit, and manage generated travel plans',
      'Secure authentication and personalized user profile management',
    ],
    techOverview: {
      Frontend: 'Next.js, TypeScript, Tailwind CSS',
      Backend: 'Node.js, Express',
      Database: 'MongoDB',
      AI: 'Gemini Integration (Google Gemini API)',
    },
    architecture:
      'The platform is architected around a robust Next.js frontend with TypeScript for type safety and component reliability. The backend operates on Node.js/Express, orchestrating requests between the client, the database, and the external Gemini AI generation APIs. A carefully crafted prompt pipeline ensures the AI output is structured properly for the UI to consume.',
    systemWorkflow: [
      'User inputs constraints (budget, dates, preferences) into the wizard',
      'Backend constructs optimized prompt and queries AI model',
      'Structured JSON response is validated and stored in MongoDB',
      'Frontend renders the itinerary dynamically with interactive maps/details',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Next.js', 'Full-Stack', 'AI'],
    image: voyageAI,
    liveLink: 'https://voyageai-topaz.vercel.app',
    repoLink: 'https://github.com/MHJony1/VoyageAI-client',
    frontendRepo: 'https://github.com/MHJony1/VoyageAI-client',
    backendRepo: 'https://github.com/MHJony1/VoyageAI-server',
  },
  {
    slug: 'recipehub',
    title: 'RecipeHub',
    subtitle: 'Discover, Cook, Share — Recipes from a Vibrant Food Community',
    description:
      'A full-stack recipe discovery and sharing platform where users can browse, search, filter, and manage recipes. Built with a premium, editorial-inspired design system.',
    fullDescription:
      'RecipeHub is a community-driven culinary platform designed for food enthusiasts to discover, submit, and share recipes. With advanced filtering capabilities, an editorial-inspired UI, and rich interactions, the platform makes cooking accessible and visually inspiring. Users can bookmark their favorite recipes, leave reviews, and engage in a broader culinary community.',
    features: [
      'Advanced recipe filtering by cuisine, difficulty, and dietary restrictions',
      'User-submitted recipe workflows with rich text and image support',
      'Interactive bookmarking and rating system for community engagement',
      'Full CRUD operations tied to user accounts with secure backend validation',
    ],
    techOverview: {
      Frontend: 'Next.js, TypeScript, Framer Motion',
      Backend: 'Node.js, Express',
      Database: 'MongoDB',
    },
    architecture:
      'RecipeHub utilizes a classic MERN-inspired stack optimized for Next.js. The frontend handles complex state management for filtering and search, communicating with a RESTful Node/Express API. MongoDB provides the flexible document structure needed for highly variable recipe ingredients and metadata.',
    systemWorkflow: [
      'User performs a multi-faceted search (e.g., "Vegan, Under 30 mins")',
      'API dynamically queries MongoDB using aggregation pipelines',
      'Results are hydrated with high-resolution assets and sent to client',
      'User saves recipe, updating their personal saved document references',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Next.js', 'Full-Stack'],
    image: recipeHub,
    liveLink: 'https://recipe-hub-client-seven.vercel.app/',
    repoLink: 'https://github.com/MHJony1/RecipeHub-Client',
    frontendRepo: 'https://github.com/MHJony1/RecipeHub-Client',
    backendRepo: 'https://github.com/MHJony1/RecipeHub-Server',
  },
  {
    slug: 'playnest',
    title: 'PlayNest / SportNest',
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
    techOverview: {
      Frontend: 'Next.js, Tailwind CSS',
      Backend: 'Node.js, Express',
      Database: 'MongoDB',
      Auth: 'BetterAuth, JWT',
    },
    architecture:
      'Built as a full-stack Next.js application, PlayNest ensures fast page loads and seamless navigation. The backend strictly handles inventory management (slot availability) utilizing MongoDB transactions to prevent double-booking. Security is enforced via JWT session tokens validated on every sensitive request.',
    systemWorkflow: [
      'User queries date and location for available sports arenas',
      'System filters slots and calculates dynamic pricing',
      'User locks a slot (temporary hold) during the checkout flow',
      'Upon confirmation, database transactions finalize the booking and send receipts',
    ],
    tags: ['Next.js', 'MongoDB', 'BetterAuth', 'JWT'],
    categories: ['Next.js', 'Full-Stack'],
    image: playNest,
    liveLink: 'https://a-9-sport-nest-project.vercel.app',
    repoLink: 'https://github.com/MHJony1/A-9-SportNest-Project',
    frontendRepo: 'https://github.com/MHJony1/A-9-SportNest-Project',
    backendRepo: 'https://github.com/MHJony1/A-9-SportNest-server',
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
    techOverview: {
      Frontend: 'Next.js, HeroUI, Framer Motion',
      Database: 'MongoDB',
      Auth: 'BetterAuth',
    },
    architecture:
      'Focused heavily on presentation, Tilecraft utilizes Server Components in Next.js to deliver fast initial loads for heavy image assets. The client layer enhances this with Framer Motion for smooth, native-feeling interactions. Authentication and CMS capabilities are integrated seamlessly via BetterAuth.',
    systemWorkflow: [
      'Next.js Server Components fetch initial catalog data from MongoDB',
      'Client hydration initializes Framer Motion interactive layers',
      'Admin user authenticates via BetterAuth token',
      'Authorized requests allow visual CRUD operations on the gallery data',
    ],
    tags: ['Next.js', 'Framer Motion', 'BetterAuth', 'MongoDB'],
    categories: ['Next.js', 'Full-Stack'],
    image: tileGallery,
    liveLink: 'https://a-8-tiles-gallery-project.vercel.app/',
    repoLink: 'https://github.com/MHJony1?tab=repositories',
    frontendRepo: 'https://github.com/MHJony1/A-8-Tiles-Gallery-Project',
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
    techOverview: {
      Frontend: 'Next.js, Tailwind CSS',
      Backend: 'Firebase, Vercel Serverless',
      Auth: 'Firebase Auth',
    },
    architecture:
      'The platform leverages Next.js Incremental Static Regeneration (ISR) to cache articles at the edge, ensuring lightning-fast load times for readers while allowing editors to push updates in near real-time. Firebase provides the backend infrastructure for seamless, scalable authentication and data storage.',
    systemWorkflow: [
      'Editors publish new content via the secured CMS dashboard',
      'Next.js triggers background regeneration for updated category pages',
      'Readers authenticate via Firebase social providers to save preferences',
      'Personalized feed fetches bookmarked and category-specific articles',
    ],
    tags: ['Next.js', 'Tailwind', 'Firebase', 'Vercel'],
    categories: ['Next.js'],
    image: dragonNews,
    liveLink: 'https://the-dragon-news-project-alpha.vercel.app/category/01',
    repoLink: 'https://github.com/MHJony1/The-Dragon-News-Project',
    frontendRepo: 'https://github.com/MHJony1/The-Dragon-News-Project',
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
    techOverview: {
      Frontend: 'React, Tailwind CSS',
      Backend: 'Firebase Realtime Database',
      Auth: 'Firebase Auth',
    },
    architecture:
      'KeenKeeper is a single-page application (SPA) built with React. It relies entirely on Firebase for its backend services (Auth, Database, Hosting) to provide a real-time, zero-latency feel when updating contacts and reminders.',
    systemWorkflow: [
      'User logs in and client establishes real-time websocket connection',
      'Contact lists are synced instantly across active sessions',
      'User triggers a reminder; data updates propagate globally',
    ],
    tags: ['React', 'Firebase', 'Netlify'],
    categories: ['React'],
    image: keenKeeper,
    liveLink: 'https://a-7-keen-keeper-project.netlify.app/',
    repoLink: 'https://github.com/MHJony1/A-7-Keen-Keeper',
    frontendRepo: 'https://github.com/MHJony1/A-7-Keen-Keeper',
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
    techOverview: {
      Frontend: 'React, Vanilla CSS, Context API',
      Backend: 'RESTful Mock APIs (JSON Server)',
    },
    architecture:
      'A foundational React application utilizing the Context API for state management. It focuses on core frontend principles, offering clean UI components, straightforward data fetching patterns, and a robust cart management system.',
    systemWorkflow: [
      'Products are fetched asynchronously on initial mount',
      'Context API manages complex cart state globally',
      'Checkout flow mimics standard e-commerce transaction validation',
    ],
    tags: ['React', 'JavaScript', 'Netlify'],
    categories: ['React'],
    image: digiTools,
    liveLink: 'https://digitools-platfrom-12.netlify.app/',
    repoLink: 'https://github.com/MHJony1/A-6-DigiTools-Platform',
    frontendRepo: 'https://github.com/MHJony1/A-6-DigiTools-Platform',
  },
];

export default projects;
