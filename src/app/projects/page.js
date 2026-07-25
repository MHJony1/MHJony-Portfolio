'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TiltCard from '@/components/TiltCard';
import projects from '@/data/projects';

const ProjectsPage = () => {
  const router = useRouter();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Next.js', 'React', 'Full-Stack'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-[140px] pb-20 max-w-[1400px] mx-auto px-6">
        <header className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <span className="material-symbols-outlined text-sm">west</span>
            Back to Home
          </Link>
          <h1 className="text-h1 mb-6">
            Archive & <span className="text-primary">Masterpieces</span>
          </h1>
          <p className="text-on-surface-variant/70 max-w-2xl text-lg leading-relaxed">
            An extensive collection of my digital explorations, client projects,
            and full-stack applications.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="h-full">
                <div
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  className="block h-full cursor-pointer"
                >
                  <div className="group bg-surface-container-low border border-outline-variant/10 rounded-[32px] overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-highest">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized={typeof project.image === 'string'}
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
                      {project.categories[0]}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-wider text-primary"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-6 flex gap-4 border-t border-outline-variant/5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        Live Demo{' '}
                        <span className="material-symbols-outlined text-sm">
                          arrow_outward
                        </span>
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        Source{' '}
                        <span className="material-symbols-outlined text-sm">
                          code
                        </span>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectsPage;