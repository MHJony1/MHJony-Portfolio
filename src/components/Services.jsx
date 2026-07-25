'use client';

import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Full-Stack Solutions',
      description:
        'End-to-end web applications with MERN stack. From secure APIs to fluid interfaces, every layer is engineered for growth.',
      icon: 'layers',
      textColor: 'text-blue-400',
      gradient: 'from-blue-600/20 to-cyan-400/10',
      borderColor: 'group-hover:border-blue-400/30',
      bgHover: 'group-hover:bg-blue-500/10',
      features: [
        'REST APIs',
        'GraphQL',
        'Microservices',
        'JWT Auth',
        'WebSockets',
      ],
    },
    {
      id: '02',
      title: 'Clean Architecture',
      description:
        'Maintainable and scalable code with industry-standard patterns like MVC, hexagonal architecture, and domain-driven design.',
      icon: 'code',
      textColor: 'text-purple-400',
      gradient: 'from-purple-600/20 to-pink-400/10',
      borderColor: 'group-hover:border-purple-400/30',
      bgHover: 'group-hover:bg-purple-500/10',
      features: ['MVC Pattern', 'SOLID', 'DRY', 'Hexagonal', 'DDD'],
    },
    {
      id: '03',
      title: 'Performance First',
      description:
        'Lightning-fast load times and smooth 60fps interactions with code splitting, lazy loading, and advanced caching strategies.',
      icon: 'bolt',
      textColor: 'text-rose-400',
      gradient: 'from-rose-600/20 to-orange-400/10',
      borderColor: 'group-hover:border-rose-400/30',
      bgHover: 'group-hover:bg-rose-500/10',
      features: [
        'Code Splitting',
        'Lazy Loading',
        'Caching',
        'CDN',
        'Optimization',
      ],
    },
    {
      id: '04',
      title: 'Modern UI/UX',
      description:
        'Pixel-perfect React interfaces with fluid animations, responsive design, dark mode, and accessible component libraries.',
      icon: 'palette',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-600/20 to-teal-400/10',
      borderColor: 'group-hover:border-emerald-400/30',
      bgHover: 'group-hover:bg-emerald-500/10',
      features: [
        'Framer Motion',
        'Tailwind',
        'Responsive',
        'Accessible',
        'Dark Mode',
      ],
    },
    {
      id: '05',
      title: 'SEO & Web Vitals',
      description:
        'Optimized for search engines with structured data, meta tags, and performance monitoring. Achieving excellent Core Web Vitals scores.',
      icon: 'search',
      textColor: 'text-amber-400',
      gradient: 'from-amber-600/20 to-yellow-400/10',
      borderColor: 'group-hover:border-amber-400/30',
      bgHover: 'group-hover:bg-amber-500/10',
      features: [
        'Next.js',
        'Meta Tags',
        'Core Web Vitals',
        'Analytics',
        'Structured Data',
      ],
    },
    {
      id: '06',
      title: 'DevOps & Deployment',
      description:
        'Streamlined CI/CD pipelines, containerization with Docker, and cloud deployment on AWS, Vercel, or Netlify for seamless delivery.',
      icon: 'cloud',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-600/20 to-blue-400/10',
      borderColor: 'group-hover:border-indigo-400/30',
      bgHover: 'group-hover:bg-indigo-500/10',
      features: ['CI/CD', 'Docker', 'AWS', 'Vercel', 'Netlify'],
    },
  ];

  return (
    <section
      className="max-w-[1200px] mx-auto px-6 py-[100px] lg:py-[140px]"
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-blue-400 font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
          Capabilities
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
          Technical Expertise <br />{' '}
          <span className="text-blue-400">& Services</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className={`group relative bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 ${service.borderColor} transition-all duration-400 hover:-translate-y-1 flex flex-col overflow-hidden`}
          >
            {/* Hover Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Top: Number (left) and Icon (right) */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors`}
                >
                  {service.id}
                </span>
                <div
                  className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${service.bgHover} ${service.borderColor}`}
                >
                  <span
                    className={`material-symbols-outlined text-xl ${service.textColor} transition-colors`}
                  >
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-lg font-bold text-white mb-2 group-hover:${service.textColor} transition-colors`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400/70 text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <span
                    key={idx}
                    className={`text-[9px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400/60 group-hover:border-white/20 group-hover:${service.textColor} transition-all`}
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 4 && (
                  <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-400/30">
                    +{service.features.length - 4}
                  </span>
                )}
              </div>

              {/* Bottom: Service Label (left) and Arrow (right) */}
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-white/5">
                <span
                  className={`text-[10px] font-black uppercase tracking-[0.2em] ${service.textColor}/30 group-hover:${service.textColor}/60 transition-colors`}
                >
                  Service {service.id}
                </span>
                <div
                  className={`w-7 h-7 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${service.bgHover} ${service.borderColor}`}
                >
                  <span className="material-symbols-outlined text-xs text-white/60 group-hover:text-white transition-colors">
                    arrow_outward
                  </span>
                </div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[100%] group-hover:left-[100%] transition-all duration-[1.2s]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
