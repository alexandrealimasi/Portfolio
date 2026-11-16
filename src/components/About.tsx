import { useEffect, useRef } from 'react'
import { personalInfo, education, languages, interests, training, communityAndEngagement } from '../data/portfolio'
import { GraduationCap, Globe, Award, Users, Sparkles, CheckCircle2 } from 'lucide-react'

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
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Passionate software engineer building resilient mobile, web, and desktop solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Full-Stack & Mobile Software Developer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  {/* Quick Stats */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50">
                    <div className="text-3xl font-bold text-blue-400 mb-1">6+</div>
                    <div className="text-gray-300 text-sm">Years Experience</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-1">4+</div>
                    <div className="text-gray-300 text-sm">Platforms (iOS, Android, Web, Desktop)</div>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50">
                    <div className="text-3xl font-bold text-teal-400 mb-1">100%</div>
                    <div className="text-gray-300 text-sm">Client Satisfaction & Quality</div>
                  </div>
                </div>

                {/* Professional Interests */}
                <div className="mt-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-4 text-white font-semibold text-lg">
                    <Sparkles className="text-yellow-400" size={20} />
                    <h4>Core Professional Interests</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 text-blue-300 rounded-lg text-xs md:text-sm border border-slate-600/50 transition-colors"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education, Languages, & Leadership */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600/20 rounded-full mr-4">
                  <GraduationCap size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-xs text-gray-400">Formal Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-2 border-l-2 border-blue-500/30 pl-4 ml-2">
                <h4 className="text-lg font-medium text-gray-200">{education.degree}</h4>
                <p className="text-blue-400 font-medium">{education.institution}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span>{education.period}</span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Specialized Training */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-yellow-600/20 rounded-full mr-4">
                  <Award size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Specialized Training</h3>
                  <p className="text-xs text-gray-400">Leadership & Social Impact</p>
                </div>
              </div>
              
              {training.map((t, idx) => (
                <div key={idx} className="space-y-1.5 border-l-2 border-yellow-500/30 pl-4 ml-2">
                  <h4 className="text-base font-medium text-gray-200">{t.program} ({t.year})</h4>
                  <p className="text-yellow-400/90 text-sm">{t.organization}</p>
                  <p className="text-gray-400 text-xs">Focus: {t.focus}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-600/20 rounded-full mr-4">
                  <Globe size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Languages</h3>
                  <p className="text-xs text-gray-400">Multilingual Communication</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="p-3 bg-purple-600/10 rounded-xl border border-purple-500/20 text-center"
                  >
                    <div className="font-semibold text-purple-300 text-sm">{lang.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community & Leadership */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-600/20 rounded-full mr-4">
                  <Users size={24} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Community & Leadership</h3>
                  <p className="text-xs text-gray-400">Engagement & Technology Training</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {communityAndEngagement.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">{item.organization}:</span>{' '}
                      <span className="text-gray-300">{item.role}</span>{' '}
                      <span className="text-xs text-teal-400/80">({item.period})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
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
