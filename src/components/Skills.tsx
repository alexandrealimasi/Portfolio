import { useEffect, useRef } from 'react'
import { skills } from '../data/ portfolio'
import { Smartphone, Globe, Server, Wrench } from 'lucide-react'

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null)

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: skills.mobile,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-600/10 to-cyan-600/10',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: skills.frontend,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-600/10 to-pink-600/10',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: skills.backend,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-600/10 to-teal-600/10',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-600/10 to-red-600/10',
      borderColor: 'border-orange-500/30'
    }
  ]

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 relative overflow-hidden opacity-0 translate-y-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800/50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${category.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-full mr-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                    >
                      <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-200 group-hover/skill:bg-slate-800/50">
                        <span className="text-gray-200 font-medium group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                        
                        {/* Skill Level Indicator */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < Math.floor(Math.random() * 2) + 3
                                  ? `bg-gradient-to-r ${category.color}`
                                  : 'bg-slate-600'
                              }`}
                              style={{ transitionDelay: `${i * 50}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">Proficiency</span>
                    <span className="text-gray-300 text-sm">Expert</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${85 + Math.floor(Math.random() * 15)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Technology is constantly evolving, and I'm passionate about staying current with the latest developments. 
              I regularly explore new frameworks, tools, and best practices to deliver cutting-edge solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
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

export default Skills