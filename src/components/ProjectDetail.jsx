'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Check } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const brandGradient = 'from-[#2563eb] via-[#a855f7] to-[#f43f5e]';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
};

const ProjectDetail = ({ project, imageProps }) => {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      {/* ── Background Effects ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/5 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 blur-[180px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-[140px] pb-24">
        {/* ── Back Link ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0 }}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/40 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-rose-400 hover:bg-clip-text transition-all duration-300 text-sm font-medium mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </motion.div>

        {/* ── Banner Image ── */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/5"
        >
          <Image
            src={imageProps?.src || project.image}
            alt={project.title}
            width={imageProps?.width || 1200}
            height={imageProps?.height || 630}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-rose-500/10" />
        </motion.div>

        {/* ── Title Block ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mb-12">
          <span className="inline-block px-3 py-1 bg-white/[0.05] backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-rose-400 border border-rose-500/20 mb-4">
            {project.subtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
            {project.title}
          </h1>
          <p className="text-white/40 text-lg mt-4 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-wrap gap-4 mb-16">
          <Link
            href={project.liveLink}
            target="_blank"
            className={`inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-rose-500 text-white px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-xl shadow-blue-500/20 hover:scale-[1.03] active:scale-95 transition-all duration-300`}
          >
            <ExternalLink className="w-4 h-4" />
            View Live Demo
          </Link>
          <Link
            href={project.repoLink}
            target="_blank"
            className="inline-flex items-center gap-2.5 bg-white/[0.05] backdrop-blur-xl text-white/60 px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide border border-white/10 hover:bg-white/[0.08] hover:text-white hover:border-white/15 transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4" />
            View GitHub Repo
          </Link>
        </motion.div>

        {/* ── Tech Stack ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }} className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-5">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/[0.04] text-white/60 rounded-full text-xs font-semibold tracking-wide border border-white/8 hover:bg-white/[0.08] hover:text-white/80 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Full Description ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-5">
            About This Project
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-[1.8] max-w-3xl">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* ── Key Features ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.45 }}>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-5">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-3 p-5 rounded-xl bg-[#0d121f]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/20 to-rose-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/20 text-sm">
            Interested in this project?
          </p>
          <div className="flex gap-4">
            <Link
              href={project.liveLink}
              target="_blank"
              className={`inline-flex items-center gap-2 bg-gradient-to-r ${brandGradient} text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] active:scale-[0.97] transition-all duration-300`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </Link>
            <Link
              href={project.repoLink}
              target="_blank"
              className="inline-flex items-center gap-2 bg-white/[0.03] text-white/40 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/5 hover:bg-white/[0.06] hover:text-white transition-all duration-300"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source Code
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
