import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-900 to-purple-950/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-teal-500/10 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 py-16">
        <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" id="hero-content">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            Available for Freelance & Full-Time Roles
          </div>

          {/* Greeting */}
          <p className="text-gray-400 text-lg md:text-xl mb-3 font-light">
            Hello, I am
          </p>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-6 font-medium tracking-wide">
            {personalInfo.title}
          </h2>

          {/* Location & Summary snippet */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-base md:text-lg mb-8">
            <MapPin size={18} className="text-blue-400" />
            <span>{personalInfo.location}</span>
            <span className="text-slate-600">•</span>
            <span>Cross-Platform Mobile, Web & Desktop</span>
          </div>

          {/* Brief Description */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:scale-105"
            >
              View Selected Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-gray-200 hover:text-white rounded-full font-semibold border border-slate-700 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-blue-200 rounded-full border border-blue-500/30 transition-all duration-200"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">{personalInfo.email}</span>
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 text-gray-300 hover:text-white rounded-full border border-slate-700 transition-all duration-200"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-700/20 hover:bg-blue-700/30 text-blue-300 hover:text-blue-200 rounded-full border border-blue-600/30 transition-all duration-200"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 mb-12">
            {personalInfo.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Phone size={14} className="text-blue-400" />
                <span>{phone}</span>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce mx-auto block text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up #hero-content {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

export default Hero
