'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';

import playNest from '@/assets/playnest.png';
import tileGallery from '@/assets/tilecraft.png';
import dragonNews from '@/assets/dragonnews.png';
import digiTools from '@/assets/digitools.png';
import keenKeeper from '@/assets/kinekeepr.png';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const brandGradient = 'from-[#2563eb] via-[#a855f7] to-[#f43f5e]';

  const allProjects = [
    {
      title: 'PlayNest',
      subtitle: 'Sports Facility Booking Platform',
      description:
        'Full-stack booking platform for seamless discovery and real-time slot reservation across premium sports arenas. JWT-secured with session-based auth.',
      tags: ['Next.js', 'MongoDB', 'BetterAuth', 'JWT'],
      image: playNest,
      liveLink: 'https://a-9-sport-nest-project.vercel.app',
      repoLink: 'https://github.com/MHJony1/A-9-SportNest-Project',
    },
    {
      title: 'Tilecraft Gallery',
      subtitle: 'Architectural Tile Showcase',
      description:
        'Production-grade architectural showcase for premium tile discovery and management. Secure auth layer via BetterAuth with a fluid HeroUI interface.',
      tags: ['Next.js', 'Framer Motion', 'BetterAuth', 'MongoDB'],
      image: tileGallery,
      liveLink: 'https://a-8-tiles-gallery-project.vercel.app/',
      repoLink: 'https://github.com/MHJony1?tab=repositories',
    },
    {
      title: 'The Dragon News',
      subtitle: 'Dynamic News Portal',
      description:
        'High-performance news portal with sophisticated authentication, social login integration, and robust real-time content management architecture.',
      tags: ['Next.js', 'Tailwind', 'Firebase', 'Vercel'],
      image: dragonNews,
      liveLink: 'https://the-dragon-news-project-alpha.vercel.app/category/01',
      repoLink: 'https://github.com/MHJony1/The-Dragon-News-Project',
    },
    {
      title: 'KeenKeeper',
      subtitle: 'Social Relationship Manager',
      description:
        'Your personal shelf of meaningful connections. Browse, tend, and nurture the friendships and relationships that matter most.',
      tags: ['React', 'Firebase', 'Netlify'],
      image: keenKeeper,
      liveLink: 'https://a-7-keen-keeper-project.netlify.app/',
      repoLink: 'https://github.com/MHJony1/A-7-Keen-Keeper',
    },
    {
      title: 'Modern Digitools',
      subtitle: 'Ecommerce Platform',
      description:
        'Comprehensive digital tools and productivity software platform for developers and creators to browse, purchase, and use powerful utilities.',
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
      className="max-w-360 mx-auto px-4 sm:px-8 md:px-12 py-20 sm:py-25 relative overflow-hidden"
      id="projects"
    >
      {/* Background Decorative Theme Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-rose-500/5 blur-[120px] -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16 projects-title">
        <span
          className={`bg-linear-to-r ${brandGradient} bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[13px]`}
        >
          Selected Works
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white tracking-tight">
          Recent{' '}
          <span
            className={`bg-linear-to-r ${brandGradient} bg-clip-text text-transparent`}
          >
            Projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-335 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="contents"
          >
            {displayedProjects.map((project, index) => (
              <div key={project.title} className="project-card-wrap h-full">
                <TiltCard className="h-full">
                  <div className="flex flex-col h-full rounded-[22px] overflow-hidden group cursor-default border border-white/5 bg-[#0d121f]/50 backdrop-blur-md transition-all duration-500 hover:border-rose-500/20 hover:shadow-2xl hover:shadow-rose-950/10">
                    {/* ── Image Section ── */}
                    <div className="relative w-full overflow-hidden aspect-video">
                      <div
                        className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${brandGradient} z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        priority={index < 2}
                      />

                      <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/40 z-10" />

                      {/* Live Badge */}
                      <div className="absolute top-3.5 right-3.5 z-20">
                        <span className="flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-wider text-white/90 border border-white/10">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      </div>
                    </div>

                    {/* ── Content Section ── */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                          {project.tags.slice(0, 4).map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2.5 py-0.5 bg-white/5 rounded-md text-[8px] font-semibold uppercase tracking-wider text-white/50 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-2.5">
                          <h4 className="text-md sm:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#2563eb] group-hover:to-[#f43f5e] group-hover:bg-clip-text transition-all duration-300">
                            {project.title}
                          </h4>
                          <p className="text-white/30 text-[9px] font-medium uppercase tracking-wider mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-3 group-hover:text-white/60 transition-colors duration-500">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2.5 pt-1">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className={`flex-1 flex items-center justify-center gap-1.5 bg-linear-to-r ${brandGradient} text-white px-4 py-2 rounded-lg font-bold text-[9px] uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-md active:scale-[0.98]`}
                        >
                          Live Demo
                          <span className="material-symbols-outlined text-xs">
                            arrow_outward
                          </span>
                        </Link>

                        <Link
                          href={project.repoLink}
                          target="_blank"
                          className="flex items-center justify-center gap-1 bg-white/5 backdrop-blur-md text-white/70 px-4 py-2 rounded-lg font-bold text-[9px] uppercase tracking-wider border border-white/5 hover:bg-white/10 hover:text-white hover:border-rose-500/20 transition-all duration-300 active:scale-[0.98]"
                        >
                          <span className="material-symbols-outlined text-xs">
                            code
                          </span>
                          Source
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2.5 relative z-30">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3.5 py-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed active:scale-95 flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-xs">west</span>
            Prev
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xs transition-all duration-300 border ${
                    currentPage === pageNumber
                      ? `bg-linear-to-r ${brandGradient} text-white border-transparent shadow-md scale-105`
                      : 'bg-white/5 backdrop-blur-md text-white/40 border-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3.5 py-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed active:scale-95 flex items-center gap-1"
          >
            Next
            <span className="material-symbols-outlined text-xs">east</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
