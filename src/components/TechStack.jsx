"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const TechStack = () => {
  const techs = [
    {
      name: "JavaScript",
      icon: "javascript",
      color: "text-blue-400",
      bg: "bg-blue-400/10 group-hover:bg-blue-400/20",
      skills: ["ES6+ Modern Syntax", "DOM Manipulation / API Handling"]
    },
    {
      name: "TypeScript",
      icon: "code_blocks",
      color: "text-rose-400",
      bg: "bg-rose-400/10 group-hover:bg-rose-400/20",
      skills: ["Type Safety System", "Scalable Code Structure"]
    },
    {
      name: "React & Next.js",
      icon: "deployed_code",
      color: "text-blue-400",
      bg: "bg-blue-400/10 group-hover:bg-blue-400/20",
      skills: ["Component-Based Architecture", "State Management (Hooks)"]
    },
    {
      name: "Node.js & Express",
      icon: "terminal",
      color: "text-rose-400",
      bg: "bg-rose-400/10 group-hover:bg-rose-400/20",
      skills: ["Backend API Development", "RESTful API Design"]
    },
    {
      name: "MongoDB & SQL",
      icon: "database",
      color: "text-blue-400",
      bg: "bg-blue-400/10 group-hover:bg-blue-400/20",
      skills: ["NoSQL Database Design", "Data Modeling & Querying"]
    },
    {
      name: "Deployment & DevOps",
      icon: "cloud_upload",
      color: "text-rose-400",
      bg: "bg-rose-400/10 group-hover:bg-rose-400/20",
      skills: ["Vercel / Netlify Hosting", "Git Workflow & CI/CD"]
    },
    {
      name: "HTML5 & Semantic UI",
      icon: "html",
      color: "text-blue-400",
      bg: "bg-blue-400/10 group-hover:bg-blue-400/20",
      skills: ["Structure & Accessibility", "SEO Friendly Markup"]
    },
    {
      name: "Tailwind CSS",
      icon: "style",
      color: "text-rose-400",
      bg: "bg-rose-400/10 group-hover:bg-rose-400/20",
      skills: ["Utility-First Styling", "Responsive & Adaptive Design"]
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[100px] lg:py-[140px] relative overflow-hidden" id="skills">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
        >
          Technical Expertise
        </motion.span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-background leading-tight">
          Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-rose-400">Tech Stack</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {techs.map((tech, i) => (
          <Magnetic key={i} strength={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="glass-card p-8 group transition-all duration-500 hover:border-blue-500/30 cursor-default relative overflow-hidden bg-surface-container-low/40 backdrop-blur-xl rounded-[32px] border border-white/5 h-full flex flex-col"
            >
              {/* Subtle Card Hover Tint */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-600/10' : 'from-rose-500/10'} to-transparent`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${tech.bg} shadow-lg ${i % 2 === 0 ? 'shadow-blue-500/5' : 'shadow-rose-500/5'}`}>
                    <span className={`material-symbols-outlined ${tech.color} text-3xl group-hover:scale-110 transition-all duration-500`}>
                      {tech.icon}
                    </span>
                  </div>
                  <div className="text-[10px] font-black text-on-surface-variant/20 uppercase tracking-widest">
                    0{i + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-on-background mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-rose-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {tech.name}
                </h3>

                <ul className="space-y-3 flex-grow">
                  {tech.skills.map((skill, si) => (
                    <li key={si} className="flex items-start gap-3 text-[13px] text-on-surface-variant/80 group-hover:text-on-background transition-colors">
                      <div className={`w-1 h-1 mt-1.5 rounded-full shrink-0 ${tech.color} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} 
                        style={{ backgroundColor: 'currentColor' }} 
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </section>
  );
};

export default TechStack;