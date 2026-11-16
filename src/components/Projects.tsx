import { useEffect, useRef } from 'react'
import { projects } from '../data/portfolio'
import { Github, Laptop, Smartphone, Server, ShoppingCart, Layers } from 'lucide-react'

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null)

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Desktop':
        return <Laptop size={20} className="text-blue-400" />
      case 'Mobile':
        return <Smartphone size={20} className="text-emerald-400" />
      case 'Web & SaaS':
        return <ShoppingCart size={20} className="text-purple-400" />
      case 'Backend':
        return <Server size={20} className="text-amber-400" />
      default:
        return <Layers size={20} className="text-blue-400" />
    }
  }

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Desktop':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/20'
      case 'Mobile':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
      case 'Web & SaaS':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20'
      case 'Backend':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20'
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/20'
    }
  }

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 relative overflow-hidden opacity-0 translate-y-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800/50"></div>
      <div className="absolute top-20 right-10 w-44 h-44 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-52 h-52 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Selected software solutions highlighting desktop tooling, offline-first mobile apps, SaaS platforms, and backend systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header with category and links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryBadgeClass(project.category)}`}>
                      {project.category}
                    </span>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                      aria-label="View Source on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-purple-300/90 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-900/60 text-blue-300 rounded-md text-xs font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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

export default Projects
