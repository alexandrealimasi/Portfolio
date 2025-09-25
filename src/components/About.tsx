import { useEffect, useRef } from 'react'
import { personalInfo, education, languages } from '../data/ portfolio'
import { GraduationCap, Globe } from 'lucide-react'

const About = () => {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 relative overflow-hidden opacity-0 translate-y-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800/50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Full Stack Mobile Developer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {/* Quick Stats */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/20 rounded-full mr-4">
                  <GraduationCap size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-gray-200">{education.degree}</h4>
                <p className="text-blue-400 font-medium">{education.institution}</p>
                <p className="text-gray-400">{education.period}</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  {education.location}
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600/20 rounded-full mr-4">
                  <Globe size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Languages</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I thrive in dynamic environments where innovation and quality drive success. 
                Every project is an opportunity to create something meaningful that makes a real difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default About