import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '../data/ portfolio'

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

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-500/10 rounded-full blur-xl animate-pulse animation-delay-4000"></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" id="hero-content">
          {/* Greeting */}
          <p className="text-blue-400 text-lg md:text-xl mb-4 font-light">
            Hello, I'm
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light">
            {personalInfo.title}
          </h2>

          {/* Brief Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating impactful digital products with expertise in mobile and web development.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 hover:scale-105 transform"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors duration-200 hover:scale-105 transform"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors duration-200 hover:scale-105 transform"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce mx-auto block text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      <style >{`
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
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero