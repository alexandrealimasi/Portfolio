import { useEffect, useRef } from 'react'
import { workExperience } from '../data/ portfolio'
import { MapPin, Calendar, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null)

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 relative overflow-hidden opacity-0 translate-y-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            My professional journey building impactful mobile and web solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto md:text-right'
              } md:w-1/2`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-auto md:right-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 transform md:translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  {/* Company Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <h4 className="text-xl text-blue-400 font-semibold mb-3">{job.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <ChevronRight size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Let's Connect
            </button>
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

export default Experience