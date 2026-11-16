import { personalInfo } from '../data/portfolio'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-blue-400 font-medium text-sm mb-4">
              {personalInfo.title}
            </p>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-xl">
              Specialized in Flutter, React Native, React.js, Vue.js, Node.js, NestJS, Python/Flask, and Electron desktop applications. Delivering scalable software that solves real-world challenges.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links & Navigation */}
          <div className="space-y-6">
            {/* Social Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-3">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="p-3 bg-slate-800/80 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-200 hover:scale-110 transform border border-slate-700/60"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Back to Top */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm flex items-center gap-2 group"
              >
                <span>Back to Top</span>
                <div className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center group-hover:border-blue-300 transition-colors">
                  <div className="w-2 h-2 border-t-2 border-r-2 border-blue-400 transform rotate-[-45deg] group-hover:border-blue-300 transition-colors"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            </div>
            
            <div className="text-gray-400 text-xs">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-medium">Available for new projects & full-stack roles</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
