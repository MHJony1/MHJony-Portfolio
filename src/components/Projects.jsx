'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';

import tileGallery from '@/assets/tilecraft.png';
import dragonNews from '@/assets/dragonnews.png';
import digiTools from '@/assets/digitools.png';
import keenKeeper from '@/assets/kinekeepr.png';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = [
    {
      title: 'Tilecraft Gallery',
      description:
        'Tilecraft Gallery is a production-grade architectural showcase engineered for seamless discovery and high-performance management of premium tiles. Built with Next.js and MongoDB, it features a secure authentication layer via BetterAuth and a sophisticated, fluid interface powered by HeroUI.',
      tags: ['Next.js', 'Framer Motion', 'BetterAuth', 'MongoDB'],
      image: tileGallery,
      liveLink: 'https://a-8-tiles-gallery-project.vercel.app/',
      repoLink: 'https://github.com/MHJony1?tab=repositories',
    },
    {
      title: 'The Dragon News',
      description:
        'Dragon News is a high-performance, dynamic news portal engineered to deliver a seamless and scalable content experience. It features a sophisticated secure authentication system with social login integration and a robust architecture for real-time news management.',
      tags: ['Next.js', 'Tailwind', 'Firebase', 'Vercel'],
      image: dragonNews,
      liveLink: 'https://the-dragon-news-project-alpha.vercel.app/category/01',
      repoLink: 'https://github.com/MHJony1/The-Dragon-News-Project',
    },
    {
      title: 'KeenKeeper — Social Media',
      description:
        'Your personal shelf of meaningful connections. A relationship management app to browse, tend, and nurture the friendships that matter most.',
      tags: ['React', 'Firebase', 'Netlify'],
      image: keenKeeper,
      liveLink: 'https://a-7-keen-keeper-project.netlify.app/',
      repoLink: 'https://github.com/MHJony1/A-7-Keen-Keeper',
    },
    {
      title: 'Modern Digitools Ecommerce',
      description:
        'A comprehensive digital tools & productivity software platform. Browse, purchase, and use powerful digital utilities designed for developers and creators.',
      tags: ['React', 'JavaScript', 'Netlify'],
      image: digiTools,
      liveLink: 'https://digitools-platfrom-12.netlify.app/',
      repoLink: 'https://github.com/MHJony1/A-6-DigiTools-Platform',
    },
  ];

  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = allProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-[1400px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[120px] relative overflow-hidden"
      id="projects"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-rose-500/5 blur-[120px] -z-10" />

      <div className="text-center mb-20 projects-title">
        <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[10px]">
          Selected Works
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-on-background">
          Recent <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 projects-grid">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="contents"
          >
            {displayedProjects.map((project, index) => (
              <div key={project.title} className="project-card-wrap h-full">
                <TiltCard className="h-full">
                  <div className="h-[480px] relative rounded-[40px] overflow-hidden group cursor-default shadow-2xl border border-white/5 bg-surface-container-low transition-all duration-500 hover:border-blue-500/30">
                    
                    {/* Animated Border Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-20">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-lg text-[9px] font-bold uppercase text-blue-200/80 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h4>

                      <p className="text-white/60 text-sm line-clamp-2 mb-6 group-hover:text-white/80 transition-all duration-500">
                        {project.description}
                      </p>

                      <div className="flex gap-4">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="bg-gradient-to-r from-blue-600 to-rose-500 text-white px-6 py-3 rounded-2xl font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95"
                        >
                          Live Demo
                          <span className="material-symbols-outlined text-sm">
                            arrow_outward
                          </span>
                        </Link>

                        <Link
                          href={project.repoLink}
                          target="_blank"
                          className="bg-white/5 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold text-[11px] uppercase tracking-wider border border-white/10 hover:bg-white/10 hover:border-rose-500/30 transition-all duration-300 active:scale-95"
                        >
                          GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Placeholder - Logic maintained */}
    </section>
  );
};

export default Projects;