'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Check, Server, Layout, Database, Shield, CreditCard, Cpu } from 'lucide-react';

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

const brandGradient = 'from-primary via-purple-500 to-secondary';

const getTechIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'frontend': return <Layout className="w-5 h-5 text-primary" />;
    case 'backend': return <Server className="w-5 h-5 text-purple-400" />;
    case 'database': return <Database className="w-5 h-5 text-emerald-400" />;
    case 'auth': return <Shield className="w-5 h-5 text-secondary" />;
    case 'payment': return <CreditCard className="w-5 h-5 text-amber-400" />;
    case 'ai': return <Cpu className="w-5 h-5 text-cyan-400" />;
    default: return <Check className="w-5 h-5 text-on-surface-variant" />;
  }
};

const ProjectDetail = ({ project, imageProps }) => {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans pb-24 overflow-hidden relative">
      {/* ── Background Effects ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 blur-[180px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        {/* ── Back Link ── */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0 }}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-semibold tracking-wide mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Showcase
          </Link>
        </motion.div>

        {/* ── Hero Section ── */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="inline-block px-4 py-1.5 glass-card rounded-full text-[11px] font-bold uppercase tracking-[0.3em] text-primary border-primary/20 mb-6">
              {project.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 font-heading text-on-background">
              {project.heroHeadline || project.title}
            </h1>
            <p className="text-on-surface-variant text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href={project.liveLink}
              target="_blank"
              className={`inline-flex items-center gap-2.5 bg-gradient-to-r ${brandGradient} text-white px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-xl shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all duration-300`}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Link>
            
            {project.frontendRepo && (
              <Link
                href={project.frontendRepo}
                target="_blank"
                className="inline-flex items-center gap-2.5 glass-card text-on-surface px-8 py-3.5 rounded-2xl font-semibold text-sm tracking-wide hover:bg-surface-container-high hover:border-outline-variant/30 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                {project.backendRepo ? 'Frontend Repo' : 'View Repo'}
              </Link>
            )}

            {project.backendRepo && (
              <Link
                href={project.backendRepo}
                target="_blank"
                className="inline-flex items-center gap-2.5 glass-card text-on-surface px-8 py-3.5 rounded-2xl font-semibold text-sm tracking-wide hover:bg-surface-container-high hover:border-outline-variant/30 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                Backend Repo
              </Link>
            )}

            {!project.frontendRepo && project.repoLink && (
              <Link
                href={project.repoLink}
                target="_blank"
                className="inline-flex items-center gap-2.5 glass-card text-on-surface px-8 py-3.5 rounded-2xl font-semibold text-sm tracking-wide hover:bg-surface-container-high hover:border-outline-variant/30 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                View Repo
              </Link>
            )}
          </motion.div>
        </div>

        {/* ── Mockup Container ── */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] sm:rounded-[32px] overflow-hidden mb-24 glass-card p-2"
        >
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[24px] overflow-hidden">
            <Image
              src={imageProps?.src || project.image}
              alt={project.title}
              width={imageProps?.width || 1400}
              height={imageProps?.height || 700}
              className="object-cover object-center w-full h-full"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
          </div>
        </motion.div>

        {/* ── Project Details Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-12">
            <motion.div {...fadeUp}>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary/50"></span>
                About {project.title}
              </h2>
              <p className="text-on-surface text-lg leading-[1.8]">
                {project.fullDescription || project.description}
              </p>
            </motion.div>

            {/* Key Features (2-column layout) */}
            {project.features && (
              <motion.div {...fadeUp}>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary/50"></span>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      {...stagger}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-5 glass-card glow-hover"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-on-surface text-sm leading-relaxed pt-1.5">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar: Tech Stack & Architecture */}
          <div className="lg:col-span-5 space-y-8">
            {/* Tech Stack Overview */}
            <motion.div {...fadeUp}>
              <div className="p-8 glass-card">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">
                  Tech Stack
                </h3>
                
                {project.techOverview ? (
                  <div className="space-y-4">
                    {Object.entries(project.techOverview).map(([category, tech]) => (
                      <div key={category} className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-surface-container-high transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/10 group-hover:border-primary/30 flex items-center justify-center transition-colors">
                          {getTechIcon(category)}
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                            {category}
                          </h4>
                          <p className="text-sm font-semibold text-on-surface">{tech}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-surface-container-high text-on-surface rounded-full text-xs font-semibold tracking-wide border border-outline-variant/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Architecture Summary */}
            {project.architecture && (
              <motion.div {...fadeUp}>
                 <div className="p-8 glass-card">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
                    Architecture
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-[1.8]">
                    {project.architecture}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* ── System Workflow Timeline ── */}
        {project.systemWorkflow && (
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-12 text-center flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-primary/50"></span>
              System Workflow
              <span className="w-12 h-[1px] bg-primary/50"></span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto px-4">
              {/* Glowing Timeline Line */}
              <div className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-purple-500/50 to-transparent sm:-translate-x-1/2 rounded-full" />
              
              <div className="space-y-8">
                {project.systemWorkflow.map((step, index) => (
                  <div key={index} className="relative flex items-start sm:items-center sm:justify-between sm:even:flex-row-reverse group">
                    {/* Node Marker */}
                    <div className="absolute left-[24px] sm:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary -translate-x-0 sm:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                       <span className="text-[10px] font-bold text-primary group-hover:text-white transition-colors">{index + 1}</span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="ml-20 sm:ml-0 sm:w-[calc(50%-3rem)] p-6 glass-card glow-hover">
                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Step 0{index + 1}</div>
                      <p className="text-on-surface text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Bottom CTA ── */}
        <motion.div
          {...fadeUp}
          className="py-16 glass-card flex flex-col items-center text-center gap-6"
        >
          <div>
            <h3 className="text-on-background font-heading font-bold text-2xl mb-2">Interested in this project?</h3>
            <p className="text-on-surface-variant text-base">Explore the live demo or deep dive into the codebase.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={project.liveLink}
              target="_blank"
              className={`inline-flex items-center gap-2.5 bg-gradient-to-r ${brandGradient} text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all duration-300`}
            >
              <ExternalLink className="w-4 h-4" />
              Launch Live App
            </Link>
            
            {project.frontendRepo ? (
               <Link
               href={project.frontendRepo}
               target="_blank"
               className="inline-flex items-center gap-2.5 bg-surface-container-high text-on-surface px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300"
             >
               <GithubIcon className="w-4 h-4" />
               Frontend Source
             </Link>
            ) : project.repoLink && (
              <Link
                href={project.repoLink}
                target="_blank"
                className="inline-flex items-center gap-2.5 bg-surface-container-high text-on-surface px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                View Source Code
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

