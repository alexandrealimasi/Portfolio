import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolio'
import { Smartphone, Globe, Server, Monitor, Database, CheckCircle, Code } from 'lucide-react'

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
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-600/10 to-teal-600/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      title: 'Desktop Development',
      icon: Monitor,
      skills: skills.desktop,
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'from-indigo-600/10 to-violet-600/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: skills.database,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-600/10 to-orange-600/10',
      borderColor: 'border-amber-500/30'
    },
    {
      title: 'Core Competencies',
      icon: CheckCircle,
      skills: skills.competencies,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-600/10 to-cyan-600/10',
      borderColor: 'border-teal-500/30'
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive technology stack across cross-platform mobile, frontend, backend services, desktop, and database systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-2xl p-7 border ${category.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform group flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center mb-5">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-black/20`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-slate-800/70 text-gray-200 rounded-lg text-xs md:text-sm border border-slate-700/60 font-medium group-hover:border-slate-500/60 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/40 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Code size={14} className="text-teal-400" />
                    Production Ready
                  </span>
                  <span className="font-semibold text-teal-300">Active Stack</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Architecture Banner */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Architecture, Optimization & Clean Code
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Committed to building scalable software, designing well-structured REST APIs, managing robust databases, and creating intuitive user experiences that solve real business problems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-700/40">
                <div className="text-2xl font-bold text-blue-400 mb-1">Flutter & RN</div>
                <div className="text-gray-400 text-xs">Cross-Platform Mobile</div>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-700/40">
                <div className="text-2xl font-bold text-purple-400 mb-1">React & Vue</div>
                <div className="text-gray-400 text-xs">Modern Web Frontend</div>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-700/40">
                <div className="text-2xl font-bold text-emerald-400 mb-1">Node & Python</div>
                <div className="text-gray-400 text-xs">Resilient Backend Services</div>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-700/40">
                <div className="text-2xl font-bold text-amber-400 mb-1">Electron</div>
                <div className="text-gray-400 text-xs">Desktop Engineering</div>
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

export default Skills
